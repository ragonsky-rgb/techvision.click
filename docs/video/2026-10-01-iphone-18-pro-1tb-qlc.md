# Video: iPhone 18 Pro bản 1TB chậm hơn bản 512GB (đăng T5 01/10/2026)

Trạng thái: **ĐÃ DỰNG XONG 27/09/2026 trên PC Windows, CHỜ anh Long xem + cho phép hẹn đăng** (T5 01/10 19:00). Kịch bản + bảng kê đã duyệt 26/09.

- Bản cuối: `techvision-video-kit/out/i18qlc/iphone-18-pro-1tb-qlc-final.mp4` (54s, 14,3 MB) + `-nhe.mp4` (7,9 MB, để đăng/gửi điện thoại).
- Dựng: `python scripts/build_i18qlc.py voice|cards|shots|caps|final` (chạy cả Mac lẫn PC). 11 cảnh: 8 cảnh clip Apple `out/src18/` + thẻ số, 3 cảnh vẽ tay (ô nhớ 8/16 mức, thanh tốc độ ghi + thẻ microSD, cột bộ đệm 250GB tụt còn 58GB), cảnh 10 là 2 dòng giá cắt từ bảng trong bài (chụp bằng `shot-el.mjs`).
- Giọng: **đọc lại cả 11 câu trên PC** cho đồng đều âm sắc (8 câu đọc trên Mac giữ ở `raw_parts_mac/`). Whisper soát đủ số trên file giọng cuối. Câu 5 và 7 đổi dấu phẩy so với bản duyệt (không đổi chữ) vì bản đầu nghe "nhồi" thành "nhiều", "tụt" thành "tù" - xem `script_voice.txt`.

- Bài dẫn về: `/articles/iphone-18-pro-1tb-2tb-bo-nho-qlc-cham-hon-ban-256gb.html` (trang đã mở, mã 200).
- Kiểu dựng: clip THẬT của Apple (đã duyệt ở video 15/9) + thẻ số và hình vẽ tay dựng bằng code (ô nhớ 3 bit / 4 bit, thanh so điểm, đồng hồ bộ đệm). Không Flow, không sinh hình.
- Giọng OmniVoice tua 1,2x, phụ đề word-pop đỏ #C0392B. Khung đầu là con số, câu đầu 8 từ, câu cuối mời theo dõi.

## Số liệu (đối chiếu 26/9/2026)

| Dữ kiện | Nguồn |
|---|---|
| Bản 1TB và 2TB dùng NAND QLC (4 bit/ô), bản 256GB và 512GB dùng TLC (3 bit/ô) | Tom's Hardware, AppleInsider, Notebookcheck (bài web) |
| Phép đo hỗn hợp hàng đợi thấp: 1TB 8.168 điểm, 512GB 11.285 điểm, chậm hơn khoảng 38% | như trên |
| Hết bộ đệm SLC: ghi trung bình 79,4 MB/s, thấp nhất 25,6 MB/s | như trên |
| Máy đầy khoảng 60%: bộ đệm từ khoảng 250GB còn khoảng 58GB, ghi khoảng 45 MB/s | như trên |
| Pro Max 512GB 48.499.000đ; 1TB 61.49x.000đ (nguồn ghi 61.490.000 và 61.499.000) → nói "hơn 61 triệu", chênh 13 triệu | CellphoneS, Thế Giới Di Động (tra 26/9) |

## Kịch bản (11 câu, ~48s ở 1,2x)

Phụ đề = cột trái (số giữ nguyên). Giọng đọc = cột giữa (đã phiên âm theo `tts-cach-doc-so.md`).

