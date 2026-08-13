# Radar chủ đề tuần 33 và 34/2026 (chốt ngày 13/08/2026)

Tài liệu này là kết quả quét xu hướng, soi đối thủ và dedup với 668 bài markdown đang có trong
`src/content/articles`. Mục tiêu: chọn đúng thứ người Việt đang tìm mà site chưa có bài, theo đúng
luật `AGENTS.md` (§0 mô hình nguồn 3 lớp, §0a trần nhịp, §0a-bis neo Việt Nam, §0c cơ cấu batch).

---

## 1. Điều kiện chạy và giới hạn của phiên quét này

Phiên này chạy trong môi trường Claude Code trên cloud, nơi chính sách egress chỉ mở một số ít host.
Cần ghi rõ để người đọc biết số nào là chắc, số nào cần kiểm lại:

| Hạng mục | Trạng thái | Ảnh hưởng |
|---|---|---|
| WebSearch (qua dịch vụ của Anthropic) | Chạy được | Bắt được tín hiệu xu hướng, tiêu đề đối thủ, số liệu tóm tắt |
| Mở trực tiếp genk.vn, tinhte.vn, znews.vn, thegioididong.com | Bị chặn (egress 403) | Không đọc được nguyên văn bài đối thủ, chỉ có tiêu đề và trích đoạn từ SERP |
| Mở trực tiếp theverge.com, techcrunch.com, reuters.com | Bị chặn (egress 403) | **Không lấy được dữ kiện gốc lớp 2 theo §0** |
| `i.ytimg.com`, `youtube.com/oembed` | Bị chặn (egress 403) | **`scripts/check-media.mjs` không thể chạy đúng**, không verify được thumbnail và video |
| Phần đo offline của `check-media.mjs` | Chạy được | Media dồn cụm: **0 file**, toàn bộ 733 file vẫn đạt §4 |
| `scripts/gsc/gsc.mjs radar` | Không chạy (thiếu `googleapis`, không có token trong container) | Không có dữ liệu striking distance của chính site |
| Ahrefs MCP | `Insufficient plan` | Không lấy được volume/KD |

Chạy thử `node scripts/check-media.mjs` trong container này cho kết quả:
`broken images 2489 | broken videos 723 | files media-dồn-cụm 0`. Toàn bộ 2489 ảnh và 723 video đó
**không hỏng thật**, chúng chỉ trả 403 vì bị chặn ở tầng egress. Nghĩa là cổng bắt buộc của §0b
bước 1 không thể cho kết quả tin cậy ở đây. Phần đo offline (media dồn cụm) vẫn sạch.

Hệ quả thực tế: **phần chọn chủ đề và dàn ý ở dưới là dùng được ngay**, nhưng phần viết bài phải
làm trên máy có mạng đầy đủ, vì §0b bước 1 và bước 3 (verify media, verify nguồn gốc) không thể
hoàn thành ở đây. Xem §7 để biết chính xác cần chạy gì.

---

## 2. Trần nhịp đăng: còn bao nhiêu slot

Theo `scripts/check-cadence.mjs` (tối đa 2 bài/ngày, 8 bài/tuần ISO):

| Tuần ISO | Ngày | Đã đăng | Còn slot |
|---|---|---|---|
| 2026-W33 | 10/8 tới 16/8 | 7 bài (10/8: 2, 11/8: 2, 12/8: 1, 13/8: 2) | **1 bài** |
| 2026-W34 | 17/8 tới 23/8 | 0 bài | 8 bài |

Ngày 13/8 đã dùng hết 2 slot. Vì vậy **không thể đăng thêm bài nào trong hôm nay**, và cả tuần này
chỉ còn đúng 1 slot. Đây là luật cứng của §0a, không có ngoại lệ cho batch.

Bài refresh (giữ nguyên slug, chỉ bump `dateModified`) **không tốn slot**, vì script chỉ đếm
`datePublished`. Đó là lý do chủ đề số 1 dưới đây được xếp dạng refresh: nó lên được ngay hôm nay.

---

## 3. Radar xu hướng Việt Nam, tuần 07/8 tới 13/8

Tín hiệu bắt được, xếp theo độ nóng và độ hợp ngách:

