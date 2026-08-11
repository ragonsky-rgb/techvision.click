# Content Radar techvision.click, tuần 11/08/2026

> Bản nghiên cứu chủ đề + đối thủ cho team Content, chạy ngày 11/08/2026. Đã dedup với 665 bài markdown hiện có và đối chiếu luật trong `AGENTS.md`. Không dùng em-dash theo §0.

## 0. Điều kiện phiên chạy và những gì đã làm được

Phiên chạy trên môi trường đám mây (Claude Code on the web). Khác với bản radar ngày 10/08, lần này **đã viết và build được bài thật**, không chỉ dừng ở bản nháp. Ba giới hạn kỹ thuật vẫn còn và cần team xử lý nốt trước khi bài lên production:

1. **Mạng ngoài bị chặn ở tầng proxy.** Mọi kết nối HTTP trực tiếp tới `i.ytimg.com`, `youtube.com` và các trang báo đều trả 403 ở bước CONNECT. Hệ quả: **`node scripts/check-media.mjs` không chạy đạt trong phiên này** vì script fetch từng URL media. Phần offline của script (media dồn cụm) đã được chạy riêng và cho kết quả **0 bài dồn cụm**.
2. **Media lấy qua công cụ tìm kiếm, chưa verify bằng kích thước.** Toàn bộ video trong bài mới là video thật, đúng chủ đề, lấy từ kết quả tìm kiếm YouTube trong ngày. Để loại bỏ rủi ro ảnh xám của `maxresdefault` (§4), bài mới dùng **`hqdefault.jpg`** vốn luôn tồn tại ở mọi video. Vẫn còn một thứ chưa kiểm được là **video có cho nhúng hay không**, nên team phải chạy `check-media.mjs` trên máy có mạng trước khi merge.
3. **GSC radar không chạy được.** `scripts/gsc/gsc.mjs` thiếu `googleapis` và không có `token.json` trong môi trường này (file đã gitignore đúng theo §7). Vì vậy phần chọn chủ đề dựa trên **tìm kiếm web + dedup slug**, không có dữ liệu striking-distance. Ahrefs MCP có kết nối nhưng gói tài khoản trả về `Insufficient plan`, nên cũng không lấy được volume và KD.

**Nhánh làm việc:** phiên này bị môi trường ràng buộc phải phát triển trên nhánh `claude/cool-knuth-kgtcbm`, không được push thẳng `main`. Điều này **trái với quy tắc vàng §0** (chỉ `main` mới deploy). Vì vậy bài sẽ **không tự lên site** cho tới khi anh Long merge nhánh này về `main`. Đây là việc bắt buộc phải làm tay, xem mục 5.

## 1. Radar xu hướng công nghệ Việt Nam tuần này

Bốn cụm chủ đề đang có nhiệt cao nhất tại Việt Nam trong tuần 07 tới 12/08/2026:

- **Máy gập Samsung vào giai đoạn giao hàng.** Galaxy Z Fold8, Z Fold8 Ultra và Z Flip8 ra mắt tại Unpacked London 22/07, mở đặt trước tại Việt Nam cùng ngày và **bắt đầu giao máy từ 08/08**. Giá niêm yết trải từ 31,99 tới 67,99 triệu đồng, giá thực trả tại đại lý thấp hơn niêm yết khoảng 4,5 triệu. Đây là nhóm từ khóa "giá bao nhiêu" đang nóng nhất tuần.
- **Đợt ra mắt điện thoại hiệu năng cao ngày 11/08.** Redmi công bố K100 Pro và **K100 Pro Max** tại Trung Quốc với pin 9.070mAh, màn OLED 185Hz đỉnh 4.500 nit, camera 200MP, giá từ 4.199 tệ. Cùng ngày, Vivo mở bán **Vivo S2**, hồi sinh dòng S sau 7 năm với pin 7.050mAh và chuẩn IP69.
- **Sự kiện Made by Google 12/08.** Pixel 11, Pixel 11 Pro, Pro XL và Pro Fold ra mắt kèm mở đặt trước ngay trong ngày. Báo trong nước đã đưa giá dự kiến quy đổi 23,5 / 29 / 34,5 / 50 triệu đồng. Sóng tìm kiếm "Pixel 11 giá Việt Nam" sẽ dâng ngay sau sự kiện.
- **Khủng hoảng chip nhớ đẩy giá thiết bị lên.** DRAM hợp đồng tăng 93 tới 98% trong quý 1 và thêm 58 tới 63% quý 2/2026; NAND tăng 70 tới 75% quý 2; UFS 3.1 256GB tăng 103%. Hệ quả trực tiếp: giá laptop, smartphone và card đồ họa tại Việt Nam tiếp tục leo thang, Redmi K100 bị đồn tăng giá tới 54% so với đời trước.

