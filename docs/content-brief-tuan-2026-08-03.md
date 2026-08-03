# Content Brief + Radar tuần 03/08/2026 - techvision.click

> Radar Google Trends + cộng đồng công nghệ + phân tích 3 đối thủ + 5 chủ đề "ngon" kèm tiêu đề giật tít và dàn ý.
> Bám chuẩn `AGENTS.md` (no em-dash, >=5 media/bài, >=1.100 từ, mô hình nguồn 3 lớp, giọng trung lập).
> Ngày lập: 03/08/2026. Người lập: quy trình radar tự động (Claude Code on web).

---

## 0. Lưu ý vận hành (đọc trước) - media và cách xuất bản phiên này

Phiên tự động này chạy trong môi trường Claude Code on web có **chính sách chặn egress tới YouTube** (`youtube.com`, `i.ytimg.com` trả 403 policy-denial qua proxy). Hệ quả với luật repo:

- **Không tự verify được thumbnail/oEmbed YouTube mới** theo §4 (kích thước ảnh, `playableInEmbed`).
- **`node scripts/check-media.mjs` không thể ra "0 lỗi"** trong môi trường này vì mọi URL i.ytimg.com đều bị 403 (hiện tượng môi trường, không phải media hỏng thật).

**Cách xử lý đã áp dụng để vẫn air được bài mà không vi phạm luật media:** 4 bài trong batch này **chỉ dùng lại các media ID (thumbnail + video embed) đã verify và đang sống trên production** (lấy từ các bài liên quan đã đăng: `oneplus-15r...`, `vivo-x300-pro...`, `vcs-2026-mua-he-khep-lai...`, `ewc-2026-lmht...`, `chip-laptop-2026...`). Vì các ID này đang phục vụ trên site thật, chúng **chắc chắn là ảnh sống + video cho nhúng**, loại bỏ rủi ro đẩy ảnh xám/video chết lên production. Mỗi bài có đủ 5 media distinct (1 hero + 3 figure + 1 video iframe), rải đều theo §4 (đã kiểm tra khoảng cách >=35 từ giữa 2 khối media), 0 em-dash, thân bài >=1.100 từ, và **`npx astro build` chạy sạch (687 trang, không lỗi schema)**.

**Việc team nên làm trên máy local (nơi YouTube không bị chặn), tùy chọn nâng chất:**
1. Chạy `node scripts/check-media.mjs` để xác nhận 0 lỗi (sẽ pass vì YouTube truy cập được ở local).
2. Nếu muốn media sát chủ đề hơn, thay các ID dùng lại bằng video/thumbnail riêng cho từng bài, verify theo §8 (`size_download > 8000`, oEmbed sống, `playableInEmbed:true`), rồi build lại.
3. Theo §0 AGENTS.md, **merge vào `main`** để bài lên production (batch này được đưa lên nhánh phụ + PR do ràng buộc môi trường tự động; xem mục 5).

---

## 1. Radar xu hướng Việt Nam (đầu tháng 8/2026)

Tổng hợp tín hiệu tăng trưởng đột biến tại VN, đối chiếu 744 bài đã có để lọc khoảng trống nội dung.

| Cụm chủ đề đang nóng | Tín hiệu cầu tìm kiếm | Site đã có? | Khoảng trống |
| --- | --- | --- | --- |
| **OnePlus 16 rò rỉ** (Snapdragon 8 Elite Gen 6 Pro, pin 9.000mAh, camera 200MP, màn 185Hz) | Rò rỉ dồn dập cuối 7 - đầu 8 (Gizmochina, AndroidHeadlines, VnReview, GenK, XTMobile); OnePlus rút khỏi Mỹ/EU tạo góc "mua được không". | Có 15R, **chưa có 16**. | ✅ Gap, cầu cao |
| **Đua chip 2nm**: Snapdragon 8 Elite Gen 6 vs Dimensity 9600 | Loạt bài quốc tế 27-29/7 (Gizmochina, Wccftech, Notebookcheck); Snapdragon Summit 22-24/9. Chip 2nm đầu tiên. | Nhắc rải rác. **Chưa có bài chuyên so sánh.** | ✅ Gap, cầu tăng theo mùa flagship |
| **VCS Mùa Hè 2026 - Chung kết** (Saigon Warriors vô địch) | SGW vô địch, thắng Saigon Dino ở chung kết; vé thăng hạng LCP (Liquipedia, lolesports, Sforum, FPT Shop). | Chỉ có bài preview. **Chưa có bài kết quả.** | ✅ Gap, timely |
| **Cách đọc thông số CPU laptop** (nhân/luồng, P/E-core, TDP, NPU) | Evergreen high-intent; cộng hưởng cơn sốt giá linh kiện 2026 (mua đúng, đỡ phí). | Có bài chip laptop, **chưa có bài đọc thông số CPU**. | ✅ Gap, evergreen |
| **Made by Google 12/8 - Pixel 11** | Google xác nhận sự kiện 12/8; Pixel 11 / Pro / Pro Fold. | **Đã có** bài sự kiện + Pixel 11 Pro. | ⚠️ Gần bão hòa, chỉ nên làm góc "cách xem + 5 điều chờ đợi" |
| AI tạo/phục chế ảnh (Nano Banana Pro) | Rising query mạnh mảng AI | **Đã có** bài how-to (đăng 01/8) | ❌ Vừa phủ |
| Foldable, khủng hoảng chip nhớ | Cầu cao | Phủ rất dày | ❌ Bão hòa |

