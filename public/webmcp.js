/* WebMCP cho TechVision - cho AI agent trong trình duyệt gọi thẳng "công cụ" của trang
 * thay vì phải đọc DOM rồi đoán (chuẩn https://github.com/webmachinelearning/webmcp).
 *
 * Trình duyệt chưa hỗ trợ thì file này không làm gì cả. Tới 09/2026 mới có Chrome 149
 * (Origin Trial, hoặc bật about:flags#enable-webmcp-testing), Edge 150 và ChatGPT Desktop.
 *
 * Giữ ít công cụ, đều CHỈ ĐỌC (readOnlyHint): agent tốn token cho mỗi công cụ được khai,
 * và site tin tức không có hành động nào cần agent thay người bấm.
 * Nhúng: <script defer src="/webmcp.js"></script>
 */
(function () {
  var mc = document.modelContext || navigator.modelContext;
  if (!mc || typeof mc.registerTool !== 'function' || window.__tvWebMCP) return;
  window.__tvWebMCP = 1;

  var ORIGIN = location.origin;
  var index = null;

  function fold(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd'); }
  function text(s) { return { content: [{ type: 'text', text: s }] }; }
  function clampN(n, def, max) { n = parseInt(n, 10); return n > 0 ? Math.min(n, max) : def; }

  function loadIndex() {
    if (index) return Promise.resolve(index);
    return fetch('/chat-index.json').then(function (r) { return r.json(); }).then(function (j) {
      j.forEach(function (a) { a._ft = fold(a.t); a._f = a._ft + ' ' + fold(a.d + ' ' + a.c); });
      return (index = j);
    });
  }

  function fmt(list) {
    if (!list.length) return 'Không có bài nào khớp.';
    return list.map(function (a, i) {
      return (i + 1) + '. ' + a.t + ' (' + a.c + ', ' + a.dt + ')\n   ' + ORIGIN + a.u + '\n   ' + a.d;
    }).join('\n');
  }

  // Cùng cách chấm điểm với trợ lý ảo /chat-widget.js: trọng số IDF, khớp tiêu đề nhân 3
  function search(q, n) {
    var toks = fold(q).split(/[^a-z0-9]+/).filter(function (t) { return t.length > 1; });
    if (!toks.length) return [];
    var N = index.length;
    var w = toks.map(function (t) {
      var df = 0;
      for (var i = 0; i < N; i++) if (index[i]._f.indexOf(t) >= 0) df++;
      var idf = Math.log((N + 1) / (df + 1)) + 0.05;
      return idf * idf;
    });
    return index.map(function (a) {
      var s = 0;
      toks.forEach(function (t, i) { if (a._f.indexOf(t) >= 0) s += w[i] * (a._ft.indexOf(t) >= 0 ? 3 : 1); });
      return [s, a];
    }).filter(function (x) { return x[0] > 0.8; })
      .sort(function (x, y) { return y[0] - x[0] || (y[1].dt || '').localeCompare(x[1].dt || ''); })
      .slice(0, n).map(function (x) { return x[1]; });
  }

  var RO = { readOnlyHint: true };
  var tools = [
    {
      name: 'search_articles',
      description: 'Tìm bài viết trên TechVision (tin công nghệ và giá sản phẩm tại Việt Nam) theo từ khóa, ví dụ "giá Z Fold 8", "sale 10/10", "iPhone 17". Trả về tiêu đề, chuyên mục, ngày, đường dẫn và mô tả ngắn.',
      inputSchema: {
        type: 'object',
        properties: {
          query: { type: 'string', description: 'Từ khóa hoặc câu hỏi của người dùng, tiếng Việt có dấu hoặc không dấu.' },
          limit: { type: 'number', description: 'Số bài tối đa, 1 tới 10. Mặc định 5.' }
        },
        required: ['query']
      },
      annotations: RO,
      execute: function (args) {
        return loadIndex().then(function () {
          return text(fmt(search(args.query, clampN(args.limit, 5, 10))));
        });
      }
    },
    {
      name: 'get_latest_articles',
      description: 'Lấy các bài mới đăng gần nhất trên TechVision, có thể lọc theo chuyên mục như "Smartphone", "Apple", "Laptop", "AI".',
      inputSchema: {
        type: 'object',
        properties: {
          category: { type: 'string', description: 'Tên chuyên mục, bỏ trống để lấy mọi chuyên mục.' },
          limit: { type: 'number', description: 'Số bài tối đa, 1 tới 10. Mặc định 5.' }
        }
      },
      annotations: RO,
      execute: function (args) {
        return loadIndex().then(function () {
          var c = fold(args.category);
          var list = index.filter(function (a) { return !c || fold(a.c).indexOf(c) >= 0; })
            .sort(function (x, y) { return (y.dt || '').localeCompare(x.dt || ''); });
          return text(fmt(list.slice(0, clampN(args.limit, 5, 10))));
        });
      }
    }
  ];

  // Công cụ đọc bài chỉ khai trên trang bài viết, trang khác không có gì để đọc
  if (/^\/articles\/[\w-]+\.html$/.test(location.pathname)) {
    tools.push({
      name: 'read_current_article',
      description: 'Đọc nội dung chính của bài TechVision đang mở: tiêu đề, ngày cập nhật, tóm tắt, các bảng giá và thông số, câu hỏi thường gặp. Dùng khi người dùng hỏi về bài đang xem.',
      inputSchema: { type: 'object', properties: {} },
      annotations: { readOnlyHint: true, untrustedContentHint: false },
      execute: function () {
        var q = function (s) { var e = document.querySelector(s); return e ? e.textContent.replace(/\s+/g, ' ').trim() : ''; };
        var meta = function (p) { var e = document.querySelector('meta[property="' + p + '"],meta[name="' + p + '"]'); return e ? e.content : ''; };
        var out = ['Tiêu đề: ' + q('h1'), 'Đường dẫn: ' + location.href];
        var mod = meta('article:modified_time');
        if (mod) out.push('Cập nhật: ' + mod.slice(0, 10));
        var tldr = q('.art-tldr').replace(/^Tóm tắt nhanh\s*/, '') || meta('description');
        if (tldr) out.push('Tóm tắt: ' + tldr);
        document.querySelectorAll('.spec-box').forEach(function (box) {
          var title = box.querySelector('.spec-box-title');
          var rows = [].map.call(box.querySelectorAll('tr'), function (tr) {
            return [].map.call(tr.children, function (td) { return td.textContent.replace(/\s+/g, ' ').trim(); }).join(' | ');
          });
          out.push('\n' + (title ? title.textContent.trim() : 'Bảng') + '\n' + rows.join('\n'));
        });
        var faq = document.querySelectorAll('.faq-item');
        if (faq.length) {
          out.push('\nHỏi đáp:');
          faq.forEach(function (it) {
            var qEl = it.querySelector('.faq-q'), aEl = it.querySelector('.faq-a');
            if (!qEl || !aEl) return;
            out.push('- ' + qEl.textContent.replace('+', '').replace(/\s+/g, ' ').trim() + ': ' + aEl.textContent.replace(/\s+/g, ' ').trim());
          });
        }
        return text(out.join('\n').slice(0, 12000));
      }
    });
  }

  tools.forEach(function (t) {
    try {
      var p = mc.registerTool(t);
      if (p && p.catch) p.catch(function () { /* bị Permissions-Policy chặn thì thôi */ });
    } catch (e) { /* bản cài đặt thử nghiệm khác chữ ký thì bỏ qua, không làm vỡ trang */ }
  });
})();
