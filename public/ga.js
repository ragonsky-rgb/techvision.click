// Google Analytics 4 (gtag.js) — LongTechVision
// Measurement ID công khai, gắn 1 chỗ duy nhất ở đây.
(function () {
  var GA_ID = 'G-Z5JS5HS5LK';
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);
})();

// Do click link tiep thi lien ket (Shopee Affiliate, TikTok Shop). Bat o 1 cho duy nhat
// nay de phu ca bai markdown (khoi "Mua o dau" do ArticleLayout dung tu
// src/data/affiliate-links.json), trang /reviews.html lan bai HTML cu co link
// chen tay. So sanh voi bao cao Shopee theo sub_id de biet bai nao ra don.
document.addEventListener('click', function (e) {
  var a = e.target && e.target.closest ? e.target.closest('a[href*="s.shopee.vn"], a[href*="shope.ee"], a[href*="vt.tiktok.com"]') : null;
  if (!a || typeof window.gtag !== 'function') return;
  var box = a.closest('[data-aff-box]');
  window.gtag('event', 'affiliate_click', {
    aff_network: a.href.indexOf('tiktok.com') !== -1 ? 'tiktok' : 'shopee',
    aff_product: a.getAttribute('data-aff-product') || (a.textContent || '').trim().slice(0, 80),
    aff_sub_id: a.getAttribute('data-aff-sub') || '',
    link_position: box ? box.getAttribute('data-aff-box') : 'inline',
    link_url: a.href
  });
}, true);
