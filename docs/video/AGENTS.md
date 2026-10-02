# Làm video cho kênh TechVision - đọc file này trước

Phiên AI mới nhận việc video thì bắt đầu từ đây. `AGENTS.md` ở gốc repo chỉ nói về **bài viết**,
không nói gì về video. Xưng hô với chủ kênh: **anh Long**. Trả lời bằng tiếng Việt.

Kênh TechVision là **tin công nghệ tiêu dùng**. Kênh Chạm AI là kênh khác, B2B, dây chuyền khác
hẳn (`~/chamai-video-kit`) - đừng lẫn hai bên.

---


> **Từ 27/09/2026 thư mục `out/` của kit là symlink sang ổ SSD rời** `/Volumes/Edit video  1/03_Video-Content/_video-kit/<tên-kit>-out/` (ổ máy chỉ 228 GB, hay đầy). **Cắm ổ Edit video trước khi đọc giọng hay dựng**; chưa cắm thì mọi lệnh ghi vào `out/` báo lỗi không tìm thấy. Từ 27/09/2026 CẢ bộ dựng, `~/omnivoice-env`, `~/.venvs` (Whisper) và `~/.cache/huggingface` (model OmniVoice/Whisper) cũng đã chuyển sang `/Volumes/Edit video  1/CONG-CU-VIDEO/` (có `DOC-TRUOC.txt`), chỗ cũ là symlink nên đường dẫn `~/...` vẫn dùng bình thường. Đừng đổi tên các thư mục đó.

> **Video xong lấy ở `/Volumes/Edit video  1/00 - VIDEO XONG/` (từ 30/09/2026)**, chung cho TechVision và Chạm AI, không lẫn file tạm. Tên `<ngày đăng> TechVision - <tên>.mp4`; `_ban-nhe-10MB/` bản nén, `_ban-cu/` bản bị thay. `hd_lib.render` tự chép bản cao nhất + bản nhẹ vào đó qua `scripts/thanh_pham.py` (bản sao APFS, không tốn dung lượng); PC Windows chép ra `VIDEO_EXPORT` (`D:/Techvision video`). Video dựng bằng đường khác (brag_render, sửa tay, v2 thay giọng...) thì chạy `python3 scripts/thanh_pham.py <file.mp4> [--nhe]` sau khi kiểm xong. Giao video cho anh Long luôn trỏ đường dẫn trong thư mục này, không trỏ vào `out/`.

## 1. Dây chuyền hiện tại (chốt từ 25/08/2026)

```
Gói sản xuất (docs/video/<ngày>-<slug>.md)
   -> anh Long tự đọc lời thoại, thu giọng
   -> Whisper local bóc mốc từng từ
   -> Remotion (~/techvision-video-kit) render thẻ số NỀN TRONG
   -> Palmier Pro ghép: ảnh lớp dưới, thẻ số overlay, phụ đề word-pop
   -> gói đăng (tiêu đề + mô tả + UTM) nằm cuối chính file gói sản xuất
```

Lời thoại: **anh Long tự đọc** hoặc **nhân bản giọng bằng OmniVoice** như bên Chạm AI.
Nới ngày **27/08/2026** theo yêu cầu của anh Long, trước đó luật là chỉ tự đọc.

Nếu dùng giọng nhân bản thì **kịch bản phải có hai bản**:
- **Bản đọc** (số dạng số) giữ trong gói sản xuất, dùng khi anh Long tự thu.
- **Bản cho TTS** (số phiên âm thành chữ: "mùng chín tháng chín", "hai nghìn đô") đặt ở
  `~/chamai-video-kit/out/<tên>-script.txt`, mỗi câu một dòng. Máy đọc số dạng số là vấp.
  **Chữ hiện trên màn hình vẫn để dạng số.** Đây là chỗ khác nhau giữa hai bản, đừng lẫn.

Quy trình nhân bản giọng nằm ở `~/chamai-video-kit/AGENTS.md` mục 2 và 3. Tóm tắt:
```bash
cd ~/chamai-video-kit
nohup .venv/bin/python scripts/voice.py --file out/<tên>-script.txt -o out/<tên>-voice.wav &
```
Mất khoảng 2 phút mỗi câu, chạy nền rồi làm việc khác. **Bóc lại bằng Whisper để soi từng con
số là bắt buộc** - TTS từng đọc "sáu mươi bảy phần trăm" thành "sáu phần trăm, mười bảy phần
trăm". Câu nào hỏng thì thu lại riêng câu đó rồi ghép, đừng chạy lại cả lượt.

