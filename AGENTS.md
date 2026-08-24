# AGENTS.md — Chuẩn viết bài & vận hành techvision.click

> Đọc file này TRƯỚC khi viết hoặc sửa bài, ở bất kỳ máy nào. Tuân thủ để chất lượng đồng nhất như khi làm ở máy local.
> ⚠️ Repo này là **techvision.click** — KHÔNG phải web `chamaiagency.website` (ai-agent-business-kit). Đó là repo KHÁC, đừng lẫn hai web.

## 0. Quy tắc vàng (bắt buộc)
- **Không dùng em-dash (—)** ở bất kỳ đâu. Dùng dấu phẩy, "tức là", hoặc ngoặc đơn.
- **Tối thiểu 5 media/bài, đều phải distinct**: 1 hero + tối thiểu 3 `<figure>` + tối thiểu 1 video `<iframe>`. Hero KHÔNG được trùng ID với video embed.
- **Độ dài thân bài ≥ 1.100 từ.** Bài dưới ~900 từ là "cụt", phải mở rộng.
- **Bài listicle "top" BẮT BUỘC nêu ÍT NHẤT 5 tên sản phẩm cụ thể** (thương hiệu + mã model thật, ví dụ "Sony WH-1000XM6", "Samsung 990 Pro", "Roborock Saros"), KHÔNG viết chung chung kiểu "tai nghe chống ồn cao cấp" hay "SSD tốc độ cao" mà không có tên. Mỗi model kèm ít nhất 1 chi tiết thật (thông số/tầm giá VN). Tên model phải verify là có thật, KHÔNG bịa. Áp dụng cho cả bài "top ... đáng mua" lẫn "top ... tốt nhất theo nhu cầu"; nêu model ở cả bảng so sánh, `tldr`, `stats` và thân bài.
- **Giọng trung lập**, không clickbait, không nhồi tính từ. Tiếng Việt là chính, kèm thuật ngữ tiếng Anh khi cần.
- **Internal link rõ anchor text**: 2-3 link sang bài liên quan trong thân bài, anchor mô tả đúng đích (không dùng "tại đây").
- **Số liệu phải có nguồn thật** (báo/hãng), ghi rõ trong `sourceUrl` / `sourceDomains`. Tin đồn phải nói rõ là tin đồn.
- **Commit THẲNG vào nhánh `main`, TUYỆT ĐỐI không tạo nhánh phụ / Pull Request để viết bài.** Chỉ `main` mới deploy lên production; bài viết trên nhánh phụ (kể cả build preview OK) sẽ KHÔNG bao giờ lên site chính, gây "bài bị treo" phải merge thủ công. Luôn `git pull --rebase origin main` trước khi làm và `git push origin main` sau mỗi bài. Nếu vì lý do kỹ thuật buộc phải làm trên nhánh khác, phải merge lại `main` ngay khi xong, đừng để tồn.
- **Mô hình nguồn 3 lớp cho bài tin (bắt buộc):** (1) *Radar* = báo lớn VN (VnExpress, Genk, Tinhte, CafeF, Znews) CHỈ để bắt chủ đề đang hot + search demand VN, KHÔNG lấy làm nguồn dữ kiện; (2) *Dữ kiện gốc* = nguồn quốc tế GỐC (The Verge, TechCrunch, MacRumors, 9to5Mac, Reuters), lấy số liệu/giá/ngày/quote chuẩn, ≥2 nguồn gốc + URL; (3) *Giá trị riêng* = phân tích + bối cảnh VN + so sánh + internal link. KHÔNG đua breaking news với VnExpress — định vị "giải thích đầy đủ nhất qua lăng kính quốc tế". Check SERP top Google VN trước khi viết để viết cho thắng, không echo lại.

## 0a. TRẦN NHỊP ĐĂNG BÀI - luật cứng từ 07/08/2026

> Bối cảnh: tới 07/08/2026 site có 704 bài markdown sinh ra trong 53 ngày (**13,3 bài/ngày**, ngày đỉnh **66 bài**). Kết quả: chỉ **2,7%** bài markdown từng có 1 lượt hiển thị trên Google, trong khi 61 bài legacy viết tay từng bài đạt **41%**. Chênh 15 lần. Google crawl rồi từ chối lập chỉ mục (*Crawled - currently not indexed*) dù kỹ thuật sạch - đây là tín hiệu *scaled content abuse*. Đã gỡ 480 bài khỏi index và xóa 47 bài lạc ngách để dọn.

