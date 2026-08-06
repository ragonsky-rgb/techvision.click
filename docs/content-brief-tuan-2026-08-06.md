# Content Brief + Radar tuần 06/08/2026 - techvision.click

> Radar Google Trends + cộng đồng công nghệ + phân tích 3 đối thủ + 5 chủ đề "ngon" kèm tiêu đề giật tít và dàn ý.
> Bám chuẩn `AGENTS.md` (no em-dash, >=5 media/bài, >=1.100 từ, mô hình nguồn 3 lớp, giọng trung lập).
> Ngày lập: 06/08/2026. Người lập: quy trình radar tự động (Claude Code on web).

---

## 0. Lưu ý vận hành (đọc trước) - media và cách xuất bản phiên này

Phiên tự động này chạy trong môi trường Claude Code on web có **chính sách chặn egress tới YouTube** (`youtube.com`, `i.ytimg.com` trả 403 policy-denial qua proxy; các host web thường như gsmarena, theverge cũng 403). Hệ quả với luật repo:

- **Không tự verify được thumbnail/oEmbed YouTube mới** theo §4 (kích thước ảnh, `playableInEmbed`).
- **`node scripts/check-media.mjs` không thể ra "0 lỗi"** trong môi trường này vì mọi URL i.ytimg.com đều bị 403 (hiện tượng môi trường, không phải media hỏng thật).

**Cách xử lý (theo đúng tiền lệ brief 03/08):** 5 bài trong batch này **chỉ dùng lại các media ID (thumbnail + video embed) đã verify và đang sống trên production**, lấy từ các bài liên quan đã đăng:
- AI (Lê Viết Quốc): tái dùng ID từ `gpt-5-6-cuoc-dua-ai...`, `google-gemini-3-5-pro...`, `grok-4-5-beta...`.
- Apple/Telegram: từ `apple-cho-thue-iphone-upgrade-klarna...`, `google-recaptcha-cu-chi-tay...`, `openai-khai-tu-chatgpt-atlas...`.
- Vivo G5i/G5z: từ `realme-16t-5g-pin-8000mah...`, `top-dien-thoai-pin-trau-tren-7000mah...`, `oppo-k15...`.
- LCP Split 3: từ `vcs-2026-mua-he-saigon-warriors...`, `worlds-2026-lmht...`.
- iQOO Z11: từ `redmi-k100-k100-pro-ro-ri...`, `xiaomi-17-vs-iqoo-15...`, `top-dien-thoai-choi-game...`.

Vì các ID này **đang phục vụ trên site thật**, chúng chắc chắn là ảnh sống + video cho nhúng, loại bỏ rủi ro đẩy ảnh xám/video chết lên production. Thumbnail dùng `hqdefault.jpg` (luôn tồn tại cho video hợp lệ). Mỗi bài có đủ **5 media distinct** (1 hero + 3 figure + 1 video iframe), hero khác ID video embed, rải đều theo §4 (đã chạy check dồn cụm local: **0 bài dồn cụm**), **0 em-dash**, thân bài **>=1.100 từ** (1.125 - 1.404), description <=160 ký tự, title <=65 ký tự, và **`astro build` chạy sạch (704 trang, không lỗi schema)**.

**Việc team nên làm trên máy local (YouTube không bị chặn), tùy chọn nâng chất:**
1. Chạy `node scripts/check-media.mjs` để xác nhận 0 lỗi (pass ở local).
2. (Tùy chọn) Thay media dùng lại bằng video/thumbnail riêng sát chủ đề từng bài, verify §8 (`size_download > 8000`, oEmbed sống, `playableInEmbed:true`), build lại.
3. **Refresh bài LCP Split 3 trước khi đăng**: kết quả vòng Thụy Sĩ đổi theo ngày, cập nhật lại BXH và cửa GAM Esports đúng thời điểm publish.
4. Theo §0 AGENTS.md, **merge vào `main`** để bài lên production (batch đưa lên nhánh phụ `claude/friendly-cori-k3loaa` + PR do ràng buộc môi trường tự động; xem mục 5).

---

## 1. Radar xu hướng Việt Nam (đầu tháng 8/2026)

