/* Shared article behavior — LongTechVision */
(function() {
  // Dark mode
  const dt = document.getElementById('darkToggle');
  if (dt) {
    const apply = (dark) => {
      document.body.classList.toggle('dark', dark);
      dt.textContent = dark ? '☀' : '🌙';
    };
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    apply(stored === 'dark' || (!stored && prefersDark));
    dt.addEventListener('click', () => {
      const isDark = !document.body.classList.contains('dark');
      apply(isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  // Reading progress bar
  const bar = document.getElementById('progressBar');
  if (bar) {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      bar.style.width = Math.min(100, pct) + '%';
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  // Reading time calculation
  const rtEl = document.getElementById('readingTime');
  if (rtEl) {
    const body = document.querySelector('.art-body');
    if (body) {
      const text = body.innerText || body.textContent || '';
      const words = text.trim().split(/\s+/).filter(Boolean).length;
      const mins = Math.max(1, Math.ceil(words / 220));
      rtEl.textContent = mins + ' phút đọc';
      const wcEl = document.getElementById('wordCount');
      if (wcEl) wcEl.textContent = words.toLocaleString('vi-VN') + ' từ';
    }
  }

  // Back to top
  const btt = document.getElementById('backToTop');
  if (btt) {
    window.addEventListener('scroll', () => {
      btt.classList.toggle('show', window.scrollY > 400);
    }, { passive: true });
    btt.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Toast helper
  function showToast(msg) {
    let t = document.getElementById('toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'toast';
      t.className = 'toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), 2200);
  }
  window.showToast = showToast;

  // Share buttons
  document.querySelectorAll('[data-share]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const type = btn.dataset.share;
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(document.title);
      let shareUrl = '';
      if (type === 'facebook') {
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      } else if (type === 'twitter') {
        shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
      } else if (type === 'copy') {
        navigator.clipboard.writeText(window.location.href).then(() => {
          showToast('Đã copy link!');
        });
        return;
      } else if (type === 'ai') {
        const h1 = document.querySelector('h1.art-title');
        const titleText = h1 ? h1.innerText.trim() : document.title;
        const rawUrl = window.location.href;
        const skipSels = ['.art-author-card','.share-section','.related-section','.comments-section','.art-breadcrumb','.art-meta','.art-stats','.compare-strip','.rival-grid','.art-faq'];
        const lines = [`# ${titleText}`, `URL: ${rawUrl}`, '---', ''];
        document.querySelectorAll('article h2, article h3, article p, article li').forEach(el => {
          for (const sel of skipSels) { if (el.closest(sel)) return; }
          const tag = el.tagName.toLowerCase();
          const text = el.innerText.trim();
          if (!text || text.length < 5) return;
          if (tag === 'h2') lines.push('', `## ${text}`);
          else if (tag === 'h3') lines.push(`### ${text}`);
          else if (tag === 'li') lines.push(`- ${text}`);
          else lines.push(text);
        });
        navigator.clipboard.writeText(lines.join('\n')).then(() => {
          const origHtml = btn.innerHTML;
          btn.textContent = '✓ Copied!';
          showToast('Đã copy bài viết cho AI!');
          setTimeout(() => { btn.innerHTML = origHtml; }, 2000);
        });
        return;
      }
      if (shareUrl) window.open(shareUrl, '_blank', 'width=600,height=500');
    });
  });

  // Bookmarks (localStorage-based)
  const STORE_KEY = 'ltv_bookmarks';
  const loadBookmarks = () => {
    try { return JSON.parse(localStorage.getItem(STORE_KEY) || '[]'); }
    catch (_) { return []; }
  };
  const saveBookmarks = (arr) => localStorage.setItem(STORE_KEY, JSON.stringify(arr));

  const bmBtn = document.getElementById('bookmarkBtn');
  const bmPanel = document.getElementById('bookmarksPanel');
  const bmList = document.getElementById('bookmarksList');

  function getCurrentArticle() {
    const titleEl = document.querySelector('.art-title');
    return {
      url: window.location.pathname,
      title: titleEl ? titleEl.textContent.trim() : document.title,
      savedAt: Date.now(),
    };
  }

  function isBookmarked() {
    return loadBookmarks().some(b => b.url === window.location.pathname);
  }

  function refreshPanel() {
    if (!bmList) return;
    const bms = loadBookmarks().sort((a, b) => b.savedAt - a.savedAt);
    if (bms.length === 0) {
      bmList.innerHTML = '<div class="bookmarks-empty">Chưa có bài nào được lưu. Nhấn icon dấu trang ở góc dưới để lưu.</div>';
      return;
    }
    bmList.innerHTML = bms.map(b => `
      <div style="position:relative;">
        <a href="${b.url}" class="bookmark-item">${b.title}</a>
        <button class="bookmark-remove" data-url="${b.url}" aria-label="Xoá">×</button>
      </div>
    `).join('');
    bmList.querySelectorAll('.bookmark-remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const url = btn.dataset.url;
        const filtered = loadBookmarks().filter(b => b.url !== url);
        saveBookmarks(filtered);
        refreshPanel();
        updateBmBtnState();
      });
    });
  }

  function updateBmBtnState() {
    if (!bmBtn) return;
    bmBtn.classList.toggle('active', isBookmarked());
    bmBtn.setAttribute('aria-label', isBookmarked() ? 'Đã lưu — click để mở danh sách' : 'Lưu bài này');
  }

  if (bmBtn) {
    updateBmBtnState();
    let longPressTimer;
    const togglePanel = () => bmPanel && (bmPanel.classList.toggle('show'), refreshPanel());
    const toggleBookmark = () => {
      const current = getCurrentArticle();
      const bms = loadBookmarks();
      const idx = bms.findIndex(b => b.url === current.url);
      if (idx >= 0) {
        bms.splice(idx, 1);
        showToast('Đã xoá khỏi danh sách lưu');
      } else {
        bms.push(current);
        showToast('Đã lưu bài viết');
      }
      saveBookmarks(bms);
      updateBmBtnState();
      refreshPanel();
    };

    bmBtn.addEventListener('click', toggleBookmark);
    bmBtn.addEventListener('contextmenu', (e) => { e.preventDefault(); togglePanel(); });
    // Long-press for mobile (500ms)
    bmBtn.addEventListener('touchstart', () => {
      longPressTimer = setTimeout(togglePanel, 500);
    }, { passive: true });
    bmBtn.addEventListener('touchend', () => clearTimeout(longPressTimer));

    // Close panel on outside click
    document.addEventListener('click', (e) => {
      if (bmPanel && bmPanel.classList.contains('show') &&
          !bmPanel.contains(e.target) && e.target !== bmBtn && !bmBtn.contains(e.target)) {
        bmPanel.classList.remove('show');
      }
    });
  }
  // ── Auto Table of Contents ──
  (function() {
    const tocBox = document.getElementById('toc');
    if (!tocBox) return;
    const artBody = document.querySelector('.art-body');
    if (!artBody) return;

    const headings = Array.from(artBody.querySelectorAll('h2'));
    if (headings.length < 2) { tocBox.style.display = 'none'; return; }

    // Assign IDs if missing
    headings.forEach(function(h, i) {
      if (!h.id) h.id = 'toc-s' + (i + 1);
    });

    // Build list
    const tocBody = tocBox.querySelector('.toc-body');
    const ul = document.createElement('ul');
    ul.className = 'toc-list';
    headings.forEach(function(h, i) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.className = 'toc-link';
      a.href = '#' + h.id;
      a.innerHTML = '<span class="toc-num">' + (i + 1) + '.</span>' + h.textContent.trim();
      a.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.getElementById(h.id);
        if (target) {
          const offset = 80; // top-bar height
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
          history.pushState(null, '', '#' + h.id);
        }
      });
      li.appendChild(a);
      ul.appendChild(li);
    });
    if (tocBody) tocBody.appendChild(ul);

    // Toggle collapse
    const toggleBtn = tocBox.querySelector('.toc-toggle');
    const tocBodyEl = tocBox.querySelector('.toc-body');
    if (toggleBtn && tocBodyEl) {
      toggleBtn.addEventListener('click', function() {
        const collapsed = tocBodyEl.classList.toggle('collapsed');
        toggleBtn.textContent = collapsed ? '▶ Mở rộng' : '▲ Thu gọn';
      });
    }

    // Scroll spy — highlight active section
    if ('IntersectionObserver' in window) {
      const tocLinks = tocBox.querySelectorAll('.toc-link');
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          const link = tocBox.querySelector('a[href="#' + entry.target.id + '"]');
          if (link) link.classList.toggle('toc-active', entry.isIntersecting);
        });
      }, { rootMargin: '-12% 0px -72% 0px' });
      headings.forEach(function(h) { observer.observe(h); });
    }
  })();

  // Breadcrumb chuyên mục → link lọc blog (phải sync với scripts/build-blog.mjs)
  try {
    const CAT_MAP = {
      'côngnghệ': 'congnghe', 'congnghe': 'congnghe', 'phântích': 'congnghe',
      'giadụng': 'congnghe', 'smarthome': 'congnghe', 'reviews': 'congnghe',
      'ai': 'ai', 'ai&developer': 'ai',
      'smartphone': 'smartphone', 'điệnthoại': 'smartphone', 'android': 'smartphone',
      'apple': 'apple', 'ios': 'apple',
      'laptop': 'laptop', 'laptop&pc': 'laptop', 'pc': 'laptop',
      'gaming': 'gaming', 'game': 'gaming', 'esports': 'gaming',
      'audio': 'audio', 'âmthanh': 'audio',
      'camera': 'camera',
      'wearable': 'wearable',
      'internet': 'internet', 'viễnthông': 'internet'
    };
    // Slug hoá tên chuyên mục, không có trong map thì về 'khac'
    function catSlug(c) {
      const k = String(c || '').toLowerCase().replace(/\s+/g, '');
      return CAT_MAP[k] || 'khac';
    }
    const bc = document.querySelector('nav.art-breadcrumb');
    if (bc) {
      // Lấy span cuối không phải bc-sep (cover cả bc-cat lẫn span trần của Astro)
      const spans = bc.querySelectorAll('span:not(.bc-sep)');
      const catSpan = spans.length ? spans[spans.length - 1] : null;
      const txt = catSpan ? catSpan.textContent.trim() : '';
      if (catSpan && txt) {
        const a = document.createElement('a');
        a.href = '/blog.html?cat=' + catSlug(txt);
        a.textContent = txt;
        if (catSpan.className) a.className = catSpan.className;
        catSpan.parentNode.replaceChild(a, catSpan);
      }
    }
  } catch (e) { /* im lặng — không làm vỡ trang bài viết */ }

  // Tro ly ao TechVision (chat widget dung chung toan site)
  var tvcs = document.createElement('script');
  tvcs.src = '/chat-widget.js'; tvcs.defer = true;
  document.head.appendChild(tvcs);

  // ── Social Kit: AI soan nhap dang X/Threads/FB/TikTok/YouTube ngay duoi khoi chia se ──
  try {
    var shareSec = document.querySelector('.share-section');
    var slugM = location.pathname.match(/\/articles\/([\w-]+)\.html/);
    if (shareSec && slugM) {
      var SLUG = slugM[1];
      var PURL = 'https://techvision.click/articles/' + SLUG + '.html';
      var st = document.createElement('style');
      st.textContent =
        '.tvk{margin-top:1.2rem;border:1px solid var(--line,rgba(28,26,23,.1));border-radius:12px;background:var(--card,#fdfbf7);overflow:hidden}' +
        '.tvk-head{display:flex;flex-wrap:wrap;align-items:center;gap:.7rem;padding:.85rem 1.1rem}' +
        '.tvk-head b{font-size:.85rem}' +
        '.tvk-head span{font-size:.72rem;color:var(--dim,rgba(28,26,23,.58))}' +
        '.tvk-btn{margin-left:auto;padding:.45rem 1rem;border-radius:999px;border:1px solid #c0392b;background:#c0392b;color:#fff;font:inherit;font-size:.76rem;font-weight:600;cursor:pointer;white-space:nowrap}' +
        '.tvk-btn:hover{filter:brightness(1.08)}' +
        '.tvk-btn[disabled]{opacity:.6;cursor:wait}' +
        '.tvk-body{display:none;padding:0 1.1rem 1.1rem;grid-gap:.8rem;gap:.8rem}' +
        '.tvk-body.on{display:grid}' +
        '.tvk-card{border:1px solid var(--line,rgba(28,26,23,.1));border-radius:10px;overflow:hidden}' +
        '.tvk-kh{display:flex;align-items:center;gap:.5rem;padding:.6rem .9rem;border-bottom:1px solid var(--line,rgba(28,26,23,.1));font-size:.8rem;font-weight:700}' +
        '.tvk-kh a{margin-left:auto;font-size:.68rem;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:#c0392b;text-decoration:none}' +
        '.tvk-blk{position:relative;margin:.7rem .9rem;background:var(--bg,#f3efe8);border:1px solid var(--line,rgba(28,26,23,.1));border-radius:8px;padding:.65rem .8rem}' +
        '.tvk-bl{font-size:.6rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--dim,rgba(28,26,23,.58));margin-bottom:.25rem}' +
        '.tvk-blk pre{font:inherit;font-size:.84rem;white-space:pre-wrap;word-break:break-word;margin:0}' +
        '.tvk-cp{position:absolute;top:.5rem;right:.55rem;padding:.2rem .65rem;font-size:.66rem;font-weight:600;border-radius:999px;border:1px solid var(--line,rgba(28,26,23,.1));background:var(--card,#fdfbf7);cursor:pointer;font-family:inherit;color:inherit}' +
        '.tvk-cp:hover{border-color:#c0392b;color:#c0392b}' +
        '.tvk-cp.ok{background:#2e7d32;border-color:#2e7d32;color:#fff}' +
        '.tvk-status{padding:0 1.1rem 1rem;font-size:.8rem;color:var(--dim,rgba(28,26,23,.58))}';
      document.head.appendChild(st);

      var wrap = document.createElement('div');
      wrap.className = 'tvk';
      wrap.innerHTML =
        '<div class="tvk-head"><b>🚀 Đăng lại lên social</b>' +
        '<span>AI soạn nháp cho X · Threads · Facebook · TikTok · YouTube</span>' +
        '<button class="tvk-btn" id="tvkGen">✨ Tạo bản nháp</button></div>' +
        '<div class="tvk-status" id="tvkStatus" style="display:none"></div>' +
        '<div class="tvk-body" id="tvkBody"></div>';
      shareSec.parentNode.insertBefore(wrap, shareSec.nextSibling);

      var esc = function (s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };
      var tags = function (arr) { return (arr || []).map(function (h) { return '#' + String(h).replace(/^#/, ''); }).join(' '); };
      var blk = function (label, text) {
        return '<div class="tvk-blk"><div class="tvk-bl">' + esc(label) + '</div><pre>' + esc(text) + '</pre><button class="tvk-cp">Copy</button></div>';
      };

      var busy = false;
      document.getElementById('tvkGen').addEventListener('click', function () {
        if (busy) return;
        var btn = this, stEl = document.getElementById('tvkStatus'), body = document.getElementById('tvkBody');
        busy = true; btn.disabled = true; btn.textContent = 'Đang soạn...';
        stEl.style.display = 'block';
        stEl.textContent = 'AI đang đọc bài và soạn nháp cho 5 nền tảng (5-10 giây)...';
        fetch('/api/social-kit?slug=' + SLUG)
          .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
          .then(function (res) {
            busy = false; btn.disabled = false; btn.textContent = '↺ Tạo lại';
            if (!res.ok || !res.j.kit) {
              stEl.textContent = (res.j && res.j.error) || 'Có lỗi, thử lại nhé.';
              return;
            }
            stEl.style.display = 'none';
            var kit = res.j.kit, h = '';
            if (kit.x && typeof kit.x === 'string') kit.x = { post: kit.x, hashtags: [] };
            if (kit.x) {
              var xText = (kit.x.post || '') + (kit.x.hashtags && kit.x.hashtags.length ? '\n' + tags(kit.x.hashtags) : '');
              h += '<div class="tvk-card"><div class="tvk-kh">𝕏 X (Twitter)' +
                '<a target="_blank" rel="noopener" href="https://twitter.com/intent/tweet?text=' + encodeURIComponent(xText) + '">Mở X ↗</a></div>' +
                blk('Post đơn', xText) +
                (kit.x_thread && kit.x_thread.length ? blk('Thread ' + kit.x_thread.length + ' tweet', kit.x_thread.map(function (t, i) { return (i + 1) + '/ ' + t; }).join('\n\n')) : '') +
                '</div>';
            }
            if (kit.threads) {
              h += '<div class="tvk-card"><div class="tvk-kh">@ Threads' +
                '<a target="_blank" rel="noopener" href="https://www.threads.net/intent/post?text=' + encodeURIComponent(kit.threads) + '">Mở Threads ↗</a></div>' +
                blk('Post', kit.threads) + '</div>';
            }
            if (kit.facebook) {
              h += '<div class="tvk-card"><div class="tvk-kh">📘 Facebook' +
                '<a target="_blank" rel="noopener" href="https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(PURL) + '">Mở FB ↗</a></div>' +
                blk('Post (dán vào phần lời nhắn)', kit.facebook) + '</div>';
            }
            if (kit.tiktok) {
              h += '<div class="tvk-card"><div class="tvk-kh">🎵 TikTok</div>' +
                blk('Hook 3 giây đầu', kit.tiktok.hook || '') +
                blk('Kịch bản 30-45s', kit.tiktok.script || '') +
                blk('Caption', (kit.tiktok.caption || '') + (kit.tiktok.hashtags && kit.tiktok.hashtags.length ? '\n' + tags(kit.tiktok.hashtags) : '')) +
                '</div>';
            }
            if (kit.youtube) {
              h += '<div class="tvk-card"><div class="tvk-kh">▶️ YouTube</div>' +
                blk('Tiêu đề video', kit.youtube.title || '') +
                blk('Mô tả', kit.youtube.description || '') +
                blk('Tags', (kit.youtube.tags || []).join(', ')) +
                blk('Kịch bản Shorts 45-60s', kit.youtube.shorts_script || '') +
                '</div>';
            }
            body.innerHTML = h;
            body.classList.add('on');
          })
          .catch(function () {
            busy = false; btn.disabled = false; btn.textContent = '✨ Tạo bản nháp';
            stEl.textContent = 'Mất kết nối, thử lại nhé.';
          });
      });

      wrap.addEventListener('click', function (e) {
        var b = e.target.closest('.tvk-cp');
        if (!b) return;
        var pre = b.parentNode.querySelector('pre');
        navigator.clipboard.writeText(pre.textContent).then(function () {
          b.textContent = 'Đã copy ✓'; b.classList.add('ok');
          setTimeout(function () { b.textContent = 'Copy'; b.classList.remove('ok'); }, 1600);
        });
      });
    }
  } catch (e) { /* im lang - khong lam vo trang bai viet */ }

})();
