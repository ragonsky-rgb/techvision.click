# Video: Chuyển mạng giữ số, nhớ nhắn YCCM gửi 1441 trong 4 giờ (series A, đăng T4 14/10/2026) - THỬ LINH VẬT FLOW

> Trạng thái: **DỰNG XONG 09/10/2026** trên Mac. Video đầu tiên dùng **linh vật TV vẽ bằng Google Flow** thay cho TV 3D (anh Long dặn "làm video tiếp theo sử dụng linh vật gen qua flow thử"). Giọng **OmniVoice** (long-ref-20s). 39,7 giây, -13,9 LUFS.
> File: `00 - VIDEO XONG/2026-10-14 TechVision - chuyen-mang-giu-so-yccm-1441.mp4` + `_ban-nhe-10MB/`.
> **CHƯA ĐĂNG.** Chờ anh Long nói "đăng": Facebook qua `fb_reel.py` (hẹn 14/10 19:00), YouTube + TikTok qua Chrome (nhớ kiểm handle @longtechvision + ô "Ai xem được" = Mọi người).
> Trang dựng: `techvision-video-kit/mascot/pages/cms1014.html` (sinh từ `out/cms1014/page.json`, khối `flow_mascot`). Giọng + tiếng: `scripts/build_cms.py` (nhạc Tropical 126 bản 2, -19 dB).

- Bài web ăn theo: https://techvision.click/articles/chuyen-mang-giu-so-2026-phi-dieu-kien-thu-tuc-3-nha-mang.html (hẹn 14/10/2026 15:00).
- Series A "Đừng bị con số đánh lừa": con số quyết định là **4 giờ** (nhiều hướng dẫn cũ ghi 24 giờ), nhãn đỏ cảnh 1 "QUÊN LÀ BỊ HỦY".

## Linh vật Flow (cách làm, để lặp lại)

1. Dự án Flow `92c0f3cf` (có sẵn 2 ảnh tham chiếu TV). Bấm "dùng lại câu lệnh" ở hàng có ảnh tham chiếu → thay câu lệnh → **Nano Banana 2.1, 9:16, x2, 0 tín dụng**. Câu lệnh khung: "Một tư thế toàn thân của ĐÚNG linh vật tivi cổ đỏ trong hai ảnh tham chiếu, giữ nguyên 100% thiết kế... Tư thế: <...>. Nền xanh lá chroma key #00FF00 phẳng, không bóng, không sàn. Không dùng màu xanh lá trên linh vật. Không chữ, không logo, không số."
2. 8 tư thế: cầm SIM ngạc nhiên / chỉ tay sang phải / cầm thẻ trắng nheo mắt / bước đi cầm SIM / gõ điện thoại lo lắng cạnh đồng hồ cát / ôm chồng xu / giơ ngón cái / vẫy chào. Ảnh gốc: `out/cms1014/flow/p1..p8`.
3. Làm động: chế độ **Video → Khung hình** (ảnh tư thế làm khung Bắt đầu), **Omni 1.1 Flash, 720p, 6 giây, x1 = 10 tín dụng/clip**, câu lệnh động nhẹ + "máy quay đứng yên, nền #00FF00 giữ nguyên". Tổng **80 tín dụng** (8 clip). Clip 720x1280, 24 fps.
4. Tách nền: `scripts/flow_key.sh vào.mp4 ra.webm` (che dấu ✦ góc dưới phải, chromakey 0.17/0.06 + despill) → WebM VP9 có alpha, `out/cms1014/flow/keyed/s1..s8.webm`.
5. Trang dựng: `page.json` thêm `"flow_mascot": {"clips": [...]}` → `mascot_page.py` ẩn canvas 3D, đặt clip góc dưới phải vùng trống dưới phụ đề (cao 563px), chiếu chậm nếu cảnh dài hơn clip.
- Bẫy: hộp chọn khung tự cuộn, dùng ô tìm kiếm theo TÊN ảnh (vd "holding blank card"); bấm kết quả là tự gắn vào khung Bắt đầu. Tải từng hàng ra `~/Downloads/tải xuống.zip` (tên file trong zip có dấu tiếng Việt, `unzip` báo lỗi, giải bằng Python `zipfile`). Lọc "Video" ở cột trái để chỉ còn hàng video.
- Ghi chú quy ước: hình AI trong video (linh vật) không cần chú thích riêng vì là nhân vật kênh; mô tả YouTube có câu "linh vật minh họa tạo bằng AI".

## Số liệu (trợ lý con đọc tận gốc 09/10/2026)

