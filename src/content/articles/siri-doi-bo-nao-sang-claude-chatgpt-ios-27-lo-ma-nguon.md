---
slug: "siri-doi-bo-nao-sang-claude-chatgpt-ios-27-lo-ma-nguon"
title: "Mã iOS 27 hé lộ Siri có thể đổi sang Claude, ChatGPT: chưa bật"
description: "Mã iOS 27 có hai cơ chế cho Claude hay GPT-5.6 Terra thay phần suy luận của Siri. Apple chưa công bố, chưa bật, và Siri AI chưa có tiếng Việt."
keywords: "siri claude, siri chatgpt, ios 27 siri, apple ai bên thứ ba, model delegation apple, siri ai tiếng việt, thay mô hình siri, apple intelligence 2026"
category: "Apple"
type: "tin-tuc"
datePublished: "2026-11-02T09:00:00+07:00"
dateModified: "2026-11-02T09:00:00+07:00"
noindex: true
scheduled: true
deck: "Trong mã nguồn iOS 27 và macOS Golden Gate, nhà phát triển pdfu tìm thấy hai lớp hạ tầng cho phép một mô hình bên ngoài như Claude hoặc GPT-5.6 chen vào đúng vị trí mà mô hình của Apple đang đứng. Không phải một tính năng bổ sung kiểu hỏi thêm ChatGPT như hiện nay, mà là thay hẳn phần suy luận phía máy chủ. Đây là phát hiện từ mã nguồn, không phải công bố của Apple: tính năng chưa được bật cho ai và Apple chưa xác nhận sẽ ra mắt."
heroImage: "https://i.ytimg.com/vi/V2_Wr47gVQ8/maxresdefault.jpg"
heroAlt: "Siri tren iOS 27 co the doi sang mo hinh AI ben thu ba nhu Claude hoac ChatGPT"
heroCaption: "Theo mã nguồn, hạ tầng cho mô hình bên thứ ba có trong iOS 27 nhưng Apple chưa bật và chưa công bố. Ảnh minh họa từ YouTube"
ogImage: "https://techvision.click/uploads/og-article/siri-doi-bo-nao-sang-claude-chatgpt-ios-27-lo-ma-nguon.jpg"
tldr: "Ngày <strong>14/9/2026</strong>, MacRumors đăng phát hiện của nhà phát triển pdfu trong mã nguồn iOS 27 và macOS Golden Gate: Apple đã dựng sẵn hạ tầng cho mô hình AI bên thứ ba thay thế phần suy luận của Siri. Có <strong>hai cơ chế riêng biệt</strong>. <strong>Model Delegation</strong> cho phép một extension như Claude xuất hiện trong menu ngữ cảnh và xử lý yêu cầu ngôn ngữ tự nhiên. <strong>Model Manager Services</strong> chứa giao thức Inference Provider, có thể thay thẳng mô hình Siri phía máy chủ của Apple bằng lựa chọn khác, pdfu minh họa bằng <strong>GPT-5.6 Terra</strong>. Hiện chưa có gì hiển thị với người dùng, menu hỏi thêm mới chỉ liệt kê extension ChatGPT tích hợp sẵn và Apple chưa cấp quyền cho nhà phát triển bên ngoài. Đây là mã nguồn và tin đồn, <strong>Apple chưa công bố</strong>: tính năng này không có trong keynote WWDC 2026. Từ tháng 3/2026, Mark Gurman của Bloomberg đã đưa tin Apple định mở Siri cho <strong>Google Gemini và Anthropic Claude</strong> bên cạnh ChatGPT. Siri AI mới cũng chưa hỗ trợ tiếng Việt."
tags: ["Siri", "Apple", "Claude", "ChatGPT", "iOS27", "2026"]
about: ["Siri", "Apple Intelligence", "Anthropic Claude", "OpenAI ChatGPT"]
authorBio: "Founder LongTechVision. Theo dõi tin công nghệ quốc tế và quy đổi ra bối cảnh sử dụng tại Việt Nam."
sourceUrl: "https://www.macrumors.com/2026/09/14/siri-can-be-swapped-out-for-chatgpt-claude/"
sourceName: "MacRumors, 14/9/2026"
sourceDomains: "macrumors.com · iclarified.com · bloomberg.com · thenextweb.com · apple.com · engadget.com · tuoitre.vn"
stats:
  - { num: "2 cơ chế", label: "Model Delegation và Model Manager Services, hai lớp hạ tầng tìm thấy trong mã nguồn" }
  - { num: "14/9/2026", label: "Ngày MacRumors đăng phát hiện, cũng là ngày iOS 27 chính thức phát hành" }
  - { num: "3/2026", label: "Tháng Bloomberg lần đầu đưa tin (chưa được Apple xác nhận) Apple định mở Siri cho Gemini và Claude" }
  - { num: "0 quyền", label: "Số nhà phát triển bên ngoài hiện được Apple cấp quyền model delegation" }
  - { num: "iOS 27", label: "Phiên bản hệ điều hành chứa phần hạ tầng nói trên" }
  - { num: "GPT-5.6 Terra", label: "Mô hình pdfu dùng để minh họa giao thức Inference Provider" }
