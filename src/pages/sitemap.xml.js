import { getAllArticles, SITE } from '../lib/articles.mjs';

export async function GET() {
  const arts = await getAllArticles();
  const staticPages = [
    { loc: `${SITE}/`, cf: 'weekly', pri: '1.0' },
    { loc: `${SITE}/blog.html`, cf: 'weekly', pri: '0.9' },
    { loc: `${SITE}/su-kien/`, cf: 'weekly', pri: '0.7' },
    { loc: `${SITE}/su-kien/wwdc-2026.html`, cf: 'weekly', pri: '0.8' },
    { loc: `${SITE}/cv.html`, cf: 'monthly', pri: '0.5' },
    { loc: `${SITE}/chinh-sach.html`, cf: 'yearly', pri: '0.4' },
  ];
  const urls = [
    ...staticPages.map(
      (p) => `  <url>\n    <loc>${p.loc}</loc>\n    <changefreq>${p.cf}</changefreq>\n    <priority>${p.pri}</priority>\n  </url>`
    ),
    ...arts.map((a) => {
      const lastmod = (a.dateModified || a.datePublished || '').slice(0, 10);
      return `  <url>\n    <loc>${SITE}/articles/${a.slug}.html</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>`;
    }),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
