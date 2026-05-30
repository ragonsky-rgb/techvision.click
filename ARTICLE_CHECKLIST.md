# Checklist viết bài mới — techvision.click

> Dùng checklist này mỗi khi tạo bài HTML mới để tránh các lỗi vặt hay gặp.  
> Cập nhật lần cuối: **2026-05-29**

---

## TEMPLATE STRUCTURE — Skeleton HTML bắt buộc

> Cấu trúc dưới đây được xác minh từ các bài hoạt động đúng (ví dụ: `xiaomi-17t-series-ra-mat-28-5-2026-leica-5x-pin-6500mah-gia-viet-nam.html`).  
> Mọi bài mới PHẢI tuân theo đúng thứ tự và class này. Không thay thế hay đổi tên class.

```html
<div class="read-progress"><div class="read-progress-bar" id="progressBar"></div></div>

<nav class="top-bar">
  <a href="/blog.html" class="back-link">Tech News</a>
  <span class="page-label">Bài viết</span>
</nav>

<article>
  <nav class="art-breadcrumb">...</nav>
  <div class="art-meta"><span class="cat">...</span><span class="sep">·</span>...</div>

  <button class="tts-trigger" id="ttsTrigger" onclick="TTS.start()">...</button>  <!-- TRƯỚC h1 -->

  <h1 class="art-title">...</h1>
  <p class="art-deck">...</p>
  <img class="art-hero" ...>
  <div class="art-tldr">...</div>

  <div class="art-body">
    ... nội dung bài ...
    ... giscus comments ...
  </div>

  <div class="art-nav">
    <a href="/blog.html">← Quay lại Tech News</a>
    <a href="/">techvision.click</a>
  </div>
</article>

<button class="dark-toggle" id="darkToggle">🌙</button>
<button class="back-to-top" id="backToTop">↑</button>
<button class="bookmark-btn" id="bookmarkBtn">...</button>
<div class="bookmarks-panel" id="bookmarksPanel">...</div>

<script src="/articles/_article.js"></script>
<script>/* FAQ JS inline */</script>

<div class="tts-player" id="ttsPlayer">...</div>
<script>const TTS = (()=>{...})();</script>
```

### ❌ Class SAI — không bao giờ dùng

| Class sai | Class đúng thay thế |
|-----------|-------------------|
| `site-header` | `top-bar` |
| `nav-inner` | *(không cần, dùng trực tiếp `top-bar`)* |
| `article-hero` | `art-hero` |
| `art-meta-top` | `art-meta` |
| `art-cat` | `cat` *(bên trong `art-meta`)* |
| `art-dot` | `sep` |
| `art-actions` | *(không tồn tại)* |
| `art-bookmark` | `bookmark-btn` |
| `article-intro` | `art-deck` |
| `art-read` | *(không tồn tại)* |
| `art-nav-prev` | `art-nav` + `<a href="/blog.html">` |
| `art-nav-next` | `art-nav` + `<a href="/">` |
| `progress-bar` *(standalone)* | `read-progress` + `read-progress-bar` |

---

## ✅ 1. HTML Head — Meta & SEO

- [ ] `<title>` — có keyword chính, kết thúc bằng `— LongTechVision`
- [ ] `<meta name="description">` — 120–160 ký tự, có keyword
- [ ] `<meta name="keywords">` — 5–8 từ khoá liên quan
- [ ] `<link rel="canonical">` — URL đầy đủ `https://techvision.click/articles/...`
- [ ] Open Graph: `og:title`, `og:description`, `og:image`, `og:url`, `og:type="article"`
- [ ] Twitter Card: `twitter:card="summary_large_image"`, `twitter:title`, `twitter:image`
- [ ] JSON-LD `NewsArticle` — đủ `headline`, `image`, `datePublished`, `dateModified`, `author`, `publisher`
- [ ] JSON-LD `BreadcrumbList` — 3 cấp: Trang chủ → Tech News → Bài viết
- [ ] JSON-LD `FAQPage` — tối thiểu 3 câu hỏi thường gặp
- [ ] `<link rel="stylesheet" href="/articles/_article-style.css">` — PHẢI có
- [ ] `<script defer src="/_vercel/insights/script.js"></script>` — analytics
- [ ] Font: **Lora + Be Vietnam Pro** (không dùng font khác)

---

## ✅ 2. Fonts — Dùng đúng font site

```html
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
```
> ❌ KHÔNG dùng: Playfair Display, DM Sans, Inter, Roboto hay font nào khác

---

## ✅ 3. Top Navigation Bar

```html
<nav class="top-bar">
  <a href="/blog.html" class="back-link">Tech News</a>
  <span class="page-label">Bài viết</span>
</nav>
```
> Chỉ có 2 element: back-link trái, page-label phải. Không thêm thứ gì khác.

---

## ✅ 4. Author Card — Đủ 3 phần

