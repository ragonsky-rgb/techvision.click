# Content Brief + Radar tuần 05/08/2026 - techvision.click

> Radar Google Trends + cộng đồng công nghệ + phân tích 3 đối thủ + 5 chủ đề "ngon" kèm tiêu đề giật tít và dàn ý.
> Bám chuẩn `AGENTS.md` (no em-dash, >=5 media/bài, >=1.100 từ, mô hình nguồn 3 lớp, giọng trung lập).
> Ngày lập: 05/08/2026. Người lập: quy trình radar tự động (Claude Code on web). Trọng tâm anh yêu cầu: **điện thoại + máy tính**.

---

## 0. Lưu ý vận hành (đọc trước) - media và cách xuất bản phiên này

Phiên tự động này chạy trong môi trường Claude Code on web có **chính sách chặn egress ra mọi host ngoài** (`i.ytimg.com`, `youtube.com`, cả `vnexpress.net`, `theverge.com`... đều trả 403 policy-denial qua proxy khi verify bằng curl). Hệ quả với luật repo:

- **Không tự verify được thumbnail/oEmbed YouTube mới** theo §4 (kích thước ảnh, `playableInEmbed`).
- **`node scripts/check-media.mjs` không thể ra "0 lỗi"** trong môi trường này vì mọi URL i.ytimg.com đều bị 403 (hiện tượng môi trường, KHÔNG phải media hỏng thật). Baseline repo đã báo ~2.700 ảnh "lỗi" theo cùng lý do.

**Cách xử lý đã áp dụng để vẫn air được bài mà không vi phạm luật media (theo đúng tiền lệ brief 03/08):** 4 bài batch này **chỉ dùng lại các media ID (thumbnail + video embed) đã verify và đang sống trên production**, lấy từ các bài liên quan đã đăng: `iqoo-15-ultra...`, `redmagic-11s...`, `top-...-antutu-thang-7...`, `redmi-note-17-pro...`, `oneplus-15r...`, `oppo-k15...`, `laptop-snapdragon-x2...`, `chip-laptop-2026...`. Vì các ID này đang phục vụ trên site thật nên **chắc chắn là ảnh sống + video cho nhúng**, loại rủi ro đẩy ảnh xám/video chết lên production. Mỗi bài đủ 5 media distinct (1 hero + 3 figure + 1 video iframe), rải đều theo §4 (đã kiểm tra 0 bài media dồn cụm), 0 em-dash, thân bài 1.195 tới 1.490 từ, và **`npx astro build` chạy sạch (696 trang, 0 lỗi schema)**.

**Ràng buộc nhánh:** môi trường tự động này bị khóa vào nhánh `claude/friendly-cori-wom6tf` và không được phép push thẳng `main`. Theo §0 AGENTS.md, **chỉ `main` mới deploy production**, nên batch được đưa lên nhánh phụ + PR nháp; **anh/team cần merge vào `main`** thì bài mới lên site.

**Việc nên làm trên máy local (nơi YouTube không bị chặn) trước/sau khi merge:**
1. Chạy `node scripts/check-media.mjs` để xác nhận 0 lỗi thật (pass ở local vì YouTube truy cập được).
2. (Nâng chất, tùy chọn) Thay media dùng lại bằng video/thumbnail riêng cho từng bài, verify theo §8 (`size_download > 8000`, oEmbed sống, `playableInEmbed:true`), build lại. Ưu tiên bài POCO F8 (đang mượn media máy khác).
3. Merge `main`, sau deploy chạy IndexNow §6 cho 4 URL mới + `blog.html`.

---

## 1. Radar xu hướng Việt Nam (đầu tháng 8/2026)

Đối chiếu 4 bài batch 03/08 vừa lên (OnePlus 16, chip 2nm, VCS Chung kết, đọc thông số CPU) và toàn bộ ~753 bài đã có để lọc khoảng trống thật.

