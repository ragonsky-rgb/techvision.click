# Đề xuất nội dung tuần, chốt ngày 18/07/2026

> Bản tổng hợp cho team Content techvision.click. Gồm: (1) phương pháp, (2) radar xu hướng đang tăng đột biến tại Việt Nam, (3) phân tích 3 đối thủ, (4) 5 chủ đề "ngon" nhất kèm tiêu đề + dàn ý + link nội bộ + nguồn.
>
> ⚠️ Ghi chú quan trọng về media: bản brief này chạy trong môi trường remote bị chặn egress tới YouTube và toàn bộ host ảnh (403). Vì vậy các video/thumbnail đề xuất bên dưới CHƯA được verify bằng `check-media.mjs`. Khi triển khai trên máy có internet, team phải tự chọn + verify đủ 5 media/bài theo AGENTS.md §4 trước khi commit.

## 1. Phương pháp

- **Radar cầu tìm kiếm VN:** quét Google Trends VN Q2/2026, tin nổi bật GenK / Tinhte / VnExpress / 24h tuần 14-18/7, cùng báo cáo xu hướng tìm kiếm Quý II/2026.
- **Nguồn dữ kiện gốc:** Reuters, Bloomberg, CNBC, Tom's Hardware, 9to5Google, Android Authority, Fortune, trang chủ hãng (Honor, ASUS, Acer, OPPO).
- **Dedup:** đối chiếu với 528 bài hiện có trong `src/content/articles`. Site đã rất bão hòa, nên 5 chủ đề dưới đây đều là **khoảng trống thật** hoặc **biến thể/sản phẩm mới chưa có bài**.

## 2. Radar xu hướng đang tăng đột biến tại Việt Nam (tuần 14-18/7/2026)

Số liệu tăng trưởng từ báo cáo Xu hướng tìm kiếm Quý II/2026 (An Ninh Thủ Đô tổng hợp) và tin tuần này:

| Từ khóa / chủ đề | Tín hiệu | Ghi chú dedup |
|---|---|---|
| DeepSeek V4 | +5.076% | Đã có bài (dspark khai tử API cũ 24/7) |
| Honor 600 Pro | +3.725% | Mới có bản Lite, Pro là khoảng trống |
| OPPO Find X9s | +2.341% | **Khoảng trống** (mới có X9 Ultra) → chọn |
| Kimi K3 (Moonshot AI) | Ra mắt 16/7, #1 Frontend Code Arena | **Khoảng trống** (mới có K2.7) → chọn |
| Honor Robot Phone | Trình diễn WAIC 18/7 | **Khoảng trống** → chọn |
| ASUS ProArt P16/PX13 | Ra mắt VN 15/7 | **Khoảng trống** → chọn |
| Acer Nitro V 16 AI | Cập nhật dòng, RTX 5070 | Biến thể mới (mới có ProPanel) → chọn |
| iOS 27 (beta) | +669% | Đã có nhiều bài WWDC/iOS 27 |
| Redmi K90 Max, OPPO K15 Pro | Từ khóa mới nổi | Chưa mở bán, để dành |
| Samsung Galaxy Unpacked 22/7 | Sự kiện lớn 4 ngày tới | Đã phủ dày (>6 bài) |

Nhận định: nhóm chủ đề "đắt" nhất tuần này rơi vào **AI mô hình mới (Kimi K3)**, **laptop AI/Copilot+ PC ra mắt VN (ASUS ProArt, Acer Nitro)**, và **điện thoại camera/gimmick mới (Honor Robot Phone, OPPO Find X9s)**. Đây đều thuộc trục "điện thoại, máy tính, chủ đề hot" mà site đang theo đuổi.

## 3. Phân tích 3 đối thủ (tuần qua họ lên bài gì hot)

Ba đối thủ cùng tệp tin công nghệ + tư vấn mua sắm tại VN, lấy theo mức phủ nội dung và search demand:

**a. GenK (genk.vn):** mạnh tin nóng quốc tế + bình luận.
- Tuyến hot tuần này: Z Fold 8 Ultra rò rỉ thiết kế qua video; RedMagic Astra 2 ra quốc tế; Honor mở đặt trước Robot Phone; Kimi K3 dẫn đầu Frontend Code Arena rồi gây tranh cãi "tự nhận là Claude".
- Điểm học được: họ ăn traffic bằng tuyến "rò rỉ + tranh cãi" chạy sớm. Ta không đua breaking, ta thắng bằng bài giải thích đầy đủ + lăng kính VN (đúng mô hình 3 lớp §0).

