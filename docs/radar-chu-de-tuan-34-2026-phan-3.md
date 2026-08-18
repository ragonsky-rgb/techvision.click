# Radar chủ đề tuần 34/2026, phần 3 (chốt ngày 18/08/2026)

Tiếp nối `radar-chu-de-tuan-34-2026.md` (chốt 17/8) và `radar-chu-de-tuan-34-2026-phan-2.md`
(chốt 18/8 sáng). Phiên này quét lại xu hướng tuần 11 tới 18/8, soi ba đối thủ lớn nhất,
đề xuất 5 chủ đề "ngon" nhất kèm tiêu đề và dàn ý, và **đã viết 4 bài** trong danh sách.

Tuân thủ `AGENTS.md`: §0 mô hình nguồn 3 lớp, §0a trần nhịp đăng, §0a-bis neo Việt Nam,
§0b checklist trước commit, §0c cơ cấu batch, §8b SEO tiêu đề.

---

## 1. Điều kiện chạy của phiên này

| Hạng mục | Trạng thái |
|---|---|
| WebSearch (qua Anthropic) | Chạy được, bắt xu hướng, tiêu đề đối thủ, số liệu kèm URL |
| WebFetch / curl tới host ngoài | **Chặn ở proxy (exit 56)**, không đọc được nguyên văn bài gốc |
| `i.ytimg.com`, `youtube.com/oembed` | Chặn, **không verify được media mới** |
| `node scripts/check-media.mjs` phần mạng | Không chạy được, mọi URL trả ERR |
| Ahrefs MCP | Gói hiện tại không đủ quyền lấy volume/KD |
| `scripts/gsc/gsc.mjs radar` | Không có token trong container |

**Hệ quả bắt buộc:** cả 4 bài của phiên này **chỉ dùng media đã có sẵn trong repo**, tức
các ảnh và video từng qua `check-media` ở môi trường mạng đầy đủ. Không dán một URL ảnh
hay video nào chưa kiểm. Phần media dồn cụm (chạy offline được) đã kiểm: **0 bài dồn cụm**.

**Việc còn lại cho máy có mạng:** chạy `node scripts/check-media.mjs` để xác nhận 0 ảnh lỗi,
0 video lỗi (§0b bước 1), rồi `node scripts/indexnow.mjs <url>` cho 4 bài mới (§6).

---

## 2. Trần nhịp đăng: còn bao nhiêu slot

| Tuần ISO | Ngày | Đã đăng | Còn slot |
|---|---|---|---|
| 2026-W34 | 17/8 tới 23/8 | 17/8: 2 bài · 18/8: 2 bài · **19/8: 2 bài mới** · **20/8: 2 bài mới** = 8 | **0** |

- Ngày 18/8 đã dùng hết trần 2 bài/ngày (HyperOS 4, Pottel) nên 4 bài của phiên này
  hẹn giờ sang **19/8** và **20/8**, mỗi ngày 2 bài, đúng §0a.
- Sau batch này, tuần W34 chạm trần 8 bài/tuần. **Không thêm bài nào nữa tới 24/8.**
- Chủ đề số 5 dưới đây vì vậy đẩy sang tuần W35, cũng hợp lý vì mốc chính thức của nó
  rơi vào 26/8.

`node scripts/check-cadence.mjs` → ĐẠT. `node scripts/check-vn-signal.mjs --since 2026-08-19`
→ 4/4 bài có điểm dữ liệu Việt Nam.

---

## 3. Radar xu hướng tuần 11 tới 18/8

Tín hiệu mới bắt được, xếp theo độ nóng và độ hợp ngách:

1. **Qualcomm chốt Snapdragon Summit 22 tới 24/9 tại Maui, Hawaii.** Đây là mốc *chính thức*
   hiếm hoi trong tuần. Kéo theo cả cụm tin đồn: Snapdragon 8 Elite Gen 6 trên tiến trình
   2nm, và **Xiaomi 18 series** được cho là máy đầu tiên dùng chip, ra mắt ngay sau keynote.
   Site có nhiều bài Xiaomi 17 nhưng **chưa có bài nào về Xiaomi 18**. → ĐÃ VIẾT.
