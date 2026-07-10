// Quét toàn bộ URL trong sitemap qua GSC URL Inspection API -> liệt kê URL CHƯA index.
// Chạy: node scan-index.mjs   (trong thư mục scripts/gsc)
import { google } from 'googleapis';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const CRED = path.join(DIR, 'client_secret.json');
const TOKEN = path.join(DIR, 'token.json');
const SITE = 'sc-domain:techvision.click';

function auth() {
  const raw = JSON.parse(fs.readFileSync(CRED, 'utf8'));
  const cfg = raw.installed || raw.web;
  const o = new google.auth.OAuth2(cfg.client_id, cfg.client_secret, 'http://localhost:4321/oauth2callback');
  o.setCredentials(JSON.parse(fs.readFileSync(TOKEN, 'utf8')));
  return o;
}
const sc = google.searchconsole({ version: 'v1', auth: auth() });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const deepLink = (u) => `https://search.google.com/search-console/inspect?resource_id=${encodeURIComponent(SITE)}&id=${encodeURIComponent(u)}`;

async function getUrls() {
  const res = await fetch('https://techvision.click/sitemap.xml');
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

async function inspect(url, tries = 3) {
  try {
    const { data } = await sc.urlInspection.index.inspect({
      requestBody: { inspectionUrl: url, siteUrl: SITE, languageCode: 'vi' },
    });
    return data.inspectionResult?.indexStatusResult || {};
  } catch (e) {
    if (tries > 0) { await sleep(2000); return inspect(url, tries - 1); }
    return { verdict: 'ERROR', coverageState: e.errors?.[0]?.message || e.message };
  }
}

const urls = await getUrls();
console.error(`Quét ${urls.length} URL...`);
const notIndexed = [];
let done = 0, indexed = 0;
for (const u of urls) {
  const r = await inspect(u);
  done++;
  if (r.verdict === 'PASS') indexed++;
  else notIndexed.push({ url: u, verdict: r.verdict, coverage: r.coverageState, lastCrawl: r.lastCrawlTime || null });
  if (done % 25 === 0) console.error(`  ...${done}/${urls.length} (indexed ${indexed}, chưa ${notIndexed.length})`);
  await sleep(120);
}

// Nhóm theo coverage state
const byState = {};
for (const n of notIndexed) (byState[n.coverage] ||= []).push(n);

console.log(`\n=== TỔNG: ${urls.length} URL | ĐÃ index ${indexed} | CHƯA index ${notIndexed.length} ===\n`);
for (const [state, list] of Object.entries(byState).sort((a, b) => b[1].length - a[1].length)) {
  console.log(`\n### ${state}  (${list.length})`);
  for (const n of list) console.log(`- ${n.url}\n  -> ${deepLink(n.url)}`);
}

fs.writeFileSync(path.join(DIR, 'not-indexed.json'), JSON.stringify(notIndexed, null, 2));
console.error(`\nĐã lưu chi tiết -> not-indexed.json`);
