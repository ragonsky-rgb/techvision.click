# Content Radar techvision.click, tuần 13/08/2026

> Bản nghiên cứu chủ đề + đối thủ cho team Content, chạy ngày 13/08/2026 (giờ Việt Nam). Đã dedup với 666 bài markdown hiện có và đối chiếu luật trong `AGENTS.md`. Không dùng em-dash theo §0.

## 0. Điều kiện phiên chạy và những gì làm được

Phiên chạy trên môi trường đám mây (Claude Code on the web). Ba giới hạn kỹ thuật cần team biết trước khi merge:

1. **Mạng ngoài bị chặn ở tầng proxy egress.** Mọi kết nối trực tiếp tới `i.ytimg.com`, `youtube.com` và các trang báo đều bị trả 403 ở bước CONNECT (đã xác nhận qua `curl -sS "$HTTPS_PROXY/__agentproxy/status"`). Hệ quả: **`node scripts/check-media.mjs` không chạy đủ trong phiên này** vì script fetch từng URL media. Phần offline của script (media dồn cụm) đã được tách ra chạy riêng và cho kết quả **0 bài dồn cụm trên 668 file**.
2. **Media chưa verify bằng kích thước.** Toàn bộ video dùng trong bài mới là video thật xuất hiện trong kết quả tìm kiếm YouTube ngày 12 và 13/08, đúng chủ đề. Để loại rủi ro ảnh xám của `maxresdefault` (§4), bài mới dùng **`hqdefault.jpg`** vốn luôn tồn tại. Thứ chưa kiểm được là **video có cho nhúng hay không**, nên team phải chạy `check-media.mjs` trên máy có mạng trước khi đẩy lên production. Danh sách ID ở mục 5.
3. **GSC radar không chạy được.** `scripts/gsc/gsc.mjs` thiếu `googleapis` và không có `token.json` trong môi trường này (đúng theo §7, file đã gitignore). Vì vậy phần chọn chủ đề dựa trên **tìm kiếm web + dedup slug + đối chiếu khoảng trống nội dung của site**, không có dữ liệu striking-distance.

**Nhánh làm việc:** phiên này bị môi trường ràng buộc phải phát triển trên nhánh `claude/cool-knuth-pjfs9p`, không được push thẳng `main`. Điều này **trái với quy tắc vàng §0** (chỉ `main` mới deploy). Bài sẽ **không tự lên site** cho tới khi anh Long merge nhánh này về `main`. Xem mục 5.

## 1. Radar xu hướng công nghệ Việt Nam tuần này

Bốn cụm chủ đề có nhiệt cao nhất tại Việt Nam trong tuần 07 tới 13/08/2026:

- **Made by Google 2026 là tâm điểm tuyệt đối.** Sự kiện diễn ra tại New York ngày 12/08 giờ Mỹ, tức rạng sáng 13/08 giờ Việt Nam, ra mắt cùng lúc Pixel 11, Pixel 11 Pro, Pro XL, Pro Fold, Pixel Watch 5 và một sản phẩm hoàn toàn mới là Pixel Tag. Đây là sóng tìm kiếm mạnh nhất trong ngày và kéo dài ít nhất tới cuối tuần.
- **Chủ đề tăng giá vì khủng hoảng chip nhớ chuyển từ máy tính sang điện thoại.** Google là hãng lớn đầu tiên nói thẳng lý do tăng giá 100 USD cho cả dòng Pixel 11 là chi phí RAM, dẫn số liệu Morgan Stanley: 2,80 USD mỗi GB năm 2025 lên 12 USD năm 2026. Trong nước, hệ thống bán lẻ ghi nhận giá RAM gần gấp đôi, SSD tăng khoảng 50%, PC lắp ráp và laptop tăng 10 tới 30% tùy phân khúc, RAM DDR5 16GB bus 5600 tới 6000 hiện giao dịch quanh 1,8 tới 2 triệu đồng.
- **Đợt máy hiệu năng cao Trung Quốc vừa ra mắt.** Redmi K100 Pro và K100 Pro Max ra mắt 11/08 với pin 8.580mAh và 9.070mAh, sạc 100W có dây kèm 50W không dây, màn 185Hz, camera 200MP, giá từ 14,36 triệu quy đổi. Vivo S2 mở bán cùng ngày.
- **Máy gập Samsung vào giai đoạn giao hàng tại Việt Nam.** Galaxy Z Fold8 và Z Fold8 Ultra đã lên kệ trong nước, giá niêm yết Z Fold 8 từ 46,99 triệu, mở bán rộng 18/08. Đây là nền so sánh sẵn có cho mọi bài về máy gập.

