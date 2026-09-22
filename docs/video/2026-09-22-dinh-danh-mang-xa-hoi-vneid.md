# Video: Định danh tài khoản mạng xã hội 28/9, ba mốc hạn chót (22/09/2026)

**Trạng thái: ĐÃ XÁC MINH NGUỒN, CHỜ ANH LONG DUYỆT BẢNG KÊ trước khi dựng.**
Bài web đi kèm: `/articles/dinh-danh-tai-khoan-mang-xa-hoi-28-9-2026-lien-ket-vneid.html`
(đã lên sóng 19/9, `robots: index, follow`, HTTP 200 lúc 22/9).

Đây là **video tin tức thường**, nên áp luật gốc: clip chính hãng + kho CC0 + ảnh chụp màn hình.
**KHÔNG dùng Flow, không dùng hình AI.** Ngoại lệ Flow ngày 15/09 chỉ dành cho dòng cắt dán giấy
kiểu Vox, không áp cho video này.

## Vì sao chọn chủ đề này

Hạn hiệu lực 28/9 còn 6 ngày tính từ 22/9. Theo công thức đã đo được view thật
(`docs/ke-hoach-video-2026-08-26-den-09-30.md` và bài học mùa vụ), video ăn theo một mốc sắp tới
có tầm với rộng hơn hẳn tin điện thoại. Chủ đề này còn thuộc diện cả nước phải làm theo, không
giới hạn ở người mua công nghệ.

## Xác minh nguồn (làm ngày 22/09/2026)

**Không lấy số từ bài của chính techvision.** Đã tải bản ký số chính thức từ cổng Chính phủ:

- Trang văn bản: `https://vanban.chinhphu.vn/?docid=219189&pageid=27160`
- Bản PDF ký số: `https://datafiles.chinhphu.vn/cpp/files/vbpq/2026/8/320_2026_nd-cp_13082026-signed.signed.pdf`
- 30 trang, 13,6 MB.

**BẪY: PDF của Chính phủ là bản SCAN ẢNH.** `pdftotext` chỉ bóc được 381 ký tự, toàn bộ là khối
chữ ký số ("Thời gian ký: 14.08.2026 17:05:58"). Nội dung 30 trang là ảnh. Máy này **không có
tesseract/ocrmypdf**, nên phải đọc bằng mắt qua `pdfseparate` + đọc ảnh trang. Hệ quả đáng nhớ:
mọi trang tin dẫn "nguyên văn" nghị định này đều đang chép từ bản OCR của người khác, tức là
chuỗi truyền tin có ít nhất một khâu có thể sai số.

Bố cục file: **thân nghị định = trang 1-14** (trang 14 là trang ký), **phụ lục = trang 15-30**
(bảng 140 loại giấy tờ/giấy phép theo từng bộ). Ai đi tìm điều khoản ở cuối file sẽ chỉ gặp phụ lục.

| Dữ kiện | Giá trị | Đã soi ở đâu |
|---|---|---|
| Số hiệu | Nghị định 320/2026/NĐ-CP | trang văn bản Chính phủ |
| Ngày ban hành | 13/8/2026 | trang văn bản + phụ lục (trang 15) |
| Ngày hiệu lực | 28/9/2026 | Điều 20 khoản 3, trang 13 |
| Sửa văn bản nào | Nghị định 69/2024/NĐ-CP ngày 25/6/2024 | trang văn bản Chính phủ |
| Người ký | Phó Thủ tướng Hồ Quốc Dũng (KT. Thủ tướng) | trang 14, có dấu quốc huy |
| Điều khoản nội dung | Điều 19: bổ sung khoản 9, khoản 10 vào sau khoản 8 của **Điều 40** | trang 12 |

## Điểm cốt tử: khoản 9 có HAI CÂU, hai chế độ khác nhau

Đây là chỗ bài web còn thiếu và cũng là trục của video. Nguyên văn khoản 9 (trang 12):