```html
<div class="art-author-card">
  <img class="author-avatar" src="/uploads/favicon-avatar.jpg" alt="Nguyễn Tấn Thiên Long">
  <div class="author-info">
    <div class="author-name">Nguyễn Tấn Thiên Long</div>
    <div class="author-bio">Mô tả ngắn phù hợp với chủ đề bài...</div>
    <div class="author-links">           <!-- ← HAY QUÊN -->
      <a href="/cv.html">About</a>
      <a href="/blog.html">Tech News</a>
    </div>
  </div>
</div>
```
> ❌ Lỗi hay gặp: quên `<div class="author-links">` → mất nút About + Tech News

---

## ✅ 5. Source Card — Dùng đúng class

```html
<a href="https://..." target="_blank" rel="noopener" class="source-card">
  <div class="source-card-label">Nguồn tham khảo</div>
  <div class="source-card-name">Tên bài gốc đầy đủ</div>
  <div class="source-card-url">domain1.com · domain2.com · domain3.com</div>
</a>
```
> ❌ Lỗi hay gặp: dùng `.art-source-card`, `.source-list`, `.source-item` — những class này KHÔNG tồn tại  
> ✅ Chỉ có `.source-card`, `.source-card-label`, `.source-card-name`, `.source-card-url`

---

## ✅ 6. Bookmark Button + Panel — Dùng SVG, không dùng emoji

```html
<button class="bookmark-btn" id="bookmarkBtn" aria-label="Lưu bài này">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
  </svg>
</button>
<div class="bookmarks-panel" id="bookmarksPanel" role="dialog" aria-label="Bài đã lưu">
  <div class="bookmarks-title">📑 Bài đã lưu</div>
  <div id="bookmarksList"></div>
</div>
```
> ❌ Lỗi hay gặp: dùng `🔖` emoji thay SVG → khi lưu đổi thành `★` trông rất xấu

---

## ✅ 7. Script — Dùng `_article.js` chung, không tự viết lại

```html
<script src="/articles/_article.js"></script>
<script>
  // Chỉ viết thêm reading time — _article.js đã xử lý tất cả còn lại
  (function(){
    const body = document.querySelector('.art-body');
    if(!body) return;
    const words = body.innerText.trim().split(/\s+/).length;
    const mins = Math.max(1, Math.round(words / 200));
    const el = document.getElementById('readingTime');
    if(el) el.textContent = mins + ' phút đọc';
  })();
</script>
```
> `_article.js` đã xử lý: dark mode, reading progress, back-to-top, bookmark panel, TTS  
> ❌ Lỗi hay gặp: viết lại inline JS cho từng tính năng → duplicate, bug, không đồng bộ

---

## ✅ 8. Media — Tối thiểu 5 items (ảnh + video)

**Ảnh tĩnh:**
```html
<figure>
  <img src="https://i.ytimg.com/vi/{VIDEO_ID}/maxresdefault.jpg" alt="Mô tả ảnh" loading="lazy">
  <figcaption>Caption. Nguồn: ...</figcaption>
</figure>
```

**Video YouTube embed:**
```html
<div class="art-video">
  <iframe src="https://www.youtube.com/embed/{VIDEO_ID}"
    title="Tên video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen loading="lazy"></iframe>
</div>
<p class="art-video-caption">Mô tả video. Nguồn: YouTube</p>
```

**Quy tắc:**
- Tổng ≥ 5 media (hero image tính là 1)
- Rải đều trong bài, không dồn cuối
- Tìm YouTube video ID bằng WebSearch trước khi viết bài
- YouTube thumbnail URL dạng `https://i.ytimg.com/vi/{ID}/maxresdefault.jpg` — luôn public, không cần auth

---

## ✅ 9. Ngôn ngữ — Phong cách báo chí trung tính

- [ ] KHÔNG xưng hô "anh", "chị", "bạn" với người đọc
- [ ] Dùng "người dùng", "người mua", "độc giả" khi cần chỉ đối tượng
- [ ] Hoặc viết câu không có chủ ngữ đại từ nhân xưng
- [ ] KHÔNG dùng dấu em-dash (—) trong nội dung bài

> ❌ "Anh có thể nâng cấp SSD"  
> ✅ "SSD có thể nâng cấp sau khi mua"

---

## ✅ 10. Comments — Giscus (PHẢI có, đặt trước art-nav)

```html
<!-- 14. Comments -->
<div class="comments-section" style="margin-top:3rem;padding-top:2rem;border-top:1px solid var(--line);">
  <div style="font-size:0.62rem;letter-spacing:0.22em;text-transform:uppercase;color:var(--dim);margin-bottom:1rem;">Bình luận</div>
  <script src="https://giscus.app/client.js"
    data-repo="ragonsky-rgb/techvision.click"
    data-repo-id="R_kgDOShbzSw"
    data-category="General"
    data-category-id="DIC_kwDOShbzS84C9hJr"
    data-mapping="pathname"
    data-strict="0"
    data-reactions-enabled="1"
    data-emit-metadata="0"
    data-input-position="top"
    data-theme="preferred_color_scheme"
    data-lang="vi"
    data-loading="lazy"
    crossorigin="anonymous"
    async>
  </script>
  <noscript>Bật JavaScript để xem bình luận.</noscript>
</div>
```

> ❌ Lỗi hay gặp: quên hoàn toàn phần bình luận → bài không có comment box

