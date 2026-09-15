---
slug: "siri-doi-bo-nao-sang-claude-chatgpt-ios-27-lo-ma-nguon"
title: "Siri sắp cho đổi bộ não sang Claude hoặc ChatGPT"
description: "Mã trong iOS 27 lộ hai cơ chế cho phép thay mô hình Siri bằng Claude hay GPT-5.6. Chưa bật cho người dùng, và người Việt cần chú ý điều gì."
keywords: "siri claude, siri chatgpt, ios 27 siri, apple ai bên thứ ba, model delegation apple, siri ai tiếng việt, thay mô hình siri, apple intelligence 2026"
category: "Apple"
type: "tin-tuc"
datePublished: "2026-10-02T09:00:00+07:00"
dateModified: "2026-10-02T09:00:00+07:00"
noindex: true
scheduled: true
deck: "Trong mã nguồn iOS 27 và macOS 27, giới nghiên cứu tìm thấy hai lớp hạ tầng cho phép một mô hình bên ngoài như Claude hoặc GPT-5.6 chen vào đúng vị trí mà mô hình của Apple đang đứng. Không phải một tính năng bổ sung kiểu hỏi thêm ChatGPT như hiện nay, mà là thay hẳn phần suy luận phía máy chủ. Tính năng chưa được bật cho ai, nhưng hướng đi thì đã hiện rõ trong code."
heroImage: "https://i.ytimg.com/vi/V2_Wr47gVQ8/maxresdefault.jpg"
heroAlt: "Siri tren iOS 27 co the doi sang mo hinh AI ben thu ba nhu Claude hoac ChatGPT"
heroCaption: "Hạ tầng cho mô hình bên thứ ba đã nằm sẵn trong iOS 27 nhưng chưa được Apple bật. Ảnh minh họa từ YouTube"
ogImage: "https://techvision.click/uploads/og-article/siri-doi-bo-nao-sang-claude-chatgpt-ios-27-lo-ma-nguon.jpg"
tldr: "Ngày <strong>14/9/2026</strong>, các trang chuyên về Apple công bố phát hiện trong mã nguồn iOS 27 và macOS 27: Apple đã dựng sẵn hạ tầng cho mô hình AI bên thứ ba thay thế phần suy luận của Siri. Có <strong>hai cơ chế riêng biệt</strong>. <strong>Model Delegation</strong> cho phép một extension như Claude xuất hiện trong menu ngữ cảnh và xử lý yêu cầu ngôn ngữ tự nhiên. <strong>Model Manager Services</strong> chứa giao thức Inference Provider, có thể thay thẳng mô hình Siri phía máy chủ của Apple bằng lựa chọn khác, trong code nhắc tới <strong>GPT-5.6 Terra</strong>. Hiện chưa có gì hiển thị với người dùng, menu hỏi thêm mới chỉ liệt kê extension ChatGPT tích hợp sẵn và Apple chưa cấp quyền cho nhà phát triển bên ngoài. Từ tháng 3/2026, Mark Gurman của Bloomberg đã đưa tin Apple dự kiến có ít nhất ba nhà cung cấp gồm <strong>Google Gemini, Anthropic Claude và ChatGPT</strong>."
tags: ["Siri", "Apple", "Claude", "ChatGPT", "iOS27", "2026"]
about: ["Siri", "Apple Intelligence", "Anthropic Claude", "OpenAI ChatGPT"]
authorBio: "Founder LongTechVision. Theo dõi tin công nghệ quốc tế và quy đổi ra bối cảnh sử dụng tại Việt Nam."
sourceUrl: "https://www.macrumors.com/2026/09/14/siri-can-be-swapped-out-for-chatgpt-claude/"
sourceName: "MacRumors và AppleInsider, 14/9/2026"
sourceDomains: "macrumors.com · appleinsider.com · neowin.net · bloomberg.com"
stats:
  - { num: "2 cơ chế", label: "Model Delegation và Model Manager Services, hai lớp hạ tầng tìm thấy trong mã nguồn" }
  - { num: "14/9/2026", label: "Ngày phát hiện được công bố trên MacRumors và AppleInsider" }
  - { num: "3 nhà cung cấp", label: "Số đối tác AI Apple dự kiến có khi mở tính năng, theo tin của Bloomberg tháng 3/2026" }
  - { num: "0 quyền", label: "Số nhà phát triển bên ngoài hiện được Apple cấp quyền model delegation" }
  - { num: "iOS 27", label: "Phiên bản hệ điều hành chứa phần hạ tầng nói trên" }
  - { num: "GPT-5.6 Terra", label: "Tên mô hình được nhắc tới trong phần giao thức Inference Provider" }
