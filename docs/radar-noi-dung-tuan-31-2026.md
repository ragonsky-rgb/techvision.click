# Radar nội dung techvision.click, tuần 31/2026 (cuối tháng 7)

> Ngày lập: 29/7/2026. Người lập: quy trình radar tự động (Claude Code on web).
> Mục tiêu: quét trend đang tăng đột biến tại VN (điện thoại, máy tính, chủ đề công nghệ hot), soi 3 đối thủ, đề xuất 5 chủ đề "ngon" kèm tiêu đề giật tít và dàn ý để team Content triển khai ngay.

## 0. Lưu ý quan trọng về việc "air lên website luôn"

Phiên làm việc này chạy trong môi trường Claude Code on the web (sandbox từ xa). Chính sách egress của môi trường **chặn `youtube.com` và `i.ytimg.com` (trả 403)** cho mọi công cụ (curl, Node fetch và cả WebFetch). Điều này chạm trực tiếp hai luật bắt buộc trong AGENTS.md:

1. **§0 và §4:** mỗi bài phải có tối thiểu 5 media distinct (1 hero + tối thiểu 3 figure + tối thiểu 1 video iframe), tất cả là YouTube và **phải verify bằng kích thước thật + kiểm tra embed còn sống**. Không được dán URL chưa kiểm tra.
2. **§0b (checklist chống lỗi):** trước mỗi commit phải chạy `node scripts/check-media.mjs` cho ra 0 lỗi. Trong môi trường này script báo **toàn bộ** media (kể cả media cũ đã verify) là lỗi 403 vì không ra được YouTube, nên cổng chất lượng bắt buộc **không thể pass**.

Kết luận: **không thể tự động xuất bản bài có media đạt chuẩn từ môi trường này** mà không vi phạm luật của chính website (và có nguy cơ đẩy ảnh xám/video chết lên một trang tin production). Vì vậy deliverable của phiên này là:

- Báo cáo radar + phân tích đối thủ + 5 chủ đề kèm tiêu đề và dàn ý (phần dưới).
- Bản thảo hoàn chỉnh (prose đầy đủ, frontmatter, FAQ, internal link) cho 2 bài mạnh nhất trong `docs/drafts/`, kèm danh sách video YouTube ứng viên để verify.

**Việc team cần làm để lên bài (trên máy local, nơi YouTube không bị chặn):**
1. Với mỗi ID video ứng viên trong bản thảo, chạy snippet verify ở AGENTS.md §8 (kiểm tra maxres > 8000 byte + oembed sống + `playableInEmbed:true`). Thay ID chết, hạ maxres xám sang hqdefault.
2. Chuyển file từ `docs/drafts/` sang `src/content/articles/`, rải media theo luật giãn cách §4.
3. `node scripts/check-media.mjs` cho ra 0 lỗi → build §5 → commit thẳng `main` → đẩy index §6.

---

## 1. Trend đang tăng đột biến tại VN (cuối tháng 7/2026)

Nguồn: Google Trends/Cốc Cốc Q2, VnExpress, Genk, Tinhte, CafeF, PhoneArena, TrendForce (qua báo VN). Xếp theo mức độ nóng + demand tìm kiếm.

| # | Chủ đề đang nóng | Tín hiệu | Trạng thái trên techvision |
|---|---|---|---|
| 1 | **Khủng hoảng chip nhớ (RAM/SSD/DRAM) đẩy giá điện thoại, laptop tăng** | DRAM hợp đồng dự báo tăng 58-63% quý II/2026, quý I tăng ~90% YoY; AI ngốn ~20% sản lượng DRAM toàn cầu | **ĐÃ PHỦ DÀY** (10+ bài: giá RAM/SSD, laptop tăng 30%, smartphone cao cấp tăng, iPhone 18 tăng giá bộ nhớ...) |
| 2 | **Samsung Galaxy Z Fold8 / Z Flip8** ra mắt Unpacked 22/7 | Loạt bài Genk/Tinhte đưa máy đi trải nghiệm, hỏi đáp cấu hình | **ĐÃ PHỦ DÀY** (17 bài fold/flip) |
| 3 | **VinFast Kinet & Kyo** xe máy điện ra mắt 20/7, giá từ 30 triệu | VnExpress, Dân trí, Tiền Phong, techz đồng loạt đưa | **ĐÃ CÓ** (`vinfast-kyo-kinet-xe-may-dien-ra-mat-gia-tu-30-trieu-2026`) |
| 4 | **EWC 2026 LMHT** (15-19/7), Free Fire, Valorant | DK/DPlus KIA vô địch LMHT; 100 Thieves vô địch Valorant | **ĐÃ PHỦ DÀY** (nhiều bài EWC) |
| 5 | **Đua model AI** GPT-5.6 (9/7), Gemini 3.6 Flash (21/7), Claude Opus 5 (24/7) | Cụm search "AI" chuyển từ "là gì" sang "cách dùng" | **ĐÃ CÓ ĐỦ** (mỗi model 1 bài) |
| 6 | **iPhone 18 Pro / Air / Fold** sự kiện dự kiến 8/9 | CafeF, dienmaycholon tổng hợp tin đồn 5 phiên bản | **ĐÃ PHỦ DÀY** (nhiều bài iPhone 18) |
| 7 | **Apple tăng giá 14 dòng ~20%** (25/6) | Đợt tăng giá đồng loạt lớn nhất lịch sử Apple | **ĐÃ CÓ** (macbook/ipad/mac studio tăng giá) |

