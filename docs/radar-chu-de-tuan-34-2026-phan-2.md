# Radar chủ đề tuần 34/2026, phần 2 (chốt ngày 18/08/2026)

Tiếp nối `radar-chu-de-tuan-34-2026.md` (chốt 17/8). Phiên này quét thêm xu hướng
tuần 11 tới 17/8, soi lại đối thủ và đề xuất 5 chủ đề "ngon" nhất kèm tiêu đề và
dàn ý để team Content triển khai. Đã viết và đẩy 2 bài trong danh sách này.

Tuân thủ `AGENTS.md`: §0 mô hình nguồn 3 lớp, §0a trần nhịp đăng, §0a-bis neo Việt Nam, §0c cơ cấu batch, §8b SEO tiêu đề.

---

## 1. Điều kiện chạy của phiên này (giữ nguyên hạn chế như phiên 17/8)

| Hạng mục | Trạng thái |
|---|---|
| WebSearch (qua Anthropic) | Chạy được, bắt xu hướng + tiêu đề đối thủ + số liệu kèm URL |
| WebFetch / curl tới host ngoài | **Chặn 403 ở proxy**, không đọc nguyên văn bài gốc |
| `i.ytimg.com`, `youtube.com/oembed` | Chặn 403, **không verify được media mới** |
| Ahrefs MCP | `Insufficient plan`, không lấy được volume/KD |
| `scripts/gsc/gsc.mjs radar` | Không có token trong container |

**Hệ quả:** 2 bài của phiên này chỉ dùng **media đã có sẵn trong repo**, từng qua
`check-media` ở môi trường mạng đầy đủ. Không dán một URL ảnh/video nào chưa kiểm.
Bước bắt buộc còn lại: chạy `node scripts/check-media.mjs` trên máy có mạng để xác
nhận 0 ảnh lỗi, 0 video lỗi trước khi coi là chốt (§0b bước 1).

---

## 2. Trần nhịp đăng: còn bao nhiêu slot

| Tuần ISO | Ngày | Đã đăng | Còn slot |
|---|---|---|---|
| 2026-W34 | 17/8 tới 23/8 | 2 bài (17/8) + **2 bài mới (18/8)** = 4 | **4** |

- 17/8: iPhone 18 lùi 2027, Gemini 1 tỷ người dùng (đã đăng phiên trước).
- 18/8: **HyperOS 4** + **Pottel/Vietnam Post** (đăng phiên này, đúng trần 2 bài/ngày).
- Còn 4 slot trong tuần cho các chủ đề 3 tới 5 dưới đây.

---

## 3. Radar xu hướng tuần 11 tới 17/8 (bổ sung so với phiên trước)

Tín hiệu mới bắt được, xếp theo độ nóng và độ hợp ngách:

1. **HyperOS 4 nền Android 17 mở beta (13 tới 14/8)**. Xiaomi mở chương trình beta,
   đẩy theo 3 đợt (14/8, 27/8, 17/9), hơn 60 máy đủ điều kiện. Giao diện kính mới,
   kiến trúc Zero-Legacy, AI MiMo. Site có nhiều bài Xiaomi nhưng **chưa bài nào về
   HyperOS 4**. → ĐÃ VIẾT.
2. **Vietnam Post ra mắt Pottel, mạng di động ảo thứ 6 (15/8)**. Chạy trên hạ tầng
   VNPT, bán SIM du lịch trước. Câu chuyện thuần Việt, neo VN rất mạnh. Site **chưa có
   bài**. → ĐÃ VIẾT.
3. **Bưu điện dùng SIM du lịch cho khách quốc tế**, đúng lúc 7 tháng đầu 2026 VN đón
   13,9 triệu lượt khách quốc tế (+13,8%). Góc "SIM nào cho khách du lịch" còn trống.
4. **Giá laptop và RAM tiếp tục leo** (DRAM +171%, NAND +246% so với cuối 2025; laptop
   cùng cấu hình tăng 20 tới 40%). Site đã có 6 bài RAM/NAND, vừa refresh 15/8. Góc
   RAM linh kiện **bão hòa**, nhưng góc "laptop tựu trường tăng giá, mua gì bây giờ"
   thì chưa khai thác đúng thời điểm.
5. **LCP 2026 Split 3** kết thúc 30/8, quyết định 3 suất CKTG khu vực (đã nêu phiên
   trước, viết sau vòng cuối).
