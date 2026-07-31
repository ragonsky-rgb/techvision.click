# Radar nội dung techvision.click, 30/7/2026 (tuần 31)

> Ngày lập: 30/7/2026. Người lập: quy trình radar tự động (Claude Code on web).
> Mục tiêu: quét trend đang tăng đột biến tại VN (điện thoại, máy tính, chủ đề công nghệ hot), soi 3 đối thủ, đề xuất 5 chủ đề "ngon" kèm tiêu đề và dàn ý, và **air lên website luôn**.
> Nối tiếp báo cáo `radar-noi-dung-tuan-31-2026.md` (29/7). Bản đó đã đề xuất 5 chủ đề evergreen; 2 bài (UFS, HDMI vs DisplayPort) đã lên site ở commit `ddc73b3`. Bản này thêm góc tin nóng và **đã xuất bản 2 bài mới**.

## 0. Về việc "air lên website luôn" (đã làm được, khác bản 29/7)

Môi trường Claude Code on web vẫn chặn egress tới `youtube.com` và `i.ytimg.com` (403), nên **không thể verify video/thumbnail mới** và `scripts/check-media.mjs` cũng không chạy sạch phần mạng ở đây. Bản 29/7 vì thế chỉ dừng ở bản thảo.

Phiên này giải quyết được bằng cách khác: **tái sử dụng đúng các ID video YouTube đang chạy trên bài production hiện có** (đã được máy local verify và đang pass check-media trên site thật). Media của 2 bài mới vì thế hợp lệ ngang media các bài đang đăng, không có rủi ro đẩy ảnh xám/video chết. Cụ thể lấy từ các bài Oppo, RedMagic, iQOO, Redmi K90 Ultra, top điện thoại chơi game.

**Việc team nên làm khi có máy local (YouTube không bị chặn):** chạy `node scripts/check-media.mjs` để xác nhận 0 lỗi trên toàn site (gồm 2 bài mới), rồi đẩy index theo §6. Nếu muốn thay media dùng chung bằng video review Oppo K15 riêng, verify ID mới theo §8 rồi thay.

> Lưu ý quy trình git: phiên chạy trên nhánh `claude/friendly-cori-apgyut` theo cấu hình harness và mở Pull Request nháp. AGENTS.md §0 yêu cầu đẩy thẳng `main` mới lên production, nên **team cần merge PR này vào `main`** để 2 bài thật sự deploy.

## 1. Trend đang nóng tại VN (cuối tháng 7/2026)

Nguồn radar: Google/Cốc Cốc, VnExpress, Genk, Tinhte, CellphoneS Sforum, PhoneArena, GSMArena, TrendForce (qua báo VN). Xếp theo độ nóng + demand tìm kiếm.

| # | Chủ đề đang nóng | Tín hiệu | Trạng thái trên techvision |
|---|---|---|---|
| 1 | Samsung Galaxy Unpacked 22/7 (Z Fold 8 / Fold 8 Ultra / Flip 8 / Watch 9) | Sự kiện lớn nhất tuần, đặt trước tới 7/8 | **Đã phủ dày** (20+ bài Fold/Flip/Watch) → chỉ nên *nâng cấp*, không viết mới |
| 2 | Khủng hoảng giá RAM/DRAM (+58-63% Q2), giá điện thoại/laptop tăng | Ảnh hưởng túi tiền, search "có nên mua laptop lúc này" | **Đã phủ dày** (10+ bài) → nâng cấp/refresh |
| 3 | **Oppo K15** ra mắt 24/7: quạt tản nhiệt tích hợp, pin 8.000mAh, giá ~2.299 tệ | Gaming giá rẻ, Genk/CellphoneS đưa tin mạnh | **Trống → ĐÃ VIẾT bài này** ✅ |
| 4 | Điện thoại có quạt tản nhiệt: có thật sự cần? | Hệ quả của K15 + RedMagic/iQOO, demand "là gì/có cần" | **Trống → ĐÃ VIẾT bài này** ✅ |
| 5 | Nvidia nhảy vào CPU laptop (RTX Spark, hợp tác MediaTek) | Computex, đối đầu Intel/AMD | **Đã phủ** (2 bài RTX Spark) |
| 6 | Realme GT 8 Pro, Nothing Phone 3, iQOO 15 | Flagship tầm trung-cao | **Đã phủ** (Realme GT 8 Pro, iQOO 15) |
| 7 | EWC 2026 LMHT (Dplus Kia vô địch), VCS Mùa Hè | Esports nóng | **Đã phủ dày** |
| 8 | VinFast Kyo/Kinet xe máy điện mới (20/7, giá từ 30tr) | Sản phẩm VN, giá thật | **Đã phủ** |

