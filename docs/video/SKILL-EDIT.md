# Skill edit video - luật nghề cho video dọc kênh TechVision

Viết ngày 27/08/2026 theo yêu cầu của anh Long. Đây là phần **tay nghề dựng**, khác với
`AGENTS.md` (quy trình và luật nội dung). Đọc cả hai.

Mỗi luật dưới đây đều kèm lý do. Luật không có lý do thì không đáng theo.

---

## 1. Nhịp cắt - thứ quyết định giữ chân

Người xem Shorts mang theo một "ngân sách chú ý" rất ngắn. Hình đứng yên quá lâu là
tụt giữ chân, kể cả khi lời thoại vẫn hay.

| Nền tảng | Nhịp đổi hình |
|---|---|
| TikTok | 1,5 tới 3 giây |
| Reels | 2,5 tới 4 giây |
| YouTube Shorts | 3 tới 5 giây, video hướng dẫn thì nới được |

**Luật áp cho kênh:** không cảnh nào để hình đứng yên quá **3 giây**.

Kênh này không có cảnh quay, chỉ có ảnh tĩnh. Cách xử lý là **cắt punch**: vẫn dùng đúng
tấm ảnh đó nhưng nhảy sang khuôn hẹp hơn. Mắt đọc ra là một cú cắt, dù không có cảnh mới.
Đã cài trong `build.py` của video 27/8:

- cảnh dưới 3,2 giây: một nhịp, Ken Burns trôi nhẹ
- cảnh 3,2 tới 5 giây: hai nhịp, nấc zoom 1,00 rồi 1,13
- cảnh trên 5 giây: ba nhịp, nấc 1,00 / 1,13 / 1,26

Đừng đẩy nấc quá 1,3 - ảnh nguồn chỉ 1080 chiều ngang, phóng hơn là thấy vỡ.

## 1b. Chuyển động phải mượt - `zoompan` giật là do làm tròn

Anh Long báo ngày 27/8: "hình ảnh tăng giảm nhìn nó khựng quá". Đúng, và đây là lỗi kỹ thuật
chứ không phải cảm giác.

`zoompan` của ffmpeg tính toạ độ cắt rồi **làm tròn về số nguyên ở không gian ảnh gốc**, mỗi
khung một lần. Ảnh gốc rộng 1080, đầu ra cũng 1080, nên mỗi bước làm tròn là trọn một pixel
đầu ra. Khung thì nhích, khung thì đứng yên, mắt đọc ra là giật từng bậc.

**Cách sửa: phóng ảnh lên trước khi zoompan, rồi cho zoompan xuất thẳng về 1080x1920.**

```
scale=3240:5760:flags=lanczos,zoompan=z='...':s=1080x1920
```

Phóng 3x thì một pixel gốc chỉ còn 1/3 pixel đầu ra, làm tròn không nhìn ra nữa. Đo trên
đúng một cảnh, lấy sai khác trung bình giữa hai khung liên tiếp:

| Cách dựng | Tỷ lệ giật (độ lệch / trung bình) |
|---|---|
| zoompan thẳng trên ảnh 1080 | **0,61** |
| phóng 3x rồi zoompan | **0,19** |

Thấp hơn là mượt hơn. Mất thêm khoảng 3 giây mỗi cảnh, đáng.

**Bẫy thứ hai, cùng ngày:** cắt nhịp lúc đầu làm bằng một biểu thức `if()` nhảy nấc zoom giữa
chừng trong cùng một clip. Cái đó **không đọc ra như một cú cắt, nó đọc ra như lỗi**. Cắt thật
phải là ranh giới giữa hai clip: dựng từng nhịp thành clip riêng rồi nối lại, sau đó mới dán
thẻ số đè lên cả cảnh.

Mỗi nhịp đổi cả khuôn chứ không chỉ đổi zoom: nhịp 1 tâm hơi cao (`cy 0,45`), nhịp 2 tâm hơi
thấp (`cy 0,55`), nhịp 3 lệch ngang. Có đổi khuôn thì mới ra cảm giác đổi máy quay.

## 2. Vùng an toàn - chỗ dễ sai nhất và không ai nhắc

Nền tảng đè giao diện lên video. Chữ rơi vào đó là **coi như không có**, dù trong file vẫn hiện.

