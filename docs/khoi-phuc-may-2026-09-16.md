# Khôi phục máy sau khi reset (sao lưu 16/09/2026)

Thư mục này nằm trên ổ ngoài "Edit video 1", không bị xóa khi reset Mac.

## Câu mở đầu cho cuộc hội thoại mới

Cài lại Claude Code, mở đúng thư mục `/Volumes/Edit video  1/AI xây dựng công ty riêng 2`, rồi gõ:

```
Anh vừa reset trắng máy. Đọc /Volumes/Edit video  1/backup-truoc-reset-2026-09-16/KHOI-PHUC.md và làm theo từ đầu: khôi phục memory trước, rồi khóa, rồi clone repo, cài công cụ, kiểm từng bước chạy được. Xong báo anh các việc còn treo.
```

---

## Cái gì đã ở đâu

| Thứ | Trên GitHub? | Bản sao lưu |
|---|---|---|
| techvision-click (web) | ✅ `ragonsky-rgb/techvision.click`, nhánh `main` | - |
| techvision-video-kit (script dựng) | ✅ `ragonsky-rgb/techvision-video-kit`, nhánh `master` | - |
| chamai-video-kit (script dựng) | ✅ `ragonsky-rgb/chamai-video-kit`, nhánh `main` | - |
| ai-agent-business-kit (web chamai) | ✅ nằm sẵn trên ổ ngoài này, không bị xóa | - |
| **Memory của Claude** (114 file luật + dữ kiện) | ❌ | `memory-claude/` |
| **Khóa SSH, service account GSC/GA4, key Gemini** | ❌ (cố ý, không bao giờ đưa lên GitHub) | `khoa-bi-mat/` |
| **Video đã dựng, chưa đăng** + clip Flow đã trả tín dụng | ❌ (`out/` bị `.gitignore`) | `video-kit-out/` |
| **Mẫu giọng gốc anh Long** `long-ref-20s.wav` | ❌ (`ref/` bị `.gitignore`) | `chamai-video-kit-khong-git/ref/` |
| Model OmniVoice + Whisper (6,1 GB) | ❌ | `huggingface-cache/` |

---

## Bước 1: Memory - LÀM TRƯỚC TIÊN

Memory gắn với đường dẫn thư mục dự án. Chỉ cần mở lại **đúng** thư mục trên ổ ngoài là khóa khớp.

```bash
mkdir -p ~/.claude/projects/-Volumes-Edit-video--1-AI-x-y-d-ng-c-ng-ty-ri-ng-2/memory
cp -Rp "/Volumes/Edit video  1/backup-truoc-reset-2026-09-16/memory-claude/." ~/.claude/projects/-Volumes-Edit-video--1-AI-x-y-d-ng-c-ng-ty-ri-ng-2/memory/
ls ~/.claude/projects/-Volumes-Edit-video--1-AI-x-y-d-ng-c-ng-ty-ri-ng-2/memory | wc -l   # phải ra 114
```

## Bước 2: Khóa

```bash
B="/Volumes/Edit video  1/backup-truoc-reset-2026-09-16/khoa-bi-mat"
mkdir -p ~/.ssh ~/.config && chmod 700 ~/.ssh
cp -p "$B"/ssh/* ~/.ssh/ && chmod 600 ~/.ssh/github ~/.ssh/github_claude
cp -Rp "$B/config/claude-seo" ~/.config/ && cp -p "$B/config/cham-gemini-key" ~/.config/
cp -p "$B/.gitconfig" ~/
ssh -T git@github.com    # phải chào "Hi ragonsky-rgb"
```

`khoa-bi-mat/claude-settings/` là `settings.json` + `mcp.json` cũ của Claude Code - xem lại rồi mới chép
đè, vì bản cài mới có thể đổi định dạng.

**Đăng nhập lại bằng tay, KHÔNG chép token cũ:** Claude Code, Codex (app ChatGPT), `gh auth login`,
`vercel login`, tiện ích Claude in Chrome. Claude không nhập mật khẩu hộ.

## Bước 3: Công cụ nền

```bash
# Homebrew trước, rồi:
brew install git gh node pnpm ffmpeg yt-dlp python@3.11 python@3.14 pandoc poppler
```

**ffmpeg bản brew không có `drawtext`/`subtitles`** - đúng như máy cũ, phụ đề dựng bằng PIL, không sao.
Cần **yt-dlp bản 2026.08.19 trở lên** (bản 2026.03 bị YouTube trả 403).

## Bước 4: Clone repo