**b. CellphoneS Sforum (cellphones.com.vn/sforum):** mạnh tuyến "là gì / có gì mới / giá bao nhiêu", SEO thương mại.
- Tuyến hot: "Galaxy Z Fold 8 Ultra có gì mới", "Laptop AI 2026 tại VN", "Copilot+ PC là gì". Bài update liên tục, cắm sâu từ khóa giá + so sánh.
- Điểm học được: tiêu đề khóa cứng cụm "giá bao nhiêu / có gì mới / là gì", cập nhật thường xuyên. 5 tiêu đề bên dưới bám theo pattern này.

**c. Thế Giới Di Động / FPT Shop (tin-tuc):** retailer content, mạnh tuyến "ra mắt VN + giá VN + trả góp".
- Tuyến hot: ASUS ProArt Copilot+ ra mắt VN 15/7 (giá cụ thể), Computex 2026 laptop AI, tổng hợp điện thoại sắp về.
- Điểm học được: họ thắng tuyến "giá VN + nơi bán". Bài ASUS ProArt và Acer Nitro của ta phải có bảng giá VN + đại lý để cạnh tranh.

## 4. Năm chủ đề "ngon" nhất cần viết trong tuần

Mỗi chủ đề: 2 phương án tiêu đề (≤65 ký tự, từ khóa đứng đầu theo §8b), từ khóa chính, lý do hot, dàn ý H2, link nội bộ THẬT, nguồn gốc, gợi ý media.

---

### Bài 1: ASUS ProArt P16 & PX13 Copilot+ ra mắt Việt Nam (máy tính, sản phẩm VN)

- **Tiêu đề A:** `ASUS ProArt P16, PX13 ra mắt Việt Nam: giá, cấu hình Copilot+`
- **Tiêu đề B:** `ASUS ProArt PX13 giá 76,99 triệu: laptop đồ họa AI về VN`
- **Từ khóa chính:** asus proart p16, asus proart px13 giá, laptop đồ họa copilot+ pc
- **Vì sao hot:** ASUS VN ra mắt chính hãng 15/7/2026, giá công bố rõ (PX13 76,99tr; P16 124,99tr), rơi đúng slot §0c "sản phẩm mới ra mắt tại VN". Đối thủ retailer đang chạy.
- **Dàn ý:**
  1. Mở: ASUS ProArt Copilot+ PC về VN, hai bản, cho ai.
  2. `spec-box`: giá / chip / GPU / RAM / màn.
  3. ## Giá bán và hai phiên bản tại Việt Nam (PX13 Ryzen AI Max+ 395, P16 Ryzen AI 9 HX 370 + RTX 5070).
  4. ## Copilot+ PC nghĩa là gì với dân sáng tạo (NPU 40+ TOPS, tính năng AI on-device).
  5. ## Màn hình, hiệu năng đồ họa và tản nhiệt.
  6. ## Có nên mua, so với đối thủ cùng tầm.
- **Link nội bộ:** [laptop AI Copilot+ PC nên mua](/articles/laptop-ai-copilot-plus-pc-2026-nen-mua-nao-huong-dan.html), [AMD Ryzen AI Max+ 395 Strix Halo](/articles/amd-ryzen-ai-max-395-strix-halo-mini-pc-ai-70b-2026.html), [ASUS ROG Flow Z13 Ryzen AI Max+ 395](/articles/asus-rog-flow-z13-ryzen-ai-max-395-may-tinh-bang-gaming-2026.html)
- **Nguồn:** mediaonlinevn.com (ra mắt VN 15/7 + giá), congngheviet.com (ProArt CES), fptshop.com.vn (Computex laptop AI).

---

### Bài 2: Honor Robot Phone (điện thoại, gimmick camera gimbal)