Whisper chạy local vì **Palmier không bóc được tiếng Việt**:
```bash
~/.venvs/whisper/bin/mlx_whisper <file>.wav --language vi --word-timestamps True \
  --output-format json --output-dir out --model mlx-community/whisper-large-v3-turbo
```

Palmier Pro mở sẵn MCP ở `127.0.0.1:19789` khi app đang chạy. Phiên nào chưa nạp được MCP thì
bắc cầu bằng `curl` JSON-RPC vào cổng đó.

---

## 2. LUẬT CỨNG

1. **KHÔNG dùng Flow hay bất kỳ công cụ AI sinh video/sinh hình.** Bỏ hẳn từ 13/08/2026. Mọi
   đoạn nhắc tới Flow trong `docs/prompt-app-video-tin-tuc.md` đã hết hiệu lực.
   **NGOẠI LỆ DUY NHẤT, anh Long mở ngày 15/09/2026: dòng video "cắt dán giấy kiểu Vox".**
   Chỉ dòng này được dùng Flow (Nano Banana 2 vẽ poster, Omni 1.1 Flash làm động), kèm 4 điều
   kiện: không vẽ mặt người thật; mốc và số liệu kiểm tận gốc; giọng vẫn là OmniVoice cục bộ,
   không dùng giọng AI của Flow; không cài tiện ích bên thứ ba, chạy trong Chrome của anh Long.
   Mô tả khi đăng **bắt buộc ghi rõ hình dựng bằng AI**. **Video tin tức thường vẫn cấm như cũ.**
   Bản mẫu đầu tiên và toàn bộ bẫy: `docs/video/2026-09-16-lich-su-ceo-apple.md`.
   Bẫy quan trọng nhất: **Flow chặn cả ẢNH lẫn CÂU LỆNH có tên người nổi tiếng**, nên đừng in
   tên người thật lên poster của nhịp cần làm động - để phụ đề nói tên.
2. **Nguồn media hợp lệ:** kênh chính hãng (có credit), kho CC0 (Pexels/Pixabay/Unsplash/
   Wikimedia), ảnh chụp màn hình chính techvision.click, và cảnh anh Long tự quay.
   **Nới ngày 25/08/2026:** ảnh dùng **bên trong video** thì lấy thoải mái, kể cả từ trang báo,
   miễn có credit. Ảnh **đăng lên web** vẫn giữ luật cũ nghiêm ngặt. Hai chuyện khác nhau.
   Ảnh Wikimedia CC BY thì **dòng ghi tên tác giả là bắt buộc**, không phải tùy chọn.
3. **AI dựng phải xuất bảng kê nguồn chờ anh Long duyệt** trước khi ghép. Không tự ghép rồi báo sau.
4. **Không sửa số, không sửa lời thoại, không thêm bớt cảnh.** Số nào chưa được hãng xác nhận
   thì bắt buộc gắn chip "Tin đồn" trên hình.
5. **Trend edit: đề xuất tối đa 3 cái** (2 hình + 1 âm thanh) theo mẫu 4 cột, anh Long duyệt mới
   được áp. Không duyệt thì cắt thẳng, không tự thêm.
6. **Đăng lên kênh phải hỏi trước.** Không tự đăng, không lên lịch hàng loạt.
7. **Không em-dash.** Dùng gạch ngang thường có khoảng trắng hai bên.

---

## 3. Chuẩn hình và chữ

> **Tay nghề dựng nằm ở `docs/video/SKILL-EDIT.md`** - nhịp cắt, vùng an toàn, cỡ phụ đề,
> cách kiểm trước khi giao. File này chỉ nói quy trình và luật nội dung.

- Dọc 9:16, 1080x1920.
- **Giọng tua 1,2x và không được có khoảng lặng** (anh Long nâng từ 1,1x lên 1,2x ngày 24/09/2026; mốc cũ 27/08/2026 là 1,1x).
  Cắt im lặng hai đầu từng đoạn bằng `silenceremove` ngưỡng `-45dB`, nối không chèn im lặng,
  rồi `atempo=1.2`. Tua xong phải **tính lại toàn bộ mốc cảnh và `durationInFrames`** (chia 1,2).
