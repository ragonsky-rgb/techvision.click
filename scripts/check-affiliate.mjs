#!/usr/bin/env node
// Gate cho Shopee Affiliate (so link src/data/affiliate-links.json + truong `shop` trong bai).
//
//   node scripts/check-affiliate.mjs          # kiem offline: so link + moi bai co `shop`
//   node scripts/check-affiliate.mjs --net    # them: mo tung link rut gon, phai 301 ve dung
//                                             # trang Shopee Mall + dung sub_id
//   node scripts/check-affiliate.mjs --net --write   # dat lai ngay `checked` cho link dat
//
// Luat (ERROR = thoat ma 1):
//  - so link: id khong trung, du truong, short la s.shopee.vn, target la shopee.vn/mall/search,
//    subId chi chu + so, ten san pham khong chua gia
//  - bai: id co trong so, toi da 3 san pham, KHONG khai cho bai noindex vinh vien (bai hen lich thi duoc),
//    `after` phai khop 1 tieu de H2, ten san pham (regex `mention`) phai xuat hien trong bai
//  - --net: link song, chuyen huong ve dung tu khoa + utm_content = subId
// Them bao cao: bai nao gan san pham nao, san pham nao chua dung.

import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import yaml from 'js-yaml';

const ROOT = new URL('..', import.meta.url).pathname;
const REG = join(ROOT, 'src/data/affiliate-links.json');
const ART = join(ROOT, 'src/content/articles');
const NET = process.argv.includes('--net');
const WRITE = process.argv.includes('--write');

const errors = [];
const warns = [];
const reg = JSON.parse(readFileSync(REG, 'utf8'));
const byId = new Map();

for (const l of reg.links) {
  const tag = `[so link] ${l.id}`;
  if (byId.has(l.id)) errors.push(`${tag}: id trung`);
  byId.set(l.id, l);
  for (const k of ['id', 'name', 'short', 'target', 'subId', 'created', 'checked', 'mention']) {
    if (!l[k]) errors.push(`${tag}: thieu truong ${k}`);
  }
  if (!/^https:\/\/s\.shopee\.vn\/[A-Za-z0-9]+$/.test(l.short || '')) errors.push(`${tag}: short khong phai link s.shopee.vn`);
  if (!/^https:\/\/shopee\.vn\/mall\/search\?keyword=[a-z0-9+.\-]+$/.test(l.target || '')) errors.push(`${tag}: target phai la shopee.vn/mall/search?keyword=... (dau +)`);
  if (l.tiktok && !/^https:\/\/vt\.tiktok\.com\/[A-Za-z0-9_-]+\/$/.test(l.tiktok)) errors.push(`${tag}: tiktok phai la link vt.tiktok.com/.../`);
  if (!/^[A-Za-z0-9]+$/.test(l.subId || '')) errors.push(`${tag}: subId chi duoc chu va so`);
  if (/\d[\d.,]*\s*(tri[eệ]u|đ|vnd|usd)/i.test(l.name || '')) errors.push(`${tag}: ten san pham khong duoc chua gia`);
}

const fold = (s) => s.normalize('NFC');
const used = new Map();
let articlesWithShop = 0;