> "Tài khoản giao dịch điện tử theo Luật Giao dịch điện tử trên các nền tảng số phục vụ hoạt động
> thuộc lĩnh vực giáo dục, bình dân học vụ số, chứng khoán, viễn thông, ngân hàng, thương mại điện
> tử (người bán, người livestream bán hàng và người tiếp thị liên kết theo quy định của Luật Thương
> mại điện tử), hóa đơn điện tử, kinh doanh vận tải, kinh doanh du lịch, kinh doanh dược, khám
> bệnh, chữa bệnh, mạng xã hội tại Việt Nam **phải được liên kết, xác thực** với tài khoản định
> danh điện tử. Các tài khoản giao dịch điện tử trên các nền tảng số phục vụ hoạt động quốc phòng,
> an ninh, **dịch vụ xuyên biên giới** thực hiện liên kết, xác thực với tài khoản định danh điện tử
> trước khi sử dụng **khi các nền tảng số đáp ứng đủ điều kiện và được kết nối** với nền tảng định
> danh và xác thực điện tử."

Khoản 10: lĩnh vực ngoài khoản 9 thì Bộ trưởng, Thủ trưởng cơ quan ngang bộ ban hành danh mục
cụ thể các giao dịch trực tuyến bắt buộc liên kết.

**Câu 1 là bắt buộc, câu 2 là có điều kiện.** Khoản này **không nêu tên nền tảng nào**. Đây chính
là chỗ tin lan truyền bóp thành "Facebook sẽ bị xóa ngày 31/12", và là lý do video đáng làm.

*Giới hạn của khẳng định:* em đọc trọn trang 12, 13, 14 và 25-30. Chưa đọc trang 1-11, nên trong
video chỉ nói "**điều khoản này** không nêu tên nền tảng nào", không nói "cả nghị định không nêu".
Tương tự, câu về việc xóa tài khoản chỉ nói trong phạm vi các điều khoản về liên kết và hạn chót.

## Ba mốc hạn chót (Điều 20 khoản 3, trang 13)

| Diện | Hạn chót nguyên văn |
|---|---|
| Nền tảng số quốc gia tích hợp xác thực, đăng nhập, giao dịch | chậm nhất trước 31/12/2026 |
| Tài khoản khoản 9 Điều 40, **trừ lĩnh vực ngân hàng**, tạo trước 28/9/2026 | chậm nhất trước 31/12/2026 |
| Tài khoản khoản 9 Điều 40 **thuộc lĩnh vực ngân hàng**, tạo trước 28/9/2026 | chậm nhất trước 30/6/2027 |

Khoản 4: Bộ Công an hướng dẫn, kiểm tra, đôn đốc, phối hợp Bộ Khoa học và Công nghệ.

Mốc thứ nhất (nền tảng số quốc gia) là mốc **bài web chưa nhắc**. Đó là lý do tiêu đề video lấy
góc "ba mốc, không phải một".

## Kịch bản đọc cho OmniVoice (số đã phiên âm theo `tts-cach-doc-so.md`)

Mỗi dòng một câu, đọc rồi cắt im lặng hai đầu, nối, `atempo=1.1`.

```
Ba mốc hạn chót, không phải một.
Nghị định ba trăm hai mươi có hiệu lực ngày hai mươi tám tháng chín.
Nó bổ sung khoản chín vào Điều bốn mươi, liệt kê mười hai lĩnh vực phải liên kết định danh.
Trong đó có mạng xã hội tại Việt Nam.
Nhưng đọc kỹ thì khoản này có hai câu, hai chế độ khác nhau.
Câu sau dành cho dịch vụ xuyên biên giới, chỉ liên kết khi nền tảng đủ điều kiện và được kết nối.
Điều khoản này không nêu tên nền tảng nào.
Hạn chót là ngày ba mươi mốt tháng mười hai năm hai nghìn không trăm hai mươi sáu.
Riêng lĩnh vực ngân hàng lùi tới ngày ba mươi tháng sáu năm hai nghìn không trăm hai mươi bảy.
Và trong các điều khoản về hạn chót, không có dòng nào nói tài khoản sẽ bị xóa.
Bản chụp nghị định gốc và ba mốc đầy đủ nằm ở bài trong phần giới thiệu.
```

Ước lượng 50 tới 55 giây sau khi tua 1,1x. Chốt mốc thật bằng `spans.json` sau khi đọc xong.

**Phụ đề giữ dạng số** (file riêng, đừng lẫn với bản đọc):