Nguồn: [Google Blog (Pixel 11)](https://blog.google/products-and-platforms/devices/pixel/google-pixel-11-pro-xl/), [Google Blog (Pixel Tag)](https://blog.google/products-and-platforms/devices/pixel/google-pixel-tag/), [PhoneArena (giá và RAM Pixel 11)](https://www.phonearena.com/news/google-pixel-11-pro-xl-official_id182542), [Engadget (Pro và Pro XL ít RAM hơn)](https://www.engadget.com/2234960/pixel-11-series-cost-more-but-less-ram/), [Sforum (Redmi K100 Pro ra mắt)](https://cellphones.com.vn/sforum/redmi-k100-pro-ra-mat), [CafeF (khủng hoảng chip nhớ)](https://cafef.vn/khung-hoang-chip-nho-toan-cau-khien-gia-laptop-ram-ssd-tang-phi-ma-nguoi-dung-viet-phai-cho-den-khi-nao-188260704150124577.chn).

## 2. Phân tích 3 đối thủ lớn nhất (tuần 07 tới 13/08/2026)

Không bịa số tương tác: phiên này không truy cập được analytics của đối thủ, cũng không có gói Ahrefs đủ quyền để đo traffic (tài khoản trả `Insufficient plan` ở các lần chạy trước). Bảng dưới đọc từ chính những tuyến bài họ đang đẩy.

| Đối thủ | Tuyến bài đẩy mạnh tuần này | Khoảng trống mình khai thác được |
|---|---|---|
| **GenK** | Galaxy Z Fold8 Ultra ra mắt Việt Nam và loạt bài đánh giá, Redmi 17 mở bán trong nước từ 7/8, TS Lê Viết Quốc rời Google lập startup, mô hình AI mới đạt 97% SWE-bench, tổng hợp khuyến mại ngày đôi 8/8 | Họ đưa tin nhanh, bài ngắn, mạnh mảng tin ngành và AI. Mình thắng ở bài giải thích đầy đủ có bảng thông số, FAQ và **giá niêm yết thật tại Việt Nam**, thứ bài tin nhanh của họ thường bỏ qua. |
| **Sforum (cellphones.com.vn)** | Chuỗi bài Redmi K100 dày đặc từ rò rỉ tới ra mắt (ít nhất 8 bài trong hai tuần), bảng giá bán lẻ, chuyên đề giá card đồ họa | Họ nhanh và dày vì gắn với hệ thống cửa hàng, nhưng bài bị chẻ nhỏ theo từng tin rò rỉ. Mình thắng bằng một bài tổng đầy đủ cho mỗi sản phẩm, cộng cụm internal link theo chủ đề để giữ người đọc lại. |
| **Tinh tế** | Đã có bài Pixel Tag ra mắt giá từ 29 USD ngay trong ngày, tuyến thảo luận cộng đồng về thẻ định vị Find My và Find Hub | Họ mạnh trải nghiệm cầm máy và thảo luận. Mình thắng bằng góc **mua tại Việt Nam thì trả bao nhiêu và dùng được tới đâu**, ví dụ đối chiếu trực tiếp với giá AirTag 2 đang bán trong nước và nhu cầu gắn định vị vào xe máy. |

**Định vị chung theo §0:** không đua breaking news. Vào sau một nhịp nhưng đầy đủ nhất, luôn có mốc giá Việt Nam thật và cụm internal link, để thắng ở nhóm truy vấn "giá bao nhiêu", "về Việt Nam khi nào", "có nên mua".

## 3. Năm chủ đề đề xuất cho tuần

Ba chủ đề đầu **đã làm xong trong nhánh này**. Hai chủ đề cuối là việc cho team, kèm dàn ý sẵn.

### Bài 1 (ĐÃ VIẾT): Pixel 11 giá bao nhiêu, bao giờ về Việt Nam

- **Vì sao:** site đã có 3 bài Pixel 11 nhưng cả ba đều là bài rò rỉ trước sự kiện và **không bài nào nhắc một chữ nào về giá Việt Nam** (đếm được 0 lần xuất hiện từ "triệu"). Nhóm truy vấn "Pixel 11 giá bao nhiêu" và "Pixel 11 bao giờ về Việt Nam" đang bỏ trống hoàn toàn, trong khi sự kiện vừa kết thúc vài giờ trước.
- **Tiêu đề:** `Pixel 11 giá bao nhiêu, bao giờ về Việt Nam` (43 ký tự)
- **Slug:** `google-pixel-11-gia-ban-viet-nam-tensor-g6-2026`
- **Keyword chính:** pixel 11 giá bao nhiêu, giá pixel 11 việt nam, pixel 11 bao giờ về việt nam, pixel 11 pro giá
- **Neo VN:** Google không phân phối chính hãng tại Việt Nam nên máy trong nước là hàng nhập, chỉ có bảo hành cửa hàng; giá tham chiếu đời Pixel 10 tại đại lý nhập khẩu là 20,2 / 24 / 33,5 triệu; hàng thường về sau 2 tới 4 tuần kể từ 20/08; đối chiếu Pro Fold với Galaxy Z Fold 8 giá chính hãng từ 46,99 triệu.
- **Dàn ý (6 H2):** 1) Bảng giá bốn máy và mức tăng so với Pixel 10. 2) Vì sao tăng giá: khủng hoảng RAM đã chạm tới điện thoại. 3) Tensor G6 và những gì thực sự đổi ở phần cứng. 4) Camera và cụm tính năng AI (Magic Capture, Camera Looks, HiLight). 5) Pro Fold đặt cạnh Galaxy Z Fold 8 đang bán tại Việt Nam. 6) Mua tại Việt Nam thế nào.
- **Số đo:** 1.828 từ, 5 media distinct, 3 internal link, 6 stats, 5 FAQ.