| Cạnh | Bị che | Ghi chú |
|---|---|---|
| Trên | ~140px | |
| Dưới | **TikTok ~400px · Reels ~500px · Shorts ~320px** | lấy mốc xấu nhất là 500 |
| Trái | ~60px | |
| Phải | ~180px | cụm nút tim / bình luận / chia sẻ, TikTok thêm nút Playlist từ 1/2026 |

**Luật áp cho kênh:** mọi chữ phải nằm trong khoảng **y từ 140 tới 1440** trên khung 1920.

Ngày 27/8 đã dính đúng lỗi này: dòng credit đặt ở `H - 96`, tức sát đáy, nằm trọn trong vùng
TikTok che. Đã dời lên `H - 480`. **Kiểm bằng mắt trước khi giao**: trích một khung rồi tô đè
ba vùng đỏ như `chk/safe-small.jpg`, nhìn xem có chữ nào lọt vào không.

## 3. Phụ đề

- **Có mặt từ giây thứ nhất.** Đây là một trong số ít thay đổi nâng thời lượng xem trung bình
  rõ rệt, vì phần lớn người xem để tắt tiếng.
- Cỡ chữ **64px** trên khung 1080 chiều ngang. Cỡ 46 nhìn trên máy tính thì đủ nhưng trên điện
  thoại là bé. Dài quá thì tự hạ xuống 54 chứ không xuống dòng.
- Bề ngang tối đa **980px**, đặt giữa. Tránh cụm nút bên phải.
- Cụm dưới **22 ký tự**, chữ trắng đậm, viền đen 4px, từ đang đọc nhấn `#C0392B`.
- **Ngắt cứng ở cuối câu.** Để chữ cuối câu này dính sang câu sau là đọc vấp.
- **Không để cụm mồ côi** một hai chữ. Gộp vào cụm trước nếu tổng dưới 34 ký tự.
- **Chữ lấy từ kịch bản, KHÔNG lấy từ bản bóc Whisper.** Whisper nghe nhầm ("gặp" thay "gập",
  "rời" thay "dời", "0 giờ" thành "không giờ") và còn bịa thêm câu ở đoạn cuối. Whisper chỉ
  dùng để lấy mốc. Chữ trên màn hình để **dạng số** theo luật kênh.

## 4. Thẻ số liệu

- Đặt ở `y: 0.20`, tức phần trên khung, không đè lên phụ đề ở 0,62.
- **Thẻ phải sống hết đoạn nó nói về.** Ngày 27/8 thẻ "Apple chưa công bố sản phẩm nào" tắt sau
  2,2 giây trong khi lời thoại còn đọc tin đồn thêm 4 giây, tức có đoạn nói tin đồn mà trên hình
  không còn chip cảnh báo. Sai điều 4 của `AGENTS.md`.
- Số có dấu chấm phân nghìn hoặc ngày tháng thì `countUp: false`.

## 5. Mở đầu và kết

- **Khung một là con số hoặc hình động**, không phải thẻ chữ tĩnh. Khoảng 30 tới 50% người xem
  rời đi trong 3 giây đầu, nên đây là chỗ đắt nhất của cả video.
- Câu đầu **tối đa 8 từ**.
- **Khung cuối nên nối lại được với khung đầu.** Video lặp lại mượt thì thời lượng xem cộng dồn
  tăng. Cách rẻ nhất: cảnh cuối dùng lại tông màu hoặc bố cục của cảnh đầu.
- Câu mời theo dõi phải nói rõ **người xem được gì**, không nói suông "nhớ theo dõi".

## 6. Tiếng

- **Không để khoảng lặng** (luật anh Long chốt 27/08/2026). Khoảng chết là cách nhanh nhất làm
  tụt giữ chân giữa video.
  - Cắt im lặng đầu và cuối từng đoạn: `silenceremove` hai đầu, ngưỡng `-45dB`.
  - Nối các đoạn **không chèn im lặng** ở giữa.
  - Kiểm lại bằng `silencedetect=noise=-40dB:d=0.35`, không ra dòng nào là sạch.
- **Tua 1,1x** (luật anh Long chốt 27/08/2026): `atempo=1.1`. Nhớ **tính lại toàn bộ mốc cảnh và
  `durationInFrames` của thẻ** sau khi tua, chia mốc cũ cho 1,1.
- Nhạc nền thấp hơn giọng ít nhất 12dB. `amix` mặc định `normalize=1` sẽ tự chia đều theo số
  nguồn và dìm giọng mà không báo gì - luôn đặt `normalize=0`.