Nguồn: [VnExpress (giá Z Fold8)](https://vnexpress.net/galaxy-z-fold8-kieu-dang-moi-gia-tu-47-trieu-dong-5100146.html), [Dân trí (Z Fold8 lên kệ)](https://dantri.com.vn/cong-nghe/galaxy-z-fold8-len-ke-tai-viet-nam-20260808004339216.htm), [GSMArena (K100 Pro Max)](https://www.gsmarena.com/xiaomi_redmi_k100_pro_max_5g-14865.php), [Sforum (Vivo S2)](https://cellphones.com.vn/sforum/vivo-s2-ra-mat), [CafeF (khủng hoảng chip nhớ)](https://cafef.vn/khung-hoang-chip-nho-toan-cau-khien-gia-laptop-ram-ssd-tang-phi-ma-nguoi-dung-viet-phai-cho-den-khi-nao-188260704150124577.chn), [VnExpress (giá DRAM)](https://vnexpress.net/gia-dram-du-bao-tang-63-trong-quy-ii-2026-5057878.html).

## 2. Phân tích 3 đối thủ lớn nhất (tuần 07 tới 11/08/2026)

Không bịa số tương tác: phiên này không truy cập được analytics của đối thủ, cũng không có gói Ahrefs để đo traffic. Bảng dưới đọc từ những tuyến bài họ đang đẩy trên trang tin.

| Đối thủ | Tuyến bài đang đẩy mạnh tuần này | Khoảng trống mình khai thác được |
|---|---|---|
| **Sforum (cellphones.com.vn)** | Trang "hàng sắp về", bảng giá điện thoại giảm sâu tháng 8, bài "Vivo S2 cấu hình giá bán" lên rất sớm, chuyên đề "giá card đồ họa 2026 khi nào giảm" | Họ mạnh về bảng giá bán lẻ và luôn nhanh vì gắn với hệ thống cửa hàng. Mình thắng ở phần phân tích lựa chọn cấu hình nào, so sánh chéo với máy đang bán tại VN và cụm internal link theo chủ đề. |
| **GenK** | Vertu AlphaFold mở bán VN, MacBook Pro M5 ra mắt VN, Intel Core Ultra 7 251HX kèm RTX 5070 12GB, tổng hợp rò rỉ Redmi K100 | Họ đưa tin nhanh, bài ngắn, ít số liệu giá VN. Mình thắng bằng bài giải thích đầy đủ có bảng thông số, FAQ và giá niêm yết thật tại VN. |
| **VnReview / Tinh tế** | Bảng giá Galaxy Z series 2026, "Tạm biệt Google Assistant", trên tay Redmi K100 Pro | Họ mạnh trải nghiệm cầm máy và thảo luận cộng đồng. Mình thắng bằng góc "mua tại VN thì trả bao nhiêu", đối chiếu giá niêm yết với giá thực trả tại đại lý. |

**Định vị chung theo §0:** không đua breaking news. Vào sau một nhịp nhưng đầy đủ nhất, luôn có bảng giá VN thật và cụm internal link, để thắng ở nhóm truy vấn "giá bao nhiêu", "cấu hình", "có nên mua".

## 3. Năm chủ đề đề xuất cho tuần

Ba chủ đề đầu **đã viết xong và nằm trong nhánh này**. Hai chủ đề cuối là việc cho team, kèm dàn ý sẵn.

### Bài 1 (ĐÃ VIẾT): Galaxy Z Fold8, Flip8 giá tại Việt Nam
- **Vì sao:** máy vừa tới tay người mua 08/08, giá niêm yết chính hãng đã chốt và giá thực trả tại đại lý thấp hơn tới 4,5 triệu. Đúng nhóm truy vấn "giá bao nhiêu" nóng nhất tuần. Trước đó site mới chỉ có 1 bài rò rỉ về Z Fold8 Ultra, chưa có bài giá.
- **Tiêu đề:** `Galaxy Z Fold8 giá bao nhiêu tại Việt Nam, đã lên kệ 8/8` (56 ký tự)
- **Slug:** `galaxy-z-fold8-flip8-gia-viet-nam-len-ke-thang-8-2026`
- **Keyword chính:** galaxy z fold8 giá bao nhiêu, giá galaxy z fold8 việt nam, galaxy z flip8 giá
- **Neo VN:** bảng giá 7 cấu hình từ 31,99 tới 67,99 triệu, ngày giao máy 08/08, hạn ưu đãi 17/08, giá thực trả ghi nhận tại đại lý ngày 10/08.
- **Dàn ý (5 H2):** 1) Bảng giá niêm yết và cách Samsung xếp bậc. 2) Giá thực trả tại đại lý thấp hơn bao nhiêu. 3) Thay đổi rõ nhất: tỷ lệ màn hình và nếp gấp. 4) Ai nên mua bản nào. 5) Lưu ý trước khi xuống tiền.

