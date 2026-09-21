# Radar chủ đề tuần 21/09/2026: 5 chủ đề đã chọn và đã viết

Ngày lập: 21/09/2026. Phiên làm việc trên Claude Code web (cloud).

## 1. Công cụ dùng được và không dùng được trong phiên này

| Nguồn | Tình trạng | Ghi chú |
|---|---|---|
| `scripts/gsc/gsc.mjs radar` | Không chạy được | Thiếu gói `googleapis` và `token.json` (file này gitignore, chỉ có ở máy anh Long) |
| Ahrefs MCP (keyword, competitor) | Không chạy được | API trả `Insufficient plan` cho mọi endpoint, kể cả endpoint miễn phí |
| Google Trends, genk.vn, tinhte.vn, vnexpress.net | Bị chặn | Proxy egress chặn truy cập trực tiếp các tên miền này |
| Tìm kiếm web (WebSearch) | Dùng được | Nguồn chính để bắt trend và soi đối thủ trong phiên này |
| Dedup nội bộ 741 slug trong repo | Dùng được | Cơ sở để loại chủ đề đã có bài |

Kết luận: radar tuần này dựa trên tìm kiếm web cộng với đối chiếu kho bài sẵn có,
không có số liệu volume hay vị trí từ khóa. Khi anh Long chạy `node scripts/gsc/gsc.mjs radar 28`
ở máy local, nên đối chiếu lại danh sách này với nhóm striking distance thật.

## 2. Đối thủ đã lên bài gì tuần qua

**GenK** (mảng tin tổng hợp và tư vấn mua sắm)
- Máy đọc sách màn hình màu Onyx Boox Note Air6 C ra mắt 15/9, bài dạng bóc thông số và đặt câu hỏi có đáng tiền.
- Bài tư vấn mua máy tầm giá 20 triệu khi mùa máy đầu bảng cuối năm mở màn.
- Mega Sale tháng 9: sạc dự phòng, loa di động, chuột game giảm sâu, dạng bài gom deal.
- Nhóm tin nội địa: UAV Việt CT Pegas 230 bay thử thành công, Better Choice Awards 2026.

**CellphoneS / Sforum** (mảng tư vấn và giải thích)
- GPT-6 Astra: bài giải thích mô hình AI mới của OpenAI, đang kéo traffic tốt.
- Xu hướng điện thoại 2026: RAM 16GB biến mất, RAM 4GB trở lại.
- Giá bộ nhớ leo thang, smartphone 2026 có nguy cơ tăng giá tới 7%.
- Nhóm bài mùa vụ: laptop cho tân sinh viên, laptop vừa học vừa chơi game.

**FPT Shop Tin tức** (mảng giá và hướng dẫn mua)
- Vì sao giá RAM tăng năm 2026, nên mua ngay hay chờ giảm.
- Cách đặt trước GTA 6 trên PS5 và Xbox, quyền lợi từng phiên bản.
- Bảng giá ChatGPT và bảng giá Gemini mới nhất 2026.
- Danh sách smartphone được lên Android 17.

Nhận xét: cả ba đều đang khai thác rất mạnh trục **giá bộ nhớ tăng** và trục **AI trả phí**.
Trục giá bộ nhớ site mình đã có 4 bài nên không làm mới nữa, chỉ nên refresh.
Trục AI trả phí thì site đang hở: chưa có bài nào về GPT-6 Astra và chưa có bài so bảng giá gói AI theo tiền Việt.

## 3. Năm chủ đề chọn viết, kèm dàn ý

Tiêu chí chọn: (a) có nhu cầu tìm kiếm thật tại VN, (b) site chưa có bài trùng sau khi dedup 741 slug,
(c) neo được dữ liệu Việt Nam theo AGENTS.md §0a-bis, (d) còn giá trị trong cửa sổ đăng 12 tới 19/10.

### 3.1 GPT-6 Astra và bảng giá gói AI tại Việt Nam
- Slug: `gpt-6-astra-goi-ai-tra-phi-viet-nam-2026-chon-goi-nao`
- Tiêu đề: GPT-6 Astra vắng ở gói rẻ: chọn gói AI nào tại Việt Nam?
- Vì sao chọn: OpenAI phát hành Astra ngày 3/9 và chỉ mở từ gói Plus, đây là lần đầu mô hình mạnh nhất không xuống gói miễn phí. Sforum và FPT Shop đã có bài giải thích mô hình, nhưng chưa ai chốt bảng giá theo tiền Việt kèm lời khuyên chọn gói.
- Dàn ý: Astra mạnh ở đâu và mạnh với ai → bảng giá thật tại VN (Go 132k, Plus 499k, Google AI Plus 132k, AI Pro 489k, Ultra 2,25 triệu) → vì sao gói rẻ không còn mô hình mới → người Việt nên chọn gói nào theo nghề → ba điều kiểm tra trước khi trả tiền.

