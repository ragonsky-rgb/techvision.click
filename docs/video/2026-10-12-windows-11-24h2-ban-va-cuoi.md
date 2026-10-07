# Video: Windows 11 24H2 nhận bản vá cuối ngày 13/10, kiểm tra và lên 26H2 (series A, đăng T2 12/10/2026)

> Trạng thái: **DỰNG XONG 07/10/2026** trên Mac, kiểu linh vật TV nhỏ (ảnh/clip thật TO), giọng **OmniVoice** (long-ref-20s), intro A 1,5s, 45,4 giây, -13,9 LUFS / đỉnh -3,5 dBTP.
> File: `00 - VIDEO XONG/2026-10-12 TechVision - windows-11-24h2-ban-va-cuoi.mp4` (26 MB, CRF 16) + `_ban-nhe-10MB/` (9 MB). Thumbnail: `out/series/win1012-thumb-ngang.jpg` / `-doc.jpg` (A, gạch 24H2, tiêu đề "Bản Windows này hết vá 13/10").
> **Facebook Reels ĐÃ HẸN 12/10/2026 19:00** (video_id 1413736466964569, https://www.facebook.com/reel/1413736466964569, anh Long nói "đăng" 07/10). YouTube API chưa được duyệt (thư 05/10: đang xét) nên hẹn qua Chrome: **YouTube Shorts ĐÃ HẸN 12/10/2026 19:00** (https://youtube.com/shorts/XPbIEQaf67Y). **TikTok @longtechvision ĐÃ HẸN 12/10/2026 19:00** (07/10, anh Long kéo file lần 2 sau khi Chrome mất kết nối, em điền chú thích + giờ).
> Trang dựng: `techvision-video-kit/mascot/pages/win1012.html` (sinh từ `out/win1012/page.json` bằng `scripts/mascot_page.py`). Giọng + tiếng: `scripts/build_win.py` (nhạc Future House 134, -19 dB).

- Series A "Đừng bị con số đánh lừa": máy đang chạy "Windows 11" vẫn có thể hết bản vá, con số quyết định là phiên bản **24H2** (gạch đỏ ở cảnh 1).
- Bài web ăn theo: https://techvision.click/articles/windows-11-26h2-co-gi-moi-cach-cap-nhat-may-nao-nhan-2026.html (hẹn lên 12/10/2026 15:00, trước giờ đăng video 19:00).
- Luật một sản phẩm: chỉ nói Windows 11, không nhắc macOS hay Windows 10 (ESU để trong bài web).

## Số liệu (đọc tận gốc 07/10/2026)

| Số | Nguồn |
|---|---|
| Windows 11 Home/Pro **24H2**: bắt đầu 1/10/2024, kết thúc **14/10/2026 06:59:59 sáng giờ Thái Bình Dương** -> bản vá thứ Ba **13/10/2026** là bản cuối | learn.microsoft.com/en-us/lifecycle/products/windows-11-home-and-pro (trang cập nhật 29/9/2026) |
| **26H2** bắt đầu 29/9/2026, kết thúc 10/10/2028 -> hỗ trợ **24 tháng** | như trên |
| 26H2 tới máy 24H2/25H2 dạng **gói kích hoạt**, khởi động lại một lần | Windows Experience Blog 29/9/2026 (qua bài web) |
| Bật "Get the latest updates as soon as they're available" để nhận sớm | như trên |
| Taskbar đặt được trên/trái/phải, Search tắt hẳn kết quả web | bài web (Windows Insider Blog, Pureinfotech) |
| Kiểm tra: Settings > System > About, dòng Version | Microsoft (qua bài web) |

Câu 1 nói "ngày mai 13/10" vì video đăng 12/10. Nếu dời lịch đăng thì phải sửa câu 1.

## Kịch bản (8 câu)

1. Máy anh chị đang chạy Windows 11, nhưng nếu là bản 24H2, thì ngày mai 13/10 là lần cuối nó nhận bản vá bảo mật.
2. Microsoft ghi rõ trên trang vòng đời sản phẩm: bản 24H2, Home và Pro, hết hỗ trợ sau bản vá tháng 10 năm nay.
3. Kiểm tra chỉ mất 10 giây: vào Cài đặt, chọn Hệ thống, chọn Giới thiệu, rồi nhìn dòng Phiên bản.
4. Nếu thấy 24H2, vào Windows Update, bật nhận bản cập nhật sớm, máy sẽ được lên bản 26H2.
5. Tin vui là bản mới tới dưới dạng gói kích hoạt: dung lượng nhỏ, khởi động lại một lần là xong, không phải cài lại máy.
6. Bản 26H2 cho đặt thanh tác vụ lên trên, sang trái, sang phải, và tắt hẳn kết quả web trong ô tìm kiếm.
7. Bản này được hỗ trợ 24 tháng, tới tháng 10/2028. Nhớ sao lưu dữ liệu trước khi cập nhật.
8. Cách cập nhật từng bước, em để chi tiết trong bài trên TechVision.

Whisper soát mix.wav 8/8 câu đạt (07/10). Câu 5 bản đầu "tải nhỏ" bị nghe thành "tài nhỏ" ở cả 2 bản thu, đổi thành "dung lượng nhỏ" rồi thu lại thì sạch. "24H2" viết "hai tư hát hai" ra đúng "24H2".

Lời đọc cho OmniVoice: `techvision-video-kit/out/win1012/script_voice.txt` (24H2 = "hai tư hát hai", 26H2 = "hai sáu hát hai", 2028 = "hai nghìn không trăm hai mươi tám").

## Media (out/win1012/media/manifest.json, trợ lý con gom 07/10)

| Cảnh | File | Credit |
|---|---|---|
| 1 | 03 cô gái châu Á dùng laptop (clip), 01 ảnh Windows 11 2026 Update | Video: Pexels / Yan Krukau · Ảnh: Microsoft |
| 2 | 20 bảng Releases trang vòng đời (giờ Việt Nam: 24H2 "Oct 13, 2026"), ghép cột Version + End Date, khung đỏ TechVision vẽ | Ảnh chụp màn hình: Microsoft Learn |
| 3 | 08 tay rê touchpad (clip), 07 Settings > System > About, Version 24H2 | Video: Pexels / RDNE Stock project · Ảnh: Pureinfotech |
| 4 | 09 Windows Update có công tắc nhận sớm, 17 About đã lên 26H2 | Ảnh: Pureinfotech |
| 5 | 11 cài gói kích hoạt KB5121794, 12 mở nắp bật laptop (clip) | Ảnh: Pureinfotech · Video: Pexels / Matthew Twin |
| 6 | 13 taskbar trên cùng, 14 taskbar bên trái, 16 tắt kết quả web trong Search | Ảnh: Windows Central |
| 7 | 18 cắm USB sao lưu (clip, đã crop bỏ logo ThinkPad) | Video: Pexels / Konsta Nurkkala |
| 8 | 19 ảnh chụp đầu bài TechVision (chụp từ bản build local vì bài hẹn 12/10) | TechVision |

Trang vòng đời Microsoft tự đổi ngày theo múi giờ người xem: giờ Thái Bình Dương ghi 24H2 hết "Oct 14, 2026", giờ Việt Nam ghi "Oct 13, 2026". Video dùng bản giờ Việt Nam, khớp lời đọc. Không có ảnh "Restart now" sạch nên cảnh 5 dùng ảnh cài gói + clip bật máy.

## Gói đăng

UTM chung: `?utm_source=<nguồn>&utm_medium=social&utm_campaign=video-windows-11-24h2-ban-va-cuoi`

**TikTok** (link để bio)
```
Máy chạy Windows 11 chưa chắc còn được vá ⚠️ Bản 24H2 Home và Pro nhận bản vá cuối ngày 13/10/2026. Kiểm tra 10 giây: Cài đặt > Hệ thống > Giới thiệu > Phiên bản. Thấy 24H2 thì vào Windows Update lên 26H2, gói nhỏ, khởi động lại một lần. #windows11 #windows #laptop #techvision
```
Link bio: https://techvision.click/articles/windows-11-26h2-co-gi-moi-cach-cap-nhat-may-nao-nhan-2026.html?utm_source=tiktok&utm_medium=social&utm_campaign=video-windows-11-24h2-ban-va-cuoi

**YouTube Shorts** (mô tả YouTube CẤM ký tự `<` `>`, dùng `›`)

Tiêu đề: `Windows 11 24H2 nhận bản vá cuối 13/10: kiểm tra máy trong 10 giây #Shorts`

Mô tả:
```
Theo trang vòng đời sản phẩm của Microsoft, Windows 11 phiên bản 24H2 bản Home và Pro kết thúc hỗ trợ ngày 14/10/2026 theo giờ Mỹ, nghĩa là bản vá ngày 13/10/2026 là bản cuối. Máy vẫn chạy Windows 11 nhưng sẽ không còn nhận bản vá bảo mật. Kiểm tra: Cài đặt › Hệ thống › Giới thiệu, xem dòng Phiên bản. Nếu là 24H2, vào Windows Update, bật nhận bản cập nhật sớm để lên 26H2 (Windows 11 2026 Update, phát hành 29/9/2026): gói kích hoạt tải nhỏ, khởi động lại một lần, không cài lại máy. 26H2 cho đặt taskbar ở cạnh trên, trái, phải, tắt hẳn kết quả web trong Search, và được hỗ trợ 24 tháng tới tháng 10/2028. Nhớ sao lưu dữ liệu trước khi cập nhật.

Cách cập nhật từng bước và cách hoãn nếu chưa muốn:
https://techvision.click/articles/windows-11-26h2-co-gi-moi-cach-cap-nhat-may-nao-nhan-2026.html?utm_source=youtube&utm_medium=social&utm_campaign=video-windows-11-24h2-ban-va-cuoi

Ảnh/video: Microsoft, Microsoft Learn (ảnh chụp màn hình), Pureinfotech, Windows Central, Pexels (Yan Krukau, RDNE Stock project, Matthew Twin, Konsta Nurkkala). Giọng đọc tổng hợp bằng AI từ giọng thật của tác giả. #Shorts #windows11
```

**Facebook Reels**
```
Máy đang chạy Windows 11 chưa chắc còn được vá. Theo Microsoft, bản 24H2 Home và Pro nhận bản vá bảo mật cuối cùng ngày 13/10/2026. Kiểm tra trong 10 giây: Cài đặt > Hệ thống > Giới thiệu > Phiên bản. Nếu thấy 24H2, vào Windows Update bật nhận bản cập nhật sớm để lên 26H2, gói nhỏ, khởi động lại một lần là xong. Cách cập nhật từng bước: https://techvision.click/articles/windows-11-26h2-co-gi-moi-cach-cap-nhat-may-nao-nhan-2026.html?utm_source=facebook&utm_medium=social&utm_campaign=video-windows-11-24h2-ban-va-cuoi
#Windows11 #Windows #TechVision
```
