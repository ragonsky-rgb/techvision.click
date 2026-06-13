// Quét các bài HTML tĩnh trong public/articles, trích metadata -> src/data/legacy-articles.json
// Chạy: node scripts/build-legacy-index.mjs
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const DIR = 'public/articles';
const files = readdirSync(DIR).filter(f => f.endsWith('.html') && !f.startsWith('_'));

function pick(re, html, i = 1) { const m = html.match(re); return m ? m[i].trim() : null; }

function firstNewsArticle(html) {
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const b of blocks) {
    try { const o = JSON.parse(b[1]); if (o && o['@type'] === 'NewsArticle') return o; } catch {}
  }
  return null;
}

const out = [];
for (const file of files) {
  const html = readFileSync(`${DIR}/${file}`, 'utf-8');
  const slug = file.replace(/\.html$/, '');
  const na = firstNewsArticle(html) || {};
  const img = typeof na.image === 'string' ? na.image : (na.image && na.image.url) || pick(/<meta property="og:image" content="([^"]+)"/, html);
  out.push({
    slug,
    title: na.headline || pick(/<meta property="og:title" content="([^"]+)"/, html) || pick(/<title>([^<]*?)(?: - LongTechVision)?<\/title>/, html),
    description: na.description || pick(/<meta name="description" content="([^"]+)"/, html) || '',
    category: na.articleSection || pick(/<span class="cat">([^<]+)<\/span>/, html) || 'AI',
    datePublished: na.datePublished || null,
    dateModified: na.dateModified || na.datePublished || null,
    image: img || '',
    keywords: typeof na.keywords === 'string' ? na.keywords : (Array.isArray(na.keywords) ? na.keywords.join(', ') : ''),
  });
}

out.sort((a, b) => (b.datePublished || '').localeCompare(a.datePublished || ''));
writeFileSync('src/data/legacy-articles.json', JSON.stringify(out, null, 2));
console.log(`Đã trích ${out.length} bài -> src/data/legacy-articles.json`);
const missing = out.filter(a => !a.datePublished || !a.title || !a.image);
if (missing.length) console.log('⚠️ thiếu field:', missing.map(m => m.slug));