## 7. Cắt J và cắt L - dùng khi có cảnh quay

Cắt J là tiếng của cảnh sau vào trước hình. Cắt L là tiếng cảnh trước kéo dài qua hình mới.
Đây là cách chuyển cảnh mượt hơn hẳn hiệu ứng mờ chồng.

Kênh này hiện dựng từ ảnh tĩnh với một dải giọng liền nên **chưa dùng tới**. Ghi lại để khi nào
có cảnh quay thật thì áp. Cùng nhóm còn có **match cut**: cắt sang hình có bố cục hoặc chuyển
động trùng khớp, ví dụ từ khuôn tròn của Apple Park sang khuôn tròn cụm camera.

## 8. Kiểm trước khi giao - không được bỏ

1. Trích 8 tới 16 khung rải đều, **nhìn tận mắt**, ghép thành một tấm để soi một lượt.
2. Tô đè ba vùng an toàn lên một khung, xem có chữ nào lọt vùng bị che không.
3. Soi từng con số trên hình khớp lời thoại, không lệch một ký tự.
4. Mọi ảnh mượn có dòng credit, ảnh CC BY phải có tên tác giả.
5. Đo lại độ dài, so với mốc giọng.
6. Chạy `silencedetect` xem còn khoảng lặng không.

## 9. Cảnh động - đừng để cả video toàn ảnh tĩnh

Anh Long báo ngày 27/8: "hình ảnh không thì nhìn hơi chán". Đúng. Ken Burns dù mượt tới đâu
vẫn là ảnh tĩnh giả vờ động, xem một lúc là nhận ra.

**Thứ tự tìm cảnh động, đã thử thật ngày 27/8:**

**1. Wikimedia Commons - lọc theo loại video.** Miễn phí, không cần khoá API, có clip 4K thật.
```
https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search
  &gsrsearch=<tu khoa> filetype:video&gsrnamespace=6&gsrlimit=5
  &prop=imageinfo&iiprop=url|size|mime|extmetadata
```
Lấy được `File:Apple Park 1 2018-12-23.webm`, 3840x2160, CC BY-SA 4.0, tác giả FASTILY.
Kho này mỏng nhưng thứ tìm được thì dùng thật được. **CC BY và CC BY-SA đều bắt buộc ghi tên
tác giả.**

**2. VOD keynote của chính Apple.** Trang `apple.com/apple-events` nhúng sẵn link `m3u8` của các
sự kiện cũ, có tận bản 1080p và 4K, `ffmpeg -ss <giây> -i <prog_index.m3u8> -t <giây>` là cắt
được. Nguồn chính hãng, ghi credit là dùng được.
**Nhưng cẩn thận:** phần lớn là phim sản phẩm đời hiện tại và có nhận diện sự kiện cũ dán trên
hình (thử ngày 27/8 ra cảnh WWDC24 và macro iPhone 17). Đưa vào bài nói về máy chưa ra mắt là
làm người xem hiểu nhầm. Chỉ dùng khi cảnh đó **không có nhãn sự kiện và không phải sản phẩm
đang bàn**, hoặc dán rõ dòng "đời hiện tại" như với ảnh tĩnh.

**3. Cảnh anh Long tự quay.** Vẫn là nguồn sạch nhất, không vướng gì.

**Chưa mở được:** Pexels và Pixabay có kho video CC0 lớn hơn hẳn hai nguồn trên nhưng **đều cần
khoá API miễn phí**. Máy chưa có khoá nào. Xin một khoá rồi cắm vào kit là mở ra nguồn cảnh động
thật sự dồi dào - đây là việc đáng làm nhất để video hết chán.

**Đưa clip ngang vào khung dọc** thì xử lý y như ảnh: nền phóng to làm mờ và tối đi, chủ thể
giữ nguyên tỷ lệ đặt ở `0,44` chiều cao. Clip ngắn hơn cảnh thì `-stream_loop -1`.
Cảnh dùng clip thật **không thêm Ken Burns** - nó đã có chuyển động thật rồi, chồng thêm là rối.

Dòng credit trên cảnh clip không đốt thẳng vào ảnh được, phải xuất PNG nền trong rồi dán đè
(`cred-png.py`).

## 10. Cân màu bằng Palmier - đo rồi mới chỉnh

