# Video thử nghiệm: Lịch sử 8 đời CEO Apple, dựng kiểu cắt dán giấy (16/09/2026)

**Đây là bản THỬ dòng phong cách mới**, không phải video tin tức thường lệ. Mục đích: kiểm xem
dòng "cắt dán giấy kiểu Vox" có làm được bằng công cụ đang có không, tốn bao nhiêu, vướng ở đâu.

**Trạng thái: DỰNG XONG 16/9, CHƯA đăng, chờ anh Long duyệt.**
Bản cuối: `~/techvision-video-kit/out/ceo/lich-su-ceo-apple-final.mp4` - 34,90 giây, 1080x1920, 22 MB.
Dựng lại: `python3 scripts/build_ceo.py voice|motion|base|caps|final` trong kit.

## Vì sao được dùng Flow cho video này

Luật 13/08/2026 cấm dùng Flow/AI sinh video. Ngày 15/09/2026 anh Long mở **ngoại lệ riêng cho dòng
cắt dán giấy này**, kèm điều kiện tự đặt:

- Không vẽ mặt người thật.
- Số liệu và mốc thời gian phải kiểm tận gốc, không để mô hình bịa.
- Giọng đọc vẫn là OmniVoice, không dùng giọng AI của Flow.
- Không cài tiện ích bên thứ ba, chạy trong Chrome của anh Long.

**Video tin tức thường vẫn giữ luật cũ:** clip chính hãng + stock CC0 + ảnh chụp màn hình.

## Mốc thời gian lên hình

| Mốc | Nội dung | Nguồn |
|---|---|---|
| 1977 | Michael Scott, CEO đầu tiên | lịch sử công ty, phổ biến |
| 1981 | Mike Markkula | như trên |
| 1983 | John Sculley từ Pepsi về | như trên |
| 1985 | Steve Jobs bị tước quyền điều hành | như trên |
| 1993 | Michael Spindler | như trên |
| 1996 | Gil Amelio | như trên |
| 1997 | Jobs quay lại làm CEO tạm quyền | như trên |
| 2011 | Tim Cook tiếp quản | như trên |
| **1/9/2026** | **John Ternus nhận bàn giao, CEO thứ 8** | **bài đã đăng trên techvision:** `iphone-duo-ra-mat-chinh-thuc-gia-cau-hinh-9-9-2026` (keynote 9/9 là keynote đầu của Ternus) |

Mốc 2026 là mốc duy nhất mới và có thể sai, nên đã đối chiếu lại với bài của chính site.

## Kịch bản đọc (OmniVoice)

Kịch bản gốc `out/ceo/script_voice.txt` (số viết bằng chữ cho giọng đọc), phụ đề `out/ceo/caps_lines.txt`
(số giữ dạng số).

```
Apple đã có 8 đời CEO. Và người sáng lập từng bị chính công ty mình tước quyền.

Người đầu tiên là Michael Scott, từ năm 1977. Tới năm 1981 là Mike Markkula.

Năm 1983, Steve Jobs mời John Sculley từ Pepsi về. Hai năm sau, Jobs bị tước hết quyền điều hành.

Rồi Michael Spindler, rồi Gil Amelio. Apple lao dốc.

Năm 1997, Jobs quay lại làm CEO tạm quyền, và giữ ghế tới năm 2011.

Tim Cook tiếp quản 15 năm.

Và từ ngày 1/9/2026, John Ternus là CEO thứ 8 của Apple.
```

## Bảng cảnh

