# Rà tuần (app Mac, 20:00 Chủ nhật)

Mục tiêu: bài hẹn lịch lên trong 8 ngày tới phải còn đúng giá và còn media sống TRƯỚC khi bot thả.
Repo `~/techvision-click`. Làm tự động, không hỏi lại.

1. `git pull --rebase origin main`. Liệt kê bài `scheduled: true` có `datePublished` trong 8 ngày tới
   (`node scripts/release-scheduled.mjs --dry`).
2. Với từng bài:
   - Mọi con số giá VN trong `title`, `description`, `tldr`, `stats`, bảng và thân bài: đọc lại bằng
     `python3 scripts/gia/doc-gia.py <url>` (hoặc trình duyệt với trang JS). Lệch thì sửa, đổi dòng
     "giá đọc ngày" sang hôm nay, bump `dateModified` (giữ slug, giữ `datePublished`).
     Tiêu đề hứa giá mà giá đã đổi thì sửa cả tiêu đề (≤65 ký tự).
   - Bài tin: sự kiện đã qua hoặc thông tin đã bị thay thế thì cập nhật đoạn mở/TLDR cho đúng hiện trạng.
     Không cứu được (tin đã chết hẳn) thì bỏ `scheduled: true`, giữ `noindex: true`, ghi lý do trong báo cáo.
3. `node scripts/check-media.mjs` phải ra 0/0/0 (sửa cả bài cũ nếu có): thay bằng video đã verify qua
   `scripts/yt-tim.py` + `scripts/yt-verify.sh`.
4. `node scripts/check-new-article.mjs <các slug đã sửa>`, build theo AGENTS.md §5.
5. Một commit lên `main` ("Rà tuần DD/MM: ..."), không tên model, không Co-Authored-By, push.
6. Báo cáo ngắn: bài nào sửa giá (cũ → mới), bài nào gỡ lịch, media nào thay.