- **Tối đa 2 bài/ngày, tối đa 8 bài/tuần.** Không có ngoại lệ cho "batch", "bù bài", hay "tin nóng nhiều quá".
- **Cấm tuyệt đối các series template** kiểu đổi danh từ giữ nguyên khung: `Cách chọn X 2026: 5 tiêu chí`, `X hay Y chọn loại nào`, `Top X đáng mua tháng N`, `X là gì`. Toàn bộ 171 bài dạng này đã bị noindex vì 0 lượt hiển thị.
- **Chỉ viết đúng ngách công nghệ.** Cấm đồ gia dụng (nồi cơm, tủ lạnh, máy giặt, bếp từ, máy sấy tóc, máy lọc nước...) - 47 bài dạng này đã bị xóa.
- **Mỗi bài phải có thứ mà nguồn quốc tế không có**: giá VN thật, so sánh máy bán ở VN, trải nghiệm thật, hoặc góc phân tích riêng. Bài chỉ dịch lại tin nước ngoài thì đừng đăng.
- **Bài mới mặc định `noindex: false`.** Chỉ đặt `noindex: true` khi cố ý giữ bài ngoài index.
- Trước khi thêm bài, chạy `node scripts/check-cadence.mjs` - script chặn nếu vượt trần.

## 0a-bis. Đo thực tế 07/08/2026: thứ gì THẬT SỰ quyết định bài có được index

So sánh 61 bài legacy (39% có impression) với 657 bài markdown (3%), đo trên HTML đã build để công bằng:

| Chỉ số | legacy | markdown | Kết luận |
|---|---|---|---|
| Độ dài (trung vị) | 1.695 từ | **2.059 từ** | markdown DÀI HƠN |
| Media | 9 | **13** | markdown NHIỀU HƠN |
| Link nội bộ | 4 | 4 | bằng nhau |
| Link ra nguồn ngoài | 1 | 1 | bằng nhau |
| Mục h2 | **7** | 4 | legacy nhiều hơn chút |
| Có bảng so sánh | 54% | **100%** | markdown đồng loạt có |
| **Nhịp đăng** | **2,5 bài/ngày** (đỉnh 7) | **12,4 bài/ngày** (đỉnh 51) | **khác 5 lần** |
| **Có giá Việt Nam** | **67%** | 44% | **khác rõ rệt** |

**Kết luận đi ngược trực giác SEO: viết dài hơn, nhiều ảnh hơn, nhiều bảng hơn, nhiều schema hơn KHÔNG giúp gì.** Nhóm markdown đã hơn legacy ở gần hết các chỉ số đó mà vẫn thua 13 lần về tỉ lệ được index. Chỉ có hai biến thật sự khác: **nhịp đăng** và **giá Việt Nam thật**.

Đối chứng trong CÙNG nhóm markdown (19 bài có impression vs 638 bài không) loại bỏ yếu tố tuổi đời và thời kỳ - mọi chỉ số gần như trùng khít, chỉ **giá Việt Nam 63% so với 44%** là chênh nhất quán. Đây là biến duy nhất xuất hiện ở CẢ hai phép so sánh.

⚠️ Hạn chế phải nhớ khi trích dẫn: bài legacy cũ hơn nên có nhiều thời gian được index hơn - tuổi đời là yếu tố gây nhiễu không loại bỏ hết được ở bảng trên. Phép đối chứng trong cùng nhóm markdown là bằng chứng độc lập chống lại nhiễu đó.

**Áp dụng:** đừng cố "làm bài dày hơn" nữa, ngưỡng đó đã vượt từ lâu. Dồn công vào (1) giữ nhịp §0a, (2) neo bài vào Việt Nam.

Cách neo phụ thuộc LOẠI bài, không áp một kiểu cho tất cả:
- **Bài sản phẩm** (điện thoại, laptop, xe, đồ điện tử): BẮT BUỘC có giá niêm yết tại đại lý VN, ngày mở bán/đặt trước tại VN, hoặc so sánh với máy đang bán ở VN. Không có thì đừng đăng, viết cũng phí.
- **Bài tin ngành toàn cầu** (sa thải, gọi vốn, chính sách, nghiên cứu): KHÔNG nhồi giá VN một cách gượng ép - nhồi vào thành giả tạo, hại hơn lợi. Thay vào đó phải trả lời được "chuyện này đổi gì cho người dùng / lập trình viên / doanh nghiệp Việt Nam" bằng một mục thật sự có nội dung, không phải một câu cho có. Loại bài này nên ÍT, vì báo lớn VN luôn đưa nhanh hơn.

Kiểm bằng `node scripts/check-vn-signal.mjs` (thêm `--since YYYY-MM-DD` để chỉ soi bài mới và cho script chặn commit). Script chỉ bắt được tín hiệu dạng chuỗi ký tự, KHÔNG đánh giá được bài tin ngành có góc Việt Nam thật hay không - phần đó người viết tự chịu trách nhiệm.

