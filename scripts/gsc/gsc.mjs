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
  // Deep-link ?id=<url> da chet (Google tra 404, id gio la token doi khong doan
  // duoc). Chi in duoc link toi property; muon bam "Yeu cau lap chi muc" thi dan
  // URL vao o "Kiem tra moi URL..." o dau trang.
  console.log(`   Mo GSC       : https://search.google.com/search-console?resource_id=${encodeURIComponent(SITE)}`);
  console.log(`                  (dan URL tren vao o "Kiem tra moi URL" o dau trang)`);
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

// Keyword radar: tìm query "striking distance" (vị trí 4-20) để chọn chủ đề viết bài.
// Đây là nhu cầu THẬT của người dùng đang tìm mà site chưa chiếm top - viết/nâng bài là ăn ngay.
async function radar(n = 28) {
  const sc = google.searchconsole({ version: 'v1', auth: auth() });
  const range = { startDate: days(Number(n)), endDate: days(1) };
  const { data } = await sc.searchanalytics.query({
    siteUrl: SITE,
    requestBody: { ...range, dimensions: ['query'], rowLimit: 500 },
  });
  const rows = data.rows || [];
  const striking = rows.filter((r) => r.position >= 4 && r.position <= 20 && r.impressions >= 5)
    .sort((a, b) => b.impressions - a.impressions);
  const ctrGap = rows.filter((r) => r.position < 4 && r.impressions >= 20 && r.ctr < 0.02)
    .sort((a, b) => b.impressions - a.impressions);

  console.log(`\n══ KEYWORD RADAR ${range.startDate} → ${range.endDate} (${rows.length} query có dữ liệu) ══`);
  console.log(`\n── 🎯 Striking distance (pos 4-20, viết bài mới / nâng bài cũ) — ${striking.length} query ──`);
  striking.slice(0, 40).forEach((r, i) => {
    console.log(
      `${String(i + 1).padStart(2)}. ${r.keys[0].slice(0, 55).padEnd(55)} ` +
      `impr ${String(r.impressions).padStart(5)} · pos ${r.position.toFixed(1).padStart(5)} · clicks ${r.clicks}`
    );
  });
  console.log(`\n── ⚠️ CTR gap (đã top 1-3 nhưng CTR < 2%: sửa title/description) — ${ctrGap.length} query ──`);
  ctrGap.slice(0, 15).forEach((r, i) => {
    console.log(
      `${String(i + 1).padStart(2)}. ${r.keys[0].slice(0, 55).padEnd(55)} ` +
      `impr ${String(r.impressions).padStart(5)} · pos ${r.position.toFixed(1)} · CTR ${(r.ctr * 100).toFixed(1)}%`
    );
  });
  console.log('\nGợi ý: chọn 1-2 query striking-distance có impressions cao nhất chưa có bài riêng làm chủ đề batch tới.');
}

const [cmd, arg] = process.argv.slice(2);
const run = { report: () => report(arg), radar: () => radar(arg || 28), inspect: () => inspect(arg), sitemap: () => sitemap(arg), sitemaps };
(run[cmd] || (async () => console.error('Lệnh: report | radar | inspect | sitemap | sitemaps')))()
  .catch((e) => { console.error('❌', e.errors?.[0]?.message || e.message); process.exit(1); });