- **Tiêu đề A:** `Honor Robot Phone: camera gimbal 200MP tự ngóc như robot`
- **Tiêu đề B:** `Honor Robot Phone giá bao nhiêu, có gì đặc biệt 2026`
- **Từ khóa chính:** honor robot phone, điện thoại camera gimbal, honor robot phone giá
- **Vì sao hot:** Honor trình diễn tại WAIC 18/7 (đúng hôm nay), cụm gimbal 4D titan tự nâng 0,8s, chính 200MP + tele 200MP, Snapdragon 8 Elite Gen 5, hợp tác ARRI. Tuyến "gimmick + flagship thật" dễ viral.
- **Dàn ý:**
  1. Mở: chiếc điện thoại có camera "biết ngóc đầu".
  2. `spec-box`: camera / gimbal / chip / ra mắt.
  3. ## Cụm gimbal cơ khí 4D hoạt động thế nào.
  4. ## Camera 200MP kép + hợp tác ARRI, Super Steady, AI Object Tracking.
  5. ## Cấu hình flagship có "gánh" nổi gimmick không.
  6. ## Khi nào về VN, ai nên chờ.
- **Link nội bộ:** [Honor Magic 8 Pro camera 200MP](/articles/honor-magic-8-pro-camera-200mp-snapdragon-8-elite-gen-5-2026.html), [Honor Magic V6 gập pin 6600mAh](/articles/honor-magic-v6-dien-thoai-gap-pin-6600mah-lon-nhat-2026.html), [AGIBOT robot hình người WAIC 2026](/articles/agibot-robot-hinh-nguoi-embodied-ai-waic-2026.html)
- **Nguồn:** honor.com (MWC 2026 launch), androidheadlines.com, 9to5google.com, gagadget.com (mass production, specs), engadget.com.

---

### Bài 3: Kimi K3 của Moonshot AI (AI, mô hình mở lớn nhất)

- **Tiêu đề A:** `Kimi K3 là gì: mô hình mở 2,8 nghìn tỷ tham số vượt benchmark`
- **Tiêu đề B:** `Kimi K3 dẫn đầu Frontend Code Arena, vượt Claude Fable 5`
- **Từ khóa chính:** kimi k3, kimi k3 là gì, moonshot ai kimi k3
- **Vì sao hot:** ra mắt 16/7, 2,8 nghìn tỷ tham số (mô hình open-weight lớn nhất từ trước tới nay), #1 Frontend Code Arena 1679 Elo vượt Claude Fable 5; kèm tranh cãi distillation từ Claude. AI là trục search cực mạnh ở VN.
- **Dàn ý:**
  1. Mở: Trung Quốc thu hẹp khoảng cách AI với Kimi K3.
  2. `spec-box`: tham số / ngày / benchmark / giấy phép.
  3. ## Kimi K3 mạnh cỡ nào (Frontend Code Arena, so Opus 4.8 / GPT-5.5, kiểm định độc lập xếp #4).
  4. ## Vì sao "mô hình mở lớn nhất" lại quan trọng (chi phí, chủ quyền AI, né hạn chế compute).
  5. ## Tranh cãi tự nhận là Claude + cáo buộc distillation.
  6. ## Người dùng Việt tận dụng được gì.
- **Link nội bộ:** [Kimi K2.7 mã nguồn mở](/articles/kimi-k2-7-code-mo-hinh-ai-ma-nguon-mo-github-copilot-2026.html), [Claude Fable 5 Mythos](/articles/claude-fable-5-mythos-model-manh-nhat-anthropic-2026.html), [Google Gemini 3.5 Pro 2 triệu token](/articles/google-gemini-3-5-pro-2026-2-trieu-token-deep-think-ra-mat.html)
- **Nguồn:** Fortune, CNBC, Bloomberg, VentureBeat, Tom's Hardware (2,8T + Frontend Code Arena), simonwillison.net (pelican test).

---

### Bài 4: Acer Nitro V 16 AI (ANV16) RTX 5070 (laptop gaming)