Đối chiếu 699 bài đã có để lọc khoảng trống. Điểm mấu chốt: site đã cực dày, nhiều cụm nóng (Pixel 11, Redmi K100, iPhone 18, foldable, khủng hoảng RAM/SSD, hầu hết mô hình AI, esports MSI/EWC/VCS/Worlds) **đã phủ**. Batch chọn 5 khoảng trống thật sự.

| Cụm chủ đề đang nóng | Tín hiệu cầu tìm kiếm | Site đã có? | Kết luận |
| --- | --- | --- | --- |
| **Lê Viết Quốc rời Google lập Discovery Loop** | Breaking 05-06/8, phủ khắp VnExpress/ThanhNien/DanTri/Znews; gắn tên người Việt, CTR cao | Chưa có | ✅ Gap #1, ưu tiên cao |
| **Apple gỡ Telegram khỏi App Store (CSAM)** | Breaking 04/8, Bloomberg/MacRumors/9to5Mac/Forbes; 2 thương hiệu lớn | Chưa (bài telegram cũ khác chủ đề) | ✅ Gap, timely |
| **Vivo G5i/G5z pin 7200mAh, IP69** | Sản phẩm giá rẻ, có giá tham khảo VND, IP69 hiếm | Chưa (chỉ có vivo-x300, vivo-x-fold6) | ✅ Gap, sản phẩm |
| **LCP 2026 Split 3 (thể thức Thụy Sĩ, GAM)** | Giải chạy 24/7-30/8, kết quả cập nhật từng ngày, có đội VN | Chưa (chỉ worlds/vcs) | ✅ Gap, esports timely |
| **iQOO Z11 pin 9020mAh silicon-carbon** | Ra mắt 20/8, pin kỷ lục giật tít | Chưa (chỉ iqoo-15) | ✅ Gap, smartphone |
| Pixel 11 (12/8), Redmi K100 Pro (11/8) | Rất nóng | **Đã có** bản rò rỉ + sự kiện | ❌ Bão hòa |
| Khủng hoảng RAM/SSD, foldable, iPhone 18 | Cầu cao | Phủ rất dày | ❌ Bão hòa |

**Chủ đề dự phòng (chưa viết, để team cân nhắc):** báo cáo Sensor Tower "người Việt dành 704 triệu giờ, chi 14,4 triệu USD cho ứng dụng AI nửa đầu 2026" (số liệu VN, đa dạng hóa khỏi tin sản phẩm).

---

## 2. Phân tích 3 đối thủ lớn (tuần qua)

### 2.1. GenK (genk.vn)
- Tuần này đẩy mạnh: Redmi K100 Pro hands-on (màn 185Hz, pin 8580mAh), tablet cho sinh viên nhập học, tin rò rỉ flagship.
- Công thức thắng: tin nhanh + tít cảm xúc. Điểm yếu: ít bài giải thích gốc, ít góc người Việt trong tin quốc tế.
- **Điểm mình thắng:** khai thác góc "người Việt" (Lê Viết Quốc) mà đối thủ đưa tin phẳng; giải thích đầy đủ qua nguồn quốc tế.

### 2.2. CellphoneS / Sforum (cellphones.com.vn/sforum)
- Mạnh esports (LCP, VCS, bảng xếp hạng), tư vấn mua (top máy, giá VN), tin rò rỉ Redmi K100 Pro.
- Công thức thắng: bám nhu cầu giao dịch. Điểm yếu: thiên PR bán hàng.
- **Điểm mình thắng:** trung lập, bảng so sánh + mô hình nguồn 3 lớp, phân tích esports sâu (ý nghĩa vé Worlds).

### 2.3. Thế Giới Di Động / FPT Shop
- Ranking mạnh query giao dịch ("giá bao nhiêu", "top đáng mua") và tin esports phụ trợ (LCP Split 3, thể thức Thụy Sĩ).
- **Điểm mình thắng:** bài giải thích/thời sự (Apple gỡ Telegram, pin silicon-carbon là gì) mà retailer làm mỏng.

