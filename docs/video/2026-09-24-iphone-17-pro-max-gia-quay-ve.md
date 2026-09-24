# Video: iPhone 17 Pro Max giá quay về sau khi iPhone 18 lên kệ (24/09/2026)

**Kiểu dựng MỚI: hoạt hình vẽ tay, dọc 9:16.** Mọi hình vẽ bằng code (PIL) trong
`~/techvision-video-kit/scripts/build_i17hd.py`: nét bút rung đổi dạng 12 lần/giây như hoạt hình
vẽ tay, chữ tự viết ra, khoanh tròn, mũi tên, biểu đồ vẽ dần, zoom giật đầu cảnh. **Không Flow,
không hình AI, không ảnh ngoài**, nên vẫn nằm trong luật video tin tức thường. Không cần dòng khai
hình AI khi đăng.

Anh Long gợi ý kiểu này ngày 24/9 (xem một prompt mẫu dựng video hoạt hình vẽ tay "một lệnh").

Bài web đi kèm: `https://techvision.click/articles/gia-iphone-17-pro-max-sau-khi-iphone-18-mo-ban-viet-nam-2026.html` (dời từ 25/9 09:00 lên 24/9 16:30 để đăng video trong ngày, thêm mục cập nhật giá 24/9).

## Số liệu, kiểm tận nguồn ngày 24/9/2026

| Số | Giá trị | Nguồn |
|---|---|---|
| iPhone 17 Pro Max 256GB | 34.590.000đ | schema `price` trên trang CellphoneS (InStock) và FPT Shop (priceValidUntil 2026-09-24) |
| iPhone 17 Pro Max niêm yết | 37.990.000đ | CellphoneS (giá gạch), TGDĐ |
| iPhone 18 Pro Max 256GB tại đại lý | 41.990.000đ | schema `price` CellphoneS + FPT Shop |
| iPhone 18 Pro Max 256GB Apple VN | 41.999.000đ | apple.com/vn/shop/buy-iphone/iphone-18-pro |
| Chênh cùng chuỗi | 7.400.000đ | 41.990.000 - 34.590.000 |
| Mốc 9/9 | từng 34,5 triệu, giảm về 33,6-34 triệu | VnExpress 09/09/2026, bài 5118135 |

**Bẫy đã tránh:**
- **41.990.000 và 41.999.000 đều đúng**, khác nơi bán: Apple VN niêm yết 41.999.000đ, CellphoneS/FPT bán 41.990.000đ. Video so tại cùng hai chuỗi nên dùng 41.990.000đ. Video iPhone 18 giá 3 nước ghi "Apple Việt Nam bán 41.999.000đ" là đúng, không phải sửa.
- **TGDĐ ra 31.630.000đ là MÁY CŨ** (nhãn `warranty-oldProd`, -16%), đừng lấy làm giá máy mới. Giá mới của TGDĐ hiện dưới dạng "giảm ngay 3 triệu + phiếu mua hàng", không có một giá bán duy nhất, nên không đưa vào phép so.
- Công cụ đọc web tóm tắt bằng mô hình nhỏ có thể đọc nhầm số: đã soi lại schema trong HTML thô.

## Kịch bản đọc (OmniVoice, số phiên âm)

```
Giá hai máy cách nhau đúng bảy triệu bốn trăm nghìn đồng.
iPhone mười tám Pro Max ở CellphoneS và FPT Shop là bốn mươi mốt triệu chín trăm chín mươi nghìn.
Còn iPhone mười bảy Pro Max, cùng chỗ, là ba mươi tư triệu năm trăm chín mươi nghìn.
Điều lạ là trước sự kiện, máy này từng giảm còn ba mươi ba phẩy sáu tới ba mươi tư triệu.
iPhone mười tám vừa lên kệ, giá lại quay về mức cũ.
Giá từng chuỗi và lúc nào nên mua, có trong bài ở phần giới thiệu.
```

**Bản cuối:** `~/techvision-video-kit/out/i17hd/iphone-17-pro-max-gia-quay-ve-final.mp4`, 25,83 giây,
1080x1920, 24 khung/giây, 4,4 MB, âm lượng đỉnh -0,9 dB. Dựng hết 21 giây (máy không lag).
Whisper soát toàn bài: 6/6 câu khớp kịch bản, mọi con số đúng.

**Bẫy giọng gặp ở video này (đã ghi vào `tts-cach-doc-so.md`):**
- Chữ **"chênh"** bị giọng máy đọc sai **hai lần liên tiếp**: "Trên đúng", rồi "tranh nhau" (kể cả khi dời vào giữa câu). Phải bỏ hẳn, thay bằng **"cách nhau"**.
- "iPhone mười bảy Pro Max" bị **lặp thành "Pro Pro Max"**. Thêm dấu phẩy ngắt nhịp trước và sau cụm "cùng chỗ" thì hết.

## Bảng cảnh