- **Chữ phải nằm trong y từ 140 tới 1440.** Dưới 1440 là vùng nút của TikTok và Reels đè lên.
- Màu nhấn **đỏ `#C0392B`** (đúng `--accent` của techvision.click).
- **Phụ đề word-pop nhấn đỏ**, centerY khoảng 0,62, mỗi cụm dưới 28 ký tự.
- Thẻ số Remotion mặc định `y: 0.2` để không đè lên phụ đề.
- Ken Burns 1,00 tới 1,06, mỗi cảnh đổi hướng.
- Ảnh trộn nhiều nguồn (nền sáng + nền tối) thì **khâu match tông màu là bắt buộc**.

**Ba thay đổi cố định áp cho mọi video từ 26/8/2026** (xem `docs/ke-hoach-video-2026-08-26-den-09-30.md`):
1. Khung hình đầu là **con số**, không phải câu dẫn. Câu đầu tối đa 8 từ.
2. Bỏ thẻ chữ tĩnh ở đoạn mở, thay bằng số chạy hoặc hình chuyển động ngay khung một.
3. Câu cuối mời theo dõi phải nói rõ người xem được gì.

**Luật chọn chủ đề** (đo từ view thật):
- Làm: Apple, Google Pixel, iPhone, giá RAM/SSD/laptop và lý do tăng, phát ngôn lãnh đạo hãng lớn.
- Không làm trên Shorts: thương hiệu tầm trung (Redmi, Nothing, Motorola, Lenovo), sale dịp lễ, esports.

---

## 4. Chuẩn viết kịch bản đọc

- **Số giữ nguyên dạng số** ("24.999.000đ", "9/9"), khác bên Chạm AI (bên đó phiên âm thành chữ
  vì máy đọc). Video TechVision anh Long đọc trực tiếp nên cứ để số.
- Chỉ phiên âm mấy đơn vị dễ vấp: mAh, W, và "IP sáu tư" thay cho IP64.
- Ngày tháng viết đủ, không viết tắt.
- Giao cho anh Long **một khối copy trơn**, không chú thích chen giữa, để anh dán vào máy nhắc chữ.

**Khi GIỌNG MÁY đọc (OmniVoice) thì ngược lại: phiên âm hết số thành chữ.**
Bảng tra bắt buộc đọc trước: **`docs/video/tts-cach-doc-so.md`** - năm, tiền, đơn vị, tên riêng
nước ngoài, mỗi dòng là một lỗi đã nghe thấy thật rồi mới sửa. Lỗi hay gặp nhất: rút gọn năm còn
hai chữ số ("năm tám mươi mốt") - giọng máy đọc ra thành số thứ tự. Phụ đề vẫn giữ số gốc.

---

## 5. Bộ khuôn đồ họa số liệu

`~/techvision-video-kit` (GitHub riêng tư: `ragonsky-rgb/techvision-video-kit`). Remotion, render
ra clip **nền trong** ProRes 4444 để ghép làm overlay trong Palmier.

```bash
cd ~/techvision-video-kit
npx remotion studio                                     # xem trực quan
npx remotion render Overlay out/ov-abc.mov --props=props/abc.json
```

Bốn kiểu thẻ: `hook` (mở đầu), `stat` (một số lớn), `note` (một câu chốt), `bars` (so sánh mức).
Đọc `README.md` trong kit để biết trường nào bắt buộc.

**Hai bẫy đã trả giá:**
- **File props phải khai ĐỦ mọi trường**, kể cả `"note": ""`. Trường bỏ trống rơi về
  `defaultProps` trong `src/Root.tsx`. Ngày 25/08 lỗi này dán nhầm chip "Microsoft chưa xác nhận"
  sang hai thẻ khác trong video Windows OEM.
- **`countUp: false`** với mọi số có dấu chấm phân nghìn kiểu Việt Nam hoặc ngày tháng
  ("24.999.000đ", "9/9", "2nm"). Để mặc định bật thì bộ đếm cắt sai và làm hỏng con số.

