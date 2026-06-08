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
    source: 'collection',
  }));
  const fromLegacy = legacy.map((l) => ({ ...l, source: 'legacy' }));
  const all = [...fromColl, ...fromLegacy];
  all.sort((a, b) => (b.datePublished || '').localeCompare(a.datePublished || ''));
  return all;
}

// Bài "tin nóng" cho news sitemap: trong vòng 48h so với bài mới nhất
// (tự tương đối, không lệ thuộc đồng hồ máy build).
export function recentForNews(all, hours = 48) {
  const times = all
    .filter((a) => a.datePublished)
    .map((a) => new Date(a.datePublished).getTime());
  if (!times.length) return [];
  const newest = Math.max(...times);
  const cutoff = newest - hours * 3600 * 1000;
  return all.filter((a) => a.datePublished && new Date(a.datePublished).getTime() >= cutoff);
}

export const SITE = 'https://techvision.click';
export const xmlEscape = (s) =>
  String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
