# Content radar tuần 38/2026 (chốt ngày 15/09/2026)

Mục đích: quét nhu cầu tìm kiếm đang tăng tại Việt Nam, soi bài của đối thủ trong
tuần qua, rồi chốt 5 chủ đề có khoảng trống thật trên techvision.click kèm tiêu đề
và dàn ý để triển khai ngay.

## 0. Điều kiện chạy radar lần này (đọc trước khi tin số liệu)

- **GSC radar không chạy được**: `scripts/gsc/gsc.mjs` thiếu package `googleapis`
  và không có token trong phiên cloud. Cần chạy lại ở máy local.
- **Ahrefs MCP trả `Insufficient plan`** cho toàn bộ endpoint keyword và GSC,
  nên không có số volume/KD chính thức cho lần chốt này.
- **Proxy egress chặn** `genk.vn`, `vnexpress.net`, `engadget.com`,
  `windowscentral.com`, `suggestqueries.google.com`. Radar dựa trên kết quả
  tìm kiếm web và trang đích còn truy cập được, không phải số đo trực tiếp.
- Hệ quả: phần "chủ đề tăng đột biến" dưới đây là **tín hiệu định tính**
  (tần suất xuất hiện trên báo lớn VN + mức độ mới của sự kiện), chưa có
  volume đi kèm. Khi có token GSC và gói Ahrefs, nên đối chiếu lại.

## 1. Chủ đề đang nóng tại Việt Nam, tuần 09/09 tới 15/09

| Chủ đề | Tín hiệu | Trạng thái trên site |
|---|---|---|
| iPhone 18 Pro/Pro Max cháy hàng, hơn 300.000 đơn giữ chỗ | VnExpress, Thanh Niên, Kenh14, TGDĐ công bố số | **Trống**, site chỉ có bài giá và cấu hình |
| iPhone Duo, đặt trước 16/10, bán 23/10 | Tinhte, Dân trí, GenK, CellphoneS | Mới có bài tin ra mắt, **thiếu bài quyết định mua** |
| Tắt sóng 2G toàn quốc từ 15/09 | VietnamNet, Thanh Niên, Dân trí, Chính phủ | **Đã phủ 3 bài**, không viết thêm |
| Khủng hoảng RAM, giá linh kiện | GenK, VietnamNet, Soha | **Đã phủ dày**, tránh viết bài giá tăng thứ 5 |
| Siri cho đổi mô hình sang Claude/ChatGPT | MacRumors, AppleInsider, Neowin (14/09) | **Trống** |
| OpenAI làm điện thoại AI và loa AI | GSMArena, MacRumors dẫn Ming-Chi Kuo | **Trống** (site chỉ có bài Sweetpea) |
| Snapdragon Summit 22 tới 24/09 | Nghe Nhìn VN, Gizmochina | Đã có bài **hẹn lịch 22/09** |
| Phân khúc máy giá rẻ co lại | Counterpoint, IDC, Dân trí, VietnamPlus | **Trống** |

## 2. Ba đối thủ lớn nhất đã lên gì trong tuần

**GenK** đánh mạnh vào tin có tính "cảnh báo toàn dân" và tin AI doanh nghiệp:
bài SIM điện thoại và mốc 15/09, Microsoft công bố bộ quy tắc kiểm soát AI,
flash sale công nghệ. Đây là nhóm bài bắt traffic ngắn hạn theo sự kiện, họ
luôn nhanh hơn ta nên không đua.

**Tinhte** mạnh ở tin quốc tế dịch nhanh kèm thảo luận: Apple mở Siri cho
Claude, OpenAI làm điện thoại lẫn loa AI, TSMC tăng giá tới 25%, trên tay
iPhone Duo. Nhóm này là nguồn radar tốt nhưng bài của họ dừng ở mức đưa tin,
**không có lớp bối cảnh Việt Nam**. Đây chính là khoảng trống để ta chen vào.

**CellphoneS/Sforum** phủ dày phần "sắp ra mắt" và bảng giá: Galaxy Tab S12,
Redmi Note 16, lịch ra mắt smartphone. Họ thắng ở truy vấn giá vì có dữ liệu
bán hàng thật, nên ta không đua bảng giá thuần mà đua ở **góc phân tích và
so sánh quyết định mua**.

Kết luận định vị: giữ đúng mô hình 3 lớp của `AGENTS.md §0`, lấy dữ kiện từ
nguồn quốc tế gốc, và thắng bằng lớp thứ ba là bối cảnh Việt Nam.

## 3. Năm chủ đề chốt cho tuần, kèm tiêu đề và dàn ý

### 3.1. iPhone 18 Pro Max cháy hàng tại Việt Nam, bao giờ có máy?
- Slug: `iphone-18-pro-max-chay-hang-viet-nam-bao-gio-co-may`
- Vì sao chọn: nhu cầu tìm đang ở đỉnh, site chưa có bài nào về nguồn cung.
- Neo Việt Nam: hơn 300.000 đơn giữ chỗ, 167.000/181.000 đơn tại TGDĐ và
  TopZone trong 30 phút, giá 4 bản từ 41,999 tới 80,999 triệu, khung giao
  29/09 tới 06/10.
- Dàn ý: con số thật của đêm mở cọc, cơ chế phân bổ hàng, cách đọc lịch giao,
  ba tình huống nên giữ đơn hay chờ, chọn dung lượng trước khi chọn màu.

### 3.2. iPhone Duo đặt trước 16/10: giá Việt Nam, có nên mua?
- Slug: `iphone-duo-dat-truoc-16-10-gia-viet-nam-co-nen-mua`
- Vì sao chọn: đối thủ mới dừng ở bài ra mắt, chưa ai làm bài quyết định mua.
- Neo Việt Nam: 64.999.000đ bản 256GB, 103.999.000đ bản 2TB, so trực tiếp với
  Galaxy Z Fold 8 và Galaxy Z TriFold đang bán trong nước.
