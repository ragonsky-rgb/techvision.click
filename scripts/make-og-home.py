#!/usr/bin/env python3
"""Dung anh og:image 1200x630 cho trang chu tu anh chan dung co san.

Ly do co script nay: public/index.html khai og:image:width 1200 / height 630
nhung file portrait.jpg that ra 960x957 (gan vuong). Facebook, LinkedIn, Zalo
deu crop theo ti le 1.91:1 nen anh bi cat mat dau hoac mat than, va viec khai
sai kich thuoc con khien mot so trinh doc bo qua anh.

Chay lai khi doi anh chan dung hoac doi ten thuong hieu:
    python3 scripts/make-og-home.py
"""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG = "#111010"
INK = "#f0ede8"
MUTED = "#a8a29a"
ACCENT = "#c0392b"

SRC = "public/uploads/portrait.jpg"
OUT = "public/uploads/og-home.jpg"

FONT_DIR = "/System/Library/Fonts/Supplemental/"
f_sub = ImageFont.truetype(FONT_DIR + "Arial.ttf", 31)
f_kicker = ImageFont.truetype(FONT_DIR + "Arial Bold.ttf", 24)

canvas = Image.new("RGB", (W, H), BG)

# Anh chan dung chiem 42% ben phai. Crop lech ve BEN PHAI anh goc vi mat nam o
# do; crop giua se ra than cay chan giua khung.
photo_w = int(W * 0.42)
src = Image.open(SRC).convert("RGB")
scale = max(photo_w / src.width, H / src.height)
resized = src.resize((round(src.width * scale), round(src.height * scale)), Image.LANCZOS)
left = resized.width - photo_w
top = (resized.height - H) // 2
canvas.paste(resized.crop((left, top, left + photo_w, top + H)), (W - photo_w, 0))

# Ha sang toan bo anh mot chut cho hop tong nen toi, roi phu dai chuyen mau
# rong de khong lo duong noi thang dung giua anh va nen.
dim = Image.new("RGB", (photo_w, H), BG)
region = canvas.crop((W - photo_w, 0, W, H))
canvas.paste(Image.blend(region, dim, 0.18), (W - photo_w, 0))

# Mask phai DAC o mep trai (sat chu) va TRONG dan ve phai, nguoc lai se tao
# mot vet toi chan ngang giua anh.
FADE = 300
fade = Image.new("L", (FADE, 1))
for i in range(FADE):
    t = 1 - i / (FADE - 1)
    fade.putpixel((i, 0), int(255 * (t * t)))
canvas.paste(Image.new("RGB", (FADE, H), BG), (W - photo_w, 0), fade.resize((FADE, H)))

d = ImageDraw.Draw(canvas)
d.rectangle([0, 0, 10, H], fill=ACCENT)

x = 72
TITLE = "Nguyễn Tấn Thiên Long"
# Co chu tu co lai cho vua cot trai, tru them le de khong dinh dai chuyen mau.
max_w = W - photo_w - x - 60
size = 68
while size > 34:
    f_title = ImageFont.truetype(FONT_DIR + "Arial Bold.ttf", size)
    if d.textlength(TITLE, font=f_title) <= max_w:
        break
    size -= 2

d.text((x, 150), "TECHVISION.CLICK", font=f_kicker, fill=ACCENT)
d.text((x, 205), TITLE, font=f_title, fill=INK)
d.text((x, 300), "Review công nghệ thực chiến,", font=f_sub, fill=INK)
d.text((x, 344), "ứng dụng AI và marketing.", font=f_sub, fill=INK)
d.text((x, 424), "Không filler, không clickbait.", font=f_sub, fill=MUTED)

canvas.save(OUT, "JPEG", quality=88, optimize=True, progressive=True)
print(f"✅ {OUT}  {W}x{H}")
