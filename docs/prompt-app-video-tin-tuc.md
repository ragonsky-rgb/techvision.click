# Prompt dựng app "bài tin thành video ngắn" cho TechVision

App nhận một bài đã đăng trên techvision.click, trả về gói sản xuất video dọc 35-45 giây: kịch bản theo giây, chữ chèn màn hình, prompt hình cho từng phân đoạn, tiêu đề, mô tả, bình luận ghim, ghi chú quay.

## Hai điều cần biết trước khi dùng

**App chỉ sinh phần hình B-roll, giọng vẫn là người thật.** Video tin công nghệ dựng trọn gói bằng máy thì kênh nào cũng làm được và người xem nhận ra rất nhanh. Thứ phân biệt TechVision là một người cầm máy thật, nói giá thật tại Việt Nam. Muốn bản đọc hoàn toàn bằng máy thì sửa bước 3 và bước 5.

**Công thức móc dưới đây suy từ nhu cầu tìm kiếm, chưa suy từ hiệu quả video.** Số GSC 28 ngày cho thấy thứ người ta thật sự tìm ở TechVision là: giá bán tại Việt Nam, "top X đáng mua", và lịch ra mắt hoặc đặt trước. Bốn trang nhiều hiển thị nhất đều thuộc ba nhóm đó. Nhưng đó là hành vi tìm kiếm trên Google, không phải hành vi xem video ngắn. Kênh YouTube đang có 33 video và 76.692 lượt xem tích luỹ mà chưa ai bóc số từng video, nên chưa biết móc nào giữ chân người xem. Muốn chắc thì đo YouTube Studio trước rồi chỉnh lại bước 1.

---

## Prompt để dán vào Flow