### Bài 2 (ĐÃ VIẾT): Vivo S2 trở lại sau 7 năm
- **Vì sao:** máy mở bán đúng 11/08, hồi sinh một dòng đã vắng 7 năm, gộp ba thứ hiếm ở tầm trung là màn cong 1.5K, IP69 và pin 7.050mAh. Chưa có slug nào trùng.
- **Tiêu đề:** `Vivo S2 trở lại sau 7 năm: pin 7.050mAh, màn cong 1.5K` (54 ký tự)
- **Slug:** `vivo-s2-pin-7050mah-man-cong-15k-dimensity-7360-turbo-2026`
- **Keyword chính:** vivo s2, vivo s2 giá, vivo s2 pin 7050mah, điện thoại pin 7000mah
- **Neo VN:** máy chưa bán chính hãng trong nước nên bài neo bằng **so sánh với nhóm pin lớn đang bán tại VN** (Redmi 17 từ 5,99 triệu, Vivo V80, POCO M8 Power), đúng cách §0a-bis cho phép, kèm cảnh báo giá quy đổi không phải giá chính hãng.
- **Dàn ý (5 H2):** 1) Pin 7.050mAh và bài toán độ mỏng. 2) Màn AMOLED cong 1.5K và chuẩn IP69. 3) Dimensity 7360-Turbo đủ dùng tới đâu. 4) Đặt cạnh nhóm pin lớn đang bán tại VN. 5) Có nên chờ máy về Việt Nam.

### Bài 3 (ĐÃ NÂNG CẤP, giữ nguyên slug): Redmi K100 Pro Max ra mắt
- **Vì sao:** site đã có bài rò rỉ đăng 27/07 và bài đó **khẳng định sai** rằng bản Pro Max phải chờ tới 2027. Máy ra mắt thật ngày 11/08. Theo §0d, chủ đề đã có bài thì nâng cấp bài đó thay vì tạo URL cạnh tranh.
- **Tiêu đề mới:** `Redmi K100 Pro Max ra mắt: pin 9.070mAh, màn 185Hz, giá` (55 ký tự), giữ nguyên slug cũ theo §8b.
- **Đã thay đổi:** thêm mục cấu hình và giá chính thức, thêm mục "tin đồn nào đúng, tin đồn nào trật", sửa toàn bộ chỗ viết "được đồn" nay đã thành sự thật, cập nhật `stats`, 2 FAQ, `sourceUrl` sang GSMArena, bump `dateModified`.
- **Không tính vào trần nhịp** vì không phải bài mới.

### Bài 4 (VIỆC CỦA TEAM, viết SAU 12/08): Pixel 11 giá tại Việt Nam
- **Vì sao:** site có 2 bài Pixel 11 nhưng cả hai đều **không nhắc một chữ nào về giá Việt Nam** (đếm được 0 lần xuất hiện từ "triệu"), tức bỏ trống hoàn toàn nhóm truy vấn "Pixel 11 giá bao nhiêu". Sự kiện 12/08 mở đặt trước ngay trong ngày.
- **Vì sao phiên này không viết:** sự kiện chưa diễn ra tại thời điểm chạy. Viết trước bằng giá dự kiến sẽ thành bài sai chỉ sau một ngày. Chờ có giá thật rồi viết.
- **Tiêu đề gợi ý:** `Pixel 11 giá bao nhiêu tại Việt Nam, khi nào bán` (46 ký tự)
- **Slug gợi ý:** `google-pixel-11-gia-ban-viet-nam-tensor-g6-2026`
- **Keyword chính:** pixel 11 giá việt nam, pixel 11 pro giá, pixel 11 bao giờ về việt nam
- **Neo VN bắt buộc:** giá xách tay hoặc chính hãng thực tế sau 12/08, so với Pixel 10 đang bán tại VN. Không có mốc giá VN thật thì đừng đăng (§0a-bis).
- **Dàn ý (5 H2):** 1) Giá từng bản và mốc bán tại VN. 2) Tensor G6 2nm khác gì G5. 3) Camera và tính năng AI đáng chú ý. 4) Mua xách tay hay chờ chính hãng. 5) So với Pixel 10 và nhóm cao cấp cùng tầm giá tại VN.