**Bài học chọn đề:** đối thủ dồn vào rò rỉ flagship (Pixel 11, Redmi K100 Pro, đã bão hòa trên site mình) + esports LCP + tư vấn mua. Mình né phần bão hòa, đánh vào **góc người Việt** (Lê Viết Quốc), **thời sự nền tảng** (Apple/Telegram), **sản phẩm pin lớn chưa ai trên site làm** (Vivo G5, iQOO Z11) và **esports phân tích sâu** (LCP Split 3 + cửa GAM).

---

## 3. Năm chủ đề "ngon" nhất tuần này (tiêu đề giật tít + dàn ý) - ĐÃ VIẾT ĐỦ 5

Tiêu đề đã canh <=65 ký tự, từ khóa chính đứng đầu. Cả 5 đã viết thành file `.md` trong `src/content/articles/`.

### Chủ đề 1 (AI - góc người Việt) - ĐÃ VIẾT
- **Slug:** `le-viet-quoc-roi-google-lap-startup-ai-discovery-loop-2026`
- **Tiêu đề (62 ký tự):** `Lê Viết Quốc rời Google lập startup AI Discovery Loop`
- **Từ khóa chính:** Lê Viết Quốc, Discovery Loop, startup AI người Việt, Google Brain.
- **Nguồn 3 lớp:** Radar VnExpress/ThanhNien/DanTri; dữ kiện gốc (công bố 5/8: Lê Viết Quốc + Jeff Dean, Sanjay Ghemawat, Oriol Vinyals; PBC tự động hóa nghiên cứu khoa học; Alphabet đầu tư; Hassabis làm Chủ tịch DeepMind); giá trị riêng: niềm tự hào người Việt + ý nghĩa "AI cho khoa học".
- **Dàn ý:** spec-box / Lê Viết Quốc là ai / Discovery Loop làm gì / Dàn sao đồng sáng lập + Alphabet / Vì sao đáng chú ý (video) / Góc người Việt.

### Chủ đề 2 (tin - nền tảng) - ĐÃ VIẾT
- **Slug:** `apple-go-telegram-app-store-toan-cau-csam-2026`
- **Tiêu đề (61 ký tự):** `Vì sao Apple gỡ Telegram khỏi App Store toàn cầu 2026`
- **Từ khóa chính:** Apple gỡ Telegram, Telegram App Store, CSAM.
- **Nguồn 3 lớp:** Radar VnExpress số hóa; dữ kiện gốc Bloomberg/MacRumors/9to5Mac/Forbes (gỡ 4/8, lý do CSAM, Telegram nói 1 tài khoản, đã gỡ 337.900+ nhóm/kênh, khôi phục sau ~40 phút); giá trị riêng: quyền lực App Store + góc người dùng VN.
- **Dàn ý:** spec-box / Chuyện gì xảy ra / Lý do Apple + CSAM là gì / Telegram phản hồi / Quyền lực nền tảng (video) / Người Việt nên làm gì.