## 0b. Checklist chống lỗi trước khi commit (bắt buộc)
Chạy đủ 4 bước này trước MỖI lần commit để máy/AI khác không tái tạo lỗi cũ:
0. **`node scripts/check-cadence.mjs`** và **`node scripts/check-vn-signal.mjs --since <ngày hôm nay>`** → cả hai phải PASS. Cadence chặn đăng ồ ạt và series template (§0a); vn-signal chặn bài sản phẩm không có dữ liệu Việt Nam (§0a-bis).
1. **`node scripts/check-media.mjs`** → phải ra **0 ảnh lỗi · 0 video lỗi · 0 bài media dồn cụm**. Script quét cả `src/content/articles`, `public/articles` và `public/su-kien`. Nếu có lỗi: sửa (thay thumbnail sống, hạ maxres→hqdefault, giãn media) rồi chạy lại tới khi sạch.
2. **Build sạch** bằng lệnh ở §5, không warning/lỗi.
3. **Ảnh/video mới**: verify HTTP 200 + kích thước thật (maxres có thể trả ảnh xám ~1KB status 200, xem §4). Video embed phải còn sống + cho nhúng. KHÔNG dán URL chưa kiểm tra.
4. **Commit chỉ file nguồn**, KHÔNG commit `dist/`. Máy mới: set `git config user.email` trước (xem §7). Sau đó `git push origin main` — **push thẳng `main`, không dùng nhánh phụ/PR** (xem quy tắc vàng §0, bài trên nhánh phụ không lên production).

## 0c. Cơ cấu một batch (mặc định)
Khi được yêu cầu "viết tiếp"/"viết một batch", mặc định mỗi batch gồm **4 bài** theo tỷ lệ cố định:
- **2 bài tin công nghệ** (AI, chip, smartphone, laptop, sản phẩm công nghệ quốc tế... theo mô hình nguồn 3 lớp §0).
- **1 bài tin esports** (LMHT hoặc Liên Quân Mobile: giải đấu, kết quả, lịch thi đấu).
- **1 bài sản phẩm mới ra mắt tại Việt Nam** (xe, đồ điện tử, gia dụng... có giá/ngày bán VN thật).

Kèm theo (khi tới kỳ): refresh 1 bài "tháng cũ" sang tháng hiện tại theo §8b (giữ nguyên slug).

Batch nhỏ hơn 4 bài CHỈ chấp nhận khi thật sự không kiếm đủ chủ đề mới, dedup sạch, video đã verify thật cho một thể loại. Khi đó ghi rõ lý do bỏ bớt bài nào.

## 0d. Keyword radar - chọn chủ đề theo dữ liệu (GSC + OpenSEO)

Trước khi chọn chủ đề cho batch (nhất là bài cẩm nang/top), chạy radar để viết đúng thứ người dùng ĐANG tìm:

1. `node scripts/gsc/gsc.mjs radar 28` - liệt kê query **striking distance** (vị trí 4-20, sắp theo impressions) và query **CTR gap** (top 1-3 nhưng CTR < 2%).
   - Striking distance chưa có bài riêng → ứng viên số 1 cho bài mới của batch.
   - Striking distance đã có bài → nâng cấp bài đó (thêm section trả lời đúng query, cập nhật title/H2).
   - CTR gap → chỉ sửa title/description cho hấp dẫn hơn, KHÔNG cần bài mới.
   - Nếu báo `invalid_grant`: token Google hết hạn, nhờ anh Long chạy `cd scripts/gsc && npm run auth` (cần đăng nhập Google, AI không tự làm).
2. **OpenSEO** (tra volume/độ khó khi cần, self-host tại `/Users/nguyenlong/open-seo`):
   - Chạy: `cd /Users/nguyenlong/open-seo && docker compose up -d` → UI tại `http://localhost:3001`, MCP tại `http://localhost:3001/mcp`.
   - Cần `DATAFORSEO_API_KEY` trong `.env` (anh Long tự dán, trả phí theo lượt gọi). Chưa có key thì bỏ qua tầng này, radar GSC vẫn đủ dùng.
   - Nối vào Claude Code: `claude mcp add --transport http openseo http://localhost:3001/mcp`. Skill kèm theo đã cài ở `~/.claude/skills/openseo-*` (keyword-research, seo-project-setup, competitor-analysis).
   - Quy trình chuẩn của skill keyword-research: lấy query striking-distance từ radar → `get_keyword_metrics` để gắn volume/KD/intent → ưu tiên query volume khá + KD thấp + đúng ngách.