---

## 6. Bẫy khác

**Palmier đọc voice `.AAC` bị thiếu khoảng 1,5 giây cuối**, làm cụt câu cuối. **Luôn decode sang
WAV trước khi dựng**, đừng kéo thẳng file AAC vào.

**Whisper bịa thêm câu ở đuôi** trên đoạn im lặng cuối - lọc bỏ segment ngắn dưới 0,05 giây.

**Cờ của `mlx_whisper` dùng dấu gạch ngang** (`--output-format`, `--output-dir`), không gạch dưới.

**Số trong content-radar phải fetch lại nguồn gốc trước khi lên hình.** Radar từng ghi RAM 16GB
"1,8-2 triệu" trong khi giá thật là 6,49-7,69 triệu.

## 6b. Kỹ thuật dựng bằng code (học từ awesome-opus5-5-videos, 30/09/2026)

Nguồn: github.com/yihui-dev/awesome-opus5-5-videos (475 prompt làm video bằng HTML/Canvas/SVG, MIT). Phần lớn là video quảng cáo SaaS, 3D, game, không hợp kênh tin tức. Chỉ giữ những gì dùng được với dây chuyền `brag_render.mjs` + OmniVoice:

1. **Mỗi khung là hàm thuần của t, "tua được"**: trạng thái đầu đặt sẵn ở t = 0, không timer, không biến nhớ giữa các khung. Nhờ vậy chụp được bất kỳ giây nào, và cùng một cảnh dùng lại được trên web (mục 7 dưới).
2. **Duyệt bằng MỘT tờ ảnh trước khi dựng**: `node scripts/brag_render.mjs trang.html <giây> --sheet 20 sheet.jpg` (20 khung rải đều, ~2 giây). Claude tự đọc tờ này để bắt chữ chồng ảnh, chữ tràn; gửi anh Long tờ này thay vì bắt xem cả video nháp.
3. **Âm thanh chuẩn -14 LUFS, đỉnh <= -1,5 dBTP, đo SAU khi nén AAC**: `python3 scripts/master_audio.py mix.wav mix_master.wav` trước khi ghép hình, hoặc `--fix video.mp4 ra.mp4` với video đã xuất; `--check *.mp4` để đo. Chưa ĐẠT thì không giao. Lý do: đo 30/09, 12 video gần nhất lệch từ -18,1 tới -10,9 LUFS, bản Short iPhone 19 năm đỉnh +0,2 dBFS (vỡ tiếng).
4. **Nhòe chuyển động cho bản cuối**: `--blur 4` (mỗi khung = trung bình 4 khung phụ trong nửa khung). Chữ và ảnh bay nhanh đỡ giật. Thời gian chụp tăng 4 lần nên bản nháp không bật.
5. **Chuyển cảnh**: lò xo vượt nhẹ thay cho easing đều; nội dung mới vào SAU khi khung bắt đầu đổi hình và ra TRƯỚC lần đổi kế tiếp (chữ không bao giờ chồng chữ); có nhòe ngắn lúc chuyển.
6. **Nhịp nhạc**: nhạc nền Soundraw hiện dùng khoảng 120-121 BPM (một phách ~0,5 giây). Giọng vẫn là trục (luật mục 2): cắt cảnh bám ranh giới câu, rồi dời về phách gần nhất nếu lệch không quá 0,25 giây.
7. **Một nguồn số, nhiều đầu ra**: video dài, Short và biểu đồ trong bài web đọc CHUNG một `data.js` đã soát. Short là danh sách cảnh con của bản dài, không dựng lại. Biểu đồ web: lưu số vào `docs/video/scenes/<ten>-data.json` + `<ten>-spec.json`, chạy `python3 scripts/make-scene-chart.py data.json spec.json`, dán khối `<figure class="tv-scene">` vào bài. `public/scenes/scene.js` cho biểu đồ tự vẽ theo cuộn trang (cuộn ngược thì chạy ngược), HTML vẽ sẵn trạng thái cuối nên tắt JS, bot, người bật giảm chuyển động vẫn đọc đủ. Biểu đồ SVG là điểm cộng, KHÔNG tính vào sàn media của bài. Đã dùng lần đầu ở bài `gia-iphone-18-pro-max-viet-nam-dat-hon-my-singapore-bao-nhieu` (ngay dưới video 19 năm). Kiểm bằng `window.tvScenes.at(p)` vì trình duyệt tự động ở chế độ ẩn không phát sự kiện cuộn.
8. **Luật trùng với luật kênh** (repo cũng ghi): không bịa số, phần trăm, tên khách; chữ trên hình khớp lời đọc; mỗi đồ họa nằm trong một đoạn thoại liền.

