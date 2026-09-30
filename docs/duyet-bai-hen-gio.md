# Duyệt bài hẹn giờ (scheduled) trước khi bot thả bài

Bài trong `src/content/articles/` có `scheduled: true` + `noindex: true` được bot `release-scheduled` tự gỡ cờ và đăng khi tới `datePublished`. Phần lớn do bộ viết bài tự động (radar đêm) viết ra, KHÔNG ai kiểm giá và ảnh. Đợt duyệt 30/09/2026 (22 bài) cho thấy lỗi gần như bài nào cũng có: số đã cũ hoặc ngược chiều, tiêu đề chốt điều thân bài chưa chắc, và **toàn bộ media là thumbnail YouTube lạc đề hoặc dùng chung với bài khác**.

Đọc trước: `AGENTS.md` mục 0, 0a-bis, 0b, 2, 3, 4 và `CLAUDE.md`.

## Với MỖI bài

1. **Kiểm từng con số và dữ kiện** (giá USD/VND, ngày ra mắt/mở bán, thông số, tên model, trích dẫn):
   - Mở lại nguồn gốc. Ưu tiên trang hãng, newsroom, trang trợ giúp chính thức, trang bán lẻ VN (CellphoneS, TGDĐ, FPT Shop, Apple Store VN), báo gốc quốc tế (The Verge, 9to5Mac, MacRumors, Reuters). Báo VN chỉ để đối chiếu. Văn bản pháp luật: thuvienphapluat hoặc báo lớn trích nguyên văn (PDF chinhphu.vn thường là ảnh scan).
   - Sai thì sửa. Không tìm được nguồn thì bỏ câu đó, hoặc ghi rõ "dự kiến"/"tin đồn".
   - Tiêu đề KHÔNG được chốt giá/ngày khi thân bài nói "dự kiến". Tiêu đề không được gây hiểu nhầm (ví dụ "giá quy đổi 11 triệu" dễ bị hiểu là giá bán VN).
   - Mọi câu "sắp", "tuần tới", "đang đặt trước" phải đúng tại NGÀY BÀI ĐĂNG (`datePublished`), không phải ngày viết. Sự kiện đã qua vào ngày đăng thì đổi góc bài.
2. **Media**: 1 hero + ít nhất 3 `<figure>` + ít nhất 1 video `<iframe>`, giữa 2 media có đoạn văn ≥ 35 từ.
   - Mỗi ảnh khớp nội dung mục nó đứng. Ảnh hãng/báo gốc (og:image, trang press) tải về `public/images/<slug>/` (jpg, rộng ≤ 1600px), caption ghi nguồn ("Ảnh: Apple"...). Ảnh chụp màn hình trang bán lẻ VN có giá là media tốt nhất cho bài giá.
   - Video YouTube: oEmbed `https://www.youtube.com/oembed?url=...&format=json` phải trả JSON, thumbnail > 8000 byte, đúng chủ đề (xem tiêu đề video qua oEmbed, đừng đoán theo id).
   - Hero/og:image không trùng bài khác: `grep -rl "<id hoặc đường dẫn ảnh>" src/content/articles` chỉ ra đúng 1 bài. Thumbnail YouTube cũng tính.
   - Không dùng hình AI.
   - Đổi tiêu đề thì sinh lại thẻ OG: `python3 scripts/make-article-og.py <slug>`.
3. **Neo Việt Nam**: bài sản phẩm phải có giá niêm yết VN / ngày bán VN / so với máy đang bán ở VN (đọc tận gốc). Bài tin ngành có mục "đổi gì cho người Việt" có nội dung thật.
4. **Cổng**, chạy cho từng bài:
   - `node scripts/check-new-article.mjs src/content/articles/<slug>.md` (lỗi "title trùng với bài đã có" mà tên file là CHÍNH NÓ là báo động giả)
   - `node scripts/check-media.mjs` (ảnh mới chưa deploy báo 404 là bình thường, chỉ cần file có trong `public/`)
   - `node scripts/check-vn-signal.mjs --all` (xem dòng của bài)
   - `node scripts/check-affiliate.mjs --net` nếu bài có `shop:`
5. **Bài không cứu được** (sai nặng, chủ đề chết, trùng bài đang có, ngoài ngách): KHÔNG xóa. Lùi `datePublished` ra sau hàng đợi (giữ `scheduled: true`) hoặc bỏ `scheduled`, giữ `noindex: true`. Bài bị rút lịch thì grep xem bài khác có link tới nó không và sửa link.

## Luật cứng

- Giữ slug. Giữ `scheduled: true` + `noindex: true` cho bài còn chờ.
- **`dateModified` = `datePublished`** với bài còn hẹn giờ (đặt ngày sửa sớm hơn ngày đăng làm schema mâu thuẫn).
- Tối đa 2 bài/ngày; hai bài cùng ngày không trùng giờ (09:00 và 15:00).
- Không em-dash. Giọng trung lập.
- Chỉ `git add` file mình sửa (không `-A`). Commit không ghi tên model. **Gộp push MỘT lần cuối phiên** vì Vercel Hobby chặn 100 deploy/ngày. Trước khi push: `npm run build` phải qua, `git pull --rebase origin main`.

## Báo cáo

Ghi `docs/duyet-bai/<YYYY-MM-DD>-<nhóm>.md`, mỗi bài một khối:

```
### <slug> (đăng <ngày giờ>)
- Trạng thái: ĐẠT / ĐÃ SỬA / LÙI NGÀY / RÚT LỊCH
- Số đã đổi: "<cũ>" -> "<mới>" (nguồn: URL) ...
- Media: <số ảnh>, <đổi gì>
- Cổng: new-article, media, vn-signal, affiliate
- Cần anh Long: <nếu có>
```