### Bài 2 (ĐÃ VIẾT): Pixel Tag giá bao nhiêu, dùng tại Việt Nam được không

- **Vì sao:** sản phẩm hoàn toàn mới, site có **0 bài** về thẻ định vị Android (grep "airtag", "find my", "định vị" chỉ ra 1 bài về vali thông minh). Đây là món rẻ nhất sự kiện nhưng có nhu cầu thật rất lớn tại Việt Nam, nơi thẻ định vị được mua nhiều qua sàn thương mại điện tử để gắn xe máy. Tinh tế đã đăng tin, nhưng chưa ai làm góc "dùng ở Việt Nam được tới đâu".
- **Tiêu đề:** `Pixel Tag giá bao nhiêu, dùng tại Việt Nam được không` (53 ký tự)
- **Slug:** `google-pixel-tag-the-dinh-vi-29-usd-doi-thu-airtag-2026`
- **Keyword chính:** pixel tag, pixel tag giá bao nhiêu, thẻ định vị android, airtag 2 giá, định vị xe máy
- **Neo VN:** AirTag 2 đang bán tại Việt Nam 890.000 đồng một chiếc và 2,99 triệu cho gói 4, đối chiếu trực tiếp với 29 USD và 99 USD của Pixel Tag; phân tích nhu cầu gắn định vị xe máy tại Việt Nam và giới hạn của thẻ không có GPS; lưu ý phần lớn máy tầm trung bán trong nước không có UWB nên mất tính năng dò hướng.
- **Dàn ý (6 H2):** 1) Pixel Tag có gì, giá bao nhiêu. 2) UWB và Channel Sounding: dò hướng chứ không chỉ báo gần xa. 3) Đặt cạnh AirTag 2 đang bán tại Việt Nam. 4) Mạng Find Hub tại Việt Nam dày tới đâu. 5) Gắn vào xe máy, hành lý hay ví: dùng được tới đâu. 6) Có nên chờ.
- **Số đo:** 1.808 từ, 5 media distinct, 2 internal link, 6 stats, 5 FAQ.

