# Radar chủ đề tuần 34/2026 (chốt ngày 16/08/2026)

Phiên quét tự động hằng tuần. Khác với bản ngày 13/08 (chỉ dừng ở đề xuất), phiên này **đã viết
xong 5 bài** và đưa vào `src/content/articles`. Tài liệu này ghi lại: điều kiện quét, kết quả radar,
soi đối thủ, 5 chủ đề chốt kèm dàn ý, và việc còn phải làm trên máy có mạng đầy đủ.

Tuân theo `AGENTS.md`: §0 mô hình nguồn 3 lớp, §0a trần nhịp, §0a-bis neo Việt Nam, §0b checklist,
§0c cơ cấu batch, §8b chuẩn tiêu đề.

---

## 1. Điều kiện chạy và giới hạn của phiên này

Phiên chạy trong container Claude Code trên cloud. Chính sách egress chỉ mở một số ít host, nên phải
ghi rõ số nào chắc, số nào cần kiểm lại:

| Hạng mục | Trạng thái | Ảnh hưởng |
|---|---|---|
| WebSearch (dịch vụ của Anthropic) | Chạy được | Bắt được trend, tiêu đề đối thủ, số liệu tóm tắt kèm URL gốc |
| WebFetch mở thẳng blog.google, techcrunch.com | **Bị chặn** | Không đọc được nguyên văn trang nguồn lớp 2 |
| curl tới theverge.com, genk.vn, i.ytimg.com, youtube.com | **Bị chặn (403 ở gateway)** | Không verify được thumbnail và video embed |
| Phần đo offline của `check-media.mjs` | Chạy được | **Media dồn cụm: 0 file** trên toàn bộ 737 file |
| `check-cadence.mjs`, `check-vn-signal.mjs` | Chạy được | Cả hai **PASS** |
| `check-new-article.mjs` (phần offline) | Chạy được | Độ dài, media, title, FAQ, stats, related đều **PASS** |
| Build đầy đủ (`astro build`) | Chạy được | **673 trang, không warning** |
| `scripts/gsc/gsc.mjs radar` | Không chạy (thiếu token trong container) | Không có striking distance của chính site |
| Ahrefs MCP | `Insufficient plan` | Không lấy được volume/KD |

**Cách xử lý phần media khi không verify được:** toàn bộ ảnh và video của 5 bài lần này đều **tái sử
dụng media đã có sẵn trong repo**, tức đã qua `check-media.mjs` ở các phiên trước trên máy có mạng.
Không dán một URL mới nào chưa kiểm tra, đúng tinh thần §0b bước 3. Dù vậy vẫn **cần chạy lại
`check-media.mjs` trên máy có mạng trước khi đẩy lên production**, vì đó mới là phép kiểm thật.

Số `broken images 2493 | broken videos 723` mà `check-media.mjs` in ra trong container này **không
phải lỗi thật**, tất cả đều là 403 ở tầng egress. Phiên ngày 13/08 đo được con số tương đương.

---

## 2. Trần nhịp đăng: còn bao nhiêu slot

Theo `check-cadence.mjs` (tối đa 2 bài/ngày, 8 bài/tuần ISO):

| Tuần ISO | Ngày | Đã đăng | Còn slot |
|---|---|---|---|
| 2026-W33 | 10/8 tới 16/8 | **8 bài** (10/8: 2, 11/8: 2, 12/8: 1, 13/8: 2, 15/8: 1) | **0** |
| 2026-W34 | 17/8 tới 23/8 | 0 bài | 8 bài |

W33 đã chạm đúng trần 8 bài. Vì vậy **không thể đăng thêm bài nào có `datePublished` rơi vào 15/8
hoặc 16/8**. Đây là luật cứng §0a, không có ngoại lệ.

Hệ quả với batch lần này, cần nêu rõ để người duyệt không hiểu nhầm:

- Bài refresh Starlink giữ nguyên `datePublished` cũ (16/6), chỉ bump `dateModified` sang 15/8, nên
  **không tốn slot** và lên được ngay.
