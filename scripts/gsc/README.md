# Kết nối Google Search Console API — techvision.click

Công cụ nội bộ chạy local (không deploy lên Vercel). Cho phép kéo số liệu GSC,
kiểm tra trạng thái index của 1 URL, và nộp sitemap bằng dòng lệnh.

> Client ID anh dùng: `932881551622-6ekr1tie6icjan97qetlrk76as8saoee.apps.googleusercontent.com`

## 3 bước anh tự làm (phần cần đăng nhập Google)

### 1. Bật API trong Google Cloud Console
Vào dự án chứa client ID trên → **APIs & Services > Library** → bật:
- **Google Search Console API**

### 2. Tải file credential
**APIs & Services > Credentials** → mở OAuth client ID ở trên.
- Nếu nó đang là loại **Web application**: tạo thêm 1 client ID loại **Desktop app**
  (luồng local cần Desktop app), hoặc thêm `http://localhost:4321/oauth2callback`
  vào *Authorized redirect URIs*.
- Bấm **Download JSON**, đổi tên thành `client_secret.json`, đặt vào thư mục này
  (`scripts/gsc/client_secret.json`).
- Trong **OAuth consent screen**, mục *Test users*, thêm email Google của anh
  (email đang sở hữu property GSC).

### 3. Chạy xác thực 1 lần
```bash
cd scripts/gsc
npm install
npm run auth      # mở trình duyệt -> đăng nhập -> "Cho phép" -> tự lưu token.json
```

## Dùng hằng ngày
```bash
npm run report                 # top query + top page 28 ngày
node gsc.mjs report 90         # đổi số ngày
node gsc.mjs inspect https://techvision.click/su-kien/wwdc-2026.html
node gsc.mjs sitemap https://techvision.click/sitemap.xml
node gsc.mjs sitemaps          # liệt kê sitemap đã nộp
```

## Bảo mật
- `client_secret.json` và `token.json` đã được **gitignore** — không bao giờ lên GitHub.
- Đừng dán nội dung 2 file này vào chat.
- Property dùng trong code: `sc-domain:techvision.click` (đổi trong `gsc.mjs` nếu cần).

## Giới hạn
- Search Console API **không** có lệnh "Request indexing" (bấm tay) như URL Inspection
  trên web. Để buộc Google lập chỉ mục nhanh, vẫn dùng nút "YÊU CẦU LẬP CHỈ MỤC"
  trong giao diện GSC. API ở đây dùng để **đọc số liệu, kiểm tra trạng thái, nộp sitemap**.
- Indexing API (ping URL) của Google chỉ hỗ trợ chính thức `JobPosting` và
  `BroadcastEvent` — trang sự kiện WWDC có `BroadcastEvent` nên về sau có thể mở rộng
  thêm nếu cần.