| # | Phụ đề | Lời đọc gửi OmniVoice | Hình |
|---|---|---|---|
| 1 | Trả thêm 13 triệu, iPhone lại chậm hơn. | Trả thêm mười ba triệu, iPhone lại chậm hơn. | thẻ số "+13 triệu → chậm hơn 38%" trên clip máy xoay (A cut1) |
| 2 | iPhone 18 Pro bản 1TB và 2TB dùng bộ nhớ loại QLC. | iPhone mười tám Pro bản một tê ra bai và hai tê ra bai dùng bộ nhớ loại Kiu Eo Xi. | clip chip A20 (B4) + nhãn "1TB · 2TB = QLC" |
| 3 | Còn bản 256GB và 512GB vẫn dùng loại TLC, nhanh hơn. | Còn bản hai trăm năm mươi sáu ghi và năm trăm mười hai ghi vẫn dùng loại Ti Eo Xi, nhanh hơn. | thẻ 2 cột TLC / QLC |
| 4 | Phép đo hỗn hợp: bản 1TB 8.168 điểm, bản 512GB 11.285 điểm. Chậm hơn khoảng 38%. | Ở phép đo hỗn hợp, bản một tê ra bai được tám nghìn, một trăm sáu mươi tám điểm, bản năm trăm mười hai ghi được mười một nghìn, hai trăm tám mươi lăm điểm. Chậm hơn khoảng ba mươi tám phần trăm. | thanh so 2 mức (bars) |
| 5 | Mỗi ô nhớ QLC nhồi 4 bit thay vì 3, nên ghi chậm hơn. | Mỗi ô nhớ Kiu Eo Xi nhồi bốn bít thay vì ba, nên ghi dữ liệu chậm hơn. | hình vẽ tay: ô 8 mức vs ô 16 mức |
| 6 | Hết bộ đệm, tốc độ ghi còn 79,4 MB/s, có lúc 25,6 MB/s, ngang thẻ nhớ phổ thông. | Khi hết bộ đệm, tốc độ ghi chỉ còn gần tám mươi mê ga bai mỗi giây, có lúc hơn hai mươi lăm, ngang một chiếc thẻ nhớ phổ thông. | thẻ số 79,4 / 25,6 MB/s + hình thẻ nhớ vẽ tay |
| 7 | Máy càng đầy càng chậm: đầy 60%, bộ đệm tụt từ 250GB còn 58GB. | Máy càng đầy thì càng chậm. Dùng hết sáu mươi phần trăm, bộ đệm tụt từ hai trăm năm mươi ghi còn năm mươi tám ghi. | đồng hồ bộ đệm vẽ tay tụt dần |
| 8 | Lướt mạng, chụp ảnh, chơi game thì gần như không thấy khác. | Lướt mạng, chụp ảnh hay chơi game thì gần như không thấy khác biệt. | clip tay cầm máy (A cut3) |
| 9 | Chỉ lộ ra khi quay video 4K dài, chép hàng chục GB, hay khôi phục máy mới. | Nó chỉ lộ ra khi quay video bốn K thật dài, chép hàng chục ghi, hoặc khôi phục máy mới. | clip ống kính (B1) + vòng camera (A cut4) |
| 10 | Ở Việt Nam, Pro Max 512GB giá 48,5 triệu, bản 1TB hơn 61 triệu. | Ở Việt Nam, Pro Max bản năm trăm mười hai ghi giá bốn mươi tám triệu rưỡi, bản một tê ra bai hơn sáu mươi mốt triệu. | ảnh chụp bảng giá trong bài techvision (nguồn số 3) |
| 11 | Đa số nên dừng ở 512GB. Theo dõi TechVision để biết nên mua bản nào trước khi xuống tiền. | Đa số người dùng nên dừng ở bản năm trăm mười hai ghi. Theo dõi TechVision để biết nên mua bản nào, trước khi xuống tiền. | thẻ chốt "512GB = điểm dừng hợp lý" + techvision.click |

**Chữ mới chưa từng đọc, phải soát Whisper từng câu:** "Kiu Eo Xi" (QLC), "Ti Eo Xi" (TLC), "tê ra bai", "mê ga bai mỗi giây", "bít". Nếu giọng vấp thì thử "Q L C" hoặc bỏ tên chip, chỉ nói "loại bộ nhớ rẻ hơn".
Số lẻ 79,4 và 25,6 KHÔNG đọc thành "phẩy" (bẫy nuốt chữ phẩy) - giọng làm tròn "gần tám mươi", "hơn hai mươi lăm", thẻ và phụ đề giữ số gốc.

## Bảng kê media, CHỜ DUYỆT

| # | Nguồn | Giấy phép, cách dùng | Tải |
|---|---|---|---|
| A | youtube.com/watch?v=Q3zwkxqh1t0 "Introducing the new iPhone 18 Pro" - **Apple** | chính hãng, credit "Video: Apple", chỉ lấy quãng sạch chữ. ĐÃ DUYỆT ở video 15/9, file có sẵn `out/src18/` | không tải thêm |
| B | "iPhone 18 Pro: The ultimate performance and camera of any iPhone" - **Apple** (55s) | như A | không tải thêm |
| C | Ảnh chụp bảng thông số + giá trong bài techvision (nguồn số 3) | tài sản của kênh | tự chụp |
| D | Thẻ số, hình vẽ tay ô nhớ / thẻ nhớ / đồng hồ bộ đệm | dựng bằng code PIL | - |

KHÔNG dùng: ảnh YouTube minh họa trong bài web (thumbnail kênh khác), clip review của kênh khác.

## Gói đăng (CHƯA đăng)

