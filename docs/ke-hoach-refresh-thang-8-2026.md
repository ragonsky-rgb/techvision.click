# Kế hoạch refresh tháng 8/2026 - 60 bài "tháng 7/6" (luật §8b AGENTS.md)

> ## ⛔ KẾ HOẠCH NÀY ĐÃ HỦY, ĐỪNG THỰC HIỆN
>
> **Chốt ngày 01/09/2026.** Đợt 1 làm ngày 3-4/8. Đợt 2 tới đợt 5 (48 bài) sẽ
> KHÔNG bao giờ chạy, và đó là quyết định đúng, không phải việc còn tồn.
>
> **Lý do:** ngày 07/08/2026, tức 4 ngày sau khi file này được viết, đợt dọn
> scaled content đã đặt `noindex: true` cho toàn bộ series template, trong đó
> có 42 trên 44 bài `top-*-dang-mua-*`. Cùng lúc `AGENTS.md §0a` cấm tuyệt đối
> series `Top X đáng mua tháng N` vì 171 bài dạng này đạt 0 lượt hiển thị.
> Kế hoạch này và AGENTS.md §0a mâu thuẫn trực tiếp; §0a mới hơn và đúng.
>
> **Kiểm chứng ngày 01/09/2026:** cả 32 bài "tháng 7/2026" còn lại đều
> `noindex: true`, không bài nào có trong `dist/sitemap.xml` (250 URL) hay
> `blog.html`. Refresh chúng là công toi: Google không thấy trang nào.
>
> **Thay bằng gì:** chạy `node scripts/list-monthly-refresh.mjs`. Script đã
> được vá ngày 01/09 để tách nhóm noindex ra khỏi số đếm, nên nó chỉ báo
> những bài CÒN INDEX thật sự cần refresh (tháng 9/2026: 3 bài).
>
> **Nếu muốn cứu nhóm bài này:** gỡ noindex hàng loạt không phải câu trả lời,
> vì chúng bị phạt do trùng khuôn chứ không do cũ. Cách duy nhất có cửa là
> chọn 3-5 chủ đề có nhu cầu thật từ GSC, viết lại từ đầu thành bài độc lập
> có giá Việt Nam thật (§0a-bis), rồi 301 các bài template về đó.

> Trạng thái 3/8: đã refresh xong `top-dien-thoai-dang-mua-thang-7-2026-moi-phan-khuc` (bài hút traffic số 1) và cụm giá Z Fold 8. Còn 60 bài chia 5 đợt dưới đây. Mỗi đợt = 1 phiên AI cloud = 1 nhánh phụ; máy local duyệt (dedup + QA + media verify) rồi đăng.

## Quy tắc refresh BẮT BUỘC (mọi đợt)

1. **GIỮ NGUYÊN SLUG** - chỉ đổi title/description/nội dung sang "tháng 8/2026" (kể cả slug đang ghi thang-6/thang-7). KHÔNG tạo file mới.
2. Cập nhật: title ≤65 ký tự, description ≤160, mọi "tháng 7/2026" trong tldr/deck/heading/body → "tháng 8/2026"; `dateModified` = ngày refresh (giữ nguyên `datePublished`).
3. **Giá phải kiểm tra lại thực tế** (CellphoneS/TGDĐ/FPT/Hoàng Hà): giá nào đổi thì sửa số, model nào ngừng bán/có bản mới đáng thay thì thay (giữ chuẩn ≥5 model thật/bài).
4. Mỗi bài thêm 1-2 câu "điểm mới tháng 8" ở mở bài hoặc phần lưu ý (đợt khuyến mãi tựu trường, sản phẩm mới vừa ra...). Không em-dash.
5. Media: chỉ thay khi ảnh/video chết; ID mới phải verify sống (oembed 200 + hqdefault >8KB).
6. Sau mỗi đợt: build-blog → check-media 0 lỗi → astro build → push → verify live → IndexNow.

## Đợt 1 - GẤP NHẤT (tựu trường + mở bán foldable + giá linh kiện biến động) - 12 bài
- top-dien-thoai-gap-dang-mua-thang-7-2026 *(Z Fold 8/Flip 8 mở bán 8/8-18/8 - thay model mới!)*
- top-laptop-dang-mua-thang-7-2026-moi-phan-khuc *(mùa tựu trường)*
- top-may-tinh-bang-dang-mua-thang-7-2026 *(tựu trường)*
- top-sac-du-phong-dang-mua-thang-7-2026 *(tựu trường)*
- top-tai-nghe-khong-day-dang-mua-thang-7-2026 *(tựu trường)*
- game-hay-nintendo-switch-2-thang-7-2026-splatoon-raiders-final-fantasy *(đang có impressions - cập nhật game tháng 8)*
- gia-rtx-5090-viet-nam-thang-6-2026-bang-gia-co-nen-mua *(slug tháng 6, title đang tháng 7 → sang tháng 8)*
- iphone-16-giam-gia-thang-7-2026-lua-chon-toi-uu
- iphone-17-giam-gia-thang-7-2026-bang-gia-co-nen-mua *(sát tháng 9 iPhone 18 ra - thêm khuyến nghị chờ/mua)*
- top-card-do-hoa-dang-mua-thang-7-2026 *(giá GPU biến động vì khủng hoảng DRAM)*
- top-o-cung-ssd-dang-mua-thang-7-2026 *(giá NAND biến động)*
- top-ram-may-tinh-dang-mua-thang-7-2026 *(giá DRAM biến động mạnh nhất)*