3. Chủ đề chọn từ radar vẫn phải qua dedup §0b và cơ cấu batch §0c như thường.

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
- **KHOẢNG CÁCH MEDIA (bắt buộc): không đặt 2 khối ảnh/video sát nhau.** Giữa 2 khối media (`<figure>`, `<img>`, `<div class="art-video-wrap">`) phải có **tối thiểu 1 đoạn văn thật (≥ ~35-40 từ)** hoặc 1 khối nội dung khác (`spec-box`, `art-stats`, `art-callout`). Lý tưởng: mỗi H2 chỉ 1 media, media rải đều cả bài, KHÔNG dồn cụm. Ảnh/video KHÔNG được đặt ngay dưới nhau chỉ cách 1 dòng trống.
- Lệnh verify nhanh: xem mục Snippets cuối file (có script rà media lỗi + media dồn cụm).

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

## 8b. SEO tiêu đề + refresh hàng tháng

**Tiêu đề (title frontmatter):**
- Dài **≤65 ký tự** (Google cắt sau ~60-65; thẻ `<title>` còn nối thêm `| TechVision`).
- **Từ khóa chính đứng đầu**, viết theo cụm người Việt thật sự tìm: "giá bao nhiêu", "cách bật/cách chọn", "kết quả <giải>", "là gì". Không viết kiểu tít báo dài dòng.
- Tiêu đề chỉ hứa những gì bài THẬT SỰ có (có mục giá mới ghi "giá").
- Khi sửa title bài đã đăng: **giữ nguyên slug/URL**, chỉ đổi `title` + bump `dateModified`.

**Refresh bài "tháng X" (đầu mỗi tháng):**
```bash
node scripts/list-monthly-refresh.mjs   # liệt kê bài top-*/cach-chon-* gắn tháng cũ
```

⚠️ **SAU MỖI KỲ REFRESH BẮT BUỘC CHẠY:**
```bash
node scripts/fix-stale-anchors.mjs --write
```
Bài refresh giữ nguyên slug nhưng đổi title sang tháng mới, còn mọi chỗ trỏ tới nó (thẻ `related` ở bài khác, anchor trong thân bài) vẫn ghi tháng cũ. Ngày 07/08/2026 quét ra **56 anchor lệch tháng** tồn từ nhiều kỳ, ví dụ 8 bài trỏ tới "Giá RTX 5090 tại Việt Nam tháng 6/2026" trong khi bài đó đã là tháng 8. Google đọc anchor lệch tháng là tín hiệu nội dung cũ. Script đồng bộ `related` theo title hiện tại và đổi số tháng trong anchor thân bài, chạy không tham số để xem trước.
Với mỗi bài: cập nhật giá/sản phẩm còn bán, đổi "tháng X" trong title/description/thân bài sang tháng mới, bump `dateModified`. Giữ nguyên slug.

## 9. Tham chiếu
- Chiến lược nội dung: `docs/chien-luoc-noi-dung-2026.md`
- Lộ trình SEO/GEO: `docs/lo-trinh-seo-geo.md`
- Spec HTML đầy đủ + GEO: `skills/website-content-writer/` (nếu dùng kit gốc)

## Hẹn lịch bài viết (tự động, không cần mở phiên chat)

Từ 24/08/2026 việc gỡ `noindex` cho bài tới giờ do GitHub Action làm, không
còn làm tay trong phiên chat nữa (trước đó bài 21-23/8 nằm im quá hạn vì
không ai mở phiên).

Muốn hẹn một bài, khai đủ **ba** thứ trong frontmatter:

```yaml
datePublished: "2026-09-02T08:30:00+07:00"   # giờ muốn đăng
noindex: true                                 # ẩn khỏi blog.html + sitemap
scheduled: true                               # BẮT BUỘC, xem lý do bên dưới
```

`scheduled: true` là cờ phân biệt. Repo đang có hơn 500 bài `noindex` vĩnh
viễn từ đợt dọn scaled content, đa số ngày đăng ở quá khứ. Thiếu cờ này thì
script sẽ hiểu nhầm cả 500 bài đó là "bài hẹn lịch đã quá hạn" và bung hết ra.

Cơ chế: `.github/workflows/release-scheduled.yml` chạy mỗi giờ, gọi
`scripts/release-scheduled.mjs`. Tới giờ thì script gỡ cả hai cờ, chạy lại
`build-blog.mjs`, commit và push. Vercel deploy theo push, xong thì Action đợi
URL trả 200 rồi mới ping IndexNow đúng các URL vừa lên.

Script chỉ kiểm cấu trúc tối thiểu, **không** chạy lại gate mạng. Gate đầy đủ
(`check-new-article.mjs` + `check-media.mjs`) phải chạy **lúc viết bài**, trước
khi hẹn lịch - đừng hẹn một bài chưa qua gate.

Chạy thử tại máy: `node scripts/release-scheduled.mjs --dry` (chỉ in, không sửa).
Chạy tay trên web: tab Actions → "Phat hanh bai hen lich" → Run workflow.