faq:
  - q: "Người dùng iPhone đã đổi được Siri sang Claude chưa?"
    a: "Chưa. Đây mới là phần hạ tầng nằm trong mã nguồn, không phải tính năng đã bật. Menu hỏi thêm trong iOS hiện chỉ liệt kê extension ChatGPT mà Apple tích hợp sẵn, và Apple chưa cấp quyền model delegation cho bất kỳ nhà phát triển bên ngoài nào. Việc code có sẵn không bảo đảm tính năng sẽ ra mắt, cũng không cho biết thời điểm."
  - q: "Khác gì so với việc Siri hỏi thêm ChatGPT hiện nay?"
    a: "Khác về độ sâu. Cơ chế hiện nay là Siri nhận ra câu hỏi nằm ngoài khả năng của mình rồi chuyển tiếp sang ChatGPT, và bạn thấy rõ ranh giới đó. Hai cơ chế mới đi xa hơn: Model Delegation cho phép mô hình bên ngoài trực tiếp xử lý các yêu cầu ngôn ngữ tự nhiên như đặt nhắc nhở, còn giao thức Inference Provider có thể thay thẳng mô hình phía máy chủ mà Siri đang dùng. Nói cách khác, không phải gọi hộ mà là đổi động cơ."
  - q: "Nếu đổi sang Claude hay GPT thì dữ liệu của tôi đi đâu?"
    a: "Đó chính là câu hỏi Apple sẽ phải trả lời trước khi bật tính năng. Khi phần suy luận chạy trên máy chủ của bên thứ ba, nội dung yêu cầu phải rời khỏi hạ tầng Apple. Hiện chưa có tài liệu nào mô tả cách Apple xử lý phần này, nên mọi phán đoán về mức độ riêng tư đều là suy diễn. Người dùng quan tâm tới quyền riêng tư nên chờ chính sách công bố chính thức thay vì kết luận sớm theo hướng nào."
  - q: "Siri AI đã có tiếng Việt chưa và máy nào dùng được?"
    a: "Apple Intelligence đã hỗ trợ tiếng Việt, còn phiên bản Siri được xây lại đi cùng iOS 27 trong mùa thu 2026. Danh sách máy tương thích và lộ trình từng tính năng khác nhau giữa các thị trường, chi tiết nằm trong bài riêng về Siri AI tiếng Việt trên trang. Điểm đáng chú ý là Siri AI không khả dụng tại Liên minh châu Âu và Trung Quốc khi ra mắt vì vướng quy định, còn Việt Nam không thuộc nhóm bị hạn chế đó."
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

Nhiều năm qua, câu chuyện Siri luôn xoay quanh một câu hỏi: bao giờ Apple đuổi kịp? Phát hiện trong mã nguồn iOS 27 và macOS 27 được công bố ngày 14/9 gợi ý rằng Apple có thể đã chọn một câu trả lời khác. Thay vì cố tự đuổi kịp, hãng dựng sẵn chỗ để cắm mô hình của người khác vào.

<div class="spec-box">
  <div class="spec-box-title">📋 Hai cơ chế tìm thấy trong mã nguồn</div>
  <table>
    <tr><td>Model Delegation</td><td>Cho extension bên thứ ba xuất hiện trong menu ngữ cảnh, xử lý yêu cầu ngôn ngữ tự nhiên</td></tr>
    <tr><td>Model Manager Services</td><td>Chứa giao thức Inference Provider, thay mô hình Siri phía máy chủ</td></tr>
    <tr><td>Tên được nhắc tới</td><td>Claude của Anthropic và GPT-5.6 Terra của OpenAI</td></tr>
    <tr><td>Trạng thái</td><td>Có trong code, chưa bật, chưa cấp quyền cho nhà phát triển ngoài</td></tr>
    <tr><td>Tin trước đó</td><td>Bloomberg tháng 3/2026 nói Apple nhắm ít nhất ba nhà cung cấp</td></tr>
    <tr><td>Nguồn phát hiện</td><td>MacRumors, AppleInsider và Neowin, ngày 14/9/2026</td></tr>
  </table>
</div>

Trước khi đi tiếp, cần đặt đúng mức độ tin cậy cho thông tin này. Đây là phát hiện từ việc đọc mã nguồn hệ điều hành, không phải công bố của Apple. Hạ tầng nằm trong code là bằng chứng mạnh về hướng kỹ thuật nhưng không phải cam kết ra mắt. Apple từng dựng sẵn nhiều khung nền rồi để đó nhiều năm, hoặc bỏ hẳn.

## Hai cơ chế, hai mức độ can thiệp

Điều khiến phát hiện này đáng chú ý là Apple không làm một đường mà làm hai, ở hai độ sâu khác nhau.

Model Delegation là lớp nông hơn. Nó cho phép một extension, ví dụ Claude, xuất hiện ngay trong menu ngữ cảnh của hệ thống và nhận xử lý các yêu cầu diễn đạt bằng ngôn ngữ tự nhiên, chẳng hạn đặt một lời nhắc. Người dùng vẫn ở trong giao diện quen thuộc của iOS, chỉ phần hiểu và thực thi là do mô hình bên ngoài đảm nhận.

