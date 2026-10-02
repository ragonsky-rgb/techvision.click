# Hồ sơ xin duyệt YouTube API (audit) cho công cụ đăng video TechVision

Soạn 02/10/2026. Mục tiêu: gỡ khoá "video tải qua API bị riêng tư" để `techvision-video-kit/scripts/yt_upload.py`
hẹn giờ video lên kênh @LongTechVision giống `fb_reel.py` bên Facebook.

**Trạng thái:**
- [x] Trang chính sách có mục 6 "Dịch vụ API YouTube", có cả đoạn tiếng Anh: https://techvision.click/chinh-sach.html#youtube-api
- [x] Script `yt_upload.py`: mặc định chạy thử, chỉ xin phạm vi `youtube.upload`
- [x] Bước 1 (02/10): tài khoản ragonsky@gmail.com đầy hạn mức dự án nên DÙNG LẠI "My First Project" đổi tên **LongTechVision Uploader** (ID `graphical-reach-482404-r4`, số **139766350582**). Bật YouTube Data API v3; màn hình đồng ý External + **In production**; quyền chỉ `youtube.upload`; khoá Desktop "yt_upload (Mac)" có tích "used by an AI-powered agent" → `~/.config/techvision/yt-client.json`. Kênh @LongTechVision thuộc ragonsky@gmail.com. Google báo "app requires verification" (xác minh OAuth, khác audit YouTube): chưa xác minh vẫn dùng được cho chủ app, có màn cảnh báo.
- [x] Bước 2 (02/10 16:33): `yt_upload.py auth` xong, token chỉ có scope youtube.upload, có refresh_token. `yt.env` YT_CHANNEL_ID=UClf1f1pBpeQabxfBEEF7fFQ (@LongTechVision)
- [x] Bước 3 (02/10 17:00): demo 62s `00 - VIDEO XONG/2026-10-02 LongTechVision Uploader - YouTube API demo.mp4` (cắt từ bản quay 16.55.06: bỏ chỗ trống, làm mờ danh sách email ở màn chọn tài khoản, đứng hình màn đồng ý 4,5s, chèn thẻ output Terminal thật bước 3-4 vì Terminal không nằm trong khung quay). Video thử riêng tư trên kênh: JscrhqsfJ1A, ENBNxk5Bqtg (xóa sau khi Google duyệt). CÒN: anh tải demo lên YouTube chế độ Không công khai (API đang khóa riêng tư nên không dùng yt_upload.py được) lấy link dán vào form
- [ ] Bước 4: nộp form https://support.google.com/youtube/contact/yt_api_form
- [ ] Bước 5: chờ Google trả lời qua email (thường vài tuần), trả lời câu hỏi bổ sung nếu có

## Bước 1: thiết lập Google Cloud
1. (Đã làm, xem trạng thái) Dự án riêng **LongTechVision Uploader**, tách khỏi dự án SEO `gen-lang-client-0873273298`.
2. Vào APIs & Services → Library → bật **YouTube Data API v3**.
3. Thiết lập OAuth consent screen:
   - User type: External.
   - App name: LongTechVision Uploader.
   - Support email + developer contact: ragonsky@gmail.com.
   - App homepage: https://techvision.click/
   - Privacy policy: https://techvision.click/chinh-sach.html#youtube-api
   - Terms of service: https://techvision.click/chinh-sach.html#youtube-api
   - Authorized domain: techvision.click.
   - Scope: `.../auth/youtube.upload`.
   - Bấm **Publish app** (In production). Nếu để Testing thì refresh token hết hạn sau 7 ngày. App chưa verify sẽ hiện màn hình cảnh báo khi đăng nhập; chủ app bấm "Tiếp tục" là được.
4. Credentials → Create OAuth client ID → loại **Desktop app** → tải JSON về `~/.config/techvision/yt-client.json` (chmod 600, KHÔNG đưa vào repo).
5. Ghi `YT_CHANNEL_ID=<id kênh @LongTechVision>` vào `~/.config/techvision/yt.env`.

## Bước 3: kịch bản quay màn hình demo (1-2 phút, đăng YouTube ở chế độ Không công khai rồi dán link vào form)
1. Mở trang https://techvision.click/chinh-sach.html#youtube-api, cuộn qua mục 6.
2. Chạy `yt_upload.py auth`, trình duyệt mở màn hình đồng ý của Google, thấy rõ tên app và đúng một quyền "Upload YouTube videos", bấm cho phép.
3. Chạy `yt_upload.py post test.mp4 --title "API test" --text "test"` (chạy thử), rồi thêm `--yes` và để riêng tư.
4. Mở YouTube Studio, thấy video thử đã vào kênh.
5. Chạy `yt_upload.py revoke`, mở https://security.google.com/settings/security/permissions cho thấy app đã mất quyền.

## Bước 4: câu trả lời soạn sẵn cho form (tiếng Anh)

**Organization / developer name:** LongTechVision (Nguyen Tan Thien Long, sole proprietor), Ho Chi Minh City, Vietnam

**Website:** https://techvision.click/

**Contact email:** ragonsky@gmail.com (channel owner); public contact on policy page: longnguyenreview@gmail.com

**API client name:** LongTechVision Uploader

**Google Cloud project number:** 139766350582 (project ID graphical-reach-482404-r4)

**Which API Services does your client use?** YouTube Data API v3: `videos.insert`, `thumbnails.set`. Scope requested: `https://www.googleapis.com/auth/youtube.upload` only.

**Describe your API client and how it uses YouTube API Services:**
LongTechVision Uploader is an internal command-line tool used by a single person, the owner of the LongTechVision YouTube channel, to upload videos he produces himself (Vietnamese consumer technology explainers and price guides) to his own channel. It also sets each video's custom thumbnail and a scheduled publish time (`status.privacyStatus=private` + `status.publishAt`), so videos go live at the same time as the matching article on techvision.click and the same video on our Facebook Page. The tool has no public users, no web interface and no end-user sign-up. It authenticates with OAuth 2.0 (installed-app flow) as the channel owner only. Disclosure: the owner runs this tool through an AI coding assistant on his own computer, which prepares the title, description and schedule and executes the upload command only after the owner explicitly approves each video (the OAuth client is declared as "used by an AI-powered agent").

**Number of users:** 1 (the channel owner). The tool is not distributed.

**Does your client display, store or share YouTube data?** No. It does not read or display any YouTube data. After each upload it keeps only the returned video ID and the scheduled time in a local text log on the owner's computer, to avoid uploading the same file twice. The OAuth token is stored only on the owner's local machine (file permission 600) and is never sent to any server other than Google's.

**How do users revoke access / delete data?** The owner can run `yt_upload.py revoke` (calls Google's token revocation endpoint and deletes the local token) or revoke at https://security.google.com/settings/security/permissions. Deletion requests: longnguyenreview@gmail.com, handled within 7 days.

**Privacy policy URL:** https://techvision.click/chinh-sach.html#youtube-api

**Terms of service URL:** https://techvision.click/chinh-sach.html#youtube-api (links to the YouTube Terms of Service)

**Expected daily quota usage:** About 1-3 uploads per day: 1,600 units per insert + 50 per thumbnail, so under 5,000 units/day. The default 10,000 is enough; we are not asking for more quota, only for the audit to lift the private-only restriction on uploads.

**Demo screencast:** (link video Không công khai, quay ở bước 3)
