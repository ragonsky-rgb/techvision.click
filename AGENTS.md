# AGENTS.md — Chuẩn viết bài & vận hành techvision.click

> Đọc file này TRƯỚC khi viết hoặc sửa bài, ở bất kỳ máy nào. Tuân thủ để chất lượng đồng nhất như khi làm ở máy local.

## 0. Quy tắc vàng (bắt buộc)
- **Không dùng em-dash (—)** ở bất kỳ đâu. Dùng dấu phẩy, "tức là", hoặc ngoặc đơn.
- **Tối thiểu 5 media/bài, đều phải distinct**: 1 hero + tối thiểu 3 `<figure>` + tối thiểu 1 video `<iframe>`. Hero KHÔNG được trùng ID với video embed.
- **Độ dài thân bài ≥ 1.100 từ.** Bài dưới ~900 từ là "cụt", phải mở rộng.
- **Giọng trung lập**, không clickbait, không nhồi tính từ. Tiếng Việt là chính, kèm thuật ngữ tiếng Anh khi cần.
- **Internal link rõ anchor text**: 2-3 link sang bài liên quan trong thân bài, anchor mô tả đúng đích (không dùng "tại đây").
- **Số liệu phải có nguồn thật** (báo/hãng), ghi rõ trong `sourceUrl` / `sourceDomains`. Tin đồn phải nói rõ là tin đồn.

## 1. Vị trí & định dạng bài
- Bài mới: `src/content/articles/<slug>.md` (Astro content collection, render bởi `src/layouts/ArticleLayout.astro`).
- Bài cũ dạng HTML: `public/articles/*.html` (legacy, chỉ sửa khi cần).
- `slug` = tên file, kebab-case, có năm/từ khóa chính.

## 2. Frontmatter bắt buộc (YAML)
```
slug, title, description, keywords, category, datePublished, dateModified,
deck, heroImage, heroAlt, heroCaption, tldr, tags, about, authorBio,
sourceUrl, sourceName, sourceDomains, stats (6 mục), faq (5 Q&A), related (3 bài), featured: true
```
- `description` ≤ **160 ký tự** (Google cắt ~155). Kiểm tra độ dài trước khi build.
- `about[]`: danh sách tên thực thể (string). Layout tự bọc thành JSON-LD **Thing** (KHÔNG để thành Product, tránh lỗi product-snippet trên GSC).
- `category`: dùng lại nhóm có sẵn (AI, Apple, Laptop, Smartphone, Internet, Công nghệ, Reviews, Viễn thông).
- `tldr`: 4-6 câu, bọc số liệu chính bằng `<strong>`.

## 3. Khối nội dung dùng trong thân bài
- `<div class="spec-box">` + `<div class="spec-box-title">📋 ...</div>` + `<table>`: bảng thông số nhanh (đặt ngay sau đoạn mở).
- `## H2` cho mỗi mục. Nên có 4-6 H2.
- `<figure><img ... loading="lazy" width="1280" height="720"><figcaption>... Nguồn: YouTube</figcaption></figure>`
- Video: `<div class="art-video-label">VIDEO · ...</div><div class="art-video-wrap"><iframe ...></iframe></div><p class="art-video-caption">... Nguồn: YouTube</p>`
- Callout: `<div class="art-callout">💡 <strong>...:</strong> ...</div>`

## 4. Quy tắc media (ảnh/video)
- Thumbnail YouTube: `https://i.ytimg.com/vi/<ID>/maxresdefault.jpg`. **Verify bằng KÍCH THƯỚC, không chỉ HTTP 200**: video không có maxres vẫn trả ảnh xám với status 200 (size chỉ ~1KB). Coi là hợp lệ khi `size_download > 8000` bytes (maxres thật ~50-250KB). Nếu xám, đổi sang `hqdefault.jpg` (luôn có, 480x360) hoặc chọn video khác có maxres thật.
- Video embed phải **cho phép nhúng** (check `"playableInEmbed":true` ở trang watch) và **còn sống** (oEmbed trả JSON).
- Tránh kênh nhạy cảm chính trị / spam / AI reupload (vd Việt Tân, "Amazon Shopping"...). Ưu tiên kênh công nghệ uy tín hoặc báo chính thống.
- Ảnh báo nước ngoài (9to5mac, macrumors...) lấy từ `og:image`, verify 200 trước khi dùng.
- Lệnh verify nhanh: xem mục Snippets cuối file.

