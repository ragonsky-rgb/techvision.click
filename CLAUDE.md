# techvision.click — repo web tin tức công nghệ

> ⚠️ **PHÂN BIỆT WEB:** Đây là repo **techvision.click** (web tin công nghệ tiếng Việt, Astro SSG, deploy Vercel).
> Đây **KHÔNG** phải `chamaiagency.website` / `ai-agent-business-kit` — đó là một web **KHÁC**, một repo **RIÊNG** (thường đặt ở `/Volumes/Edit video  1/AI xây dựng công ty riêng 2`). **Đừng lẫn hai web với nhau.**

## Nguồn chân lý: đọc `AGENTS.md` TRƯỚC khi viết/sửa bài

`AGENTS.md` (ở gốc repo) chứa toàn bộ chuẩn vận hành techvision.click:
- **§0 Quy tắc vàng** — no em-dash, ≥5 media/bài, ≥1.100 từ, giọng trung lập, số liệu có nguồn thật, **mô hình nguồn 3 lớp** (báo VN radar → nguồn quốc tế gốc → góc riêng).
- **§0b Checklist chống lỗi trước commit** (bắt buộc).
- **§4 Quy tắc media** — verify thumbnail bằng kích thước, **không đặt 2 ảnh/video sát nhau** (≥1 đoạn ≥35 từ ở giữa).
- **§5–6** — build, deploy, đẩy index GSC.

## Trước MỖI commit (bắt buộc)

```bash
node scripts/check-media.mjs   # phải ra: 0 ảnh lỗi · 0 video lỗi · 0 bài media dồn cụm
```
Rồi build sạch (xem AGENTS.md §5). **Chỉ commit file nguồn, KHÔNG commit `dist/`.** Máy mới: set `git config user.email` trước khi commit.

Repo GitHub: `github.com/ragonsky-rgb/techvision.click` (branch `main`).