## Đợt 2 - PC & Gaming - 12 bài
- top-ban-phim-co-dang-mua-thang-7-2026
- top-chuot-gaming-dang-mua-thang-7-2026
- top-mousepad-gaming-dang-mua-thang-7-2026
- top-tay-cam-choi-game-dang-mua-thang-7-2026
- top-may-choi-game-cam-tay-dang-mua-thang-7-2026
- top-ghe-gaming-dang-mua-thang-7-2026
- top-loa-may-tinh-gaming-dang-mua-thang-7-2026
- top-man-hinh-may-tinh-dang-mua-thang-7-2026
- top-tan-nhiet-cpu-dang-mua-thang-7-2026
- top-nguon-may-tinh-dang-mua-thang-7-2026
- top-bo-mach-chu-dang-mua-thang-7-2026
- top-case-pc-dang-mua-thang-7-2026

## Đợt 3 - Smart home, camera & phụ kiện làm việc - 12 bài
- top-camera-an-ninh-dang-mua-thang-7-2026
- top-camera-hanh-trinh-dang-mua-thang-7-2026
- top-khoa-cua-thong-minh-dang-mua-thang-7-2026
- top-o-cam-dien-thong-minh-dang-mua-thang-7-2026
- top-den-thong-minh-dang-mua-thang-7-2026
- top-robot-hut-bui-dang-mua-thang-7-2026
- top-router-wifi-mesh-dang-mua-thang-7-2026
- top-hub-dock-usb-c-dang-mua-thang-7-2026
- top-gia-do-laptop-dang-mua-thang-7-2026
- top-man-hinh-di-dong-dang-mua-thang-7-2026
- top-the-nho-microsd-dang-mua-thang-7-2026
- top-flycam-dang-mua-thang-7-2026

## Đợt 4 - Âm thanh, wearable, TV & bài tin AI tháng 6 - 12 bài
- top-loa-bluetooth-di-dong-dang-mua-thang-7-2026
- top-loa-soundbar-dang-mua-thang-7-2026
- top-may-chieu-mini-dang-mua-thang-7-2026
- top-smart-tivi-dang-mua-thang-7-2026
- top-dong-ho-thong-minh-dang-mua-thang-7-2026 *(Pixel Watch 5 sắp ra 12/8 - thêm note "chờ hay mua")*
- top-nhan-thong-minh-dang-mua-thang-7-2026
- top-thiet-bi-dich-thuat-ai-dang-mua-thang-7-2026
- top-quat-dieu-hoa-hoi-nuoc-dang-mua-thang-7-2026
- top-quat-tich-dien-dang-mua-thang-7-2026
- chatgpt-cap-nhat-thang-6-2026-tac-vu-hen-gio-phat-am-ca-nhan-hoa *(dạng tin: cập nhật diễn biến ChatGPT tháng 7-8)*
- openai-chatgpt-gpt-5-5-cap-nhat-thang-6-2026-bo-nho-moi-khai-tu *(dạng tin: gộp diễn biến mới)*
- xai-grok-cap-nhat-thang-6-2026-grok-4-3-aws-grok-cho-word-mo-hinh-moi *(dạng tin: Grok mới nhất)*

## Đợt 5 - Gia dụng & còn lại - 12 bài
- top-tu-lanh-dang-mua-thang-7-2026
- top-may-giat-dang-mua-thang-7-2026
- top-may-rua-bat-dang-mua-thang-7-2026
- top-noi-chien-khong-dau-dang-mua-thang-7-2026
- top-noi-com-dien-dang-mua-thang-7-2026
- top-may-pha-ca-phe-dang-mua-thang-7-2026
- top-may-say-toc-dang-mua-thang-7-2026
- top-may-loc-nuoc-dang-mua-thang-7-2026
- top-may-loc-khong-khi-dang-mua-thang-7-2026
- top-may-hut-am-dang-mua-thang-7-2026 *(mùa mưa miền Nam - ưu tiên trong đợt)*
- top-bep-tu-dang-mua-thang-7-2026
- top-ghe-cong-thai-hoc-dang-mua-thang-7-2026

## Lịch đề xuất
| Đợt | Ngày giao cloud | Ngày duyệt & đăng (local) |
|-----|----------------|---------------------------|
| 1 | 4/8 | 4-5/8 |
| 2 | 5/8 | 5-6/8 |
| 3 | 6/8 | 6-7/8 |
| 4 | 7/8 | 7-8/8 |
| 5 | 8/8 | 8-9/8 |

## Prompt mẫu giao cho phiên AI cloud (đổi số đợt)
> Đọc docs/ke-hoach-refresh-thang-8-2026.md trong repo, làm ĐỢT N: refresh đúng danh sách bài của đợt theo "Quy tắc refresh BẮT BUỘC" (giữ slug, sang tháng 8/2026, kiểm tra lại giá thực tế từng model, ≥5 model thật/bài, không em-dash, không đổi media trừ khi chết). Commit lên 1 nhánh phụ mới, KHÔNG push main. Ghi rõ trong commit message bài nào có thay model/giá so với tháng 7.
