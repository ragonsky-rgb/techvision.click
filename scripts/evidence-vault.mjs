#!/usr/bin/env node
// Mã hoá thư mục hồ sơ gốc (hợp đồng, nghiệm thu, báo giá...) thành kho khoá bằng mật khẩu
// ở public/portfolio/kho-ho-so/. Repo này PUBLIC nên KHÔNG được đưa file gốc lên:
// chỉ bản mã hoá AES-256-GCM (khoá sinh từ mật khẩu bằng PBKDF2-SHA256) nằm trên web,
// tên file và danh sách cũng được mã hoá. Trang kho-ho-so/index.html giải mã ngay trong trình duyệt.
//
// Dùng: VAULT_PASS='...' node scripts/evidence-vault.mjs "<thư mục nguồn>"
// Chạy lại là tạo kho MỚI hoàn toàn (salt mới), nên đổi mật khẩu = chạy lại với mật khẩu khác.
// Mật khẩu KHÔNG bao giờ ghi vào repo.
import { readdirSync, statSync, readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { join, relative, extname } from 'node:path';
import { randomBytes, pbkdf2Sync, createCipheriv } from 'node:crypto';

const SRC = process.argv[2];
const PASS = process.env.VAULT_PASS;
if (!SRC || !PASS) {
  console.error('Thiếu thư mục nguồn hoặc biến VAULT_PASS');
  process.exit(1);
}
const OUT = new URL('../public/portfolio/kho-ho-so/', import.meta.url).pathname;
const ITER = 600000;
const MIME = {
  '.pdf': 'application/pdf', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
};

const salt = randomBytes(16);
const key = pbkdf2Sync(PASS, salt, ITER, 32, 'sha256');
const seal = (buf) => {
  const iv = randomBytes(12);
  const c = createCipheriv('aes-256-gcm', key, iv);
  // WebCrypto đọc AES-GCM dạng ciphertext + tag 16 byte nối đuôi
  return { iv: iv.toString('base64'), data: Buffer.concat([c.update(buf), c.final(), c.getAuthTag()]) };
};

const walk = (d) => readdirSync(d).flatMap((n) => {
  if (n.startsWith('.')) return [];
  const p = join(d, n);
  return statSync(p).isDirectory() ? walk(p) : [p];
});

rmSync(join(OUT, 'f'), { recursive: true, force: true });
mkdirSync(join(OUT, 'f'), { recursive: true });

const files = walk(SRC).sort().map((p) => {
  const rel = relative(SRC, p);
  const [group, ...rest] = rel.split('/');
  const id = randomBytes(9).toString('hex');
  const buf = readFileSync(p);
  const { iv, data } = seal(buf);
  writeFileSync(join(OUT, 'f', id + '.bin'), data);
  return { id, iv, group, name: rest.join('/') || group, size: buf.length,
           mime: MIME[extname(p).toLowerCase()] || 'application/octet-stream' };
});

const m = seal(Buffer.from(JSON.stringify({ built: new Date().toISOString().slice(0, 10), files })));
writeFileSync(join(OUT, 'vault.json'), JSON.stringify({
  v: 1, kdf: 'PBKDF2-SHA256', iter: ITER, salt: salt.toString('base64'),
  manifest: { iv: m.iv, data: m.data.toString('base64') },
}));
const total = files.reduce((s, f) => s + f.size, 0);
console.log(`Đã mã hoá ${files.length} file, ${(total / 1048576).toFixed(1)} MB -> ${OUT}`);