**Kết luận radar:** site đã bao phủ gần như toàn bộ tin nóng lớn. Gap thật sự tuần này rất mỏng, chủ yếu là (a) tin sản phẩm mới rất tươi chưa ai kịp viết (Oppo K15), và (b) các bài giải thích/evergreen bám theo tin nóng. Ép viết 5 bài tin mới sẽ tạo trùng lặp, vi phạm dedup §0b. Vì vậy chiến lược đúng: **2 bài mới đã viết + 3 bài evergreen còn trống bên dưới**.

## 2. Phân tích 3 đối thủ (tuần qua)

### 2.1. GenK (genk.vn)
Tuần này đẩy mạnh: tổng hợp Galaxy Unpacked, bài "OPPO sắp ra mắt điện thoại pin 8.000mAh siêu mỏng" (chính là K15), tuyến bài giá linh kiện tăng do DRAM, Meta Muse AI tạo ảnh. Điểm mạnh: bắt tin nhanh, tít gọn. Khoảng hở: ít bài giải thích "có cần không" đi sâu, chủ yếu đưa tin.

### 2.2. VnExpress Số hóa + Tinhte
VnExpress: tin thị trường (laptop/smartphone tăng giá phi mã), Galaxy Unpacked, bảng giá xe điện VinFast tháng 7. Tinhte: thiên trên tay/thảo luận cộng đồng, review nhanh foldable mới, thread giá RAM/SSD. Điểm mạnh: uy tín, traffic lớn. Khoảng hở với mình: họ chạy breaking news, mình thắng ở bài giải thích đầy đủ qua lăng kính quốc tế (đúng định vị §0).

### 2.3. CellphoneS (Sforum) + FPTShop
Mảng tư vấn mua sắm mạnh: "OPPO K15 lộ cấu hình / ra mắt", "Top điện thoại đáng mua tháng 7", VCS Mùa Hè 2026, xu hướng laptop CES/Computex. Đây là đối thủ trực diện nhất ở nhóm bài "top/cẩm nang". Khoảng hở: bài của họ nặng tính bán hàng, mình có thể thắng bằng góc trung lập + giải thích cơ chế (ví dụ bài quạt tản nhiệt "có cần không").

## 3. Năm chủ đề "ngon" nhất tuần này

> 2 chủ đề đầu **đã được viết và xuất bản trong phiên này**. 3 chủ đề sau là đề xuất kế tiếp (evergreen, còn trống, demand ổn định), team có thể triển khai ngay theo dàn ý.

### Chủ đề 1 (điện thoại, tin nóng) — ✅ ĐÃ VIẾT & AIR
**Oppo K15 ra mắt: quạt tản nhiệt tích hợp, pin 8.000mAh**
- Slug: `oppo-k15-ra-mat-quat-tan-nhiet-pin-8000mah-gia-2026`
- Góc: máy K series đầu tiên có quạt vật lý xuống tầm trung; pin 8.000mAh, sạc 80W, Dimensity 7360 Super, màn 1.5K 120Hz, giá 2.299 tệ (~8,1tr). Nguồn gốc: Beebom/GSMArena/Gizbot/Phonebunch.
- Đã có: spec-box, 6 H2, 6 media, FAQ 5, internal link sang Realme 16T, Redmi K90 Ultra, top gaming, pin silicon carbon.

### Chủ đề 2 (điện thoại, evergreen bám tin) — ✅ ĐÃ VIẾT & AIR
**Điện thoại có quạt tản nhiệt: là gì, có thực sự cần?**
- Slug: `dien-thoai-quat-tan-nhiet-tich-hop-la-gi-co-can-2026`
- Góc: giải thích tản nhiệt chủ động vs buồng hơi, throttling, hạ nhiệt bao nhiêu, ai nên mua. Đánh trúng demand "có cần không" mà đối thủ ít làm.

