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

})();