| Số | Nguồn |
|---|---|
| Thông tư **09/2025/TT-BKHCN** ký 24/6/2025, hiệu lực **10/8/2025**; Thông tư 35/2017 hết hiệu lực (Điều 15) | bản scan mst.gov.vn |
| Điều kiện: hoạt động **hai chiều**, kích hoạt ≥ **90 ngày** (lần đầu) / 60 ngày (từ lần 2), thông tin khớp nhà mạng cũ; trả sau: hết nợ, cước kỳ ≤ 500.000đ, không roaming 60 ngày | Điều 5 |
| Đăng ký ở **nhà mạng chuyển đến** (ứng dụng, quầy, điểm ủy quyền) | Điều 6 |
| Trong **04 giờ** kể từ khi đăng ký xong nhắn **YCCM gửi 1441**, quá hạn yêu cầu bị hủy; hủy bằng HUYCM gửi 1441 | Điều 6 (khoản "04 giờ làm việc" ở Điều 7 là hạn của nhà mạng cũ, không phải người dùng) |
| VinaPhone: 15.000 phí chuyển + 10.000 SIM + 25.000/35.000 hòa mạng = **50.000/60.000đ** | digishop.vnpt.vn |
| Viettel, MobiFone: KHÔNG kiểm được phí (trang Viettel không ghi phí, trang MobiFone chuyển hướng) | nên video chỉ nói "VinaPhone công bố" |
| Hoàn tiền khi chuyển không thành công: chỉ "giá dịch vụ chuyển mạng" | Điều 4 |

Bài web đã sửa theo kết quả này (09/10): bỏ câu "Viettel, MobiFone tương đương", hoàn tiền ghi đúng phạm vi, "1-2 ngày" ghi theo Bộ KH&CN, thay 4 ảnh thumbnail YouTube kênh khác bằng ảnh nguồn sạch.

## Kịch bản (8 câu)

1. Đổi nhà mạng mà vẫn giữ số cũ, anh chị chỉ cần nhớ một tin nhắn trong 4 giờ, quên là hồ sơ bị hủy.
2. Từ tháng 8/2025, chuyển mạng giữ số làm theo Thông tư 09 của Bộ Khoa học và Công nghệ.
3. Số phải đang nghe gọi hai chiều, đã dùng ít nhất 90 ngày, và giấy tờ phải khớp với chủ thuê bao.
4. Anh chị đăng ký ở nhà mạng muốn chuyển đến, qua ứng dụng hoặc tại cửa hàng, không phải nhà mạng đang dùng.
5. Xong thủ tục, trong 4 giờ phải nhắn YCCM gửi 1441 từ chính số đó, quá hạn là hồ sơ bị hủy.
6. VinaPhone công bố tổng phí 50 nghìn với trả trước, 60 nghìn với trả sau.
7. Khi SIM cũ mất sóng thì lắp SIM mới, thử nhận mã OTP ngân hàng và bật gọi thoại 4G.
8. Điều kiện cho thuê bao trả sau và cách hủy, em để chi tiết trong bài trên TechVision.

Lời đọc OmniVoice: `out/cms1014/script_voice.txt` (YCCM = "i xê xê em", 1441 = "một bốn bốn một", VinaPhone = "Vi na phôn", OTP = "o tê pê", 4G = "bốn gờ", câu 2 "tháng tám năm ngoái"). Bẫy mới: **"sim" đứng CUỐI câu bị nghe thành "xin"/"si"** (2 lần), giữa câu thì đọc rõ; "trọn gói" bị nghe "chọn gói".

## Media (out/cms1014/media/manifest.json)

| Cảnh | File | Credit |
|---|---|---|
| 1 | 01 tay cầm khay SIM (clip), 02 cô gái châu Á xem điện thoại (clip) | Video: Pexels / Foysal Ahmed · Video: Pexels / Anna Tarazevich |
| 2 | 04 trang đầu Thông tư 09/2025, 05 baochinhphu.vn "Quy định điều kiện, thủ tục chuyển mạng" | Ảnh chụp văn bản: Bộ KH&CN (mst.gov.vn) · Ảnh chụp màn hình: baochinhphu.vn |
| 3 | 06 khoanh ngày trên lịch (clip), 07 infographic Bộ KH&CN | Video: Pexels / SHVETS production · Ảnh: Bộ KH&CN |
| 4 | 08 trang đăng ký chuyển mạng Viettel, 09 điểm Viettel 5G trên phố | Ảnh chụp màn hình: viettel.vn · Ảnh: Unsplash / Nguyen Minh |
| 5 | 10 gõ tin nhắn (clip), 11 điều khoản "04 giờ... YCCM... 1441" cắt từ Thông tư, 12 kim đồng hồ (clip) | Video: Pexels / Hamim Rony · Ảnh chụp văn bản: Bộ KH&CN · Video: Pexels / Anton Kudryashov |
| 6 | 13 tiền đồng trong tay, 15 bảng phí VinaPhone | Ảnh: Pexels / Nguyễn Tiến Thịnh · Ảnh chụp màn hình: digishop.vnpt.vn |
| 7 | 16 SIM và que chọc SIM, 17 điện thoại + thẻ ngân hàng (clip) | Ảnh: Pexels / Pascal · Video: Pexels / Mikhail Nilov |
| 8 | 19 đầu bài TechVision (chỉ tiêu đề + sapo, chụp từ bản build local) | TechVision |

## Kiểm tra

