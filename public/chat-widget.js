/* Trợ lý ảo TechVision — widget chat nổi, tự chứa (CSS + logic).
 * 2 chế độ: AI (qua /api/chat, cần GROQ_API_KEY trên Vercel) và
 * fallback tìm bài client-side trên /chat-index.json (không cần key).
 * Nhúng: <script defer src="/chat-widget.js"></script>
 */
(function () {
  if (window.__tvChat) return; window.__tvChat = 1;

  var css = ''
    + '.tvc-bubble{position:fixed;bottom:5.2rem;left:2rem;z-index:640;width:2.9rem;height:2.9rem;border-radius:50%;border:1px solid rgba(0,0,0,0.12);background:#c0392b;color:#fff;font-size:1.25rem;cursor:pointer;box-shadow:0 8px 24px -10px rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;transition:transform .15s}'
    + '.tvc-bubble:hover{transform:scale(1.08)}'
    + '.tvc-bubble:active{transform:scale(0.95)}'
    + '.tvc-panel{position:fixed;bottom:8.6rem;left:2rem;z-index:650;width:min(360px,calc(100vw - 2rem));max-height:min(520px,70vh);background:#fff;border:1px solid rgba(0,0,0,0.12);border-radius:14px;box-shadow:0 18px 50px -20px rgba(0,0,0,0.45);display:none;flex-direction:column;overflow:hidden;font-family:-apple-system,"Segoe UI",Roboto,"Be Vietnam Pro",sans-serif}'
    + '.tvc-panel.open{display:flex}'
    + '.tvc-head{padding:0.75rem 1rem;background:#c0392b;color:#fff;font-weight:700;font-size:0.9rem;display:flex;justify-content:space-between;align-items:center}'
    + '.tvc-head small{font-weight:400;opacity:0.85;display:block;font-size:0.68rem;margin-top:1px}'
    + '.tvc-x{background:none;border:none;color:#fff;font-size:1.1rem;cursor:pointer;padding:0 0.2rem}'
    + '.tvc-msgs{flex:1;overflow-y:auto;padding:0.9rem;display:flex;flex-direction:column;gap:0.55rem;background:#faf8f4}'
    + '.tvc-m{max-width:88%;padding:0.55rem 0.8rem;border-radius:12px;font-size:0.84rem;line-height:1.55;white-space:pre-wrap;word-wrap:break-word}'
    + '.tvc-m.u{align-self:flex-end;background:#c0392b;color:#fff;border-bottom-right-radius:4px}'
    + '.tvc-m.b{align-self:flex-start;background:#fff;border:1px solid rgba(0,0,0,0.08);border-bottom-left-radius:4px;color:#221f1c}'
    + '.tvc-m.b a{color:#c0392b;font-weight:600;text-decoration:underline}'
    + '.tvc-m.b .tvc-src{display:block;margin-top:0.35rem;font-size:0.78rem}'
    + '.tvc-form{display:flex;gap:0.5rem;padding:0.65rem;border-top:1px solid rgba(0,0,0,0.08);background:#fff}'
    + '.tvc-form input{flex:1;border:1px solid rgba(0,0,0,0.15);border-radius:9px;padding:0.55rem 0.75rem;font-size:0.85rem;outline:none}'
    + '.tvc-form input:focus{border-color:#c0392b}'
    + '.tvc-form button{border:none;background:#c0392b;color:#fff;border-radius:9px;padding:0 0.9rem;font-size:0.95rem;cursor:pointer}'
    + '.tvc-note{font-size:0.62rem;color:#8a8580;text-align:center;padding:0 0.6rem 0.5rem;background:#fff}'
    + '.tvc-chips{display:flex;flex-wrap:wrap;gap:0.35rem;padding:0 0.9rem 0.6rem;background:#faf8f4}'
    + '.tvc-chip{border:1px solid rgba(192,57,43,0.4);color:#c0392b;background:#fff;border-radius:99px;font-size:0.7rem;padding:0.28rem 0.65rem;cursor:pointer}'
    + 'body.dark .tvc-panel{background:#1c1b1a;border-color:rgba(255,255,255,0.12)}'
    + 'body.dark .tvc-msgs{background:#171615}'
    + 'body.dark .tvc-m.b{background:#242220;border-color:rgba(255,255,255,0.09);color:#eae6e0}'
    + 'body.dark .tvc-form{background:#1c1b1a;border-color:rgba(255,255,255,0.1)}'
    + 'body.dark .tvc-form input{background:#242220;border-color:rgba(255,255,255,0.15);color:#eae6e0}'
    + 'body.dark .tvc-note{background:#1c1b1a}'
    + 'body.dark .tvc-chip{background:#242220}'
    + '@media(max-width:640px){.tvc-bubble{left:1rem;bottom:5rem}.tvc-panel{left:0.5rem;right:0.5rem;bottom:8.2rem;width:auto}}'
    + '@media print{.tvc-bubble,.tvc-panel{display:none!important}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var bubble = document.createElement('button');
  bubble.className = 'tvc-bubble'; bubble.setAttribute('aria-label', 'Trợ lý ảo TechVision'); bubble.textContent = '💬';
  var panel = document.createElement('div');
  panel.className = 'tvc-panel';
  panel.innerHTML = ''
    + '<div class="tvc-head"><div>Trợ lý TechVision<small id="tvcMode">đang khởi động...</small></div><button class="tvc-x" aria-label="Đóng">×</button></div>'
    + '<div class="tvc-msgs" id="tvcMsgs"></div>'
    + '<div class="tvc-chips" id="tvcChips"></div>'
    + '<form class="tvc-form" id="tvcForm"><input id="tvcIn" type="text" maxlength="300" placeholder="Hỏi về công nghệ, tìm bài viết..." autocomplete="off"><button type="submit" aria-label="Gửi">➤</button></form>'
    + '<div class="tvc-note">Trợ lý có thể nhầm lẫn - hãy kiểm tra lại trong bài viết gốc.</div>';
  document.body.appendChild(bubble); document.body.appendChild(panel);

  var msgs = panel.querySelector('#tvcMsgs');
  var input = panel.querySelector('#tvcIn');
  var modeEl = panel.querySelector('#tvcMode');
  var chipsEl = panel.querySelector('#tvcChips');
  var index = null, aiMode = null, history = [];

  function esc(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
  function md(s) { // markdown link + xuong dong -> html an toan
    return esc(s).replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  }
  function add(role, html) {
    var el = document.createElement('div');
    el.className = 'tvc-m ' + (role === 'u' ? 'u' : 'b');
    el.innerHTML = html;
    msgs.appendChild(el); msgs.scrollTop = msgs.scrollHeight;
    return el;
  }

  // bo dau tieng Viet de so khop de dai
  function fold(s) { return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd'); }
  function search(q, n) {
    if (!index) return [];
    var toks = fold(q).split(/[^a-z0-9]+/).filter(function (t) { return t.length > 1; });
    if (!toks.length) return [];
    return index.map(function (a) {
      var hay = fold(a.t + ' ' + a.d + ' ' + a.c);
      var score = 0;
      toks.forEach(function (t) {
        if (hay.indexOf(t) >= 0) score += (fold(a.t).indexOf(t) >= 0 ? 3 : 1);
      });
      return [score, a];
    }).filter(function (x) { return x[0] > 1; })
      .sort(function (x, y) { return y[0] - x[0] || (y[1].dt || '').localeCompare(x[1].dt || ''); })
      .slice(0, n || 5).map(function (x) { return x[1]; });
  }
  function linkList(items) {
    return items.map(function (a) {
      return '<span class="tvc-src">📄 <a href="' + a.u + '">' + esc(a.t) + '</a></span>';
    }).join('');
  }

  function greet() {
    add('b', 'Chào anh chị 👋 Em là trợ lý của TechVision. Anh chị muốn tìm bài viết hay hỏi gì về công nghệ ạ?');
    [['Tin mới nhất', '__latest'], ['iPhone 18', 'iPhone 18'], ['Galaxy Z Fold 8', 'Galaxy Z Fold 8'], ['Chọn laptop', 'chọn laptop']].forEach(function (c) {
      var b = document.createElement('button'); b.className = 'tvc-chip'; b.type = 'button'; b.textContent = c[0];
      b.addEventListener('click', function () { handle(c[1] === '__latest' ? 'tin mới nhất hôm nay' : c[1], c[1] === '__latest'); });
      chipsEl.appendChild(b);
    });
  }

  function ensureIndex() {
    if (index) return Promise.resolve();
    return fetch('/chat-index.json').then(function (r) { return r.json(); }).then(function (j) { index = j; }).catch(function () { index = []; });
  }

  function fallbackReply(q, latest) {
    if (latest) {
      var top = (index || []).slice(0, 5);
      return 'Đây là các bài mới nhất trên TechVision:' + linkList(top);
    }
    var hits = search(q, 5);
    if (hits.length) return 'Em tìm được các bài liên quan:' + linkList(hits);
    return 'Em chưa tìm thấy bài nào khớp. Anh chị thử từ khóa khác (tên sản phẩm, hãng...) hoặc xem <a href="/blog.html">toàn bộ bài viết</a> nhé.';
  }

  function handle(q, latest) {
    add('u', esc(q));
    var thinking = add('b', '<i>Đang tìm...</i>');
    ensureIndex().then(function () {
      var ctx = latest ? (index || []).slice(0, 6) : search(q, 6);
      if (aiMode === false) {
        thinking.innerHTML = md('') + fallbackReply(q, latest);
        return;
      }
      fetch('/api/chat', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ q: q, ctx: ctx, history: history.slice(-6) }),
      }).then(function (r) {
        if (r.status === 503) { aiMode = false; modeEl.textContent = 'chế độ tìm bài (chưa bật AI)'; throw 0; }
        if (!r.ok) throw 0;
        return r.json();
      }).then(function (j) {
        aiMode = true; modeEl.textContent = 'AI + kho ' + (index ? index.length : '') + ' bài viết';
        history.push({ role: 'user', content: q }, { role: 'assistant', content: j.reply });
        thinking.innerHTML = md(j.reply) + (ctx.length ? linkList(ctx.slice(0, 3)) : '');
      }).catch(function () {
        thinking.innerHTML = fallbackReply(q, latest);
      });
    });
  }

  panel.querySelector('#tvcForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var q = input.value.trim(); if (!q) return;
    input.value = '';
    handle(q);
  });
  panel.querySelector('.tvc-x').addEventListener('click', function () { panel.classList.remove('open'); });
  bubble.addEventListener('click', function () {
    var open = panel.classList.toggle('open');
    if (open && !msgs.children.length) { greet(); ensureIndex().then(function () { modeEl.textContent = 'kho ' + index.length + ' bài viết sẵn sàng'; }); }
    if (open) input.focus();
  });
})();