### Bài 3 (ĐÃ NÂNG CẤP, giữ nguyên slug): Pixel Watch 5 ra mắt chính thức

- **Vì sao:** site có bài viết ngày 27/07 dựa trên hồ sơ rò rỉ Google Play Console, và bài đó **khẳng định sai** rằng Google giữ nguyên chip Qualcomm SW5100 từ 2023. Thực tế máy chuyển sang nền tảng Snapdragon W5 Gen 2 Accelerated, nhanh hơn khoảng 20%. Tiêu đề cũ còn ghi "lộ cấu hình trước ngày 12/8", tức đã hết hạn. Theo §0d, chủ đề đã có bài thì nâng cấp bài đó thay vì tạo URL cạnh tranh.
- **Tiêu đề mới:** `Pixel Watch 5 ra mắt: giá 399 USD, thêm loạt chỉ số sức khỏe` (60 ký tự), **giữ nguyên slug** theo §8b.
- **Đã thay đổi:** viết lại deck, tldr, spec-box và 3 mục thân bài theo công bố chính thức; thêm mục "Tin đồn nào trúng, tin đồn nào trật" nói rõ chỗ bài cũ sai; thêm mục chỉ số sức khỏe mới (huyết áp hằng tháng, kháng insulin, chất lượng hô hấp khi ngủ, GPS chính xác gấp 2 lần); cập nhật giá chính thức 399 USD bản 41mm và 429 USD bản 45mm; đổi 3 stats, 3 FAQ, `sourceUrl`; bump `dateModified` sang 13/08.
- **Đồng bộ anchor:** tiêu đề đổi nên đã sửa `related` ở 3 bài trỏ tới nó (`macbook-air-m5-...`, `do-phan-giai-man-hinh-...`, `amazfit-t-rex-ultra-2-...`) cho khớp tiêu đề mới, theo cảnh báo anchor lệch ở §8b.
- **Không tính vào trần nhịp** vì không phải bài mới.

### Bài 4 (VIỆC CỦA TEAM, viết 14 tới 16/08): Pixel 11 Pro Fold đấu Galaxy Z Fold 8 tại Việt Nam