- 4 bài mới được đặt `datePublished` vào **17/8 (2 bài)** và **18/8 (2 bài)**, tức 4 trong 8 slot của
  W34. `check-new-article.mjs` sẽ báo "datePublished nằm ở tương lai" khi chạy trước ngày 17/8. Đây
  là **đánh đổi có chủ đích**: giữa việc phá trần nhịp W33 (luật cứng, đã khiến 97% nội dung bị
  Google từ chối lập chỉ mục) và việc hẹn ngày đăng sang W34, chọn cái thứ hai. Batch nằm sẵn trên
  nhánh, merge vào `main` từ ngày 17/8 là mọi cảnh báo tự hết.

---

## 3. Radar xu hướng Việt Nam, tuần 10/8 tới 16/8

Tín hiệu bắt được, xếp theo độ nóng và độ hợp ngách:

1. **Starlink mở bán chính thức tại Việt Nam (13/8)**. Vẫn là tin nóng nhất tuần và chưa hạ nhiệt.
   Trang tiếng Việt bắt đầu nhận đơn sáng 13/8: gói 100Mbps **1.131.990 đồng/tháng**, gói trên
   400Mbps **1.711.100 đồng/tháng**, đều không giới hạn dung lượng, không hợp đồng, 30 ngày hoàn
   tiền, thiết bị Standard từ khoảng **8,65 triệu đồng**, giao trong 1 tới 2 tuần. Ngày 14/8 xuất
   hiện thêm chi tiết được chia sẻ mạnh: bản đồ dịch vụ của Starlink hiển thị đầy đủ tên hai quần
   đảo Hoàng Sa và Trường Sa thuộc chủ quyền Việt Nam.
2. **Mùa iPhone bắt đầu dựng đứng.** Mark Gurman (Bloomberg) chốt dự đoán sự kiện Apple rơi vào
   **8 hoặc 9/9/2026**, nghiêng về thứ Tư 9/9, mở đặt trước thứ Bảy **12/9**. Quan trọng hơn với
   người mua Việt: bản thường iPhone 18, iPhone Air 2 và iPhone 18e **lùi sang mùa xuân 2027**,
   tháng 9 chỉ có Pro, Pro Max và máy gập. Đây là lần đầu Apple tách lịch kể từ 2017.
3. **Gemini cán mốc 1 tỷ người dùng hằng tháng (11/8).** Sundar Pichai công bố trên X, một ngày
   trước Made by Google. Site có 16 bài nhắc Gemini nhưng chưa bài nào về cột mốc này.
4. **Gemini 3.7 Flash ra mắt (13/8)**, chỉ ba tuần sau bản 3.6, kèm giá giới thiệu bằng một nửa đời
   trước. Bloomberg và Axios cùng lưu ý bản Gemini 3.5 Pro vẫn đang trễ lịch.
5. **Made by Google và Pixel 11.** Đỉnh tin đã qua, site đã có 6 bài phủ kín. Không viết thêm.
6. **LCP 2026 Split 3** kết thúc **30/8**, quyết định 3 suất CKTG. TSW đã có vé (site đã có bài).
   GAM và MVKE còn tranh chấp. Mạch tin đang chạy nhưng **chưa tới lúc viết**.
7. **Khủng hoảng RAM và NAND, giá laptop mùa tựu trường.** Vẫn nóng trên báo VN nhưng site đã có
   5 bài về RAM cộng 1 bài laptop sinh viên tựu trường. **Bão hòa, không viết thêm.**
8. **Sự kiện Việt Nam - Á Châu Quantum 2026 (14/8), Quyết định 1528 về nhân lực AI (11/8), Nghị định
   314/2026 về sàn giao dịch dữ liệu.** Đúng ngách công nghệ nhưng search demand rất thấp, báo lớn
   đưa trước. Xếp vào danh sách dự phòng.

---

## 4. Ba đối thủ lớn nhất và cách họ đánh tuần qua

Lưu ý phương pháp: egress chặn nên phần này dựng từ tiêu đề và trích đoạn trên SERP, không phải từ
đọc nguyên văn từng bài. **Không có số liệu tương tác thật** (share, comment) vì không mở được trang.
Đây là hạn chế cần nói thẳng, đừng trích phần này như thể đã đo được engagement.

### 4.1. Sforum (cellphones.com.vn/sforum)

