#!/usr/bin/env node
// Mã hoá thư mục hồ sơ gốc (hợp đồng, nghiệm thu, báo giá...) thành kho khoá bằng mật khẩu
// ở public/portfolio/kho-ho-so/. Repo này PUBLIC nên KHÔNG được đưa file gốc lên:
// chỉ bản mã hoá AES-256-GCM (khoá sinh từ mật khẩu bằng PBKDF2-SHA256) nằm trên web,
// tên file và danh sách cũng được mã hoá. Trang kho-ho-so/index.html giải mã ngay trong trình duyệt.
//
// Dùng: VAULT_PASS='...' node scripts/evidence-vault.mjs "<thư mục nguồn>"
//   Tạo kho MỚI hoàn toàn (salt mới) từ thư mục nguồn; đổi mật khẩu = chạy lại với mật khẩu khác.
// Thêm file vào kho đang có (không cần giữ file cũ trên máy):
//   VAULT_PASS='...' node scripts/evidence-vault.mjs --append "<thư mục nguồn>" [groups.json]
//   groups.json (tuỳ chọn) = {"tên nhóm cũ": "tên nhóm mới"} để đổi tên nhóm đã có.
//   Tên thư mục con cấp 1 trong nguồn = tên nhóm; trang kho xếp nhóm theo tên (nên mở đầu bằng năm-tháng).
// Đổi mật khẩu mà KHÔNG cần file gốc (giải mã rồi mã hoá lại trong bộ nhớ, giữ nguyên id file):
//   OLD_PASS='mã cũ' VAULT_PASS='mã mới' node scripts/evidence-vault.mjs --rekey
// Mật khẩu KHÔNG bao giờ ghi vào repo.
import { readdirSync, statSync, readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { join, relative, extname } from 'node:path';
import { randomBytes, pbkdf2Sync, createCipheriv, createDecipheriv } from 'node:crypto';

const OUT = new URL('../public/portfolio/kho-ho-so/', import.meta.url).pathname;
if (process.argv[2] === '--rekey') {
  const { OLD_PASS, VAULT_PASS } = process.env;
  if (!OLD_PASS || !VAULT_PASS) { console.error('Thiếu OLD_PASS hoặc VAULT_PASS'); process.exit(1); }
  const v = JSON.parse(readFileSync(join(OUT, 'vault.json'), 'utf8'));
  const oldKey = pbkdf2Sync(OLD_PASS, Buffer.from(v.salt, 'base64'), v.iter, 32, 'sha256');
  const salt = randomBytes(16);
  const newKey = pbkdf2Sync(VAULT_PASS, salt, v.iter, 32, 'sha256');
  const unseal = (iv, buf) => {
    const d = createDecipheriv('aes-256-gcm', oldKey, Buffer.from(iv, 'base64'));
    d.setAuthTag(buf.subarray(-16));
    return Buffer.concat([d.update(buf.subarray(0, -16)), d.final()]);
  };
  const reseal = (buf) => {
    const iv = randomBytes(12);
    const c = createCipheriv('aes-256-gcm', newKey, iv);
    return { iv: iv.toString('base64'), data: Buffer.concat([c.update(buf), c.final(), c.getAuthTag()]) };
  };
  let files;
  try { files = JSON.parse(unseal(v.manifest.iv, Buffer.from(v.manifest.data, 'base64'))).files; }
  catch { console.error('Sai mã cũ: không giải mã được kho'); process.exit(1); }
  for (const f of files) {
    const p = join(OUT, 'f', f.id + '.bin');
    const { iv, data } = reseal(unseal(f.iv, readFileSync(p)));
    writeFileSync(p, data);
    f.iv = iv;
  }
  const m = reseal(Buffer.from(JSON.stringify({ built: new Date().toISOString().slice(0, 10), files })));
  writeFileSync(join(OUT, 'vault.json'), JSON.stringify({
    v: 1, kdf: 'PBKDF2-SHA256', iter: v.iter, salt: salt.toString('base64'),
    manifest: { iv: m.iv, data: m.data.toString('base64') },
  }));
  console.log(`Đã đổi mã cho ${files.length} file`);
  process.exit(0);
}

const APPEND = process.argv[2] === '--append';
const args = process.argv.slice(APPEND ? 3 : 2);
const SRC = args[0];
const PASS = process.env.VAULT_PASS;
if (!SRC || !PASS) {
  console.error('Thiếu thư mục nguồn hoặc biến VAULT_PASS');
  process.exit(1);
}
const ITER = 600000;
const MIME = {
  '.pdf': 'application/pdf', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  '.xls': 'application/vnd.ms-excel', '.doc': 'application/msword',
  '.html': 'text/html', '.json': 'application/json', '.md': 'text/markdown', '.txt': 'text/plain', '.mp4': 'video/mp4',
};

const old = APPEND ? JSON.parse(readFileSync(join(OUT, 'vault.json'), 'utf8')) : null;
const salt = APPEND ? Buffer.from(old.salt, 'base64') : randomBytes(16);
const key = pbkdf2Sync(PASS, salt, APPEND ? old.iter : ITER, 32, 'sha256');
const open = ({ iv, data }) => {
  const buf = Buffer.from(data, 'base64');
  const d = createDecipheriv('aes-256-gcm', key, Buffer.from(iv, 'base64'));
  d.setAuthTag(buf.subarray(-16));
  return Buffer.concat([d.update(buf.subarray(0, -16)), d.final()]);
};
let kept = [];
if (APPEND) {
  try { kept = JSON.parse(open(old.manifest)).files; }
  catch { console.error('Sai mật khẩu: không giải mã được kho đang có'); process.exit(1); }
  const rename = args[1] ? JSON.parse(readFileSync(args[1], 'utf8')) : {};
  kept.forEach((f) => { if (rename[f.group]) f.group = rename[f.group]; });
}
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

if (!APPEND) rmSync(join(OUT, 'f'), { recursive: true, force: true });
mkdirSync(join(OUT, 'f'), { recursive: true });

const added = walk(SRC).sort().map((p) => {
  const rel = relative(SRC, p);
  const [group, ...rest] = rel.split('/');
  const id = randomBytes(9).toString('hex');
  const buf = readFileSync(p);
  const { iv, data } = seal(buf);
  writeFileSync(join(OUT, 'f', id + '.bin'), data);
  return { id, iv, group, name: rest.join('/') || group, size: buf.length,
           mime: MIME[extname(p).toLowerCase()] || 'application/octet-stream' };
});

const files = kept.concat(added);
const m = seal(Buffer.from(JSON.stringify({ built: new Date().toISOString().slice(0, 10), files })));
writeFileSync(join(OUT, 'vault.json'), JSON.stringify({
  v: 1, kdf: 'PBKDF2-SHA256', iter: APPEND ? old.iter : ITER, salt: salt.toString('base64'),
  manifest: { iv: m.iv, data: m.data.toString('base64') },
}));
const total = files.reduce((s, f) => s + f.size, 0);
console.log(`Thêm ${added.length} file; kho có ${files.length} file, ${(total / 1048576).toFixed(1)} MB -> ${OUT}`);
