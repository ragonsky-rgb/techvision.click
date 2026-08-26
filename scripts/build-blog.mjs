// Tự sinh các vùng động của public/blog.html (hero, nổi bật, grid, đáng chú ý, last-updated)
// từ bài Markdown (src/content/articles) + bài cũ (legacy-articles.json).
// Chạy trước astro build. KHÔNG đụng tới CSS/JS/search của blog.html.
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';

const BLOG = 'public/blog.html';

function parseFrontmatter(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const o = {};
  for (const line of m[1].split('\n')) {
    const mm = line.match(/^([a-zA-Z][a-zA-Z0-9_]*):\s*(.*)$/);
    if (mm && mm[2] !== '') {
      let v = mm[2].trim().replace(/^["']|["']$/g, '');
      if (!(mm[1] in o)) o[mm[1]] = v;
    }
  }
  return o;
}

// --- Thu thập bài ---
let articles = [];
const legacyPath = 'src/data/legacy-articles.json';
if (existsSync(legacyPath)) {
  articles = JSON.parse(readFileSync(legacyPath, 'utf-8')).map((a) => ({ ...a, source: 'legacy' }));
}
const mdDir = 'src/content/articles';
if (existsSync(mdDir)) {
  for (const f of readdirSync(mdDir).filter((x) => x.endsWith('.md'))) {
    const fm = parseFrontmatter(readFileSync(`${mdDir}/${f}`, 'utf-8'));
    articles.push({
      slug: fm.slug || f.replace(/\.md$/, ''),
      title: fm.title || '',
      description: fm.description || fm.deck || '',
      category: fm.category || 'AI',
      type: fm.type || 'tin-tuc',
      datePublished: fm.datePublished || null,
      image: fm.heroImage || '',
      heroAlt: fm.heroAlt || fm.title || '',
      noindex: String(fm.noindex).trim() === 'true',
      pinned: String(fm.pinned).trim() === 'true',
      source: 'collection',
    });
  }
}
articles = articles.filter((a) => a.slug && a.datePublished);
// Hub chỉ liệt kê bài còn nằm trong index. Bài đã gắn noindex vẫn sống và vẫn
// truy cập được qua URL trực tiếp, nhưng không được ngốn crawl budget của hub:
// trước khi lọc, blog.html trỏ tới 718 bài mà 480 trong đó là noindex.
const hidden = articles.filter((a) => a.noindex).length;
articles = articles.filter((a) => !a.noindex);
if (hidden) console.log(`   (ẩn ${hidden} bài noindex khỏi blog.html)`);
articles.sort((a, b) => (b.datePublished || '').localeCompare(a.datePublished || ''));

// --- Helpers ---
const esc = (s) => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const dmy = (iso) => { const d = (iso || '').slice(0, 10).split('-'); return d.length === 3 ? `${d[2]}/${d[1]}/${d[0]}` : ''; };
// Chuẩn hoá chuyên mục về đúng tập slug của các nút lọc trên blog.html
// (phải sync với public/articles/_article.js — CAT_MAP dùng cho breadcrumb bài viết)
const CAT_MAP = {
  'côngnghệ': 'congnghe', 'congnghe': 'congnghe', 'phântích': 'congnghe',
  'giadụng': 'congnghe', 'smarthome': 'congnghe', 'reviews': 'congnghe',
  'ai': 'ai', 'ai&developer': 'ai',
  'smartphone': 'smartphone', 'điệnthoại': 'smartphone', 'android': 'smartphone',
  'apple': 'apple', 'ios': 'apple',
  'laptop': 'laptop', 'laptop&pc': 'laptop', 'pc': 'laptop',
  'gaming': 'gaming', 'game': 'gaming', 'esports': 'gaming',
  'audio': 'audio', 'âmthanh': 'audio',
  'camera': 'camera',
  'wearable': 'wearable',
  'internet': 'internet', 'viễnthông': 'internet'
};
const dataCat = (c) => CAT_MAP[String(c || '').toLowerCase().replace(/\s+/g, '')] || 'khac';
// Thumbnail YouTube: dùng hqdefault (luôn tạo từ khung hình thật cho video còn sống),
// tránh maxresdefault vốn trả ảnh xám placeholder với nhiều video không có bản HD.
const thumb = (u) => esc(String(u || '').replace('maxresdefault', 'hqdefault'));
const url = (a) => `/articles/${a.slug}.html`;
const newestTime = articles.length ? new Date(articles[0].datePublished).getTime() : 0;
const isNew = (a) => newestTime - new Date(a.datePublished).getTime() <= 3 * 86400000; // trong 3 ngày so với bài mới nhất

// Mặc định bài mới nhất lên "Tiêu điểm". Muốn ghim một bài cụ thể lên đầu thì đặt
// `pinned: true` trong frontmatter - dùng khi bài đó đang là mũi nhọn (có video, có
// chiến dịch) chứ không phải bài mới nhất. Ghim CHỈ đổi thứ tự hiển thị, KHÔNG đụng
// tới datePublished, nên ngày đăng thật của bài vẫn nguyên.
const pin = articles.find((a) => a.pinned);
const ordered = pin ? [pin, ...articles.filter((a) => a !== pin)] : articles;
if (pin) console.log(`   (ghim lên Tiêu điểm: ${pin.slug})`);

const hero = ordered[0];
const featured = ordered.slice(1, 4);      // Nổi bật (hero-side)
const grid = ordered.slice(1);             // Grid: tất cả trừ hero
const picks = ordered.slice(4, 10);        // Đáng chú ý: 6 bài tiếp theo
const newest = articles[0];                // bài mới nhất THẬT, để ghi ngày cập nhật

// --- Sinh HTML ---
const heroHtml = `
      <a class="hero-lead" href="${url(hero)}">
        <img class="hl-thumb" src="${thumb(hero.image)}" alt="${esc(hero.heroAlt || hero.title)}" loading="eager" onerror="this.onerror=null;this.src=this.src.replace('maxresdefault','hqdefault')">
        <span class="hl-cat">${esc(hero.category)} · Tiêu điểm</span>
        <h2 class="hl-title">${esc(hero.title)}</h2>
        <p class="hl-sapo">${esc(hero.description)}</p>
        <span class="hl-date">${dmy(hero.datePublished)}</span>
      </a>
      <div class="hero-side">
        <div class="hero-side-label">Nổi bật</div>
${featured.map((a) => `        <a class="hs-item" href="${url(a)}">
          <img src="${thumb(a.image)}" alt="${esc(a.heroAlt || a.title)}" loading="lazy" onerror="this.onerror=null;this.src=this.src.replace('maxresdefault','hqdefault')">
          <div><span class="hs-cat">${esc(a.category)}</span><div class="hs-title">${esc(a.title)}</div></div>
        </a>`).join('\n')}
      </div>
    `;

const card = (a) => `      <a href="${url(a)}" class="blog-card" data-cat="${dataCat(a.category)}" data-type="${a.type || 'tin-tuc'}">
${isNew(a) ? '        <span class="new-badge">NEW</span>\n' : ''}        <div class="card-top">
          <span class="card-cat">${esc(a.category)}</span>
          <span class="card-date">${dmy(a.datePublished)}</span>
        </div>
        <div class="card-thumb-wrap">
          <img class="card-thumb" src="${thumb(a.image)}" alt="${esc(a.heroAlt || a.title)}" loading="lazy" onerror="this.onerror=null;this.src=this.src.replace('maxresdefault','hqdefault')">
        </div>
        <h2 class="card-title">${esc(a.title)}</h2>
        <p class="card-desc">${esc(a.description)}</p>
        <span class="card-read">Đọc thêm</span>
      </a>`;
const gridHtml = `
    <div class="blog-grid" id="blog-grid">

${grid.map(card).join('\n\n')}

    </div>
    `;

const picksHtml = `
${picks.map((a, i) => `            <a class="side-item" href="${url(a)}">
              <span class="si-num">${i + 1}</span>
              <img class="si-thumb" src="${thumb(a.image)}" alt="${esc(a.title)}" loading="lazy" onerror="this.onerror=null;this.src=this.src.replace('maxresdefault','hqdefault')">
              <span class="si-title">${esc(a.title)}</span>
            </a>`).join('\n')}
          `;

// bài thứ hai phải KHÁC bài mới nhất: khi có bài ghim, featured[0] chính là bài mới nhất
const second = featured.find((a) => a !== newest) || featured[0];
const lastUpdated = `Cập nhật ${dmy(newest.datePublished)}, Bài mới: ${esc(newest.title)}, ${esc(second?.title || '')}`;

// --- Thay vào blog.html (dùng replacer function để $ trong tiền không bị hiểu nhầm) ---
let html = readFileSync(BLOG, 'utf-8');
html = html.replace(/<!-- LAST_UPDATED -->[\s\S]*?<!-- \/LAST_UPDATED -->/, () => `<!-- LAST_UPDATED -->${lastUpdated}<!-- /LAST_UPDATED -->`);
html = html.replace(/(<section class="news-hero"[^>]*>)[\s\S]*?(<\/section>)/, () => `<section class="news-hero" aria-label="Tin nổi bật">${heroHtml}</section>`);
html = html.replace(/(<!-- BLOG ARTICLES START -->)[\s\S]*?(<!-- BLOG ARTICLES END -->)/, () => `<!-- BLOG ARTICLES START -->${gridHtml}<!-- BLOG ARTICLES END -->`);
html = html.replace(/(<div class="side-list">)[\s\S]*?(<\/div>)/, () => `<div class="side-list">${picksHtml}</div>`);
// dateModified của schema Blog = ngày bài mới nhất (tự tươi mỗi lần build)
html = html.replace(/"dateModified": "[^"]*"/, () => `"dateModified": "${newest.datePublished}"`);

writeFileSync(BLOG, html);
console.log(`✅ blog.html cập nhật: hero=${hero.slug}, grid=${grid.length} bài, picks=${picks.length}, tổng=${articles.length}`);

// --- Cập nhật mục "Tin mới nhất" trên trang chủ index.html (5 bài mới nhất) ---
const HOME = 'public/index.html';
if (existsSync(HOME)) {
  let home = readFileSync(HOME, 'utf-8');
  if (/<!-- HOME POSTS START -->/.test(home)) {
    const homePosts = articles.slice(0, 5).map((a) => `        <a href="${url(a)}" class="post-item fu">
          <div class="post-date">${dmy(a.datePublished)} · ${esc(a.category)}</div>
          <div class="post-excerpt">${esc(a.description)}</div>
          <span class="post-read-more">Đọc bài →</span>
        </a>`).join('\n');
    home = home.replace(/(<!-- HOME POSTS START -->)[\s\S]*?(<!-- HOME POSTS END -->)/, () => `<!-- HOME POSTS START -->\n${homePosts}\n        <!-- HOME POSTS END -->`);
    writeFileSync(HOME, home);
    console.log(`✅ index.html cập nhật: 5 bài mới nhất trên trang chủ`);
  }
}

// --- Chat index: du lieu cho tro ly ao /chat-widget.js (tim bai theo cau hoi) ---
{
  const chatIndex = articles.map((a) => ({
    t: a.title,
    d: String(a.description || '').slice(0, 160),
    u: url(a),
    c: a.category || '',
    dt: String(a.datePublished || '').slice(0, 10),
  }));
  writeFileSync('public/chat-index.json', JSON.stringify(chatIndex));
  console.log(`✅ chat-index.json: ${chatIndex.length} bài cho trợ lý ảo`);
}