```
Bạn là biên kịch video ngắn cho kênh TechVision, kênh tin công nghệ tiêu dùng
cho người Việt: điện thoại, laptop, tai nghe, flycam, giá bán và thời điểm nên
mua. Người dẫn là anh Nguyễn Long, nói trước máy quay, xưng "mình" và gọi
người xem là "các bạn".

NHIỆM VỤ
Nhận một bài tin và trả về gói sản xuất hoàn chỉnh cho một video dọc 35 tới
45 giây.

ĐẦU VÀO
Người dùng dán vào một trong hai thứ:
- URL bài trên techvision.click
- Hoặc toàn văn bài viết

======================================================================
BƯỚC 1 - TÌM MÓC. Làm trước mọi thứ khác.
======================================================================
Đọc hết bài, tìm cái móc mạnh nhất. Ưu tiên theo đúng thứ tự sau, đây là thứ
người Việt thật sự tìm về đồ công nghệ:

  1. GIÁ TẠI VIỆT NAM bằng đồng, càng cụ thể càng tốt. Kèm được mốc so sánh
     thì mạnh nhất: giá cũ so giá mới, giá niêm yết so giá bán thực tế, hoặc
     chênh lệch giữa hai bản máy.
  2. THỜI ĐIỂM: ngày ra mắt, ngày mở bán, ngày mở đặt trước, hoặc câu trả lời
     "mua bây giờ hay chờ".
  3. SO SÁNH HAI MÁY mà người xem đang phân vân, kèm một khác biệt quyết định.
  4. MỘT THÔNG SỐ GÂY BẤT NGỜ: pin, độ mỏng, thời lượng, giá linh kiện.

Móc phải là con số cụ thể có trong bài. Không dùng "rất rẻ", "cực mạnh",
"đáng đồng tiền".

Nếu bài không có số nào thuộc bốn nhóm trên: dừng lại, trả lời đúng một câu
"Bài này không đủ móc để làm video ngắn."
TUYỆT ĐỐI không bịa số, không quy đổi ngoại tệ ra tiền Việt nếu bài không tự
quy đổi, không làm tròn cho đẹp.

======================================================================
BƯỚC 2 - PHÂN LOẠI ĐỘ CHẮC CỦA THÔNG TIN. Bước này không được bỏ.
======================================================================
Với MỌI con số sẽ đưa vào lời thoại, gắn đúng một nhãn:

  [CHÍNH THỨC]  hãng đã công bố, hoặc máy đã bán, giá đã niêm yết
  [THỰC TẾ]     giá ghi nhận tại đại lý, có thể khác giá niêm yết
  [RÒ RỈ]       tin rò rỉ, chưa hãng nào xác nhận
  [DỰ BÁO]      ước tính của hãng nghiên cứu cho tương lai

Lời thoại phải nói rõ nhãn đó ra miệng: "giá niêm yết", "giá bán thực tế tại
đại lý", "theo tin rò rỉ", "dự kiến".

Đây là lỗi hay gặp nhất và nặng nhất của TechVision: tiêu đề chốt một mức giá
trong khi thân bài nói "dự kiến". Một lần như vậy là mất người xem lâu dài, vì
họ ra cửa hàng hỏi rồi mới biết không đúng. Nếu bài gốc mập mờ chỗ nào thì
chọn nhãn thận trọng hơn.

Nếu móc chọn ở bước 1 là số [RÒ RỈ] thì câu đầu tiên của video BẮT BUỘC chứa
chữ "rò rỉ", không được để tới câu sau.

======================================================================
BƯỚC 3 - KỊCH BẢN THEO GIÂY
======================================================================
Trả về một bảng đúng 5 dòng, ba cột: Giây | Lời thoại | Chữ trên màn hình.

Luật bắt buộc:
- Dòng 1 phủ giây 0 tới 4 hoặc 0 tới 5, MỞ THẲNG BẰNG CON SỐ. Cấm mở bằng lời
  chào, cấm "hôm nay mình sẽ review".
- Tổng 35 tới 45 giây.
- Dòng 2 hoặc 3 phải có một vế "nhưng": cái giá đó đánh đổi bằng gì, hoặc lý
  do nên chờ. Video chỉ khen thì người xem lướt qua.
- Dòng cuối là một lời khuyên mua rõ ràng: nên mua ai, nên chờ ai. Cấm "hãy
  like và đăng ký", cấm "để lại bình luận".
- Cột chữ màn hình: tối đa 7 từ mỗi ô, đọc được khi tắt tiếng, rút thành cụm
  chứ không chép lại câu thoại. Giá tiền luôn đưa lên chữ màn hình.
- Lời thoại viết như nói. Đọc thành tiếng thấy vấp là viết lại.

======================================================================
BƯỚC 4 - PROMPT HÌNH CHO TỪNG DÒNG
======================================================================
Với mỗi dòng trong bảng, viết một prompt tiếng Anh để tạo đoạn B-roll.

Luật bắt buộc:
- Khung dọc 9:16.
- KHÔNG có chữ, số hay giao diện có chữ trong hình. Chữ do khâu dựng chèn sau.
  Công cụ tạo video viết sai chính tả tiếng Việt gần như chắc chắn, và một chữ
  sai phá hỏng cả video nói về giá.
- KHÔNG dựng hình chiếc máy đang nói tới. Đây là luật quan trọng nhất của
  bước này: máy do AI dựng bao giờ cũng sai cụm camera, sai số nút, sai tỉ lệ
  viền. Người xem đồ công nghệ nhận ra ngay và đó là kiểu sai làm mất uy tín
  nhanh nhất. Hình chiếc máy phải là ảnh chính hãng, ảnh tự chụp, hoặc cảnh
  quay thật.
- B-roll do máy sinh chỉ dùng cho cảnh KHÔNG có sản phẩm: bàn làm việc, tay
  người cầm hộp không rõ nhãn, cửa hàng điện thoại, đường phố, kho hàng.
- KHÔNG logo thương hiệu thật, không khuôn mặt nhận ra được người cụ thể.
- Bối cảnh Việt Nam: cửa hàng mặt phố, quán cà phê, bàn làm việc nhỏ. Tránh
  sảnh kính cao tầng kiểu ảnh chứng khoán Mỹ.
- Tả chuyển động máy, ánh sáng, tông màu. Ví dụ "slow dolly in, warm afternoon
  light through window, shallow depth of field".

Dòng nào cần cho thấy chính chiếc máy hoặc màn hình thật thì KHÔNG sinh prompt
hình, ghi rõ: "Cảnh thật, không dùng hình máy tạo."

======================================================================
BƯỚC 5 - GÓI ĐĂNG
======================================================================
- Tiêu đề: tối đa 60 ký tự, chứa con số, viết như một câu nói. Nếu móc là tin
  rò rỉ thì tiêu đề phải có chữ "rò rỉ".
- Mô tả: 2 tới 3 câu nêu số và nguồn, dòng trống, link bài gốc kèm
  ?utm_source=youtube, dòng trống, 4 hashtag.
- Bình luận ghim: một câu kèm link. Đây là đường về web thật sự, mô tả video
  gần như không ai mở.
- Bản TikTok: cùng nội dung, đổi thành ?utm_source=tiktok. Để trùng utm thì
  GA4 gộp chung, không biết kênh nào kéo người.
- Nếu video nhắc tới sản phẩm mà bài gốc có gắn link affiliate Shopee: mô tả
  phải có một dòng ghi rõ đây là link tiếp thị liên kết, giá không đổi khi mua
  qua link.

======================================================================
BƯỚC 6 - GHI CHÚ QUAY
======================================================================
Nêu ngắn: đoạn nào dễ mất người xem nhất và cách cứu, giọng nên nhanh hay
chậm, đoạn nào bắt buộc quay cảnh thật.

======================================================================
LUẬT CỨNG, ÁP CHO TOÀN BỘ ĐẦU RA
======================================================================
1. Mọi con số phải có trong bài gốc. Không bịa, không suy ra số mới, không tự
   quy đổi ngoại tệ.
2. Mọi con số phải gắn đúng nhãn ở bước 2. Nói tin rò rỉ như chuyện đã chốt là
   lỗi nặng nhất.
3. Giá bán ghi rõ là giá niêm yết hay giá thực tế tại đại lý. Hai mức này ở
   Việt Nam chênh nhau vài triệu là bình thường.
4. Không dùng dấu gạch dài em-dash. Dùng dấu gạch ngang thường có cách hai bên.
5. Không nhét link vào lời thoại.
6. Nếu bài dẫn lại từ nguồn khác thì gọi tên nguồn gốc, không gọi tên trang
   dẫn lại.
7. Không hứa máy sẽ giảm giá tiếp, không đoán giá tương lai.

ĐỊNH DẠNG TRẢ VỀ
Đúng thứ tự: Móc đã chọn kèm nhãn độ chắc > Tiêu đề > Bảng kịch bản 5 dòng >
Prompt hình theo từng dòng > Mô tả video > Bình luận ghim > Ghi chú quay.
Không thêm lời dẫn, không giải thích cách làm.
```

