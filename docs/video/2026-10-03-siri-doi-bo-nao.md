# Video: Siri sắp cho đổi "bộ não" sang Claude hoặc ChatGPT (đăng T7 03/10/2026)

Trạng thái: **ĐÃ DỰNG XONG 27/09/2026 trên PC** (anh Long bảo "cứ làm video tiếp"), CHƯA đăng. Bản cao nhất: `D:\Techvision video\2026-10-03-siri-doi-bo-nao.mp4` (34s, CRF 16); bản nhẹ `techvision-video-kit/out/siri27/2026-10-03-siri-doi-bo-nao-nhe.mp4` (8,3 MB).

- Bài dẫn về: `/articles/siri-doi-bo-nao-sang-claude-chatgpt-ios-27-lo-ma-nguon.html` (hẹn giờ, `noindex`).
- Kiểu dựng: hoạt hình vẽ tay 100% bằng code (`scripts/build_siri27.py`, thư viện `scripts/hd_lib.py`). Không media ngoài.
- **Chip đỏ "Lộ từ mã nguồn · Apple chưa xác nhận"** trên 6 cảnh nói về tính năng (luật số chưa xác nhận phải gắn chip).

## Số liệu (đọc tận gốc MacRumors 14/9/2026, kiểm lại 27/9)

| Dữ kiện | Nguồn |
|---|---|
| 14/9/2026 phát hiện trong mã nguồn iOS 27 + macOS 27 | MacRumors, AppleInsider |
| Hai cơ chế: Model Delegation (Claude hiện như extension của Siri, cạnh ChatGPT) và Model Manager Services (giao thức inference provider thay mô hình Siri phía máy chủ) | MacRumors |
| Có nhắc GPT-5.6 | MacRumors |
| Chưa bật, Apple chưa mở quyền model delegation cho bên thứ ba | MacRumors |

**Cố ý KHÔNG đưa lên video:** chữ "Terra" sau GPT-5.6 và tin Bloomberg "3 nhà cung cấp" (bài web có, nhưng bản tóm MacRumors không có, chưa kiểm được tận gốc). Cảnh 8 (thanh "Siri cũ" vs "mô hình lớn") ghi rõ "minh họa, không phải số đo".

## Kịch bản (10 câu, 34s ở 1,2x) - phụ đề | lời đọc gửi OmniVoice
| # | Phụ đề | Lời đọc |
|---|---|---|
| 1 | iOS 27 giấu 2 cách thay não cho Siri. | Ai Ô Ét hai mươi bảy giấu hai cách thay não cho Siri. |
| 2 | Ngày 14/9, các trang chuyên về Apple tìm thấy chúng trong mã nguồn iOS 27. | Ngày mười bốn tháng chín, các trang chuyên về Apple tìm thấy chúng trong mã nguồn Ai Ô Ét hai mươi bảy. |
| 3 | Cách thứ nhất: Claude hiện ngay trong menu của Siri, cạnh ChatGPT. | Cách thứ nhất: Claude hiện ngay trong menu của Siri, cạnh ChatGPT. |
| 4 | Cách thứ hai sâu hơn: thay hẳn mô hình Siri chạy trên máy chủ của Apple. | Cách thứ hai sâu hơn: thay hẳn mô hình Siri chạy trên máy chủ của Apple. |
| 5 | Trong mã có nhắc tới GPT-5.6 của OpenAI. | Trong mã có nhắc tới Gi Pi Ti năm chấm sáu của Âu pừn Ai. |
| 6 | Nói gọn là không phải nhờ hỏi hộ, mà là thay hẳn cả động cơ. | Nói gọn là không phải nhờ hỏi hộ, mà là thay hẳn cả động cơ. |
| 7 | Nhưng hiện chưa ai dùng được. Apple chưa bật, chưa mở cho nhà phát triển ngoài. | Nhưng hiện chưa ai dùng được. Apple chưa bật, chưa mở cho nhà phát triển ngoài. |
| 8 | Nếu được mở, người Việt có thể lợi nhất, vì mô hình lớn hiểu tiếng Việt tốt hơn hẳn. | Nếu được mở, người Việt có thể lợi nhất, vì mô hình lớn hiểu tiếng Việt tốt hơn hẳn. |
| 9 | Còn một câu hỏi chưa có lời đáp: dữ liệu của bạn sẽ đi đâu. | Còn một câu hỏi chưa có lời đáp: dữ liệu của bạn sẽ đi đâu. |
| 10 | Theo dõi TechVision để biết ngay khi Apple bật tính năng này. | Theo dõi TechVision để biết ngay khi Apple bật tính năng này. |

## Gói đăng (CHƯA đăng)

**TikTok**
```
iOS 27 giấu sẵn 2 cách thay "não" cho Siri bằng Claude hoặc ChatGPT 🤯 Lộ từ mã nguồn, Apple chưa bật và chưa xác nhận. Anh em muốn Siri chạy bằng AI nào? #siri #ios27 #apple #claude #chatgpt #techvision
```
Link bio: https://techvision.click/articles/siri-doi-bo-nao-sang-claude-chatgpt-ios-27-lo-ma-nguon.html?utm_source=tiktok&utm_medium=social&utm_campaign=video-siri-doi-bo-nao

**YouTube Shorts** - Tiêu đề: `Siri sắp cho đổi "bộ não" sang Claude hoặc ChatGPT? Lộ từ mã iOS 27 #Shorts`
```
Ngày 14/9/2026, các trang chuyên về Apple tìm thấy trong mã nguồn iOS 27 hai cơ chế cho mô hình AI bên thứ ba: Model Delegation cho Claude hiện ngay trong menu của Siri cạnh ChatGPT, và một giao thức cho phép thay hẳn mô hình Siri chạy trên máy chủ Apple (mã có nhắc GPT-5.6). Tính năng CHƯA bật, Apple chưa mở cho nhà phát triển ngoài và chưa xác nhận sẽ ra mắt.

Phân tích đầy đủ và điều người dùng Việt cần để ý:
https://techvision.click/articles/siri-doi-bo-nao-sang-claude-chatgpt-ios-27-lo-ma-nguon.html?utm_source=youtube&utm_medium=social&utm_campaign=video-siri-doi-bo-nao

Nguồn: MacRumors, AppleInsider (14/9/2026). #Shorts #Siri #iOS27 #Apple
```

**Facebook Reels**
```
Siri có thể sắp được "thay não" bằng Claude hoặc ChatGPT: hạ tầng đã nằm sẵn trong mã iOS 27, nhưng Apple chưa bật và chưa xác nhận. Chi tiết: https://techvision.click/articles/siri-doi-bo-nao-sang-claude-chatgpt-ios-27-lo-ma-nguon.html?utm_source=facebook&utm_medium=social&utm_campaign=video-siri-doi-bo-nao
```