| Cụm chủ đề đang nóng | Tín hiệu cầu tìm kiếm | Site đã có? | Khoảng trống |
| --- | --- | --- | --- |
| **AnTuTu tháng 8/2026** (iQOO 15 Ultra vô địch, Red Magic top 2) | Query "antutu thang 8 2026" rising; MobileCity/GSMArena cập nhật bảng tháng. | Có bản **tháng 7**, chưa có **tháng 8**. | ✅ Gap, refresh hàng tháng |
| **POCO F8 Ultra / F8 Pro** (Snapdragon 8 Elite Gen 5, loa 2.1 Bose, 3500 nit, 6500mAh, giá từ 16,99tr) | Cầu ổn định (Tinhte, CellphoneS, HungMobile, ViettaBlet); giá VN đã có. | **0 bài POCO** trên toàn site. | ✅ Gap thương hiệu, để trống hoàn toàn |
| **Laptop AI / Copilot+ PC** (Yoga Pro 7, Legion Pro 7, MSI Stealth A16 AI+, Vivobook S 15) | "laptop AI đáng mua 2026" high-intent; anh yêu cầu mảng máy tính. | Có bài chip laptop, ProArt, Snapdragon X2. **Chưa có listicle "đáng mua theo nhu cầu".** | ✅ Gap, evergreen, đúng ý anh |
| **Điện thoại pin trâu >7000mAh** (Redmi Note 17 Pro, Honor Win Turbo 10.000mAh...) | Silicon-carbon đẩy pin lên 7.000-10.000mAh; cầu "điện thoại pin trâu" rất cao. | Có nhiều bài lẻ từng máy. **Chưa có listicle tổng hợp tháng 8.** | ✅ Gap, gom nhu cầu |
| **Made by Google 12/8 - Pixel 11** | Google chốt sự kiện 12/8; Pixel 11/Pro/Fold. | **Đã có** bài sự kiện + Pixel 11 Pro (pre-event). | ⚠️ Sự kiện CHƯA diễn ra (hôm nay 5/8). Recap phải viết SAU 12/8. Xem chủ đề 5. |
| Redmi K100 Pro ra mắt 11/8 | Xiaomi xác nhận 11/8 | **Đã có** bài rò rỉ K100/K100 Pro | ⚠️ Nâng cấp bài rò rỉ thành "chính thức" SAU 11/8 |
| iPhone 18 Pro (giá +200 USD, A20) | Cầu rất cao | Phủ **rất dày** (>10 bài) | ❌ Bão hòa |
| OpenAI khai tử Atlas 9/8, Gemini Robotics 2 | Cầu AI cao | **Đã có** bài Atlas, loạt bài robotics | ❌ Vừa phủ |

**Kết luận radar:** 4 khoảng trống chắc chắn (AnTuTu tháng 8, POCO F8, laptop AI listicle, pin trâu listicle) đủ cho 1 batch tập trung **điện thoại + máy tính** đúng trọng tâm anh yêu cầu. Chủ đề 5 (Pixel 11 recap) phụ thuộc mốc thời gian 12/8, để dạng brief chờ sự kiện.

---

## 2. Phân tích 3 đối thủ lớn (tuần qua)

### 2.1. GenK (genk.vn)
- Tuần qua đẩy: Poco M8 Power (8.000mAh), Samsung Galaxy Z Fold8 Ultra/Z Flip8, Gemini Robotics 2, OpenAI đóng trình duyệt Atlas (9/8).
- Công thức thắng: tin nhanh + tít cảm xúc "ảnh hưởng túi tiền". Điểm yếu: ít bài giải thích kỹ thuật gốc, ít listicle chuẩn SEO theo nhu cầu.
- **Điểm mình thắng:** listicle "chọn theo nhu cầu" (laptop AI, pin trâu) + góc VN (giá, có nên mua) mà GenK làm mỏng.

### 2.2. CellphoneS / Sforum (cellphones.com.vn/sforum)
- Mạnh tư vấn mua (POCO F8 Pro/Ultra, top máy, giá VN) và bảng xếp hạng AnTuTu.
- Công thức thắng: bám nhu cầu giao dịch. Điểm yếu: thiên PR bán hàng, thiếu trung lập, hiếm khi giải thích "đọc điểm AnTuTu thế nào cho đúng".
- **Điểm mình thắng:** trung lập, có bảng so sánh + mô hình nguồn 3 lớp, dạy cách đọc con số (điểm AnTuTu, mAh không phải tất cả).

### 2.3. Thế Giới Di Động / FPT Shop
- Ranking mạnh query giao dịch ("giá bao nhiêu", "top đáng mua", "cách chọn"), tin laptop AI (Computex/CES) và điện thoại tầm trung.
- **Điểm mình thắng:** bài how-to/giải thích (Copilot+ PC là gì, NPU bao nhiêu TOPS đủ, pin silicon-carbon) mà retailer làm hời hợt, cộng internal link chặt sang bài kỹ thuật đã có.

**Bài học chọn đề:** đối thủ dồn vào tin ra mắt và tư vấn bán hàng. Mình né phần bão hòa (iPhone 18, foldable), đánh vào **listicle chọn theo nhu cầu** (laptop AI, pin trâu), **lấp gap thương hiệu** (POCO), và **refresh có phương pháp** (AnTuTu tháng 8) kèm dạy người đọc hiểu con số.

