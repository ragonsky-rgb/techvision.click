# Radar chủ đề tuần 39/2026 (lập ngày 22/09/2026)

Quét trend + phân tích đối thủ + 5 chủ đề đề xuất. Phiên cloud, chạy tự động theo lịch.

## 0. Phương pháp và HẠN CHẾ phải biết trước khi tin số

Phiên này chạy trên Claude Code web, proxy egress chặn gần hết nguồn. Ghi lại để phiên sau
không mất công thử lại:

| Nguồn | Trạng thái | Ghi chú |
|---|---|---|
| `WebSearch` (kèm `allowed_domains`) | **Dùng được** | Kênh nghiên cứu chính của phiên này |
| `WebFetch` | **Chặn toàn bộ** | genk.vn, tinhte.vn, vnexpress.net, macrumors.com đều `EGRESS_BLOCKED` |
| `curl` trực tiếp | **Chặn toàn bộ** | 14/14 domain tin tức thử đều trả `000` |
| Ahrefs MCP | **Không dùng được** | Mọi endpoint trả `Insufficient plan`, kể cả endpoint miễn phí |
| GSC radar (`scripts/gsc/gsc.mjs`) | **Không chạy được** | Thiếu package `googleapis`, và `token.json` không có trong repo (đã gitignore) |
| Google Trends VN | **Không đọc được** | `trends.google.com` chặn, chỉ lấy được tín hiệu gián tiếp qua SERP |

**Hệ quả:** phần "chủ đề đang tăng trưởng" dưới đây dựa trên **tín hiệu SERP + tần suất đưa tin
của báo VN**, KHÔNG phải số volume/KD thật. Khi anh Long chạy ở máy local, nên đối chiếu lại bằng
`node scripts/gsc/gsc.mjs radar 28` trước khi mở rộng thêm bài.

## 1. Phân tích đối thủ: tuần 15-22/09/2026

Ba đối thủ lớn nhất cùng ngách, đọc qua SERP.

