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
