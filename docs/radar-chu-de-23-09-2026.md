# Radar chủ đề tuần 39/2026 (lập ngày 23/09/2026)

Quét trend, phân tích đối thủ, chốt 5 chủ đề và viết luôn 5 bài. Phiên cloud, chạy tự động theo lịch.

## 0. Phương pháp và HẠN CHẾ phải biết trước khi tin số

Giống phiên 22/09, proxy egress của phiên cloud chặn gần hết nguồn. Ghi lại để phiên sau đỡ mất công thử lại:

| Nguồn | Trạng thái | Ghi chú |
|---|---|---|
| `WebSearch` (kèm `allowed_domains`) | **Dùng được** | Kênh nghiên cứu duy nhất của phiên này |
| `WebFetch` | **Chặn toàn bộ** | genk.vn, sforum.vn, macrumors.com đều trả `EGRESS_BLOCKED` |
| `curl` trực tiếp | **Chặn toàn bộ** | 14/14 domain thử đều trả `000` (CONNECT 403) |
| Ahrefs MCP | **Không dùng được** | Mọi endpoint trả `Insufficient plan`, kể cả `management-projects` |
| GSC radar (`scripts/gsc/gsc.mjs`) | **Không chạy được** | `token.json` không có trong repo (đã gitignore đúng), cài `googleapis` cũng vô ích |
| Google Trends VN | **Không đọc được** | `trends.google.com` chặn |

**Hệ quả:** phần "chủ đề đang lên" dưới đây dựa trên **tín hiệu SERP + tần suất đưa tin của báo VN**,
KHÔNG phải số volume/KD thật. Ở máy local nên đối chiếu bằng `node scripts/gsc/gsc.mjs radar 28`.

## 1. Phân tích 3 đối thủ, tuần 16-23/09/2026

### GenK (genk.vn)
Đẩy mạnh nhất tuần là **chip**. Hai bài ra đúng ngày 23/9: "Qualcomm chính thức ra mắt Snapdragon 8
Elite Gen 6: lần đầu tiên chip mang tên Elite không còn là mạnh nhất" và "Xiaomi 18 Pro và 18 Pro
Max chính thức: chip Snapdragon 8 Elite Gen 6 2nm đầu tiên". Trước đó là loạt bài phân tích ngành
(Xiaomi ra chip XRING O3 3nm, Qualcomm tăng giá chip).

> Đọc ra được gì: GenK đưa tin chip **rất nhanh và rất sát nguồn**. Đua tốc độ là thua. Góc còn
> trống là **"máy nào, về Việt Nam khi nào, giá bao nhiêu"**, thứ GenK chỉ chạm qua ở tiêu đề.

### Tinh tế (tinhte.vn)
Thread nổi nhất tuần xoay quanh **iPhone Duo**: "Apple chính thức ra mắt iPhone Duo, màn 7,6 inch,
giá từ 65 triệu", "Tui nghĩ iPhone Duo sẽ tái định nghĩa điện thoại gập", "Apple ra mắt iPhone Duo
xong, dân tình lại đổ xô đi mua Galaxy Z Fold 8". Ngoài ra có thread Snapdragon 8 Elite Gen 6.

> Đọc ra được gì: Tinh tế mạnh ở **tranh luận cảm tính**. Điều tuyệt nhiên không thread nào đụng tới
> là chuyện **iPhone Duo bỏ hẳn khe SIM**, tức là phần ảnh hưởng tới sinh hoạt hằng ngày của người
> dùng Việt nhiều nhất. Đây là khoảng trống rõ nhất tuần này.

### VnExpress Số hóa (vnexpress.net)
Thiên hẳn về **chính sách và hạ tầng**: khóa 13 triệu SIM không chính chủ, hợp nhất quy định quản lý
kho số viễn thông (VBHN 18), "vì sao tắt 2G rộng đường cho Internet tốc độ cao", Viettel chuẩn bị
hạ tầng 6G, hơn 40.000 trạm 5G phủ khoảng 92% dân số.

> Đọc ra được gì: đúng như `AGENTS.md §0a-bis` cảnh báo, báo lớn VN đưa tin chính sách nhanh hơn.
> Nhưng họ dừng ở mốc 2G đã xong. **Lộ trình 3G (tháng 9/2028) chưa ai nhắc lại**, trong khi đây là
> thứ người dùng sẽ tìm ngay sau khi 2G tắt.

## 2. Chủ đề đang lên mà techvision CHƯA có bài

Sau khi dedup với 751 bài trong `src/content/articles`:

| Chủ đề | Tín hiệu | Đã có bài chưa |
|---|---|---|
| **iPhone Duo chỉ dùng eSIM** | Mở bán VN 23/10, bỏ khe SIM ở mọi thị trường, không đối thủ nào viết | **CHƯA** (chỉ có bài eSIM chung và bài đặt trước) |
| **Snapdragon 8 Elite Gen 6 đã ra chính thức** | Công bố 22/9, 9 hãng, Xiaomi 18 Pro ra ngay 23/9 | **CHƯA** (bài Summit cũ viết trước sự kiện, toàn rò rỉ) |
| **Worlds 2026 vòng Swiss** | Diễn ra 23-31/10 tại Allen, Texas, có TSW | **CHƯA** (có bài play-in và lịch tổng, thiếu chặng Swiss) |
| **Lộ trình tắt sóng 3G 2028** | 2G vừa tắt 15/9, 3G là mốc kế tiếp, chưa ai nhắc lại | **CHƯA** |
| **Windows 10 ESU gia hạn tới 12/10/2027** | Microsoft sửa trang hỗ trợ 25/6/2026, không thông cáo | **CHƯA** (repo có Windows 11, không có bài nào về Win 10) |

