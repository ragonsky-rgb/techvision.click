// Moi bai PHAI co it nhat 1 diem du lieu Viet Nam (xem AGENTS.md §0a-bis).
// Do 07/08/2026: trong nhom markdown, bai co impression thi 63% co gia Viet Nam,
// bai khong co impression chi 44%. Day la bien duy nhat chenh nhat quan giua
// hai nhom - do dai, media, bang, link deu trung khit.
//
// Chay:  node scripts/check-vn-signal.mjs            (chi bai con index)
//        node scripts/check-vn-signal.mjs --all      (ke ca bai noindex)
//        node scripts/check-vn-signal.mjs --since 2026-08-08
import { readdirSync, readFileSync } from 'node:fs';

const DIR = 'src/content/articles';
const ALL = process.argv.includes('--all');
const sinceIdx = process.argv.indexOf('--since');
const SINCE = sinceIdx > -1 ? process.argv[sinceIdx + 1] : null;

// Mot diem du lieu Viet Nam = it nhat 1 trong 3 dang duoi.
const SIGNALS = [
  [/\d[\d.,]*\s*(triệu|tr\b|nghìn|nghin|đồng|dong|VNĐ|VND)\b/i, 'gia bang tien Viet'],
  [/(mở bán|lên kệ|bán ra|đặt trước|đặt cọc|phân phối|chính hãng|đại lý|ra mắt)[^.]{0,60}(Việt Nam|VN\b)/i,
    'moc ban hang tai Viet Nam'],
  [/(giá|gia)[^.]{0,40}(Việt Nam|VN\b)/i, 'gia tai Viet Nam'],
];

const rows = [];
for (const f of readdirSync(DIR).filter((x) => x.endsWith('.md'))) {
  const raw = readFileSync(`${DIR}/${f}`, 'utf8');
  const noindex = /^noindex:\s*true/m.test(raw);
  if (!ALL && noindex) continue;
  const d = raw.match(/^datePublished:\s*"(\d{4}-\d{2}-\d{2})/m)?.[1] || '';
  if (SINCE && d < SINCE) continue;

  const hit = SIGNALS.filter(([rx]) => rx.test(raw)).map(([, name]) => name);
  rows.push({
    slug: f.slice(0, -3),
    date: d,
    title: raw.match(/^title:\s*"(.*?)"/m)?.[1] || '',
    hit,
  });
}

const bad = rows.filter((r) => !r.hit.length).sort((a, b) => b.date.localeCompare(a.date));
const ok = rows.length - bad.length;

console.log(`Da soi ${rows.length} bai${ALL ? ' (ca noindex)' : ' (chi bai con index)'}${SINCE ? ` tu ${SINCE}` : ''}`);
console.log(`  co diem du lieu Viet Nam : ${ok} (${Math.round((100 * ok) / Math.max(rows.length, 1))}%)`);
console.log(`  THIEU                    : ${bad.length}`);

if (bad.length) {
  console.log(`\nBai thieu (moi nhat truoc), toi da 25 dong:`);
  for (const r of bad.slice(0, 25)) console.log(`   ${r.date}  ${r.title.slice(0, 66)}`);
  if (bad.length > 25) console.log(`   ... con ${bad.length - 25} bai nua`);
  console.log(`\nThem 1 trong 3: gia bang tien Viet, moc mo ban/dat truoc tai VN,`);
  console.log(`hoac so sanh voi may dang ban tai VN. Xem AGENTS.md §0a-bis.`);
}

// Chi chan khi soi bai MOI (--since). Quet toan bo chi de bao cao, khong fail.
process.exit(SINCE && bad.length ? 1 : 0);
