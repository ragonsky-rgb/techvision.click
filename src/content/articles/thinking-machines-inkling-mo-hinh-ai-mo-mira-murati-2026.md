---
slug: "thinking-machines-inkling-mo-hinh-ai-mo-mira-murati-2026"
title: "Inkling: mô hình AI mở đầu tiên của Mira Murati, 975 tỷ tham số"
description: "Thinking Machines Lab của Mira Murati ra Inkling, mô hình open-weight 975 tỷ tham số, giấy phép Apache 2.0, tải trên Hugging Face, tinh chỉnh qua Tinker."
keywords: "Inkling, Thinking Machines Lab, Mira Murati, mo hinh AI open-weight, Inkling Hugging Face, Apache 2.0, Tinker fine-tuning"
category: "AI"
type: "tin-tuc"
datePublished: "2026-07-20T22:00:00+07:00"
dateModified: "2026-07-20T22:00:00+07:00"
deck: "Thinking Machines Lab, startup do cựu giám đốc công nghệ OpenAI Mira Murati sáng lập, vừa phát hành mô hình AI đầu tay mang tên Inkling vào ngày 15/7/2026. Khác với các mô hình chủ lực của OpenAI, Anthropic hay Google, Inkling là mô hình open-weight: toàn bộ trọng số được đưa lên Hugging Face theo giấy phép Apache 2.0, ai cũng tải về và tinh chỉnh trực tiếp được. Đây là phép thử cho luận điểm trung tâm của công ty, rằng AI mà từng tổ chức tự điều chỉnh được sẽ hữu ích hơn cách tiếp cận một mô hình dùng chung cho tất cả. Bản thân Thinking Machines cũng thừa nhận Inkling không phải mô hình mạnh nhất hiện có."
heroImage: "https://i.ytimg.com/vi/46bnJaOAVF8/maxresdefault.jpg"
heroAlt: "Inkling, mô hình AI open-weight đầu tiên của Thinking Machines Lab do Mira Murati sáng lập, năm 2026"
heroCaption: "Inkling là mô hình đầu tay của Thinking Machines Lab, phát hành dạng open-weight ngày 15/7/2026. Nguồn: YouTube"
tldr: "<strong>Thinking Machines Lab</strong> của Mira Murati phát hành <strong>Inkling</strong> ngày <strong>15/7/2026</strong>, mô hình AI đầu tiên của công ty. Đây là kiến trúc hỗn hợp chuyên gia với <strong>975 tỷ tham số</strong> tổng, chỉ kích hoạt khoảng <strong>41 tỷ tham số</strong> cho mỗi lượt xử lý, huấn luyện trên <strong>45 nghìn tỷ token</strong> gồm văn bản, ảnh, âm thanh và video. Mô hình nhận đầu vào đa phương thức nhưng chỉ xuất ra văn bản, cửa sổ ngữ cảnh tối đa <strong>1 triệu token</strong>. Trọng số được công bố trên <strong>Hugging Face theo giấy phép Apache 2.0</strong>, kèm bản lượng tử hóa NVFP4, và có thể tinh chỉnh qua nền tảng Tinker của chính công ty."
tags: ["Inkling", "ThinkingMachinesLab", "MiraMurati", "MoHinhMo"]
about: ["Inkling", "Thinking Machines Lab", "Mira Murati", "Mô hình AI open-weight", "Hugging Face", "Tinker"]
authorBio: "Founder LongTechVision. Theo dõi các diễn biến lớn của ngành công nghệ và trí tuệ nhân tạo toàn cầu."
sourceUrl: "https://thinkingmachines.ai/news/introducing-inkling/"
sourceName: "Thinking Machines Lab, TechCrunch, Axios, MarkTechPost"
sourceDomains: "thinkingmachines.ai · techcrunch.com · axios.com · marktechpost.com"
stats:
  - { num: "975 tỷ", label: "Tổng số tham số của Inkling theo kiến trúc hỗn hợp chuyên gia" }
  - { num: "41 tỷ", label: "Số tham số thực sự kích hoạt cho mỗi lượt xử lý" }
  - { num: "45 nghìn tỷ", label: "Số token dữ liệu huấn luyện gồm văn bản, ảnh, âm thanh, video" }
  - { num: "1 triệu", label: "Số token tối đa của cửa sổ ngữ cảnh" }
  - { num: "Apache 2.0", label: "Giấy phép phát hành trọng số trên Hugging Face" }
  - { num: "15/7/2026", label: "Ngày Thinking Machines Lab công bố Inkling" }