**Kết luận radar:** 4 khoảng trống chắc chắn (OnePlus 16, chip 2nm, VCS Chung kết, CPU laptop) đủ cho 1 batch đúng cơ cấu §0c (2 tin công nghệ + 1 esports + 1 cẩm nang máy tính). Chủ đề 5 (Made by Google) để dự phòng, chỉ làm nếu ra được góc khác tránh cannibalization với 2 bài Pixel đã có.

---

## 2. Phân tích 3 đối thủ lớn (tuần qua)

### 2.1. GenK (genk.vn)
- Đẩy tin rò rỉ flagship Trung Quốc (**OnePlus 16 pin 9.000mAh, ra mắt tháng 10**), foldable Samsung, iPhone 18.
- Công thức thắng: tin nhanh + tít cảm xúc "ảnh hưởng túi tiền". Điểm yếu: ít bài giải thích kỹ thuật gốc, ít cẩm nang chuẩn SEO.
- **Điểm mình thắng:** định vị "giải thích đầy đủ nhất qua lăng kính quốc tế" + góc VN (mua được không, giá về VN).

### 2.2. CellphoneS / Sforum (cellphones.com.vn/sforum)
- Mạnh **esports** (VCS 2026, bảng xếp hạng, thể thức) và tư vấn mua (top máy, giá VN).
- Công thức thắng: bám nhu cầu giao dịch. Điểm yếu: thiên PR bán hàng, thiếu trung lập.
- **Điểm mình thắng:** trung lập, có bảng so sánh + mô hình nguồn 3 lớp, phân tích esports sâu (phong độ, ý nghĩa vé LCP).

### 2.3. Thế Giới Di Động / FPT Shop
- Ranking mạnh query giao dịch ("giá bao nhiêu", "top đáng mua", "cách chọn") và tin esports phụ trợ (bảng xếp hạng VCS).
- **Điểm mình thắng:** bài how-to/giải thích kỹ thuật (cách đọc thông số CPU, chip 2nm là gì) mà retailer làm mỏng.

**Bài học chọn đề:** đối thủ dồn vào rò rỉ flagship, esports VCS và tư vấn mua. Mình né phần bão hòa (foldable), đánh vào **giải thích sâu** (chip 2nm, đọc thông số CPU), **phân tích esports** (VCS Chung kết + vé LCP) và **góc VN cho rò rỉ** (OnePlus 16 mua được không).

---

## 3. Năm chủ đề "ngon" nhất tuần này (tiêu đề giật tít + dàn ý)

Cơ cấu §0c: 2 tin công nghệ + 1 esports + 1 cẩm nang máy tính (+ 1 dự phòng). Tiêu đề đã canh <=65 ký tự, từ khóa chính đứng đầu.

### Chủ đề 1 (tin - smartphone) - ĐÃ VIẾT
- **Slug:** `oneplus-16-ro-ri-snapdragon-8-elite-gen6-pro-pin-9000mah-2026`
- **Tiêu đề (55 ký tự):** `OnePlus 16 rò rỉ: pin 9000mAh, camera 200MP, chip Gen 6`
- **Từ khóa chính:** OnePlus 16, OnePlus 16 cấu hình, pin 9000mAh, OnePlus 16 giá.
- **Nguồn 3 lớp:** Radar VnReview/XTMobile/GenK; dữ kiện gốc Gizmochina/AndroidHeadlines (Snapdragon 8 Elite Gen 6 Pro, pin 9.000mAh silicon-carbon, tele 200MP, màn BOE 185Hz, giá ~4.999 tệ, ra mắt T9-T10 chỉ ở châu Á); giá trị riêng: góc "người Việt mua được không" khi OnePlus rút khỏi Mỹ/EU.
- **Dàn ý:** spec-box rò rỉ / Cấu hình mạnh phá kỷ lục / Camera 200MP + màn 185Hz / Ra mắt sớm + bài toán giá / Rào cản OnePlus rút lui với người Việt.

### Chủ đề 2 (tin - chip) - ĐÃ VIẾT
- **Slug:** `snapdragon-8-elite-gen-6-vs-dimensity-9600-chip-2nm-2026`
- **Tiêu đề (56 ký tự):** `Snapdragon 8 Elite Gen 6 vs Dimensity 9600: đua chip 2nm`
- **Từ khóa chính:** Snapdragon 8 Elite Gen 6, Dimensity 9600, chip 2nm, chip flagship 2026.
- **Nguồn 3 lớp:** Radar cầu "chip nào mạnh nhất"; dữ kiện gốc Gizmochina/Wccftech (cả hai TSMC 2nm N2P, bố cục 2+3+3, Snapdragon nhân Oryon + Adreno 845, Dimensity nhân ARM + Immortalis tạo khung hình; Summit 22-24/9); giá trị riêng: 2nm lợi gì, máy nào dùng trước, về VN khi nào.
- **Dàn ý:** 2nm là gì và vì sao quan trọng / Snapdragon 8 Elite Gen 6 + bản Pro / Dimensity 9600 đáp trả / Người dùng Việt nên quan tâm gì.

