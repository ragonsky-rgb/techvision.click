# Cách viết số và tên riêng cho giọng máy OmniVoice

> **File này chỉ áp cho kịch bản GIỌNG MÁY đọc.** Kịch bản anh Long tự đọc (máy nhắc chữ) thì giữ
> nguyên dạng số, xem `AGENTS.md` mục 4.
>
> **Phụ đề LUÔN giữ dạng số gốc** (`1977`, `41.999.000đ`, `2.099 SGD`). Chỉ file kịch bản đọc mới
> phiên âm. Trong kit, hai thứ này là hai file riêng: `script_voice.txt` và `caps_lines.txt`.

Mỗi dòng dưới đây là một lỗi đã nghe thấy thật rồi mới sửa, không phải suy đoán.

## 1. Năm

**LUẬT (anh Long chốt 16/09/2026): MỌI NĂM ĐỌC ĐẦY ĐỦ**, 19xx cũng như 20xx.

| Năm | Viết trong kịch bản đọc |
|---|---|
| 1977 | `một nghìn chín trăm bảy mươi bảy` |
| 1981 | `một nghìn chín trăm tám mươi mốt` |
| 1983 | `một nghìn chín trăm tám mươi ba` |
| 1985 | `một nghìn chín trăm tám mươi lăm` |
| 1997 | `một nghìn chín trăm chín mươi bảy` |
| 2011 | `hai nghìn không trăm mười một` |
| 2026 | `hai nghìn không trăm hai mươi sáu` |
| ngày 1/9 | `ngày mùng một tháng chín` |

**CẤM tuyệt đối:** rút gọn năm còn hai chữ số cuối - `tới năm tám mươi mốt`, `năm tám mươi ba`,
`năm chín mươi bảy`. Giọng máy đọc ra thành **số thứ tự**, không ra năm.

**Đã loại, đừng thử lại:**

| Cách viết | Vì sao loại |
|---|---|
| `năm tám mươi mốt` | nghe thành số thứ tự, không ra năm |
| `một chín bảy bảy` | rời cả 4 số, nghe như đọc số điện thoại |
| `một chín bảy mươi bảy` | vẫn lệch nhịp so với cách đọc 20xx |
| `mười chín bảy mươi bảy` | bắt chước lối tiếng Anh, không tự nhiên |

Video "Lịch sử CEO Apple" đi qua **4 bản giọng** mới đúng. 4 mẫu thử giữ ở
`~/techvision-video-kit/out/ceo/nam_test/mau-nam-1..4.m4a`.

**Giá phải trả về thời lượng:** đọc đầy đủ dài hơn cách rút gọn khoảng **0,6 giây mỗi năm**.
Câu có hai năm (1977 và 1981) nở từ 5,8 lên **7,7 giây**. Clip Flow xuất cố định 8 giây, nên
**một câu chứa tối đa 2 năm** thì còn vừa; ba năm trở lên phải tách câu, hoặc dựng clip nền
ở mức 10 giây.

**Cách thử khi gặp chữ mới:** dựng nguyên câu chứ đừng cắt riêng con số, và **tua `atempo=1.1`**
đúng như bản dựng - giọng máy đọc số đứng một mình khác hẳn khi số nằm giữa câu.

## 2. Tiền và đơn vị

| Viết trong bài / phụ đề | Viết trong kịch bản đọc |
|---|---|
| 41.999.000đ | `bốn mươi mốt triệu, chín trăm chín mươi chín nghìn đồng` |
| 2.099 SGD | `hai nghìn không trăm chín mươi chín đô Singapoor` (xem mục 3, KHÔNG dùng "Xin-ga-po") |
| 1.299 USD | `một nghìn hai trăm chín mươi chín đô` |
| 16GB | `mười sáu ghi` (KHÔNG "giga", KHÔNG "gi ga bai") |
| 5.000 mAh | `năm nghìn mili ampe giờ` |
| 45W | `bốn mươi lăm Wát` |
| 8,875% | `tám phẩy tám bảy lăm phần trăm` |
| IP64 | `IP sáu tư` |

