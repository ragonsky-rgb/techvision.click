# Bàn giao làm video sang PC Windows (lập 27/09/2026)

Máy Mac yếu (RAM 16 GB, swap đầy 10 GB khi chạy OmniVoice), anh Long chuyển khâu làm video sang PC Windows.
Phiên AI mới trên PC: **đọc file này trước**, rồi `docs/video/AGENTS.md`, rồi hồ sơ từng video trong `docs/video/`.

## Việc đang dở (tới 27/09 tối)

| Video | Ngày đăng | Trạng thái | Việc còn lại |
|---|---|---|---|
| iPhone 18 Pro 1TB chậm hơn 512GB (QLC) | T5 01/10 19:00 | Kịch bản + bảng kê **đã duyệt**. Giọng đọc xong câu 1-8/11 (`out/i18qlc/raw_parts/p01-p08.wav`), máy Mac treo nên dừng | Đọc nốt câu 9, 10, 11 (`out/i18qlc/script_voice.txt`) → soát Whisper các chữ mới (Kiu Eo Xi, Ti Eo Xi, tê ra bai, mê ga bai) → viết `scripts/build_i18qlc.py` dựa trên `build_x10gia.py` → dựng → bản <10 MB → hẹn FB/TikTok/YouTube. Hồ sơ: `2026-10-01-iphone-18-pro-1tb-qlc.md` |
| iPhone hao pin, nóng máy sau iOS 27 | T6 02/10 | Chưa có kịch bản | Viết kịch bản + bảng kê, **chờ anh Long duyệt** |
| Siri đổi "bộ não" sang Claude/ChatGPT | T7 03/10 | Chưa có kịch bản | như trên |
| Googlebook giao hàng từ 899 USD | CN 04/10 | Chưa có kịch bản | như trên, quy đổi VND theo tỷ giá VCB ngày dựng |
| iOS 27.0.1 sửa lỗi Face ID (phản ứng nhanh) | khi Apple phát hành | Chờ Apple | - |

Lịch tuần và luật chọn chủ đề: `docs/ke-hoach-video-2026-09-28-den-10-04.md`.

Lưu ý: 4 bài web mà các video trên dẫn về đang ở trạng thái hẹn giờ (`scheduled: true`, `noindex: true`, ngày đăng 02/10 tới 04/11) nhưng trang đã mở được (mã 200), nên link trong video vẫn chạy.

## Cài đặt trên PC (một lần)

1. **Claude Code**: cài app Claude desktop cho Windows, đăng nhập cùng tài khoản. Lịch sử chat trên Mac KHÔNG sang được; ngữ cảnh nằm ở các file dưới đây.
2. **Git + GitHub CLI**, rồi clone 3 repo:
   - `ragonsky-rgb/techvision.click` (web + hồ sơ video `docs/video/`)
   - `ragonsky-rgb/techvision-video-kit` (riêng tư, script dựng)
   - `ragonsky-rgb/chamai-video-kit` (riêng tư, có `scripts/voice.py` gọi OmniVoice)
3. **Python 3.11+**, rồi tạo lại môi trường (venv của Mac KHÔNG chạy được trên Windows):
   - OmniVoice: `pip install omnivoice==0.2.1` (bản đang chạy trên Mac, mã nguồn github.com/k2-fsa/OmniVoice; chạy server `omnivoice-demo --no-asr --ip 127.0.0.1 --port 7860`)
   - Whisper: `pip install transformers torch` (PC có card NVIDIA thì cài torch bản CUDA, nhanh hơn Mac rất nhiều)
   - Pillow, numpy cho script dựng; **ffmpeg** bản đầy đủ (bản Windows có drawtext/subtitles, khác bản trên Mac)
   - Node.js LTS nếu dựng bằng Remotion (`npm install` trong techvision-video-kit)
4. **Model**: lần đầu chạy tự tải từ Hugging Face (OmniVoice 3 GB, Whisper 1,5 GB).
5. **Giọng mẫu**: file `0813-01.AAC` (giọng anh Long) nằm ở ổ Edit video, chép sang PC rồi decode WAV.

## Ổ "Edit video" KHÔNG cắm thẳng vào PC được

Ổ đang định dạng **APFS** (của Mac), Windows không đọc được. Muốn chuyển file giữa 2 máy thì dùng một trong các cách:
- Chép qua mạng LAN (chia sẻ thư mục trên Mac), hoặc Google Drive
- USB khác định dạng **exFAT** (cả 2 máy đọc được)
- Không format lại ổ Edit video khi chưa sao lưu: trên đó có công cụ, video đã làm và thư mục bằng chứng.

File cần mang sang PC để làm tiếp: `out/src18/` (clip Apple đã duyệt), `out/i18qlc/` (giọng đã đọc), giọng mẫu `0813-01.AAC`.

## Những thứ chỉ có trên Mac (chưa chuyển)

- ~~Bộ nhớ dài hạn của Claude~~ ĐÃ CHUYỂN: từ 27/09 là repo riêng tư `ragonsky-rgb/claude-memory`. Trên PC, mở Claude trong thư mục dự án rồi bảo: "Clone ragonsky-rgb/claude-memory vào đúng thư mục memory của phiên này". Hai máy cùng pull/push.
- Khoá Facebook đăng Reel (`~/.config/techvision/fb.env`): KHÔNG đưa lên GitHub. Chép tay qua USB, hoặc cứ đăng Facebook từ Mac.
- Chrome đã đăng nhập TikTok Studio / YouTube Studio: trên PC phải đăng nhập lại.