faq:
  - q: "Người dùng iPhone đã đổi được Siri sang Claude chưa?"
    a: "Tính đến cuối tháng 9/2026 thì chưa. Đây mới là phần hạ tầng nằm trong mã nguồn, không phải tính năng đã bật hay được Apple công bố. Menu hỏi thêm trong iOS hiện chỉ liệt kê extension ChatGPT mà Apple tích hợp sẵn, và Apple chưa cấp quyền model delegation cho bất kỳ nhà phát triển bên ngoài nào. Việc code có sẵn không bảo đảm tính năng sẽ ra mắt, cũng không cho biết thời điểm."
  - q: "Khác gì so với việc Siri hỏi thêm ChatGPT hiện nay?"
    a: "Khác về độ sâu. Cơ chế hiện nay là Siri nhận ra câu hỏi nằm ngoài khả năng của mình rồi chuyển tiếp sang ChatGPT, và bạn thấy rõ ranh giới đó. Hai cơ chế mới đi xa hơn: Model Delegation cho phép mô hình bên ngoài trực tiếp xử lý các yêu cầu ngôn ngữ tự nhiên như đặt nhắc nhở, còn giao thức Inference Provider có thể thay thẳng mô hình phía máy chủ mà Siri đang dùng. Nói cách khác, không phải gọi hộ mà là đổi động cơ."
  - q: "Nếu đổi sang Claude hay GPT thì dữ liệu của tôi đi đâu?"
    a: "Đó chính là câu hỏi Apple sẽ phải trả lời trước khi bật tính năng. Khi phần suy luận chạy trên máy chủ của bên thứ ba, nội dung yêu cầu phải rời khỏi hạ tầng Apple. Hiện chưa có tài liệu nào mô tả cách Apple xử lý phần này, nên mọi phán đoán về mức độ riêng tư đều là suy diễn. Người dùng quan tâm tới quyền riêng tư nên chờ chính sách công bố chính thức thay vì kết luận sớm theo hướng nào."
  - q: "Siri AI đã có tiếng Việt chưa và máy nào dùng được?"
    a: "Chưa. Apple Intelligence có tiếng Việt từ iOS 26.1 (tháng 11/2025), nhưng Siri AI mới ra mắt cùng iOS 27 ngày 14/9/2026 chỉ có tiếng Anh. Apple thông báo thêm tiếng Pháp, Nhật, Hàn, Bồ Đào Nha và Tây Ban Nha trong tháng 10, danh sách này không có tiếng Việt. Máy tối thiểu là iPhone 15 Pro. Siri AI không khả dụng tại Trung Quốc và trên iPhone, iPad ở Liên minh châu Âu, còn Việt Nam không bị chặn theo khu vực, nhưng người dùng phải để máy dùng tiếng Anh mới có Siri AI."
  - q: "Vì sao Apple lại mở cửa cho đối thủ thay vì tự làm?"
    a: "Vì tốc độ. Xây một mô hình ngôn ngữ đứng ngang hàng với các mô hình đầu bảng tốn nhiều năm và rất nhiều hạ tầng tính toán, trong khi kỳ vọng của người dùng đã bị đẩy lên bởi những sản phẩm sẵn có. Kiến trúc cho phép hoán đổi mô hình giúp Apple giữ vai trò kiểm soát giao diện, quyền riêng tư và trải nghiệm, đồng thời thuê phần suy luận từ bên làm tốt nhất ở từng thời điểm."
  - q: "Người dùng phổ thông có phải trả thêm tiền không?"
    a: "Chưa có thông tin nào về mô hình chi phí. Với cơ chế hiện tại, extension ChatGPT dùng được ở mức miễn phí nhưng tài khoản trả phí cho hạn mức cao hơn. Nếu Apple mở cho nhiều nhà cung cấp, khả năng cao mô hình chi phí sẽ do từng bên đặt ra chứ không phải một khoản phí thống nhất của Apple. Đây là phần nên chờ công bố chính thức."