### GenK (genk.vn)
Chủ đề đẩy mạnh nhất tuần: **điện thoại gập** (ít nhất 3 bài: "vì sao màn gập thành chiến trường
khốc liệt", "vì sao mỏng nhẹ là bài toán khó nhất, đo bằng 0,001 gram", "Apple có thể chiếm 40%
thị phần gập"). Song song là **ColorOS 17** (bài ra ngay 18/9, đúng ngày công bố) và **iOS 27 với
Siri dùng Gemini**.

> Đọc ra được gì: GenK đang khai thác góc **phân tích ngành** cho mảng gập, không phải tin sản phẩm.
> Đây là góc techvision KHÔNG nên đua, vì không có dữ liệu VN để tạo khác biệt.

### Tinh tế (tinhte.vn)
Thread nổi tuần qua nghiêng về **thảo luận cộng đồng** hơn tin: "có nên lên iPhone 18 Pro Max hay
chờ", "iPhone gập có thể không có MagSafe", "Apple Event 2026". Ngoài ra mảng xe khá mạnh:
**VinFast VF Wild** công bố 19/9 được bàn nhiều.

> Đọc ra được gì: Tinh tế mạnh ở **tranh luận mua hay chờ**. Đây là dạng nội dung techvision có thể
> thắng bằng **bảng giá VN thật** thay vì ý kiến cá nhân.

### VnExpress Số hóa (vnexpress.net)
Thiên hẳn về **chính sách và hạ tầng**: tắt sóng 2G, hợp nhất quy định kho số viễn thông (VBHN 18
ngày 7/9), ra mắt Hệ thống thông tin quốc gia về KHCN (11/9), Viettel bắt tay Qualcomm làm 6G,
Vietnam iContent 2026.

> Đọc ra được gì: đúng như `AGENTS.md §0a-bis` cảnh báo, **báo lớn VN luôn đưa tin chính sách nhanh
> hơn**. Không đua. Nhóm này chỉ nên viết khi có góc "đổi gì cho túi tiền người dùng".

## 2. Chủ đề đang lên nhưng techvision CHƯA có bài

Sau khi dedup với 746 bài trong `src/content/articles`:

| Chủ đề | Tín hiệu | Đã có bài chưa |
|---|---|---|
| **ColorOS 17** | Công bố 18/9, ~90 máy, lịch ổn định từ 8/10 | **CHƯA** (có One UI 9 và HyperOS 4, thiếu đúng chân OPPO) |
| **VinFast VF Wild** | Ra mắt VN 19/9, giá 860 triệu, cọc 25-30/9 | **CHƯA** |
| **Apple tháng 10** (iPad mini OLED, iMac/MacBook Pro M6) | 7+ sản phẩm đồn đoán, iPad mini trước cuối tháng 10 | **CHƯA** (chỉ có bài M6 riêng, hẹn 14/10) |
| **Sale 11/11** | `docs/lich-bai-sale-2026.md` ghi rõ "đợt lớn nhất năm, CHƯA VIẾT" | **CHƯA** |
| **Black Friday 27/11** | Cùng file, "CHƯA VIẾT", autocomplete có "black friday 2026 là ngày nào" | **CHƯA** |

### Chủ đề đã LOẠI và lý do (để phiên sau khỏi làm lại)

- **Giá RAM/SSD/laptop tăng**: đã có 4 bài (`gia-ram-ssd-tang-vot-2026`, `gia-laptop-tang-30-phan-tram`,
  `gia-ram-dram-tang-them-20-phan-tram-quy-3-2026`, `gartner-gia-dien-thoai-laptop-2026`). Viết thêm là tự ăn thịt mình.
- **Xiaomi 18 series**: đã có `xiaomi-18-pro-pro-max-fold-ra-mat-thang-9-2026-gia-viet-nam`.
- **Worlds 2026**: đã có 2 bài hẹn lịch (29/9 lịch thi đấu, 6/10 thể thức). Bài thứ ba sẽ cannibalize.
- **Luật 20/2026/QH16**: phần lớn điều khoản hiệu lực 01/3/2027, nội dung chủ yếu là cắt giảm điều kiện
  kinh doanh cho doanh nghiệp. Góc người dùng quá mỏng, không đạt chuẩn §0a-bis.
- **Điện thoại gập**: đã có 8+ bài. GenK đang đánh mạnh góc phân tích, ta không có lợi thế dữ liệu.

## 3. NĂM CHỦ ĐỀ CHỐT, kèm tiêu đề và dàn ý

Đã viết xong cả 5, hẹn lịch theo mục 4.

### 1. Sale 11/11/2026 (ưu tiên số 1)
- **Tiêu đề:** Sale 11/11/2026: giá đồ công nghệ và cách soi giảm thật
- **Vì sao số 1:** `docs/lich-bai-sale-2026.md` đo được bài sale 2/9 chiếm **67% tổng nhấp toàn site**
  (53/79 nhấp GSC 28 ngày). 11/11 là đợt lớn nhất năm và đang trống bài.
- **Dàn ý:** các sàn đã công bố gì (chưa) → bảng giá tham chiếu VN → iPhone 17 là bẫy giá điển hình
  (Apple tăng 4 triệu từ 10/9) → laptop là ngoại lệ vì khủng hoảng RAM → phụ kiện là nhóm đáng chờ
  → ba việc cần làm.
- **Góc riêng:** không echo "mẹo săn sale", mà chốt **mặt bằng giá thật** để đối chiếu.

### 2. ColorOS 17
- **Tiêu đề:** ColorOS 17 cập nhật máy nào, khi nào về Việt Nam
- **Vì sao:** lấp đúng chân còn thiếu. Site đã có One UI 9 (Samsung) và HyperOS 4 (Xiaomi), thiếu OPPO.
  OPPO + realme là nhóm bán chạy nhất phân khúc tầm trung VN.
- **Dàn ý:** ColorOS 17 gộp OxygenOS + realme UI → bảng lịch 5 đợt (22/9, 8/10, 16/10, 22/10, 26/11)
  → **độ trễ bản quốc tế 1-2 tháng so với TQ** → người dùng OnePlus/realme mất gì → đặt cạnh One UI 9
  và HyperOS 4 → nên cập nhật ngay hay chờ.
- **Góc riêng:** mọi bài đối thủ đều chép lịch TQ mà không nói rõ **máy bán ở VN nhận khi nào**.

### 3. VinFast VF Wild
- **Tiêu đề:** VinFast VF Wild giá 860 triệu: bán tải REEV chạy 1.000km
- **Vì sao:** đúng ô "sản phẩm mới ra mắt tại VN" của §0c, và có **giá VN thật** (biến số duy nhất
  §0a-bis chứng minh là ảnh hưởng tới index).
- **Dàn ý:** giá 860/872 triệu + ưu đãi cọc 61 triệu (25-30/9) → REEV khác xe điện thuần và hybrid
  → đọc con số NEDC cho đúng → tải trọng 750kg → ai nên mua, ai nên chờ.
- **Góc riêng:** cảnh báo NEDC thổi phồng và nhắc lệ phí trước bạ chưa tính vào giá niêm yết.

### 4. Apple tháng 10/2026
- **Tiêu đề:** Apple tháng 10/2026: iPad mini OLED, iMac và MacBook Pro M6
- **Vì sao:** phủ mảng "máy tính" mà user yêu cầu, bổ trợ (không trùng) bài M6 hẹn 14/10.
- **Dàn ý:** Apple chưa công bố sự kiện → bảng sản phẩm đồn đoán + mức độ chắc chắn → iPad mini đổi
  OLED → **giá iPad mini 7 tại VN 14,4 triệu, chờ hay mua** → M6 2nm và cái bẫy "MacBook Pro bản cao
  vẫn M5 Pro/Max" → iMac 24 → nên theo dõi gì.
- **Góc riêng:** cái bẫy M6 vs M5 Pro/Max là thứ dễ khiến người mua chọn sai, ít nơi nói rõ.

### 5. Black Friday 2026
- **Tiêu đề:** Black Friday 2026 là ngày nào, mua gì ở Việt Nam
- **Vì sao:** cùng file lịch sale ghi "CHƯA VIẾT", autocomplete đã có "black friday 2026 là ngày nào"
  và "black friday gearvn".
- **Dàn ý:** 27/11 + Cyber Monday 30/11 → **tại VN đây là đợt của chuỗi bán lẻ, không phải sàn**
  → nhóm đáng mua / nên bỏ qua → vì sao 2026 phần trăm giảm kém tin → linh kiện PC chia nhỏ từng món
  → ba việc cần làm.
- **Góc riêng:** phân biệt Black Friday (chuỗi) với ngày đôi (sàn), đúng tệp "black friday gearvn".

## 4. Lịch hẹn: vì sao KHÔNG đăng ngay được

Trần `§0a` là 2 bài/ngày và 8 bài/tuần. Khi quét, hàng đợi đã **kín đặc**:

```
W39 (21-27/9): 8/8 FULL     W41 (5-11/10):  8/8 FULL
W40 (28/9-4/10): 8/8 FULL   W42 (12-18/10): 8/8 FULL
```

Chỗ trống thật sự sớm nhất là **W43 (19-25/10)**. Nên xếp:

| Ngày giờ | Bài |
|---|---|
| 19/10 15:00 | Sale 11/11 |
| 20/10 09:00 | ColorOS 17 |
| 20/10 15:00 | Apple tháng 10 |
| 21/10 09:00 | VinFast VF Wild |
| 30/10 09:00 | Black Friday |

Sau khi thêm: W43 = 5/8, W44 = 1/8, mọi ngày ≤ 2. **Không vi phạm trần.**

Hai mốc sale rơi đúng công thức của `lich-bai-sale-2026.md` ("đăng trước sự kiện 3-4 tuần"):
19/10 → 11/11 là **23 ngày**, đỉnh hiển thị rơi vào khoảng 9/11. 30/10 → 27/11 là **28 ngày**,
nằm gọn trong cửa sổ 30/10-3/11 mà file đã chốt.

> Nếu anh Long muốn đẩy bài nào lên sớm hơn, cách duy nhất không phá trần là **đổi chỗ** với một bài
> đang hẹn (tiền lệ: commit `Doi cho 2 bai hen lich` ngày 18/9).

## 5. Việc còn lại, phiên cloud KHÔNG làm được

1. **Ping IndexNow**: proxy chặn `api.indexnow.org`. Sau khi 5 bài lên, chạy ở máy local:
   ```bash
   node scripts/indexnow.mjs https://techvision.click/articles/sale-11-11-2026-shopee-lazada-gia-do-cong-nghe.html https://techvision.click/blog.html
   ```
2. **Cập nhật lại giá trước ngày thả bài.** Giá trong bài đọc ngày 22/9/2026 qua SERP, KHÔNG mở được
   trang gốc (proxy chặn cellphones.com.vn). Trước 19/10 nên mở trang chuỗi đọc lại và bump `dateModified`.
3. **Bài "lương về 25/10"**: `lich-bai-sale-2026.md` hẹn cập nhật 5-10/10, cùng URL, không tính vào trần.
4. **Bài `samsung-galaxy-s26-fe-lo-cau-hinh-exynos-2500-gia-du-kien-2026`** hiện vẫn là bài rò rỉ,
   trong khi máy **đã bán tại VN** (niêm yết 18,99 triệu, Hoàng Hà bán 15,83 triệu ngày 17/9).
   Nên refresh giữ nguyên slug, thay giá dự kiến bằng giá thật. Refresh không tính vào trần.