faq:
  - q: "Inkling là mô hình gì?"
    a: "Inkling là mô hình AI đầu tiên do Thinking Machines Lab, startup của cựu giám đốc công nghệ OpenAI Mira Murati, tự huấn luyện và phát hành ngày 15/7/2026. Đây là mô hình dạng hỗn hợp chuyên gia với 975 tỷ tham số tổng, chỉ kích hoạt khoảng 41 tỷ tham số cho mỗi lượt xử lý, nhận đầu vào văn bản, hình ảnh và âm thanh nhưng chỉ trả về văn bản."
  - q: "Open-weight khác mã nguồn mở thế nào?"
    a: "Open-weight nghĩa là nhà phát triển công bố trọng số của mô hình để bất kỳ ai cũng tải về, chạy trên hạ tầng riêng và tinh chỉnh. Điều này khác với mã nguồn mở đầy đủ, vốn còn công khai cả mã huấn luyện và dữ liệu. Với Inkling, trọng số nằm trên Hugging Face theo giấy phép Apache 2.0, một giấy phép cho phép sử dụng cả trong mục đích thương mại."
  - q: "Cần phần cứng gì để tự chạy Inkling?"
    a: "Theo tài liệu kỹ thuật của Thinking Machines Lab, chạy Inkling ở độ chính xác BF16 cần tối thiểu khoảng 2TB VRAM gộp, tương đương 8 card NVIDIA B300 hoặc 16 card H200. Bản lượng tử hóa NVFP4 dạng W4A4 hạ yêu cầu xuống khoảng 600GB VRAM gộp trên 4 card B300. Đây vẫn là mức đầu tư ngoài tầm với của phần lớn doanh nghiệp vừa và nhỏ."
  - q: "Doanh nghiệp Việt Nam dùng Inkling bằng cách nào?"
    a: "Có ba đường. Một là gọi qua các nhà cung cấp hạ tầng đã triển khai Inkling như TogetherAI, Fireworks, Modal, Databricks và Baseten, không cần mua máy. Hai là thuê máy chủ GPU và tự vận hành nếu bắt buộc giữ dữ liệu trong nội bộ. Ba là tinh chỉnh qua nền tảng Tinker của chính Thinking Machines Lab, hỗ trợ ngữ cảnh 64K và 256K token."
  - q: "Inkling có mạnh hơn GPT hay Gemini không?"
    a: "Thinking Machines Lab nói thẳng trong công bố rằng Inkling không phải mô hình mạnh nhất hiện có, dù là mô hình mở hay đóng. Công ty đặt cược vào khả năng tùy biến và hiệu quả chi phí thay vì điểm số benchmark tuyệt đối. Với một số bài kiểm tra, mô hình đạt 97,1% ở AIME 2026 và 77,6% ở SWEBench Verified theo số liệu tự công bố, nên cần kiểm chứng độc lập."
related:
  - { href: "/articles/qwen-3-6-max-mo-hinh-ai-alibaba-lap-trinh-2026.html", cat: "AI", title: "Qwen 3.6 Max: mô hình AI Alibaba đứng đầu về lập trình" }
  - { href: "/articles/google-gemma-4-12b-mo-hinh-ai-chay-tren-laptop-2026.html", cat: "AI", title: "Google Gemma 4 12B: mô hình AI chạy trên laptop" }
  - { href: "/articles/deepseek-v4-dspark-khai-tu-api-cu-24-7-2026.html", cat: "AI", title: "DeepSeek V4 dSpark và việc khai tử API cũ" }
featured: true
---

Ngày 15/7/2026, Thinking Machines Lab công bố Inkling, mô hình AI đầu tiên do chính công ty huấn luyện từ đầu. Đây là cột mốc được giới công nghệ chờ đợi từ khi Mira Murati, cựu giám đốc công nghệ OpenAI, rời công ty cũ và lập startup riêng. Điểm khiến Inkling khác biệt không nằm ở điểm số benchmark mà ở cách phát hành: toàn bộ trọng số được đưa lên Hugging Face theo giấy phép Apache 2.0, tức là lập trình viên và doanh nghiệp tải về, chạy trên hạ tầng riêng và tinh chỉnh trực tiếp được, không phải xin phép hay trả phí bản quyền.