---

## ✅ 11. Bottom Navigation Bar — `art-nav` (PHẢI có, đặt sau comments)

```html
<!-- 15. Bottom Nav -->
<div class="art-nav">
  <a href="/blog.html" class="art-nav-prev">← QUAY LẠI TECH NEWS</a>
  <span class="art-nav-next">TECHVISION.CLICK</span>
</div>
```

> ✅ Hiển thị: `← QUAY LẠI TECH NEWS` bên trái · `TECHVISION.CLICK` bên phải  
> ❌ Lỗi hay gặp: dùng `<footer class="site-footer">` thay vì `art-nav` → sai format

---

## ✅ 12. Thứ tự cuối bài — Đúng thứ tự các block

```
1. Related posts (.related-section)
2. Comments (.comments-section + Giscus)
3. Bottom nav (.art-nav)
</article>
4. TTS player (#ttsPlayer)
5. Dark toggle button
6. Back-to-top button
7. Bookmark button + panel
8. <script src="/articles/_article.js">
9. Reading time inline script
```

> ❌ Không để `site-footer` thay thế `art-nav` — hai thứ khác nhau

---

## ✅ 13. Sau khi viết xong — Cập nhật 3 file bắt buộc

| File | Việc cần làm |
|------|-------------|
| `blog.html` | Thêm card mới lên **đầu** `#blog-grid`, cập nhật timestamp "Cập nhật lần cuối" |
| `sitemap.xml` | Thêm `<url>` mới với `<lastmod>` và `<priority>` phù hợp |
| `rss.xml` | *(nếu có)* Thêm `<item>` mới |

> ❌ Hay quên: chỉ tạo file bài mà không update blog.html + sitemap

---

## ✅ 14. Commit & Push

```bash
git add articles/{slug}.html blog.html sitemap.xml
git commit -m "feat: bài mới — {tiêu đề ngắn}"
git push origin main
```
> Vercel auto-deploy sau ~30 giây khi push lên `main`

---

## 📋 Quick Reference — Các class CSS quan trọng

| Mục đích | Class đúng |
|----------|-----------|
| Khung bài viết | `art-body` |
| Tiêu đề H1 | `art-title` |
| Mô tả dẫn | `art-deck` |
| Tóm tắt nhanh | `art-tldr` / `tldr-label` |
| Ảnh hero | `art-hero` + `art-hero-caption` |
| Stats row | `art-stats` / `art-stat-card` / `stat-num` / `stat-label` |
| Video embed | `art-video` + `art-video-caption` |
| Highlight box | `insight-box` |
| Card so sánh | `compare-row` / `compare-card` / `cmp-company` / `cmp-val` |
| Breadcrumb | `art-breadcrumb` / `bc-sep` |
| Meta dòng | `art-meta` / `cat` / `sep` |
| Author card | `art-author-card` / `author-avatar` / `author-info` / `author-name` / `author-bio` / `author-links` |
| Source card | `source-card` / `source-card-label` / `source-card-name` / `source-card-url` |
| Share section | `art-share` / `share-label` / `share-buttons` / `share-btn` |
| Related posts | `related-section` / `related-label` / `related-grid` / `related-card` |
| FAQ | `art-faq` / `faq-label` / `faq-item` / `faq-q` / `faq-a` / `faq-icon` |
| TTS button | `tts-trigger` |
| TTS player | `tts-player` / `tts-inner` / `tts-play` / `tts-fill` / `tts-spd` |

---

## 🔴 Top lỗi hay gặp nhất (Hall of Shame)

1. **Quên `author-links`** → thiếu nút About + Tech News dưới tên tác giả
2. **Dùng sai class source card** → `.art-source-card` không tồn tại, phải dùng `.source-card`
3. **Bookmark dùng emoji** → `🔖/★` trông xấu, phải dùng SVG `<path d="M19 21...">`
4. **Không load `_article.js`** → dark mode, bookmark, back-to-top không hoạt động
5. **Dùng sai font** → Playfair Display / DM Sans thay vì Lora / Be Vietnam Pro
6. **Thiếu media** → bài có ít hơn 5 ảnh/video
7. **Quên update `blog.html`** → bài mới không hiện trên trang danh sách
8. **Quên update `sitemap.xml`** → Google chậm index bài mới
9. **Xưng hô "anh/bạn"** → vi phạm phong cách báo chí trung tính
10. **Quên Giscus comments** → bài không có phần bình luận
11. **Dùng `site-footer` thay `art-nav`** → footer sai format, thiếu "← QUAY LẠI TECH NEWS / TECHVISION.CLICK"
12. **Dùng sai class template** → `site-header`, `nav-inner`, `article-hero`, `art-meta-top`, `art-cat`, `art-dot`, `art-actions`, `art-bookmark`, `article-intro`, `art-read`, `art-nav-prev`, `art-nav-next`, `progress-bar` (standalone) đều **không tồn tại** trong `_article-style.css`. Dùng đúng: `top-bar`, `art-meta`, `art-title`, `art-deck`, `art-hero`, `read-progress` / `read-progress-bar`