**TikTok** (link để bio)
```
Trả thêm 13 triệu mà iPhone 18 Pro bản 1TB lại chậm hơn bản 512GB 🤯 Bản 1TB và 2TB dùng bộ nhớ QLC, chậm hơn khoảng 38% ở phép đo hỗn hợp. Anh em đang dùng bản nào? #iphone18pro #iphone18promax #apple #techvision #congnghe
```
Link bio: https://techvision.click/articles/iphone-18-pro-1tb-2tb-bo-nho-qlc-cham-hon-ban-256gb.html?utm_source=tiktok&utm_medium=social&utm_campaign=video-iphone-18-pro-1tb-qlc

**YouTube Shorts**

Tiêu đề: `iPhone 18 Pro bản 1TB chậm hơn bản 512GB: trả thêm 13 triệu có đáng? #Shorts`

Mô tả:
```
iPhone 18 Pro và Pro Max bản 1TB, 2TB dùng bộ nhớ NAND QLC (4 bit mỗi ô), còn bản 256GB và 512GB dùng TLC (3 bit mỗi ô). Ở phép đo hỗn hợp, bản 1TB đạt 8.168 điểm so với 11.285 điểm của bản 512GB, chậm hơn khoảng 38%. Khi hết bộ đệm SLC, tốc độ ghi còn trung bình 79,4 MB/s, thấp nhất 25,6 MB/s. Dùng hằng ngày gần như không thấy khác, chỉ lộ ra khi quay video 4K dài, chép dữ liệu lớn hoặc khôi phục máy mới. Tại Việt Nam, Pro Max 512GB giá 48.499.000đ, bản 1TB hơn 61 triệu đồng, chênh 13 triệu.

Phân tích đầy đủ và nên chọn bản nào:
https://techvision.click/articles/iphone-18-pro-1tb-2tb-bo-nho-qlc-cham-hon-ban-256gb.html?utm_source=youtube&utm_medium=social&utm_campaign=video-iphone-18-pro-1tb-qlc

Số đo: Tom's Hardware, AppleInsider, Notebookcheck. Video sản phẩm: Apple. #Shorts #iPhone18Pro #Apple
```

**Facebook Reels**
```
iPhone 18 Pro bản 1TB dùng bộ nhớ QLC, chậm hơn bản 512GB khoảng 38% ở phép đo hỗn hợp, mà ở Việt Nam đắt hơn tới 13 triệu đồng. Lúc nào mới thấy khác, và nên chọn bản nào: https://techvision.click/articles/iphone-18-pro-1tb-2tb-bo-nho-qlc-cham-hon-ban-256gb.html?utm_source=facebook&utm_medium=social&utm_campaign=video-iphone-18-pro-1tb-qlc
```

## Bảng kê media THẬT (bản dựng lại 27/09 tối)

Anh Long nhận xét bản vẽ tay: *"video chưa ổn, anh cần nhiều ảnh thật hoặc video thật đan xen"*. Bản mới đan xen ảnh/clip thật (chính hãng có credit, kho miễn phí bản quyền, ảnh báo có credit trong video), hình vẽ chỉ còn là nhãn số đè lên. File ở `techvision-video-kit/out/i18qlc/media/` (ngoài git), bảng đầy đủ `manifest.json` cùng chỗ.

