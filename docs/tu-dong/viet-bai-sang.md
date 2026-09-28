# Viết bài buổi sáng (app Mac, 08:30 hằng ngày)

Chạy trên máy anh Long (mạng không bị chặn). Repo: `~/techvision-click`. Làm tự động từ đầu
tới cuối, không hỏi lại. Không có việc thật thì dừng và báo một dòng.

## 1. Xác định hôm nay được viết mấy bài (0, 1 hoặc 2)

```bash
cd ~/techvision-click && git pull --rebase origin main
node scripts/release-scheduled.mjs --dry
grep -l "scheduled: true" src/content/articles/*.md | xargs grep -h "^datePublished" | cut -c17-26 | sort | uniq -c
```

- Chỉ hẹn vào 7 ngày tới (từ ngày mai tới ngày thứ 7). Mỗi ngày tối đa 2 bài, mỗi tuần ISO tối đa 8 bài
  (tính cả bài đã đăng trong tuần đó).
- Không còn chỗ trong 7 ngày tới thì DỪNG, không viết. (Mục đích: bài lên trong vòng 1 tuần kể từ lúc viết,
  không để dồn hàng đợi như phiên cloud cũ.)
- Tối đa 2 bài mỗi sáng dù còn nhiều chỗ.

## 2. Chọn chủ đề

Đọc file mới nhất trong `docs/radar/` (và file hôm trước nếu còn mục "CHUA VIET").
Lấy chủ đề ưu tiên cao nhất còn "CHUA VIET". Tin nóng quá 48h mà chưa viết thì đánh "BO: nguội".
Lọc trùng lại một lần bằng `grep -ril` trong `src/content/articles/`.
Không có radar hoặc không còn chủ đề đạt chuẩn thì dừng.

## 3. Viết (theo AGENTS.md, đọc lại §0, §0a, §0a-bis, §2, §3, §4 mỗi lần)

- Nguồn 3 lớp: đọc tận nguồn gốc (WebFetch/curl), ≥2 nguồn gốc cho số liệu chính.
- Giá Việt Nam: đọc TRỰC TIẾP trong ngày bằng `python3 scripts/gia/doc-gia.py <url>` (TGDĐ, CellphoneS,
  FPT Shop, trang hãng). Trang dựng bằng JS (nhà mạng, Shopee...) thì mở bằng trình duyệt tích hợp và đọc chữ.
  Ghi "giá đọc ngày DD/MM/YYYY". Không đọc được thì bỏ nhà bán đó, KHÔNG đoán, KHÔNG lấy giá từ tóm tắt tìm kiếm.
- Media: `python3 scripts/yt-tim.py "<từ khóa>"` rồi `bash scripts/yt-verify.sh <ID...>`.
  Chỉ dùng ID có max > 8000 byte (không thì hqdefault), oEmbed sống, `playableInEmbed:true` cho iframe,
  `used=0`. Đủ hero + 3 figure + 1 iframe, không dồn cụm.
- Frontmatter đủ §2, `ogImage` sinh bằng `python3 scripts/make-article-og.py <slug>`.
- `related` chỉ trỏ bài ĐANG index (gate chặn bài noindex); link tới bài hẹn lịch khác thì đặt trong thân bài.
- Hẹn lịch: `datePublished` giờ VN vào chỗ trống đã tính ở bước 1, `noindex: true`, `scheduled: true`.
  Bài tin nóng thì chọn chỗ sớm nhất.

## 4. Gate (phải qua hết trước khi commit)

```bash
node scripts/check-new-article.mjs <slug>
node scripts/check-media.mjs            # 0 ảnh lỗi, 0 video lỗi, 0 dồn cụm (tính cả bài cũ: có lỗi cũ thì sửa luôn)
node scripts/check-vn-signal.mjs --all  # bài mới không được nằm trong danh sách thiếu tín hiệu VN
node scripts/check-cadence.mjs          # KHONG DAT vì W35/W37 cũ là bình thường; tuần mới không được vượt
node scripts/release-scheduled.mjs --dry
node scripts/build-legacy-index.mjs && node scripts/build-blog.mjs && npx astro build
```

## 5. Commit và cập nhật radar

- Mỗi bài một commit lên `main` (bài + og card). Sửa "Trạng thái" trong file radar thành `DA VIET <slug>`
  và commit cùng. Không ghi tên model, không Co-Authored-By.
- `git pull --rebase origin main && git push origin main`.
- Báo cáo 3-5 dòng: tiêu đề, slug, giờ hẹn, nhà bán đọc được giá, gate.
