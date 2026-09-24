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

| Tên | Viết trong kịch bản đọc | Vì sao |
|---|---|---|
| Singapore | `Singapoor` | anh Long chọn mẫu 5/6 ngày 15/09; `Xin-ga-po` bị chê, `Singapore` để nguyên cũng sai âm cuối |
| Markkula | `Mác-kiu-la` | để nguyên thì mất hẳn âm giữa |
| Spindler | `Spin-đờ-lơ` | để nguyên thì nuốt cụm "dl" |
| HiLight | `Hai Lai` | |
| Pixel, Pro, RAM, CEO | để nguyên | tên đã quen, đọc đúng sẵn |

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

## 5. Sửa một câu tốn bao nhiêu

Đọc lại 1 câu mất khoảng 2 phút (kể cả 15 giây nghỉ cho đỡ lag máy). Sửa giọng **không kéo theo
dựng lại hình**, miễn câu mới không dài hơn clip nền - xem `2026-09-16-lich-su-ceo-apple.md`.
Chạy `build_ceo.py voice` rồi `motion|base|caps|final`, mọi mốc tự khớp lại theo `spans.json`.
