# Video Vox: Samsung có 2 CEO + 1 chủ tịch, và canh bạc chip AI (24/09/2026)

> **Facebook Reels: ĐÃ HẸN 28/09 19:00 (bản Vox ảnh thật)** qua `fb_reel.py` (video_id 1242405018062558, 25/09/2026). **TikTok: ĐÃ HẸN 28/09 19:00** (Claude qua Chrome, 25/09). YouTube: chưa.

- Kiểu: cắt dán giấy kiểu Vox (ngoại lệ 15/09 cho phép Flow), dọc 9:16, **56,6 giây**, giọng OmniVoice **1,2x**
- Bản cuối: `~/techvision-video-kit/out/samsung/samsung-2-ceo-canh-bac-chip-ai-final.mp4` (27,6 MB)
- Dựng lại: `python3 scripts/build_samsung.py voice|motion|caps|final`; câu lệnh Flow ở `out/samsung/prompts.md`
- Link đích: bài `samsung-exynos-2600-chip-2nm-dau-tien-the-gioi-2026` (đang index, cùng chủ đề chip 2nm)

## Số liệu, kiểm tận gốc 24/9/2026

| Nội dung | Nguồn |
|---|---|
| 21/11/2025: TM Roh (Roh Tae-moon) thành CEO, đồng CEO với Phó Chủ tịch Jun Young-hyun (mảng chip DS) | news.samsung.com "Samsung Electronics Announces New Leadership" |
| 12/2/2026: Samsung sản xuất hàng loạt và giao HBM4 thương mại đầu tiên ngành | news.samsung.com (datePublished 2026-02-12) |
| 19/3/2026: đầu tư hơn 110 nghìn tỷ won vào nhà máy + R&D, cao nhất lịch sử | công bố "Plan to Enhance Corporate Value", Financial News 19/3 |
| 28/7/2025: hợp đồng 22,8 nghìn tỷ won (~16,5 tỷ USD) với Tesla tới hết 2033 | hồ sơ công bố của Samsung; Musk xác nhận đối tác là Tesla |
| 15-16/9/2026: Taylor (Texas) chạy thử chip AI5 cho Tesla trên 2nm; xong kiểm định cuối năm, giao đại trà năm sau; Lee Jae-yong tự tìm khách nước ngoài | Seoul Economic Daily 16/9 (**nguồn trong ngành, Samsung chưa công bố**) - video nói rõ "báo Hàn Quốc đưa tin", "được cho là" |

## Bảng kê nguồn media

| # | Nguồn | Ghi chú |
|---|---|---|
| A | 11 poster cắt dán, Google Flow / Nano Banana 2, **0 tín dụng** | không mặt người thật, không tên người, không logo |
| B | Chuyển động: tự dựng tại máy (đẩy máy + rung giấy stop-motion), **không dùng Veo/Omni** | 0 tín dụng |
| C | Giọng OmniVoice của anh Long, tua 1,2x | |
| D | Tiếng động tự tổng hợp (scripts/sfx.py), 33 hiệu ứng | |

Loại bỏ 3 bản AI tự bịa chữ: cảnh 6 bản 2 ("SOUTH KOREA'S RISING INDUSTRIAL DEBT" - sai nghĩa), cảnh 11 bản 2 ("CHAP RAGE"),
cảnh 5 cả 2 bản đầu ("HBM3 MEMORY", "MODURY") → vẽ lại với câu "The headline is the ONLY text in the image".

## BẢN 2 (anh Long chọn): Vox dựng 100% bằng code, không Flow, không kết nối ngoài

- File: `~/techvision-video-kit/out/samsung/samsung-2-ceo-chip-ai-vox-final.mp4` (56,6 giây, 37,1 MB)
- Dựng: `python3 scripts/build_samsung_vox.py still|render` - dùng lại giọng, nhịp cảnh và phụ đề của bản 1
- Hình vẽ bằng PIL: nền giấy màu có hạt + sợi giấy, mẩu cắt có viền giấy trắng mép xé (mặt nạ nhoè + nhiễu tần số thấp),
  chấm in halftone, băng keo, bóng đổ, mẩu báo cắt; tiêu đề Helvetica Neue Condensed Black (có dấu tiếng Việt), mẩu báo Lora