Đối thủ SEO trực diện nhất ở cụm từ khóa điện thoại và laptop. Ba mũi nhọn giữ nguyên so với kỳ
trước: bài tổng hợp tin đồn sống nhiều tháng cho mỗi flagship sắp ra (`samsung-galaxy-s26-co-gi-moi`,
`iphone-18-...`), bài lịch thi đấu esports cập nhật theo ngày, và bài xu hướng ngành gắn giá Việt Nam.
Tuần này họ đẩy mạnh cụm laptop sinh viên và điện thoại tầm 5 triệu, đúng mùa tựu trường.

Điểm mạnh: hậu thuẫn bởi sàn thương mại điện tử có giá niêm yết sẵn, cập nhật giá theo ngày.
Điểm yếu: bài thiên về sản phẩm họ bán, phân tích mỏng, gần như không có phép tính tổng chi phí.

### 4.2. Phong Vũ và FPT Shop (mảng blog)

Cả hai đánh rất mạnh vào lịch thi đấu (`lich-thi-dau-lcp-2026`, `lcp-split-3`) và tổng hợp sự kiện
phần cứng. FPT Shop đang có nhiều trang LCP Split 3 cập nhật liên tục, ăn trọn cụm từ khóa esports.
Thế Giới Di Động giữ các trang tổng hợp dài hạn kiểu "điện thoại mới ra mắt 2026 cập nhật liên tục".

Điểm mạnh: DR cao, giá niêm yết thật, ăn hết truy vấn có ý định mua.
Điểm yếu: gần như không có góc phân tích, bài nào cũng dẫn về trang bán hàng.

### 4.3. Nhóm báo lớn (VnExpress, Tuổi Trẻ, VietnamNet, Dân Trí, VnEconomy)

Tuần này họ đồng loạt đưa Starlink trong vòng vài giờ sau công bố, đúng như §0 cảnh báo. Dân Trí có
thêm bài bối cảnh "thị trường viễn thông Việt Nam trước khi Starlink gia nhập". Nhưng toàn bộ nhóm
này dừng ở mức thông báo giá và bối cảnh ngành, **không ai trả lời**: lắp một năm tốn đủ bao nhiêu,
tiền điện bao nhiêu, đặt cạnh gói cáp quang 195.000 đồng thì chênh mấy lần, nhà tôi có dùng được không.

### Khoảng trống rút ra, và cách batch này khai thác

Cả ba nhóm đều bỏ ngỏ **bài tính tổng chi phí sở hữu** và **bài quy đổi giá quốc tế sang giá Việt Nam
có phương pháp**. Đó là chỗ techvision.click nên đứng, đúng định vị "giải thích đầy đủ nhất" ở §0.
Batch lần này khai thác đúng hai khoảng trống đó: bài chi phí Starlink năm đầu, và bài quy giá
iPhone 18 theo hệ số thực tế của mùa iPhone 17 thay vì nhân thẳng tỷ giá ngân hàng.

---

## 5. Năm chủ đề chốt cho tuần, kèm dàn ý

Cả 5 đã được viết trong phiên này. Ghi lại dàn ý để team Content dùng khi cập nhật hoặc mở rộng.

### Chủ đề 1. Starlink Việt Nam mở bán chính thức · REFRESH, đã đăng

- **Slug (giữ nguyên)**: `starlink-viet-nam-2026-gia-cuoc-toc-do-dang-ky-ai-nen-dung`
- **Tiêu đề mới**: `Starlink Việt Nam mở bán: giá cước từ 1,13 triệu/tháng` (54 ký tự)
- **Vì sao refresh chứ không viết mới**: bài cũ từ 16/6 viết khi Starlink mới có giấy phép thí điểm,
  toàn bộ số liệu là mức dự kiến (11,5 triệu tháng đầu, 2,2 triệu/tháng). Viết bài mới sẽ tự cạnh
  tranh truy vấn với chính mình. Theo §8b: giữ slug, đổi title, bump `dateModified`, cập nhật nội dung.
- **Neo Việt Nam**: giá chính thức 1.131.990đ và 1.711.100đ, thiết bị 8,65 triệu, mốc 13/8/2026,
  đặt cạnh cáp quang 190.000 tới 195.000đ.