1. **Starlink chính thức bán tại Việt Nam (13/8)**. Đây là tin nóng nhất trong ngày, đã lan sang
   VnEconomy, Tuổi Trẻ, VietnamNet, Báo Tin Tức và voz. Giá cước công bố: **1.131.990 đồng/tháng**
   cho gói 100Mbps và **1.711.100 đồng/tháng** cho gói trên 400Mbps, cả hai không giới hạn dung
   lượng, hoàn tiền trong 30 ngày. Bộ thiết bị Standard từ khoảng **8,65 triệu đồng**. Dịch vụ mở
   sau vài tháng kể từ giấy phép thí điểm hồi tháng 2/2026.
2. **Made by Google 12/8 và Pixel 11**. Đỉnh điểm đã qua, site đã có 5 bài phủ kín (giá VN, Tensor
   G6, Pixel Watch 5, Pixel Tag, bài sự kiện). Không cần bài mới.
3. **Gemini cán mốc 1 tỷ người dùng hàng tháng**, trở thành sản phẩm tăng nhanh nhất của Google.
   Site chưa có bài nào về cột mốc này.
4. **Khủng hoảng RAM và NAND**. DRAM tăng khoảng 171%, NAND tăng khoảng 246% so với mốc cuối 2025,
   riêng quý 1/2026 RAM tăng thêm 80 tới 90%. Micron nói nguồn cung căng tới hết 2027. Site đã có
   5 bài (giá laptop tăng 30%, RTX 5090, DRAM quý 3, nên mua PC lúc nào). **Đã bão hòa, không viết thêm.**
5. **Mùa iPhone**. iPhone 18 Pro và 18 Pro Max dự kiến ra mắt tháng 9/2026, về Việt Nam khoảng
   tháng 10/2026. iPhone Fold công bố tháng 9 nhưng giao hàng từ tháng 12. Nhu cầu tìm kiếm bắt đầu
   dựng đứng từ giữa tháng 8 và đạt đỉnh đầu tháng 9.
6. **LCP 2026 Split 3** kết thúc ngày 30/8, quyết định 3 suất CKTG 2026 của khu vực. Team Secret
   Whales đã có vé (site đã có bài). GAM và MVK còn tranh chấp. Đây là mạch tin esports đang chạy.
7. **OpenAI khai tử trình duyệt Atlas từ 9/8**, ChatGPT bỏ giới hạn tin nhắn gói Free và Go. Site đã
   có bài cho cả hai. Không cần bài mới.
8. **reCAPTCHA cử chỉ tay, Gemini Robotics 2, bản vá Windows 11 tháng 8**. Site đã phủ hoặc chủ đề
   quá hẹp cho search Việt Nam.

---

## 4. Ba đối thủ lớn nhất và những gì họ lên tuần qua

Lưu ý phương pháp: do egress chặn, phần này dựng từ tiêu đề và trích đoạn trên SERP, không phải từ
việc đọc nguyên văn từng bài. Không có số liệu tương tác thật (share, comment) vì không mở được trang.

### 4.1. Sforum (cellphones.com.vn/sforum)

Đối thủ SEO trực diện nhất cho cụm từ khóa điện thoại và laptop. Cách họ đánh:

- Bài "tổng hợp tin đồn cập nhật liên tục" cho mỗi flagship sắp ra: `samsung-galaxy-s27-co-gi-moi`,
  `samsung-galaxy-s27-ultra-co-gi-moi`. Một URL sống nhiều tháng, cập nhật liên tục, ăn trọn cụm
  "X có gì mới".
- Bài lịch thi đấu esports cập nhật theo ngày: `lien-minh-huyen-thoai-esports-world-cup-2026`,
  `giai-dau-esports-lmht-2026`.
- Bài xu hướng ngành gắn giá Việt Nam: `laptop-ai-2026-tai-viet-nam`, `xu-huong-laptop-tai-ces-2026`.

Điểm mạnh: hậu thuẫn bởi domain thương mại điện tử có sẵn giá niêm yết. Điểm yếu: bài thiên quảng
cáo sản phẩm họ bán, phân tích mỏng.

### 4.2. Phong Vũ và Thế Giới Di Động (mảng blog)

- Phong Vũ đánh mạnh lịch thi đấu (`lich-thi-dau-lcp-2026`, `lich-thi-dau-ewc-2026-lmht`) và tổng
  hợp sự kiện phần cứng (`computex-2026-cac-san-pham-cong-nghe`).
