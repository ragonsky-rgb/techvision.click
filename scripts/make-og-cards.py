#!/usr/bin/env python3
"""Dung anh chia se 1200x630 cho cac trang tinh cua site.

Ly do co script nay: public/index.html khai og:image:width 1200 / height 630
nhung file portrait.jpg that ra 960x957 (gan vuong). Facebook, LinkedIn, Zalo
deu crop theo ti le 1.91:1 nen anh bi cat mat dau hoac mat than, va viec khai
sai kich thuoc con khien mot so trinh doc bo qua anh.

Sau do mo rong ra cac trang tinh khac: cv, cv-en, certificates, chinh-sach
truoc day khong khai og:image nao ca, nen chia se len Facebook/LinkedIn/Zalo
chi ra mot dong chu tran. Rieng cv.html la trang tac gia ma MOI bai viet deu
tro toi trong schema (author.url), nen no can co the chia se tu te nhat.

Chay lai khi doi anh chan dung, doi ten thuong hieu, hoac them trang tinh:
    python3 scripts/make-og-cards.py
"""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG = "#111010"
INK = "#f0ede8"
MUTED = "#a8a29a"
ACCENT = "#c0392b"

SRC = "public/uploads/portrait.jpg"
FONT_DIR = "/System/Library/Fonts/Supplemental/"

# Moi the: ten file, tieu de, hai dong mo ta, dong xam cuoi, co dung anh khong.
# Trang chinh sach khong dung anh chan dung vi noi dung la quy tac bien tap,
# de anh nguoi vao se giong trang gioi thieu ca nhan.
CARDS = [
    dict(out="og-home.jpg", kicker="TECHVISION.CLICK", title="Nguyễn Tấn Thiên Long",
         lines=["Review công nghệ thực chiến,", "ứng dụng AI và marketing."],
         foot="Không filler, không clickbait.", photo=True),
    dict(out="og-cv.jpg", kicker="CV & PORTFOLIO", title="Nguyễn Tấn Thiên Long",
         lines=["Marketing Lead, AI Builder,", "Tech Creator tại Việt Nam."],
         foot="techvision.click/cv.html", photo=True),
    dict(out="og-cv-en.jpg", kicker="CV & PORTFOLIO", title="Nguyen Tan Thien Long",
         lines=["Marketing Lead, AI Builder", "and Tech Creator in Vietnam."],
         foot="techvision.click/cv-en.html", photo=True),
    dict(out="og-certificates.jpg", kicker="CREDENTIALS", title="Chứng chỉ Coursera",
         lines=["IBM Data Science, Python,", "University of Michigan, Voxy."],
         foot="Xác minh trực tiếp với đơn vị cấp.", photo=True),
    dict(out="og-chinh-sach.jpg", kicker="MINH BẠCH", title="Chính sách biên tập",
         lines=["Cách TechVision kiểm chứng tin,", "đính chính và công bố quyền lợi."],
         foot="techvision.click/chinh-sach.html", photo=False),
    # Trang su kien Apple chi co mot anh minh hoa 1100x1104 (gan vuong), chia se
    # thang len se bi crop hong. Dung chinh anh do dat vao khung 1200x630.
    # Anh nay la anh DUNG theo tin don va khong he xuat hien trong than trang,
    # nen khong cho nao ghi ro dieu do. Phai ghi ngay tren the chia se, neu
    # khong nguoi luot mang se hieu la anh san pham that.
    dict(out="og-apple-september-2026.jpg", kicker="SỰ KIỆN APPLE 9/2026",
         title="iPhone 18 Pro & Fold",
         lines=["Theo dõi trực tiếp: giờ diễn ra,", "sản phẩm ra mắt, giá Việt Nam."],
         foot="Ảnh dựng theo tin đồn, chưa phải máy thật.", photo=True,
         src="public/images/apple-september-2026/iphone-ultra-render.jpg"),
]


def render(card):
    canvas = Image.new("RGB", (W, H), BG)
    photo_w = 0

    if card["photo"]:
        # Anh chan dung chiem 42% ben phai. Crop lech ve BEN PHAI anh goc vi mat
        # nam o do; crop giua se ra than cay chan giua khung.
        photo_w = int(W * 0.42)
        src = Image.open(card.get("src", SRC)).convert("RGB")
        scale = max(photo_w / src.width, H / src.height)
        resized = src.resize((round(src.width * scale), round(src.height * scale)), Image.LANCZOS)
        left = resized.width - photo_w if card.get("src") is None else (resized.width - photo_w) // 2
        top = (resized.height - H) // 2
        canvas.paste(resized.crop((left, top, left + photo_w, top + H)), (W - photo_w, 0))

        # Ha sang toan bo anh mot chut cho hop tong nen toi, roi phu dai chuyen
        # mau rong de khong lo duong noi thang dung giua anh va nen.
        dim = Image.new("RGB", (photo_w, H), BG)
        region = canvas.crop((W - photo_w, 0, W, H))
        canvas.paste(Image.blend(region, dim, 0.18), (W - photo_w, 0))

        # Mask phai DAC o mep trai (sat chu) va TRONG dan ve phai, nguoc lai se
        # tao mot vet toi chan ngang giua anh.
        FADE = 300
        fade = Image.new("L", (FADE, 1))
        for i in range(FADE):
            t = 1 - i / (FADE - 1)
            fade.putpixel((i, 0), int(255 * (t * t)))
        canvas.paste(Image.new("RGB", (FADE, H), BG), (W - photo_w, 0), fade.resize((FADE, H)))

    d = ImageDraw.Draw(canvas)

    # The khong co anh se trong hoac nua phai. Dat chu thuong hieu co lon, mau
    # gan sat mau nen o goc phai duoi de lap khoang trong ma khong tranh doc voi
    # phan chu chinh.
    if not card["photo"]:
        f_mark = ImageFont.truetype(FONT_DIR + "Arial Bold.ttf", 124)
        mark = "TECHVISION"
        d.text((W - 40 - d.textlength(mark, font=f_mark), H - 148),
               mark, font=f_mark, fill="#1e1b1a")

    d.rectangle([0, 0, 10, H], fill=ACCENT)

    x = 72
    f_sub = ImageFont.truetype(FONT_DIR + "Arial.ttf", 31)
    f_kicker = ImageFont.truetype(FONT_DIR + "Arial Bold.ttf", 24)

    # Co chu tu co lai cho vua cot trai, tru them le de khong dinh dai chuyen mau.
    max_w = W - photo_w - x - 60
    size = 68
    while size > 34:
        f_title = ImageFont.truetype(FONT_DIR + "Arial Bold.ttf", size)
        if d.textlength(card["title"], font=f_title) <= max_w:
            break
        size -= 2

    d.text((x, 150), card["kicker"], font=f_kicker, fill=ACCENT)
    d.text((x, 205), card["title"], font=f_title, fill=INK)
    d.text((x, 300), card["lines"][0], font=f_sub, fill=INK)
    d.text((x, 344), card["lines"][1], font=f_sub, fill=INK)
    d.text((x, 424), card["foot"], font=f_sub, fill=MUTED)

    out = "public/uploads/" + card["out"]
    canvas.save(out, "JPEG", quality=88, optimize=True, progressive=True)
    print(f"✅ {out}  {W}x{H}")


for c in CARDS:
    render(c)
