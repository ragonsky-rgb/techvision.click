// Liệt kê các bài evergreen gắn "tháng X" cần làm mới khi sang tháng mới.
// Chạy: node scripts/list-monthly-refresh.mjs [thang] (mặc định: tháng hiện tại)
// Quy trình refresh: cập nhật nội dung + đổi "tháng X" trong title/description
// sang tháng mới, bump dateModified. GIỮ NGUYÊN slug/URL để không mất index.
//
// TÁCH NOINDEX (thêm 01/09/2026): trước đây script gộp chung nên báo 50 bài
// cần refresh, trong khi 48 bài trong đó là bài `noindex: true` từ đợt dọn
// scaled content 07/08/2026. Chúng không nằm trong sitemap lẫn blog.html nên
// refresh không đem lại gì, chỉ tốn công. Nay script chỉ tính bài CÒN INDEX là
// việc phải làm; nhóm noindex in riêng dưới dạng tham khảo và không tính vào
// số đếm. Xem AGENTS.md §0a (cấm series template "Top X đáng mua tháng N").
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
  if (t >= month) continue;
  const noindex = /^noindex:\s*true\s*$/m.test(md);
  stale.push({ f: f.replace(/\.md$/, ''), t, title, noindex });
}

const byMonth = (a, b) => a.t - b.t;
const live = stale.filter((s) => !s.noindex).sort(byMonth);
const dead = stale.filter((s) => s.noindex).sort(byMonth);

if (!live.length) {
  console.log(`Không có bài "tháng X" CÒN INDEX nào cũ hơn tháng ${month}. OK.`);
} else {
  console.log(`${live.length} bài còn index cần làm mới sang tháng ${month}:`);
  for (const s of live) console.log(`  [thang ${s.t}] ${s.f} :: ${s.title}`);
}

if (dead.length) {
  console.log(`\n${dead.length} bài lệch tháng nhưng đang noindex, KHÔNG refresh`);
  console.log('(ngoài sitemap và blog.html, Google không thấy - xem AGENTS.md §0a):');
  for (const s of dead) console.log(`  [thang ${s.t}] ${s.f}`);
}
