# Video 30/09/2026: ChatGPT có trợ lý chạy 24/7, OpenAI ra mắt dot

> **Facebook Reels ĐÃ ĐĂNG 30/09/2026 ~14:35** lên Trang TechVision, bản `2026-09-30-openai-dots-master.mp4` (50,2 giây, 32,6 MB, -14,0 LUFS / đỉnh -2,4), video_id 1083081761373084, https://www.facebook.com/reel/1083081761373084 . Kiểm bản quyền Facebook: qua. Whisper soát 13/14 câu OK, câu 2 chỉ lệch vì Whisper ghi "Open Eye". TikTok + YouTube Shorts: anh Long tự đăng (file `-nhe.mp4` 9,1 MB nếu cần dưới 10 MB).

Trạng thái: **đăng gấp 30/09/2026 theo lệnh anh Long** ("bài lên gấp nên là đưa lên facebook luôn, video dạng dọc"). Anh gửi phim gốc `Introducing dots, always-on agents built to handle everything. [uXspbC2srEQ].mp4`.

- Dựng bằng `techvision-video-kit/scripts/build_dots.py voice|still|render` (khuôn `hd_lib`, giống Buds3s): clip phim ra mắt chính thức của OpenAI + 3 ảnh chụp màn hình trang OpenAI có khoanh đỏ (chụp bằng `scripts/shot_text.mjs`). Không hình AI, không nhắc sản phẩm hãng khác.
- Mốc cắt cảnh của phim gốc dò bằng `ffmpeg select='gt(scene,0.3)'`, mỗi shot trong video nằm gọn trong một cảnh quay của phim gốc (bản đầu bị nhảy cảnh giữa đoạn).
- Giọng OmniVoice trên Mac qua `gpu_guard.py --max 85`, `--ref-text`, tua 1,2x, soát bằng `voice_check.py`. Âm thanh: nhạc Future_House__BPM120 (Soundraw) + tiếng động theo cảnh, chuẩn -14 LUFS bằng `master_audio.py` (mục 6b AGENTS.md).

## Số liệu (đọc tận gốc 30/09/2026)

| Dữ kiện | Nguồn |
|---|---|
| Ra mắt 29/9/2026; chạy GPT-6 Astra; máy tính đám mây riêng; làm việc 24/7; hơn 4.000 ứng dụng qua plugin | openai.com/index/introducing-dots (bản tiếng Việt "Giới thiệu dot") |
| Liên lạc qua ChatGPT, tin nhắn văn bản, Slack, Teams; gọi thoại trong ChatGPT | như trên |
| Có quy tắc tự làm / xin phê duyệt; việc nhạy cảm như đổi mật khẩu luôn do người dùng tự làm; nghiên cứu chủ động chỉ dùng quyền đọc | như trên |
| Gói Pro ở mọi thị trường TRỪ Khu vực kinh tế châu Âu, Thụy Sĩ, Anh; Business Premium mọi vùng ChatGPT hỗ trợ; Enterprise/Edu/Healthcare bản beta do quản trị viên bật; triển khai dần, có thể mất vài ngày | help.openai.com "Getting started with your dot" |
| Dot đầu tiên nằm trong gói Pro/Business Premium, không tốn thêm phí; sau này thêm dot và tăng tốc độ/khối lượng (chưa công bố giá) | help.openai.com + openai.com |
| Gói Pro tại Việt Nam từ 2.849.000 ₫/tháng; trang giá ghi "Dot, tác nhân luôn sẵn sàng của bạn" trong gói Pro | openai.com/chatgpt/pricing (bản VN) |
| Tương lai: OpenAI "hình dung" nhóm dot phối hợp; dot chuyên trách cho doanh nghiệp ở bản xem trước giới hạn (thử nội bộ: thu mua, hóa đơn, tiếp thị email, hỗ trợ khách hàng, hợp đồng); tích hợp Microsoft Agent 365 | openai.com |