- Hình đổi 15 lần/giây trên video 30fps (stop-motion "on twos"), chuyển cảnh mép giấy xé quét ngang 0,22s
- Tiếng động tự sinh theo lúc từng mẩu giấy xuất hiện (rơi = băng keo, trượt = vút, bật = pop, dấu = đóng dấu)
- Có ghi tên 2 CEO dưới nhãn CHIP / THIẾT BỊ (chữ, không vẽ mặt người); "chạy thử" ghi rõ "Theo báo Hàn Quốc"
- Font Helvetica Neue Condensed Black KHÔNG có mũi tên "→" (ra ô vuông) - dùng dấu gạch
- Gói đăng: dùng chung gói ở trên (bỏ dòng "Hình minh họa ... Google Flow"; thay bằng "Hình cắt dán dựng bằng code")

## BẢN 3 (bản giao cuối 24/9): Vox dựng bằng code + ẢNH THẬT dán polaroid

- File: `~/techvision-video-kit/out/samsung/samsung-2-ceo-chip-ai-vox-final.mp4` (56,6 giây, 37,8 MB) + bản nhẹ `samsung-vox-xem-dien-thoai.mp4` (16 MB)
- Ảnh ở `~/techvision-video-kit/assets/samsung_real/cand/`, mỗi ảnh ghi tên + nguồn ngay dưới ảnh trong khung

| Cảnh | Ảnh | Nguồn / giấy phép |
|---|---|---|
| 1 | Chủ tịch Lee Jae-yong (lee.jpg) | Wikimedia Commons "Lee Jae-yong in 2016.jpg", KBS, CC BY 3.0 |
| 3 | Jun Young-hyun phát biểu lễ NRD-K (nrdk_1.jpg) | Samsung Newsroom, 11/2024 |
| 3 | TM Roh trên sân khấu Galaxy Unpacked 2026 (up_main6.jpg) | Samsung Newsroom 26/2/2026 - chú thích gốc "Roh introduced Samsung's vision for agentic AI" |
| 4 | Chip HBM4 (hbm4_1.jpg), xe xuất xưởng lô HBM4 đầu tiên (hbm4_4.jpg) | Samsung Newsroom 12/2/2026 |
| 5 | Chip HBM4 (hbm4_2.jpg) | Samsung Newsroom 12/2/2026 |
| 7 | Tesla Model Y 2025 (tesla.jpg) | Wikimedia Commons, Alexander Migl, CC BY-SA 4.0 |
| 8 | Nhà máy chip Samsung ở Texas (taylor.jpg) | ảnh Samsung Electronics trong bài Seoul Economic Daily 16/9/2026 - chú thích gốc mập mờ Taylor/Austin nên video chỉ ghi "ở Texas" |
| 9 | Lee Jae-yong gặp Elon Musk, "Welcome Tesla", 5/2023 (leemusk.jpg) | ảnh Samsung Electronics trong bài Seoul Economic Daily 16/9/2026 |

Luật áp dụng: ảnh TRONG VIDEO được lấy cả ảnh báo/hãng có ghi nguồn (nới luật 25/08). Bỏ các ảnh chuyến thăm Pyeongtaek (có Tổng thống Biden) để tránh kéo sang chính trị.

### Gói đăng BẢN 3 (CHƯA đăng, chờ anh Long)

**TikTok** (link để bio)
```
Samsung đang có 2 CEO cùng lúc, và đứng trên cả hai là Chủ tịch Lee Jae-yong 👀 Họ đang dồn tiền kỷ lục vào chip AI: HBM4 đầu tiên thế giới, hợp đồng 16,5 tỷ USD với Tesla, và báo Hàn Quốc đưa tin nhà máy Texas đã chạy thử chip 2nm. #samsung #chipAI #tesla #HBM4 #techvision
```
Link bio: https://techvision.click/articles/samsung-exynos-2600-chip-2nm-dau-tien-the-gioi-2026.html?utm_source=tiktok&utm_medium=social&utm_campaign=video-samsung-2-ceo-chip-ai

**YouTube Shorts**

Tiêu đề: `Samsung có 2 CEO và canh bạc chip AI 16,5 tỷ USD với Tesla #Shorts`

Mô tả:
```
Từ 21/11/2025 Samsung Electronics có 2 đồng CEO: Jun Young-hyun (mảng chip) và Roh Tae-moon (điện thoại, thiết bị), dưới Chủ tịch Lee Jae-yong. Ngày 12/2/2026 Samsung là hãng đầu tiên sản xuất hàng loạt bộ nhớ HBM4; năm 2026 đầu tư hơn 110 nghìn tỷ won, cao nhất lịch sử; hợp đồng làm chip AI cho Tesla 16,5 tỷ USD tới hết 2033. Giữa tháng 9, báo Hàn Quốc đưa tin nhà máy Texas đã chạy thử chip AI5 trên tiến trình 2nm.

Chip 2nm của Samsung mạnh cỡ nào:
https://techvision.click/articles/samsung-exynos-2600-chip-2nm-dau-tien-the-gioi-2026.html?utm_source=youtube&utm_medium=social&utm_campaign=video-samsung-2-ceo-chip-ai

Ảnh: Samsung Newsroom, Samsung Electronics, KBS (CC BY 3.0), Alexander Migl (CC BY-SA 4.0). Hình cắt dán dựng bằng code.
#Shorts #Samsung #ChipAI #HBM4 #Tesla
```