---

## 3. Năm chủ đề "ngon" nhất tuần này (tiêu đề giật tít + dàn ý)

Trọng tâm anh yêu cầu: điện thoại + máy tính. Tiêu đề đã canh <=61 ký tự, từ khóa chính đứng đầu, description <=142 ký tự.

### Chủ đề 1 (điện thoại - bảng xếp hạng) - ĐÃ VIẾT + BUILD
- **Slug:** `top-dien-thoai-manh-nhat-antutu-thang-8-2026-xep-hang`
- **Tiêu đề (58 ký tự):** `Top điện thoại mạnh nhất AnTuTu tháng 8/2026: iQOO dẫn đầu`
- **Từ khóa chính:** AnTuTu tháng 8 2026, điện thoại mạnh nhất 2026, iQOO 15 Ultra AnTuTu, Red Magic AnTuTu.
- **Nguồn 3 lớp:** Radar MobileCity ("AnTuTu tháng 8 2026", iQOO 15 Ultra top 1, Red Magic top 2); dữ kiện gốc antutu.com/GSMArena (Snapdragon 8 Elite Gen 5, LPDDR5X, UFS 4.1, flagship vượt 4 triệu điểm v11); giá trị riêng: dạy đọc cơ cấu điểm CPU/GPU/MEM/UX, vì sao máy gaming thống trị, điểm số nói gì với người Việt.
- **Dàn ý:** Điểm AnTuTu đo gì / iQOO 15 Ultra giữ ngôi vương / Red Magic và điện thoại gaming / Phần còn lại + tầm trung / Người Việt nên đọc bảng xếp hạng thế nào.

