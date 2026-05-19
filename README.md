# techvision.click

Trang cá nhân của Nguyễn Tấn Thiên Long — Marketing Lead, AI Builder, Tech Creator.

🌐 **Live**: https://techvision.click/

## Cấu trúc dự án

```
techvision-click/
├── index.html              # Trang chủ
├── blog.html               # Liệt kê Tech News (cards có ảnh + link)
├── reviews.html            # Sản phẩm review affiliate
├── certificates.html       # Credentials
├── cv.html                 # CV
├── 404.html                # Custom 404 page
├── articles/               # Bài dịch tech news tiếng Việt
│   ├── _article-style.css  # CSS chung
│   ├── _article.js         # JS chung (progress, share, bookmark...)
│   └── {slug}.html         # Mỗi bài 1 file
├── uploads/                # Ảnh local (favicon, portrait, thumbnails)
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Crawler rules
├── rss.xml                 # RSS feed for blog
├── manifest.webmanifest    # PWA manifest
└── google*.html            # Google Search Console verification
```

## Stack

- **Static HTML/CSS/JS** thuần — không framework
- **Hosting**: Vercel (auto-deploy từ GitHub)
- **Fonts**: Playfair Display (serif) + DM Sans (sans-serif)
- **Design**: 
  - Background: `#f5f2ed`
  - Text: `#1c1a17`
  - Accent: `#c0392b` (đỏ)
- **Analytics**: Vercel Web Analytics
- **SEO**: Sitemap + RSS + JSON-LD + Open Graph

## Deploy

Auto-deploy: Mỗi commit push vào `main` sẽ tự deploy lên https://techvision.click/ qua Vercel.

Manual deploy (chỉ khi cần):
```bash
vercel --prod
```

## Auto-update blog

Mỗi thứ Hai 8h sáng, scheduled task tự động:
1. Fetch 6 tin tech mới nhất từ RSS feeds quốc tế
2. Dịch sang tiếng Việt + thêm góc nhìn cho người Việt
3. Tạo file `/articles/{slug}.html` mới
4. Cập nhật blog.html + sitemap.xml + rss.xml
5. Commit + push → Vercel auto-deploy

## License

© 2026 Nguyễn Tấn Thiên Long. All rights reserved.