- **Tiêu đề A:** `Acer Nitro V 16 AI RTX 5070: laptop gaming AI giá mềm 2026`
- **Tiêu đề B:** `Acer Nitro V 16 AI có gì mới: Ryzen AI 300, RTX 5070, 180Hz`
- **Từ khóa chính:** acer nitro v 16 ai, acer nitro v 16 rtx 5070, laptop gaming ai
- **Vì sao hot:** Acer cập nhật dòng Nitro V 16 sau 2 năm với Ryzen AI 300 series + RTX 5070, màn WQXGA 180Hz; tuyến "laptop gaming AI giá tốt" search demand cao. Trang Acer VN đã có sản phẩm.
- **Dàn ý:**
  1. Mở: Nitro V 16 bản AI, gaming AI giá dễ chịu.
  2. `spec-box`: chip / GPU / màn / RAM-SSD.
  3. ## Cấu hình và các phiên bản (ANV16, bản 16S mỏng, RTX 5050→5070).
  4. ## "AI" trên laptop gaming này là gì (NPU Ryzen AI, tính năng Copilot+).
  5. ## Hiệu năng game + tản nhiệt, màn 180Hz.
  6. ## So với Nitro V 16 ProPanel và tầm giá.
- **Link nội bộ:** [Acer Nitro ProPanel AN16S RTX 5070 ra mắt VN](/articles/acer-nitro-propanel-an16s-rtx-5070-ra-mat-viet-nam-2026.html), [NVIDIA RTX 50 Super](/articles/nvidia-rtx-50-super-5080-super-5070-ti-super-24gb-gddr7-2026.html), [laptop AI Copilot+ PC nên mua](/articles/laptop-ai-copilot-plus-pc-2026-nen-mua-nao-huong-dan.html)
- **Nguồn:** acer.com/vn-vi (trang sản phẩm Nitro V 16 AI), nghenhinvietnam.vn (cập nhật dòng, Core 9 270H/RTX 5070), microcenter.com (cấu hình).

---

### Bài 5: OPPO Find X9s (điện thoại, +2.341% search VN)

- **Tiêu đề A:** `OPPO Find X9s: pin 7025mAh, camera Hasselblad, giá dự kiến`
- **Tiêu đề B:** `OPPO Find X9s có gì mới, khác Find X9 Ultra ra sao 2026`
- **Từ khóa chính:** oppo find x9s, oppo find x9s giá, oppo find x9s cấu hình
- **Vì sao hot:** từ khóa tăng +2.341% ở VN Q2/2026, nhưng site mới có bài Find X9 Ultra chứ chưa có X9s. Pin 7025mAh silicon-carbon, 3 camera 50MP + periscope, Dimensity 9500s, sạc 80W, đồng thương hiệu Hasselblad.
- **Dàn ý:**
  1. Mở: Find X9s, bản "du lịch Hasselblad" pin khủng.
  2. `spec-box`: màn / chip / pin / camera / sạc.
  3. ## Camera Hasselblad 50MP ba ống + zoom periscope.
  4. ## Pin 7025mAh silicon-carbon và sạc 80W SUPERVOOC.
  5. ## Find X9s vs Find X9s Pro vs Find X9 Ultra (dual 200MP, giá).
  6. ## Khi nào về VN, đấu ai trong tầm giá.
- **Link nội bộ:** [OPPO Find X9 Ultra camera multispectral](/articles/oppo-find-x9-ultra-camera-multispectral-danxia-2026.html), [Xiaomi 17 Series ra mắt VN](/articles/xiaomi-17-series-ra-mat-viet-nam-2026-leica-snapdragon-8-elite-gen5.html), [Redmi K90 Ultra gaming pin 8500mAh](/articles/redmi-k90-ultra-2026-vu-khi-gaming-pin-8500mah-quat-tan-nhiet-gia-re.html)
- **Nguồn:** oppo.com (trang Find X9s/X9 Ultra), gsmarena.com (full specs X9s/X9s Pro), 91mobiles.com (ra mắt TQ, giá CNY).

## 5. Quy trình hoàn tất (chạy trên máy có internet)

1. Với mỗi bài: chọn + verify đủ 5 media (1 hero + ≥3 figure + ≥1 video), verify thumbnail bằng KÍCH THƯỚC và oEmbed (AGENTS.md §4), giãn media ≥35 từ giữa 2 khối.
2. `node scripts/check-media.mjs` → phải sạch (0 lỗi).
3. Build §5: `node scripts/build-legacy-index.mjs && node scripts/build-blog.mjs && npx astro build`.
4. `node scripts/shot.mjs /articles/<slug>.html` để nhìn render 390px + 1280px.
5. Deploy + đẩy index: `node scripts/indexnow.mjs <url> https://techvision.click/blog.html`.
</content>
</invoke>