- **Dàn ý**: mở bán ra sao → bảng giá chính thức → đặt cạnh cáp quang → ai nên dùng → cần kiểm tra gì.

### Chủ đề 2. Chi phí Starlink năm đầu tại Việt Nam · BÀI MỚI, hẹn 17/8

- **Slug**: `chi-phi-starlink-viet-nam-nam-dau-so-voi-cap-quang-2026`
- **Tiêu đề**: `Chi phí Starlink năm đầu tại Việt Nam: tính đủ từng khoản` (57 ký tự)
- **Từ khóa chính**: starlink chi phí, starlink có đắt không, starlink so với cáp quang
- **Vì sao chọn**: đúng khoảng trống ở §4, không đối thủ nào làm phép tính năm đầu.
- **Neo Việt Nam**: bảng 12 tháng (22,23 triệu gói rẻ, 29,18 triệu gói nhanh), tiền điện tính theo
  biểu bậc thang EVN (1.984đ tới 3.967đ/kWh), đặt cạnh gói cáp quang FPT/Viettel/VNPT.
- **Dàn ý**: ba khoản tạo nên chi phí → khoản tiền điện ít ai nhắc → đặt cạnh cáp quang chênh 9,5 lần
  → bốn nhóm mà phép tính đảo chiều → khoản dễ bỏ sót → kết luận ba con số đáng nhớ.

### Chủ đề 3. iPhone 18 về Việt Nam khi nào, giá dự kiến · BÀI MỚI, hẹn 17/8

- **Slug**: `iphone-18-ve-viet-nam-khi-nao-gia-du-kien-tung-phien-ban-2026`
- **Tiêu đề**: `iPhone 18 về Việt Nam khi nào, giá dự kiến từng bản` (51 ký tự)
- **Từ khóa chính**: iphone 18 khi nào về việt nam, iphone 18 giá bao nhiêu, iphone fold giá việt nam
- **Vì sao chọn**: cụm từ khóa có ý định mua rõ nhất trong năm, nhu cầu leo từ giữa tháng 8, đỉnh đầu
  tháng 9. Site đã có bài tính năng toàn cầu và bài iPhone Fold nhưng **chưa có bài góc Việt Nam**.
- **Điểm khác biệt so với mọi bài trên SERP**: quy giá bằng **hệ số thực tế của mùa iPhone 17**
  (giá niêm yết VN chia giá niêm yết Mỹ, ra 31.300 tới 31.700đ mỗi USD) thay vì nhân tỷ giá ngân hàng.
- **Dàn ý**: Việt Nam ở đợt mở bán nào (dựa mốc 12/9 và 19/9/2025 có thật) → vì sao năm nay không có
  bản thường → giá dự kiến từng bản và cơ sở con số → iPhone gập vì sao cách biệt → mua 17 hay chờ
  → tách bạch cái gì đã kiểm chứng, cái gì còn là tin đồn.

### Chủ đề 4. Gemini cán mốc 1 tỷ người dùng · BÀI MỚI, hẹn 18/8

- **Slug**: `gemini-1-ty-nguoi-dung-hang-thang-google-lat-nguoc-the-co-2026`
- **Tiêu đề**: `Gemini đạt 1 tỷ người dùng: Google lật ngược thế cờ ra sao` (58 ký tự)
- **Vì sao chọn**: site có 16 bài nhắc Gemini, không bài nào về cột mốc này.
- **Neo Việt Nam theo §0a-bis (bài tin ngành, KHÔNG nhồi giá)**: một mục riêng có nội dung thật về
  mốc **4/9/2026** Google Assistant ngừng hoạt động, kéo theo máy Android tại Việt Nam chuyển sang
  Gemini mặc định; trợ lý mua sắm Gemini đã ra mắt tại Việt Nam từ tháng 7/2026. **Không bịa số người
  dùng tại Việt Nam** vì Google không công bố.
- **Dàn ý**: con số 1 tỷ và ý nghĩa → Google bơm Gemini vào đâu → vì sao số người dùng trợ lý AI cần
  đọc thận trọng → người dùng Việt bị ảnh hưởng ở đâu → đổi gì cho lập trình viên và doanh nghiệp Việt.

