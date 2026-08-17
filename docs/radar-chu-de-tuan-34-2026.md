# Radar chủ đề tuần 34/2026 (chốt ngày 17/08/2026)

Kết quả quét xu hướng, soi đối thủ và dedup với 669 bài markdown trong `src/content/articles`.
Tuân thủ `AGENTS.md`: §0 mô hình nguồn 3 lớp, §0a trần nhịp đăng, §0a-bis neo Việt Nam, §0c cơ cấu batch.

---

## 1. Điều kiện chạy và giới hạn của phiên này

Phiên chạy trong container Claude Code trên cloud với chính sách egress hạn chế. Ghi rõ để người đọc
biết số nào chắc, số nào cần kiểm lại:

| Hạng mục | Trạng thái | Ảnh hưởng |
|---|---|---|
| WebSearch (qua dịch vụ Anthropic) | Chạy được | Bắt được xu hướng, tiêu đề đối thủ, số liệu tóm tắt kèm URL nguồn |
| WebFetch và curl trực tiếp tới mọi host ngoài | **Bị chặn 403 ở tầng proxy** | Không đọc được nguyên văn bài gốc, chỉ có trích đoạn từ SERP |
| `i.ytimg.com`, `youtube.com/oembed` | Bị chặn 403 | **Không verify được thumbnail và video mới** |
| Phần đo offline của `check-media.mjs` | Chạy được | Media dồn cụm: **0/736 file**, toàn bộ đạt §4 |
| `scripts/gsc/gsc.mjs radar` | Không chạy (không có token trong container) | Không có striking distance của chính site |
| Ahrefs MCP | `Insufficient plan` | Không lấy được volume/KD |

`node scripts/check-media.mjs` trong container này trả `broken images 2492 | broken videos 723 |
files media-dồn-cụm 0`. Toàn bộ 2492 ảnh và 723 video đó **không hỏng thật**, chúng trả 403 vì bị
chặn egress. Baseline ngày 13/8 là 2489/723, tức phiên này **không làm phát sinh media hỏng mới**.

**Hệ quả cho cách viết bài phiên này:** vì không verify được media mới, cả ba bài chỉ dùng **media
đã có sẵn trong repo** và từng qua `check-media` ở môi trường mạng đầy đủ, không dán một URL ảnh hay
video nào chưa kiểm. Đây là cách duy nhất giữ đúng §0b bước 3 trong điều kiện này.

---

## 2. Trần nhịp đăng: còn bao nhiêu slot

| Tuần ISO | Ngày | Đã đăng | Còn slot |
|---|---|---|---|
| 2026-W33 | 10/8 tới 16/8 | **8 bài** (10/8: 2, 11/8: 2, 12/8: 1, 13/8: 2, 15/8: 1) | **0, đã kịch trần tuần** |
| 2026-W34 | 17/8 tới 23/8 | 2 bài (đăng trong phiên này) | 6 bài |

Lưu ý về múi giờ: phiên chạy lúc 02:06 giờ Việt Nam ngày 17/8, tức đã sang tuần W34. Nếu tính theo
UTC thì vẫn là 16/8 và tuần W33 đã kịch trần 8 bài, không đăng thêm được bài nào. Site dùng
`+07:00` trong `datePublished` nên mốc Việt Nam là mốc đúng.

Bài refresh (giữ nguyên slug, chỉ bump `dateModified`) không tốn slot vì script chỉ đếm `datePublished`.

---

## 3. Radar xu hướng, tuần 11/8 tới 17/8

Tín hiệu bắt được, xếp theo độ nóng và độ hợp ngách:

1. **Apple đảo cấu trúc dòng iPhone (11 tới 13/8)**. Nhiều nguồn thống nhất rằng sự kiện tháng 9 chỉ
   có iPhone 18 Pro, 18 Pro Max và máy gập, còn **bản iPhone 18 thường bị dời sang nửa đầu 2027**,
   cùng iPhone 18e và iPhone Air thế hệ hai. Gurman cho biết nội bộ Apple gọi máy gập là **iPhone
   Ultra**. Ngày sự kiện chưa xác nhận, dự đoán tập trung vào 8 hoặc 9/9. Đây là tin có tính phản
   trực giác cao và ảnh hưởng trực tiếp tới quyết định mua tại Việt Nam.
