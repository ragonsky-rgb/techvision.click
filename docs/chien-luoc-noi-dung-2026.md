# Chiến lược nội dung & Topical map - techvision.click

> ## ⚠️ SỐ LIỆU TRONG FILE NÀY LÀ CỦA THÁNG 6/2026, ĐÃ LẠC HẬU
>
> **Rà ngày 01/09/2026.** File tự đặt luật "cập nhật mỗi quý" nhưng chưa từng
> được cập nhật kể từ 10/6. Ba chỗ sai lệch nặng nhất, đừng trích dẫn:
>
> | Ghi trong file (6/2026) | Thực tế 01/09/2026 |
> |---|---|
> | 64 bài | 688 bài markdown + 61 bài legacy, trong đó **513 bài markdown đang noindex** |
> | Nhịp 3-4 bài/tuần | Trần cứng **2 bài/ngày, 8 bài/tuần** (`AGENTS.md §0a`, từ 07/08) |
> | KPI 90 ngày: click 42 → 150-200 | Tuần 04-10/08 chỉ được **8 click, 197 hiển thị** |
>
> **Phần còn dùng được:** mục 2 (định vị, 3 nguyên tắc), mục 4 (template
> OUTLINE & AM), mục 6 (vận hành đo lường). Ba mục đó vẫn đúng.
>
> **Phần đã bị thay thế:** mục 1 (audit), mục 3 (topical map), mục 5 (brief
> hai bài đã viết xong từ lâu). Định hướng hiện hành nằm ở
> **`ke-hoach-12-thang-2026-2027.md`**, dựa trên số đo 12/08 và định vị lại
> TechVision thành "hệ ra quyết định mua công nghệ tiêu dùng".
>
> **Bài học đắt nhất chưa có trong file này:** giai đoạn 6-8/2026 đẻ 704 bài
> trong 53 ngày, chỉ 2,7% từng có 1 lượt hiển thị, trong khi 61 bài legacy
> viết tay đạt 41%. Nút thắt là phân phối và tín hiệu Việt Nam, không phải
> số lượng bài. Xem `AGENTS.md §0a-bis`.

> Lập ngày 10/6/2026, dựa trên audit 64 bài + GSC 90 ngày. Cập nhật mỗi quý.

## 1. Audit tóm tắt (6/2026)

- 64 bài: AI & model 27 · Di động & gadget 17 · PC & chip 9 · Apple & iOS 6 · lẻ 5
- GSC 28 ngày: ~42 click, trang chủ chiếm 26 (CTR 44%, vị trí 1.4); 23 trang indexed / 7 chưa
- Lệch cung-cầu: viết nhiều về AI nhưng demand thật đến từ phần cứng (cụm RTX 5090) và Apple (macOS 27, Siri WWDC)
- 7 bài ở vị trí 6-11 (quick-win): RTX 5090 Ti (11.1/31 impr, đã tối ưu 9/6), Samsung Glasses (6.5/19, đã tối ưu 9/6), macOS 27 (7.9/18), AI agents enterprise (9.3/16), OpenAI Dell (6.4/14), Google I/O day1 (8.1/14), Osaurus (8.0/12)
- Hạ tầng: Astro CMS (Sveltia), sitemap/news/rss tự sinh, hub Sự kiện, GA4 (G-Z5JS5HS5LK), GSC API tooling (scripts/gsc)

## 2. Định vị & nguyên tắc

**Định vị:** Tin công nghệ quốc tế nhanh bằng tiếng Việt, kèm góc nhìn cho người dùng Việt (giá VN, mua được không, tiếng Việt khi nào có).

**3 nguyên tắc:**
1. Viết theo cụm, không viết lẻ - mỗi bài thuộc 1 cụm trong topical map, có AM (anchor map) rõ.
2. Tin nóng nuôi evergreen - mỗi event nóng kéo theo 1-2 bài evergreen giữ traffic lâu dài.
3. Tối ưu hằng tuần - chạy GSC API (scripts/gsc), bài vị trí 5-15 nhiều hiển thị thì chỉnh title/meta/link.

**Nhịp:** 3-4 bài/tuần = 2 tin nóng + 1 evergreen + 1 lượt tối ưu bài cũ.

**Event playbook (đã chứng minh với WWDC):** trang sự kiện trước ~2 tuần → bài preview → live → recap → evergreen ăn theo. Kế tiếp: Samsung Unpacked 22/7 (dựng trang ~8/7), iPhone tháng 9.

**KPI 90 ngày:** indexed 23 → 50+ · click 42 → 150-200/28 ngày · 3 bài mới top 10 · CTR bài top > 5%.

## 3. Topical map (5 trụ)

