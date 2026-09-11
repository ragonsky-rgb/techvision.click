// Dung HTML hop "Doc tiep" giua bai, thay vao cho danh dau cua
// src/plugins/rehype-read-next.mjs. Chay trong ArticleLayout moi lan build.
//
// Uu tien bai dang index: bai hen lich hoac noindex bi day xuong cuoi, nen khi
// bot phat hanh bai va site build lai thi hop tu doi sang bai vua len.

import fs from 'node:fs';
import path from 'node:path';
import { getCollection } from 'astro:content';
import { READ_NEXT_SLOT } from '../plugins/rehype-read-next.mjs';

let noindexSlugs = null;

async function loadNoindex() {
  const set = new Set();
  for (const e of await getCollection('articles')) {
    if (e.data.noindex) set.add(e.id);
  }
  // Lop HTML cu trong public/articles, thu tu thuoc tinh name/content khong co dinh
  const dir = path.resolve('public/articles');
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.html')) continue;
    const head = fs.readFileSync(path.join(dir, f), 'utf8').slice(0, 6000);
    const tags = head.match(/<meta\b[^>]*>/gi) || [];
    if (tags.some((t) => /["']robots["']/i.test(t) && /noindex/i.test(t))) set.add(f.slice(0, -5));
  }
  return set;
}

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

export async function withReadNext(bodyHtml, related) {
  if (!bodyHtml.includes(READ_NEXT_SLOT)) return bodyHtml;
  noindexSlugs ??= await loadNoindex();
  const indexable = (href) => {
    const m = href.match(/^\/articles\/([^/?#]+)\.html/);
    return !m || !noindexSlugs.has(m[1]);
  };
  const picks = (related || [])
    .filter((r) => r && r.href && r.title)
    .map((r, i) => ({ r, i, ok: indexable(r.href) }))
    .sort((a, b) => (b.ok - a.ok) || (a.i - b.i))
    .slice(0, 2)
    .map((x) => x.r);
  if (picks.length === 0) return bodyHtml.replace(READ_NEXT_SLOT, '');
  const links = picks.map((r) =>
    `<a class="read-next-link" href="${esc(r.href)}"><span class="read-next-cat">${esc(r.cat || 'Bài viết')}</span><span class="read-next-title">${esc(r.title)}</span></a>`,
  ).join('');
  return bodyHtml.replace(READ_NEXT_SLOT,
    `<aside class="read-next" aria-label="Đọc tiếp"><div class="read-next-label">Đọc tiếp</div>${links}</aside>`);
}
