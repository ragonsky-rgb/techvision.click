import { getAllArticles, SITE, xmlEscape } from '../lib/articles.mjs';

export async function GET() {
  const all = (await getAllArticles()).slice(0, 40);
  const items = all.map((a) => {
    const link = `${SITE}/articles/${a.slug}.html`;
    const pub = a.datePublished ? new Date(a.datePublished).toUTCString() : '';
    return `    <item>
      <title>${xmlEscape(a.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pub}</pubDate>
      <category>${xmlEscape(a.category)}</category>
      <description>${xmlEscape(a.description)}</description>
    </item>`;
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>LongTechVision — Tin công nghệ</title>
    <link>${SITE}/blog.html</link>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Tin tức công nghệ quốc tế dịch tiếng Việt — AI, smartphone, laptop, camera, wearable.</description>
    <language>vi</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items.join('\n')}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