## 5. Build & deploy (chạy đúng thứ tự)
```
node scripts/build-legacy-index.mjs && node scripts/build-blog.mjs && npx astro build
```
- `build-blog.mjs` tự sinh: hero blog.html, grid, "Nổi bật", "Đáng chú ý", và mục "Tin mới nhất" trên `index.html` (qua marker `<!-- HOME POSTS START/END -->`). KHÔNG sửa tay mục này, để build lo.
- **Bài mới nhất (datePublished mới nhất) tự thành hero "Tiêu điểm"** trên trang chủ blog. Muốn bài nào lên hero thì cho `datePublished` mới nhất. (Standing rule: bài mới luôn lên top.)
- Commit: chỉ add file nguồn + `public/blog.html` + `public/index.html` + `src/data/legacy-articles.json`. KHÔNG commit `dist/`.

## 5b. NHÌN trang render thật (đừng đoán layout từ code)

Trước khi kết luận một thay đổi giao diện ổn, hãy **xem pixel thật**, đừng dịch từ HTML/CSS (sẽ sót lỗi: nút quá nhỏ, chữ bị cắt, tràn ngang, header che nội dung).

```
npx astro build            # build trước để dist/ mới
node scripts/shot.mjs /blog.html            # chụp 390px (mobile) + 1280px (PC)
node scripts/shot.mjs /articles/<slug>.html 390    # chỉ 1 khổ
```
- Dùng **Chrome headless** có sẵn (không cần cài Playwright). Tự serve `dist/` ở root nên path tuyệt đối (`/articles/...`, `/_astro/...`) resolve đúng.
- Ảnh lưu ở `.shots/<page>-<width>.png` (đã gitignore) → **mở/Read ảnh đó để nhìn**.
- Luôn kiểm tra **cả 390px và 1280px**. Lỗi mobile hay gặp: menu category khó kéo (cần touch target ≥40px), `.art-meta`/hàng meta tràn ngang, header `position:fixed` che mất phần đầu nội dung (chỉnh padding-top của `main`).
- Đo nhanh tràn ngang trong DevTools/eval: `document.documentElement.scrollWidth - document.documentElement.clientWidth` phải = 0.

## 6. Sau khi deploy: đẩy index
```
node scripts/indexnow.mjs <url-bai> https://techvision.click/blog.html
node scripts/gsc/gsc.mjs sitemap sitemap-news.xml   # nếu có token
```
- IndexNow ping Bing/Yandex (nuôi ChatGPT/Copilot) ngay sau mỗi bài.
- Sitemap: đã có `sitemap-index.xml` + `sitemap.xml` + `sitemap-news.xml`. GSC "chưa nhận" với domain mới là chuyện bình thường (hàng đợi), không phải lỗi file.

## 7. Khi làm việc từ máy khác (quan trọng)
- `git pull --rebase origin main` TRƯỚC khi làm, để có code mới nhất.
- Nếu `blog.html` / `legacy-articles.json` conflict khi rebase: chúng là file **tự sinh**, cứ lấy bản remote rồi **rebuild lại** (`build-blog.mjs`) để regenerate, không sửa tay.
- KHÔNG commit `client_secret.json`, `token.json`, `.env` (đã gitignore). Không dán secret vào chat.

## 8. Snippets verify nhanh (chạy ở /tmp)
```bash
# Verify thumbnail YouTube THẬT (bắt ảnh xám) + kênh/tiêu đề
for v in <ID1> <ID2>; do
  sz=$(curl -s -A 'Mozilla/5.0' "https://i.ytimg.com/vi/$v/maxresdefault.jpg" -o /dev/null -w '%{size_download}')
  [ "$sz" -lt 8000 ] && echo "⚠️ XÁM ($sz b) -> dùng hqdefault: $v" || echo "✅ maxres ok ($sz b): $v"
  curl -s "https://www.youtube.com/oembed?url=https://youtu.be/$v&format=json" | python3 -c "import sys,json;d=json.load(sys.stdin);print('  ',d.get('author_name'),'|',d.get('title')[:50])"
done

# Đo bài đủ chuẩn chưa (số từ thân + media)
F=src/content/articles/<slug>.md
echo "media: $(grep -cE '<img |<iframe' $F) | em-dash: $(grep -c '—' $F)"
```

## 9. Tham chiếu
- Chiến lược nội dung: `docs/chien-luoc-noi-dung-2026.md`
- Lộ trình SEO/GEO: `docs/lo-trinh-seo-geo.md`
- Spec HTML đầy đủ + GEO: `skills/website-content-writer/` (nếu dùng kit gốc)
