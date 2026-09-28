// Dung khoi "Mua o dau" (Shopee Affiliate, them TikTok Shop neu dong so link co `tiktok`) tu truong frontmatter `shop` va so
// link src/data/affiliate-links.json. Chay trong ArticleLayout moi lan build,
// giong src/lib/read-next.mjs.
//
// Vi sao doc so link o layout chu khong viet link thang vao bai: mot san pham
// xuat hien o nhieu bai. Link rut gon, sub_id hay tu khoa doi thi sua mot dong
// trong so, build lai la ca site doi theo, khong phai lan tung bai.
//
// Vi tri: sau doan van dau tien cua muc H2 co chua chu `after`. Khong tim thay
// tieu de thi dua xuong cuoi than bai (scripts/check-affiliate.mjs bao loi de sua).
// Bai noindex (ke ca bai hen lich) khong hien khoi.
//
// Khong ghi gia trong khoi: gia tren san doi hang ngay, con gia tham chieu cua
// bai da doc tan goc o bang gia trong than bai.

import registry from '../data/affiliate-links.json';

const byId = new Map(registry.links.map((l) => [l.id, l]));

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const plain = (html) => html.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim().toLowerCase();

function boxHtml(items, n) {
  const links = items.map((l) =>
    `<a class="shop-link" href="${esc(l.short)}" target="_blank" rel="sponsored nofollow noopener" data-aff-product="${esc(l.id)}" data-aff-sub="${esc(l.subId)}">`
    + `<span class="shop-name">${esc(l.name)}</span><span class="shop-cta">Xem trên Shopee Mall</span></a>`
    + (l.tiktok
      ? `<a class="shop-link" href="${esc(l.tiktok)}" target="_blank" rel="sponsored nofollow noopener" data-aff-product="${esc(l.id)}" data-aff-sub="${esc(l.subId)}">`
        + `<span class="shop-name">${esc(l.name)}</span><span class="shop-cta shop-cta-tiktok">Xem trên TikTok Shop</span></a>`
      : ''),
  ).join('');
  return `<aside class="shop-box" data-aff-box="shop_box_${n}" aria-label="Mua ở đâu">`
    + `<div class="shop-box-label">Mua ở đâu</div>${links}`
    + '<p class="shop-note">Link tiếp thị liên kết: TechVision nhận hoa hồng nếu bạn mua qua link, giá bạn trả không đổi. '
    + 'Giá trên sàn thay đổi liên tục, hãy đối chiếu với giá tham chiếu trong bài.</p></aside>';
}

export function withShopBox(bodyHtml, shop, { noindex } = {}) {
  if (!shop || shop.length === 0 || noindex) return bodyHtml;

  // Gom san pham theo `after`, giu thu tu khai trong frontmatter
  const groups = [];
  for (const s of shop) {
    const l = byId.get(s.id);
    if (!l) {
      console.warn(`[shop-box] khong co "${s.id}" trong src/data/affiliate-links.json`);
      continue;
    }
    const key = (s.after || '').trim().toLowerCase();
    let g = groups.find((x) => x.key === key);
    if (!g) groups.push((g = { key, items: [] }));
    g.items.push(l);
  }
  if (groups.length === 0) return bodyHtml;

  // Tim diem chen cho tung nhom
  const h2s = [...bodyHtml.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => ({
    text: plain(m[1]),
    end: m.index + m[0].length,
  }));
  const inserts = groups.map((g) => {
    const h = g.key ? h2s.find((x) => x.text.includes(g.key)) : null;
    if (!h) {
      if (g.key) console.warn(`[shop-box] khong thay H2 chua "${g.key}", dua khoi xuong cuoi bai`);
      return { at: bodyHtml.length, items: g.items };
    }
    const nextH2 = bodyHtml.indexOf('<h2', h.end);
    const p = bodyHtml.indexOf('</p>', h.end);
    const at = p !== -1 && (nextH2 === -1 || p < nextH2) ? p + 4 : h.end;
    return { at, items: g.items };
  });

  // Chen tu cuoi len dau de vi tri phia truoc khong bi lech
  const order = inserts.map((x, i) => ({ ...x, i })).sort((a, b) => a.at - b.at);
  order.forEach((x, k) => { x.n = k + 1; });
  let out = bodyHtml;
  for (const x of [...order].reverse()) {
    out = out.slice(0, x.at) + '\n' + boxHtml(x.items, x.n) + '\n' + out.slice(x.at);
  }
  return out;
}