- Thế Giới Di Động giữ các trang tổng hợp dài hạn kiểu "điện thoại mới ra mắt 2026 cập nhật liên tục".

Điểm mạnh: DR cao, giá niêm yết thật, ăn hết truy vấn có ý định mua. Điểm yếu: gần như không có góc
phân tích, bài nào cũng dẫn về trang bán hàng.

### 4.3. Nhóm báo lớn (VnExpress, Tuổi Trẻ, VietnamNet, VnEconomy)

Tuần này họ đồng loạt đưa Starlink trong vòng vài giờ sau công bố. Đây đúng như §0 đã cảnh báo:
**không đua breaking news với báo lớn**. Họ nhanh hơn, nhưng bài của họ ngắn, dừng ở mức thông báo,
không trả lời được "lắp thì tốn bao nhiêu trong năm đầu", "so với cáp quang thì thế nào", "nhà tôi
có dùng được không".

### Khoảng trống rút ra

Cả ba nhóm đều bỏ ngỏ **bài tính tổng chi phí sở hữu và bài phân tích hệ quả**. Đó là chỗ
techvision.click nên đứng, đúng định vị "giải thích đầy đủ nhất" ở §0.

---

## 5. Năm chủ đề đề xuất

Mỗi chủ đề gồm: từ khóa chính, lý do chọn, tiêu đề đề xuất (đã kiểm ≤65 ký tự, từ khóa đứng đầu
theo §8b), dàn ý H2, neo Việt Nam bắt buộc theo §0a-bis, và internal link.

---

### Chủ đề 1 (ưu tiên cao nhất). Starlink Việt Nam mở bán chính thức

> **Đây là REFRESH, không phải bài mới.** Site đã có
> `starlink-viet-nam-2026-gia-cuoc-toc-do-dang-ky-ai-nen-dung` từ 16/06/2026, viết khi Starlink mới
> có giấy phép thí điểm. Nay đã bán thật với giá công bố. Viết bài mới sẽ tự cạnh tranh truy vấn với
> chính mình. Theo §8b: **giữ nguyên slug**, cập nhật nội dung, đổi title, bump `dateModified`.
> Ưu điểm phụ: refresh không tốn slot nhịp đăng, nên lên được ngay hôm nay.

- **Từ khóa chính**: starlink việt nam, starlink giá bao nhiêu, đăng ký starlink
- **Tiêu đề đề xuất**: `Starlink Việt Nam mở bán: giá cước từ 1,13 triệu/tháng` (54 ký tự)
- **Neo Việt Nam**: giá cước chính thức 1.131.990 đồng và 1.711.100 đồng/tháng, thiết bị từ khoảng
  8,65 triệu đồng, mốc giấy phép thí điểm tháng 2/2026 và mở bán 13/8/2026.
- **Dàn ý cập nhật**:
  1. Starlink đã bán thật tại Việt Nam: mốc thời gian từ giấy phép tới thương mại
  2. Hai gói cước và giá thiết bị: bảng giá đầy đủ
  3. Tốc độ thực tế và độ trễ: kỳ vọng gì ở quỹ đạo thấp
  4. Ai nên dùng, ai không nên: vùng chưa có cáp quang, tàu cá, công trình, homestay vùng cao
  5. Cách đăng ký và những điều kiện đi kèm (hoàn tiền 30 ngày, kiểm tra địa chỉ)
- **Internal link**: bài 5G phủ sóng 92%, bài Rocket Lab mua Iridium.

---

### Chủ đề 2. Chi phí thật khi dùng Starlink một năm ở Việt Nam

- **Từ khóa chính**: starlink chi phí, starlink có đắt không, starlink so với cáp quang
- **Vì sao chọn**: báo lớn chỉ đưa tin mở bán và nhắc giá tháng. Không ai làm phép tính năm đầu, cũng
  không ai đặt cạnh gói cáp quang hộ gia đình. Đây đúng khoảng trống ở §4 và đúng định vị §0.
- **Tiêu đề đề xuất**: `Chi phí Starlink năm đầu tại Việt Nam: tính đủ từng khoản` (57 ký tự)
- **Slug đề xuất**: `chi-phi-starlink-viet-nam-nam-dau-so-voi-cap-quang-2026`
  (đã kiểm: không dính mẫu cấm `-hay-...-chon-loai-nao`, `top-...-dang-mua-thang-`, `...-la-gi`)