for (const f of readdirSync(ART).filter((x) => x.endsWith('.md')).sort()) {
  const raw = readFileSync(join(ART, f), 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) continue;
  let fm;
  try { fm = yaml.load(m[1]); } catch { continue; }
  const shop = fm?.shop;
  if (!shop || !shop.length) continue;
  articlesWithShop++;
  const slug = f.slice(0, -3);
  const body = fold(m[2]);
  const tag = `[bai] ${slug}`;
  // Bai hen lich (noindex + scheduled) duoc khai san: layout an khoi toi khi bot tha bai, luc do khoi tu hien.
  if (fm.noindex && !fm.scheduled) errors.push(`${tag}: khong gan link cho bai noindex vinh vien`);
  if (shop.length > 3) errors.push(`${tag}: ${shop.length} san pham, toi da 3`);
  const h2 = [...body.matchAll(/^## (.+)$/gm)].map((x) => x[1].replace(/\*|`/g, '').trim().toLowerCase());
  for (const s of shop) {
    const l = byId.get(s.id);
    if (!l) { errors.push(`${tag}: "${s.id}" khong co trong so link`); continue; }
    if (!used.has(s.id)) used.set(s.id, []);
    used.get(s.id).push(slug);
    if (!new RegExp(l.mention, 'i').test(body)) errors.push(`${tag}: bai khong nhac "${l.name}" (regex ${l.mention})`);
    if (!s.after) warns.push(`${tag}: ${s.id} thieu \`after\`, khoi se nam cuoi bai`);
    else if (!h2.some((h) => h.includes(s.after.trim().toLowerCase()))) errors.push(`${tag}: after "${s.after}" khong khop tieu de H2 nao`);
  }
}

// Link cu chen tay trong HTML (reviews.html, bai HTML cu) cung phai co trong so de --net kiem
const htmlLinks = new Set();
for (const dir of ['public', 'public/articles']) {
  for (const f of readdirSync(join(ROOT, dir)).filter((x) => x.endsWith('.html'))) {
    for (const x of readFileSync(join(ROOT, dir, f), 'utf8').matchAll(/https:\/\/s\.shopee\.vn\/[A-Za-z0-9]+/g)) htmlLinks.add(x[0]);
  }
}
for (const f of readdirSync(ART).filter((x) => x.endsWith('.md'))) {
  for (const x of readFileSync(join(ART, f), 'utf8').matchAll(/https:\/\/s\.shopee\.vn\/[A-Za-z0-9]+/g)) htmlLinks.add(x[0]);
}
// Link tiep thi phai co rel="sponsored" (chuan Google). Link markdown [..](..) khong gan duoc rel.
for (const [dir, files] of [
  ['src/content/articles', readdirSync(ART).filter((x) => x.endsWith('.md'))],
  ['public', readdirSync(join(ROOT, 'public')).filter((x) => x.endsWith('.html'))],
  ['public/articles', readdirSync(join(ROOT, 'public/articles')).filter((x) => x.endsWith('.html'))],
]) {
  for (const f of files) {
    const t = readFileSync(join(ROOT, dir, f), 'utf8');
    if (/\]\(https:\/\/s\.shopee\.vn\//.test(t)) errors.push(`[rel] ${dir}/${f}: link Shopee dang markdown, doi sang <a rel="sponsored nofollow noopener">`);
    for (const a of t.matchAll(/<a\b[^>]*s\.shopee\.vn[^>]*>/g)) {
      if (!/rel="[^"]*sponsored/.test(a[0])) errors.push(`[rel] ${dir}/${f}: thieu rel="sponsored" ${a[0].slice(0, 60)}`);
    }
  }
}

const shorts = new Set(reg.links.map((l) => l.short));
for (const u of htmlLinks) if (!shorts.has(u)) errors.push(`[link chen tay] ${u} chua co trong so link`);

if (NET) {
  const today = new Date(Date.now() + 7 * 3600e3).toISOString().slice(0, 10);
  let ok = 0;
  for (const l of reg.links) {
    try {
      const r = await fetch(l.short, { redirect: 'manual', headers: { 'user-agent': 'Mozilla/5.0' } });
      const loc = r.headers.get('location') || '';
      const want = l.target.split('keyword=')[1];
      const got = (loc.match(/[?&]keyword=([^&]*)/) || [])[1];
      const sub = (loc.match(/[?&]utm_content=([A-Za-z0-9]*)/) || [])[1];
      if (r.status < 300 || r.status > 399) errors.push(`[net] ${l.id}: HTTP ${r.status}`);
      else if (!loc.startsWith('https://shopee.vn/mall/search')) errors.push(`[net] ${l.id}: chuyen ve ${loc.slice(0, 80)}`);
      else if (got !== want) errors.push(`[net] ${l.id}: tu khoa "${got}" khac "${want}"`);
      else if (sub !== l.subId) errors.push(`[net] ${l.id}: sub_id "${sub}" khac "${l.subId}"`);
      else { ok++; if (WRITE) l.checked = today; }
    } catch (e) {
      errors.push(`[net] ${l.id}: ${e.message}`);
    }
  }
  console.log(`Link song dung dich: ${ok}/${reg.links.length}`);
  if (WRITE) writeFileSync(REG, JSON.stringify(reg, null, 2) + '\n');
}

console.log(`So link: ${reg.links.length} link · ${articlesWithShop} bai co khoi "Mua o dau" · ${used.size} san pham dang dung trong bai`);
const unusedInArticles = reg.links.filter((l) => !used.has(l.id)).map((l) => l.id);
if (unusedInArticles.length) console.log(`Chua gan bai markdown nao (co the dang o reviews.html): ${unusedInArticles.join(', ')}`);
for (const w of warns) console.log('WARN ' + w);
for (const e of errors) console.log('ERROR ' + e);
console.log(errors.length ? `KHONG DAT: ${errors.length} loi` : 'DAT');
process.exit(errors.length ? 1 : 0);
