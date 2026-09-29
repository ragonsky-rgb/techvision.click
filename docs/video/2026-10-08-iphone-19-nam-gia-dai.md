# Video DÀI: iPhone 19 năm, từ 499 USD tới 103.999.000đ - đắt lên thật hay ảo giác?

- Loại: video dài ngang 16:9 (1920x1080), 2 phút 56 giây, kèm 1 Short dọc 17 giây làm mồi.
- Lịch dự kiến: 08/10/2026 (video dài 1 tháng/lần, thử nghiệm). **CHƯA đăng, chờ anh Long duyệt.**
- Cách dựng: theo repo `latent-spaces/brag` (skill `/brag-slim`): mỗi khung hình là hàm thuần của thời gian,
  vẽ bằng HTML (`out/iphone19/index.html` + `data.js`), chụp bằng Chrome headless tắt GPU
  (`techvision-video-kit/scripts/brag_render.mjs`), ghép giọng bằng `scripts/iphone19_data.py`.
- Vì sao chọn chủ đề này (29/09/2026): Shorts Apple/iPhone là nhóm duy nhất có view trên kênh (iPhone 1 vs 15 Pro
  11 nghìn view); GSC techvision đang đứng đầu bởi trang giá iPhone 18; và câu hỏi "iPhone có đắt lên không"
  có đáp án ngược cảm giác, đủ sức giữ người xem 2-3 phút.

## Số liệu (đọc tận gốc 29/9/2026)

Bảng đầy đủ + 50 đường dẫn nguồn: `techvision-video-kit/out/iphone19/iphone-prices.md`.
Phương pháp: giá khởi điểm tại Mỹ, bản KHÔNG kèm hợp đồng, nhân với CPI-U (BLS, series CUUR0000SA0)
tháng 8/2026 = 334,980 chia CPI trung bình năm ra mắt.

| Năm | Máy | Giá quảng cáo | Giá thật | Quy ra tiền 2026 |
|---|---|---|---|---|
| 2007 | iPhone 4GB | 499 USD | 499 USD | 806 USD |
| 2008 | iPhone 3G | 199 USD (hợp đồng 2 năm) | 599 USD | 932 USD |
| 2010 | iPhone 4 | 199 USD (hợp đồng) | 649 USD | 997 USD |
| 2016 | iPhone 7 | 649 USD | 649 USD | 906 USD |
| 2017 | iPhone X | 999 USD | 999 USD | 1.365 USD |
| 2018 | iPhone XS Max | 1.099 USD | 1.099 USD | **1.466 USD (đỉnh)** |
| 2020 | iPhone 12 | 799 USD (đã trừ 30 USD nhà mạng) | 829 USD | 1.073 USD |
| 2025 | iPhone 17 | 799 USD (đã trừ 30 USD) | 829 USD | **863 USD** |
| 2025 | iPhone 17 Pro Max | 1.199 USD | 1.199 USD | 1.248 USD |
| 2026 | iPhone 18 Pro / Pro Max | 1.199 / 1.299 USD | | |
| 2026 | iPhone Duo | từ 1.999 USD, bản 2TB khoảng 3.000 USD | | |

Việt Nam: iPhone 18 Pro Max từ 41.999.000đ; iPhone Duo 2TB 103.999.000đ (bài techvision 10/9 và 16/10).
Bộ nhớ khởi điểm 4GB -> 256GB (gấp 64 lần); giá mỗi GB khoảng 202 USD -> 3,4 USD (tiền 2026).

**Chỗ yếu đã ghi rõ trong bảng giá** (không đọc thành lời, chỉ để anh biết):
1. Giá "không hợp đồng" của iPhone 3G/4 không có ngay ngày ra mắt (3G có từ 3/2009, iPhone 4 mở khoá từ 6/2011).
2. iPhone 16 giá thật 829 USD chỉ khớp với trang Apple Store hiện tại, không có tài liệu ngày ra mắt.
3. Giá 7 Plus / 6s Plus lấy từ báo (9to5Mac, iDownloadBlog), Apple không in.

**Đã sửa khi soát kịch bản** (so với bản nháp đầu):
- Câu 27: bỏ "lần đầu sau 3 năm Apple tăng giá dòng Pro" vì 17 Pro năm 2025 đã tăng 999 -> 1.099 USD; chỉ Pro Max mới đúng là lần đầu sau 3 năm.
- Câu 15: "chiếc iPhone không gập đắt nhất" -> "giá khởi điểm cao nhất của một chiếc iPhone không gập" (bản 2TB đời mới đắt hơn).
- Câu 36: bỏ "món hời nhất 19 năm" vì iPhone đầu tiên quy ra 806 USD còn thấp hơn iPhone 17 (863 USD); thay bằng "thấp thứ hai, chỉ sau iPhone đầu tiên".
- Câu 1 rút còn 6 từ (luật khung đầu).
- Trên hình: bản 2TB ghi "~3.000 USD" đúng như bài gốc, không bịa 2.999.