<div class="spec-box">
  <div class="spec-box-title">📋 Inkling · Thông số nhanh</div>
  <table>
    <tr><td>Nhà phát triển</td><td>Thinking Machines Lab (Mira Murati sáng lập)</td></tr>
    <tr><td>Ngày công bố</td><td>15/7/2026</td></tr>
    <tr><td>Kiến trúc</td><td>Hỗn hợp chuyên gia, 975 tỷ tham số tổng, 41 tỷ tham số kích hoạt</td></tr>
    <tr><td>Dữ liệu huấn luyện</td><td>45 nghìn tỷ token gồm văn bản, ảnh, âm thanh, video</td></tr>
    <tr><td>Đầu vào và đầu ra</td><td>Nhận văn bản, ảnh, âm thanh; chỉ xuất ra văn bản</td></tr>
    <tr><td>Cửa sổ ngữ cảnh</td><td>Tối đa 1 triệu token</td></tr>
    <tr><td>Giấy phép</td><td>Apache 2.0, trọng số trên Hugging Face</td></tr>
    <tr><td>Tinh chỉnh</td><td>Nền tảng Tinker, tùy chọn ngữ cảnh 64K và 256K</td></tr>
  </table>
</div>

## Inkling là mô hình như thế nào

Về kiến trúc, Inkling là mô hình hỗn hợp chuyên gia (mixture-of-experts) với 975 tỷ tham số tổng nhưng chỉ kích hoạt khoảng 41 tỷ tham số cho mỗi lượt xử lý. Đây là thiết kế phổ biến ở các mô hình quy mô rất lớn hiện nay, vì nó giữ được dung lượng kiến thức khổng lồ mà chi phí suy luận không tăng theo tỷ lệ. Theo tài liệu kỹ thuật của công ty, mô hình dùng 256 chuyên gia định tuyến cộng 2 chuyên gia chia sẻ mỗi lớp, mỗi token đi qua 6 chuyên gia được chọn.

Dữ liệu huấn luyện là 45 nghìn tỷ token trải trên bốn loại nội dung gồm văn bản, hình ảnh, âm thanh và video. Mô hình xử lý ảnh theo từng mảng 40x40 pixel và xử lý âm thanh qua phổ dMel, tức là hiểu các phương thức này một cách bản địa chứ không qua bước chuyển đổi trung gian. Tuy nhiên đầu ra hiện chỉ là văn bản, bao gồm mã nguồn và dữ liệu có cấu trúc, chưa sinh ảnh hay âm thanh.

<div class="art-video-label">VIDEO · Phân tích Inkling và bối cảnh cạnh tranh của các mô hình mở năm 2026</div>
<div class="art-video-wrap">
  <iframe src="https://www.youtube.com/embed/8rGYGFmytQs" title="Thinking Machines Lab drops Inkling" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>
<p class="art-video-caption">Inkling được đặt vào bối cảnh cuộc đua mô hình mở giữa các phòng thí nghiệm Mỹ và Trung Quốc. Nguồn: YouTube</p>

Một chi tiết đáng chú ý là tham số điều chỉnh mức độ suy nghĩ. Người dùng đặt giá trị nỗ lực suy luận trong khoảng 0,2 đến 0,99, hoặc dùng các mức có tên sẵn từ none, minimal, low, medium, high, xhigh tới max. Cách làm này cho phép đánh đổi giữa chất lượng và tốc độ ngay trong lúc gọi mô hình, thay vì phải chọn một mô hình khác. Công ty cũng cho biết Inkling được huấn luyện để nói rõ khi không chắc chắn thay vì đoán bừa, một hướng đi khác với thói quen trả lời trơn tru bằng mọi giá của nhiều mô hình hiện nay.

## Đặt cược vào tùy biến thay vì một mô hình cho tất cả

Thinking Machines Lab không giấu chuyện Inkling thua các mô hình đầu bảng. Trong công bố, công ty nói thẳng rằng Inkling không phải mô hình mạnh nhất hiện có, dù xét trong nhóm mở hay nhóm đóng. Điều này khác hẳn thông lệ ra mắt mô hình kèm bảng benchmark thắng toàn diện.

<figure>
  <img decoding="async" src="https://i.ytimg.com/vi/EOK_haQSMIA/maxresdefault.jpg" alt="Trọng số Inkling được công bố trên Hugging Face theo giấy phép Apache 2.0" loading="lazy" width="1280" height="720">
  <figcaption>Trọng số đầy đủ của Inkling nằm trên Hugging Face, kèm bản lượng tử hóa NVFP4. Nguồn: YouTube</figcaption>
