import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    // Core SEO
    title: z.string(),                         // <h1> + <title> (suffix added automatically)
    description: z.string(),                   // meta description (120-160 chars)
    keywords: z.string(),                      // comma-separated
    category: z.string().default('AI'),        // hiển thị: AI, Apple, Smartphone, Laptop...
    datePublished: z.string(),                 // ISO, vd "2026-06-04T09:00:00+07:00"
    dateModified: z.string().optional(),

    // Hero
    deck: z.string(),                          // .art-deck (đoạn dẫn)
    heroImage: z.string(),                     // URL ảnh hero (vd https://i.ytimg.com/vi/ID/maxresdefault.jpg)
    heroAlt: z.string().optional(),
    heroCaption: z.string().optional(),

    // Tóm tắt nhanh (HTML inline cho phép <strong>)
    tldr: z.string(),

    // Tags hiển thị dạng pill
    tags: z.array(z.string()).default([]),

    // Stat cards (lưới số liệu)
    stats: z.array(z.object({ num: z.string(), label: z.string() })).default([]),

    // Video YouTube chèn vào bài (layout rải đều trong nội dung)
    videos: z.array(z.object({
      id: z.string(),
      label: z.string().optional(),
      caption: z.string().optional(),
    })).default([]),

    // FAQ (tối thiểu 3 để sinh FAQPage JSON-LD)
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),

    // Nguồn tham khảo
    sourceUrl: z.string().optional(),
    sourceName: z.string().optional(),
    sourceDomains: z.string().optional(),      // "cnbc.com · reuters.com"

    // Bài liên quan
    related: z.array(z.object({
      href: z.string(),
      cat: z.string().default('AI'),
      title: z.string(),
    })).default([]),

    // about[] cho JSON-LD (dùng Thing, tránh lỗi product-snippet)
    about: z.array(z.string()).default([]),

    // Tiểu sử tác giả tuỳ chỉnh (mặc định dùng bio chung)
    authorBio: z.string().optional(),

    // Cho phép promote lên hero trang chủ
    featured: z.boolean().default(false),
  }),
});

export const collections = { articles };
