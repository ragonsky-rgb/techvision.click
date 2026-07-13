import { getAllArticles, recentForNews, SITE, xmlEscape } from '../lib/articles.mjs';

export async function GET() {
  const all = await getAllArticles();
  const recent = recentForNews(all, 48);
  const items = recent.map((a) => {
    const kw = typeof a.keywords === 'string' ? a.keywords : (a.keywords || []).join(', ');
    return `  <url>
    <loc>${SITE}/articles/${a.slug}.html</loc>
    <news:news>
      <news:publication>
        <news:name>TechVision</news:name>
        <news:language>vi</news:language>
      </news:publication>
      <news:publication_date>${a.datePublished}</news:publication_date>
      <news:title>${xmlEscape(a.title)}</news:title>
      <news:keywords>${xmlEscape(kw)}</news:keywords>
    </news:news>
  </url>`;
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${items.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
