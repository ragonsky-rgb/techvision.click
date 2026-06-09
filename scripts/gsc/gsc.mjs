// Truy vấn Google Search Console cho techvision.click.
// Cần chạy `npm run auth` trước để có token.json.
//
//   npm run report                  -> top query + top page 28 ngày
//   node gsc.mjs report 90          -> đổi số ngày
//   node gsc.mjs inspect <url>      -> trạng thái index của 1 URL
//   node gsc.mjs sitemap <url.xml>  -> nộp sitemap
//   node gsc.mjs sitemaps           -> liệt kê sitemap đã nộp
import { google } from 'googleapis';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const CRED = path.join(DIR, 'client_secret.json');
const TOKEN = path.join(DIR, 'token.json');
const SITE = 'sc-domain:techvision.click';

function auth() {
  if (!fs.existsSync(TOKEN)) { console.error('❌ Chưa có token.json. Chạy: npm run auth'); process.exit(1); }
  const raw = JSON.parse(fs.readFileSync(CRED, 'utf8'));
  const cfg = raw.installed || raw.web;
  const o = new google.auth.OAuth2(cfg.client_id, cfg.client_secret, `http://localhost:4321/oauth2callback`);
  o.setCredentials(JSON.parse(fs.readFileSync(TOKEN, 'utf8')));
  return o;
}

const days = (n) => new Date(Date.now() - n * 864e5).toISOString().slice(0, 10);

async function report(n = 28) {
  const sc = google.searchconsole({ version: 'v1', auth: auth() });
  const range = { startDate: days(Number(n)), endDate: days(1) };
  for (const dim of ['query', 'page']) {
    const { data } = await sc.searchanalytics.query({
      siteUrl: SITE,
      requestBody: { ...range, dimensions: [dim], rowLimit: 15 },
    });
    console.log(`\n── Top ${dim} (${range.startDate} → ${range.endDate}) ──`);
    (data.rows || []).forEach((r, i) => {
      console.log(
        `${String(i + 1).padStart(2)}. ${r.keys[0].slice(0, 60).padEnd(60)} ` +
        `clicks ${String(r.clicks).padStart(4)} · impr ${String(r.impressions).padStart(6)} · ` +
        `CTR ${(r.ctr * 100).toFixed(1)}% · pos ${r.position.toFixed(1)}`
      );
    });
  }
}

async function inspect(url) {
  if (!url) { console.error('Dùng: node gsc.mjs inspect https://techvision.click/...'); process.exit(1); }
  const sc = google.searchconsole({ version: 'v1', auth: auth() });
  const { data } = await sc.urlInspection.index.inspect({
    requestBody: { inspectionUrl: url, siteUrl: SITE, languageCode: 'vi' },
  });
  const r = data.inspectionResult?.indexStatusResult || {};
  console.log(`\n🔎 ${url}`);
  console.log(`   Verdict      : ${r.verdict}`);
  console.log(`   Coverage     : ${r.coverageState}`);
  console.log(`   Google canon : ${r.googleCanonical || '-'}`);
  console.log(`   Last crawl   : ${r.lastCrawlTime || 'chưa crawl'}`);
  console.log(`   Index full   : https://search.google.com/search-console/inspect?resource_id=${encodeURIComponent(SITE)}&id=${encodeURIComponent(url)}`);
}

async function sitemap(url) {
  if (!url) { console.error('Dùng: node gsc.mjs sitemap https://techvision.click/sitemap.xml'); process.exit(1); }
  const sc = google.searchconsole({ version: 'v1', auth: auth() });
  await sc.sitemaps.submit({ siteUrl: SITE, feedpath: url });
  console.log(`✅ Đã nộp sitemap: ${url}`);
}

async function sitemaps() {
  const sc = google.searchconsole({ version: 'v1', auth: auth() });
  const { data } = await sc.sitemaps.list({ siteUrl: SITE });
  (data.sitemap || []).forEach((s) => console.log(`${s.path}  ·  ${s.contents?.[0]?.submitted || 0} URL  ·  lastDl ${s.lastDownloaded || '-'}`));
}

const [cmd, arg] = process.argv.slice(2);
const run = { report: () => report(arg), inspect: () => inspect(arg), sitemap: () => sitemap(arg), sitemaps };
(run[cmd] || (() => console.error('Lệnh: report | inspect | sitemap | sitemaps')))()
  .catch((e) => { console.error('❌', e.errors?.[0]?.message || e.message); process.exit(1); });