### Chủ đề 5. Gemini 3.7 Flash và mức giá giảm một nửa · BÀI MỚI, hẹn 18/8

- **Slug**: `gemini-3-7-flash-ra-mat-gia-goi-mo-hinh-giam-mot-nua-2026`
- **Tiêu đề**: `Gemini 3.7 Flash ra mắt: giá gọi mô hình giảm còn một nửa` (57 ký tự)
- **Vì sao chọn**: site đã có bài 3.5 Pro và 3.6 Flash, đây là mạch tin có sẵn độc giả. Tin có số
  liệu cứng: 0,75 USD và 3,75 USD mỗi triệu token, áp tới hết 2026.
- **Neo Việt Nam**: quy đổi ra tiền Việt (khoảng 19.800đ và 99.000đ mỗi triệu token) kèm **bảng ước
  tính chi phí hằng tháng theo ba mức khối lượng** cho nhóm phát triển trong nước. Đây là thứ không
  bản tin quốc tế nào làm.
- **Dàn ý**: mô hình đổi gì → chi phí thật quy ra tiền Việt → dùng được ở đâu → vì sao Flash ra liên
  tục còn Pro thì chưa → nên làm gì với thông tin này.

### Hai chủ đề đã đặt lịch, CHƯA viết vì chưa tới lúc

- **LCP 2026 Split 3 chốt sổ và ba suất CKTG.** Viết **30/8 hoặc 31/8**, sau vòng cuối. Viết trước
  thì toàn phỏng đoán. Tiêu đề gợi ý: `LCP 2026 Split 3: ai giành nốt 2 suất CKTG cùng TSW`.
  Dàn ý: cục diện sau Swiss → TSW đã có vé → cửa của GAM → MVKE và phần còn lại → lịch trận quyết
  định giờ Việt Nam → ba suất LCP vào nhánh nào ở CKTG New York.
- **Galaxy Z Fold 8 và Z Flip 8 sau ngày mở bán rộng 18/8.** Là **refresh** bài
  `gia-galaxy-z-fold-8-flip-8-viet-nam-dat-truoc-thang-7-2026` (không tốn slot), cập nhật giá thực tế
  sau khi hết đợt khuyến mãi ngày 17/8. Cần khảo giá thật tại chuỗi bán lẻ, không viết chay.

### Đã cân nhắc và loại

| Chủ đề | Lý do loại |
|---|---|
| Khủng hoảng RAM, SSD, giá laptop tựu trường | Đã có 5 bài RAM + 1 bài laptop sinh viên, bão hòa |
| Pixel 11 và Made by Google | Đã có 6 bài, đỉnh tin đã qua |
| Galaxy S27 và Exynos 2700 | Máy tới 2027 mới ra, viết sớm thì loãng |
| Quantum 2026, Quyết định 1528, Nghị định 314 | Đúng ngách nhưng search demand rất thấp |
| Đồ gia dụng các loại | §0a cấm tuyệt đối, ngoài ngách |

---

## 6. Trạng thái 5 bài và lịch đăng

| Ngày | Bài | Slot | Trạng thái |
|---|---|---|---|
| 15/8 | Refresh Starlink (giữ slug) | Không tốn | Đã viết |
| 17/8 | Chi phí Starlink năm đầu | 1/8 của W34 | Đã viết, hẹn ngày |
| 17/8 | iPhone 18 về Việt Nam | 2/8 của W34 | Đã viết, hẹn ngày |
| 18/8 | Gemini 1 tỷ người dùng | 3/8 của W34 | Đã viết, hẹn ngày |
| 18/8 | Gemini 3.7 Flash | 4/8 của W34 | Đã viết, hẹn ngày |
| 30/8 hoặc 31/8 | LCP Split 3 chốt sổ | 1 slot W35 | Chưa viết, chờ kết quả |

Còn 4 slot trống trong W34 cho các tin phát sinh.

