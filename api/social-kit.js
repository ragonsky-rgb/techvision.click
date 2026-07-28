// Vercel Edge Function — TechVision Social Kit
// Đọc 1 bài trên techvision.click và sinh bản nháp đăng X / Threads / Facebook / TikTok / YouTube.
// GET /api/social-kit?slug=<slug>   (Groq server-side, key trong env GROQ_API_KEY - dùng chung với chatbot)
export const config = { runtime: 'edge' };

const MODEL = 'llama-3.3-70b-versatile';
const ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';
const SITE = 'https://techvision.click';

function strip(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ').trim();
}

const json = (obj, status = 200, cache) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      // Kit theo slug được cache ở edge 24h: nhiều người bấm cùng 1 bài chỉ tốn 1 lần gọi AI
      'Cache-Control': cache || 'no-store',
    },
  });

export default async function handler(req) {
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: { 'Access-Control-Allow-Origin': '*' } });

  const key = (process.env.GROQ_API_KEY || '').trim();
  if (!key) return json({ error: 'Chưa cấu hình GROQ_API_KEY' }, 500);

  const u = new URL(req.url);
  const slug = String(u.searchParams.get('slug') || '').replace(/[^a-z0-9-]/g, '');
  if (!slug) return json({ error: 'Thiếu slug bài viết' }, 400);

  try {
    const url = SITE + '/articles/' + slug + '.html';
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 12000);
    const pr = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TechVision-SocialKit/1.0; +https://techvision.click)' },
      signal: ctrl.signal,
      redirect: 'follow',
    }).finally(() => clearTimeout(timer));
    if (!pr.ok) return json({ error: 'Không tải được bài viết (' + pr.status + ')' }, 404);
    const html = (await pr.text()).slice(0, 400000);

    const title = strip(
      (html.match(/property="og:title"\s+content="([^"]*)"/) || [])[1] ||
      (html.match(/<title>([^<]*)<\/title>/) || [])[1] || slug
    );
    const desc = strip(
      (html.match(/name="description"\s+content="([^"]*)"/) || [])[1] ||
      (html.match(/property="og:description"\s+content="([^"]*)"/) || [])[1] || ''
    );
    const tldr = (html.match(/class="art-tldr"[^>]*>([\s\S]*?)<\/div>/) || [])[1] || '';
    let bodyStart = html.search(/<article[\s>]/);
    if (bodyStart < 0) bodyStart = html.search(/<main[\s>]/);
    if (bodyStart < 0) bodyStart = Math.max(0, html.search(/<body[\s>]/));
    const bodyText = strip(html.slice(bodyStart, bodyStart + 22000)).slice(0, 5000);

    const sys = `Bạn là social media manager của TechVision (techvision.click - trang tin công nghệ tiếng Việt của creator LongTechVision: AI, smartphone, laptop, gaming). Nhiệm vụ: đọc tóm tắt bài viết và soạn bản nháp đăng cho 5 nền tảng, TIẾNG VIỆT thuần, giọng creator công nghệ gần gũi, có chính kiến, không giật tít rẻ tiền, không bịa số liệu ngoài bài. KHÔNG dùng em-dash (dùng " - "). Mỗi nền tảng viết đúng khẩu vị nền tảng đó, không copy chéo. Luôn gài link bài viết. Trả về DUY NHẤT một JSON object đúng schema:
{"x":{"post":"1 post <=260 ky tu, hook manh + 1 so lieu dat gia + link","hashtags":["2-3 hashtag khong dau #"]},
"x_thread":["3-4 tweet noi tiep, moi tweet <=270 ky tu, tweet cuoi co link va CTA"],
"threads":"1 post 350-500 ky tu, giong tro chuyen, ket bang cau hoi mo + link",
"facebook":"1 post 120-180 tu: mo bang van de nguoi dung Viet hay gap, 3-4 gach dau dong y chinh, CTA + link",
"tiktok":{"hook":"cau noi 3 giay dau","script":"kich ban video 30-45s dang loi thoai doc, chia beat ro","caption":"caption ngan + goi link in bio","hashtags":["3-5 hashtag"]},
"youtube":{"title":"tieu de video <=70 ky tu","description":"2-3 cau mo ta + link bai viet","tags":["5-7 tag"],"shorts_script":"kich ban Shorts 45-60s dang loi thoai"}}`;

    const user = 'BÀI VIẾT:\nTiêu đề: ' + title +
      '\nURL: ' + url +
      '\nMeta: ' + desc +
      '\nTLDR: ' + strip(tldr) +
      '\n\nTrích nội dung chính:\n' + bodyText;

    const r = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + key },
      body: JSON.stringify({
        model: MODEL,
        messages: [{ role: 'system', content: sys }, { role: 'user', content: user }],
        temperature: 0.8,
        max_tokens: 2200,
        response_format: { type: 'json_object' },
      }),
    });

    if (!r.ok) {
      const t = await r.text();
      const transient = r.status === 429 || r.status === 503;
      return json({
        error: transient ? 'AI đang bận, thử lại sau vài giây nhé.' : 'Có lỗi khi gọi AI.',
        detail: t.slice(0, 200),
      }, transient ? 503 : 502);
    }
    const data = await r.json();
    let out = {};
    try { out = JSON.parse(data.choices[0].message.content); }
    catch (e) { return json({ error: 'AI trả về sai định dạng, bấm tạo lại nhé.' }, 502); }
    if (!out.x && out.twitter) out.x = out.twitter;
    if (!out.youtube && out.yt) out.youtube = out.yt;
    if (typeof out.x === 'string') out.x = { post: out.x, hashtags: [] };

    return json({ slug, url, title, kit: out }, 200, 'public, s-maxage=86400, stale-while-revalidate=604800');
  } catch (e) {
    return json({ error: 'Lỗi máy chủ', detail: String(e).slice(0, 200) }, 500);
  }
}