### Chủ đề 3 (sản phẩm - smartphone) - ĐÃ VIẾT
- **Slug:** `vivo-g5i-g5z-ra-mat-pin-7200mah-ip69-gia-tham-khao-2026`
- **Tiêu đề (58 ký tự):** `Vivo G5i, G5z: pin 7200mAh, chuẩn IP69, giá tham khảo`
- **Từ khóa chính:** Vivo G5i, Vivo G5z, điện thoại pin trâu giá rẻ, IP69.
- **Nguồn 3 lớp:** Radar vietnam.vn/tuanha; dữ kiện gốc GSMArena/thetechoutlook (7200mAh, sạc 44W, SD 4 Gen 2, 6.75" HD+ 120Hz LCD, 50MP, IP68+IP69, OriginOS 6); giá trị riêng: giá tham khảo VN (ghi rõ chưa chính hãng) + so sánh phân khúc pin lớn.
- **Lưu ý:** giá VN là tham khảo, đã hedge đúng mức; công suất sạc lấy 44W theo nguồn quốc tế (không dùng 90W).

### Chủ đề 4 (esports) - ĐÃ VIẾT
- **Slug:** `lcp-2026-split-3-swiss-stage-lich-the-thuc-gam-esports`
- **Tiêu đề (63 ký tự):** `LCP 2026 Split 3: thể thức Thụy Sĩ và cửa GAM Esports`
- **Từ khóa chính:** LCP 2026 Split 3, GAM Esports, thể thức Thụy Sĩ LMHT, suất Worlds 2026.
- **Nguồn 3 lớp:** Radar FPT Shop/thethao247; dữ kiện gốc OP.GG/Liquipedia (24/7-30/8, 8 đội, Swiss đủ 3 thắng/3 thua, thưởng 80.000 USD, playoffs double elim Bo5 tranh vé Worlds); giá trị riêng: cửa đi tiếp của GAM + ý nghĩa vé Worlds.
- **Lưu ý QUAN TRỌNG:** BXH vòng Thụy Sĩ đổi từng ngày. Bài đã hedge "tính tới đầu tháng 8" nhưng **cần refresh kết quả đúng ngày publish**.

### Chủ đề 5 (tin - smartphone) - ĐÃ VIẾT
- **Slug:** `iqoo-z11-pin-9020mah-silicon-carbon-dimensity-7500-turbo-2026`
- **Tiêu đề (59 ký tự):** `iQOO Z11: pin 9020mAh kỷ lục, chip Dimensity 7500 Turbo`
- **Từ khóa chính:** iQOO Z11, pin 9020mAh, pin silicon carbon, điện thoại pin lớn nhất.
- **Nguồn 3 lớp:** Radar cầu "pin lớn nhất"; dữ kiện gốc GSMArena/gizchina (xác nhận 20/8, pin 9020mAh silicon-carbon, 90W, 8,25mm/213g, Dimensity 7500 Turbo bản Ấn Độ); giá trị riêng: silicon-carbon là gì + so sánh làn sóng pin lớn.
- **Lưu ý:** đã tách rõ phần đã xác nhận vs tin đồn (màn/camera/giá là rò rỉ).

---

## 4. Trạng thái batch phiên này

- **Đã viết + build sạch: 5 bài** (đúng yêu cầu 5 chủ đề). Cơ cấu: 2 tin công nghệ (AI, Apple/Telegram) + 2 smartphone (Vivo G5, iQOO Z11) + 1 esports (LCP Split 3). Nghiêng về điện thoại + chủ đề hot theo yêu cầu.
- Mỗi bài: >=1.100 từ (1.125 - 1.404), 5 media distinct rải đều (0 dồn cụm), 0 em-dash, description <=160 ký tự, title <=65 ký tự, 2-3 internal link đã kiểm tra tồn tại, stats (6)/faq (6)/related (3) đầy đủ.
- Bài mới nhất (Lê Viết Quốc, 18:30) **tự lên hero "Tiêu điểm"** trên blog.html (đã xác nhận khi build).
- Chủ đề dự phòng (Sensor Tower 704 triệu giờ AI) để team quyết định nếu muốn thêm bài.

## 5. Checklist bàn giao cho team / anh Long

- [ ] Local: `node scripts/check-media.mjs` -> xác nhận 0 lỗi (pass ở local vì YouTube truy cập được).
- [ ] **Refresh bài LCP Split 3** theo kết quả mới nhất trước khi đăng (BXH đổi từng ngày).
- [ ] (Tùy chọn) Thay media dùng lại bằng media riêng sát chủ đề hơn, verify §8, build lại.
- [ ] **Merge PR nhánh `claude/friendly-cori-k3loaa` vào `main`** để bài lên production (§0 yêu cầu `main` mới deploy).
- [ ] Sau deploy: IndexNow §6 cho 5 URL mới + `blog.html`.

*Nguồn tham chiếu: vnexpress.net, thanhnien.vn, dantri.com.vn, 1thegioi.vn (Lê Viết Quốc); bloomberg.com, macrumors.com, 9to5mac.com, forbes.com (Apple/Telegram); gsmarena.com, thetechoutlook.com, xiaomiui.net (Vivo G5i/G5z); esports.op.gg, liquipedia.net, fptshop.com.vn (LCP Split 3); gsmarena.com, gizchina.com, 91mobiles.com (iQOO Z11).*