</figure>

Luận điểm của công ty là mô hình mà từng tổ chức tự điều chỉnh được sẽ hữu ích hơn một mô hình chung dùng cho mọi việc. Một ngân hàng, một bệnh viện hay một công ty logistics có tập dữ liệu, thuật ngữ và quy trình rất khác nhau, và một mô hình đại trà khó phục vụ tốt cả ba. Nếu tổ chức có thể lấy trọng số về rồi huấn luyện thêm trên dữ liệu của mình, kết quả trên tác vụ hẹp có thể tốt hơn mà chi phí vận hành thấp hơn nhiều.

Đây cũng là lý do nền tảng Tinker tồn tại. Vì trọng số phát hành theo Apache 2.0 nên bản thân mô hình không sinh ra phí bản quyền, doanh thu phải đến từ dịch vụ tinh chỉnh và vận hành. Tinker hiện hỗ trợ tinh chỉnh Inkling với hai tùy chọn ngữ cảnh 64K và 256K token. Ngoài ra, mô hình đã được triển khai qua các nhà cung cấp hạ tầng bên thứ ba gồm TogetherAI, Fireworks, Modal, Databricks và Baseten, nên người dùng không nhất thiết phải tự dựng máy.

Về bối cảnh công ty, Thinking Machines Lab huy động 2 tỷ USD ở vòng hạt giống giữa năm 2025 với định giá 12 tỷ USD. Một vòng gọi vốn quy mô lớn hơn nhiều từng được bàn tới cuối năm 2025 nhưng đã dừng lại vào tháng 1/2026. TechCrunch cho biết công ty hiện có khoảng 200 nhân sự. Trong hoàn cảnh đó, việc phát hành mô hình miễn phí và bán dịch vụ xung quanh là lựa chọn chiến lược rõ ràng chứ không phải hành động thiện nguyện.

## Điểm số benchmark và những gì cần dè chừng

Theo số liệu do chính Thinking Machines Lab công bố ở mức nỗ lực suy luận 0,99, Inkling đạt 97,1% ở AIME 2026, 87,2% ở GPQA Diamond, 77,6% ở SWEBench Verified, 63,8% ở Terminal Bench 2.1 và 29,7% ở Humanity's Last Exam phần văn bản. Ở mảng đa phương thức, mô hình đạt 73,5% ở MMMU Pro và 91,4% ở VoiceBench. Công ty cũng nói Inkling dùng khoảng một phần ba lượng token so với Nemotron 3 Ultra của Nvidia để đạt cùng mức điểm Terminal Bench 2.1.

<figure>
  <img decoding="async" src="https://i.ytimg.com/vi/3wv0UItt8IM/maxresdefault.jpg" alt="Phân tích hiệu quả chi phí của kiến trúc hỗn hợp chuyên gia 975 tỷ tham số của Inkling" loading="lazy" width="1280" height="720">
  <figcaption>Hiệu quả token là điểm Thinking Machines Lab nhấn mạnh hơn cả điểm số tuyệt đối. Nguồn: YouTube</figcaption>
</figure>

Cần nhắc lại rằng đây là số liệu tự công bố, chưa qua kiểm chứng độc lập ở thời điểm bài viết. Benchmark cũng chỉ phản ánh một lát cắt hẹp của năng lực thực tế, đặc biệt với tiếng Việt vốn không nằm trong bất kỳ bài kiểm tra nào kể trên. Doanh nghiệp muốn dùng nghiêm túc nên tự dựng bộ kiểm thử trên chính dữ liệu của mình trước khi ra quyết định.

## Ý nghĩa với lập trình viên và doanh nghiệp Việt Nam

Đây là phần cần nhìn tỉnh táo. Về lý thuyết, mô hình open-weight giải quyết đúng nỗi lo lớn nhất của doanh nghiệp Việt Nam khi ứng dụng AI: dữ liệu không phải gửi ra ngoài. Hồ sơ khách hàng, hợp đồng, bệnh án hay dữ liệu tài chính có thể ở lại trong máy chủ của doanh nghiệp, điều mà mô hình gọi qua API của OpenAI hay Google không đáp ứng được ở mức tương đương. Với các đơn vị chịu ràng buộc về dữ liệu cá nhân, đây là khác biệt mang tính quyết định.

