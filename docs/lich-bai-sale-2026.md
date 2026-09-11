# Lịch bài sale techvision, 09/2026 tới Tết 2027

Lập ngày 12/9/2026 từ số GSC + GA4 thật. Phiên AI nào làm bài sale phải đọc file này trước.

## Vì sao bài sale là ưu tiên số 1

- GSC 28 ngày (14/8 - 10/9/2026): cả site 79 nhấp / 5.020 hiển thị. Riêng bài `san-sale-cong-nghe-le-2-9-2026-meo-deal-dang-san` **53 nhấp / 2.696 hiển thị = 67% nhấp toàn site**.
- GA4 cùng kỳ, lọc Việt Nam: Organic 97 phiên, trong đó 55 phiên đáp vào đúng bài 2/9. Direct 42 (phần lớn là trang hồ sơ `/cv.html`, `/`, `/portfolio`), Social 10, Referral 4.
- Truy vấn thắng có dạng `<ngày> <sàn> có sale không` và `<chuỗi> <ngày>`: "2 9 shopee có sale không" (85 hiển thị), "cellphones 2/9", "cellphones khuyến mãi 2 9". Tức người tìm cả tên **chuỗi bán lẻ** chứ không chỉ sàn, đó là lợi thế của một web công nghệ.
- Cú nhảy 25/8 (1.083 hiển thị) **không phải** do sale lương về mà do tin Mac mini M6 (390 hiển thị riêng truy vấn "mac mini m6"). Tới 12/9 site chưa có truy vấn nào chứa "lương về" hay "25", vì chưa có trang nhắm vào.

## Công thức (xem thêm memory feedback_seasonal_page_playbook)

1. Đăng trước sự kiện **3-4 tuần**: độ trễ index ~11 ngày, đỉnh hiển thị rơi vào ngày ~21 sau đăng.
2. Trục bài là **bảng giá tham chiếu fetch trong ngày viết**, ghi rõ ngày đọc giá. Không bịa lịch khuyến mãi; sàn chưa công bố thì nói thẳng.
3. Mọi số phải mở trang gốc. Kết quả tìm kiếm tóm tắt có thể sai năm (12/9 bắt được một bản tóm tắt ghi đợt TikTok Shop là 2026, mở trang ra thì là bài 23/8/2024).
4. Trần 2 bài/ngày vẫn áp dụng; xem hàng đợi bằng `node scripts/release-scheduled.mjs --dry`.

## Lịch

| Đợt | Ngày | Hạn đăng | Bài | Trạng thái 12/9 |
|---|---|---|---|---|
| 10/10 | T7 10/10/2026 | 12-16/9 | `sale-10-10-2026-lich-du-kien-gia-tham-chieu-truoc-ngay-sale` | Thả 12/9 09:00 (đổi từ 17/9 để đủ 28 ngày) |
| Lương về 25/9 | T6 25/9 | trễ, chỉ để lấy chỗ index | `sale-luong-ve-ngay-25-hang-thang-shopee-lazada-gia-do-cong-nghe` | Thả 13/9 09:00 |
| Lương về 25/10 | CN 25/10 | cập nhật ~5-10/10 | cùng URL lương về | Chờ |
| 11/11 | T4 11/11 | 14-18/10 | chưa viết | Đợt lớn nhất năm, viết kỹ nhất |
| Lương về 25/11 | T4 25/11 | cập nhật ~5-10/11 | cùng URL lương về | Chờ |
| Black Friday | T6 27/11 | 30/10-3/11 | chưa viết | Autocomplete có "black friday 2026 là ngày nào", "black friday gearvn" |
| 12/12 | T7 12/12 | 14-18/11 | chưa viết | |
| Lương về 25/12 | T6 25/12 | cập nhật ~5-10/12 | cùng URL lương về | |
| Tết Đinh Mùi | mùng 1 = T7 6/2/2027 | 5-10/1/2027 | chưa viết | |

## Riêng bài sale lương về: MỘT URL, cập nhật mỗi tháng

Slug cố ý không gắn tháng. Mỗi tháng trước ngày 25 khoảng 2 tuần:
- đổi tháng trong `title`, `description`, `tldr`, FAQ "Ngày 25/x có sale không";
- đọc lại toàn bộ bảng giá CellphoneS, giữ cột tháng trước nếu có thay đổi đáng nói;
- kiểm lại lịch từng sàn (Shopee Blog `shopee.vn/blog/khi-nao-shopee-sale/`, Lazada qua thông báo chiến dịch);
- cập nhật `dateModified` đúng giờ thật.

Lý do không viết bài mới mỗi tháng: site từng dính scaled content (07/08/2026). 12 bài gần giống nhau cho 12 tháng là đúng mẫu bị phạt; một URL sống lâu thì tích lũy tín hiệu qua từng đợt.

Cạnh tranh: nhóm truy vấn "lịch sale shopee" do chính Shopee Blog và các web mã giảm giá chiếm. Đừng đánh vào đó; góc của techvision là **giá đồ công nghệ đối chiếu tại chuỗi bán lẻ**.

## Bối cảnh giá tháng 9/2026 cần nhớ khi viết các đợt sau

Từ 10/9/2026 Apple Việt Nam **tăng giá** đời cũ (không giảm như thông lệ): iPhone 17 256GB 24.999.000đ → 28.999.000đ, 512GB 35.499.000đ, iPhone Air từ 34.999.000đ, iPhone 17e từ 21.999.000đ, iPhone 16 24.999.000đ; iPhone 17 Pro rời cửa hàng Apple. iPhone 18 Pro từ 38.999.000đ, Pro Max từ 41.999.000đ. Nguồn: apple.com/vn đọc ngày 12/9, VnExpress cùng ngày 10/9.
