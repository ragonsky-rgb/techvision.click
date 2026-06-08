// Một lần duy nhất: tạo token.json từ client_secret.json (OAuth Desktop app).
// Chạy: npm run auth  -> mở trình duyệt, anh đăng nhập & bấm "Cho phép" -> tự lưu token.
// KHÔNG dán secret/token vào chat. Mọi thứ nằm local, đã gitignore.
import { google } from 'googleapis';
import http from 'node:http';
import { URL } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import open from 'open';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const CRED = path.join(DIR, 'client_secret.json');
const TOKEN = path.join(DIR, 'token.json');

// Quyền: đọc số liệu + URL Inspection + nộp sitemap
const SCOPES = [
  'https://www.googleapis.com/auth/webmasters',
  'https://www.googleapis.com/auth/webmasters.readonly',
];

if (!fs.existsSync(CRED)) {
  console.error('\n❌ Thiếu file client_secret.json trong scripts/gsc/');
  console.error('   Tải từ Google Cloud Console > APIs & Services > Credentials');
  console.error('   (OAuth client ID, loại "Desktop app") rồi đổi tên thành client_secret.json\n');
  process.exit(1);
}

const raw = JSON.parse(fs.readFileSync(CRED, 'utf8'));
const cfg = raw.installed || raw.web;
if (!cfg) { console.error('❌ client_secret.json không hợp lệ (cần loại Desktop app).'); process.exit(1); }

const PORT = 4321;
const REDIRECT = `http://localhost:${PORT}/oauth2callback`;
const oauth2 = new google.auth.OAuth2(cfg.client_id, cfg.client_secret, REDIRECT);

const authUrl = oauth2.generateAuthUrl({ access_type: 'offline', prompt: 'consent', scope: SCOPES });

const server = http.createServer(async (req, res) => {
  if (!req.url.startsWith('/oauth2callback')) { res.end('OK'); return; }
  const code = new URL(req.url, REDIRECT).searchParams.get('code');
  res.end('Đã xác thực xong. Quay lại terminal và đóng tab này.');
  server.close();
  try {
    const { tokens } = await oauth2.getToken(code);
    fs.writeFileSync(TOKEN, JSON.stringify(tokens, null, 2));
    console.log('\n✅ Đã lưu token.json. Giờ chạy được: npm run report\n');
  } catch (e) {
    console.error('❌ Lỗi đổi token:', e.message);
  }
});

server.listen(PORT, () => {
  console.log('\n🔗 Mở trình duyệt để cấp quyền...');
  console.log('   Nếu không tự mở, dán link sau vào trình duyệt:\n   ' + authUrl + '\n');
  open(authUrl).catch(() => {});
});