6. **Redmi K100 / K100 Pro bản chính thức** (đã nêu phiên trước, cần kiểm đường về VN).

---

## 4. Ba đối thủ lớn nhất: họ lên gì tuần qua

Phương pháp: dựng từ tiêu đề + trích đoạn SERP (egress chặn nên không đọc nguyên văn,
không có số liệu tương tác thật).

### 4.1. Sforum (cellphones.com.vn/sforum)
Tuần này chạy mạnh cụm **HyperOS 4**: nhiều bài "danh sách thiết bị Xiaomi cập nhật
HyperOS 4", "HyperOS 4 có gì mới". Đúng kiểu bài bảng danh sách mà chuỗi bán lẻ làm
nhanh để ăn truy vấn "máy tôi có được cập nhật không". Điểm yếu: liệt kê máy nhưng ít
phân tích lịch Global về VN và ít cảnh báo beta.

### 4.2. GenK và nhóm báo công nghệ
GenK có bài phân tích sâu nhất về **Pottel**: *"Từng chung một nhà, tách nhau gần 19
năm, giờ Vietnam Post và VNPT về lại trong canh bạc mạng di động ảo mang tên Pottel"*
(16/8). Đây là góc kể chuyện lịch sử VNPT, khác các báo chỉ đưa tin thông báo. Rút ra:
góc "lịch sử VNPT" đã bị GenK chiếm, nên bài của mình đi vào **mô hình MVNO + ngách SIM
du lịch + thị phần mạng ảo** để không echo.

### 4.3. Nhóm báo lớn (VnExpress, Tuổi Trẻ, VnEconomy, Dân trí)
Đồng loạt đưa Pottel trong vài giờ ("Thêm nhà mạng mới gia nhập thị trường di động").
Dừng ở mức thông báo: chưa nhà nào tổng hợp đủ **6 mạng ảo + đầu số + vì sao chọn SIM
du lịch + lợi thế 13.000 điểm bưu điện** trong một bài. Đó là chỗ techvision đứng.

**Khoảng trống rút ra:** với HyperOS 4, đối thủ liệt kê máy nhưng bỏ ngỏ **lịch Global
cho VN và cảnh báo có nên cài beta**; với Pottel, báo lớn đưa tin nhanh nhưng bỏ ngỏ
**bức tranh toàn cảnh mạng ảo VN**. Cả hai bài của phiên này nhắm đúng hai khoảng trống đó.

---

## 5. Năm chủ đề "ngon" nhất cần viết trong tuần

Mỗi chủ đề: từ khóa chính, lý do, tiêu đề (đã kiểm ≤65 ký tự, từ khóa đứng đầu theo
§8b), dàn ý H2, neo Việt Nam theo §0a-bis, internal link.

---

### Chủ đề 1. HyperOS 4 nền Android 17 ✅ ĐÃ ĐĂNG 18/8

- **Từ khóa chính**: hyperos 4 cập nhật khi nào, danh sách máy hyperos 4, hyperos 4 có gì mới
- **Vì sao chọn**: cụm HyperOS 4 leo mạnh sau khi beta mở 13/8, ý định "máy tôi có được
  cập nhật không" rất rõ. Sforum đang ăn cụm này bằng bài danh sách thuần. Site chưa có bài.
- **Tiêu đề**: `HyperOS 4 cập nhật khi nào: danh sách máy Xiaomi, Redmi, POCO` (61 ký tự)
- **Slug**: `hyperos-4-android-17-danh-sach-may-xiaomi-redmi-poco-cap-nhat-2026`
- **Neo Việt Nam**: máy chính hãng VN chạy bản Global, nhận theo lịch Global (dự kiến từ
  ~10/2026), khác lịch beta Trung Quốc; cảnh báo không nên cài beta trên máy chính.
- **Góc riêng**: tách bạch beta Trung Quốc vs Global VN, cảnh báo beta, đọc số hiệu năng
  17,5%/28,9% với thái độ thận trọng, phân biệt tính năng Android 17 gốc vs phần Xiaomi thêm.
- **Kết quả**: 1.436 từ, 5 media, title 61 ký tự.

---

### Chủ đề 2. Pottel, Vietnam Post làm mạng di động ảo ✅ ĐÃ ĐĂNG 18/8