## Kịch bản (38 câu, phụ đề giữ số)

Bản giọng máy (phiên âm theo `tts-cach-doc-so.md`): `out/iphone19/script_voice.txt`.

```
iPhone đầu tiên, năm 2007: 499 USD.
Năm 2026, chiếc iPhone đắt nhất ở Việt Nam giá 103.999.000đ.
Vậy sau 19 năm, iPhone có thật sự đắt lên? Câu trả lời ngược với cảm giác của nhiều người.
Để so cho công bằng, video dùng giá khởi điểm tại Mỹ, bản không kèm hợp đồng nhà mạng.
Rồi quy đổi ra sức mua năm 2026, theo chỉ số giá tiêu dùng của Mỹ.
iPhone đầu tiên bản 4GB giá 499 USD, tương đương khoảng 806 USD tiền năm 2026.
Từ iPhone 3G năm 2008, Apple quảng cáo iPhone chỉ 199 USD.
Nhưng đó là giá khi ký hợp đồng 2 năm với nhà mạng.
Giá thật của iPhone 4 là 649 USD, tương đương gần 1.000 USD tiền năm 2026.
Đắt hơn cả iPhone đầu tiên. Con số 199 USD là ảo giác thứ nhất.
Suốt 6 năm, từ iPhone 4 tới iPhone 7, giá thật đứng yên ở 649 USD.
Trong lúc đó, iPhone có thêm Siri, Touch ID, màn hình lớn và Apple Pay.
Cú nhảy thật đến vào năm 2017: iPhone X giá 999 USD, lần đầu có Face ID.
Một năm sau, iPhone XS Max giá 1.099 USD, bằng khoảng 1.466 USD tiền năm 2026.
Tính theo sức mua, đó vẫn là giá khởi điểm cao nhất của một chiếc iPhone không gập.
Từ iPhone 12, Apple niêm yết bản thường 799 USD.
Nhưng con số đó đã trừ sẵn 30 USD, chỉ áp dụng khi kích hoạt với nhà mạng Mỹ.
Giá thật là 829 USD. Đó là ảo giác thứ hai.
Có điều, Apple giữ nguyên mức giá này suốt 6 năm, trong khi lạm phát cứ tăng.
Kết quả, iPhone 17 chỉ tương đương 863 USD tiền năm 2026.
Tức là rẻ hơn cả iPhone 4 của năm 2010.
Trong khi bộ nhớ khởi điểm là 256GB, gấp 64 lần iPhone đầu tiên.
Tính theo mỗi GB, giá rơi từ khoảng 202 USD xuống còn 3,4 USD.
Đặt tất cả lên một biểu đồ, bản iPhone thường gần như là một đường nằm ngang.
Còn bản đắt nhất lên đỉnh vào năm 2018, rồi đi xuống dần.
iPhone 17 Pro Max chỉ còn tương đương 1.248 USD tiền năm 2026.
Năm 2026, Apple tăng giá dòng Pro thêm 100 USD, riêng bản Pro Max là lần đầu sau 3 năm.
iPhone 18 Pro từ 1.199 USD, iPhone 18 Pro Max từ 1.299 USD.
Theo MacRumors, một lý do là chi phí RAM tăng mạnh vì cơn sốt AI.
Và có thêm một bậc giá hoàn toàn mới: iPhone Duo gập, từ 1.999 USD.
Tại Việt Nam, iPhone Duo bản 2TB giá 103.999.000đ, chiếc iPhone đầu tiên vượt 100 triệu đồng.
Vậy iPhone có đắt lên không? Bản thường thì không, tính theo sức mua còn rẻ hơn thời iPhone 4.
Thứ đắt lên là các bậc giá phía trên: Pro Max, máy gập và bộ nhớ 2TB.
Apple không làm iPhone đắt hơn. Apple làm thêm những chiếc iPhone đắt hơn.
Ở Việt Nam, iPhone 18 Pro Max chính hãng có giá từ 41.999.000đ.
Nếu chỉ cần một chiếc iPhone tốt, giá thật của bản thường đang thấp thứ hai trong 19 năm, chỉ sau iPhone đầu tiên.
Còn iPhone 18 bản thường được cho là lùi sang nửa đầu năm 2027.
Theo dõi TechVision để biết giá thật của từng chiếc máy, trước khi xuống tiền.
```

Câu 37 là tin đồn: trên hình có chip vàng "Tin đồn".

## Bảng kê media, CHỜ DUYỆT

