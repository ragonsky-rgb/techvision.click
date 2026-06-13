# Kế hoạch 30 ngày · techvision.click

> 13/6 → 13/7/2026. Bám audit + topical map trong [chien-luoc-noi-dung-2026.md](./chien-luoc-noi-dung-2026.md). Nhịp 3-4 bài/tuần = tin nóng + evergreen + 1 lượt tối ưu.

**Mục tiêu 30 ngày:** click 42 → 90+/28 ngày · indexed 23 → 35+ · 8 bài mới · 8 lượt tối ưu quick-win. (Hướng tới KPI 90 ngày: click 150-200, indexed 50+.)

## Phase 1 · Tuần 1 (13-19/6) — Hứng demand có sẵn
- ✍️ **Giá RTX 5090/5090 Ti tại VN** (ưu tiên #1, query đã ở vị trí 17, chưa có bài hứng). Research xong: FE từ ~63tr, AIB 73-100tr+ do thiếu GDDR7, An Phát từ 83tr (gearvn.com, anphatpc.com.vn).
- 🔧 Tối ưu 3 quick-win cao nhất: RTX 5090 Ti (11.1 impr), AI agents enterprise (9.3), Google I/O day 1 (8.1).
- ⚙️ Nộp news sitemap (`scripts/gsc/gsc.mjs sitemap`) + request index trang chủ, cv, blog trong GSC UI.
- 🎯 Mốc: bài RTX 5090 được lập chỉ mục.

## Phase 2 · Tuần 2 (20-26/6) — Lấp cụm Apple
- ✍️ **Siri AI tiếng Việt: khi nào có, máy nào dùng được** (evergreen, nhắm featured snippet Yes/No). Brief 5.2 đã sẵn.
- ✍️ **Cách cài iOS 27 beta** (how-to, hứng search hướng dẫn).
- 🔧 Tối ưu macOS 27 (7.9 impr), OpenAI Dell (6.4) + nối internal link cụm Apple về /su-kien/wwdc-2026.
- 🎯 Mốc: 2 bài Apple được index, cụm Apple liên kết chặt.

## Phase 3 · Tuần 3 (27/6-3/7) — Mở rộng AI + PC
- ✍️ **RTX Spark laptop: giá, ngày bán** (cụm PC, demand thật).
- ✍️ **AI Overviews là gì** (evergreen giải thích, đón query AI policy).
- 🔧 Tối ưu Osaurus (8.0) + rà internal link toàn cụm AI.
- ⚙️ Chạy `node gsc.mjs report 28`, đo giữa kỳ, lọc bài vị trí 5-15.
- 🎯 Mốc: click tăng ~50% so với đầu kỳ.

## Phase 4 · Tuần 4 (4-13/7) — Chuẩn bị event Unpacked
- ✍️ **Dựng trang /su-kien/samsung-unpacked-2026** (Unpacked 22/7, dựng trước 2 tuần theo event playbook) + bài preview Galaxy S26.
- ⚙️ Rà performance + schema toàn site.
- ⚙️ Review KPI 30 ngày, cập nhật chiến lược quý.
- 🎯 Mốc: trang event sẵn sàng trước Unpacked 2 tuần.

## Quy tắc xuyên suốt
0 em-dash · 5 media rải đều (ưu tiên ảnh, 1-2 video, check HTTP status thumbnail trước khi chèn) · internal link anchor mô tả · bài mới tự lên hero Tiêu điểm qua build · sau đăng nộp news sitemap.
