#!/usr/bin/env node
/**
 * Do kich thuoc pixel THAT cua moi anh hero, ghi ra src/data/og-image-sizes.json.
 *
 * Vi sao can: ArticleLayout phai khai og:image:width/height thi LinkedIn va vai
 * nen tang khac moi dung the chia se co lon. Khong the do luc build (phai goi
 * mang moi lan build), nen do truoc mot lan roi tra bang.
 *
 * Vi sao doc header chu khong tin ten file: mot ID YouTube khong co ban maxres
 * van tra HTTP 200 cho maxresdefault.jpg, nhung anh nhan duoc la anh bao loi
 * 120x90. Kiem bang dung luong file cung khong phat hien duoc.
 *
 * Chay:  node scripts/gen-og-sizes.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const OUT = join(ROOT, 'src/data/og-image-sizes.json');
const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';

function dimsFromBuffer(buf) {
  if (buf.length > 24 && buf.readUInt32BE(0) === 0x89504e47)
    return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) }; // PNG
  for (let i = 2; i < buf.length - 9; ) {
    if (buf[i] !== 0xff) { i++; continue; }
    const m = buf[i + 1];
    if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc)
      return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) }; // JPEG SOF
    i += 2 + buf.readUInt16BE(i + 2);
  }
  return null;
}

async function measure(url) {
  try {
    if (url.startsWith('/') || url.startsWith('https://techvision.click/')) {
      const p = join(ROOT, 'public', url.replace('https://techvision.click', ''));
      return dimsFromBuffer(readFileSync(p));
    }
    const r = await fetch(url, { headers: { 'User-Agent': UA } });
    if (!r.ok) return null;
    return dimsFromBuffer(Buffer.from(await r.arrayBuffer()));
  } catch {
    return null;
  }
}

const dir = join(ROOT, 'src/content/articles');
const heroes = new Map();
for (const f of readdirSync(dir).filter((f) => f.endsWith('.md'))) {
  const s = readFileSync(join(dir, f), 'utf8');
  if (/^noindex: true/m.test(s)) continue;
  const m = s.match(/^heroImage: "([^"]+)"/m);
  if (m) heroes.set(m[1], (heroes.get(m[1]) || 0) + 1);
}

const urls = [...heroes.keys()];
const out = {};
const small = [];
const failed = [];
for (let i = 0; i < urls.length; i += 10) {
  const batch = urls.slice(i, i + 10);
  const sizes = await Promise.all(batch.map(measure));
  batch.forEach((u, k) => {
    const sz = sizes[k];
    if (!sz) return failed.push(u);
    out[u] = [sz.w, sz.h];
    if (sz.w < 1200) small.push(`${sz.w}x${sz.h}  ${u}`);
  });
}

writeFileSync(OUT, JSON.stringify(Object.fromEntries(Object.keys(out).sort().map((k) => [k, out[k]])), null, 0));
console.log(`${Object.keys(out).length}/${urls.length} anh hero do duoc, ghi vao src/data/og-image-sizes.json`);
if (small.length) {
  console.log(`\n${small.length} anh duoi 1200px - mang xa hoi se ha xuong the nho:`);
  small.forEach((s) => console.log('  ' + s));
}
if (failed.length) {
  console.log(`\n${failed.length} anh khong do duoc:`);
  failed.forEach((s) => console.log('  ' + s));
}