<figure>
  <img decoding="async" src="https://i.ytimg.com/vi/il15TWJrfGQ/maxresdefault.jpg" alt="Siri thao tac lien ung dung tren ban thu nghiem iOS 27" loading="lazy" width="1280" height="720">
  <figcaption>Siri thao tác liên ứng dụng khá tốt trên bản thử nghiệm, phần suy luận vẫn là điểm yếu. Nguồn: YouTube</figcaption>
</figure>

Model Manager Services là lớp sâu hơn nhiều. Bên trong nó có một giao thức tên Inference Provider, và theo mô tả của các trang phát hiện, giao thức này có thể thay thế mô hình Siri chạy trên máy chủ của Apple bằng một lựa chọn khác, trong đó code nhắc trực tiếp tới GPT-5.6 Terra. Đây không còn là chuyện gọi hộ một câu hỏi khó, mà là đổi phần suy luận nằm ở trung tâm trải nghiệm.

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

**Thứ nhất, chất lượng tiếng Việt có thể là bên hưởng lợi rõ nhất.** Trợ lý ảo xử lý tiếng Việt kém là than phiền quen thuộc của người dùng trong nước suốt nhiều năm. Các mô hình ngôn ngữ lớn hiện nay xử lý tiếng Việt tốt hơn đáng kể so với thế hệ trợ lý ảo cũ, đặc biệt ở câu dài, câu có ngữ cảnh và yêu cầu nhiều bước. Nếu người dùng được chọn mô hình xử lý, khoảng cách đó có thể thu hẹp nhanh hơn là chờ Apple tự cải thiện.

**Thứ hai, Việt Nam không nằm trong nhóm bị hạn chế.** Siri AI không khả dụng tại Liên minh châu Âu và Trung Quốc khi ra mắt do vướng quy định địa phương. Việt Nam không thuộc nhóm đó, nghĩa là người dùng trong nước nhận tính năng theo lịch chung của Apple. Danh sách máy tương thích và lộ trình từng tính năng nằm trong bài [Siri AI có tiếng Việt không và máy nào dùng được](/articles/siri-ai-tieng-viet-khi-nao-co-may-nao-dung-duoc-ios-27.html).

<figure>
  <img decoding="async" src="https://i.ytimg.com/vi/nTciOowmIE0/maxresdefault.jpg" alt="Trai nghiem thuc te Siri AI tren iOS 27" loading="lazy" width="1280" height="720">
  <figcaption>Trải nghiệm thực tế Siri AI trên iOS 27, phần hiểu ngữ cảnh đã khá hơn rõ rệt. Nguồn: YouTube</figcaption>
</figure>

**Thứ ba, câu hỏi dữ liệu chưa có lời đáp.** Khi phần suy luận chạy trên máy chủ của bên thứ ba, nội dung yêu cầu buộc phải rời khỏi hạ tầng Apple. Apple xây dựng phần lớn thông điệp thương hiệu quanh quyền riêng tư, nên cách hãng xử lý mâu thuẫn này sẽ quyết định tính năng có thực sự ra mắt hay không. Ở thời điểm hiện tại chưa có tài liệu nào mô tả cơ chế đó, và mọi phán đoán đều là suy diễn.

## Nên theo dõi tiếp điều gì

Có ba mốc đáng để ý trong các bản cập nhật tới. Mốc thứ nhất là Apple có cấp quyền model delegation cho nhà phát triển bên ngoài hay không, vì đó là dấu hiệu rõ nhất cho thấy tính năng chuyển từ nội bộ sang thực tế. Mốc thứ hai là danh sách nhà cung cấp, đối chiếu với tin của Bloomberg hồi tháng 3 về ba cái tên Gemini, Claude và ChatGPT. Mốc thứ ba là chính sách dữ liệu đi kèm.

Nhìn rộng hơn, hướng đi này khớp với thái độ thận trọng mà Apple thể hiện suốt năm nay: hãng không chạy đua tuyên bố, nhưng phần hạ tầng bên dưới thì được chuẩn bị kỹ hơn nhiều so với những gì công bố ra ngoài. Với người dùng đang cân nhắc cập nhật, lịch phát hành và danh sách máy tương thích nằm ở bài [iOS 27 ra mắt ngày nào, iPhone nào được cập nhật](/articles/ios-27-ra-mat-ngay-nao-iphone-nao-duoc-cap-nhat-2026.html).

<div class="art-callout">
  💡 <strong>Tóm lại:</strong> Hạ tầng cho phép thay mô hình Siri bằng Claude hoặc GPT đã nằm trong iOS 27, nhưng chưa bật và chưa có lịch. Với người dùng Việt, giá trị lớn nhất nếu tính năng ra mắt là chất lượng xử lý tiếng Việt, còn câu hỏi dữ liệu đi đâu thì vẫn để ngỏ. Đây là tin đáng theo dõi chứ chưa phải thứ để trông đợi trong bản cập nhật kế tiếp.
</div>
