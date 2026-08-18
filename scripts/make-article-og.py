#!/usr/bin/env python3
"""Dung anh chia se 1200x630 RIENG cua TechVision cho tung bai viet.

Ly do co script nay: ngay 10/08/2026 ra soat 138/140 bai indexable thi 138 bai
deu lay thumbnail YouTube cua nguoi khac lam heroImage, tuc lam luon og:image.
Trong so do 74 bai dinh mat nguoi sang tao khac, logo dai truyen hinh (CNN,
Bloomberg, PCMag, THDT, VTVcab) hoac art ban quyen (Marvel, Nintendo, Rockstar,
giai esports). Chia se bai len mang xa hoi thi tam anh dai dien cho TechVision
lai la mat va thuong hieu cua nguoi khac.

Script nay dung the chu, 100% tai san cua site, khong mat nguoi, khong logo la.

    python3 scripts/make-article-og.py <slug> [<slug> ...]
    python3 scripts/make-article-og.py --all-from data/og-todo.txt

Anh ra o public/uploads/og-article/<slug>.jpg. Sau khi chay, gan vao frontmatter:
    ogImage: "https://techvision.click/uploads/og-article/<slug>.jpg"
"""
import os
import re
import sys
import glob

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG = "#111010"
INK = "#f0ede8"
MUTED = "#a8a29a"
ACCENT = "#c0392b"
FONT_DIR = "/System/Library/Fonts/Supplemental/"
OUT_DIR = "public/uploads/og-article"

# Bo dau cau trang tri o cuoi tieu de cho the trong gon.
TRIM = " :-–—"


def load(slug):
    path = f"src/content/articles/{slug}.md"
    if not os.path.exists(path):
        # Trang HTML cu trong public/articles/ khong co frontmatter, doc tu JSON-LD.
        legacy = f"public/articles/{slug}.html"
        if os.path.exists(legacy):
            return load_legacy(legacy)
        raise SystemExit(f"khong thay {path} lan {legacy}")
    fm = open(path, encoding="utf-8").read().split("---", 2)[1]

    def field(name):
        m = re.search(r'^%s:\s*"([^"]+)"' % name, fm, re.M)
        return m.group(1) if m else ""

    # Uu tien dateModified: co bai da doi tieu de sang thang moi nhung
    # datePublished van la ngay goc, the chia se se hien ngay lech voi tieu de.
    day = (field("dateModified") or field("datePublished"))[:10]
    return field("title"), field("category"), day


def load_legacy(path):
    """Doc tieu de, chuyen muc, ngay tu JSON-LD cua trang HTML cu."""
    html = open(path, encoding="utf-8").read()

    def grab(pattern, fallback=""):
        m = re.search(pattern, html)
        return m.group(1).strip() if m else fallback

    title = grab(r'"headline"\s*:\s*"([^"]+)"') or grab(r"<title>([^<]+)</title>")
    cat = grab(r'"articleSection"\s*:\s*"([^"]+)"')
    day = (grab(r'"dateModified"\s*:\s*"([^"]+)"')
           or grab(r'"datePublished"\s*:\s*"([^"]+)"'))[:10]
    return title, cat, day


def wrap(draw, text, font, max_w):
    """Xuong dong theo tu, tra ve danh sach dong."""
    words, lines, cur = text.split(), [], ""
    for w in words:
        probe = (cur + " " + w).strip()
        if draw.textlength(probe, font=font) <= max_w:
            cur = probe
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def render(slug):
    title, cat, date = load(slug)
    title = title.rstrip(TRIM)

    canvas = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(canvas)

    # Chu thuong hieu co lon, mau gan sat nen, lap khoang trong goc phai duoi.
    f_mark = ImageFont.truetype(FONT_DIR + "Arial Bold.ttf", 124)
    mark = "TECHVISION"
    d.text((W - 40 - d.textlength(mark, font=f_mark), H - 148),
           mark, font=f_mark, fill="#1e1b1a")

    d.rectangle([0, 0, 10, H], fill=ACCENT)

    x, max_w = 72, W - 72 - 90

    # Tieu de bai dai hon tieu de trang tinh nen phai vua co chu vua xuong dong:
    # ha co den khi bo vua 3 dong, neu khong se tran ra ngoai khung.
    size = 62
    while size > 34:
        f_title = ImageFont.truetype(FONT_DIR + "Arial Bold.ttf", size)
        lines = wrap(d, title, f_title, max_w)
        if len(lines) <= 3:
            break
        size -= 3
    else:
        lines = lines[:3]
        lines[-1] = lines[-1].rstrip() + "..."

    f_kicker = ImageFont.truetype(FONT_DIR + "Arial Bold.ttf", 24)
    f_foot = ImageFont.truetype(FONT_DIR + "Arial.ttf", 29)

    kicker = " · ".join(p for p in [cat.upper(), date] if p)
    d.text((x, 132), kicker, font=f_kicker, fill=ACCENT)

    y = 196
    for ln in lines:
        d.text((x, y), ln, font=f_title, fill=INK)
        y += int(size * 1.28)

    d.text((x, H - 108), "techvision.click", font=f_foot, fill=MUTED)

    os.makedirs(OUT_DIR, exist_ok=True)
    out = f"{OUT_DIR}/{slug}.jpg"
    canvas.save(out, "JPEG", quality=88, optimize=True, progressive=True)
    print(f"OK {out}  {W}x{H}  ({len(lines)} dong, co chu {size})")
    return out


if __name__ == "__main__":
    args = sys.argv[1:]
    if not args:
        raise SystemExit(__doc__)
    if args[0] == "--all-from":
        slugs = [l.strip() for l in open(args[1], encoding="utf-8") if l.strip()]
    else:
        slugs = args
    for s in slugs:
        render(s)