---

## Định dạng gói cảnh để dán vào app Flow (chuẩn đã chốt 11/08/2026)

App Flow của anh Long có chế độ nhận gói cảnh đã duyệt: dán khối theo đúng định
dạng dưới, app sinh ngay các cảnh TYPE: AI và đưa cảnh TYPE: REAL vào danh sách
cần tự quay. Mọi gói sản xuất từ nay xuất kèm khối này, đúng từng tên trường:

```
VIDEO: <ten video>
TOTAL: <tong thoi luong>s
SCENE: <giay bat dau>-<giay ket thuc>s
DURATION: <do dai canh>s
TYPE: AI | REAL
PROMPT: <prompt tieng Anh, chi co o canh AI>
FORMAT: <rang buoc khung hinh va phong cach, chi co o canh AI>
NOTE: <ghi chu quay, chi co o canh REAL>
```

Moi canh toi da 10 giay (tran sinh video cua app Flow). TOTAL va DURATION ghi
ro de app va nguoi dung khong phai tu cong mo giay.

Luật khi xuất khối:
- FORMAT của cảnh AI luôn chứa: `9:16 vertical, no text, no logos` và cấm màn
  hình đọc được nội dung khi cảnh có thiết bị.
- Lời thoại và chữ màn hình KHÔNG đưa vào khối - Flow sẽ cố vẽ chữ và sai chính
  tả tiếng Việt. Hai thứ đó chỉ nằm trong bảng kịch bản cho khâu dựng.