**Facebook Reels**
```
Ít ai để ý: Samsung đang được điều hành bởi 2 CEO cùng lúc. Và họ đang đặt cược lớn nhất vào chip AI: HBM4 đầu tiên thế giới, hợp đồng 16,5 tỷ USD làm chip cho Tesla tới 2033, và báo Hàn Quốc đưa tin nhà máy ở Texas đã chạy thử chip 2nm. Chip 2nm của Samsung mạnh cỡ nào: https://techvision.click/articles/samsung-exynos-2600-chip-2nm-dau-tien-the-gioi-2026.html?utm_source=facebook&utm_medium=social&utm_campaign=video-samsung-2-ceo-chip-ai
```

## Bẫy Flow gặp lần này (bổ sung cho hồ sơ CEO Apple)

1. **Nút gửi bị khoá khi đang có ảnh vẽ dở**; phím Enter lúc đó không báo gì, chữ nằm lại trong ô và bị nối với câu gõ sau
   → ra ảnh ghép 2 cảnh. Cách đúng: gõ, chờ `button[type=submit]` hết `disabled`, bấm chuột thật, kiểm ô lệnh về 0 ký tự.
2. Bấm nút tải bằng JavaScript liên tiếp → Chrome chặn "tải nhiều tệp"; anh Long phải bấm cho phép 1 lần trên thanh địa chỉ.
3. Ảnh tải về từ nút "Tải xuống hàng loạt" là 768x1376 (1k), zip 2 ảnh/hàng, tên `tải xuống (N).zip`.
4. Danh sách hàng trong Flow là danh sách ảo: chỉ hàng đang hiện mới có trong DOM; nhảy scrollTop là trang trắng, phải cuộn bằng chuột.

## Gói đăng (CHƯA đăng, chờ anh Long)

**TikTok** (link để bio)
```
Samsung không có 1 CEO mà có tới 2, và đứng trên cả hai là Chủ tịch Lee Jae-yong 👀 Canh bạc lớn nhất của họ: chip AI, từ HBM4 tới nhà máy Texas làm chip cho Tesla. #samsung #chipAI #tesla #HBM4 #techvision
```
Link bio: https://techvision.click/articles/samsung-exynos-2600-chip-2nm-dau-tien-the-gioi-2026.html?utm_source=tiktok&utm_medium=social&utm_campaign=video-samsung-2-ceo-chip-ai

**YouTube Shorts**

Tiêu đề: `Samsung có 2 CEO, và canh bạc chip AI với Tesla #Shorts`

Mô tả:
```
Từ 21/11/2025 Samsung Electronics có 2 đồng CEO: Jun Young-hyun (mảng chip) và Roh Tae-moon (điện thoại, thiết bị), dưới Chủ tịch Lee Jae-yong. Tháng 2/2026 Samsung là hãng đầu tiên sản xuất hàng loạt bộ nhớ HBM4; năm 2026 đầu tư hơn 110 nghìn tỷ won; hợp đồng làm chip AI cho Tesla 16,5 tỷ USD tới hết 2033. Giữa tháng 9, báo Hàn Quốc đưa tin nhà máy Texas đã chạy thử chip AI5 trên tiến trình 2nm.

Chip 2nm của Samsung mạnh cỡ nào:
https://techvision.click/articles/samsung-exynos-2600-chip-2nm-dau-tien-the-gioi-2026.html?utm_source=youtube&utm_medium=social&utm_campaign=video-samsung-2-ceo-chip-ai

Hình minh họa cắt dán dựng bằng AI (Google Flow), không dùng chân dung người thật. #Shorts #Samsung #ChipAI
```

**Facebook Reels**
```
Ít ai để ý: Samsung đang được điều hành bởi 2 CEO cùng lúc, và họ đang dồn tiền kỷ lục vào chip AI, từ HBM4 cho máy chủ AI tới nhà máy ở Texas làm chip cho Tesla. Chip 2nm của Samsung: https://techvision.click/articles/samsung-exynos-2600-chip-2nm-dau-tien-the-gioi-2026.html?utm_source=facebook&utm_medium=social&utm_campaign=video-samsung-2-ceo-chip-ai
```