### Chủ đề 2 (điện thoại - lấp gap thương hiệu) - ĐÃ VIẾT + BUILD
- **Slug:** `poco-f8-ultra-f8-pro-gia-viet-nam-snapdragon-8-elite-loa-bose-2026`
- **Tiêu đề (58 ký tự):** `POCO F8 Ultra, F8 Pro giá Việt Nam: Snapdragon 8, loa Bose`
- **Từ khóa chính:** POCO F8 Ultra, POCO F8 Pro, POCO F8 Ultra giá, POCO F8 Ultra Việt Nam.
- **Nguồn 3 lớp:** Radar Tinhte/CellphoneS/HungMobile (giá từ ~15,2-16,99tr, loa Bose 2.1, SD8 Elite Gen 5, pin >6000mAh); dữ kiện gốc GSMArena (6.9" AMOLED 3500 nit, tele kính tiềm vọng 5x, 6500mAh, 100W có dây + 50W không dây, IP68); giá trị riêng: định vị flagship giá tốt, so đối thủ OnePlus 15R/Redmi, có nên mua.
- **Dàn ý:** spec-box / Hiệu năng SD8 Elite Gen 5 tầm giá dưới 20tr / Loa Bose + màn 3500 nit / Camera zoom 5x, pin, IP68 / Có nên mua Ultra hay Pro.
- **Lưu ý media:** bài đang mượn thumbnail máy khác (chưa có media POCO trên site); nên thay bằng video POCO F8 thật khi lên local.

### Chủ đề 3 (máy tính - listicle theo nhu cầu) - ĐÃ VIẾT + BUILD
- **Slug:** `top-laptop-ai-copilot-pc-dang-mua-nua-cuoi-2026-theo-nhu-cau`
- **Tiêu đề (61 ký tự):** `Top laptop AI Copilot+ PC đáng mua nửa cuối 2026 theo nhu cầu`
- **Từ khóa chính:** laptop AI 2026, Copilot+ PC, laptop AI đáng mua, laptop NPU.
- **5+ model thật:** Lenovo Yoga Pro 7 14ASP9 (Ryzen AI 9 365, 2.8K OLED, ~1,54kg), ASUS ProArt P16 (creator), Lenovo Legion Pro 7 (Core Ultra 9 275HX), MSI Stealth A16 AI+ (pin 99,9Wh, ~2,1kg), ASUS Vivobook S 15 (Snapdragon X Elite X1E-78-100, OLED 3K 120Hz, 16GB/1TB).
- **Nguồn 3 lớp:** Radar FPTShop/GEARVN/laptop88 (laptop AI xu hướng 2026, giá tăng); dữ kiện gốc Microsoft/Lenovo/ASUS (chuẩn Copilot+ NPU >=40 TOPS); giá trị riêng: chọn theo nhu cầu (sáng tạo/gaming/di động/văn phòng) + lưu ý giá RAM-SSD leo thang.
- **Dàn ý:** Copilot+ PC là gì / Sáng tạo + đồ họa / Gaming + mạnh mà di động / Văn phòng pin trâu Snapdragon X / Chọn thế nào cho đúng.

### Chủ đề 4 (điện thoại - listicle pin) - ĐÃ VIẾT + BUILD
- **Slug:** `top-dien-thoai-pin-trau-tren-7000mah-dang-mua-thang-8-2026`
- **Tiêu đề (58 ký tự):** `Top điện thoại pin trâu trên 7000mAh đáng mua tháng 8/2026`
- **Từ khóa chính:** điện thoại pin trâu 2026, điện thoại pin 7000mAh, pin silicon carbon.
- **5+ model thật:** Redmi Note 17 Pro (9000mAh), OnePlus 15R (7400mAh, SD8 Gen 5), Oppo K15 (8000mAh), Realme 16T 5G (8000mAh), Honor Win Turbo (10.000mAh, sạc 80W, Dimensity 8500), Motorola Edge 70 Max (7100mAh, 7000 nit), iQOO 15 (7000mAh).
- **Nguồn 3 lớp:** Radar GenK/CellphoneS (điện thoại pin trâu, sạc nhanh 100W); dữ kiện gốc GSMArena (dung lượng pin từng máy); giá trị riêng: giải thích silicon-carbon, dạy "mAh không phải tất cả", chọn theo nhu cầu.
- **Dàn ý:** Vì sao pin lớn mà máy mỏng / Redmi Note 17 Pro + OnePlus 15R / Oppo K15, Realme 16T, Motorola / Honor Win Turbo 10.000mAh / Chọn pin trâu thế nào cho đúng.

### Chủ đề 5 (dự phòng - chờ sự kiện 12/8) - CHƯA VIẾT
- **Slug đề xuất:** `google-pixel-11-recap-made-by-google-12-8-2026-tensor-g6-ai`
- **Tiêu đề (dự kiến):** `Pixel 11 ra mắt 12/8: tất cả công bố, Tensor G6 và giá VN`
- **Vì sao để dự phòng:** sự kiện Made by Google diễn ra **12/8** (hôm nay 5/8 chưa xảy ra), viết recap trước ngày này là bịa. Đã có 2 bài Pixel 11 pre-event nên chỉ làm bài recap SAU 12/8 với dữ kiện chính thức (specs, giá, ngày về VN) để tránh cannibalization.
- **Watch item kèm:** Redmi K100 Pro ra mắt chính thức **11/8** -> nâng cấp bài rò rỉ `redmi-k100-k100-pro-ro-ri...` thành "chính thức" (giữ slug hoặc bài mới), bump `dateModified`.

---

## 4. Trạng thái batch phiên này

- **Đã viết + build sạch: 4 bài** (chủ đề 1-4), tập trung **điện thoại (3) + máy tính (1)** đúng trọng tâm anh yêu cầu (ưu tiên điện thoại/máy tính hơn cơ cấu esports §0c vì phiên này không verify được tin esports mới đủ chắc, tránh bịa).
- Mỗi bài: 1.195-1.490 từ, 5 media distinct rải đều (0 bài dồn cụm), 0 em-dash, description <=142 ký tự, title <=61 ký tự, 2-3 internal link đã kiểm tra tồn tại, stats/faq(6)/related(3) đầy đủ.
- Bài mới nhất (pin trâu, 14:30) tự thành hero "Tiêu điểm" trên blog.html.
- Chủ đề 5 (Pixel 11 recap) để brief chờ mốc 12/8.

## 5. Checklist bàn giao cho team / anh Long

- [ ] Local: `node scripts/check-media.mjs` -> xác nhận 0 lỗi (pass ở local vì YouTube truy cập được).
- [ ] (Ưu tiên) Thay media mượn ở bài POCO F8 bằng video/thumbnail POCO thật, verify §8, build lại.
- [ ] **Merge PR (nhánh `claude/friendly-cori-wom6tf`) vào `main`** để 4 bài lên production (§0: chỉ `main` mới deploy).
- [ ] Sau deploy: IndexNow §6 cho 4 URL mới + `blog.html`.
- [ ] Sau 11/8: cập nhật Redmi K100 Pro "chính thức". Sau 12/8: viết Pixel 11 recap (chủ đề 5).

*Nguồn tham chiếu: mobilecity.vn, antutu.com, gsmarena.com (AnTuTu + pin); tinhte.vn, cellphones.com.vn, hungmobile.vn (POCO F8); microsoft.com, lenovo.com, asus.com, fptshop.com.vn (laptop AI); genk.vn (radar đối thủ).*