Nhưng rào cản phần cứng của riêng Inkling rất lớn. Tài liệu của công ty ghi rõ chạy ở độ chính xác BF16 cần tối thiểu khoảng 2TB VRAM gộp, tức khoảng 8 card NVIDIA B300 hoặc 16 card H200. Bản lượng tử hóa NVFP4 dạng W4A4 hạ yêu cầu xuống khoảng 600GB VRAM gộp trên 4 card B300. Ở mặt bằng giá GPU trung tâm dữ liệu hiện nay, đây là khoản đầu tư mà chỉ ngân hàng lớn, tập đoàn viễn thông hoặc nhà cung cấp đám mây trong nước mới cân nhắc nổi.

<figure>
  <img decoding="async" src="https://i.ytimg.com/vi/5ZUgskg5R_E/maxresdefault.jpg" alt="Nền tảng Tinker của Thinking Machines Lab dùng để tinh chỉnh mô hình Inkling" loading="lazy" width="1280" height="720">
  <figcaption>Tinker là nơi Thinking Machines Lab kỳ vọng tạo doanh thu, vì trọng số mô hình phát hành miễn phí. Nguồn: YouTube</figcaption>
</figure>

Vì vậy, với phần lớn đội ngũ ở Việt Nam, lộ trình thực tế hơn là dùng Inkling qua các nhà cung cấp hạ tầng đã hỗ trợ sẵn để đánh giá chất lượng, rồi mới tính chuyện tự vận hành nếu bài toán thật sự đòi hỏi dữ liệu nằm trong nội bộ. Song song đó, nhóm mô hình mở nhỏ hơn vẫn là lựa chọn hợp lý cho đa số: [Gemma 4 12B của Google chạy được trên laptop cấu hình cao](/articles/google-gemma-4-12b-mo-hinh-ai-chay-tren-laptop-2026.html), còn dòng mô hình Trung Quốc như [Qwen của Alibaba đang dẫn đầu nhiều bài kiểm tra lập trình](/articles/qwen-3-6-max-mo-hinh-ai-alibaba-lap-trinh-2026.html) và có nhiều biến thể vừa túi tiền. So với các mô hình mở này, lợi thế của Inkling nằm ở quy mô kiến thức, ngữ cảnh 1 triệu token, khả năng nhận âm thanh và ảnh cùng lúc, cùng giấy phép Apache 2.0 rộng rãi cho mục đích thương mại.

Thinking Machines Lab cũng nhắc tới một biến thể nhỏ hơn tên Inkling-Small với 276 tỷ tham số tổng và 12 tỷ tham số kích hoạt, dùng cùng công thức huấn luyện, nhưng trọng số chưa được phát hành ở thời điểm công bố. Nếu bản này ra mắt, nó mới là phiên bản đáng theo dõi với thị trường Việt Nam, vì mức tham số kích hoạt 12 tỷ nằm trong tầm phần cứng của nhiều doanh nghiệp hơn hẳn.

<div class="art-callout">💡 <strong>Lưu ý khi đánh giá:</strong> Toàn bộ chỉ số hiệu năng nêu trong bài là số liệu do Thinking Machines Lab tự công bố, chưa qua kiểm chứng độc lập. Giấy phép Apache 2.0 cho phép dùng thương mại, nhưng doanh nghiệp vẫn cần tự rà soát nghĩa vụ pháp lý về dữ liệu cá nhân khi triển khai bất kỳ mô hình AI nào trong nội bộ.</div>

Nhìn tổng thể, Inkling không phải cú đánh giành ngôi đầu bảng, và công ty cũng không cố tỏ ra như vậy. Giá trị của nó nằm ở chỗ đây là mô hình open-weight quy mô lớn nhất do một phòng thí nghiệm Mỹ phát hành công khai, ở thời điểm mà phần lớn mô hình mở đáng chú ý đến từ Trung Quốc. Cùng với làn sóng mô hình mở khác như [DeepSeek liên tục làm mới dòng sản phẩm của mình](/articles/deepseek-v4-dspark-khai-tu-api-cu-24-7-2026.html), Inkling góp phần giữ cho thị trường AI không rơi vào tay một vài nhà cung cấp đóng. Với người dùng cuối, đó là tin tốt, kể cả khi phần cứng để tự chạy nó vẫn còn ngoài tầm với.