## 3. Tên riêng nước ngoài

**Trước khi gửi kịch bản cho OmniVoice: dò từng tên hãng/tên riêng trong kịch bản với bảng này.** Tên nào có trong bảng mà kịch bản vẫn để nguyên là lỗi.

| Tên | Viết trong kịch bản đọc | Vì sao |
|---|---|---|
| Singapore | `Singapoor` | anh Long chọn mẫu 5/6 ngày 15/09; `Xin-ga-po` bị chê, `Singapore` để nguyên cũng sai âm cuối |
| Markkula | `Mác-kiu-la` | để nguyên thì mất hẳn âm giữa |
| Spindler | `Spin-đờ-lơ` | để nguyên thì nuốt cụm "dl" |
| HiLight | `Hai Lai` | |
| OPPO | `Ốp pồ` | anh Long chốt 25/09/2026 (bản 15/09 ghi "Óp pô"); để nguyên "OPPO" là SAI, video OPPO 25/09 đã dính |
| Pixel, Pro, RAM, CEO | để nguyên | tên đã quen, đọc đúng sẵn |
| nút sườn (iPhone) | `nút nguồn` | 07/10/2026: "nút sườn" bị nghe thành "nút xương" 2/2 bản; "nút nguồn" đúng nút và đọc rõ |
| ARM (chip) | để nguyên `ARM` | đọc thành "Am", đúng cách người Việt nói |
| Pad (Xiaomi Pad 9) | `Pát` | 06/10/2026: để nguyên "Pad chín" thì Whisper nghe Paz/Part/BAT/39 ở 4/8 câu; "Pát chín" rõ |
| 9.720mAh | `chín nghìn, bảy trăm hai mươi mili ampe giờ` | không có dấu phẩy thì giọng nuốt "nghìn" (nghe "97 2") |
| Snapdragon | `Snáp đra gơn` | anh Long nghe 06/10/2026: để nguyên chữ thì "đọc chưa rõ"; `Snáp đra gơn` Whisper ra đúng "Snapdragon" 2/2, còn `Xnáp đờ ra gông` ra "XNABD Dragon" |
| 11,2 inch / 12,5 inch (số lẻ kích thước màn) | `mười một chấm hai inch` | anh Long chốt 06/10/2026: kích thước màn đọc **"chấm"**, KHÔNG "phẩy" (giá tiền/tỷ lệ vẫn "phẩy") |
| 144Hz đứng sau độ phân giải | `tần số quét một trăm bốn mươi bốn Héc` | đứng trần sau "ba chấm hai K" anh Long nghe không ổn; thêm "tần số quét" thì rõ, phụ đề thêm chữ cho khớp |

## 4. Hai bẫy kỹ thuật

- **Câu mở đầu bằng số thì giọng vấp.** Đảo câu cho có chữ đứng trước, hoặc thêm "Năm ...", "Giá ...".
- **Giọng hay dính rác ở đầu câu** (0,7 - 1,0 giây, nghe như "Kigat", "Gigaat"). Soi bằng Whisper
  `return_timestamps="word"`, xác nhận im lặng bằng `volumedetect`, rồi cắt bằng `-ss` cộng
  `afade=t=in` ngắn. Whisper trên máy này **phải chạy CPU float32**, mps float16 ra chữ rác.

**Từ giọng máy hay đọc sai (ghi 24/09/2026):**

| Từ / cụm | Lỗi nghe được | Cách viết thay |
|---|---|---|
| `chênh` | "Trên", "tranh" (sai 2 lần liên tiếp, kể cả khi đứng giữa câu) | `cách nhau` ("Giá hai máy cách nhau đúng...") |
| `iPhone mười bảy Pro Max cùng chỗ là...` | lặp thành "Pro Pro Max" | thêm dấu phẩy: `iPhone mười bảy Pro Max, cùng chỗ, là...` |

**Ghi 27/09/2026 (video iPhone 18 Pro 1TB, đọc trên PC):**

