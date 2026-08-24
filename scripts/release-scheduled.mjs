// Go noindex cho bai da toi gio dang, chay tu dong bang GitHub Action.
//
// Vi sao co script nay: bai viet duoc hen lich bang cach dat datePublished o
// tuong lai kem `noindex: true`, vi build-blog.mjs loai bai noindex khoi
// blog.html va sitemap. Truoc day viec go noindex lam tay trong phien chat -
// ngay 21-23/8/2026 khong ai mo phien nen 5 bai nam im qua han, trong do co
// bai neo dung moc thoi su nen suyt thanh tin cu.
//
// BAY QUAN TRONG: repo dang co hon 500 bai noindex tu dot don scaled content
// (thang 8/2026), phan lon co datePublished trong qua khu. Neu chi xet
// "noindex + qua han" thi script se bung ca 500 bai do ra. Vi vay bai hen lich
// PHAI khai them co `scheduled: true`; script chi dong toi dung nhom nay.
//
// Chay: node scripts/release-scheduled.mjs [--dry]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIR = path.join(ROOT, 'src/content/articles');
const DRY = process.argv.includes('--dry');

const now = Date.now();
const fmField = (fm, key) => {
  const m = fm.match(new RegExp(`^${key}:\\s*"?([^"\\n]*)"?\\s*$`, 'm'));
  return m ? m[1].trim() : '';
};

const released = [];
const waiting = [];
const skipped = [];

for (const file of fs.readdirSync(DIR).filter((f) => f.endsWith('.md'))) {
  const full = path.join(DIR, file);
  const raw = fs.readFileSync(full, 'utf8');
  const end = raw.indexOf('\n---', 4);
  if (!raw.startsWith('---') || end < 0) continue;
  const fm = raw.slice(4, end);

  if (fmField(fm, 'scheduled') !== 'true') continue;      // khong phai bai hen lich
  if (fmField(fm, 'noindex') !== 'true') continue;        // da phat hanh roi

  const slug = file.replace(/\.md$/, '');
  const dateStr = fmField(fm, 'datePublished');
  const ts = Date.parse(dateStr);
  if (Number.isNaN(ts)) { skipped.push(`${slug}: datePublished khong doc duoc (${dateStr})`); continue; }
  if (ts > now) { waiting.push(`${slug}: cho toi ${dateStr}`); continue; }

  // Kiem toi thieu, khong goi mang. Gate day du (check-new-article) da chay
  // luc viet bai; o day chi chan file hong cau truc.
  const missing = ['title', 'description', 'heroImage', 'tldr', 'deck']
    .filter((k) => !fmField(fm, k));
  if (missing.length) { skipped.push(`${slug}: thieu truong ${missing.join(', ')}`); continue; }

  if (!DRY) {
    const out = raw
      .replace(/^noindex:\s*true\s*\n/m, '')
      .replace(/^scheduled:\s*true\s*\n/m, '');
    fs.writeFileSync(full, out);
  }
  released.push(`${slug} (hen ${dateStr})`);
}

const line = (t, arr) => arr.length ? `${t}:\n` + arr.map((x) => `  - ${x}`).join('\n') + '\n' : '';
process.stdout.write(
  line('PHAT HANH', released) + line('CHO TOI GIO', waiting) + line('BO QUA', skipped) ||
  'Khong co bai hen lich nao toi gio.\n'
);
// Xuat danh sach slug cho GitHub Action dung o buoc sau (ping IndexNow)
if (process.env.GITHUB_OUTPUT) {
  const slugs = released.map((r) => r.split(' ')[0]).join(',');
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `count=${released.length}\nslugs=${slugs}\n`);
}

// Ma thoat 10 = co bai vua phat hanh -> Action biet can commit
process.exit(released.length ? 10 : 0);