Toàn bộ là ảnh chụp thật, KHÔNG có hình AI. Thư mục: `techvision-video-kit/out/iphone19/media/` (kèm `manifest.json`, `_sheet.jpg`).
Ảnh đặt trong thẻ nền trắng, giữ nguyên khung (không cắt, không chỉnh màu). Dòng ghi nguồn nằm góc dưới trái ở từng cảnh.

| # | Ảnh | Dùng ở cảnh | Nguồn / credit trên hình |
|---|---|---|---|
| 01 | iPhone đời đầu (mặt lưng, có trầy) | câu 1, 6 | Pavel Ševela / Wikimedia Commons, CC BY-SA 3.0 |
| 02 | iPhone 3G | câu 7-8 | Feureau / Wikimedia Commons, CC BY-SA 3.0 |
| 03 | iPhone 4 | câu 9-10, ảnh nhỏ dòng thời gian | SimonWaldherr / Wikimedia Commons, CC BY-SA 4.0 |
| 04 | iPhone 5s (nền cam) | ảnh nhỏ dòng thời gian | Maurizio Pesce / Wikimedia Commons, CC BY 2.0 |
| 05 | iPhone 6 | ảnh nhỏ dòng thời gian | Beamish4 / Wikimedia Commons, CC BY-SA 4.0 |
| 06 | iPhone 7 | ảnh nhỏ dòng thời gian | Apple Newsroom 2016 |
| 07 | iPhone X | câu 13 | Apple Newsroom 2017 |
| 08 | iPhone XS và XS Max | câu 14-15 | Apple Newsroom 2018 |
| 10 | iPhone 12 | câu 16-18 | Apple Newsroom 2020 |
| 12 | iPhone 17 | câu 19-21 | Apple Newsroom 2025 |
| 14 | iPhone 18 Pro / Pro Max | câu 27-28 | Apple Newsroom 09/2026 |
| 15 | iPhone Duo | câu 2, 30-31 | Apple Newsroom 09/2026 |
| 09, 11, 13 | iPhone 11 Pro, 15, 17 Pro Max | dự phòng, chưa dùng | Apple Newsroom |

Cần anh biết trước khi duyệt:
- **Điều khoản ảnh Apple**: file tải từ Newsroom kèm ghi chú chỉ cho dùng "biên tập, phi thương mại" và cấm sửa ảnh. Video tin tức có ghi nguồn là cách các kênh công nghệ vẫn dùng, nhưng nếu kênh bật kiếm tiền thì đây là rủi ro nhỏ. Em đã giữ nguyên khung, không cắt.
- Ảnh Wikimedia CC BY/BY-SA: dòng tên tác giả là bắt buộc, đã có trên hình ở từng cảnh.
- Biểu đồ, thanh bộ nhớ, bậc giá: vẽ bằng code từ bảng số trên, không phải ảnh.

## Âm thanh (anh Long duyệt media 29/9/2026, đã trộn)

- Giọng: OmniVoice giọng anh Long, tua 1,2x, cắt lặng -45dB, nối liền không khoảng lặng.
- Nhạc nền Soundraw của anh (thư mục `09-nhac-khong-ban-quyen`), duck 55% dưới giọng.
- Tiếng động theo nghĩa cảnh, không lặp một tiếng: chạy số (tick), con dấu "ẢO GIÁC" (stamp), gạch giá 199 (xoẹt),
  vẽ biểu đồ (whoosh dài), thẻ "Tin đồn" (pop nhẹ), endcard (chime).

## Gói đăng

**Đã đăng:** Facebook Reels (Short mồi) 29/9/2026, reel 1791600398702442 https://www.facebook.com/reel/1791600398702442 . YouTube dài, Shorts, TikTok: CHƯA.

**Thumbnail** (1280x720, `out/iphone19/thumbnail-*.jpg`, dựng từ `thumb.html`, ảnh thật đã duyệt, biểu đồ C vẽ từ đúng số liệu video):
- A (chính): "iPHONE ĐẮT LÊN THẬT?" 2007 499$ -> 2026 104 TRIỆU. Khớp 2 câu mở đầu của video.
- B: "iPhone 17 RẺ HƠN iPhone 4?" 997$ vs 863$ tính theo sức mua 2026.
- C: nền tối "2 ẢO GIÁC GIÁ iPHONE" + biểu đồ 19 năm.
- Đăng A làm thumbnail chính, cho B và C vào "Thử nghiệm và so sánh" của YouTube Studio.

