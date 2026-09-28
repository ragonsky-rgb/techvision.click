# Radar đêm (cloud, 02:30 hằng ngày)

Bạn là phiên tự động chạy trên cloud. Mạng của môi trường này CHẶN nhà bán, YouTube và
nhiều trang báo, nên phiên này KHÔNG viết bài, KHÔNG hẹn lịch, KHÔNG sửa bài.
Việc duy nhất: ghi một file radar để phiên viết bài buổi sáng (chạy trên máy) dùng.

## Các bước

1. `git pull --rebase origin main`. Đọc `AGENTS.md` (§0, §0a, §0a-bis) và `docs/tu-dong/README.md`.
2. Đo sức chứa hàng đợi (in ra để ghi vào radar):
   ```bash
   node scripts/release-scheduled.mjs --dry
   grep -l "scheduled: true" src/content/articles/*.md | xargs grep -h "^datePublished" | cut -c17-26 | sort | uniq -c
   ```
   Tính số chỗ trống trong 7 ngày tới (tối đa 2 bài/ngày, 8 bài/tuần ISO).
   Nếu 7 ngày tới đã kín thì vẫn ghi radar nhưng ghi rõ "hàng đợi kín, sáng nay không viết".
3. Dò chủ đề bằng WebSearch (chạy được trên cloud) theo mô hình nguồn 3 lớp AGENTS.md §0:
   - Lớp radar: báo VN (VnExpress, Genk, Tinhte, Znews, CafeF) để biết người Việt đang quan tâm gì.
   - Lớp dữ kiện gốc: tên nguồn quốc tế gốc và URL cần đọc (The Verge, 9to5Mac, MacRumors, Reuters, trang hãng).
   - Đọc `docs/lich-bai-sale-2026.md`: đợt sale nào tới hạn viết/cập nhật trong 10 ngày tới thì đưa lên đầu.
4. Lọc trùng: với mỗi ứng viên, `grep -ril` từ khóa chính trong `src/content/articles/` và
   `public/articles/`. Đã có bài cùng góc thì bỏ, hoặc đề xuất REFRESH bài cũ (ghi slug) thay vì bài mới.
   Loại ngay: đồ gia dụng, series khuôn "Cách chọn X / X hay Y / Top X tháng N / X là gì" (§0a),
   bài chỉ dịch tin nước ngoài không có góc Việt Nam.
5. Ghi `docs/radar/YYYY-MM-DD.md` (ngày VN) theo khung dưới, tối đa 5 chủ đề, xếp theo ưu tiên.
6. Commit CHỈ file radar đó lên `main`, push. Không đụng file nào khác.

## Khung file radar

```markdown
# Radar DD/MM/YYYY

Hàng đợi: 7 ngày tới còn N chỗ (ngày trống: ...). Tuần hiện tại X/8, tuần sau Y/8.

## 1. <Tên chủ đề> [MOI | REFRESH <slug>] [tin nong | thuong xanh | mua vu]
- Vì sao người Việt cần: ... (dẫn bài báo VN làm radar, có URL)
- Nguồn gốc cần đọc: <URL 1>, <URL 2>
- Dữ liệu Việt Nam cần lấy khi viết: <giá model nào ở nhà bán nào / ngày mở bán VN / gói cước ...>
- Từ khóa tìm video: "<...>", "<...>"
- Hạn đăng hợp lý: <trước ngày ... vì ...>; tin nóng thì ghi "đăng trong 48h hoặc bỏ"
- Trạng thái: CHUA VIET
```

Phiên sáng sẽ sửa "Trạng thái" thành `DA VIET <slug>` hoặc `BO: <lý do>`.
Không tìm được chủ đề đạt chuẩn thì vẫn ghi file với dòng "Không có chủ đề đạt chuẩn" và lý do.