| Nhịp | Mốc giọng | Hình (đầu khung) | Chuyển động |
|---|---|---|---|
| 1 | 0,00 - 4,63 | "8 CEOs", táo đỏ, 8 ghế văn phòng, "1977 - 2026" | 8 ghế bật lên lần lượt, đẩy máy chậm |
| 2 | 4,63 - 11,07 | "1977", nhà để xe, máy tính cá nhân, 2 bảng tên | lia phải, màn hình sáng lên, bảng tên trượt vào |
| 3 | 11,07 - 17,56 | "1983", chai soda, máy tính, "COCA-COLA AD" | chai nghiêng, bọt giấy nổi lên, màn hình sáng |
| 4 | 17,56 - 20,59 | "1993", mũi tên đỏ lao xuống, Spindler + Amelio | mũi tên bắn xuống, mẩu báo văng ra, rung máy |
| 5 | 20,59 - 26,90 | "1997", máy tính "hello", áo len, dấu INTERIM CEO | màn hình bật, kim tuyến rơi, dấu đóng xuống |
| 6 | 26,90 - 28,74 | "15 YEARS", dãy điện thoại 2011 - 2026, TIM COOK | dãy máy cao dần từ trái sang phải |
| 7 | 28,74 - 34,90 | "2026", JOHN TERNUS, thước cặp, dấu CEO No.8 | tách lớp giấy, dấu sáp xoay nhẹ, đẩy máy |

## Bảng kê nguồn

| # | Nguồn | Cách dùng |
|---|---|---|
| A | 7 ảnh poster cắt dán, Google Flow / **Nano Banana 2** | AI dựng riêng cho video này, **0 tín dụng**. Không có mặt người thật. |
| B | 7 clip động, Google Flow / **Omni 1.1 Flash**, ảnh ở A làm khung đầu | 12 tín dụng/clip, 720p, 8 giây, 9:16 |
| C | Giọng đọc OmniVoice cục bộ | không phải giọng AI của Flow |
| D | Phụ đề word-pop nhấn đỏ #C0392B | tự dựng, `make_caption_track.py` |

**Tổng tín dụng thực tiêu: 84** (7 clip Omni) + 20 lãng phí ở clip Veo 3.1 Fast chạy thử đầu tiên.
Ảnh không tốn tín dụng nào dù đã vẽ 18 tấm.

## Bẫy gặp phải, đọc trước khi làm video sau

1. **Flow chặn cảnh có tên người nổi tiếng, chặn ở CẢ ẢNH lẫn CÂU LỆNH.**
   Lỗi trả về: "Câu lệnh này có thể vi phạm chính sách của chúng tôi về việc tạo video liên quan
   đến người nổi tiếng". Cảnh 1983 bị chặn vì câu lệnh có chữ "JOHN SCULLEY"; viết lại bỏ tên thì qua.
   Cảnh 1997 bị chặn **hai lần** dù câu lệnh đã sạch tên, vì **chính tấm ảnh in chữ "STEVE JOBS 1997"**.
   Phải vẽ lại ảnh, thay bảng tên bằng dòng chữ trung tính `"THE FOUNDER RETURNS"` thì mới chạy được.
   **Luật rút ra: đừng in tên người thật lên poster của nhịp nào cần làm động.** Tên cứ để phụ đề nói.
2. **Nhớ bỏ cả câu "No people, no faces" khỏi câu lệnh động** - nhắc tới người là dễ bị soi.
3. **Flow không có 1080p thật.** Mọi model đều xuất 720p; menu tải có mục "1080p" nhưng ghi rõ
   "Độ tăng độ phân giải" (upscale), và lần thử đầu **không tải về được file** - phải chọn 720p.
   Khung giao vẫn 1080x1920, phóng từ 720x1280 lên. Với tranh giấy có hạt in thì không lộ.
4. **Giá theo model** (9:16, 8 giây, x1): Omni 1.1 Flash **12**, Veo 3.1 Lite/Fast **20**,
   Veo 3.1 Quality **100**. Ảnh Nano Banana 2 **0**.
5. **Chọn ảnh trong hộp "Chọn một hình ảnh khung" thì dùng ô tìm kiếm**, đừng cuộn: danh sách tự
   sắp lại theo "Gần đây" và **tự cuộn về mục đang chọn sau khoảng 2 giây**, nên cuộn xong bấm là
   trượt mục. Ô tìm kiếm chỉ khớp **tên** (sinh từ câu lệnh), không khớp nội dung: gõ "1977" ra rỗng,
   gõ "name p" thì ra đúng.