### Chủ đề 3 (esports) - ĐÃ VIẾT
- **Slug:** `vcs-2026-mua-he-saigon-warriors-vo-dich-chung-ket-ve-lcp`
- **Tiêu đề (54 ký tự):** `VCS Mùa Hè 2026: Saigon Warriors vô địch, giành vé LCP`
- **Từ khóa chính:** VCS mùa hè 2026, VCS 2026 vô địch, Saigon Warriors, vé LCP.
- **Nguồn 3 lớp:** Radar ThanhNien/LagVN/Sforum; dữ kiện gốc Liquipedia/lolesports (SGW vô địch, thắng Saigon Dino ở chung kết, chủ đề Stormforce, SGW thắng CyberCore 3:0 bán kết nhánh trên, vé thăng hạng LCP); giá trị riêng: phân tích phong độ SGW, ý nghĩa vé LCP.
- **Lưu ý:** tỉ số chung kết cụ thể chưa xác nhận trong nguồn công khai, bài viết hedge đúng mức và ghi chú cập nhật theo BTC.

### Chủ đề 4 (cẩm nang - máy tính) - ĐÃ VIẾT
- **Slug:** `cach-doc-thong-so-cpu-laptop-nhan-luong-xung-nhip-tdp-2026`
- **Tiêu đề (52 ký tự):** `Cách đọc thông số CPU laptop: nhân, luồng, xung, TDP`
- **Từ khóa chính:** thông số CPU laptop, cách chọn CPU laptop, nhân và luồng, P-core E-core là gì, TDP là gì.
- **Vì sao ngon:** evergreen high-intent, gap (có bài chip laptop nhưng chưa có bài đọc thông số CPU), cộng hưởng cơn sốt giá linh kiện (chọn đúng đỡ phí tiền).
- **Dàn ý:** spec-box thông số / Nhân và luồng / P-core E-core và xung nhịp / Cache, TDP và pin-nhiệt / Tên chip + NPU 2026 / Chọn theo nhu cầu.

### Chủ đề 5 (dự phòng - chỉ làm nếu ra góc khác) - CHƯA VIẾT
- **Slug đề xuất:** `made-by-google-12-8-2026-pixel-11-cach-xem-truc-tiep-5-diem-cho-doi`
- **Tiêu đề (57 ký tự):** `Made by Google 12/8: cách xem trực tiếp và 5 điều chờ đợi`
- **Từ khóa chính:** Made by Google 2026, sự kiện Google 12/8, Pixel 11, cách xem trực tiếp.
- **Lưu ý dedup:** đối chiếu kỹ `google-pixel-11-pro-fold-su-kien-made-by-google-12-8-2026` và `google-pixel-11-pro-tensor-g6-2nm-pixel-glow-camera-ai-2026`; chỉ làm nếu góc "checklist cách xem + 5 nâng cấp đáng chờ" đủ khác để tránh cannibalization. Nếu trùng ý, giữ batch 4 bài theo §0c.

---

## 4. Trạng thái batch phiên này

- **Đã viết + build sạch: 4 bài** (chủ đề 1-4), đúng cơ cấu §0c (2 tin công nghệ + 1 esports + 1 cẩm nang máy tính).
- Mỗi bài: >=1.100 từ, 5 media distinct (rải đều), 0 em-dash, description <=160 ký tự, title <=65 ký tự, 2-3 internal link đã kiểm tra tồn tại, stats/faq/related đầy đủ.
- Chủ đề 5 để lại dạng brief cho team quyết định (tránh dedup Pixel).

## 5. Checklist bàn giao cho team / anh Long

- [ ] Local: `node scripts/check-media.mjs` -> xác nhận 0 lỗi (pass ở local vì YouTube truy cập được).
- [ ] (Tùy chọn) Thay media dùng lại bằng media riêng sát chủ đề hơn, verify theo §8, build lại.
- [ ] Kiểm tra description <=160 ký tự lần cuối (đã đạt), bài mới nhất (OnePlus 16, 18:30) tự lên hero "Tiêu điểm".
- [ ] **Merge PR vào `main`** để bài lên production (batch đưa lên nhánh phụ do ràng buộc môi trường tự động; §0 yêu cầu `main` mới deploy).
- [ ] Sau deploy: IndexNow §6 cho 4 URL mới + `blog.html`.

*Nguồn tham chiếu: gizmochina.com, androidheadlines.com, wccftech.com, notebookcheck.net (OnePlus 16 + chip 2nm); vnreview.vn, xtmobile.vn, genk.vn (radar VN + đối thủ); liquipedia.net, lolesports.com, cellphones.com.vn/sforum, fptshop.com.vn (VCS 2026); intel.com, amd.com (thông số CPU).*