| Cảnh | Hình (vẽ tay bằng code) |
|---|---|
| 1 | Khung một là số: "giá cách nhau đúng / 7,4 TRIỆU" đỏ, khoanh tròn, 2 máy "17" và "18" với mũi tên hai đầu |
| 2 | Máy "18" lớn, thẻ giá 41.990.000đ, dấu MỚI đóng xuống |
| 3 | Máy "17", 37.990.000đ niêm yết bị gạch, thẻ giá đỏ 34.590.000đ |
| 4 | Biểu đồ: 34,5tr -> vùng 33,6-34tr ngày 9/9 khoanh đỏ |
| 5 | Vạch "18/9: iPhone 18 lên kệ", mũi tên đỏ vọt lên 34,59tr, "quay về giá cũ!" |
| 6 | TechVision, khung trình duyệt techvision.click, "giá từng chuỗi + lúc nào nên mua" |

## Bảng kê nguồn

| # | Nguồn | Giấy phép |
|---|---|---|
| A | Toàn bộ hình vẽ, biểu đồ, chữ | tự dựng bằng code |
| B | Font Pangolin (chữ thường, phụ đề) | SIL OFL 1.1, file giấy phép kèm ở `assets/fonts/OFL-Pangolin.txt` |
| C | Font Marker Felt (số lớn) | font hệ thống macOS |
| D | Giọng OmniVoice nhân bản giọng anh Long | cục bộ |
| E | Tiếng bút sột soạt, tiếng "bộp" khi cắt cảnh | tự sinh bằng numpy |

## Gói đăng (CHƯA đăng, chờ anh Long)

**TikTok** (link để bio, `utm_source=tiktok`)
```
iPhone 18 lên kệ rồi mà iPhone 17 Pro Max lại không rẻ thêm 😅 Ngày 9/9 còn 33,6-34 triệu, hôm nay CellphoneS và FPT Shop bán 34.590.000đ. Chênh iPhone 18 Pro Max đúng 7,4 triệu. Giá từng chuỗi ở link bio. #iphone17promax #iphone18promax #giaiphone #techvision
```

**YouTube Shorts**

Tiêu đề: `iPhone 17 Pro Max giá quay về sau khi iPhone 18 lên kệ #Shorts`

Mô tả:
```
Giá iPhone 17 Pro Max 256GB ngày 24/9/2026 tại CellphoneS và FPT Shop: 34.590.000đ. Ngày 9/9 máy từng giảm còn 33,6-34 triệu (VnExpress). iPhone 18 Pro Max 256GB cùng hai chuỗi: 41.990.000đ, chênh 7,4 triệu.

Bảng giá từng chuỗi và lúc nào nên mua:
https://techvision.click/articles/gia-iphone-17-pro-max-sau-khi-iphone-18-mo-ban-viet-nam-2026.html?utm_source=youtube&utm_medium=social&utm_campaign=video-gia-iphone-17-pro-max-quay-ve

#Shorts #iPhone17ProMax #iPhone18
```

**Facebook Reels**
```
Chờ iPhone 18 ra để mua iPhone 17 Pro Max rẻ hơn? Năm nay chưa được như vậy. Trước sự kiện máy từng giảm về 33,6-34 triệu, hôm nay CellphoneS và FPT Shop đều bán 34.590.000đ. Cùng hai chuỗi, iPhone 18 Pro Max 256GB là 41.990.000đ.
Giá từng chuỗi: https://techvision.click/articles/gia-iphone-17-pro-max-sau-khi-iphone-18-mo-ban-viet-nam-2026.html?utm_source=facebook&utm_medium=social&utm_campaign=video-gia-iphone-17-pro-max-quay-ve
```

---

## BẢN DÀI ~1 PHÚT (anh Long yêu cầu 24/9, giọng giữ 1,1x)

Khung dựng: `scripts/build_i17long.py`, thư mục `out/i17long/`. Bản 26 giây vẫn giữ nguyên ở `out/i17hd/`.
Giữ 5 câu đầu + câu kết đã soát sạch, thêm 7 câu mới (6-12).

**Số mới, kiểm tận nguồn 24/9/2026:**

| Số | Giá trị | Nguồn |
|---|---|---|
| iPhone 18 Pro 256GB | 38.990.000đ | schema `price` CellphoneS + FPT Shop (FPT priceValidUntil 2026-09-24) |
| 17 Pro Max rẻ hơn 18 Pro | 4.400.000đ | 38.990.000 - 34.590.000 |
| iPhone 17 Pro Max 256GB máy cũ | từ 31.630.000đ, -16%, bảo hành chính hãng tới 20/06/2027 | trang TGDĐ, khối máy cũ |

Câu 6-7 (vì sao giá quay về) là phần giải thích cơ chế đã viết trong bài web, nói dạng "lý do thường gặp",
không khẳng định cho riêng đợt này. Câu 11-12 là lời khuyên của TechVision, lấy từ mục "Ba việc nên làm trước
khi chốt mua" trong bài.