Ảnh trộn nhiều nguồn thì sáng tối lệch nhau rất rõ khi cắt liên tiếp. Đây là khâu bắt buộc,
làm ngày 27/8 cho video Apple Event.

**Cân trên bản SẠCH, chưa dán thẻ và phụ đề.** Nếu cân lên bản đã có thẻ thì màu đỏ nhấn
`#C0392B` cũng bị kéo theo. `build.py` giữ sẵn `clips/<canh>_raw.mp4` chính là bản sạch đó.

**Thứ tự:** đưa từng cảnh vào Palmier, `inspect_color` đọc scope trước, chỉnh, rồi `inspect_color`
lại để xác nhận. Không chỉnh mò rồi nhìn bằng mắt.

Ba con số đáng nhìn nhất: `luma.black` (nên quanh 0,02 tới 0,10, cao hơn là đục),
`luma.white` (nên 0,80 tới 0,95), và `luma.clipLowPct` (trên 5% là mất chi tiết vùng tối).
Rồi so `luma.mean` giữa các cảnh - **độ lệch chuẩn của dãy này chính là thước đo lệch tông**.

Kết quả đo được lần 27/8, 13 cảnh:

| | trước | sau |
|---|---|---|
| sáng thấp nhất tới cao nhất | 0,144 - 0,440 | 0,257 - 0,396 |
| độ lệch chuẩn | 0,102 | **0,056** |
| cảnh bị kẹt đen nặng nhất | 33,7% | 1,1% |

**Đừng ép về bằng nhau tuyệt đối.** Cảnh đêm với cảnh sản phẩm nền trắng vốn phải khác nhau,
kéo bằng hết là mất luôn ý đồ. Đích là hết cú nhảy chói mắt, không phải 13 cảnh giống hệt.

**Bẫy đã trả giá:**
- `inspect_color` gọi bằng `mediaRef` thì dữ liệu nằm dưới khoá **`media`**, gọi bằng `clipId`
  mới nằm dưới **`clip`**. Bóc sai khoá là ra **toàn số 0** mà không báo lỗi gì.
- `apply_color` **gộp** lên grade cũ, không cộng dồn. Nước chỉnh thứ hai phải truyền **giá trị
  tuyệt đối**, không phải phần chênh.
- Tên tham số hay đoán sai: `import_media` cần `source` là **object** (`{"path": "..."}`),
  `add_clips` dùng `entries` chứ không phải `clips`, `export_project` chỉ nhận `resolution` là
  `720p / 1080p / 2K / 4K / Match Timeline`. Cứ truyền bừa một khoá sai thì máy trả về đúng
  danh sách khoá hợp lệ - đó là cách dò nhanh nhất.
- Palmier **không mở project nào thì MCP trả "Editor not available"**, và app treo thì cổng
  19789 mở nhưng không trả lời gì cả. `open -a PalmierPro` rồi `manage_project action=open`
  là xong.

Cân xong thì `export_project`, rồi dán thẻ và phụ đề lên bản đã cân bằng ffmpeg
(`ghep-cuoi.py`), dùng `-itsoffset` để đặt từng thẻ vào đúng mốc.

## Nguồn đã đọc

Nhịp cắt và giữ chân: [Short-Form Video Pacing Guide](https://shortzly.com/blog/short-form-video-pacing-editing-guide) ·
[YouTube Shorts Retention Curve Playbook](https://aibrify.com/blog/youtube-shorts-retention-curve-playbook) ·
[The First 3 Seconds](https://virvid.ai/blog/first-3-seconds-hook-faceless-shorts-2026) ·
[Ideal YouTube Shorts Length & Format](https://www.opus.pro/blog/ideal-youtube-shorts-length-format-retention)

Vùng an toàn và phụ đề: [TikTok Safe Zone 2026](https://kreatli.com/guides/tiktok-safe-zone) ·
[Safe Zone Hub 2026](https://kreatli.com/guides/safe-zone-guide) ·
[Best Caption Placement for Short-Form Video](https://blitzcutai.com/blog/best-caption-placement-short-form-video)

Cắt J, cắt L, match cut: [Adobe - L cut và J cut](https://www.adobe.com/creativecloud/video/post-production/cuts-in-film/l-and-j-cut.html) ·
[Vimeo - J-Cut vs L-Cut](https://vimeo.com/blog/post/guide-to-film-cuts)
