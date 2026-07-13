// Liệt kê các bài evergreen gắn "tháng X" cần làm mới khi sang tháng mới.
// Chạy: node scripts/list-monthly-refresh.mjs [thang] (mặc định: tháng hiện tại)
// Quy trình refresh: cập nhật nội dung + đổi "tháng X" trong title/description
// sang tháng mới, bump dateModified. GIỮ NGUYÊN slug/URL để không mất index.
import fs from 'node:fs';
import path from 'node:path';

const DIR = 'src/content/articles';
const now = new Date();
const month = Number(process.argv[2]) || now.getMonth() + 1;

const stale = [];
for (const f of fs.readdirSync(DIR)) {
  if (!f.endsWith('.md')) continue;
  const md = fs.readFileSync(path.join(DIR, f), 'utf8');
  const title = (md.match(/^title: "(.*)"$/m) || [])[1] || '';
  const m = title.match(/tháng (\d{1,2})\/2026/i) || title.match(/tháng (\d{1,2})\b/i);
  if (!m) continue;
  const t = Number(m[1]);
  if (t < month) stale.push({ f: f.replace(/\.md$/, ''), t, title });
}

if (!stale.length) {
  console.log(`Không có bài "tháng X" nào cũ hơn tháng ${month}. OK.`);
} else {
  console.log(`${stale.length} bài cần làm mới sang tháng ${month}:`);
  for (const s of stale.sort((a, b) => a.t - b.t)) {
    console.log(`  [thang ${s.t}] ${s.f} :: ${s.title}`);
  }
}
