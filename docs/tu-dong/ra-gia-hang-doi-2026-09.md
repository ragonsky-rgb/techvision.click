# Rà giá hàng đợi (chạy một lần, 28/09/2026)

Bối cảnh: phiên cloud cũ viết ~48 bài hẹn lịch (15-27/09) khi không đọc được trang nhà bán, nên giá VN
trong các bài đó có thể sai. Đã thấy một ca: `samsung-galaxy-tab-s11-ultra-gia-chinh-hang-viet-nam-2026`
ghi "từ 26.299.000 đồng" trong khi ngày 28/09 TGDĐ/CellphoneS niêm yết 36,49 triệu, bán 30,99 triệu.

Repo `~/techvision-click`. Làm tự động, không hỏi lại.

1. `git pull --rebase origin main`. Lấy danh sách mọi bài `scheduled: true` (khoảng 55 bài).
2. Với từng bài, tìm mọi con số giá VN (triệu, đồng, đ) trong `title`, `description`, `tldr`, `stats`,
   bảng và thân bài. Bỏ qua bài không có giá VN.
3. Đọc lại giá bằng `python3 scripts/gia/doc-gia.py <url>` (trang danh mục TGDĐ/CellphoneS rất tiện để
   dò nhiều máy một lượt) hoặc trang hãng/nhà mạng bằng trình duyệt. Sửa mọi số sai, ghi "giá đọc ngày 28/09/2026",
   bump `dateModified` (giữ slug, giữ `datePublished`). Tiêu đề/description hứa giá sai thì sửa luôn.
   Giá không xác minh được ở bất kỳ nguồn nào thì bỏ con số đó khỏi bài thay vì để nguyên.
4. Ghi bảng kết quả vào cuối file này: slug | giá cũ | giá mới | nguồn | ghi chú.
5. Gate: `node scripts/check-new-article.mjs <các slug đã sửa>`, `node scripts/check-media.mjs`, build §5.
6. Commit lên `main` (có thể chia 2-3 commit theo nhóm), không tên model, không Co-Authored-By, push.
7. Báo cáo: bao nhiêu bài có giá, bao nhiêu bài sai, sai nặng nhất là bài nào.

## Kết quả

_(phiên chạy điền)_
