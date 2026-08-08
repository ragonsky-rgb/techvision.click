// Rà media toàn site: (1) ảnh/video LỖI (404, video removed), (2) media DỒN CỤM (2 khối sát nhau).
// Read-only, không sửa file. Chạy: node scripts/check-media.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const AR = path.join(ROOT, 'src/content/articles');
const PB = path.join(ROOT, 'public/articles');
const SK = path.join(ROOT, 'public/su-kien');
const MIN_WORDS = 35; // tối thiểu số từ prose giữa 2 khối media
const UA = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
};

const files = [];
for (const r of [AR, PB, SK]) if (fs.existsSync(r)) for (const f of fs.readdirSync(r)) if (/\.(md|html)$/.test(f)) files.push(path.join(r, f));

// ---- 1. Broken media ----
const imgUrls = new Map(), ytVideos = new Map();
const add = (m, k, f) => { (m.get(k) || m.set(k, new Set()).get(k)).add(path.basename(f)); };
for (const file of files) {
  const t = fs.readFileSync(file, 'utf8');
  for (const m of t.matchAll(/https?:\/\/i\.ytimg\.com\/vi\/([\w-]{11})\/[\w.]+/g)) add(imgUrls, m[0], file);
  for (const m of t.matchAll(/youtube(?:-nocookie)?\.com\/embed\/([\w-]{11})/g)) add(ytVideos, m[1], file);
  for (const m of t.matchAll(/<img[^>]+src=["']([^"']+)["']/g)) if (/^https?:/.test(m[1]) && !m[1].includes('i.ytimg.com')) add(imgUrls, m[1], file);
  for (const m of t.matchAll(/heroImage:\s*["']?(https?:\/\/[^"'\s]+)/g)) if (!m[1].includes('i.ytimg.com')) add(imgUrls, m[1], file);
}
// 12 luong song song ban vao i.ytimg.com hay bi tu choi tam thoi: script tung
// bao "hong" 3 lan cho anh ma curl lai tra 200 ngay sau do. Nen thu lai truoc
// khi ket luan, canh bao gia con dat hon mot vai giay cho.
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const retry = async (fn, tries = 3) => {
  for (let i = 0; ; i++) {
    const s = await fn();
    if (s === 200 || i === tries - 1) return s;
    await sleep(800 * (i + 1));
  }
};
const status = (u) => retry(async () => { try { const r = await fetch(u, { headers: UA }); return r.status; } catch { return 'ERR'; } });
const ytOk = (id) => retry(async () => { try { return (await fetch(`https://www.youtube.com/oembed?url=https://youtu.be/${id}&format=json`, { headers: UA })).status; } catch { return 'ERR'; } });
const pool = async (arr, fn, n = 12) => { const out = []; let i = 0; await Promise.all(Array.from({ length: n }, async () => { while (i < arr.length) { const k = i++; out[k] = await fn(arr[k]); } })); return out; };

const iu = [...imgUrls.keys()], is = await pool(iu, status);
const yv = [...ytVideos.keys()], ys = await pool(yv, ytOk);
console.log(`Files: ${files.length} | images: ${iu.length} | videos: ${yv.length}`);
console.log('\n=== BROKEN IMAGES ===');
let bi = 0; iu.forEach((u, k) => { if (is[k] !== 200) { bi++; console.log(`[${is[k]}] ${u}  <- ${[...imgUrls.get(u)].join(', ')}`); } });
if (!bi) console.log('(none)');
console.log('\n=== BROKEN VIDEOS ===');
let bv = 0; yv.forEach((id, k) => { if (ys[k] !== 200) { bv++; console.log(`[${ys[k]}] ${id}  <- ${[...ytVideos.get(id)].join(', ')}`); } });
if (!bv) console.log('(none)');

// ---- 2. Media too close (chỉ .md) ----
const visWords = (s) => s.replace(/<[^>]+>/g, ' ').replace(/[#>*_`|]/g, ' ').trim().split(/\s+/).filter(Boolean).length;
const isImg = (c) => /^\s*<figure/.test(c) || /^\s*<img/.test(c);
const isVid = (c) => /art-video-label|art-video-wrap|<iframe/.test(c);
const isMedia = (c) => isImg(c) || isVid(c);
const isSep = (c) => !isMedia(c) && !/^\s*##\s/.test(c) && (visWords(c) >= MIN_WORDS || /spec-box|art-stats|art-callout/.test(c));
console.log('\n=== MEDIA DỒN CỤM (2 khối media sát nhau) ===');
let close = 0;
for (const file of files.filter(f => f.endsWith('.md'))) {
  const m = fs.readFileSync(file, 'utf8').match(/^---[\s\S]*?---\n([\s\S]*)$/); if (!m) continue;
  let chunks = m[1].split(/\n{2,}/), merged = [];
  for (let i = 0; i < chunks.length; i++) { let c = chunks[i]; while (i + 1 < chunks.length && /art-video-label|art-video-wrap/.test(c) && /art-video-wrap|art-video-caption|<iframe/.test(chunks[i + 1])) c += '\n\n' + chunks[++i]; merged.push(c); }
  for (let i = 0; i + 1 < merged.length; i++) if (isMedia(merged[i]) && isMedia(merged[i + 1])) { close++; console.log(`${path.basename(file)} — 2 media sát nhau`); break; }
}
if (!close) console.log('(none)');
console.log(`\nTOTAL: broken images ${bi} | broken videos ${bv} | files media-dồn-cụm ${close}`);
process.exit(bi + bv + close ? 1 : 0);