2. **Gemini cán mốc 1 tỷ người dùng hàng tháng (11/8)**. Pichai công bố, Google gọi là sản phẩm tăng
   nhanh nhất trong 28 năm. Site có hơn 16 bài nhắc Gemini nhưng **không bài nào về cột mốc này**.
3. **Starlink mở bán tại Việt Nam (13/8)**. Giá công bố 1.131.990đ và 1.711.100đ mỗi tháng, thiết bị
   Mini 8.655.300đ, Standard 4X 10.269.900đ. Bài Starlink hiện có trên site viết từ 16/6, **đang ghi
   sai giá** (2,2 triệu/tháng, dịch vụ "dự kiến giữa 2026").
4. **Khủng hoảng RAM và NAND**. Đã có 6 bài, vừa refresh 15/8. **Bão hòa, không viết thêm.**
5. **LCP 2026 Split 3** kết thúc 30/8, quyết định 3 suất CKTG khu vực. TSW đã có vé, GAM và MVK còn
   tranh chấp.
6. **Redmi K100 và K100 Pro bản chính thức** (11/8): Snapdragon 8 Elite Gen 5, pin tới 9.000mAh, màn
   OLED 185Hz, camera 200MP. Site mới có bài rò rỉ, chưa có bài chính thức.
7. **Pixel 11 và Made by Google**. Đã có 6 bài, đỉnh tin đã qua. Không cần bài mới.

---

## 4. Ba đối thủ lớn nhất và những gì họ lên tuần qua

Lưu ý phương pháp: do egress chặn, phần này dựng từ tiêu đề và trích đoạn trên SERP, **không phải từ
việc đọc nguyên văn từng bài**. Không có số liệu tương tác thật (share, comment) vì không mở được trang.

### 4.1. Sforum (cellphones.com.vn/sforum)

Đối thủ SEO trực diện nhất cho cụm từ khóa điện thoại và laptop. Tuần này họ lên
`bang-gia-starlink-viet-nam` gần như ngay khi Starlink công bố, đúng kiểu bài bảng giá mà chuỗi bán
lẻ làm rất nhanh. Ngoài ra tiếp tục nuôi các trang "tổng hợp tin đồn cập nhật liên tục" cho từng
flagship sắp ra.

Điểm mạnh: domain thương mại điện tử có sẵn giá niêm yết, cập nhật giá theo ngày. Điểm yếu: bài
thiên quảng cáo sản phẩm họ bán, phân tích mỏng, gần như không có phép tính tổng chi phí.

### 4.2. GenK và nhóm báo công nghệ

GenK có bài Starlink đáng chú ý nhất tuần: *"Starlink giá 1,13 triệu đồng mỗi tháng, đắt gấp 6 lần
nhưng tốc độ chỉ bằng 1/3 gói cáp quang phổ thông, vậy ai ở Việt Nam thực sự nên mua?"* (14/8, có
bản đăng lại trên CafeBiz). Đây là bài duy nhất trong nhóm đối thủ chịu đặt Starlink cạnh cáp quang
bằng con số, và nó ăn đúng truy vấn có ý định thật.

**Rút ra:** góc "so với cáp quang" đã bị GenK chiếm trước. Muốn thắng phải đi xa hơn một bước, tức
tính **tổng chi phí sở hữu năm đầu** gồm cả thiết bị, thứ GenK không làm.

### 4.3. Nhóm báo lớn (VnExpress, Tuổi Trẻ, VietnamNet, VnEconomy)

Đồng loạt đưa Starlink trong vòng vài giờ sau công bố. Đúng như §0 cảnh báo: **không đua breaking
news với báo lớn**. Bài của họ nhanh nhưng dừng ở mức thông báo giá, không trả lời "lắp thì tốn bao
nhiêu trong năm đầu", "nhà tôi có dùng được không". VnExpress có bài giải thích riêng về trần
600.000 thuê bao, là bài duy nhất trong nhóm đi vào khung pháp lý.

### Khoảng trống rút ra