### Bài 5 (VIỆC CỦA TEAM): Refresh cụm bài giá RAM, SSD sang số liệu quý 3/2026
- **Vì sao đây là refresh chứ không phải bài mới:** site đã có ít nhất 4 bài chồng lấn chủ đề này (`gia-ram-ssd-tang-vot-2026-co-nen-mua-laptop-pc-luc-nay`, `gia-ram-dram-tang-them-20-phan-tram-quy-3-2026-samsung-kien`, `gia-laptop-tang-30-phan-tram-khung-hoang-ram-ai-2028-nen-mua-gi`, `rtx-5090-gia-tang-vot-khung-hoang-dram-2026`). Thêm bài thứ năm là tự cạnh tranh với chính mình. Đây cũng là lý do phiên này **không** viết bài "máy tính" mới dù anh có yêu cầu tuyến đó: mọi góc còn hot đều đã có bài.
- **Việc cần làm:** chọn 1 bài mạnh nhất trong 4 bài trên làm bài trụ, cập nhật số liệu mới (DRAM quý 1 tăng 93 tới 98%, quý 2 thêm 58 tới 63%; NAND quý 2 tăng 70 tới 75%; UFS 3.1 256GB tăng 103% lên 62,7 USD; RTX 5090 giá trung bình tăng 12%, có nơi 20% trong 3 tháng), bump `dateModified`, giữ nguyên slug. Ba bài còn lại trỏ internal link về bài trụ.
- **Sau khi refresh nhớ chạy** `node scripts/fix-stale-anchors.mjs --write` theo §8b.

## 4. Vì sao batch tuần này là 3 bài chứ không phải 4

`AGENTS.md` §0c cho phép batch nhỏ hơn 4 bài khi không kiếm đủ chủ đề mới sau khi dedup, với điều kiện ghi rõ lý do. Lý do cụ thể:

- **Bỏ bài esports** (§0c yêu cầu 1 bài): anh nêu rõ tuyến cần là điện thoại, máy tính và chủ đề hot khác, nên phiên này bám theo yêu cầu của anh thay vì tỷ lệ mặc định.
- **Bỏ bài máy tính:** đã rà 10 nhóm từ khóa (nvidia, arm, snapdragon-x, computex, ai-pc, npu, copilot, laptop-ai, ram, ssd) và mọi góc còn nóng đều đã có bài. Cụ thể: N1X và RTX Spark đã có 2 bài, Panther Lake có bài, MSI Claw 8 EX AI Plus có bài, laptop sinh viên tựu trường có bài, giá RAM và SSD có 4 bài. Viết thêm là tạo bài trùng, đúng thứ đã khiến 480 bài bị gỡ khỏi index hồi tháng 7.
- **Bù lại bằng 1 bài nâng cấp** (Redmi K100), thứ không tốn trần nhịp mà vẫn sửa được một khẳng định sai đang nằm trên site.

Trần nhịp sau batch này: tuần ISO 2026-W33 có 6 bài trên trần 8, ngày 12/08 có 2 bài trên trần 2. `node scripts/check-cadence.mjs` báo ĐẠT.

## 5. Việc còn lại cho team (làm trên máy có mạng)

```bash
# 1. Lấy nhánh về và merge lên main, vì chỉ main mới deploy (§0)
git fetch origin claude/cool-knuth-kgtcbm
git checkout main && git pull --rebase origin main
git merge claude/cool-knuth-kgtcbm

# 2. BẮT BUỘC: verify media, đây là bước phiên cloud không chạy được
node scripts/check-media.mjs        # phải ra 0 ảnh lỗi, 0 video lỗi, 0 bài dồn cụm
node scripts/check-cadence.mjs
node scripts/check-vn-signal.mjs --since 2026-08-12

# 3. Nếu có video không cho nhúng thì đổi ID rồi chạy lại tới khi sạch

# 4. Build và đẩy
node scripts/build-legacy-index.mjs && node scripts/build-blog.mjs && npx astro build
git push origin main

# 5. Đẩy index
node scripts/indexnow.mjs \
  https://techvision.click/articles/galaxy-z-fold8-flip8-gia-viet-nam-len-ke-thang-8-2026.html \
  https://techvision.click/articles/vivo-s2-pin-7050mah-man-cong-15k-dimensity-7360-turbo-2026.html \
  https://techvision.click/articles/redmi-k100-k100-pro-ro-ri-pin-9000mah-man-185hz-2026.html \
  https://techvision.click/blog.html
node scripts/gsc/gsc.mjs sitemap sitemap-news.xml
```

Danh sách ID video cần verify trong 2 bài mới: `T2f4uHJ1OQk`, `-77Gy0T7pOY`, `67wdNH1KMqQ`, `hgLxsUBfZZU`, `cop19hRcFQw` (bài Galaxy Z) và `zilNQMrvMfA`, `11ia1MzjXn0`, `zsKjTPMxOhQ`, `cs01taDHm2g`, `09QBys1liHw` (bài Vivo S2). Tất cả đang dùng `hqdefault.jpg` nên không dính lỗi ảnh xám, thứ cần kiểm là **video còn sống và cho nhúng**.