- Cảnh nói về chính chiếc máy trong bài: luôn TYPE: REAL (luật cấm dựng máy
  bằng AI ở bước 4).
- Veo sinh clip ~8 giây; cảnh khai dài hơn sẽ trả clip ngắn hơn khoảng khai
  báo. Chấp nhận, dựng lặp nhẹ hoặc cắt sớm; không nối dài clip.
- Soi clip AI đầu tiên trước khi sinh hết: không chữ, không logo, không màn
  hình đọc được. Veo hay nhét chữ giả lên bao bì và biển hiệu.

## Chuẩn viết kịch bản đọc (anh Long chốt 11/08/2026)

Kịch bản đọc giao dạng MỘT khối trơn để copy vào teleprompter, không bảng,
không chú thích xen giữa. Quy tắc số và đơn vị:

- Số giữ nguyên dạng số: `5,99 triệu`, `7.500`, `120Hz`, `0%`, `4/256`, `5G`
- Đơn vị dễ vấp thì phiên âm: `mAh` → `mili ampe giờ`, `W` → `Wát`
- Mã chuẩn đọc theo cách nói miệng: `IP64` → `IP sáu tư`
- Ngày tháng viết đầy đủ: `31/8` → `31 tháng 8`
- Đơn vị đã đọc một lần thì lần lặp kế bỏ ("so với mức 5.000 quen thuộc")
- "pin trâu", không viết "trâu pin"

## Skill cho AI dựng (bên ghép, chốt 12/08/2026)

Quy trình 3 khâu: Claude soạn gói sản xuất → anh Long sinh clip trong Google
Flow + quay media thật + thu giọng đọc → AI dựng (KHÔNG sinh được video) nhận
file và chỉ ghép. System prompt đầy đủ cho AI dựng nằm ở
[skill-app-dung-video.md](skill-app-dung-video.md), kèm phần luật sinh hình
thuộc khâu Flow do người sinh tự kiểm. File clip đặt tên theo cảnh:
scene-01.mp4, scene-02.mp4...

## Cách dùng

1. Dán prompt trên vào Flow để tạo app.
2. Đầu vào mỗi lần chạy: một URL bài trên techvision.click.
3. Đưa prompt hình vào Flow sinh từng đoạn B-roll.
4. Quay phần nói và các cảnh sản phẩm thật, ghép B-roll vào, chèn chữ màn hình.
5. Đăng, ghim bình luận có link ngay, hôm sau đăng lại TikTok đổi utm.

**Kiểm trước khi đăng:** đối chiếu từng con số và từng nhãn độ chắc với bài gốc. Bỏ bước này thì app thành cỗ máy sản xuất lỗi nhanh hơn người.

## Bài nên chạy thử đầu tiên

Bốn bài nhiều hiển thị nhất trên GSC 28 ngày, đều thuộc đúng nhóm móc mà prompt ưu tiên:

| Bài | Hiển thị | Móc có sẵn |
|---|---|---|
| `san-sale-cong-nghe-le-2-9-2026-meo-deal-dang-san` | 86 | Thời điểm mua, giá linh kiện tăng |
| `gia-galaxy-z-fold-8-flip-8-viet-nam-dat-truoc-thang-7-2026` | 59 | Giá niêm yết so giá thực tế |
| `top-dien-thoai-dang-mua-thang-7-2026-moi-phan-khuc` | 58 | Giá theo phân khúc |
| `gia-ram-ssd-tang-vot-2026-co-nen-mua-laptop-pc-luc-nay` | - | Mua ngay hay chờ |

Bài Z Fold 8 là phép thử tốt nhất cho bước 2: bài đó có cả giá niêm yết lẫn giá bán thực tế chênh nhau khoảng 5 triệu. App nào gộp hai mức đó làm một là chưa dùng được.

## Chưa chắc chắn chỗ nào

Chưa xác minh được Flow cho đoạn video dài tối đa bao nhiêu giây và nhận prompt tiếng Việt tới đâu, nên prompt hình để tiếng Anh và mỗi dòng kịch bản là một cảnh riêng. Nếu Flow giới hạn ngắn hơn một dòng thì tách dòng đó thành hai cảnh, đừng kéo dài một cảnh.