related:
  - { href: "/articles/siri-ai-tieng-viet-khi-nao-co-may-nao-dung-duoc-ios-27.html", cat: "Apple", title: "Siri AI có tiếng Việt không? Lộ trình và máy nào dùng được" }
  - { href: "/articles/ios-27-ra-mat-ngay-nao-iphone-nao-duoc-cap-nhat-2026.html", cat: "Apple", title: "iOS 27 ra mắt ngày nào, iPhone nào được cập nhật?" }
  - { href: "/articles/apple-afm-3-mo-hinh-ai-apple-hop-tac-google-gemini-2026.html", cat: "AI", title: "Apple AFM 3: mô hình AI mới, bắt tay Google Gemini" }
featured: true
---

Nhiều năm qua, câu chuyện Siri luôn xoay quanh một câu hỏi: bao giờ Apple đuổi kịp? Phát hiện trong mã nguồn iOS 27 và macOS Golden Gate do nhà phát triển pdfu công bố, được MacRumors đăng ngày 14/9, gợi ý rằng Apple có thể đã chọn một câu trả lời khác. Thay vì cố tự đuổi kịp, hãng dựng sẵn chỗ để cắm mô hình của người khác vào.

<div class="spec-box">
  <div class="spec-box-title">📋 Hai cơ chế tìm thấy trong mã nguồn</div>
  <table>
    <tr><td>Model Delegation</td><td>Cho extension bên thứ ba xuất hiện trong menu ngữ cảnh, xử lý yêu cầu ngôn ngữ tự nhiên</td></tr>
    <tr><td>Model Manager Services</td><td>Chứa giao thức Inference Provider, thay mô hình Siri phía máy chủ</td></tr>
    <tr><td>Mô hình trong bản demo</td><td>Claude của Anthropic và GPT-5.6 Terra của OpenAI</td></tr>
    <tr><td>Trạng thái</td><td>Có trong code, chưa bật, chưa cấp quyền cho nhà phát triển ngoài</td></tr>
    <tr><td>Apple xác nhận</td><td>Chưa. Trang hỗ trợ của Apple chỉ nêu extension ChatGPT</td></tr>
    <tr><td>Tin đồn trước đó</td><td>Bloomberg tháng 3/2026: Apple định mở Siri cho Gemini và Claude</td></tr>
    <tr><td>Nguồn phát hiện</td><td>Nhà phát triển pdfu, MacRumors đăng ngày 14/9/2026</td></tr>
  </table>
</div>

Trước khi đi tiếp, cần đặt đúng mức độ tin cậy cho thông tin này. Đây là phát hiện từ việc đọc mã nguồn hệ điều hành, không phải công bố của Apple. Hạ tầng nằm trong code là bằng chứng mạnh về hướng kỹ thuật nhưng không phải cam kết ra mắt. Apple từng dựng sẵn nhiều khung nền rồi để đó nhiều năm, hoặc bỏ hẳn.

Để tách bạch, đây là những gì Apple đã xác nhận chính thức: Siri AI được giới thiệu trên Apple Newsroom tại WWDC ngày 8/6/2026 và phát hành cùng iOS 27 ngày 14/9; trang hỗ trợ của Apple hướng dẫn bật extension ChatGPT cho Siri; Siri AI chưa có ở Trung Quốc và trên iPhone, iPad tại Liên minh châu Âu. Còn những gì chưa được xác nhận: khả năng chọn Claude, Gemini hay mô hình khác cho Siri đến từ tin của Mark Gurman (Bloomberg, tháng 3/2026) và từ mã nguồn mà pdfu tìm ra. Theo The Next Web, hệ thống extension cho bên thứ ba không xuất hiện trong bất kỳ slide, bản demo hay thông cáo nào ở keynote WWDC 2026.

## Hai cơ chế, hai mức độ can thiệp

Điều khiến phát hiện này đáng chú ý là Apple không làm một đường mà làm hai, ở hai độ sâu khác nhau.

Model Delegation là lớp nông hơn. Nó cho phép một extension, ví dụ Claude, xuất hiện trong menu "Ask..." của Siri theo đúng luồng mà extension ChatGPT tích hợp sẵn đang dùng. Trong bản demo, khi được nhờ đặt một lời nhắc, Claude hiểu yêu cầu rồi chuyển lại cho Siri để tạo mục trong ứng dụng Lời nhắc. Người dùng vẫn ở trong giao diện quen thuộc của iOS, chỉ phần hiểu và thực thi là do mô hình bên ngoài đảm nhận.

