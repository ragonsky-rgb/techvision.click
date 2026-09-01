# techvision.click: repo web tin tức công nghệ

> ⚠️ **PHÂN BIỆT WEB:** Đây là repo **techvision.click** (web tin công nghệ tiếng Việt, Astro SSG, deploy Vercel).
> Đây **KHÔNG** phải `chamaiagency.website` / `ai-agent-business-kit`, đó là một web **KHÁC**, một repo **RIÊNG** (thường đặt ở `/Volumes/Edit video  1/AI xây dựng công ty riêng 2`). **Đừng lẫn hai web với nhau.**

## Nguồn chân lý: đọc `AGENTS.md` TRƯỚC khi viết/sửa bài

`AGENTS.md` (ở gốc repo) chứa toàn bộ chuẩn vận hành techvision.click:
- **§0 Quy tắc vàng**: no em-dash, ≥5 media/bài, ≥1.100 từ, giọng trung lập, số liệu có nguồn thật, **mô hình nguồn 3 lớp** (báo VN radar, nguồn quốc tế gốc, góc riêng).
- **§0b Checklist chống lỗi trước commit** (bắt buộc).
- **§4 Quy tắc media**: verify thumbnail bằng kích thước, **không đặt 2 ảnh/video sát nhau** (≥1 đoạn ≥35 từ ở giữa).
- **§5, §6**: build, deploy, đẩy index GSC.

## Nhánh làm việc: PUSH THẲNG `main`

**Anh Long đã cho phép rõ ràng ngày 01/09/2026: mọi phiên push thẳng `main`, KHÔNG hỏi lại, KHÔNG tạo nhánh phụ hay Pull Request để viết bài.**

Lý do: chỉ `main` mới deploy production. Bài nằm trên nhánh phụ thì dù build preview có xanh vẫn KHÔNG lên site, phải chờ người merge tay. Ngày 01/09 bài sale 2/9 suýt lỡ mùa lễ vì kẹt trên nhánh phụ.

```bash
git pull --rebase origin main   # trước khi làm
git push origin main            # sau mỗi bài
```

Nếu môi trường ép làm trên nhánh khác (một số phiên cloud có ràng buộc riêng), phải merge về `main` NGAY khi xong, đừng để tồn.

## Nhịp ra bài: đếm bài MỚI, không đếm bài refresh

Trần `AGENTS.md §0a` (2 bài/ngày, 8 bài/tuần) áp cho **bài mới**. Cập nhật một bài đã có (giữ nguyên slug, bump `dateModified`) KHÔNG tính vào trần, và bài hot đang vào mùa thì cứ cập nhật nhiều lần trong ngày nếu có tin mới. Đây là chốt của anh Long ngày 01/09/2026.

## Trước MỖI commit (bắt buộc)

```bash
node scripts/check-media.mjs   # phải ra: 0 ảnh lỗi · 0 video lỗi · 0 bài media dồn cụm
```

⚠️ **Phiên cloud (Claude Code web) KHÔNG chạy được phần kiểm mạng của lệnh này.** Proxy chặn `i.ytimg.com`, nên script báo mọi thumbnail là lỗi (đo 01/09/2026: 2.474 "ảnh lỗi" trên tổng 2.363 URL, tức trượt gần 100%). Lỗi `[403]` là proxy chặn, bỏ qua; chỉ `[404]` mới là ảnh chết thật. **Đừng bao giờ thay hàng loạt thumbnail dựa trên kết quả 403.** Chi tiết ở `AGENTS.md §0b`.

Rồi build sạch (xem AGENTS.md §5). **Chỉ commit file nguồn, KHÔNG commit `dist/`.** Máy mới: set `git config user.email` trước khi commit.

Nếu sửa bài mà build vẫn ra nội dung cũ: xóa cache content layer của Astro rồi build lại.
```bash
rm -rf .astro dist && node scripts/build-legacy-index.mjs && node scripts/build-blog.mjs && npx astro build
```

Repo GitHub: `github.com/ragonsky-rgb/techvision.click` (branch `main`).