**Kịch bản đọc thêm (câu 6-12):**
```
Lý do thường gặp: trước ngày máy mới bán, đại lý xả hàng tồn nên hạ giá.
Máy mới lên kệ, hàng đời cũ ít dần, giá lại nhích lên.
So chéo mới thú vị: iPhone mười tám Pro ở hai chuỗi này là ba mươi tám triệu chín trăm chín mươi nghìn.
Tức là iPhone mười bảy Pro Max, vẫn rẻ hơn iPhone mười tám Pro, đúng bốn triệu bốn trăm nghìn.
Muốn rẻ hơn nữa, Thế Giới Di Động có iPhone mười bảy Pro Max, máy cũ, từ ba mươi mốt triệu sáu trăm ba mươi nghìn.
Mua máy cũ thì kiểm ba thứ: pin, lịch sử sửa chữa và nguồn gốc máy.
Còn mua mới, hãy khảo ít nhất ba chuỗi trong cùng một ngày, vì khuyến mãi mỗi nơi một kiểu.
```

**Cảnh thêm:** 6 cửa hàng đầy hộp "17" + thẻ "xả hàng" mũi tên xuống · 7 hộp "17" bị gạch dần, hộp "18" mới về,
mũi tên lên · 8 máy "18" Pro + thẻ 38.990.000đ · 9 biểu đồ cột 3 máy + ngoặc "-4,4tr" · 10 máy "17" dấu MÁY CŨ +
thẻ 31.630.000đ · 11 danh sách 3 ô tích đỏ · 12 ba cửa hàng dấu hỏi + tờ lịch "cùng 1 ngày".

Lỗi bố cục bắt được ở bước `still` (sửa trước khi dựng): chữ "giá nhích lên" tràn mép phải, hộp "18" đè biển
ĐẠI LÝ, nhãn "-4,4tr" đè cột, dấu MÁY CŨ đè đáy máy.

**Bản cuối 1 phút:** `~/techvision-video-kit/out/i17long/iphone-17-pro-max-gia-quay-ve-1phut-final.mp4`, 59,21 giây,
1080x1920, 10,7 MB, đỉnh âm -0,9 dB. Whisper soát 13/13 câu khớp, mọi số đúng. Riêng câu 6 Whisper ghi "xã hàng tồn"
(nhiều khả năng Whisper lẫn dấu hỏi/ngã), cần anh Long nghe lại.

**Bài học máy lag 24/9:** 7 câu giọng mới chạy nối đuôi ngay sau lượt dựng và Whisper, máy 16 GB đã dùng 1,9 GB swap
nên anh Long phải khởi động lại giữa chừng. Giọng vẫn đọc xong đủ vì `gen.sh` bỏ qua câu đã có. Các bước sau (nối giọng,
Whisper, dựng) chạy `nice -n 19` từng bước một, dựng 1.421 khung hết 31 giây, không lag.

### Gói đăng bản 1 phút (CHƯA đăng)

**TikTok** (link để bio, `utm_source=tiktok`)
```
Chờ iPhone 18 ra để mua iPhone 17 Pro Max rẻ hơn? Năm nay chưa được 😅 Trước sự kiện máy từng giảm còn 33,6-34 triệu, hôm nay CellphoneS và FPT Shop bán 34.590.000đ. Vẫn rẻ hơn iPhone 18 Pro đúng 4,4 triệu, máy cũ ở TGDĐ từ 31.630.000đ. Giá từng chuỗi ở link bio. #iphone17promax #iphone18 #giaiphone #techvision
```

**YouTube Shorts** - tiêu đề: `iPhone 17 Pro Max giá quay về: mua mới, mua cũ hay lên iPhone 18? #Shorts`
```
Giá bản 256GB ngày 24/9/2026 tại CellphoneS và FPT Shop: iPhone 17 Pro Max 34.590.000đ, iPhone 18 Pro 38.990.000đ, iPhone 18 Pro Max 41.990.000đ. Ngày 9/9 iPhone 17 Pro Max từng giảm còn 33,6-34 triệu (VnExpress). Máy cũ 17 Pro Max tại Thế Giới Di Động từ 31.630.000đ.

Bảng giá từng chuỗi và lúc nào nên mua:
https://techvision.click/articles/gia-iphone-17-pro-max-sau-khi-iphone-18-mo-ban-viet-nam-2026.html?utm_source=youtube&utm_medium=social&utm_campaign=video-gia-iphone-17-pro-max-quay-ve-1phut

#Shorts #iPhone17ProMax #iPhone18
```

**Facebook Reels**
```
iPhone 18 lên kệ, iPhone 17 Pro Max lại quay về giá cũ: 34.590.000đ tại CellphoneS và FPT Shop (24/9). So cùng hai chuỗi: rẻ hơn iPhone 18 Pro 4,4 triệu, rẻ hơn iPhone 18 Pro Max 7,4 triệu. Mua máy cũ thì nhớ kiểm pin, lịch sử sửa chữa và nguồn gốc máy.
Giá từng chuỗi: https://techvision.click/articles/gia-iphone-17-pro-max-sau-khi-iphone-18-mo-ban-viet-nam-2026.html?utm_source=facebook&utm_medium=social&utm_campaign=video-gia-iphone-17-pro-max-quay-ve-1phut
```