<figure>
  <img decoding="async" src="https://i.ytimg.com/vi/il15TWJrfGQ/maxresdefault.jpg" alt="Siri thao tac lien ung dung tren ban thu nghiem iOS 27" loading="lazy" width="1280" height="720">
  <figcaption>Siri thao tác liên ứng dụng khá tốt trên bản thử nghiệm, phần suy luận vẫn là điểm yếu. Nguồn: YouTube</figcaption>
</figure>

Model Manager Services là lớp sâu hơn nhiều. Bên trong nó có một giao thức tên Inference Provider, và theo mô tả của MacRumors, giao thức này cho mô hình bên ngoài nhận lời nhắc lập kế hoạch và danh sách công cụ của Siri, rồi thay thế mô hình Siri chạy trên máy chủ của Apple. pdfu minh họa bằng cách cắm GPT-5.6 Terra vào vị trí đó. Đây không còn là chuyện gọi hộ một câu hỏi khó, mà là đổi phần suy luận nằm ở trung tâm trải nghiệm.

## Vì sao Apple lại làm như vậy

Cách dễ hiểu nhất là nhìn Siri như một chiếc xe. Apple muốn giữ khung xe, bảng điều khiển, cảm giác lái và các cam kết về quyền riêng tư, tức là mọi thứ người dùng nhìn thấy và cảm nhận. Phần động cơ thì có thể thay bằng loại tốt nhất ở từng thời điểm, và không nhất thiết phải do chính hãng sản xuất.

<figure>
  <img decoding="async" src="https://i.ytimg.com/vi/A9G3s8Qeu_8/maxresdefault.jpg" alt="Google va Anthropic dinh vi khac nhau cho mo hinh AI dau bang" loading="lazy" width="1280" height="720">
  <figcaption>Mỗi nhà cung cấp mô hình mạnh ở một nhóm tác vụ khác nhau, kiến trúc hoán đổi cho phép tận dụng điều đó. Nguồn: YouTube</figcaption>
</figure>

Lựa chọn này hợp lý về mặt kinh doanh. Chi phí và thời gian để xây một mô hình đứng ngang các mô hình đầu bảng là rất lớn, trong khi kỳ vọng của người dùng đã bị đẩy lên bởi những sản phẩm họ dùng hằng ngày trên chính chiếc iPhone. Một kiến trúc cho phép hoán đổi giúp Apple không bị khóa vào một đối tác duy nhất, đồng thời tạo đòn bẩy thương lượng với cả OpenAI, Anthropic lẫn Google. Bước đi này cũng nối tiếp việc Apple bắt tay Google cho phần mô hình nền, được ghi lại trong bài về [mô hình AFM 3 của Apple và hợp tác với Google Gemini](/articles/apple-afm-3-mo-hinh-ai-apple-hop-tac-google-gemini-2026.html).

<div class="art-video-label">VIDEO · iOS 27 và bản Siri được xây lại</div>
<div class="art-video-wrap">
  <iframe src="https://www.youtube.com/embed/cGqkdR0Z2WQ" title="Tong quan iOS 27 va ban Siri duoc xay lai cung danh sach may ho tro" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>
<p class="art-video-caption">Tổng quan iOS 27 và bản Siri được xây lại, kèm danh sách máy được hỗ trợ. Nguồn: YouTube</p>

## Chuyện này đổi gì cho người dùng iPhone tại Việt Nam

Đây là phần đáng quan tâm nhất và cũng dễ bị nói quá nhất, nên hãy tách thành ba điều cụ thể.

**Thứ nhất, Siri AI hiện chưa nói tiếng Việt.** Apple Intelligence đã có tiếng Việt từ iOS 26.1, nhưng Siri AI mới trong iOS 27 chỉ có tiếng Anh khi ra mắt ngày 14/9, và đợt mở rộng tháng 10 gồm tiếng Pháp, Nhật, Hàn, Bồ Đào Nha, Tây Ban Nha, không có tiếng Việt. Theo hướng dẫn của Tuổi Trẻ, người dùng Việt muốn thử Siri AI phải chuyển máy sang tiếng Anh. Vì vậy, dù Apple có mở cho mô hình bên thứ ba, người dùng trong nước chưa chắc hưởng lợi ngay.