Cả ba nhóm đều bỏ ngỏ **bài tính tổng chi phí sở hữu** và **bài phân tích hệ quả cho người mua**.
Đó là chỗ techvision.click nên đứng, đúng định vị "giải thích đầy đủ nhất" ở §0.

---

## 5. Năm chủ đề đề xuất cho tuần

Mỗi chủ đề gồm: từ khóa chính, lý do chọn, tiêu đề (đã kiểm ≤65 ký tự, từ khóa đứng đầu theo §8b),
dàn ý H2, neo Việt Nam theo §0a-bis, internal link.

---

### Chủ đề 1. iPhone 18 thường lùi sang 2027 ✅ ĐÃ ĐĂNG 17/8

- **Từ khóa chính**: iphone 18 khi nào ra mắt, iphone 18 giá bao nhiêu, iphone ultra gập
- **Vì sao chọn**: nhu cầu tìm kiếm cụm iPhone leo dựng đứng từ giữa tháng 8 và đỉnh đầu tháng 9,
  đây là cụm có ý định mua rõ nhất cả năm. Góc "bản thường bị hoãn" mang tính phản trực giác, khác
  hẳn các bài tổng hợp tin đồn mà Sforum đang chạy.
- **Tiêu đề**: `iPhone 18 thường lùi sang 2027, tháng 9 chỉ có Pro và Ultra` (59 ký tự)
- **Slug**: `iphone-18-thuong-lui-2027-apple-thang-9-chi-co-pro-va-ultra`
- **Neo Việt Nam**: giá iPhone 17 Pro Max đang bán tại VN (35,2 tới 37,99 triệu bản 256GB, 512GB
  41,2 tới 43,39 triệu, 1TB 48,6 tới 50,99 triệu, 2TB trên 63 triệu), mốc VN nằm trong đợt mở bán
  đầu tiên của iPhone 17 ngày 19/9/2025 cùng Mỹ và Nhật.
- **Dàn ý**: (1) Apple tách dòng thành hai đợt trong năm; (2) iPhone Ultra và cái tên nội bộ;
  (3) iPhone 18 Pro và phần cứng đi kèm; (4) người mua tại VN mất gì trong mùa cuối năm;
  (5) nên mua bây giờ hay chờ.
- **Kết quả**: 1.543 từ, 5 media, title 59 ký tự.

---

### Chủ đề 2. Gemini cán mốc 1 tỷ người dùng ✅ ĐÃ ĐĂNG 17/8

- **Từ khóa chính**: gemini bao nhiêu người dùng, google gemini 2026, gemini vs chatgpt
- **Vì sao chọn**: site có hơn 16 bài nhắc Gemini nhưng không bài nào về cột mốc này. Đây là bài tin
  ngành, nên theo §0a-bis phải có một mục **thật sự có nội dung** trả lời "đổi gì cho người Việt",
  không nhồi giá.
- **Tiêu đề**: `Gemini đạt 1 tỷ người dùng: Google lật ngược thế cờ ra sao` (58 ký tự)
- **Slug**: `gemini-1-ty-nguoi-dung-google-lat-nguoc-the-co-truoc-chatgpt-2026`
- **Neo Việt Nam**: mốc 4/9/2026 Google Assistant bị thay bằng Gemini trên Android, Wear OS, tai
  nghe và Android Auto chiếu từ điện thoại; chuyển dần trong vài tuần; **không quay lại được**; xe
  Google Built-in vẫn giữ Assistant. Android chiếm phần lớn thị phần điện thoại VN nên đây là thay
  đổi chạm tới rất nhiều người dùng trong nước. Không bịa số người dùng Gemini tại VN.
- **Góc riêng đáng giá nhất**: chỉ ra Gemini đo bằng **người dùng hàng tháng** còn ChatGPT đã đạt 1
  tỷ **hàng tuần** từ tháng 7, tức hai bên đang được so bằng hai thước đo khác nhau. Và chỉ ra con
  số Google **không** công bố: số thuê bao trả phí.
- **Kết quả**: 1.411 từ, 5 media, title 58 ký tự.

---