### 3.2 Chi phí thật để chơi GTA 6 trên console
- Slug: `mua-ps5-choi-gta-6-chi-phi-that-viet-nam-2026`
- Tiêu đề: Mua PS5 chơi GTA 6: tính đủ chi phí trước ngày 19/11
- Vì sao chọn: GTA 6 lên kệ 19/11, bản PC chưa có lịch nên nhu cầu mua console dồn vào tháng 10 và 11. Đối thủ mới dừng ở bài hướng dẫn đặt trước, chưa ai cộng đủ hóa đơn gồm máy, game, dịch vụ và ổ cứng theo giá VN.
- Dàn ý: tiền máy PS5 thường và PS5 Pro → tiền game và bẫy bản hộp không đĩa → PS5 hay Xbox cho người chơi Việt → các khoản phát sinh hay quên → mua bây giờ hay chờ khuyến mãi cuối năm.

### 3.3 Cách các chuỗi định giá máy cũ khi thu cũ đổi mới
- Slug: `thu-cu-doi-moi-dien-thoai-2026-cach-tinh-gia-thu-viet-nam`
- Tiêu đề: Thu cũ đổi mới điện thoại: giá thu được tính thế nào?
- Vì sao chọn: đang vào mùa lên đời máy mới, nhu cầu bán máy cũ tăng mạnh. Các chuỗi chỉ đăng thể lệ chương trình, chưa ai giải thích cấu trúc giá thu và các khoản bị trừ.
- Dàn ý: giá thu gồm ba phần → giá cơ bản và quy luật rớt giá theo mùa → mức trừ theo tình trạng, pin và màn hình → đọc kỹ điều kiện trợ giá → khi nào không nên bán → thứ tự việc cần làm trước khi mang máy đi.

### 3.4 Quy định sạc dự phòng trên máy bay và cách tính Wh
- Slug: `sac-du-phong-len-may-bay-2026-quy-dinh-wh-so-luong-viet-nam`
- Tiêu đề: Sạc dự phòng lên máy bay: quy định mới và cách tính Wh
- Vì sao chọn: quy định mới có hiệu lực từ 1/7/2026 nhưng phần lớn bài trên mạng chỉ chép lại thông cáo, không ai hướng dẫn quy đổi mAh sang Wh để người đọc tự kiểm tra viên sạc của mình. Site chưa có bài nào về chủ đề này.
- Dàn ý: quy định gồm những gì → quy đổi mAh sang Wh và các mốc dung lượng phổ biến → vì sao siết lại lúc này → điều gì xảy ra ở sân bay và trên máy bay → chuẩn bị thế nào cho gọn, kèm giá sạc chính hãng tại VN.

### 3.5 Checklist kiểm tra laptop cũ trước khi mua
- Slug: `kiem-tra-laptop-cu-truoc-khi-mua-checklist-2026`
- Tiêu đề: Kiểm tra laptop cũ trước khi mua: 10 bước không nên bỏ
- Vì sao chọn: giá máy mới tăng vì RAM và SSD nên người mua dồn sang máy cũ, trong khi chính hai linh kiện đó đang bị rút bớt trước khi bán. Site đã có bài kiểm tra iPhone cũ nhưng chưa có bản cho laptop.
- Dàn ý: bốn bước đầu về hồ sơ máy, ngoại hình, màn hình và pin → hai bước dễ bị tráo là RAM và ổ cứng → bốn bước cuối về chức năng, nhiệt, khóa tài khoản và giấy tờ → mức giá tham khảo theo dòng máy tại VN.

## 4. Lịch đăng và lý do

Trần nhịp đăng theo AGENTS.md §0a là 2 bài mỗi ngày và 8 bài mỗi tuần. Tại thời điểm lập kế hoạch,
các tuần W39, W40 và W41 đều đã kín 8 bài do hàng chờ hẹn lịch sẵn có, nên 5 bài mới được xếp vào
chỗ trống sớm nhất:

| Ngày đăng | Bài |
|---|---|
| 12/10/2026 15:00 | GPT-6 Astra và bảng giá gói AI |
| 13/10/2026 15:00 | Chi phí chơi GTA 6 trên console |
| 14/10/2026 15:00 | Thu cũ đổi mới điện thoại |
| 15/10/2026 15:00 | Sạc dự phòng lên máy bay |
| 19/10/2026 09:00 | Checklist laptop cũ |

Cả 5 bài đặt `noindex: true` và `scheduled: true`, GitHub Action `release-scheduled.yml`
sẽ tự gỡ cờ và đẩy lên site đúng giờ.

## 5. Việc cần làm ở máy local

1. Chạy lại `node scripts/check-media.mjs` để kiểm phần mạng, vì phiên cloud bị proxy chặn `i.ytimg.com` nên mọi kết quả mạng đều vô nghĩa.
2. Sau khi mỗi bài lên sóng, chạy `node scripts/indexnow.mjs <url-bai> https://techvision.click/blog.html`.
3. Nếu có token GSC, chạy `node scripts/gsc/gsc.mjs radar 28` và đối chiếu 5 chủ đề trên với nhóm striking distance thật.
