import { defineConfig } from 'astro/config';

// Static site. Legacy HTML lives in /public and is served verbatim.
// New articles are authored as Markdown in src/content/articles and
// rendered by ArticleLayout into /articles/<slug>.html
export default defineConfig({
  site: 'https://techvision.click',
  build: {
    format: 'file', // generate /articles/slug.html (match existing URL convention)
  },
});
