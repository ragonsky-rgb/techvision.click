import { SITE } from '../lib/articles.mjs';

// Sitemap index: gom sitemap.xml (toàn site) + sitemap-news.xml (tin mới) vào một file.
// Nộp file này lên GSC để Google bung ra fetch cả hai, giữ nguyên 2 sitemap cũ.
export async function GET() {
  const now = new Date().toISOString();
  const maps = [`${SITE}/sitemap.xml`, `${SITE}/sitemap-news.xml`];
  const body = maps
    .map((m) => `  <sitemap>\n    <loc>${m}</loc>\n    <lastmod>${now}</lastmod>\n  </sitemap>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</sitemapindex>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