### Chủ đề 3. Starlink Việt Nam mở bán ✅ ĐÃ REFRESH 17/8 (không tốn slot)

> Đây là **REFRESH**, không phải bài mới. Site đã có
> `starlink-viet-nam-2026-gia-cuoc-toc-do-dang-ky-ai-nen-dung` từ 16/6/2026, viết khi Starlink mới
> có giấy phép thí điểm, và **đang ghi sai giá**: bài cũ nói cước 2,2 triệu/tháng, thiết bị 9,2
> triệu, dịch vụ "dự kiến giữa 2026". Giá thật khi mở bán chỉ 1.131.990đ/tháng. Viết bài mới sẽ tự
> cạnh tranh truy vấn với chính mình, nên theo §8b: **giữ nguyên slug**, cập nhật nội dung, đổi
> title, bump `dateModified`.

- **Từ khóa chính**: starlink việt nam, starlink giá bao nhiêu, đăng ký starlink
- **Tiêu đề mới**: `Starlink Việt Nam mở bán: giá cước từ 1,13 triệu/tháng` (54 ký tự)
- **Neo Việt Nam**: bảng giá chính thức 13/8; tổng chi phí năm đầu tự tính (Mini + gói thấp
  **22.239.180đ**, Standard 4X + gói thấp **23.853.780đ**, Standard 4X + gói cao **30.803.100đ**);
  đặt cạnh cáp quang hộ gia đình 190.000 tới 330.000đ/tháng cho 300Mbps tới 1Gbps.
- **Góc riêng đáng giá nhất**: bảng **tổng chi phí sở hữu 12 tháng**, thứ mà cả GenK lẫn Sforum lẫn
  báo lớn đều không làm. Cộng thêm nhắc các khoản dễ quên: tiền điện chạy 24/7, chi phí dựng trụ.
- **Kết quả**: 1.707 từ, 5 media, title 54 ký tự, `datePublished` giữ nguyên 16/6 nên không tốn slot.

---

### Chủ đề 4 (esports, theo §0c). LCP 2026 Split 3 chốt sổ và ba suất CKTG

⏳ **Chưa viết. Thời điểm viết: sau vòng cuối, khoảng 30 hoặc 31/8.**

- **Từ khóa chính**: lcp split 3, gam esports, suất cktg 2026, lịch thi đấu lcp
- **Vì sao chọn**: Split 3 kết thúc 30/8, quyết định 3 đại diện LCP tại CKTG 2026. Sforum và Phong Vũ
  đều đang ăn cụm từ khóa này bằng bài lịch thi đấu thuần túy, không có phân tích cục diện.
- **Tiêu đề đề xuất**: `LCP 2026 Split 3: ai giành nốt 2 suất CKTG cùng TSW` (50 ký tự)
- **Slug đề xuất**: `lcp-2026-split-3-chot-so-suat-cktg-gam-mvk-cuc-dien`
- **Không viết trước hạn**, vì kết quả chưa có thì bài sẽ toàn phỏng đoán và mất giá trị ngay khi có
  kết quả thật.
- **Dàn ý**: (1) cục diện sau vòng cuối; (2) TSW đã có vé, họ làm được gì; (3) cửa của GAM Esports;
  (4) MVK và các đội còn lại; (5) lịch các trận quyết định giờ VN; (6) ba suất LCP vào nhánh nào ở
  CKTG 2026 tại New York.
- **Internal link**: bài LCP Split 3 Swiss stage, bài TSW giành vé Worlds, bài Worlds 2026 New York.

---

### Chủ đề 5 (sản phẩm, theo §0c). Redmi K100 và K100 Pro bản chính thức

⏳ **Chưa viết. Cần kiểm đường về Việt Nam trước khi viết.**

- **Từ khóa chính**: redmi k100 giá bao nhiêu, redmi k100 pro cấu hình, redmi k100 việt nam
- **Vì sao chọn**: site mới có bài rò rỉ (`redmi-k100-k100-pro-ro-ri-pin-9000mah-man-185hz-2026`),
  chưa có bài bản chính thức. Dòng K của Redmi có lượng tìm kiếm tốt tại VN nhờ tỉ lệ hiệu năng trên
  giá.