```bash
cd ~
git clone https://github.com/ragonsky-rgb/techvision.click.git techvision-click
git clone https://github.com/ragonsky-rgb/techvision-video-kit.git
git clone https://github.com/ragonsky-rgb/chamai-video-kit.git
cd ~/techvision-click && npm install
cd ~/techvision-video-kit && npm install
cp -p "/Volumes/Edit video  1/backup-truoc-reset-2026-09-16/khoa-bi-mat/techvision-gsc/"*.json ~/techvision-click/scripts/gsc/
```

## Bước 5: Trả dữ liệu không có trên GitHub

```bash
B="/Volumes/Edit video  1/backup-truoc-reset-2026-09-16"
rsync -a "$B/video-kit-out/" ~/techvision-video-kit/out/
rsync -a "$B/chamai-video-kit-khong-git/ref" "$B/chamai-video-kit-khong-git/out" ~/chamai-video-kit/
mkdir -p ~/.cache && rsync -a "$B/huggingface-cache/" ~/.cache/huggingface/
```

## Bước 6: Giọng đọc và Whisper

Venv Python **không chép qua được** (dính đường dẫn Python cũ), phải tạo lại. Model thì đã có ở bước 5
nên không phải tải lại 6 GB.

```bash
# OmniVoice (máy cũ: Python 3.11, gói omnivoice 0.2.1)
python3.11 -m venv ~/omnivoice-env
~/omnivoice-env/bin/pip install omnivoice==0.2.1

# venv của chamai-video-kit (Python 3.14)
cd ~/chamai-video-kit && python3.14 -m venv .venv && .venv/bin/pip install gradio_client pillow

# Whisper (mlx)
python3.14 -m venv ~/.venvs/whisper && ~/.venvs/whisper/bin/pip install mlx-whisper
```

Kiểm chạy được:

```bash
~/omnivoice-env/bin/omnivoice-demo --no-asr --ip 127.0.0.1 --port 7860    # ~20 giây mới lên
cd ~/chamai-video-kit && .venv/bin/python scripts/voice.py "Thử giọng một hai ba." -o /tmp/thu.wav
```

**Mẫu giọng anh Long nằm ở `~/chamai-video-kit/ref/long-ref-20s.wav`** - mất file này là mất giọng nhân bản.

**Máy này yếu: đọc giọng từng câu một, `nice -n 15`, nghỉ 15-20 giây giữa các câu, không chạy song song
Remotion.** Hai lần đơ máy ngày 16/09 đều do chạy dồn.

## Bước 7: Chrome

- Cài lại tiện ích **Claude in Chrome**, đăng nhập đúng tài khoản.
- **Tắt "Hỏi nơi lưu tệp trước khi tải xuống"** trong Cài đặt > Tải xuống. Không tắt thì Claude không tải
  được file từ Flow (hộp lưu của hệ thống chặn lại, Claude không bấm được).
- Plugin MCP chrome-devtools (tùy chọn, hợp để đo Lighthouse):
  ```bash
  claude plugin marketplace add ChromeDevTools/chrome-devtools-mcp
  claude plugin install chrome-devtools-mcp@chrome-devtools-plugins
  ```
  Chạy trong Terminal, không chạy qua Claude (treo chờ bàn phím).
- **Từ chối** hộp "Chrome Safe Storage" nếu có app nào đòi - nó mở khóa toàn bộ cookie của Chrome.

---

## Việc còn treo lúc sao lưu (16/09/2026)

| Việc | Trạng thái |
|---|---|
| Video **Lịch sử CEO Apple** bản cuối, 37,56 giây | dựng xong, **chưa đăng**, chờ anh duyệt. Gói đăng: techvision-click `docs/video/2026-09-16-lich-su-ceo-apple.md` |
| Video **iPhone 18 Pro Max giá 3 nước** bản 3, 51,72 giây | dựng xong, **chưa đăng**. Bài web đi kèm **hẹn lịch 28/9** (đang noindex) nên nên đăng video sau 28/9 |
| Video **KOC CellphoneS** | chờ anh Long tự quay. Kịch bản: `docs/video/koc/2026-09-15-cellphones-len-doi-iphone-13-mini.md` |
| Tên riêng "Markkula", "Ternus" trong video CEO | Whisper nghe lệch, chờ anh nghe lại |
| Bài OPPO Find X10 | cập nhật giá chính thức quanh 22/9, bài lên 24/9 |
| Hai video trên cùng kênh TikTok cá nhân | giãn cách ≥5 ngày (luật chiến dịch KOC) |

**Repo chamai (ổ ngoài) có thay đổi chưa commit** lúc sao lưu: `blog/index.html`, `blog/tin-tuc.html`,
`data/articles.json`, bài tin Salesforce VN/EN, `AGENTS.md`, `video-assets/`... Đó là việc của phiên
Claude khác làm chamai, không phải phiên techvision. Nằm trên ổ ngoài nên không mất khi reset, nhưng nên
commit trước khi làm tiếp.