**YouTube (video dài)**
- Tiêu đề: `iPhone 19 năm: từ 499 USD tới 104 triệu, đắt lên thật hay ảo giác?`
- Tiêu đề dự phòng (đi với thumbnail B / C): `iPhone 17 rẻ hơn iPhone 4? Giá iPhone 19 năm tính theo sức mua` / `2 ảo giác giá iPhone mà Apple dùng suốt 19 năm`
- Mô tả:
  ```
  iPhone đầu tiên năm 2007 giá 499 USD. Năm 2026, iPhone Duo 2TB ở Việt Nam giá 103.999.000đ, chiếc iPhone đầu tiên vượt 100 triệu đồng. Vậy sau 19 năm, iPhone có thật sự đắt lên?

  Video quy giá khởi điểm tại Mỹ (bản không kèm hợp đồng nhà mạng) của từng đời iPhone ra sức mua năm 2026, và chỉ ra 2 "ảo giác" về giá mà Apple dùng suốt 19 năm.

  Con số chính (quy ra USD năm 2026):
  - iPhone đầu tiên 2007: 499 USD, tương đương 806 USD
  - iPhone 4 năm 2010: giá thật 649 USD, tương đương 997 USD (con số 199 USD là giá khi ký hợp đồng 2 năm)
  - iPhone XS Max năm 2018: 1.099 USD, tương đương 1.466 USD, giá khởi điểm cao nhất của iPhone không gập
  - iPhone 17 năm 2025: giá thật 829 USD (799 USD đã trừ 30 USD nhà mạng), tương đương 863 USD, rẻ hơn iPhone 4
  - Bộ nhớ khởi điểm 4GB lên 256GB; giá mỗi GB từ khoảng 202 USD xuống 3,4 USD
  - 2026: iPhone 18 Pro từ 1.199 USD, Pro Max từ 1.299 USD, iPhone Duo từ 1.999 USD
  - Việt Nam: iPhone 18 Pro Max chính hãng từ 41.999.000đ

  Chương:
  0:00 Từ 499 USD tới 103.999.000đ
  0:15 Luật so sánh: giá Mỹ, quy ra tiền 2026
  0:30 Ảo giác thứ nhất: iPhone 199 USD
  0:54 iPhone X và XS Max: đỉnh giá
  1:12 Ảo giác thứ hai: 799 USD
  1:22 Lạm phát làm iPhone rẻ đi
  1:42 Biểu đồ 19 năm
  1:55 2026: tăng giá Pro và iPhone Duo
  2:22 Kết luận
  2:34 Nên mua iPhone nào ở Việt Nam

  Cách tính: giá niêm yết ngày ra mắt tại Mỹ (chưa thuế) nhân với chỉ số giá tiêu dùng CPI-U của Cục Thống kê Lao động Mỹ (BLS), tháng 8/2026 = 334,980. Giá Việt Nam lấy từ Apple Store Việt Nam. Thông tin iPhone 18 bản thường lùi sang 2027 là tin đồn.

  Nguồn giá: Apple Newsroom 2007-2026, BLS, MacRumors.
  Ảnh: Apple Newsroom. Wikimedia Commons: Pavel Ševela (CC BY-SA 3.0), Feureau (CC BY-SA 3.0), SimonWaldherr (CC BY-SA 4.0), Maurizio Pesce (CC BY 2.0), Beamish4 (CC BY-SA 4.0).

  Bảng giá iPhone 18 Pro Max tại Việt Nam: https://techvision.click/?utm_source=youtube&utm_medium=video&utm_campaign=iphone-19-nam

  #iPhone #Apple #GiaiPhone
  ```
- Thẻ: iPhone, giá iPhone, iPhone 18 Pro Max, iPhone Duo, Apple, lạm phát, TechVision

**YouTube Shorts / TikTok / Facebook Reels (mồi 20 giây, dọc)**
- Nội dung (17,2 giây, câu 20, 21, 34 + câu mời xem): 3 nhịp của video dài: "199 USD là ảo giác" -> biểu đồ 19 năm -> câu chốt "Apple làm thêm những chiếc iPhone đắt hơn", cuối dẫn về video dài.
- YouTube Shorts: `iPhone 17 rẻ hơn iPhone 4? Tính theo sức mua thì đúng #iphone #apple` (gắn "Video liên quan" = video dài)
- TikTok: `iPhone 17 rẻ hơn iPhone 4? Quy ra tiền 2026 thì đúng vậy. Apple không làm iPhone đắt hơn, Apple làm thêm những chiếc iPhone đắt hơn. Bản đầy đủ 19 năm giá iPhone trên YouTube TechVision. #iphone #apple #iphone17 #giaiphone #techvision`
- Facebook Reels: `iPhone 17 rẻ hơn iPhone 4 nếu tính theo sức mua năm 2026: 863 USD so với 997 USD. Bảng giá iPhone 18 Pro Max tại Việt Nam: https://techvision.click/?utm_source=facebook&utm_medium=reel&utm_campaign=iphone-19-nam`