- Âm lượng: trước -12,1 LUFS đỉnh -1,0 → sau **-13,9 LUFS, đỉnh -2,8** (ĐẠT). Thời lượng 39,7 giây, 1080x1920, 30 fps. Bản gốc 34,9 MB, bản nhẹ 7,9 MB.
- Whisper large-v3-turbo nghe bản cuối: đủ 8 câu, số đúng (4 giờ, 90 ngày, 1441, 50.000/60.000, 4G). "YCCM" Whisper chép "ICCM" (đọc "i xê xê em"), phụ đề trên hình ghi đúng YCCM.
- Ảnh bìa: `series_kit.py thumb A --title "Chuyển mạng|giữ số: nhớ nhắn|YCCM gửi 1441" --num "4 giờ" --no-strike` trên ảnh thẻ SIM (Pexels / Pascal), ảnh thật nên không cần ghi AI. File `00 - VIDEO XONG/... - thumb-ngang.jpg` + `thumb-doc.jpg`.
- Linh vật Flow: tách nền sạch, không viền xanh, đổi tư thế mỗi cảnh. Chờ anh Long xem để quyết dùng tiếp Flow hay về TV 3D.

## Gói đăng

UTM chung: `?utm_source=<nguồn>&utm_medium=social&utm_campaign=video-chuyen-mang-giu-so-yccm-1441`

**TikTok** (link để bio)
```
Chuyển mạng giữ số: quên 1 tin nhắn là hồ sơ bị hủy ⏳ Đăng ký ở nhà mạng MUỐN CHUYỂN ĐẾN, xong thì trong 4 giờ phải nhắn YCCM gửi 1441 từ chính số đó (Thông tư 09/2025). Điều kiện: số nghe gọi 2 chiều, dùng ít nhất 90 ngày, giấy tờ khớp chủ thuê bao. VinaPhone công bố tổng phí 50k trả trước, 60k trả sau. #chuyenmang #sim #viettel #techvision
```
Link bio: https://techvision.click/articles/chuyen-mang-giu-so-2026-phi-dieu-kien-thu-tuc-3-nha-mang.html?utm_source=tiktok&utm_medium=social&utm_campaign=video-chuyen-mang-giu-so-yccm-1441

**YouTube Shorts** (mô tả CẤM ký tự `<` `>`)

Tiêu đề: `Chuyển mạng giữ số: nhắn YCCM gửi 1441 trong 4 giờ, quên là bị hủy #Shorts`

Mô tả:
```
Chuyển mạng giữ số hiện làm theo Thông tư 09/2025/TT-BKHCN của Bộ Khoa học và Công nghệ, hiệu lực từ 10/8/2025. Điều kiện: thuê bao đang hoạt động hai chiều, đã kích hoạt ít nhất 90 ngày (lần chuyển đầu), thông tin giấy tờ khớp với nhà mạng đang dùng. Thủ tục làm ở nhà mạng muốn chuyển đến (ứng dụng hoặc cửa hàng). Trong 4 giờ kể từ khi đăng ký xong phải nhắn YCCM gửi 1441 từ chính số đó, quá hạn yêu cầu bị hủy; muốn hủy thì nhắn HUYCM gửi 1441. VinaPhone công bố tổng phí 50.000 đồng với trả trước, 60.000 đồng với trả sau (gồm phí chuyển mạng, SIM, hòa mạng). Chuyển xong: lắp SIM mới, thử nhận mã OTP ngân hàng, bật gọi thoại 4G.

Điều kiện cho thuê bao trả sau, cách hủy và các bước chi tiết:
https://techvision.click/articles/chuyen-mang-giu-so-2026-phi-dieu-kien-thu-tuc-3-nha-mang.html?utm_source=youtube&utm_medium=social&utm_campaign=video-chuyen-mang-giu-so-yccm-1441

Ảnh/video: Bộ Khoa học và Công nghệ, baochinhphu.vn, viettel.vn, digishop.vnpt.vn (ảnh chụp màn hình), Pexels (Foysal Ahmed, Anna Tarazevich, SHVETS production, Hamim Rony, Anton Kudryashov, Nguyễn Tiến Thịnh, Pascal, Mikhail Nilov), Unsplash (Nguyen Minh). Linh vật minh họa tạo bằng AI (Google Flow). Giọng đọc tổng hợp bằng AI từ giọng thật của tác giả. #Shorts #chuyenmanggiuso
```

**Facebook Reels**
```
Chuyển mạng giữ số mà quên 1 tin nhắn là hồ sơ bị hủy. Theo Thông tư 09/2025, sau khi đăng ký ở nhà mạng muốn chuyển đến, anh chị có 4 giờ để nhắn YCCM gửi 1441 từ chính số đó. Điều kiện: số nghe gọi hai chiều, dùng ít nhất 90 ngày, giấy tờ khớp chủ thuê bao. VinaPhone công bố tổng phí 50.000đ trả trước, 60.000đ trả sau. Chi tiết điều kiện và cách hủy: https://techvision.click/articles/chuyen-mang-giu-so-2026-phi-dieu-kien-thu-tuc-3-nha-mang.html?utm_source=facebook&utm_medium=social&utm_campaign=video-chuyen-mang-giu-so-yccm-1441
#ChuyenMangGiuSo #SIM #TechVision
```