```
Ba mốc hạn chót, không phải một.
Nghị định 320/2026/NĐ-CP hiệu lực 28/9/2026
Bổ sung khoản 9 Điều 40, liệt kê 12 lĩnh vực
Trong đó có mạng xã hội tại Việt Nam
Khoản này có 2 câu, 2 chế độ khác nhau
Câu sau: dịch vụ xuyên biên giới, chỉ liên kết khi nền tảng đủ điều kiện
Điều khoản này không nêu tên nền tảng nào
Hạn chót 31/12/2026
Lĩnh vực ngân hàng: 30/6/2027
Không có dòng nào nói tài khoản sẽ bị xóa
Nghị định gốc + 3 mốc đầy đủ ở bài trong bio
```

## Bảng cảnh (11 nhịp)

Khung một là **con số**, không phải câu dẫn (luật 26/8).

| Nhịp | Nội dung hình | Nguồn |
|---|---|---|
| 1 | Số lớn `31/12/2026` trên nền tối, đếm lùi số ngày còn lại | thẻ Remotion |
| 2 | Trang 1 nghị định, zoom vào số hiệu và ngày ban hành | PDF Chính phủ |
| 3 | Trang 12, zoom dòng "Điều 19. Bổ sung khoản 9, khoản 10..." | PDF Chính phủ |
| 4 | Trang 12, tô sáng cụm "mạng xã hội tại Việt Nam" trong danh sách | PDF Chính phủ |
| 5 | Trang 12 toàn khoản 9, chia màn làm hai nửa: câu 1 và câu 2 | PDF Chính phủ |
| 6 | Trang 12, tô sáng "dịch vụ xuyên biên giới" và "khi các nền tảng số đáp ứng đủ điều kiện" | PDF Chính phủ |
| 7 | Cùng khung, hiện chip chữ "Không nêu tên nền tảng" | PDF + thẻ |
| 8 | Trang 13, zoom đoạn "chậm nhất trước ngày 31 tháng 12 năm 2026" | PDF Chính phủ |
| 9 | Trang 13, zoom đoạn ngân hàng "30 tháng 6 năm 2027" | PDF Chính phủ |
| 10 | Thẻ bảng 3 mốc, `countUp: false` cho mọi ô ngày | thẻ Remotion |
| 11 | Ảnh chụp bài trên techvision.click, cuộn nhẹ | ảnh chụp chính chủ |

Nhịp 1 cần một nhịp b-roll ngắn lót dưới số (tay cầm điện thoại, người cuộn mạng xã hội) để khung
mở không phải chữ trên nền trơn.

## BẢNG KÊ NGUỒN - CHỜ DUYỆT (luật `AGENTS.md` mục 2.3)

| # | Nguồn | Dùng ở nhịp | Giấy phép / credit |
|---|---|---|---|
| A | Nghị định 320/2026/NĐ-CP, bản ký số, `datafiles.chinhphu.vn` | 2 tới 9 | Văn bản quy phạm pháp luật, công khai. Credit trên hình: "Nguồn: Cổng thông tin văn bản quy phạm pháp luật Chính phủ" |
| B | Ảnh chụp màn hình bài trên techvision.click | 11 | ảnh chụp chính chủ |
| C | 1 clip b-roll dọc, người cầm điện thoại cuộn mạng xã hội, kho CC0 (Pexels/Pixabay) | 1 | CC0, ghi tên tác giả trong mô tả nếu kho yêu cầu |
| D | Thẻ số Remotion, nền trong | 1, 7, 10 | tự dựng |
| E | Giọng OmniVoice nhân bản giọng anh Long | cả video | cục bộ, không phải giọng AI của nền tảng ngoài |
| F | Phụ đề word-pop nhấn đỏ `#C0392B` | cả video | tự dựng, `make_caption_track.py` |

**Không có nguồn nào là hình AI. Không dùng Flow.**

Chưa chọn được clip C cụ thể vì phải xem thật rồi mới lấy. Nếu anh duyệt bảng kê này thì em tìm
clip C, gửi anh đúng đường dẫn kho CC0 kèm tên tác giả trước khi ghép.

## Gói đăng (soạn sau khi dựng xong, chưa đăng)

Sẽ viết vào mục này sau. Nguyên tắc: 3 nền tảng, có UTM, và **không cần dòng khai hình AI** vì
video này không dùng hình AI.