2. **Redmi K100 Pro và K100 Pro Max ra mắt chính thức 11/8.** Site mới chỉ có bài *rò rỉ*
   (`redmi-k100-k100-pro-ro-ri-pin-9000mah-man-185hz-2026`), chưa có bài bản chính thức kèm
   giá và đường về Việt Nam qua tên POCO F9. Đây là khoảng trống rõ nhất. → ĐÃ VIẾT.
3. **GAM Esports thắng Deep Cross Gaming 3-1, chốt suất playoffs LCP Split 3.** Bốn đội vào
   playoffs (20 tới 23/8) gồm TSW, MVKE, CFO, GAM, tức **3 trên 4 là đội Việt Nam**. Site có
   bài vòng Thụy Sĩ và bài TSW đoạt vé Worlds, **chưa có bài playoffs**. → ĐÃ VIẾT.
4. **vivo X500 series qua chứng nhận mạng, ra mắt cuối tháng 9 với Dimensity 9600 2nm.**
   Site có bài vivo X300 Pro nhưng **chưa có X500**. Đáng chú ý: các nguồn đang **mâu thuẫn**
   về ống tele (200MP kính tiềm vọng hay 64MP chân dung), đây là góc riêng để viết khác
   đối thủ vốn chỉ chép một phía. → ĐÃ VIẾT.
5. **Apple dự kiến gửi thư mời keynote ngày 26/8, sự kiện 8 hoặc 9/9.** Chưa chính thức.
   Chờ mốc 26/8 rồi viết, xem mục 5 dưới.

Tín hiệu đã cân nhắc rồi **loại**, ghi lại để phiên sau khỏi làm lại:

- **Xiaomi Robot Vacuum 6 Series và Mijia Air Purifier 6 Plus ra mắt VN 15/8** (giá 12,99
  triệu, ưu đãi còn 9,49 triệu). Số liệu VN rất đẹp nhưng **§0a cấm đồ gia dụng**, và
  `check-cadence.mjs` chặn thẳng slug chứa `robot-hut-bui` / `may-loc-khong-khi`. Bỏ.
- **Laptop tựu trường tăng giá 30 tới 40%.** Site đã có `laptop-sinh-vien-tuu-truong-2026-*`
  và `gia-laptop-tang-30-phan-tram-*`, trùng nặng. Bỏ.
- **RTX 50 Super hoãn vì thiếu GDDR7 3GB.** Đã có bài từ 7/7. Bỏ.
- **iQOO Z11, Vivo V80, Galaxy S26 FE, iPhone Fold.** Đều đã có bài. Bỏ.
- **Thông tư 28/2026/TT-BKHCN về chất lượng dịch vụ viễn thông.** Hiệu lực từ 15/7, không
  còn mới, nhu cầu tìm kiếm thấp. Giữ làm dự phòng.

---

## 4. Ba đối thủ lớn nhất: tuần qua họ lên gì

Phương pháp: dựng từ tiêu đề và trích đoạn SERP. Egress bị chặn nên **không đọc được nguyên
văn bài gốc và không có số liệu tương tác thật**. Mọi nhận định dưới đây là suy luận từ tiêu
đề, không phải đo lường.

### 4.1. Sforum (cellphones.com.vn/sforum)

Tuần này chạy dày nhất cụm **Redmi K100 Pro**: "Redmi K100 Pro Max với pin 9000 mAh sẽ ra mắt
ngày 11/8", "Rò rỉ điểm hiệu năng không tưởng của Redmi K100 Pro Max trước ngày ra mắt",
"Redmi K100 Pro Series trình làng: Màn hình 185Hz siêu mượt, camera 200MP giá từ 14.36 triệu".
Đây là chuỗi bài bám sát lịch ra mắt, đúng thế mạnh của một trang thuộc chuỗi bán lẻ.