**Thứ hai, nếu có tiếng Việt, chất lượng có thể là bên hưởng lợi rõ nhất.** Trợ lý ảo xử lý tiếng Việt kém là than phiền quen thuộc của người dùng trong nước suốt nhiều năm. Các mô hình ngôn ngữ lớn hiện nay xử lý tiếng Việt tốt hơn đáng kể so với thế hệ trợ lý ảo cũ, đặc biệt ở câu dài, câu có ngữ cảnh và yêu cầu nhiều bước. Nếu người dùng được chọn mô hình xử lý, khoảng cách đó có thể thu hẹp nhanh hơn là chờ Apple tự cải thiện.

Về khu vực, Siri AI không khả dụng tại Trung Quốc và trên iPhone, iPad ở Liên minh châu Âu do vướng quy định địa phương. Việt Nam không thuộc nhóm bị chặn theo khu vực, rào cản với người dùng trong nước hiện là ngôn ngữ. Chi phí cũng là chuyện cần tính trước: mã nguồn chưa cho biết có cần tài khoản trả phí của bên thứ ba hay không, nhưng nếu cần thì gói Claude Pro hiện giá 20 USD mỗi tháng theo trang giá của Anthropic, tức khoảng 523.000 đồng theo tỷ giá bán Vietcombank ngày 28/9/2026 (26.170 đồng/USD), chưa tính phí giao dịch ngoại tệ của thẻ. Danh sách máy tương thích và lộ trình từng tính năng nằm trong bài [Siri AI có tiếng Việt không và máy nào dùng được](/articles/siri-ai-tieng-viet-khi-nao-co-may-nao-dung-duoc-ios-27.html).

<figure>
  <img decoding="async" src="https://i.ytimg.com/vi/nTciOowmIE0/maxresdefault.jpg" alt="Trai nghiem thuc te Siri AI tren iOS 27" loading="lazy" width="1280" height="720">
  <figcaption>Trải nghiệm thực tế Siri AI trên iOS 27, phần hiểu ngữ cảnh đã khá hơn rõ rệt. Nguồn: YouTube</figcaption>
</figure>

**Thứ ba, câu hỏi dữ liệu chưa có lời đáp.** Khi phần suy luận chạy trên máy chủ của bên thứ ba, nội dung yêu cầu buộc phải rời khỏi hạ tầng Apple. Apple xây dựng phần lớn thông điệp thương hiệu quanh quyền riêng tư, nên cách hãng xử lý mâu thuẫn này sẽ quyết định tính năng có thực sự ra mắt hay không. Ở thời điểm hiện tại chưa có tài liệu nào mô tả cơ chế đó, và mọi phán đoán đều là suy diễn.

## Nên theo dõi tiếp điều gì

Có vài mốc đáng để ý trong các bản cập nhật tới. Mốc thứ nhất là Apple có cấp quyền model delegation cho nhà phát triển bên ngoài hay không, vì đó là dấu hiệu rõ nhất cho thấy tính năng chuyển từ nội bộ sang thực tế. Mốc thứ hai là danh sách nhà cung cấp, đối chiếu với tin của Bloomberg hồi tháng 3 về Gemini và Claude bên cạnh ChatGPT. Mốc thứ ba là ngày Siri AI có tiếng Việt, điều quyết định người dùng trong nước có dùng được hay không. Cuối cùng là chính sách dữ liệu đi kèm. Tính tới cuối tháng 9/2026 chưa mốc nào thành hiện thực, nên nếu đọc bài sau thời điểm đó, hãy kiểm lại trong phần Cài đặt, Apple Intelligence và Siri trên máy.

Nhìn rộng hơn, hướng đi này khớp với thái độ thận trọng mà Apple thể hiện suốt năm nay: hãng không chạy đua tuyên bố, nhưng phần hạ tầng bên dưới thì được chuẩn bị kỹ hơn nhiều so với những gì công bố ra ngoài. Với người dùng đang cân nhắc cập nhật, lịch phát hành và danh sách máy tương thích nằm ở bài [iOS 27 ra mắt ngày nào, iPhone nào được cập nhật](/articles/ios-27-ra-mat-ngay-nao-iphone-nao-duoc-cap-nhat-2026.html).

<div class="art-callout">
  💡 <strong>Tóm lại:</strong> Theo mã nguồn, hạ tầng cho phép thay mô hình Siri bằng Claude hoặc GPT đã nằm trong iOS 27, nhưng Apple chưa công bố, chưa bật và chưa có lịch. Siri AI cũng chưa có tiếng Việt. Với người dùng Việt, giá trị lớn nhất nếu tính năng ra mắt là chất lượng xử lý tiếng Việt, còn câu hỏi dữ liệu đi đâu thì vẫn để ngỏ. Đây là tin đáng theo dõi chứ chưa phải thứ để trông đợi trong bản cập nhật kế tiếp.
</div>