- **Neo Việt Nam**: bảng tổng chi phí 12 tháng gồm thiết bị 8,65 triệu cộng cước, đặt cạnh giá gói
  cáp quang phổ thông của FPT, Viettel, VNPT. **Giá cáp quang phải lấy từ trang chính chủ nhà mạng
  tại thời điểm viết, không lấy từ trí nhớ.**
- **Dàn ý**:
  1. Bảng chi phí 12 tháng: thiết bị, cước, phát sinh
  2. Gói 100Mbps và gói trên 400Mbps: chênh nhau đáng bao nhiêu
  3. Đặt cạnh cáp quang hộ gia đình: nơi nào Starlink thắng, nơi nào thua rõ
  4. Bốn nhóm người thật sự có lợi khi lắp
  5. Những khoản dễ bị bỏ sót: điện tiêu thụ, vị trí lắp, thời tiết, chính sách hoàn tiền
- **Internal link**: bài Starlink ở chủ đề 1 (bắt buộc, hai chiều), bài 5G Việt Nam.

---

### Chủ đề 3. Gemini cán mốc 1 tỷ người dùng hàng tháng

- **Từ khóa chính**: gemini bao nhiêu người dùng, google gemini 2026, gemini vs chatgpt
- **Vì sao chọn**: site có 16 bài nhắc Gemini nhưng **không bài nào về cột mốc 1 tỷ người dùng**.
  Đây là bài tin ngành, nên theo §0a-bis phải có một mục thật sự trả lời "đổi gì cho người Việt",
  chứ không nhồi giá.
- **Tiêu đề đề xuất**: `Gemini đạt 1 tỷ người dùng: Google đã lật ngược thế cờ ra sao` (61 ký tự)
- **Slug đề xuất**: `gemini-1-ty-nguoi-dung-hang-thang-google-lat-nguoc-the-co-2026`
- **Neo Việt Nam**: một mục riêng, có nội dung thật, về việc Gemini đã vào Việt Nam thế nào (trợ lý
  mua sắm, Gemini Live tiếng Việt, Google Assistant khai tử từ 4/9 nên máy Android ở Việt Nam bị
  chuyển sang Gemini). Không bịa số người dùng tại Việt Nam nếu Google không công bố.
- **Dàn ý**:
  1. Con số 1 tỷ và ý nghĩa của nó trong cuộc đua với ChatGPT
  2. Google đã bơm Gemini vào đâu để đạt mốc này (Search, Android, Workspace)
  3. Vì sao con số người dùng của trợ lý AI cần đọc thận trọng
  4. Người dùng Việt Nam bị ảnh hưởng ở đâu: Assistant khai tử, Gemini tiếng Việt, trợ lý mua sắm
  5. Điều này đổi gì cho lập trình viên và doanh nghiệp Việt đang chọn nền tảng AI
- **Internal link**: bài Google Assistant khai tử 4/9, bài Gemini trợ lý mua sắm tại Việt Nam,
  bài GPT-5.6 và cuộc đua mô hình nửa cuối 2026.

---

### Chủ đề 4 (esports, theo §0c). LCP 2026 Split 3 chốt sổ và ba suất CKTG

- **Từ khóa chính**: lcp split 3, gam esports, suất cktg 2026, lịch thi đấu lcp
- **Vì sao chọn**: Split 3 kết thúc 30/8, đây là giai đoạn quyết định 3 đại diện LCP tại CKTG 2026.
  Sforum và Phong Vũ đều đang ăn cụm từ khóa này bằng bài lịch thi đấu thuần túy. Site đã có bài
  khung ngày 6/8 và bài TSW giành vé, nên bài này là bài **cập nhật cục diện**, viết vào cuối tháng.
- **Tiêu đề đề xuất**: `LCP 2026 Split 3: ai giành nốt 2 suất CKTG cùng TSW` (50 ký tự)
- **Slug đề xuất**: `lcp-2026-split-3-chot-so-suat-cktg-gam-mvk-cuc-dien`
- **Thời điểm viết**: sau vòng cuối, khoảng 30/8 hoặc 31/8. **Không viết trước, vì kết quả chưa có
  thì bài sẽ toàn phỏng đoán.**