**Điểm yếu khai thác được:** Sforum dừng ở mô tả cấu hình và giá quy đổi, **không trả lời câu
hỏi thực tế nhất của người Việt là máy có về Việt Nam không và về dưới tên gì**. Bài của mình
đi thẳng vào đường về nước qua tên POCO F9, kèm giá POCO F8 Pro đang bán tại VN làm mốc.

### 4.2. GenK

Vẫn mạnh ở bài phân tích dài. Tuần qua nổi bật cụm khủng hoảng chip nhớ ("Khủng hoảng chip nhớ
toàn cầu khiến giá laptop, RAM, SSD tăng phi mã, người dùng Việt phải chờ đến khi nào?") và bài
Redmi K100 Pro ("Đây rồi Redmi K100 Pro: Màn hình 185Hz, pin 8.580mAh, chụp macro siêu đẹp,
giá khoảng 15 triệu").

**Điểm yếu khai thác được:** GenK viết theo nhịp tin, ít khi nối một tin sang quyết định mua
hàng cụ thể. Bài Xiaomi 18 của mình gắn thẳng mốc Snapdragon Summit vào câu hỏi "đang định mua
Xiaomi 17 giá 26,99 triệu thì nên chờ không", là thứ GenK không làm.

### 4.3. FPT Shop và Thế Giới Di Động (khối tin tức của chuỗi bán lẻ)

Chiếm gần hết SERP mảng esports lịch thi đấu: "Lịch thi đấu LCP 2026 Split 3 mới nhất: Thể thức
Swiss, đội tham dự và suất dự CKTG", "LCP Split 3: Lịch thi đấu chi tiết từng tuần kèm cập nhật
kết quả trận đấu". Các trang này cập nhật bảng lịch liên tục nên rất khó cạnh tranh ở truy vấn
"lịch thi đấu".

**Điểm yếu khai thác được:** họ làm bảng lịch, không giải thích. Bài LCP của mình không đua ở
truy vấn lịch mà đi vào **thể thức nhánh thắng thua nghĩa là gì với cửa đi tiếp của GAM**, cách
chia 3 suất Worlds giữa playoffs và Championship Points, và ba thứ đáng xem trong 4 ngày tới.
Đây là loại nội dung bảng lịch không thay thế được.

---

## 5. Năm chủ đề đề xuất, kèm tiêu đề và dàn ý

### Chủ đề 1 (ĐÃ VIẾT, đăng 19/8 08:30)

- **Tiêu đề:** Xiaomi 18 ra mắt tháng 9: chip Snapdragon 8 Elite Gen 6 (55 ký tự)
- **Slug:** `xiaomi-18-snapdragon-8-elite-gen-6-ra-mat-thang-9-2026`
- **Từ khóa chính:** Xiaomi 18 ra mắt khi nào, Snapdragon 8 Elite Gen 6
- **Dàn ý:** (1) Snapdragon Summit 22 tới 24/9, mốc chính thức duy nhất; (2) kiến trúc chip
  2nm, Oryon 2+3+3, Adreno 845, bản Gen 6 Pro; (3) ba máy Xiaomi 18, bản Pro Max hai camera
  200MP; (4) áp lực giá từ chi phí chip nhớ; (5) người Việt nên mua Xiaomi 17 giá 26,99 triệu
  hay chờ.
- **Neo VN:** giá Xiaomi 17 chính hãng 26,99 triệu, thực tế bản Pro và Pro Max không phân phối
  chính hãng tại VN.

### Chủ đề 2 (ĐÃ VIẾT, đăng 19/8 17:00)

- **Tiêu đề:** LCP 2026 Split 3 Playoffs: lịch và cửa đi tiếp của GAM (54 ký tự)
- **Slug:** `lcp-2026-split-3-playoffs-lich-gam-tsw-mvke-tranh-ve-worlds`
- **Từ khóa chính:** LCP Split 3 playoffs, GAM Esports
- **Dàn ý:** (1) 4 đội vào playoffs, 3 đội Việt Nam; (2) TSW dẫn đầu 3-0, GAM vào bằng cửa hẹp
  sau trận thắng DCG 3-1; (3) thể thức nhánh thắng thua Bo5 nghĩa là gì với GAM; (4) 3 suất
  Worlds chia theo playoffs cộng Championship Points; (5) tuần chung kết Đài Bắc 29 và 30/8,
  ba thứ đáng theo dõi.
- **Neo VN:** ba đại diện Việt Nam, tổng giải thưởng 80.000 USD tức hơn 2 tỷ đồng.

### Chủ đề 3 (ĐÃ VIẾT, đăng 20/8 08:30)

- **Tiêu đề:** Redmi K100 Pro Max giá bao nhiêu, khi nào về Việt Nam (53 ký tự)
- **Slug:** `redmi-k100-pro-max-gia-poco-f9-ve-viet-nam-2026`
- **Từ khóa chính:** Redmi K100 Pro Max giá, POCO F9
- **Dàn ý:** (1) ra mắt 11/8, màn 185Hz, nói thẳng 185Hz ít giá trị thực tế; (2) pin 9.070mAh
  silicon carbon, cảnh báo nhiệt khi sạc 100W ở khí hậu VN; (3) camera 200MP và chip 8 Elite
  Gen 5 sắp bị Gen 6 thay; (4) đường về VN qua POCO F9 Pro và F9 Ultra; (5) mua POCO F8 Pro
  16,99 triệu bây giờ hay chờ.
- **Neo VN:** POCO F8 Pro 16,99 triệu, F8 Pro 512GB 19,99 triệu, F8 Ultra quanh 20 triệu.

### Chủ đề 4 (ĐÃ VIẾT, đăng 20/8 17:00)

- **Tiêu đề:** vivo X500 Pro lộ cấu hình: chip 2nm, camera Zeiss (49 ký tự)
- **Slug:** `vivo-x500-pro-dimensity-9600-camera-zeiss-2026`
- **Từ khóa chính:** vivo X500 Pro, Dimensity 9600
- **Dàn ý:** (1) đã qua chứng nhận mạng, ra mắt cuối tháng 9; (2) Dimensity 9600 2nm và cảnh
  báo tiến trình nhỏ không tự động cho pin trâu; (3) bản Pro đi ngược xu hướng với màn 6,37
  inch và cái giá phải trả về pin, tản nhiệt; (4) **các nguồn mâu thuẫn về ống tele**, cách
  đọc tin đồn trái chiều; (5) giá tham chiếu tại VN và lời khuyên so giá.
- **Neo VN:** vivo X300 Pro chính hãng 27 tới 35 triệu tùy hệ thống, chênh tới 8 triệu cho
  cùng cấu hình.

### Chủ đề 5 (CHƯA VIẾT, hẹn tuần W35 sau ngày 26/8)

- **Tiêu đề đề xuất:** Apple chốt lịch sự kiện tháng 9: iPhone 18 Pro ra mắt ngày nào
- **Slug đề xuất:** `apple-su-kien-thang-9-2026-ngay-ra-mat-iphone-18-pro`
- **Vì sao chưa viết:** (a) tuần W34 đã chạm trần 8 bài; (b) mốc thư mời dự kiến 26/8, viết
  trước là đoán, viết sau là có dữ kiện chính thức; (c) site vừa đăng bài iPhone 18 hôm 17/8
  nên cần giãn cách để không tự cạnh tranh.
- **Dàn ý gợi ý:** (1) ngày Apple gửi thư mời và ngày keynote chốt được; (2) vì sao Apple né
  ngày 11/9; (3) danh sách máy ra mắt: 18 Pro, 18 Pro Max và máy gập, bản 18 thường lùi sang
  3/2027; (4) lịch đặt trước và mở bán, chiếu sang mốc VN của các đời trước; (5) giá iPhone 17
  tại VN hiện tại và nên mua hay chờ.
- **Điều kiện chốt trước khi viết:** phải có thư mời chính thức từ Apple hoặc ít nhất 2 nguồn
  gốc quốc tế thống nhất ngày. Nếu tới 26/8 chưa có, dời tiếp, không viết bài đoán ngày.

---

## 6. Cơ cấu batch so với §0c

§0c mặc định mỗi batch gồm 2 bài tin công nghệ, 1 bài esports, 1 bài sản phẩm mới ra mắt tại
Việt Nam. Batch này lệch một chỗ, ghi rõ để phiên sau nắm:

| Vị trí §0c | Bài thực tế | Ghi chú |
|---|---|---|
| Tin công nghệ 1 | Xiaomi 18 và Snapdragon 8 Elite Gen 6 | Đúng |
| Tin công nghệ 2 | vivo X500 Pro và Dimensity 9600 | Đúng |
| Esports | LCP Split 3 Playoffs | Đúng |
| Sản phẩm mới có giá VN | Redmi K100 Pro Max và POCO F9 | **Lệch một phần** |

**Lý do lệch:** sản phẩm duy nhất thật sự ra mắt tại Việt Nam trong tuần là robot hút bụi và
máy lọc không khí Xiaomi (15/8), thuộc nhóm **§0a cấm**. Không có sản phẩm điện thoại, laptop
hay xe nào công bố giá VN mới trong tuần mà site chưa có bài. Vì vậy vị trí này được thay bằng
bài sản phẩm có **giá VN tham chiếu thật** (POCO F8 Pro 16,99 triệu) thay vì giá VN mới công bố.
Bài vẫn đạt `check-vn-signal`.

---

## 7. Việc còn lại (cần máy có mạng đầy đủ)

1. `node scripts/check-media.mjs` → phải ra 0 ảnh lỗi, 0 video lỗi. Phần dồn cụm đã kiểm sạch
   offline trong phiên này.
2. Build theo §5: `node scripts/build-legacy-index.mjs && node scripts/build-blog.mjs && npx astro build`.
3. Đẩy index theo §6 cho 4 URL mới:
   - `https://techvision.click/articles/xiaomi-18-snapdragon-8-elite-gen-6-ra-mat-thang-9-2026.html`
   - `https://techvision.click/articles/lcp-2026-split-3-playoffs-lich-gam-tsw-mvke-tranh-ve-worlds.html`
   - `https://techvision.click/articles/redmi-k100-pro-max-gia-poco-f9-ve-viet-nam-2026.html`
   - `https://techvision.click/articles/vivo-x500-pro-dimensity-9600-camera-zeiss-2026.html`
4. Sau 20/8: cập nhật bài LCP theo kết quả từng ngày playoffs, giữ nguyên slug, bump `dateModified`.
5. Sau 26/8: chốt chủ đề 5 nếu Apple phát thư mời.

---

## 8. Nguồn đã dùng trong phiên này

**Lớp radar (chỉ để bắt chủ đề, không lấy làm dữ kiện):** cellphones.com.vn/sforum, genk.vn,
fptshop.com.vn, thethao247.vn, thanhnien.vn, vnexpress.net, vietnamnet.vn, nghenhinvietnam.vn.

**Lớp dữ kiện gốc:** gsmarena.com, gizmochina.com, notebookcheck.net, androidauthority.com,
91mobiles.com, the-gadgeteer.com, igeekphone.com, nokiapoweruser.com, tech.sportskeeda.com,
liquipedia.net, lolesports.com, sheepesports.com, pandaily.com.

**Lớp giá Việt Nam (tham chiếu bán lẻ):** viettablet.com, duchuymobile.com, didongviet.vn,
cellphones.com.vn, thegioididong.com.