- **Từ khóa chính**: pottel là gì, vietnam post pottel, mạng di động ảo việt nam, sim du lịch pottel
- **Vì sao chọn**: câu chuyện thuần Việt, neo VN cực mạnh (đúng §0a-bis cho bài tin ngành
  nội địa). Báo lớn đưa tin nhanh nhưng chưa ai tổng hợp toàn cảnh 6 mạng ảo.
- **Tiêu đề**: `Pottel là gì: Vietnam Post thành mạng di động ảo thứ 6` (54 ký tự)
- **Slug**: `pottel-vietnam-post-mang-di-dong-ao-thu-6-sim-du-lich-2026`
- **Neo Việt Nam**: bản thân câu chuyện là VN; giấy phép 559/GP-CVT, hạ tầng VNPT, 13.000
  điểm bưu điện, 13,9 triệu khách quốc tế 7 tháng đầu 2026, so sánh đầu số iTel/Wintel/VNSKY.
- **Góc riêng**: giải thích mô hình MVNO (sóng = VinaPhone), vì sao chọn ngách SIM du lịch,
  bức tranh thị phần mạng ảo còn nhỏ, chỉ rõ số liệu Vietnam Post CHƯA công bố (giá, đầu số).
- **Kết quả**: 1.400+ từ, 5 media, title 54 ký tự.

---

### Chủ đề 3 (tin công nghệ). Laptop tựu trường tăng giá vì bão RAM: mua gì bây giờ

⏳ **Chưa viết. Ưu tiên cao, đúng mùa tựu trường tháng 8 tới 9.**

- **Từ khóa chính**: laptop tăng giá 2026, có nên mua laptop bây giờ, laptop tựu trường giá
- **Vì sao chọn**: DRAM +171%, NAND +246%, laptop cùng cấu hình tăng 20 tới 40%. Nhu cầu
  "mua laptop sinh viên" đỉnh điểm cuối tháng 8. Site đã có bài chọn laptop sinh viên nhưng
  **chưa có bài về cú tăng giá và chiến thuật mua đúng lúc**. Đây là bài tư vấn có ý định mua rõ.
- **Tiêu đề đề xuất**: `Laptop tăng giá vì bão RAM: nên mua bây giờ hay chờ 2026` (55 ký tự)
- **Slug đề xuất**: `laptop-tang-gia-bao-ram-nen-mua-bay-gio-hay-cho-2026`
- **Neo Việt Nam** (bắt buộc, bài sản phẩm): dẫn giá thật tại đại lý VN của 2 tới 3 mẫu phổ
  thông (ví dụ dòng ASUS Vivobook, Acer Aspire, Lenovo IdeaPad) so tháng trước và hiện tại;
  nêu tầm giá cấu hình 16GB RAM đang bị đội lên bao nhiêu. **Không có giá VN thật thì đừng đăng.**
- **Dàn ý**: (1) vì sao laptop tăng giá, tách phần RAM/NAND ra khỏi các yếu tố khác;
  (2) mức tăng thực tế tại VN với vài mẫu cụ thể; (3) mua bây giờ hay chờ, phân theo nhu cầu;
  (4) mẹo chọn cấu hình để không phải nâng RAM về sau; (5) các mốc khuyến mãi tựu trường.
- **Internal link**: bài chọn laptop sinh viên theo ngành, bài trữ giá RAM, bài cách chọn
  laptop sinh viên văn phòng.
- **Lưu ý dedup**: tránh trùng khung với bài RAM đã có; bài này là **tư vấn mua**, không phải
  bài giải thích khủng hoảng RAM. Cấm dạng series template (§0a).

---

### Chủ đề 4 (esports, theo §0c). LCP 2026 Split 3 chốt sổ và ba suất CKTG

⏳ **Chưa viết. Thời điểm: sau vòng cuối, khoảng 30 hoặc 31/8.** (Giữ nguyên đề xuất phiên trước.)

- **Từ khóa chính**: lcp split 3, gam esports, suất cktg 2026, lịch thi đấu lcp
- **Vì sao chọn**: Split 3 kết thúc 30/8, quyết định 3 đại diện LCP tại CKTG 2026. Sforum và
  Phong Vũ ăn cụm này bằng bài lịch thi đấu thuần, không phân tích cục diện.