**Nhận định radar:** techvision.click đã bám cực sát tất cả các trend tin nóng của tuần. Chạy đua breaking news với các trend ở bảng trên là **echo lại chính mình**, không thêm giá trị SEO. Dư địa tăng trưởng thật nằm ở **evergreen high-intent** (cụm "là gì", "cách chọn", "chọn loại nào") mà site chưa có, cộng hưởng với chính cơn sốt giá bộ nhớ đang khiến người dùng cân nhắc kỹ trước khi mua. Đó là gốc rễ 5 đề xuất bên dưới.

---

## 2. Phân tích 3 đối thủ (tuần qua)

Chọn 3 đối thủ nằm trong lớp "radar" của AGENTS.md và cạnh tranh trực tiếp mảng tin/tư vấn công nghệ tiếng Việt.

### 2.1. GenK (genk.vn)
Bài tương tác cao tuần qua:
- Khủng hoảng chip nhớ toàn cầu khiến giá laptop, RAM, SSD tăng phi mã, "người dùng Việt phải chờ đến bao giờ".
- Trải nghiệm Galaxy Z Fold8 (mang máy đi London), 1 ngày sau Unpacked.
- iPhone 17 Pro Max lập kỷ lục giữ giá, nhiều iPhone cũ giảm sâu.
- Samsung muốn nâng sản lượng DRAM phổ thông thêm ~15% giữa bão giá chip nhớ.
- **Công thức thắng của GenK:** tin nóng + góc "ảnh hưởng túi tiền người Việt" + tít cảm xúc. Điểm yếu: nặng tin, ít bài cẩm nang chuẩn SEO dạng "là gì/cách chọn".

### 2.2. VnExpress (vnexpress.net/so-hoa)
- Giá DRAM dự báo tăng 63% quý II/2026 (bài dữ kiện, nhiều backlink).
- VinFast ra mắt xe máy điện Kyo và Kinet, giá từ 30 triệu.
- **Công thức thắng:** tốc độ + uy tín nguồn + domain mạnh, luôn top SERP tin nóng. Không đấu tốc độ với VnExpress được; phải thắng bằng chiều sâu giải thích.

### 2.3. CellphoneS / Sforum + FPTShop (mảng tư vấn mua sắm)
- "Top 7 điện thoại mới nhất 2026", "VCS 2026 chi tiết thể thức", "Nintendo Switch 2 giá bao nhiêu".
- **Công thức thắng:** bài "top/giá/cấu hình" gắn nhu cầu mua, nhắm từ khóa giao dịch. Điểm yếu: thiên PR sản phẩm mình bán, thiếu trung lập, ít giải thích kỹ thuật gốc.

**Khoảng trống để techvision chen vào:** bài **giải thích kỹ thuật trung lập, đầy đủ nhất, qua lăng kính quốc tế** cho những cụm từ khóa người mua gõ NGAY TRƯỚC quyết định mua (đúng định vị §0). Ba đối thủ đều yếu ở mảng này.

---

## 3. Năm chủ đề "ngon" nhất cần viết tuần này

Tất cả đều là **gap đã kiểm tra** (site chưa có bài trùng), evergreen, high-intent, dữ kiện ổn định (rủi ro bịa số thấp), và cộng hưởng với cơn sốt giá bộ nhớ. Mix: 3 điện thoại, 2 máy tính.

