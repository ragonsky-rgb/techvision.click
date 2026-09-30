// scene.js - cảnh động trong bài viết, cùng mô hình với video TechVision (brag_render.mjs):
// mỗi trạng thái là HÀM THUẦN của tiến độ p (0..1), không timer, không state giữa các khung.
// Trong video p là thời gian; ở đây p là quãng cuộn của khối .tv-scene qua màn hình
// (khối vừa ló đáy màn hình = 0, lên tới 40% chiều cao màn hình = 1), cuộn ngược thì chạy ngược.
//
// Mặc định HTML đã vẽ sẵn TRẠNG THÁI CUỐI (p = 1): không JS, bot, ảnh chụp, người đọc bật
// giảm chuyển động đều thấy biểu đồ đầy đủ. Script chỉ thêm phần chuyển động.
//
// Thuộc tính trong khối .tv-scene:
//   data-draw="a,b"   path/polyline tự vẽ ra trong đoạn p từ a tới b
//   data-show="a,b"   phần tử hiện dần trong đoạn p từ a tới b
//   data-count="a,b"  số đếm lên tới giá trị trong nội dung (giữ dấu chấm nghìn kiểu Việt)
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const clamp = (x) => Math.max(0, Math.min(1, x));
  const ease = (x) => 1 - Math.pow(1 - x, 3);
  const span = (el, attr) => el.getAttribute(attr).split(',').map(Number);
  const seg = (p, [a, b]) => ease(clamp((p - a) / (b - a)));
  const fmt = (n) => Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  const scenes = [...document.querySelectorAll('.tv-scene')].map((root) => {
    const draw = [...root.querySelectorAll('[data-draw]')].map((el) => {
      const L = el.getTotalLength(); el.style.strokeDasharray = L; return { el, L, s: span(el, 'data-draw') };
    });
    const show = [...root.querySelectorAll('[data-show]')].map((el) => ({ el, s: span(el, 'data-show') }));
    const count = [...root.querySelectorAll('[data-count]')].map((el) => {
      const txt = el.textContent, m = txt.match(/[\d.]+/);
      return { el, s: span(el, 'data-count'), pre: txt.slice(0, m.index), post: txt.slice(m.index + m[0].length), v: +m[0].replace(/\./g, '') };
    });
    return { root, draw, show, count, last: -1 };
  });
  if (!scenes.length) return;

  const at = (sc, p) => {
    if (Math.abs(p - sc.last) < 0.002) return;
    sc.last = p;
    for (const d of sc.draw) d.el.style.strokeDashoffset = d.L * (1 - seg(p, d.s));
    for (const d of sc.show) d.el.style.opacity = seg(p, d.s);
    for (const d of sc.count) d.el.textContent = d.pre + fmt(d.v * seg(p, d.s)) + d.post;
  };
  // Cửa tua tay, giống window.__at(t) của video: kiểm thử (trình duyệt ẩn không chạy
  // requestAnimationFrame) và chụp khung bằng brag_render.mjs đều gọi qua đây.
  window.tvScenes = { count: scenes.length, at: (p, i = 0) => { scenes[i].last = -1; at(scenes[i], p); } };
  let ticking = false;
  const frame = () => {
    ticking = false;
    const vh = innerHeight;
    for (const sc of scenes) {
      const r = sc.root.getBoundingClientRect();
      if (r.bottom < -vh || r.top > 2 * vh) continue;
      at(sc, clamp((vh - r.top) / (vh * 0.6)));
    }
  };
  const req = () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } };
  addEventListener('scroll', req, { passive: true });
  addEventListener('resize', req);
  frame();
})();
