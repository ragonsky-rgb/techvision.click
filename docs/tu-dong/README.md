# Phiên tự động techvision (dựng lại 28/09/2026)

Lời lệnh của mọi phiên tự động nằm ở thư mục này. Phiên nào cũng chỉ được giao
một câu "đọc file X trong docs/tu-dong và làm đúng". Muốn đổi cách làm thì sửa file,
không cần tạo lại phiên.

| File | Chạy ở đâu | Lịch | Việc |
|---|---|---|---|
| `radar-dem.md` | Cloud (claude.ai/code) | 02:30 hằng ngày | Dò chủ đề, ghi `docs/radar/YYYY-MM-DD.md`. KHÔNG viết bài, KHÔNG hẹn lịch. |
| `viet-bai-sang.md` | App Mac, tác vụ hẹn giờ | 08:30 hằng ngày | Lấy 0-2 chủ đề từ radar, đọc giá thật, kiểm media, qua gate, hẹn lịch trong 7 ngày tới. |
| `ra-tuan.md` | App Mac, tác vụ hẹn giờ | 20:00 Chủ nhật | Đọc lại giá + kiểm media các bài sắp lên trong 8 ngày tới, sửa trước khi bot thả. |
| `ra-gia-hang-doi-2026-09.md` | App Mac, chạy một lần | 28/09/2026 | Rà giá toàn bộ bài đang hẹn lịch do phiên cloud cũ viết. |

## Vì sao chia như vậy

Đo ngày 28/09/2026 trên phiên cloud cũ (viết ~5 bài/đêm):

- Trần 8 bài/tuần (AGENTS.md §0a) mà viết ~35 bài/tuần, nên hàng đợi dồn:
  48 bài viết 15-27/09 trễ trung bình 23 ngày, bài viết 27/09 hẹn tới 11/11 (45 ngày).
  Bài tin tới lúc lên đã nguội.
- Proxy môi trường cloud chặn nhà bán và YouTube, nên phiên cloud không đọc được
  giá VN thật và không verify được media. Ví dụ bài Galaxy Tab S11 Ultra ghi
  "từ 26.299.000đ" trong khi TGDĐ/CellphoneS niêm yết 36,49 triệu, bán 30,99 triệu;
  bài thay pin iPhone dính ảnh 404.

Nên: việc cần mạng ngoài (đọc giá, chọn media) chạy trên máy; cloud chỉ làm radar.
Nếu sau này mở mạng môi trường cloud sang Full, có thể chuyển `viet-bai-sang.md` lên cloud.

## Luật chung cho mọi phiên

- Chỉ làm trong repo techvision.click (`~/techvision-click` trên máy, hoặc bản clone trên cloud).
  KHÔNG đụng repo chamaiagency.
- `git pull --rebase origin main` trước khi làm, commit thẳng `main`, không tạo nhánh/PR,
  không commit dở dang (WIP). Commit message tiếng Việt, không ghi tên model, không thêm
  dòng Co-Authored-By.
- Không có việc thật thì dừng, không bịa việc cho có.
- Công cụ dùng chung: `scripts/gia/doc-gia.py` (đọc giá), `scripts/yt-tim.py` (tìm video),
  `scripts/yt-verify.sh` (verify video).
