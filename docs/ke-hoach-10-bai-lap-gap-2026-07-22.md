# Kế hoạch 10 bài lấp gap tuyến nội dung (chốt 22/7/2026)

> Trạng thái: **CHỜ** - anh Long báo sau khi Samsung Unpacked (tối 22/7) ra mắt xong mới viết.
> Phiên nào (local hay cloud) nhận lệnh "viết đi" thì đọc file này, viết theo `AGENTS.md` + spec HTML TechVision, xong bài nào đánh dấu bài đó rồi commit.

## Bối cảnh phân tích

Quét toàn bộ ~702 bài trên sitemap live (KHÔNG dùng folder legacy `public/articles/` - chỉ có 61 bài cũ):

- Top/listicle: 114 bài - đã dày, không thiếu
- Hướng dẫn (cách-/huong-dan): ~99 bài - đã dày
- Explainer "-la-gi": 16 bài - tạm ổn
- **So sánh (so-sanh/-vs-): 4 bài - GAP**
- **Review thực tế (review/danh-gia/tren-tay): 4 bài - GAP**
- **Giá VN (gia-viet-nam): 5 bài - GAP**

Bằng chứng GSC 90 ngày: query "giá rtx 5090 việt nam" về đều ở vị trí ~17 (chưa có bài tháng mới); bài listicle top điện thoại là top performer ngoài trang chủ.

## Danh sách 10 bài (thứ tự viết: 9 → 1 → 5 → 8 → 2 → 3 → 4 → 6 → 7 → 10)

| # | Tuyến | Bài | Ghi chú |
|---|-------|-----|---------|
| 9 | Giá VN | Giá Galaxy Z Fold 8 / Flip 8 VN + đặt trước ở đâu lợi nhất | ƯU TIÊN 1 - bám Unpacked 22/7, cập nhật giá chính thức vừa công bố |
| 1 | So sánh | Galaxy Z Fold 8 vs iPhone Fold: chọn foldable nào 2026 | Link bài tin Fold 8 + iPhone Fold sẵn có |
| 5 | Review | Trên tay Samsung Galaxy Glasses: kính AI Gemini đầu tiên | Đã có 3 bài tin Glasses, chưa có góc trải nghiệm |
| 8 | Giá VN | Giá RTX 5090 & 5090 Ti VN tháng 8/2026 | Refresh series - đã có bài `gia-rtx-5090-viet-nam-thang-6-2026`, link chuỗi |
| 2 | So sánh | MacBook Neo $599 vs Dell XPS 13 $699 | Cả 2 máy đã có bài gốc |
| 3 | So sánh | Gemini Spark vs ChatGPT Agent: trợ lý AI nào làm việc thay bạn | |
| 4 | So sánh | Xiaomi 17T vs iQOO 15T: tầm 13-19 triệu chọn máy nào | |
| 6 | Review | Đánh giá Xiaomi Band 10 Pro sau 1 tháng đeo | |
| 7 | Review | Dùng iOS 27 beta 1 tháng: có nên cài ngay không | Link bài `cach-cai-ios-27-beta-tren-iphone-huong-dan-tung-buoc` |
| 10 | Explainer | Vibe coding là gì? Vì sao Google, Microsoft đều nhắc đến | Đã nhắc trong 2 bài I/O + MacBook Neo, chưa có explainer |

## Tiến độ

- [ ] Bài 9
- [ ] Bài 1
- [ ] Bài 5
- [ ] Bài 8
- [ ] Bài 2
- [ ] Bài 3
- [ ] Bài 4
- [ ] Bài 6
- [ ] Bài 7
- [ ] Bài 10

## Lưu ý khi viết

- Bài so sánh/review: ≥5 media, bảng thông số model thật, tuân rule "bài top/so sánh phải có tên sản phẩm cụ thể".
- Tuyến giá VN: slug theo tháng (bài mới mỗi tháng, link chuỗi các tháng với nhau, không sửa đè URL cũ).
- Phiên cloud KHÔNG chạy được `scripts/gsc/` (token local, gitignored) và OpenSEO localhost - không cần cho việc viết.
- Đã kiểm tra chống trùng slug với 702 bài hiện có (22/7/2026).