- Dàn ý: 65 triệu mua được gì, so với máy gập đang bán tại VN, ai nên mua và
  ai nên bỏ qua, cách đặt trước cho hợp lý.

### 3.3. Siri sắp cho đổi bộ não sang Claude hoặc ChatGPT
- Slug: `siri-doi-bo-nao-sang-claude-chatgpt-ios-27-lo-ma-nguon`
- Vì sao chọn: tin ngày 14/09 từ MacRumors và AppleInsider, chưa site Việt nào
  làm lớp phân tích cho người dùng trong nước.
- Neo Việt Nam: chất lượng tiếng Việt của trợ lý ảo, Việt Nam không nằm trong
  nhóm bị hạn chế như EU và Trung Quốc, câu hỏi dữ liệu đi đâu.
- Dàn ý: hai cơ chế Model Delegation và Model Manager Services, vì sao Apple
  mở cửa cho đối thủ, đổi gì cho người dùng Việt, ba mốc cần theo dõi tiếp.

### 3.4. OpenAI làm điện thoại AI và loa thông minh cho 2027
- Slug: `openai-dien-thoai-ai-loa-thong-minh-2027-chip-dimensity-9600`
- Vì sao chọn: site mới có bài Sweetpea, chưa có bài về dải sản phẩm rộng hơn.
- Neo Việt Nam: phân tích vì sao mô hình "bỏ app dùng agent" vướng hệ sinh thái
  ứng dụng bắt buộc tại VN, từ định danh điện tử tới ngân hàng và ví điện tử.
- Dàn ý: chip đặt làm riêng nói lên điều gì, vì sao loa ra trước, rào cản thật
  với người dùng Việt, biến số giá linh kiện.

### 3.5. Điện thoại dưới 5 triệu sắp hết thời, còn máy nào?
- Slug: `dien-thoai-duoi-5-trieu-sap-het-thoi-con-may-nao-viet-nam`
- Vì sao chọn: phục vụ nhóm người mua đông nhất, site chưa có bài về việc
  phân khúc giá rẻ co lại.
- Neo Việt Nam: quý 1/2026 lượng máy giảm 9% nhưng giá trị tăng 8%, kèm giá
  thật của Galaxy A16 5G, OPPO A6c, vivo Y39, HONOR X7d, Redmi Note 17.
- Dàn ý: vì sao nhóm rẻ nhất chết trước, người Việt mua thưa hơn trả nhiều hơn,
  máy còn đáng mua dưới 5 triệu, bốn nguyên tắc khi chọn máy phổ thông.

## 4. Chủ đề cân nhắc nhưng loại, kèm lý do

- **Tắt sóng 2G và VoLTE**: site đã có 3 bài, viết thêm là trùng lặp.
- **Giá điện thoại và laptop tăng do khủng hoảng RAM**: đã có 4 bài, bài thứ 5
  sẽ mỏng về khác biệt.
- **Galaxy Tab S12 series**: chưa có giá và ngày bán chính thức tại Việt Nam,
  không qua được `AGENTS.md §0a-bis` cho bài sản phẩm.
- **Microsoft tăng giá dòng Surface**: số liệu có thật nhưng là tin từ tháng
  4/2026, không còn tính thời sự.
- **TSMC tăng giá gia công tới 25%**: tin từ tháng 7/2026, và chồng lấn với
  nhóm bài giá tăng đã có.
- **Snapdragon 8 Elite Gen 6**: sự kiện diễn ra 22 tới 24/09, chưa có dữ kiện
  thật ở thời điểm chốt radar. Bài hẹn lịch 22/09 đã phủ phần giới thiệu.

## 5. Lịch đăng và lý do giãn ngày

Trần `AGENTS.md §0a` là 2 bài/ngày và 8 bài/tuần. Tại thời điểm chốt radar,
hàng đợi đã kín:

- Tuần 38 (14 tới 20/09): 8 bài, đã đầy.
- Tuần 39 (21 tới 27/09): 8 bài, đã đầy.
- Tuần 40 (28/09 tới 04/10): 5 bài, còn 3 suất.
- Tuần 41 (05 tới 11/10): trống.

Vì vậy 5 bài được hẹn lịch như sau, tất cả đặt `noindex: true` và
`scheduled: true` để GitHub Action `release-scheduled.yml` tự phát hành:

| Ngày | Bài |
|---|---|
| 30/09 | iPhone 18 Pro Max cháy hàng tại Việt Nam |
| 01/10 | iPhone Duo đặt trước 16/10 |
| 02/10 | Siri đổi bộ não sang Claude hoặc ChatGPT |
| 05/10 | OpenAI làm điện thoại AI và loa thông minh |
| 06/10 | Điện thoại dưới 5 triệu sắp hết thời |

Cả 5 chủ đề đều chọn theo hướng còn giá trị ở thời điểm đăng chứ không phải
tin nóng 24 giờ, nên việc giãn ngày không làm mất tính thời sự.

## 6. Việc cần làm ở máy local (phiên cloud không chạy được)

1. `node scripts/check-media.mjs` để kiểm phần mạng, vì proxy chặn `i.ytimg.com`.
   Toàn bộ ID media trong 5 bài đều lấy lại từ bài đã đăng trên site nên đang sống,
   nhưng vẫn nên xác nhận lại.
2. `cd scripts/gsc && npm install && npm run auth` rồi `node scripts/gsc/gsc.mjs radar 28`
   để bổ sung tầng dữ liệu striking distance cho radar kỳ sau.
3. Sau khi từng bài lên, chạy `node scripts/indexnow.mjs <url-bai> https://techvision.click/blog.html`.