| File | Nội dung | Credit trên hình | Giấy phép | Trạng thái |
|---|---|---|---|---|
| m01.jpg | Ảnh chụp tiêu đề bài Tom's Hardware (21/9/2026): bộ nhớ iPhone 18 Pro Max có thể tụt xuống | Ảnh: Tom's Hardware | Ảnh chụp màn hình bài báo, dùng trích dẫ | dùng |
| m02.jpg | Ảnh chụp tiêu đề bài Notebookcheck: 'Chậm hơn cả thẻ SD khi tải nặng: bộ nhớ QLC của iPhon | Ảnh: Notebookcheck | Ảnh chụp màn hình bài báo, dùng trích dẫ | dự phòng |
| m03.jpg | Biểu đồ benchmark FIO của HOMOLAB: cột Q1T1 MIX bản QLC 1TB được 8168, bản TLC 512GB được  | Ảnh: HOMOLAB qua Notebookcheck | Biểu đồ đo của HOMOLAB, đăng lại trong b | dùng |
| m04.jpg | Biểu đồ ghi tuần tự 128K của HOMOLAB trên iPhone 18 Pro Max 1TB: SLC cache khoảng 3256 MB/ | Ảnh: HOMOLAB qua Notebookcheck | Biểu đồ đo của HOMOLAB, đăng lại trong b | dùng |
| m05.jpg | Biểu đồ HOMOLAB khi máy đầy 60%: SLC cache chỉ còn 58G (khi trống khoảng 250G), QLC trung  | Ảnh: HOMOLAB qua Notebookcheck | Biểu đồ đo của HOMOLAB, đăng lại trong b | dùng |
| m06.jpg | Ảnh báo chí Samsung: chip NAND V-NAND QLC thế hệ 9 (lưu 4 bit mỗi ô nhớ) đặt trên bo mạch | Ảnh: Samsung | Ảnh báo chí chính thức Samsung Newsroom, | dùng |
| m07.jpg | Tay cầm thẻ nhớ microSD trên nền tối, minh hoạ ý 'tốc độ ghi tụt như thẻ microSD' | Ảnh: Ivan Radic / Wikimedia Commons (CC BY 2.0) | CC BY 2.0, tác giả Ivan Radic | dùng |
| m08.jpg | Ảnh chụp màn hình Cài đặt > Cài đặt chung > Dung lượng iPhone (đã dùng 150,69 GB / 256 GB) | Ảnh: Apple Support | Ảnh minh hoạ chính thức của Apple Suppor | dự phòng |
| m09.mp4 | Video Apple Support: màn hình Dung lượng iPhone, thanh dung lượng nhiều màu gần đầy (98,5  | Video: Apple Support | Video chính thức kênh YouTube Apple Supp | dùng |
| m10.mp4 | Tay cắm cáp Lightning vào iPhone đặt trên bàn gỗ, màn hình sáng lên; b-roll chép dữ liệu/k | Video: Aghyad Najjar / Pexels | Pexels License (miễn phí, không bắt buộc | dự phòng |
| m11.mp4 | Video Apple Support: hai iPhone cạnh nhau, máy cũ 'Updating Backup', máy mới chờ rồi 'Rest | Video: Apple Support | Video chính thức kênh YouTube Apple Supp | dùng |
| m12.mp4 | Hai tay lấy thẻ nhớ SanDisk Ultra ra khỏi hộp đựng thẻ trên nền cam, quay khung dọc 9:16 | Video: Cemrecan Yurtman / Pexels | Pexels License (miễn phí, không bắt buộc | dự phòng |
| m13.mp4 | Hoạt hình thanh dung lượng iPhone trên nền đen, các khối màu co dần (bản gốc là giải phóng | Video: Apple Support | Video chính thức kênh YouTube Apple Supp | dự phòng |
| A_iphone18pro.mp4 | Video Apple 'Introducing iPhone 18 Pro': cầm iPhone quay video, màn hình hiện giao diện ca | Video: Apple | Video chính thức của Apple, ghi nguồn | dùng |
| B_iphone18pro_vidbee.mkv | Video Apple: giao diện camera Pro của iPhone 18 Pro, chọn định dạng 4K rồi bấm nút quay đỏ | Video: Apple | Video chính thức của Apple, ghi nguồn | dự phòng |

<details><summary>Link gốc từng file</summary>

- m01.jpg: https://www.tomshardware.com/pc-components/ssds/iphone-18-pro-max-storage-can-drop-lower-than-a-hard-drive-at-1-1-mb-s-during-heavy-writes-qlc-nand-offers-higher-capacity-but-reportedly-suffers-38-percent-drop-compared-to-tlc-based-pro
- m02.jpg: https://www.notebookcheck.net/Slower-than-an-SD-card-under-heavy-load-iPhone-18-Pro-Max-s-QLC-storage-gets-tested.1403886.0.html
- m03.jpg: https://www.notebookcheck.net/fileadmin/_processed_/5/1/csm_1789928059082_5f6e185e1f.png
- m04.jpg: https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc5/Homolab-1TB-test.jpg
- m05.jpg: https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc5/IMG_20260921_012551.jpg
- m06.jpg: https://news.samsung.com/global/samsung-begins-industrys-first-mass-production-of-qlc-9th-gen-v-nand-for-ai-era
- m07.jpg: https://commons.wikimedia.org/wiki/File:MicroSD_card_between_two_fingers.jpg
- m08.jpg: https://support.apple.com/en-us/108429
- m09.mp4: https://www.youtube.com/watch?v=bwjcYyCneNc
- m10.mp4: https://www.pexels.com/video/close-up-view-of-person-plugging-a-cable-charger-into-a-smartphone-4820379/
- m11.mp4: https://www.youtube.com/watch?v=8UrN8XBP9PE
- m12.mp4: https://www.pexels.com/video/high-speed-sd-card-handling-on-orange-background-30730784/
- m13.mp4: https://www.youtube.com/watch?v=bwjcYyCneNc
- A_iphone18pro.mp4: (video Apple chính thức có sẵn trong out/src18)
- B_iphone18pro_vidbee.mkv: (video Apple chính thức có sẵn trong out/src18)

</details>