**Lệch so với cơ cấu batch §0c, ghi rõ lý do:** batch chuẩn là 2 tin công nghệ + 1 esports + 1 sản
phẩm mới tại Việt Nam. Lần này không có bài esports vì LCP Split 3 chưa có kết quả (viết trước sẽ
toàn phỏng đoán), và không có bài sản phẩm mới ra mắt tại Việt Nam vì quét cả tuần không thấy sản
phẩm nào công bố giá chính hãng trong nước ở khung 13 tới 16/8. Bù lại, bài chi phí Starlink và bài
iPhone 18 đều neo giá Việt Nam rất chặt, đúng tinh thần §0a-bis.

---

## 7. Việc phải làm trên máy có mạng đầy đủ

```bash
git pull --rebase origin main

# 1. Verify lai toan bo media cua 5 bai (cong bat buoc §0b buoc 1)
node scripts/check-media.mjs      # phai ra 0 anh loi, 0 video loi, 0 bai media don cum

# 2. Mo tay kiem nguon lop 2 (§0), nhung URL nay lay tu ket qua tim kiem,
#    chua mo duoc truc tiep trong container:
#    - blog.google (Gemini 1 ty, Gemini 3.7 Flash)
#    - macrumors.com/roundup/iphone-18 (lich ra mat, tach dong san pham)
#    - tuoitre.vn, vnexpress.net (gia Starlink Viet Nam)

# 3. Chay lai day du 4 cong §0b
node scripts/check-cadence.mjs
node scripts/check-vn-signal.mjs --since 2026-08-17
node scripts/check-media.mjs
node scripts/build-legacy-index.mjs && node scripts/build-blog.mjs && npx astro build

# 4. Merge batch vao main (tu ngay 17/8 tro di thi het canh bao ngay tuong lai)

# 5. Day index sau khi deploy
node scripts/indexnow.mjs \
  https://techvision.click/articles/chi-phi-starlink-viet-nam-nam-dau-so-voi-cap-quang-2026.html \
  https://techvision.click/articles/iphone-18-ve-viet-nam-khi-nao-gia-du-kien-tung-phien-ban-2026.html \
  https://techvision.click/articles/gemini-1-ty-nguoi-dung-hang-thang-google-lat-nguoc-the-co-2026.html \
  https://techvision.click/articles/gemini-3-7-flash-ra-mat-gia-goi-mo-hinh-giam-mot-nua-2026.html \
  https://techvision.click/articles/starlink-viet-nam-2026-gia-cuoc-toc-do-dang-ky-ai-nen-dung.html \
  https://techvision.click/blog.html
```

Radar GSC của chính site vẫn chưa chạy được từ xa. Để kỳ sau có striking distance thật:

```bash
cd scripts/gsc && npm install && npm run auth   # neu bao invalid_grant
node scripts/gsc/gsc.mjs radar 28
```

---

## 8. Nguồn đã dùng cho radar này

Theo §0, toàn bộ nguồn báo Việt bên dưới thuộc **lớp 1 (radar)**. Số liệu trong bài đã được đối chiếu
chéo với nguồn quốc tế lớp 2 qua kết quả tìm kiếm, và URL nguồn gốc được ghi trong `sourceUrl` của
từng bài.

- Starlink mở bán và giá cước: Tuổi Trẻ, VnExpress, VietnamFinance, CafeBiz, Dân Trí (13 tới 14/8/2026)
- Giá cáp quang hộ gia đình tháng 8/2026: bảng giá công bố của FPT, Viettel, VNPT
- Biểu giá điện sinh hoạt 5 bậc: CafeF, LuatVietnam (biểu EVN hiện hành)
- Điện năng tiêu thụ thiết bị Starlink: tài liệu thông số quốc tế
- Gemini 1 tỷ người dùng: blog.google, TechCrunch, Forbes, 9to5Google (11/8/2026)
- Gemini 3.7 Flash: blog.google, Bloomberg, Axios, VentureBeat, SiliconANGLE, 9to5Google (13/8/2026)
- iPhone 18 và iPhone gập: MacRumors, GSMArena, Forbes, Notebookcheck (dự đoán của Mark Gurman)
- Giá mở bán iPhone 17 tại Việt Nam 9/2025: Thanh Niên, VnExpress, CafeF
- Tỷ giá USD/VND tháng 8/2026: Thanh Niên, CafeF
- LCP 2026 Split 3: FPT Shop, Phong Vũ, thethao247