6. **Tải từng hàng ra `~/Downloads/tải xuống.zip`** (trùng tên, phải dọn sau mỗi lần tải).
   Chỉ tải được khi Chrome đã tắt "hỏi nơi lưu".
7. **Clip Flow là 24fps**, kit chạy 30fps - phải `fps=30` khi cắt, nếu không lệch mốc phụ đề.
8. **Cách đọc NĂM trong kịch bản TTS** (anh Long sửa 16/09, xem mục dưới). Bản 1 viết
   "tới năm tám mươi mốt", "năm tám mươi ba", "năm chín mươi bảy" - nghe thành số thứ tự chứ không
   phải năm. Vì clip Flow dài 8 giây mà nhịp dài nhất mới 6,2 giây nên **sửa giọng không phải dựng
   lại cảnh nào**, chỉ chạy lại `voice` rồi `motion|base|caps|final`.

## Cách đọc năm

Đã tách ra thành luật chung cho mọi video giọng máy: **`docs/video/tts-cach-doc-so.md`**.
Tóm tắt: **19xx = hai số đầu đọc rời, hai số cuối đọc thành số** (`một chín bảy mươi bảy`),
**20xx đọc đầy đủ** (`hai nghìn không trăm mười một`). Anh Long chốt 16/09 sau khi nghe 4 mẫu.
Video này đã qua 3 bản giọng: bản 1 rút gọn còn "năm tám mươi mốt" (sai hẳn), bản 2 đọc rời cả
bốn số "một chín bảy bảy" (nghe như số điện thoại), bản 3 là bản đạt.

## Gói đăng (CHƯA đăng, chờ duyệt)

**TikTok**
```
Apple đã có 8 đời CEO trong 49 năm, và người sáng lập từng bị chính công ty mình tước quyền 😳 Từ Michael Scott 1977 tới John Ternus 1/9/2026. #apple #steve #timcook #johnternus #lichsucongnghe #techvision
```

**YouTube Shorts**

Tiêu đề: `8 đời CEO Apple trong 49 năm, từ 1977 tới John Ternus #Shorts`

Mô tả:
```
Lịch sử ghế CEO của Apple, từ Michael Scott năm 1977 tới John Ternus ngày 1/9/2026:
1977 Michael Scott - 1981 Mike Markkula - 1983 John Sculley - 1993 Michael Spindler - 1996 Gil Amelio - 1997 Steve Jobs (tạm quyền) - 2011 Tim Cook - 2026 John Ternus.

Keynote đầu tiên của John Ternus trên cương vị CEO:
https://techvision.click/articles/iphone-duo-ra-mat-chinh-thuc-gia-cau-hinh-9-9-2026.html?utm_source=youtube&utm_medium=social&utm_campaign=video-lich-su-ceo-apple

Hình minh họa dựng bằng AI (Google Flow), không dùng ảnh chân dung người thật. #Shorts #Apple #JohnTernus
```

**Facebook Reels**
```
49 năm, 8 đời CEO. Và điều lạ nhất: người sáng lập Apple từng bị chính công ty mình tước hết quyền điều hành năm 1985, rồi quay lại làm CEO tạm quyền năm 1997.
Người thứ 8 là John Ternus, nhận bàn giao từ Tim Cook ngày 1/9/2026.
Keynote đầu tiên của ông: https://techvision.click/articles/iphone-duo-ra-mat-chinh-thuc-gia-cau-hinh-9-9-2026.html?utm_source=facebook&utm_medium=social&utm_campaign=video-lich-su-ceo-apple
Hình minh họa dựng bằng AI (Google Flow).
```

TikTok không bấm được link trong caption: để link bio với `utm_source=tiktok`.

**Bắt buộc ghi rõ hình dựng bằng AI** ở mô tả cả 3 nền tảng - cùng tinh thần với luật ảnh AI của web
(rule 08/08/2026: được dùng hình AI nhưng phải khai rõ).
