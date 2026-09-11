// Danh dau cho chen hop "Doc tiep" o GIUA than bai. Noi dung hop do
// ArticleLayout dien vao (src/lib/read-next.mjs).
//
// Ly do co hop (so GA4 + GSC 14/8 - 11/9/2026, loc Viet Nam): trung binh 1,14
// trang moi luot, chi 13% luot xem cuon toi cuoi bai (su kien scroll 90%). Muc
// "Bai lien quan" nam duoi FAQ, the tac gia, nguon va nut chia se, nen gan 9/10
// nguoi doc khong bao gio thay no.
//
// Vi sao plugin chi danh dau ma khong dung luon hop: Astro cache HTML da render
// cua tung bai markdown va chi render lai bai co thay doi. Vi tri giua bai chi
// phu thuoc noi dung chinh bai do nen cache van dung; con danh sach link phu
// thuoc trang thai index cua BAI KHAC (bai hen lich duoc bot tha ra), nen phai
// tinh o layout, noi chay lai moi lan build.
//
// Vi tri: truoc tieu de H2 thu max(2, ceil(n/2)). Bai duoi 3 H2 thi bo qua.

export const READ_NEXT_SLOT = '<div data-read-next-slot=""></div>';

export default function rehypeReadNext() {
  return (tree) => {
    const h2 = [];
    tree.children.forEach((n, i) => {
      if (n.type === 'element' && n.tagName === 'h2') h2.push(i);
    });
    if (h2.length < 3) return;
    const at = h2[Math.max(2, Math.ceil(h2.length / 2)) - 1];
    tree.children.splice(at, 0,
      { type: 'element', tagName: 'div', properties: { dataReadNextSlot: '' }, children: [] },
      { type: 'text', value: '\n' });
  };
}