- **Dàn ý**:
  1. Cục diện sau vòng Swiss: bảng xếp hạng và thế cân bằng
  2. TSW đã có vé: họ làm được gì
  3. Cửa của GAM Esports: cần thắng ai, kịch bản nào
  4. MVK và các đội còn lại: xác suất thực tế
  5. Lịch các trận quyết định, giờ Việt Nam
  6. Ba suất LCP sẽ vào nhánh nào ở CKTG 2026 tại New York
- **Internal link**: bài LCP Split 3 Swiss stage, bài TSW giành vé Worlds, bài CKTG 2026 tổ chức ở đâu.

---

### Chủ đề 5 (sản phẩm, theo §0c). iPhone 18 và iPhone Fold về Việt Nam

- **Từ khóa chính**: iphone 18 khi nào về việt nam, iphone 18 giá bao nhiêu, iphone fold giá việt nam
- **Vì sao chọn**: nhu cầu tìm kiếm bắt đầu leo từ giữa tháng 8 và đạt đỉnh đầu tháng 9. Đây là cụm
  từ khóa có ý định mua rõ nhất trong cả năm.
- **Cảnh báo dedup, phải xử lý trước khi viết**: site đã có
  `iphone-18-pro-tat-tan-tat-tinh-nang-ra-mat-thang-9-2026` (bài toàn cầu) và
  `iphone-fold-2026-gia-du-kien-cau-hinh-ngay-ra-mat-ro-ri` (16/7). Bài mới **chỉ được viết nếu giữ
  đúng góc Việt Nam**: mốc lên kệ tại Việt Nam, đợt 1 hay đợt 2, giá dự kiến sau thuế tại đại lý
  chính hãng. Nếu khi bắt tay viết thấy trùng quá 40% với hai bài trên thì **bỏ bài mới, nâng cấp
  bài cũ** bằng một mục "về Việt Nam khi nào, giá bao nhiêu".
- **Tiêu đề đề xuất**: `iPhone 18 về Việt Nam khi nào, giá dự kiến từng phiên bản` (56 ký tự)
- **Slug đề xuất**: `iphone-18-ve-viet-nam-khi-nao-gia-du-kien-tung-phien-ban-2026`
- **Neo Việt Nam**: mốc lên kệ dự kiến tháng 10/2026, giá dự kiến quy đổi cho từng dung lượng, so
  với giá niêm yết iPhone 17 hiện hành tại đại lý chính hãng. **Mọi con số giá phải dẫn nguồn, và
  phải ghi rõ đâu là giá dự kiến, đâu là tin đồn, theo §0.**
- **Dàn ý**:
  1. Lịch của Apple: công bố tháng 9, iPhone Fold giao hàng từ tháng 12
  2. Việt Nam nằm ở đợt mở bán nào, căn cứ vào các năm trước
  3. Giá dự kiến từng phiên bản và cơ sở của con số
  4. iPhone Fold: vì sao giá cách biệt hẳn phần còn lại
  5. Nên mua iPhone 17 giảm giá hay chờ: tính theo từng nhu cầu
  6. Những gì vẫn còn là tin đồn tính tới thời điểm viết
- **Internal link**: bài iPhone 18 Pro giá bán và ngày ra mắt, bài iPhone Fold giá dự kiến,
  bài Apple cắt giảm 15% sản lượng iPhone 17, trang sự kiện `public/su-kien/apple-september-2026.html`.

---

### Danh sách dự phòng

Dùng khi một trong năm chủ đề trên bị loại vì dedup hoặc vì không kiếm đủ dữ liệu:

- **Redmi K100 và K100 Pro bản chính thức** (ra mắt 11/8). Site mới có bài rò rỉ, chưa có bài chính
  thức. Cần kiểm đường về Việt Nam trước khi viết, vì dòng K thường là hàng xách tay.
- **Exynos 2700 cho Galaxy S27**. Samsung đã xác nhận chip, nhưng máy tới 2027 mới ra. Viết sớm thì
  loãng, để dành khi có mốc rõ hơn.

### Đã cân nhắc và loại

| Chủ đề | Lý do loại |
|---|---|
| Khủng hoảng RAM và SSD | Đã có 5 bài, bão hòa |
| Chip laptop Panther Lake, Snapdragon X2 | Đã có 4 bài |
| Pixel 11 và Made by Google | Đã có 5 bài, đỉnh tin đã qua |
| OpenAI khai tử Atlas, ChatGPT bỏ giới hạn | Đã có bài cho cả hai |
| reCAPTCHA cử chỉ tay, Gemini Robotics | Đã có bài |
| Đồ gia dụng các loại | §0a cấm tuyệt đối, ngoài ngách |