| Từ / cụm | Kết quả |
|---|---|
| `Kiu Eo Xi` (QLC), `Ti Eo Xi` (TLC), `một tê ra bai` (1TB), `mê ga bai mỗi giây`, `bít` | Whisper nghe ra đúng QLC / TLC / 1TB / MB / bit - **dùng được** |
| `nhồi bốn bít` | nghe thành "nhiều" → thêm dấu phẩy trước: `Kiu Eo Xi, nhồi bốn bít` |
| `bộ đệm tụt từ hai trăm năm mươi ghi` | nghe thành "tù từ" → `bộ đệm tụt, từ hai trăm...` |
| câu mở bằng `Ở phép đo...` ngay sau câu kết bằng "ghi" | trên Mac dính rác "Làm ghi bản" 1 giây đầu; đọc trên PC thì sạch |

| `Ai Ô Ét` (iOS), `Wai Phai` (Wi-Fi), `Gi Pi Ti năm chấm sáu` (GPT-5.6) | đọc đúng |
| `Claude`, `ChatGPT`, `Googlebook`, `Chromebook`, `Google AI Pro`, `Dell`, `HP`, `Lenovo` để nguyên chữ | đọc được (Whisper nghe Claude thành "Cloud" - gần đúng âm) |
| `Clốt ... cạnh Chát Gi Pi Ti` (phiên âm) | TỆ hơn để nguyên: "cạnh" thành "cảnh", ChatGPT méo |
| `Acer, Asus` đứng sát nhau | giọng NUỐT mất Asus (5 lần/6). Xếp lại: `Dell, Asus, Lenovo, HP và Acer` |
| `máy mới bắt đầu` | đọc thành "mày" (nghe hỗn) → `lúc này máy mới bắt đầu` |
| `mục Pin` | đọc thành "một pin" 3 lần liền → `phần Pin` |
| `đổi hẳn động cơ` | thành "hành động cơ" → `thay hẳn cả động cơ` |
| câu dài liệt kê 5 tên + "năm hãng ra máy" trong một hơi | rơi cả nửa câu → tách, đặt số lượng trước ("Đợt đầu có năm hãng làm máy, gồm ...") |

Trên PC giọng máy **thường** ra giống nhau khi đọc lại y nguyên, nhưng KHÔNG phải luôn luôn: câu Claude/ChatGPT đọc 3 lần ra 3 bản khác. Cách làm nhanh nhất: đọc 2-3 bản mỗi biến thể, Whisper cả loạt, chọn bản đúng.

## 5. Sửa một câu tốn bao nhiêu

Đọc lại 1 câu mất khoảng 2 phút (kể cả 15 giây nghỉ cho đỡ lag máy). Sửa giọng **không kéo theo
dựng lại hình**, miễn câu mới không dài hơn clip nền - xem `2026-09-16-lich-su-ceo-apple.md`.
Chạy `build_ceo.py voice` rồi `motion|base|caps|final`, mọi mốc tự khớp lại theo `spans.json`.

## 5. OpenAI: viết `Ô pần Ây Ai`, KHÔNG viết `Âu pừn Ai` (30/09/2026)

Video OpenAI dots 30/09: `Âu pừn Ai` đọc ra "Open Eye" (chữ "Ai" cuối thành "eye"), anh Long nghe ra lỗi sau khi đã đăng Facebook. Thử 4 cách trên cùng câu, Whisper chấm cả tiếng Việt lẫn tiếng Anh:

| Viết trong script_voice | Whisper nghe |
|---|---|
| `Ô pần Ây Ai` | **OpenAI** (cả vi lẫn en) - DÙNG |
| `Âu pần Ây Ai` | OpenAI (vi), en ra lung tung |
| `Âu pừn Ây Ai` | OpenAI (vi) nhưng "đót" thành "đó" |
| `OpenAI` để nguyên | Open Eye - SAI |

Quy luật: chữ "AI" đứng riêng phải viết `Ây Ai`, viết `Ai` sẽ thành "eye". Voice_check báo LỆCH chữ này là lỗi THẬT, không phải Whisper ghi sai.