KHÔNG áp dụng: cảnh 3D/shader/WebGL (nặng GPU, lệch giọng kênh), nhạc tự tổng hợp từ sóng sin (kênh dùng nhạc Soundraw của anh Long), giọng TTS OpenAI/ElevenLabs (kênh dùng OmniVoice giọng anh), ảnh AI (luật mục 2).

---

## 6c. Hai series chữ ký (anh Long duyệt 02/10/2026, lộ trình M3)

Mỗi video mới phải xếp vào MỘT trong hai series (hoặc ghi rõ "ngoài series" trong hồ sơ):

| Series | Khi nào dùng | Nhãn | Thumbnail |
|---|---|---|---|
| **A. Đừng bị con số đánh lừa** | Video lật một con số/thông số gây hiểu sai (1TB chậm hơn 512GB, pin 54 giờ nhưng không chống ồn, giá "rẻ" mà thật ra đắt...) | nhãn đen chấm đỏ "#" | tiêu đề trắng + con số lớn bị gạch đỏ (`--num`) |
| **B. Nên mua · đợi · bỏ qua** | Video kết bằng quyết định mua sắm (giá về VN, tổng chi phí, có nên lên đời...) | nhãn đen chấm đỏ "?" | tiêu đề + 3 nút NÊN MUA (xanh) / ĐỢI (vàng) / BỎ QUA (xám), sáng nút đúng kết luận (`--verdict mua|doi|bo`, hoặc `an` để giấu bằng dấu "?") |

Công cụ: `techvision-video-kit/scripts/series_kit.py`
- `python3 scripts/series_kit.py intro` → `out/series/intro-{A,B}-{ngang,doc}.mp4` (1,5 giây, có tiếng). Ghép vào ĐẦU video (concat fps 30, âm mono 44,1 kHz, CRF 16), rồi chạy lại `master_audio.py --fix` cho -14 LUFS.
- `python3 scripts/series_kit.py thumb A|B --title "dòng 1|dòng 2" --img anh.jpg --credit "..." [--num 1TB | --verdict mua] --out <tên>` → `<tên>-ngang.jpg` 1280x720 + `<tên>-doc.jpg` 1080x1920. Tiêu đề tối đa 2 dòng, mỗi dòng ≤ 16 ký tự cho bản ngang (dài hơn sẽ rớt 4 dòng).
- Ảnh nền thumbnail theo đúng luật nguồn media (mục 2), ghi credit.

Video đầu tiên mang bộ nhận diện: GTA 6 (series B, 25/10/2026). Các video đăng/hẹn trước 02/10 giữ nguyên.

## 7. Bản đồ tài liệu

| File | Nội dung | Tình trạng |
|---|---|---|
| `docs/video/AGENTS.md` | file này, điểm vào | dùng |
| `docs/video/<ngày>-<slug>.md` | gói sản xuất từng video: số liệu, kịch bản đọc, gói cảnh, cách dựng, gói đăng | dùng, xem bản mới nhất làm mẫu |
| `docs/ke-hoach-video-2026-08-26-den-09-30.md` | kế hoạch 5 tuần, chỉ tiêu, luật chọn chủ đề | dùng |
| `docs/skill-app-dung-video.md` | system prompt cho AI bên ghép + luật tự tìm source + luật trend | dùng |
| `docs/video/scenes/` | số liệu + cấu hình biểu đồ động dùng chung video và bài web (mục 6b.7) | dùng |
| `docs/prompt-app-video-tin-tuc.md` | tài liệu cũ | **mục "Prompt để dán vào Flow" HẾT HIỆU LỰC**, các mục còn lại vẫn đúng |

Bắt đầu một video mới: chép gói sản xuất gần nhất trong `docs/video/` làm khuôn, đừng viết từ đầu.