---

## 6. Lịch triển khai, bám trần nhịp §0a

| Ngày | Việc | Tốn slot? |
|---|---|---|
| 13/8 (hôm nay) | Refresh chủ đề 1 (Starlink, giữ slug) | Không |
| 14/8 | Đăng chủ đề 2 (chi phí Starlink) | Có, lấp nốt slot cuối của W33 |
| 17/8 | Đăng chủ đề 3 (Gemini 1 tỷ) và chủ đề 5 (iPhone 18 về Việt Nam) | 2 slot của W34 |
| 30/8 hoặc 31/8 | Đăng chủ đề 4 (LCP Split 3 chốt sổ), sau khi có kết quả | 1 slot của W35 |

Chủ đề 4 cố tình đẩy sang cuối tháng vì trước 30/8 chưa có kết quả để viết.

---

## 7. Việc phải làm trên máy có mạng đầy đủ

Phiên này không hoàn thành được §0b, nên **chưa bài nào được viết vào `src/content/articles`**.
Trình tự khi làm tiếp trên máy local:

```bash
git pull --rebase origin main

# 1. Lấy dữ kiện gốc lớp 2 theo §0: mở nguồn quốc tế và trang chính chủ
#    (Starlink VN, trang cước FPT/Viettel/VNPT, blog Google, Riot/LCP)

# 2. Chọn và VERIFY media, theo §4
for v in <ID1> <ID2>; do
  sz=$(curl -s -A 'Mozilla/5.0' "https://i.ytimg.com/vi/$v/maxresdefault.jpg" -o /dev/null -w '%{size_download}')
  [ "$sz" -lt 8000 ] && echo "XAM ($sz b), dung hqdefault: $v" || echo "maxres ok ($sz b): $v"
  curl -s "https://www.youtube.com/oembed?url=https://youtu.be/$v&format=json" | head -c 200; echo
done

# 3. Viết bài, rồi chạy đủ 4 cổng của §0b
node scripts/check-cadence.mjs
node scripts/check-vn-signal.mjs --since 2026-08-14
node scripts/check-media.mjs          # phai ra 0 anh loi, 0 video loi, 0 bai media don cum
node scripts/build-legacy-index.mjs && node scripts/build-blog.mjs && npx astro build

# 4. Commit thang main theo §0, khong dung nhanh phu
git add src/content/articles public/blog.html public/index.html src/data/legacy-articles.json
git commit -m "content(<slug>): ..."
git push origin main

# 5. Day index
node scripts/indexnow.mjs https://techvision.click/articles/<slug>.html https://techvision.click/blog.html
```

Ngoài ra, radar GSC của chính site hiện chưa chạy được từ xa. Để có dữ liệu striking distance thật
cho kỳ sau, cần chạy trên máy có token:

```bash
cd scripts/gsc && npm install && npm run auth   # neu bao invalid_grant
node scripts/gsc/gsc.mjs radar 28
```

## 8. Nguồn đã dùng cho radar này

- Starlink Việt Nam mở bán và giá cước: VnEconomy, Tuổi Trẻ, Báo Tin Tức, VietnamNet (qua SERP ngày 13/8/2026)
- Tin công nghệ tuần 8/8 tới 13/8: tổng hợp SERP từ GenK, Tinhte, Znews, VnExpress
- iPhone 18 và iPhone Fold: VietnamNet, Điện Máy Chợ Lớn, tao247 (đều là nguồn lớp 1, cần thay bằng
  nguồn gốc quốc tế khi viết, theo §0)
- Khủng hoảng RAM và NAND: CafeF, 24hmoney, VDO
- LCP 2026 Split 3: thethao247, Phong Vũ, Sforum
- Galaxy S27 và Exynos 2700: Sforum, Tinhte, nss.vn

Lưu ý theo §0: toàn bộ nguồn trên thuộc **lớp 1 (radar)**. Khi viết bài, số liệu phải thay bằng
**lớp 2 (nguồn gốc quốc tế hoặc trang chính chủ)**, tối thiểu 2 nguồn kèm URL.
