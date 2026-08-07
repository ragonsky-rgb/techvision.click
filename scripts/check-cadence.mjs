// Chan viec dang bai o at (xem AGENTS.md §0a).
// Site tung dang 13,3 bai/ngay va bi Google tu choi lap chi muc 97% noi dung.
// Chay: node scripts/check-cadence.mjs
import { readdirSync, readFileSync } from 'node:fs';

const DIR = 'src/content/articles';
const MAX_PER_DAY = 2;
const MAX_PER_WEEK = 8;

// Chi soi bai dang TU ngay ap luat tro di. Nhip cu (13,3 bai/ngay) la lich su
// da xu ly bang noindex, khong the sua nguoc, va khong duoc lam nhieu bao dong.
const CUTOFF = '2026-08-08';

// Ngoai le: bai khop mau series NHUNG dang co luot hien thi that tren Google,
// nen giu index. Chi them vao day khi co so GSC chung minh, khong them cam tinh.
const PROVEN = new Set([
  'top-dien-thoai-dang-mua-thang-7-2026-moi-phan-khuc',        // 162 impressions, 19 clicks
  'o-cung-ssd-gan-trong-hay-o-cung-di-dong-chon-loai-nao-2026', // 1 impression
]);

const BANNED = [
  [/^cach-chon-.+-tieu-chi$/, 'series template "Cach chon X: 5 tieu chi"'],
  [/-hay-.+-chon-loai-nao/, 'series template "X hay Y chon loai nao"'],
  [/^top-.+-dang-mua-thang-/, 'series template "Top X dang mua thang N"'],
  [/-la-gi(-|$)/, 'series template "X la gi"'],
];
const OFF_NICHE =
  /noi-com|tu-lanh|may-giat|may-rua-bat|bep-tu|bep-ga|bep-hong-ngoai|may-say-toc|may-loc-nuoc|may-hut-am|may-pha-ca-phe|robot-hut-bui|may-loc-khong-khi|noi-chien|lo-vi-song|may-hut-mui|ghe-massage/;

const isoWeek = (d) => {
  const t = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  t.setUTCDate(t.getUTCDate() + 4 - (t.getUTCDay() || 7));
  const y0 = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  return `${t.getUTCFullYear()}-W${String(Math.ceil(((t - y0) / 86400000 + 1) / 7)).padStart(2, '0')}`;
};

const byDay = new Map();
const byWeek = new Map();
const problems = [];

for (const f of readdirSync(DIR).filter((f) => f.endsWith('.md'))) {
  const slug = f.slice(0, -3);
  const raw = readFileSync(`${DIR}/${f}`, 'utf8');
  const noindex = /^noindex:\s*true/m.test(raw);

  if (!noindex && !PROVEN.has(slug)) {
    for (const [rx, label] of BANNED) {
      if (rx.test(slug)) problems.push(`${slug}\n      -> ${label} (AGENTS.md §0a cam)`);
    }
    if (OFF_NICHE.test(slug)) {
      problems.push(`${slug}\n      -> lac ngach cong nghe (do gia dung), AGENTS.md §0a cam`);
    }
  }

  if (noindex) continue; // bai da go khoi index khong tinh vao tran nhip
  const m = raw.match(/^datePublished:\s*"(\d{4}-\d{2}-\d{2})/m);
  if (!m || m[1] < CUTOFF) continue;
  byDay.set(m[1], (byDay.get(m[1]) || 0) + 1);
  const w = isoWeek(new Date(m[1]));
  byWeek.set(w, (byWeek.get(w) || 0) + 1);
}

const hotDays = [...byDay].filter(([, n]) => n > MAX_PER_DAY).sort((a, b) => b[1] - a[1]);
const hotWeeks = [...byWeek].filter(([, n]) => n > MAX_PER_WEEK).sort((a, b) => b[1] - a[1]);

if (hotDays.length) {
  console.log(`\nVUOT TRAN NGAY (toi da ${MAX_PER_DAY} bai/ngay):`);
  for (const [d, n] of hotDays.slice(0, 10)) console.log(`   ${d}: ${n} bai`);
}
if (hotWeeks.length) {
  console.log(`\nVUOT TRAN TUAN (toi da ${MAX_PER_WEEK} bai/tuan):`);
  for (const [w, n] of hotWeeks.slice(0, 10)) console.log(`   ${w}: ${n} bai`);
}
if (problems.length) {
  console.log(`\nBAI VI PHAM NGACH / SERIES TEMPLATE (${problems.length}):`);
  for (const p of problems.slice(0, 20)) console.log(`   ${p}`);
}

const fail = hotDays.length || hotWeeks.length || problems.length;
console.log(
  fail
    ? `\nKHONG DAT. Doc AGENTS.md §0a truoc khi them bai.`
    : `\nDAT. Tu ${CUTOFF}: ${byDay.size} ngay dang bai, khong ngay nao vuot ${MAX_PER_DAY} bai, khong series template.`
);
process.exit(fail ? 1 : 0);
