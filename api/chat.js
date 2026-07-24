// Vercel Edge Function — Trợ lý ảo TechVision
// Giấu GROQ_API_KEY server-side. Không có key -> trả 503 để widget tự
// chuyển sang chế độ tìm bài (vẫn hoạt động, không cần AI).
// Đăng ký key miễn phí: https://console.groq.com (free tier đủ dùng cho site nhỏ).
export const config = { runtime: 'edge' };

const MAX_Q = 500;
const MAX_CTX = 6;
const MAX_HISTORY = 6;

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST', 'Access-Control-Allow-Headers': 'Content-Type' },
    });
  }
  if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });

  const key = (process.env.GROQ_API_KEY || '').trim();
  if (!key) {
    return new Response(JSON.stringify({ fallback: true, reason: 'no_key' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  let q, ctx, history;
  try {
    ({ q, ctx = [], history = [] } = await req.json());
  } catch {
    return new Response('Bad Request', { status: 400 });
  }
  if (!q || typeof q !== 'string') return new Response('Bad Request: q required', { status: 400 });
  q = q.slice(0, MAX_Q);

  const ctxText = (Array.isArray(ctx) ? ctx : []).slice(0, MAX_CTX)
    .map((a, i) => `${i + 1}. "${a.t}" (${a.c || 'Tin'}, ${a.dt || ''}) - ${a.d || ''} - link: https://techvision.click${a.u}`)
    .join('\n');

  const messages = [
    {
      role: 'system',
      content:
        'Bạn là trợ lý ảo của TechVision (techvision.click) - trang tin công nghệ tiếng Việt của Nguyễn Tấn Thiên Long. ' +
        'Trả lời NGẮN GỌN (tối đa ~120 từ), thân thiện, bằng tiếng Việt. ' +
        'Ưu tiên dựa vào danh sách bài viết liên quan được cung cấp; khi dẫn bài, chèn link dạng markdown [tiêu đề](link). ' +
        'Nếu không có bài phù hợp, trả lời bằng kiến thức chung NHƯNG nói rõ đó là thông tin tổng quát và có thể chưa cập nhật. ' +
        'Không bịa số liệu, không bịa link. Câu hỏi ngoài chủ đề công nghệ thì từ chối khéo và gợi ý chủ đề công nghệ.' +
        (ctxText ? `\n\nBài viết liên quan trên TechVision:\n${ctxText}` : ''),
    },
    ...((Array.isArray(history) ? history : []).slice(-MAX_HISTORY)
      .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
      .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_Q) }))),
    { role: 'user', content: q },
  ];

  try {
    const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || 'llama-3.3-70b-versatile',
        messages,
        max_tokens: 400,
        temperature: 0.4,
      }),
    });
    if (!r.ok) {
      return new Response(JSON.stringify({ fallback: true, reason: 'upstream_' + r.status }), {
        status: 503,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }
    const data = await r.json();
    const reply = data.choices?.[0]?.message?.content || '';
    return new Response(JSON.stringify({ reply }), {
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ fallback: true, reason: 'error' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }
}
