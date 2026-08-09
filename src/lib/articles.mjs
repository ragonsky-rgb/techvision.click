// Gộp bài Markdown (content collection) + bài HTML cũ (legacy-articles.json),
// sắp xếp mới nhất trước. Dùng cho sitemap, sitemap-news, rss.
import { getCollection } from 'astro:content';
import legacy from '../data/legacy-articles.json';

export async function getAllArticles() {
  const coll = await getCollection('articles');
  const fromColl = coll.map((e) => ({
    slug: e.id,
    title: e.data.title,
    description: e.data.description,
    category: e.data.category,
    datePublished: e.data.datePublished,
    dateModified: e.data.dateModified || e.data.datePublished,
    image: e.data.heroImage,
    keywords: e.data.keywords || '',
    noindex: e.data.noindex === true,
    source: 'collection',
  }));
  const fromLegacy = legacy.map((l) => ({ ...l, noindex: l.noindex === true, source: 'legacy' }));
  const all = [...fromColl, ...fromLegacy];
  all.sort((a, b) => (b.datePublished || '').localeCompare(a.datePublished || ''));
  return all;
}

// Bài được phép nằm trong sitemap / RSS: bỏ những bài đã gắn noindex.
// Trang vẫn build và vẫn truy cập được, chỉ không mời Google lập chỉ mục.
export const indexable = (arts) => arts.filter((a) => !a.noindex);

// Bài "tin nóng" cho news sitemap: trong vòng 48h tính từ THỜI ĐIỂM BUILD.
//
// Trước đây mốc được tính từ bài mới nhất, với lý do "không lệ thuộc đồng hồ
// máy build". Lý do đó sai với sitemap tin tức: Google chấm hạn 2 ngày theo
// giờ thực tế, nên độc lập với đồng hồ build tức là sai so với đồng hồ duy
// nhất có ý nghĩa. Tệ hơn, cửa sổ tự tương đối làm sitemap KHÔNG BAO GIỜ rỗng:
// site ngừng đăng bài thì nó đóng băng và phục vụ mãi mấy bài đã quá hạn
// (ngày 9/8/2026 đang có bài từ 6/8, tức 3 ngày tuổi).
//
// Rỗng là trạng thái hợp lệ và trung thực trong những ngày không đăng bài,
// tốt hơn là khai gian một bài cũ thành tin nóng.
export function recentForNews(all, hours = 48) {
  const now = Date.now();
  const cutoff = now - hours * 3600 * 1000;
  return all.filter((a) => {
    const t = a.datePublished ? new Date(a.datePublished).getTime() : NaN;
    // Chặn trên loại bài lỡ ghi ngày ở tương lai, chừa 6h cho lệch múi giờ.
    return Number.isFinite(t) && t >= cutoff && t <= now + 6 * 3600 * 1000;
  });
}

export const SITE = 'https://techvision.click';
export const xmlEscape = (s) =>
  String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