Đối chiếu thêm: TechCrunch, SiliconANGLE, MacRumors cùng ngày 29/09/2026. Chi tiết "tháng đầu không tính hạn mức" các báo ghi lệch nhau nên KHÔNG đưa vào video.

## Kịch bản (14 câu, `caps_lines.txt`; bản đọc `script_voice.txt` viết "Âu pừn Ai", "Gi Pi Ti sáu", "đót")

1. ChatGPT giờ có trợ lý làm việc cả ngày đêm.
2. Ngày 29/9, OpenAI ra mắt dot, trợ lý luôn bật ngay trong ChatGPT.
3. Mỗi dot có một máy tính đám mây riêng, chạy mô hình GPT-6 Astra.
4. Nó làm việc suốt ngày đêm, và kết nối được hơn 4.000 ứng dụng.
5. Bạn nhắn cho nó qua ChatGPT, tin nhắn hoặc ứng dụng làm việc nhóm, thậm chí gọi thoại.
6. Bạn giao mục tiêu, dot tự làm, và chỉ hỏi khi cần bạn duyệt.
7. Việc nhạy cảm như đổi mật khẩu thì luôn do chính bạn làm.
8. Hiện dot dành cho gói Pro và Business Premium, dot đầu tiên không tốn thêm phí.
9. Gói Pro ở Việt Nam có giá từ 2.849.000đ một tháng.
10. Người dùng Pro ở Việt Nam không nằm trong nhóm bị loại trừ, chỉ châu Âu, Thụy Sĩ và Anh phải chờ.
11. Sắp tới, OpenAI hình dung mỗi người có cả một nhóm dot phối hợp làm việc.
12. Doanh nghiệp thì đang được thử dot chuyên trách, lo thu mua, hóa đơn và chăm sóc khách hàng.
13. Trợ lý máy đang chuyển từ trả lời câu hỏi sang tự làm việc thay bạn.
14. Theo dõi TechVision để cập nhật tin công nghệ mỗi ngày.

## Media

| File (`out/dots/media/`) | Nguồn | Ghi trên hình |
|---|---|---|
| `00_openai-dots-phim.mp4` (liên kết tới `src/openai-dots.mp4`) | Phim ra mắt chính thức OpenAI, YouTube uXspbC2srEQ | Video: OpenAI |
| `09_openai-gioi-thieu-dot-vn-cat.png` | Chụp openai.com/index/introducing-dots (bản VN), khoanh câu mở đầu | Ảnh chụp màn hình: openai.com |
| `10_openai-bang-gia-pro-vn-cat.png` | Chụp openai.com/chatgpt/pricing (bản VN), khoanh 2.849.000 ₫ | Ảnh chụp màn hình: openai.com |
| `11_openai-help-thi-truong-cat.png` | Chụp help.openai.com, khoanh đoạn "Which plans include dots?" | Ảnh chụp màn hình: help.openai.com |

## Gói đăng

**Facebook Reels**
```
OpenAI vừa ra mắt dot: trợ lý AI chạy 24/7 ngay trong ChatGPT, có máy tính đám mây riêng, kết nối hơn 4.000 ứng dụng và chỉ hỏi khi cần bạn duyệt. Hiện có cho gói Pro (từ 2.849.000đ/tháng tại Việt Nam) và Business Premium, dot đầu tiên không tốn thêm phí. Người dùng Pro ở Việt Nam không bị loại trừ, OpenAI đang triển khai dần. Bước tiếp theo OpenAI hình dung: cả một nhóm dot làm việc thay bạn.
Nguồn: OpenAI, 29/9/2026. Video: OpenAI.
#ChatGPT #OpenAI #AI #TechVision
```

**TikTok** (anh Long tự đăng): `ChatGPT giờ có trợ lý chạy 24/7: OpenAI ra mắt dot, giá gói Pro ở Việt Nam bao nhiêu? #ChatGPT #OpenAI #AI #congnghe`

**YouTube Shorts** (anh Long tự đăng): tiêu đề `OpenAI ra mắt dot: trợ lý ChatGPT làm việc 24/7 #shorts`, mô tả dùng lại đoạn Facebook.
