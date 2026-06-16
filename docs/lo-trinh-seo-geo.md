# Lộ trình SEO + GEO · techvision.click

> Mục tiêu: lên top tìm kiếm Google + được AI (ChatGPT, Perplexity, Google AI Overviews, Bing Copilot, Gemini) trích dẫn nhiều hơn. Chia 4 phase, làm dần.

## Hiện trạng (cập nhật 16/6/2026)
- Kỹ thuật SEO: mạnh (canonical/meta/JSON-LD/alt 100%, robots, 2 sitemap, http->https, www->non-www, meta ≤160 ký tự).
- Index: nút thắt chính (domain mới, ít authority). 28/75 bài đã index, đang tăng.
- GEO: robots cho phép mọi AI crawler, llms.txt đầy đủ. Đã thêm IndexNow.

## Phase 1 · Nền tảng index + GEO setup (Tuần 1)
- [x] **IndexNow**: tạo key `public/<key>.txt` + `scripts/indexnow.mjs` (ping Bing/Yandex). Đã submit toàn bộ 83 URL (HTTP 200).
- [x] **llms.txt** cập nhật 14 bài mới nhất (giúp AI trích nội dung hiện hành).
- [x] robots đã cho phép AI crawler (wildcard `*`).
- [ ] **Bing Webmaster Tools** (anh làm): đăng ký bing.com/webmasters, thêm site, nộp sitemap. Bing nuôi ChatGPT Search + Copilot.
- [ ] Request Index hằng ngày (10 URL/ngày) tới khi 75 bài lên hết. Có lời nhắc tự động mỗi sáng.

## Phase 2 · Authority + brand mentions (Tuần 2) - đòn bẩy lớn nhất cho web mới
- [ ] Backlink: link từ chamaiagency.website + chia sẻ bài lên FB, Zalo, Threads, LinkedIn.
- [ ] Brand mention trên Tinhte, VOZ, Reddit, Quora (AI hay trích các nền tảng này).
- [ ] Đồng bộ hồ sơ tác giả Nguyễn Tấn Thiên Long trên mọi nền tảng (E-E-A-T).

## Phase 3 · Tối ưu nội dung để được AI trích dẫn (Tuần 3)
- [ ] Mỗi bài: câu trả lời thẳng ngay đầu đoạn + số liệu có nguồn + FAQ (đã có schema).
- [ ] Viết bài trụ (pillar) evergreen cho mỗi cụm để thành nguồn AI tham chiếu.
- [ ] Test query trên ChatGPT/Perplexity/AI Overviews xem site có được nêu chưa.
- [ ] Tỉa title/meta cụm vị trí 4-11 tăng CTR (đã làm phần đầu).

## Phase 4 · Đo lường + nhân rộng (Tuần 4 trở đi)
- [ ] Đo GSC + Bing + số lần AI trích dẫn; lặp lại cụm thắng.
- [ ] Duy trì 3-4 bài/tuần (2 tin nóng + 1 evergreen + 1 tối ưu bài cũ).
- [ ] Mỗi quý cập nhật topical map, mở rộng cụm có demand thật từ GSC.

## Tiện ích đã có
- `node scripts/indexnow.mjs` — ping toàn sitemap lên IndexNow (chạy sau mỗi đợt đăng bài).
- `node scripts/indexnow.mjs <url>` — ping URL cụ thể.
- `scripts/gsc/` — báo cáo GSC, inspect index, nộp sitemap (cần token, xem README).