### Chủ đề 1 (điện thoại, ưu tiên số 1): UFS là gì, bộ nhớ trong điện thoại UFS 4.1 / 3.1 / eMMC khác nhau ra sao
- **Vì sao ngon:** cộng hưởng trực tiếp trend giá bộ nhớ; phân khúc UFS/eMMC là nơi "thiếu hụt lớn nhất" (nguồn: bài giá RAM). Người mua máy giá rẻ tới cận cao cấp đều gõ "UFS là gì", "máy này UFS mấy". Site có đủ bài RAM nhưng **chưa có bài ROM/bộ nhớ trong**.
- **Tiêu đề giật tít (chọn 1, đứng đầu từ khóa, ≤65 ký tự):**
  - "UFS là gì? UFS 4.1, 3.1 và eMMC khác nhau thế nào 2026"
  - "Bộ nhớ trong điện thoại UFS 4.1 vs 3.1: khác biệt thật sự"
- **Từ khóa chính:** `UFS là gì`, `UFS 4.1`, `bộ nhớ trong điện thoại`, `eMMC vs UFS`, `UFS 3.1 và 4.1 khác gì`.
- **Dàn ý:** spec-box bảng tốc độ đọc/ghi các đời (eMMC 5.1, UFS 2.2, 3.1, 4.0, 4.1) → H2 UFS là gì và khác RAM chỗ nào → H2 Các đời UFS và tốc độ thực tế → H2 UFS ảnh hưởng gì tới trải nghiệm (mở app, quay 8K, cài game) → H2 eMMC còn trên máy nào, vì sao nên tránh khi mua → H2 Bối cảnh giá bộ nhớ 2026 và lời khuyên mua. Internal link: `dien-thoai-can-bao-nhieu-ram-la-du-2026`, `ram-ao-ram-plus-dien-thoai-la-gi-co-nen-bat-2026`, `gia-smartphone-cao-cap-viet-nam-tang-manh-2026-thieu-chip-nho`.
- **Bản thảo đầy đủ:** `docs/drafts/ufs-la-gi-bo-nho-trong-dien-thoai-ufs-4-1-3-1-emmc-2026.md`

### Chủ đề 2 (điện thoại): PPI và độ phân giải màn hình điện thoại, bao nhiêu là đủ
- **Vì sao ngon:** cụm "FHD+ là gì", "2K có cần không", "PPI bao nhiêu là nét" search đều, evergreen. Site có bài tấm nền OLED/LCD và tần số quét nhưng **chưa tách bài độ phân giải/PPI**.
- **Tiêu đề:** "Độ phân giải màn hình điện thoại: HD+, FHD+, 2K bao nhiêu đủ" / "PPI là gì? Màn 2K trên điện thoại có thật sự cần"
- **Từ khóa:** `PPI là gì`, `độ phân giải màn hình điện thoại`, `FHD+ là gì`, `màn 2K có cần không`.
- **Dàn ý:** spec-box quy đổi HD+/FHD+/2K + PPI ví dụ → H2 Độ phân giải và PPI là gì → H2 Mắt người phân biệt được tới đâu (ngưỡng ~300ppi, khoảng cách nhìn) → H2 2K/QHD+ đánh đổi pin ra sao → H2 Chọn theo nhu cầu (phổ thông, xem phim, kính VR) → H2 Đọc thông số khi mua. Internal link: `man-hinh-oled-amoled-lcd-khac-gi-loai-nao-tot-hon`, `tan-so-quet-man-hinh-60hz-90hz-120hz-la-gi-co-can-khong`.