- **Cảnh báo trước khi viết**: dòng K thường **không phân phối chính hãng tại Việt Nam**, chủ yếu về
  đường xách tay. Theo §0a-bis, bài sản phẩm bắt buộc có giá niêm yết VN, ngày mở bán VN, hoặc so
  sánh với máy đang bán ở VN. **Nếu không kiếm được dữ liệu VN thật thì bỏ bài này**, chuyển sang
  chủ đề dự phòng, đừng viết bài chỉ dịch lại thông số.
- **Tiêu đề đề xuất**: `Redmi K100 Pro ra mắt: pin 9.000mAh, về Việt Nam thế nào` (55 ký tự)
- **Dàn ý**: (1) thông số bản chính thức so với bản rò rỉ; (2) pin 9.000mAh và màn 185Hz có thật sự
  dùng được; (3) Snapdragon 8 Elite Gen 5 ở tầm giá này; (4) đường về Việt Nam và rủi ro hàng xách
  tay; (5) đặt cạnh máy chính hãng cùng tầm giá đang bán tại VN.

---

### Danh sách dự phòng

Dùng khi chủ đề 4 hoặc 5 bị loại vì dedup hoặc không kiếm đủ dữ liệu Việt Nam:

- **Chi phí Starlink cho hộ kinh doanh và homestay vùng cao**. Tách riêng khỏi bài refresh, đi sâu
  bài toán hoàn vốn. Chỉ viết nếu bài refresh không đã trả lời hết, tránh tự cạnh tranh.
- **Exynos 2700 cho Galaxy S27**. Samsung đã xác nhận chip nhưng máy tới 2027 mới ra, viết sớm thì
  loãng. Để dành khi có mốc rõ hơn.

### Đã cân nhắc và loại

| Chủ đề | Lý do loại |
|---|---|
| Khủng hoảng RAM và SSD | Đã có 6 bài, vừa refresh 15/8, bão hòa |
| Pixel 11 và Made by Google | Đã có 6 bài, đỉnh tin đã qua |
| Chip laptop Panther Lake, Snapdragon X2 | Đã có 4 bài |
| Bài "Starlink so với cáp quang" đứng riêng | GenK đã chiếm góc này ngày 14/8, và bài refresh đã phủ |

---

## 6. Việc còn phải làm trên máy có mạng đầy đủ

Ba bài của phiên này đã qua `check-cadence`, `check-vn-signal`, `check-new-article` (trừ phần mạng)
và phần đo offline của `check-media`. Nhưng hai bước sau **chưa thể hoàn thành trong container này**:

1. **Chạy lại `node scripts/check-media.mjs` trên máy có mạng** để xác nhận 0 ảnh lỗi, 0 video lỗi.
   Trong container, mọi request tới `i.ytimg.com` đều trả 403 nên kết quả không dùng được. Media của
   ba bài đều là URL đã có sẵn trong repo và từng qua kiểm ở môi trường đủ mạng, nên rủi ro thấp,
   nhưng vẫn cần chạy lại cho đúng §0b bước 1.
2. **Đẩy index sau khi deploy**, theo §6:
   ```
   node scripts/indexnow.mjs \
     https://techvision.click/articles/iphone-18-thuong-lui-2027-apple-thang-9-chi-co-pro-va-ultra.html \
     https://techvision.click/articles/gemini-1-ty-nguoi-dung-google-lat-nguoc-the-co-truoc-chatgpt-2026.html \
     https://techvision.click/articles/starlink-viet-nam-2026-gia-cuoc-toc-do-dang-ky-ai-nen-dung.html \
     https://techvision.click/blog.html
   ```

Ghi chú nhỏ về ảnh OG: script `scripts/make-article-og.py` hard-code font macOS
(`/System/Library/Fonts/Supplemental/Arial.ttf`). Container Linux không có font này nên hai ảnh OG
mới được sinh bằng DejaVu Sans thay thế. Bố cục, màu và watermark giữ nguyên, chỉ khác kiểu chữ so
với các thẻ cũ. Nếu muốn đồng bộ tuyệt đối, sinh lại hai ảnh này trên máy Mac.
