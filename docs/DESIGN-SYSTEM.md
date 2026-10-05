# Chuẩn thiết kế TechVision (web + video)

> Bản 05/10/2026. Xem trực quan: https://techvision.click/styleguide.html (noindex).
> Nguồn chân lý số: `public/design/tokens.json`. Sửa số ở đó TRƯỚC, rồi mới sửa CSS web hoặc video kit.

## 1. Nguyên tắc

1. **Con số là nhân vật chính.** Giá, ngày, thông số to và đỏ; mọi thứ khác lùi lại.
2. **Ảnh thật trước.** Ảnh/clip sản phẩm thật luôn to. Linh vật TV chỉ là vai phụ, nhỏ.
3. **Ấm và tin cậy.** Nền giấy ấm, tiêu đề serif như báo in, thân bài sans dễ đọc trên điện thoại.
4. **Chuyển động có chủ đích.** Web 150-250ms, tôn trọng `prefers-reduced-motion`. Video: calm chậm, chaos mạnh nhưng không quá 3 giây.
5. **Học cách nghĩ, không chép tài sản.** Cấm font SF Pro, icon SF Symbols (giấy phép chỉ cho app trên hệ điều hành Apple), cấm lấy mã màu trang hãng khác. Icon giao diện dùng SVG kiểu Lucide, không dùng emoji làm icon.

## 2. Màu

| Token | Giá trị | Dùng cho | Tương phản |
|---|---|---|---|
| `--bg` | `#f5f2ed` | nền | |
| `--surface` | `#efe9e0` | hộp, callout | chữ 14,39:1 |
| `--text` | `#1c1a17` | chữ chính | 15,55:1 |
| `--accent` | `#c0392b` | link, nhãn, số liệu, nút chính | 4,87:1 trên nền; chữ trắng trên nút 5,44:1 |
| `--muted` | `rgba(28,26,23,.82)` | chữ phụ | 9,12:1 |
| `--dim` | `rgba(28,26,23,.66)` | chú thích, ngày | 5,32:1 (**web đang .58 = 4,12:1, chưa đạt**) |
| `--line` | `rgba(28,26,23,.10)` | đường kẻ | |
| Nền tối `--accent` | `#e5604f` | đỏ khi `body.dark` | 5,53:1 (**web đang dùng #c0392b = 3,49:1**) |

Màu nghĩa: NÊN MUA `#2e7d32` (chữ trắng), ĐỢI `#e09b00` (chữ ĐEN), BỎ QUA `#6b665e` (chữ trắng), Shopee `#ee4d2d` (chỉ viền/nhãn). Vàng `#e3b04b` cho chân pin và mạch linh vật, không làm chữ trên nền đỏ (2,74:1).

Ngưỡng: chữ thường ≥ 4,5:1; chữ lớn (≥ 24px, hoặc ≥ 19px đậm) ≥ 3:1.

## 3. Chữ

| Vai | Font | Ghi chú |
|---|---|---|
| Web tiêu đề | Lora 700 | H1 clamp 2-3,1rem, `text-wrap: balance` |
| Web thân bài | Be Vietnam Pro 400/600/700 | 16-17px, line-height 1.65-1.8 |
| Video tiêu đề | Barlow Condensed Black, viết hoa | calm: góc trái trên |
| Video chaos | Barlow Condensed Black Italic | vàng `#ffd400`, viền đen, phát sáng |
| Video phụ đề | Barlow Condensed Bold | viền đen 4px, chữ đang đọc trên viên đỏ `#c0392b` |
| Bộ đếm | IBM Plex Mono Bold | "01 / 04" |

Font video nằm ở `techvision-video-kit/assets/fonts/` (OFL). Thumbnail `series_kit.py` còn dùng "SF Pro Display" trong CSS, cần đổi sang Barlow/Be Vietnam Pro ở lần sửa kit tới.

## 4. Thành phần web

Lớp đang chạy trong `src/layouts/ArticleLayout.astro` + `public/articles/_article-style.css`: `art-callout`, `spec-box`, `art-stat-card`, `art-tag`, `read-next`, `shop-box` (viền trái `#ee4d2d`, không ghi giá, `rel="sponsored"`), `art-video-wrap.vertical`. Bo góc: thẻ 10px, tag 20px, nút 999px. Vùng bấm ≥ 44px.

## 5. Video

- Khung 1080x1920, 30fps. Vùng an toàn: trên 150, dưới 1500, trái 60, phải 940 (dưới 1500 là nút TikTok/Reels che).
- Âm lượng -14 LUFS, đỉnh ≤ -1,5 dBTP (`master_audio.py --fix`). Giọng anh Long tua 1,2x, xưng "em" khi gọi "anh chị".
- **Linh vật TV đỏ** (chốt 05/10, thay con chip): tivi đỏ cổ có 2 ăng-ten đầu sáng, núm vặn + nút nguồn bên phải màn hình, thân tròn đỏ, đế giày xám. Hai bản giống nhau:
  - **Flow** (ảnh tĩnh: thumbnail, ảnh bìa, bài đăng): `public/design/linh-vat-tivi-flow.jpg` (tư thế + kết luận), `linh-vat-tivi-6-goc.jpg` (6 góc). Luôn ghi "tạo bằng AI". Bản gốc: `techvision-video-kit/mascot/concepts/tivi/`.
  - **3D** (video): `createStage()` mặc định dựng TV (`buildTV()` trong `mascot/engine.js`); `{ mascot: 'chip' }` chỉ giữ cho video cũ. Ảnh chuẩn: `public/design/linh-vat-tivi-3d.jpg`, trang tư thế `mascot/pages/tivi-nhan-dien.html`.
  - Màn hình LED (`eyes`): normal, happy, squint, shock, worried (lông mày + nước mắt), think, static. Series B dùng `icon`: `check` xanh = nên mua, `wait` đồng hồ cát cam = đợi, `x` xám = bỏ qua. Ăng-ten: đầu sáng theo `waveColor`, `alarm` nháy đỏ, `droop` rũ và tắt = mất sóng.
  - Con chip cũ (`public/design/linh-vat-chip.jpg`) chỉ còn trong video đã đăng, không dùng cho video mới.
- **Luật bố cục (05/10):** linh vật NHỎ ở góc, ảnh/video sản phẩm thật TO là ưu tiên; mọi ảnh thật ghi nguồn.
- Màu chương calm: xanh ngọc `#18806c`, mù tạt `#e3a92f` (chữ đen), xanh dương `#2f7cc4`, kem kết `#f3eee3`. Chaos: đỏ `#7a0f0f` chữ `#ffd400`, xanh `#1f7a34` chữ `#b7ff5a`. (Xanh ngọc cũ `#2fa58f` chỉ 3,04:1 với chữ trắng, đã bỏ.)
- Series: A "Đừng bị con số đánh lừa", B "Nên mua · đợi · bỏ qua" (viên kết luận dùng màu nghĩa ở mục 2).

## 6. Kiểm tra trước khi giao

Web: chụp thật 390 + 1280 (`node scripts/shot.mjs <trang>`), không tràn ngang, tương phản đạt cả nền sáng và tối, vùng bấm ≥ 44px, focus nhìn thấy.
Video: duyệt tờ 16 khung trước khi dựng bản cuối, chữ trong vùng an toàn, Whisper soát số và tên riêng, -14 LUFS, ghi nguồn ảnh, không em-dash.

## 7. Việc còn treo

- Đổi `--dim` web từ .58 lên .66 và thêm `--accent: #e5604f` cho `body.dark` (đụng toàn site, cần anh Long gật).
- Đổi font "SF Pro Display" trong `series_kit.py`.
