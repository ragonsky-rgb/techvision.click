# Video Vox: Samsung có 2 CEO + 1 chủ tịch, và canh bạc chip AI (24/09/2026)

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
