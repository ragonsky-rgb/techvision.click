// Ping IndexNow (Bing + Yandex) cho các URL trong sitemap -> index tức thì, nuôi AI search.
// Chạy: node scripts/indexnow.mjs            (toàn bộ sitemap)
//       node scripts/indexnow.mjs <url1> <url2> ...   (URL cụ thể)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const HOST = 'techvision.click';
const SITE = `https://${HOST}`;

// Tìm key file (public/<32-hex>.txt) - key IndexNow vốn công khai
const pub = path.join(ROOT, 'public');
const keyFile = fs.readdirSync(pub).find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) { console.error('❌ Không thấy IndexNow key file trong public/. Tạo: openssl rand -hex 16 > public/<key>.txt'); process.exit(1); }
const key = keyFile.replace('.txt', '');

async function getUrls() {
  if (process.argv.length > 2) return process.argv.slice(2);
  const res = await fetch(`${SITE}/sitemap.xml`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const urlList = await getUrls();
const body = { host: HOST, key, keyLocation: `${SITE}/${keyFile}`, urlList };

for (const endpoint of ['https://api.indexnow.org/indexnow', 'https://www.bing.com/indexnow']) {
  const r = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });
  console.log(`${r.status} ${r.statusText}  ${endpoint}  (${urlList.length} URL)`);
}