| Trụ | Hub | Cụm con | Gap nên viết |
|---|---|---|---|
| AI & model (27) | blog?cat=ai | Model mới · AI business · AI policy · AI agents | Fable 5 vs GPT vs Gemini · AI Overviews là gì (evergreen) |
| Di động (17) | blog?cat=smartphone | Samsung · Xiaomi/Honor · Kính AI · Wearable | Trang sự kiện Unpacked 22/7 + preview |
| PC & chip (9) | blog?cat=laptop | GPU NVIDIA (demand thật) · Chip Arm laptop · RAM/giá linh kiện | **Giá RTX 5090/Ti tại VN** · RTX Spark laptop giá/ngày bán |
| Apple & iOS (6) | blog?cat=apple | WWDC/iOS 27 · Siri AI · Mac | **Siri AI tiếng Việt khi nào** · Cách cài iOS 27 beta |
| Sự kiện | /su-kien/ | Trang từng event | Unpacked 22/7 → iPhone 9/2026 |

Ưu tiên viết gap theo thứ tự: (1) Giá RTX 5090 VN - query đã xuất hiện trong GSC; (2) Siri AI tiếng Việt; (3) Unpacked 22/7; (4) Cài iOS 27 beta; (5) Fable 5 vs GPT vs Gemini; (6) RTX Spark laptop; (7) AI Overviews là gì.

## 4. Template OUTLINE & AM (áp cho mọi bài)

```
OUTLINE & AM - [tên bài]
1. ĐỊNH VỊ   Trụ → Cụm → vai trò (hub/spoke)
2. KEYWORD   1 chính + 3-5 phụ + intent (tin tức/hướng dẫn/so sánh/giá)
3. TITLE     ≤60 ký tự, keyword đứng đầu, có hook (số/ngày/giá)
   META      120-160 ký tự, trả lời thẳng
4. OUTLINE   Sapo answer-first → 5-7 H2 dạng câu hỏi PAA
5. AM        IN ← 2-3 bài cũ trỏ về (bài + anchor text)
             OUT → 2-3 bài cùng cụm (anchor text)
             HUB → chuyên mục / trang sự kiện
6. MEDIA     ≥5, RẢI ĐỀU giữa các H2: hero riêng + 3-4 ảnh + CHỈ 1-2 video (KHÔNG dồn cụm; bài CMS không dùng frontmatter videos, chèn thẳng vào body)
7. SCHEMA    NewsArticle + FAQPage (4-6 FAQ), about[] dùng Thing
```

Quy tắc kèm: 0 em-dash · hero không tái dùng ảnh bài khác · ưu tiên ảnh hơn video (1-2 video/bài) · bài mới tự lên hero Tiêu điểm qua build · sau đăng: nộp news sitemap (node gsc.mjs sitemap) + yêu cầu index trong GSC UI.

## 5. Brief sẵn cho 2 bài ưu tiên

### 5.1 Giá RTX 5090 / 5090 Ti tại Việt Nam (tháng 6/2026)
- Trụ PC & chip → cụm GPU → spoke giá (cập nhật hằng tháng, đổi tháng trong title)
- Keyword: "giá rtx 5090" · phụ: giá rtx 5090 ti, rtx 5090 việt nam, 5090 48gb giá
- Title: Giá RTX 5090 và 5090 Ti tại Việt Nam tháng 6/2026: bảng giá, có nên mua?
- H2: Bảng giá theo bản · 5090 Ti 48GB bao giờ về VN · Vì sao giá tăng (RAM) · Có nên mua hay chờ · Dự đoán Q3
- AM IN: bài nvidia-rtx-5090-ti-48gb (anchor "giá RTX 5090 tại Việt Nam"), bài khung-hoang-bo-nho-ram (anchor "giá GPU tại Việt Nam")
- AM OUT: 2 bài trên + nvidia-n1x; HUB: chuyên mục Laptop & PC

### 5.2 Siri AI tiếng Việt: khi nào có, máy nào dùng được?
- Trụ Apple → cụm Siri/WWDC → spoke evergreen hỏi-đáp
- Keyword: "siri tiếng việt" · phụ: siri ai tiếng việt, apple intelligence tiếng việt
- Title: Siri AI có tiếng Việt không? Lộ trình và máy nào dùng được (2026)
- H2: Siri AI là gì · Hỗ trợ ngôn ngữ nào · Khi nào có tiếng Việt · iPhone nào dùng được · Trong lúc chờ dùng gì
- AM IN: wwdc-2026-recap (anchor "Siri AI có tiếng Việt không"), wwdc-2026-keynote (anchor "Siri tiếng Việt khi nào có")
- AM OUT: recap + /su-kien/wwdc-2026.html + bài Siri/Gemini; HUB: /su-kien/ + Apple
- Nhắm featured snippet câu Yes/No

## 6. Vận hành đo lường

- Thứ 2 hằng tuần: `cd scripts/gsc && node gsc.mjs report 28` → lọc vị trí 5-15, impr cao → tối ưu 1-2 bài
- GA4 (sau 2-4 tuần đủ data): xem trang giữ chân tốt → đặt related/banner dẫn về
- Mỗi quý: cập nhật file này (đếm lại bài, đổi gap, review KPI)