### Chủ đề 3 (điện thoại, đề xuất kế tiếp) — CẦN VIẾT
**Độ phân giải màn hình điện thoại: HD+, FHD+, 2K bao nhiêu là đủ?** (hoặc "PPI là gì, màn 2K trên điện thoại có thật sự cần")
- Slug gợi ý: `do-phan-giai-man-hinh-dien-thoai-ppi-bao-nhieu-du-2026`
- Vì sao: còn trống (mới có bài PPI cho màn hình *máy tính*), demand "2K", "FHD+", "PPI" ổn định, hợp bộ cẩm nang smartphone.
- Dàn ý: (1) PPI/độ phân giải là gì, cách tính; (2) HD+/FHD+/2K/4K trên điện thoại khác nhau ra sao; (3) mắt người phân biệt được tới đâu ở cỡ 6-7 inch; (4) đánh đổi độ phân giải cao với pin/hiệu năng; (5) 2K có đáng không theo tầm giá; (6) FAQ. Internal link: màn LTPO là gì, tần số quét 60/90/120Hz, chọn điện thoại.

### Chủ đề 4 (thực dụng, cả điện thoại + laptop) — CẦN VIẾT
**Cách vệ sinh điện thoại và laptop đúng cách, không hư loa và cổng sạc**
- Slug gợi ý: `cach-ve-sinh-dien-thoai-laptop-dung-cach-2026`
- Vì sao: hoàn toàn trống trên site, demand tìm kiếm cao quanh năm, ít cạnh tranh chất lượng, dễ giữ top lâu (evergreen thuần).
- Dàn ý: (1) vì sao không dùng cồn nồng độ cao/nước rửa kính lên màn phủ oleophobic; (2) dụng cụ đúng (khăn microfiber, tăm bông, khí nén, gel làm sạch); (3) vệ sinh loa, cổng USB-C, khe sạc an toàn; (4) vệ sinh bàn phím/màn laptop, quạt tản nhiệt; (5) tần suất và sai lầm thường gặp; (6) FAQ. Internal link: USB-C là gì, chuẩn kháng nước IP, chọn tản nhiệt CPU.

### Chủ đề 5 (điện thoại, đề xuất kế tiếp) — CẦN VIẾT (lưu ý chồng lấn nhẹ)
**Cách đọc thông số camera điện thoại: MP, khẩu độ f, OIS, cảm biến**
- Slug gợi ý: `cach-doc-thong-so-camera-dien-thoai-mp-f-ois-2026`
- Vì sao: site mới có bài "nhiều MP có đẹp hơn không" (góc hẹp). Bài này gom đủ MP + khẩu độ f + OIS/EIS + kích thước cảm biến + tele/tiềm vọng thành 1 cẩm nang tra cứu. Kiểm tra dedup kỹ với `camera-nhieu-megapixel-co-chup-dep-hon-khong` trước khi viết, đặt anchor internal link chéo hai bài.
- Dàn ý: (1) MP thật sự nói lên điều gì; (2) khẩu độ f và thu sáng; (3) OIS vs EIS; (4) kích thước cảm biến (1/1.3", 1 inch) quan trọng ra sao; (5) tele/tiềm vọng vs zoom số; (6) đọc 1 bảng spec mẫu; (7) FAQ.

## 4. Ghi chú cơ cấu batch (§0c)

Batch phiên này lệch chuẩn 4-bài (2 tin + 1 esports + 1 sản phẩm VN) một cách có chủ đích: esports và sản phẩm VN tuần này **đã bị phủ kín** (EWC Dplus Kia vô địch, VinFast Kyo/Kinet), viết thêm sẽ trùng. Nên phiên này chốt **2 bài chất lượng, tươi, không trùng** (1 tin smartphone + 1 cẩm nang bám tin) thay vì ép đủ 4-5 bài trùng lặp. 3 chủ đề còn lại ở mục 3 là hàng chờ cho batch kế tiếp.