- **Vì sao:** đây là chỗ duy nhất trong bộ sản phẩm Google năm nay có đối thủ **đang bán chính hãng tại Việt Nam với giá niêm yết rõ ràng**, nên bài dễ neo VN nhất và đúng nhóm truy vấn so sánh máy gập vốn có lượng tìm ổn định. Bài 1 chỉ dành 1 mục cho Pro Fold, còn dư đất cho một bài riêng đi sâu.
- **Vì sao phiên này chưa viết:** trần nhịp ngày 13/08 đã đầy 2 bài (§0a). Để dồn vào cùng ngày là vi phạm đúng thứ đã khiến 480 bài bị gỡ khỏi index hồi tháng 7.
- **Tiêu đề gợi ý:** `Pixel 11 Pro Fold hay Galaxy Z Fold 8, mua máy gập nào` (53 ký tự). ⚠️ Lưu ý: **không đặt slug theo mẫu `-hay-...-chon-loai-nao`**, mẫu này bị `check-cadence.mjs` chặn theo §0a. Slug gợi ý an toàn: `pixel-11-pro-fold-vs-galaxy-z-fold-8-gia-viet-nam-2026`.
- **Neo VN bắt buộc:** giá niêm yết Galaxy Z Fold 8 từ 46,99 triệu, bản 512GB 52,99 triệu, bản 1TB 64,99 triệu; giá thực trả sau ưu đãi tại đại lý; đối chiếu với mức quy đổi 1.899 USD của Pro Fold cộng chi phí hàng nhập; chi phí thay màn hình máy gập tại Việt Nam nếu tra được số thật.
- **Dàn ý (5 H2):** 1) Bảng đối chiếu thông số và giá thực tại Việt Nam. 2) Độ mỏng và nếp gấp: 10,1mm gập và 4,8mm mở của Pro Fold so với Z Fold 8. 3) Camera và phần mềm, chỗ Pixel mạnh nhất. 4) Bảo hành và hậu mãi, chỗ Samsung thắng tuyệt đối tại Việt Nam. 5) Ai nên chọn máy nào.

### Bài 5 (VIỆC CỦA TEAM, là REFRESH chứ không phải bài mới): cụm bài giá RAM và SSD, cập nhật số liệu Việt Nam tháng 8

- **Vì sao đây là refresh:** site đã có ít nhất 4 bài chồng lấn chủ đề này (`gia-ram-ssd-tang-vot-2026-co-nen-mua-laptop-pc-luc-nay`, `gia-ram-dram-tang-them-20-phan-tram-quy-3-2026-samsung-kien`, `gia-laptop-tang-30-phan-tram-khung-hoang-ram-ai-2028-nen-mua-gi`, `rtx-5090-gia-tang-vot-khung-hoang-dram-2026`). Thêm bài thứ năm là tự cạnh tranh với chính mình. Đây cũng là lý do phiên này **không** viết bài "máy tính" mới dù anh có yêu cầu tuyến đó: mọi góc còn nóng đều đã có bài, và chủ đề nóng nhất tuần lại nằm ở điện thoại.
- **Việc cần làm:** chọn `gia-ram-ssd-tang-vot-2026-co-nen-mua-laptop-pc-luc-nay` làm bài trụ, cập nhật số liệu Việt Nam tháng 8/2026 gồm: giá RAM tại hệ thống bán lẻ trong nước gần gấp đôi cùng kỳ, SSD tăng khoảng 50%, PC lắp ráp và laptop tăng 10 tới 30% tùy phân khúc, RAM DDR5 16GB bus 5600 tới 6000 giao dịch quanh 1,8 tới 2 triệu đồng, thanh 32GB vượt 3 triệu. Thêm mốc quốc tế mới: chi phí mỗi GB RAM 2,80 USD năm 2025 lên 12 USD năm 2026 theo Morgan Stanley, dẫn qua công bố của Google khi giải thích lý do tăng giá Pixel 11. Bump `dateModified`, giữ nguyên slug. Ba bài còn lại trỏ internal link về bài trụ.
- **Sau khi refresh nhớ chạy** `node scripts/fix-stale-anchors.mjs --write` theo §8b.
- **Không tốn trần nhịp.**

## 4. Vì sao batch tuần này là 2 bài mới chứ không phải 4 hay 5

`AGENTS.md` §0c cho phép batch nhỏ hơn 4 bài khi không đủ chủ đề mới sau dedup, với điều kiện ghi rõ lý do. Ở đây lý do là **trần nhịp cứng §0a**, không phải thiếu chủ đề:

- Tuần ISO 2026-W33 (10 tới 16/08) **trước phiên này đã có 5 bài**: ngày 10/08 hai bài, 11/08 hai bài, 12/08 một bài. Trần tuần là 8, tức chỉ còn **3 suất**.
- Trần ngày là 2 bài. Ngày 13/08 chưa có bài nào nên phiên này dùng đúng **2 suất**, đưa tuần lên 7 trên 8.
- **Cố tình chừa lại 1 suất** cho ngày 14 tới 16/08, để bài 4 trong danh sách trên có chỗ, hoặc để dành cho tin nóng bất ngờ. Nếu viết đủ 5 bài như yêu cầu, tuần này sẽ có 10 bài trên trần 8 và `check-cadence.mjs` sẽ chặn commit.
- **Bù lại bằng 1 bài nâng cấp** (Pixel Watch 5), thứ không tốn trần nhịp mà vẫn sửa được một khẳng định sai đang nằm trên site, cộng 1 việc refresh cụm bài RAM đã ghi dàn ý sẵn ở mục 3.

Bỏ bài esports theo §0c vì anh nêu rõ tuyến cần là điện thoại, máy tính và chủ đề hot khác.

Kết quả kiểm tra sau batch: `check-cadence.mjs` báo **ĐẠT**, `check-vn-signal.mjs --since 2026-08-13` báo **2/2 bài có điểm dữ liệu Việt Nam**, phần offline của `check-media.mjs` báo **0 bài media dồn cụm trên 668 file**, `npx astro build` chạy sạch **668 trang**.

## 5. Việc còn lại cho team (làm trên máy có mạng)

```bash
# 1. Lấy nhánh về và merge lên main, vì chỉ main mới deploy (§0)
git fetch origin claude/cool-knuth-pjfs9p
git checkout main && git pull --rebase origin main
git merge claude/cool-knuth-pjfs9p

# 2. BẮT BUỘC: verify media, đây là bước phiên cloud không chạy được
node scripts/check-media.mjs        # phải ra 0 ảnh lỗi, 0 video lỗi, 0 bài dồn cụm
node scripts/check-cadence.mjs
node scripts/check-vn-signal.mjs --since 2026-08-13

# 3. Nếu có video không cho nhúng thì đổi ID rồi chạy lại tới khi sạch

# 4. Build và đẩy
node scripts/build-legacy-index.mjs && node scripts/build-blog.mjs && npx astro build
git push origin main

# 5. Đẩy index
node scripts/indexnow.mjs \
  https://techvision.click/articles/google-pixel-11-gia-ban-viet-nam-tensor-g6-2026.html \
  https://techvision.click/articles/google-pixel-tag-the-dinh-vi-29-usd-doi-thu-airtag-2026.html \
  https://techvision.click/articles/google-pixel-watch-5-lo-cau-hinh-gia-399-usd-made-by-google-2026.html \
  https://techvision.click/blog.html
node scripts/gsc/gsc.mjs sitemap sitemap-news.xml
```

**Danh sách ID video cần verify** (tất cả đang dùng `hqdefault.jpg` nên không dính lỗi ảnh xám, thứ cần kiểm là video còn sống và **cho nhúng**):

- Bài Pixel 11: `o4SSoURPODY` (hero), `GL93e6SKtlM`, `BJiwWzPbbVw`, `dPlvFfMByVQ`, `NDNEZNUOi40` (iframe).
- Bài Pixel Tag: `hK9fypJKHyY` (hero), `Eyv2ppAbr9I`, `p5wWCS1NqNE`, `Vh-mEhb6qdQ`, `zJYVD09PPNE` (iframe).
- Bài Pixel Watch 5 giữ nguyên media cũ, không cần verify lại.

**Việc nên làm thêm nếu có thời gian:** dựng ảnh chia sẻ riêng cho 2 bài mới bằng `scripts/make-article-og.py` rồi khai `ogImage`, để khi chia sẻ lên mạng xã hội không lấy thumbnail YouTube của người khác làm ảnh đại diện. Bài Pixel Watch 5 đã có sẵn `ogImage`.