- **Tiêu đề đề xuất**: `LCP 2026 Split 3: ai giành nốt 2 suất CKTG cùng TSW` (50 ký tự)
- **Slug đề xuất**: `lcp-2026-split-3-chot-so-suat-cktg-gam-mvk-cuc-dien`
- **Không viết trước hạn**: kết quả chưa có thì bài toàn phỏng đoán, mất giá trị ngay khi có kết quả.
- **Dàn ý**: (1) cục diện sau vòng cuối; (2) TSW đã có vé; (3) cửa của GAM Esports; (4) MVK và
  các đội còn lại; (5) lịch trận quyết định giờ VN; (6) 3 suất LCP vào nhánh nào ở CKTG New York.
- **Internal link**: bài LCP Split 3 Swiss stage, bài TSW giành vé Worlds, bài Worlds 2026 New York.

---

### Chủ đề 5 (sản phẩm/dịch vụ, theo §0c). SIM du lịch cho khách quốc tế đến Việt Nam: chọn loại nào

⏳ **Chưa viết. Chỉ viết nếu tách được góc riêng khỏi bài Pottel để không tự cạnh tranh.**

- **Từ khóa chính**: sim du lịch việt nam, sim cho khách nước ngoài, tourist sim vietnam, esim du lịch
- **Vì sao chọn**: 13,9 triệu lượt khách quốc tế 7 tháng đầu 2026, nhu cầu SIM data ngắn ngày
  cao. Pottel vừa nhảy vào ngách này nên cụm từ khóa đang nóng. Bài **cẩm nang so sánh** (không
  phải bài tin) nên tuổi thọ dài, không bị lỗi thời nhanh như bài tin.
- **Tiêu đề đề xuất**: `SIM du lịch Việt Nam: chọn Viettel, VNPT hay eSIM quốc tế` (56 ký tự)
- **Slug đề xuất**: `sim-du-lich-viet-nam-cho-khach-quoc-te-chon-loai-nao-2026`
- **Neo Việt Nam** (bắt buộc): bảng giá thật các gói SIM/eSIM du lịch đang bán tại VN (Viettel
  tourist SIM, VinaPhone, Mobifone, các eSIM quốc tế phổ biến), kèm dung lượng và thời hạn.
- **Dàn ý**: (1) khách du lịch cần gì ở một SIM; (2) SIM vật lý vs eSIM du lịch; (3) so sánh
  giá/dung lượng các lựa chọn đang bán; (4) Pottel đứng ở đâu khi có bảng giá; (5) mua ở đâu,
  kích hoạt thế nào tại sân bay và điểm bán.
- **Cảnh báo**: nếu bài này chỉ lặp lại bài Pottel thì bỏ. Chỉ viết khi đủ dữ liệu giá của ÍT
  NHẤT 5 lựa chọn SIM/eSIM cụ thể để thành bài so sánh thật (áp §0 quy tắc listicle nêu tên cụ thể).

---

## 6. Đã cân nhắc và loại

| Chủ đề | Lý do loại |
|---|---|
| Khủng hoảng RAM/NAND đứng riêng | Đã 6 bài, vừa refresh 15/8, bão hòa. Chỉ dùng làm nền cho bài laptop tư vấn (CĐ3) |
| Redmi K100 bản chính thức | Cần kiểm đường về VN; dòng K thường không phân phối chính hãng (§0a-bis) |
| Acer Day 2026 tại VN | Sự kiện thương mại, ít giá trị SEO, dễ thành PR |
| Vietnam - Asia Quantum 2026 | Quá ngách, xa nhu cầu tìm kiếm phổ thông của site |
| Pixel 11 / Made by Google | Đã 6 bài, đỉnh tin đã qua |

---

## 7. Việc còn phải làm trên máy có mạng đầy đủ

1. `node scripts/check-media.mjs` để xác nhận 0 ảnh lỗi, 0 video lỗi cho 2 bài mới (§0b bước 1).
2. Đẩy index sau deploy (§6):
   ```
   node scripts/indexnow.mjs \
     https://techvision.click/articles/hyperos-4-android-17-danh-sach-may-xiaomi-redmi-poco-cap-nhat-2026.html \
     https://techvision.click/articles/pottel-vietnam-post-mang-di-dong-ao-thu-6-sim-du-lich-2026.html \
     https://techvision.click/blog.html
   ```
3. Ảnh OG: `scripts/make-article-og.py` hard-code font macOS. Trong container Linux, 2 ảnh OG
   mới sinh bằng DejaVu Sans thay thế nếu chạy được; nếu muốn đồng bộ tuyệt đối, sinh lại trên máy Mac.