Đã loại vì trùng: khủng hoảng giá RAM/SSD (4 bài), Starlink Việt Nam (1 bài), Wi-Fi 8 (1 bài),
ĐTDV mùa Đông (1 bài), GTA 6 (2 bài), Galaxy S27 Exynos (1 bài), ColorOS 17 (1 bài hẹn 20/10).

## 3. Năm chủ đề chốt và lịch đăng

Trần `§0a` đang kín từ W39 tới W42 (8 bài/tuần). Chỗ trống thật sự sớm nhất là W43.
Sau khi thêm: **W43 = 8/8, W44 = 3/8**, mọi ngày ≤ 2 bài. Không vi phạm trần.

| Ngày | Slug | Loại | Neo Việt Nam |
|---|---|---|---|
| 21/10 09:00 | `iphone-duo-chi-dung-esim-nha-mang-viet-nam-cach-chuyen-2026` | Tin sản phẩm | Giá VN 4 mức, phí đổi eSIM, thủ tục 3 nhà mạng |
| 22/10 09:00 | `worlds-2026-vong-swiss-lich-23-31-10-gio-viet-nam` | Esports | Giờ VN từng chặng, cửa đi tiếp của TSW |
| 23/10 09:00 | `snapdragon-8-elite-gen-6-may-nao-dung-ve-viet-nam-khi-nao` | Tin công nghệ | Mốc giá Xiaomi 17 tại VN, độ trễ hàng chính hãng |
| 26/10 09:00 | `tat-song-3g-viet-nam-2028-ai-bi-anh-huong-can-lam-gi` | Viễn thông VN | Toàn bài là chuyện trong nước |
| 27/10 09:00 | `windows-10-het-ho-tro-esu-den-12-10-2027-may-cu-nen-lam-gi` | Máy tính | Quy đổi chi phí, gắn với đợt tăng giá RAM/SSD |

**Cơ cấu so với `§0c`:** 3 bài tin công nghệ, 1 bài esports, 0 bài sản phẩm mới ra mắt tại VN.
Bỏ chân sản phẩm VN vì tuần này không có mẫu nào ra mắt trong nước còn trống chỗ sau dedup
(Oppo Find X10, vivo X500, VinFast VF Wild đều đã có bài hẹn lịch). Bài iPhone Duo phần nào
gánh vai trò đó vì có đủ giá niêm yết và mốc mở bán tại Việt Nam.

## 4. Bài refresh kèm theo (không tính vào trần)

`snapdragon-summit-2026-hai-chip-8-elite-gen-6-va-gen-6-pro` viết ngày 22/9, **trước** khi
Qualcomm công bố, nên gần như toàn bộ thân bài là rò rỉ và có một chỗ sai hẳn: chip thứ hai
tên **Extreme Gen 6**, không phải **Gen 6 Pro**. Đã refresh (giữ nguyên slug, bump `dateModified`):

- Sửa tên chip, bỏ phần Adreno 850 và LPDDR6 vì không nằm trong công bố chính thức.
- Thay bảng "xác nhận và rò rỉ" bằng bảng thông số đã công bố: 2nm TSMC, Oryon 8 nhân,
  5GHz và 5,11GHz, 16MB FlexCache, NPU Hexagon +35%, Wi-Fi 8, mô hình 30 tỉ tham số chạy cục bộ.
- Thêm danh sách 9 hãng và mốc Xiaomi 18 Pro công bố 23/9.
- Đổi title và description cho khớp nội dung mới.

## 5. Việc anh Long cần làm ở máy local

1. `node scripts/check-media.mjs` để chạy phần kiểm URL sống (phiên cloud chỉ chạy được phần
   kiểm media dồn cụm, đã PASS: 0 bài dồn cụm, khoảng cách nhỏ nhất giữa 2 media là 90 từ).
2. Sau khi GitHub Action thả từng bài hẹn lịch, chạy `node scripts/indexnow.mjs <url>`
   (phiên cloud không ping được, proxy chặn `api.indexnow.org`).
3. Bài refresh Snapdragon đã lên production ngay theo commit này, nên ping luôn:
   `node scripts/indexnow.mjs https://techvision.click/articles/snapdragon-summit-2026-hai-chip-8-elite-gen-6-va-gen-6-pro.html https://techvision.click/blog.html`
4. `node scripts/gsc/gsc.mjs radar 28` để đối chiếu 5 chủ đề trên với query thật.

## 6. Ghi chú: `check-cadence.mjs` đang KHÔNG ĐẠT từ trước phiên này

Gate báo lỗi ở 4 mốc, tất cả đều là lịch sử có sẵn ở `HEAD` trước khi phiên này sửa gì:
`2026-08-25` (3 bài), `2026-09-10` (3 bài), `2026-W35` (9 bài), `2026-W37` (11 bài).
Phiên này **không làm nặng thêm**: mô phỏng sau khi toàn bộ bài hẹn lịch được thả cho thấy
không ngày nào vượt 2 bài và không tuần nào vượt 8 bài trong khoảng từ 20/09 trở đi.
Bốn mốc cũ chỉ sửa được bằng cách dời `datePublished` của bài đã đăng, việc đó đổi URL trong
sitemap nên cần anh Long quyết, AI không tự làm.