### Chủ đề 3 (máy tính, ưu tiên số 2): HDMI hay DisplayPort, chọn cổng nào cho PC và màn hình
- **Vì sao ngon:** ai ráp PC, mua màn, nối laptop ra màn ngoài đều gõ "HDMI hay DisplayPort". Evergreen, cực nhiều intent, đối thủ chủ yếu là bài dịch sơ sài. Site có Thunderbolt/USB-C nhưng **chưa có HDMI vs DisplayPort**.
- **Tiêu đề:** "HDMI hay DisplayPort? Chọn cổng nào cho PC và màn hình 2026" / "HDMI 2.2 vs DisplayPort 2.1: cổng nào cho gaming, 4K 144Hz"
- **Từ khóa:** `HDMI hay DisplayPort`, `DisplayPort vs HDMI`, `HDMI 2.1 2.2`, `cổng màn hình gaming`.
- **Dàn ý:** spec-box băng thông + độ phân giải/tần số tối đa từng chuẩn → H2 HDMI và DisplayPort khác nhau ở đâu → H2 Băng thông và khả năng (4K 144Hz, 1440p 240Hz, HDR) → H2 G-Sync/FreeSync, VRR cổng nào ngon → H2 Trường hợp dùng (gaming PC, console, laptop ra màn, đa màn) → H2 Chọn cáp và lỗi hay gặp. Internal link: `cach-chon-man-hinh-may-tinh-tam-nen-do-phan-giai-tan-so-quet-2026`, `thunderbolt-la-gi-khac-usb-c-the-nao-co-can-khong-2026`, `usb-c-la-gi-chuan-cap-sac-nhanh-pd-phan-biet-day-cap-2026`.
- **Bản thảo đầy đủ:** `docs/drafts/hdmi-hay-displayport-chon-cong-nao-pc-man-hinh-2026.md`

### Chủ đề 4 (thực dụng, cả điện thoại + laptop): Cách vệ sinh điện thoại và laptop đúng cách
- **Vì sao ngon:** intent cao quanh năm, dễ lên top, dễ chèn internal link sản phẩm (khăn, bộ vệ sinh). Site **chưa có** bài vệ sinh thiết bị.
- **Tiêu đề:** "Cách vệ sinh điện thoại và laptop đúng cách, không hư loa, cổng" / "Vệ sinh điện thoại, laptop: nên và tuyệt đối tránh dùng gì"
- **Từ khóa:** `cách vệ sinh điện thoại`, `cách vệ sinh laptop`, `lau màn hình laptop`, `vệ sinh loa điện thoại`.
- **Dàn ý:** callout an toàn (không xịt trực tiếp, không cồn nồng độ cao lên lớp phủ oleophobic) → H2 Chuẩn bị dụng cụ (khăn microfiber, cồn IPA 70%, tăm bông, khí nén) → H2 Vệ sinh màn hình đúng cách → H2 Loa, mic, cổng sạc, khe SIM → H2 Bàn phím và thân laptop, tản nhiệt → H2 Tần suất và thói quen. Internal link: `chuan-khang-nuoc-ip68-ip67-ip69-la-gi-dien-thoai-chong-nuoc-that-khong`, `cach-keo-dai-tuoi-tho-pin-laptop-sac-dung-cach-2026`.

### Chủ đề 5 (điện thoại): Cách đọc bảng thông số camera điện thoại (MP, khẩu độ f, OIS, cảm biến)
- **Vì sao ngon:** người mua nhìn "50MP f/1.8 OIS 1/1.3 inch" mà không hiểu. Site có bài "nhiều MP có đẹp hơn không" nhưng **chưa có bài đọc trọn bảng thông số camera**. Bổ trợ tốt cho cụm mua điện thoại.
- **Tiêu đề:** "Cách đọc thông số camera điện thoại: MP, f, OIS, cảm biến" / "Thông số camera điện thoại nghĩa là gì? Nhìn là hiểu"
- **Từ khóa:** `thông số camera điện thoại`, `khẩu độ f là gì`, `OIS là gì`, `cảm biến camera 1 inch`.
- **Dàn ý:** spec-box giải nghĩa nhanh từng thông số → H2 Megapixel và pixel binning → H2 Khẩu độ f và cảm biến (kích thước quan trọng hơn MP) → H2 OIS/EIS chống rung → H2 Tiêu cự, tele, macro, khẩu độ thay đổi → H2 Cách đọc cả cụm thông số của một máy. Internal link: `camera-nhieu-megapixel-co-chup-dep-hon-khong`, `iphone-18-pro-camera-khau-do-thay-doi-cam-bien-moi-2026`.

---

## 4. Ghi chú cơ cấu batch

Đề xuất trên nghiêng evergreen vì trend tin nóng đã bị chính site phủ kín (mục 1). Nếu tuần này muốn giữ cơ cấu §0c (2 tin công nghệ + 1 esports + 1 sản phẩm VN), có thể ghép: dùng 2 chủ đề evergreen mạnh nhất (UFS, HDMI/DP) làm 2 "cẩm nang", rồi bổ sung 1 tin esports mới (ví dụ kết quả một giải đang diễn ra) + 1 sản phẩm mới ra mắt VN chưa có bài, khi kiếm được nguồn + video verify được trên máy local.
