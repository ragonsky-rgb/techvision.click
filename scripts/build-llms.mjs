#!/usr/bin/env node
/**
 * Sinh lai public/llms.txt tu tap bai viet that.
 *
 * Vi sao can script nay: llms.txt truoc day duoc viet tay, lan cuoi 23/7/2026.
 * Toi 9/8 no chi liet ke 70 bai trong khi site co 242 bai indexable, va 19
 * trong so 70 bai do da bi dat noindex - tuc dang moi crawler AI vao dung
 * nhung trang minh da chan Google. Sinh tu dong thi khong bao gio lech nua.
 *
 * Nguon du lieu:
 *   - src/content/articles/*.md  (bo qua noindex: true)
 *   - public/articles/*.html     (bai HTML cu, tat ca deu indexable)
 *
 * Chay: node scripts/build-llms.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const BASE = 'https://techvision.click';
const MD_DIR = join(ROOT, 'src/content/articles');
const HTML_DIR = join(ROOT, 'public/articles');
const OUT = join(ROOT, 'public/llms.txt');

const fm = (s, k) => (s.match(new RegExp(`^${k}: "(.*)"$`, 'm')) || [, ''])[1];

const articles = [];

for (const f of readdirSync(MD_DIR).filter((f) => f.endsWith('.md'))) {
  const s = readFileSync(join(MD_DIR, f), 'utf8');
  if (/^noindex:\s*true/m.test(s)) continue;
  articles.push({
    slug: fm(s, 'slug'),
    title: fm(s, 'title'),
    category: fm(s, 'category') || 'Khác',
    date: (s.match(/^datePublished: "(\S{10})/m) || [, ''])[1],
  });
}

for (const f of readdirSync(HTML_DIR).filter((f) => f.endsWith('.html'))) {
  const s = readFileSync(join(HTML_DIR, f), 'utf8');
  if (/name=["']robots["'][^>]*noindex/i.test(s)) continue;
  const title = (s.match(/<title>([\s\S]*?)<\/title>/) || [, ''])[1]
    .trim()
    .replace(/\s+/g, ' ');
  const date = (s.match(/"datePublished"\s*:\s*"(\S{10})/) || [, ''])[1];
  const cat =
    (s.match(/"articleSection"\s*:\s*"([^"]+)"/) || [, ''])[1] || 'Khác';
  articles.push({ slug: f.replace(/\.html$/, ''), title, category: cat, date });
}

articles.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

// Gom theo chu de de crawler doc duoc cau truc site, khong phai mot danh sach phang.
const groups = new Map();
for (const a of articles) {
  if (!groups.has(a.category)) groups.set(a.category, []);
  groups.get(a.category).push(a);
}
const ordered = [...groups.entries()].sort((x, y) => y[1].length - x[1].length);

const line = (a) => `- [${a.title}](${BASE}/articles/${a.slug}.html)`;
const today = process.env.LLMS_DATE || new Date().toISOString().slice(0, 10);

const out = `# LongTechVision - techvision.click

> Tin công nghệ quốc tế tổng hợp tiếng Việt. Tác giả: Nguyễn Tấn Thiên Long (Long Nguyễn), Founder TechVision. Chuyên về AI, smartphone, laptop, camera và wearable từ các nguồn uy tín quốc tế (TechCrunch, The Verge, MacRumors, CNBC, 9to5Mac).

## Về trang web

- **Tên:** LongTechVision / TechVision
- **URL:** ${BASE}/
- **Ngôn ngữ:** Tiếng Việt (vi-VN)
- **Tác giả:** Nguyễn Tấn Thiên Long
- **Email:** longnguyenreview@gmail.com
- **Loại nội dung:** Tin tức công nghệ, phân tích, tổng hợp - phi thương mại, phi quảng cáo
- **Số bài viết:** ${articles.length}
- **Cập nhật:** ${today} (sinh tự động bởi scripts/build-llms.mjs)

## Trang chính

- [Trang chủ](${BASE}/)
- [Danh sách bài viết](${BASE}/blog.html)
- [Hồ sơ tác giả](${BASE}/cv.html)
- [Chứng chỉ](${BASE}/certificates.html)
- [RSS Feed](${BASE}/rss.xml)
- [Sự kiện công nghệ](${BASE}/su-kien/)
- [Sitemap](${BASE}/sitemap.xml)

## Bài viết mới nhất

${articles.slice(0, 20).map(line).join('\n')}

${ordered
  .map(([cat, list]) => `## ${cat} (${list.length} bài)\n\n${list.map(line).join('\n')}`)
  .join('\n\n')}

## Chủ đề bao phủ

AI, Machine Learning, Large Language Models (LLM), AI Agents, Smartphone, Foldable Phone, Laptop, AI PC, GPU, Camera, Wearable, Smart Glasses, Apple, Google, Samsung, Microsoft, NVIDIA, Qualcomm, AMD, OpenAI, Gemini, iOS, Android, macOS, Windows

## Chính sách AI

Nội dung trên techvision.click có thể được AI sử dụng để trả lời câu hỏi về công nghệ, với điều kiện ghi rõ nguồn "LongTechVision / techvision.click". Liên hệ: longnguyenreview@gmail.com.
`;

writeFileSync(OUT, out);
console.log(
  `✅ llms.txt: ${articles.length} bài indexable, ${ordered.length} chủ đề, ${
    (out.length / 1024) | 0
  }KB`
);
