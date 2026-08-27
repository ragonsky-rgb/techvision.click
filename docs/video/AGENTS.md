# Làm video cho kênh TechVision - đọc file này trước

Phiên AI mới nhận việc video thì bắt đầu từ đây. `AGENTS.md` ở gốc repo chỉ nói về **bài viết**,
không nói gì về video. Xưng hô với chủ kênh: **anh Long**. Trả lời bằng tiếng Việt.

Kênh TechVision là **tin công nghệ tiêu dùng**. Kênh Chạm AI là kênh khác, B2B, dây chuyền khác
hẳn (`~/chamai-video-kit`) - đừng lẫn hai bên.

---

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
- **Giọng tua 1,1x và không được có khoảng lặng** (anh Long chốt 27/08/2026).
  Cắt im lặng hai đầu từng đoạn bằng `silenceremove` ngưỡng `-45dB`, nối không chèn im lặng,
  rồi `atempo=1.1`. Tua xong phải **tính lại toàn bộ mốc cảnh và `durationInFrames`** (chia 1,1).
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

---

## 7. Bản đồ tài liệu

| File | Nội dung | Tình trạng |
|---|---|---|
| `docs/video/AGENTS.md` | file này, điểm vào | dùng |
| `docs/video/<ngày>-<slug>.md` | gói sản xuất từng video: số liệu, kịch bản đọc, gói cảnh, cách dựng, gói đăng | dùng, xem bản mới nhất làm mẫu |
| `docs/ke-hoach-video-2026-08-26-den-09-30.md` | kế hoạch 5 tuần, chỉ tiêu, luật chọn chủ đề | dùng |
| `docs/skill-app-dung-video.md` | system prompt cho AI bên ghép + luật tự tìm source + luật trend | dùng |
| `docs/prompt-app-video-tin-tuc.md` | tài liệu cũ | **mục "Prompt để dán vào Flow" HẾT HIỆU LỰC**, các mục còn lại vẫn đúng |

Bắt đầu một video mới: chép gói sản xuất gần nhất trong `docs/video/` làm khuôn, đừng viết từ đầu.
