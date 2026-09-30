#!/usr/bin/env python3
"""Sinh khối <figure class="tv-scene"> (biểu đồ đường động) từ dữ liệu của một video TechVision.

    python3 scripts/make-scene-chart.py <data.js | data.json> <spec.json>  > figure.html

data: file data.js của video (window.DATA={...}) hoặc JSON thường, chứa các chuỗi [[năm, giá], ...].
spec.json:
  {"title": "...", "caption": "...", "unit": "USD", "ymin": 700, "ymax": 1500, "ystep": 200,
   "series": [{"key": "top", "label": "Mẫu cao cấp nhất", "color": "var(--text)"},
              {"key": "base", "label": "Bản thường", "color": "var(--accent)"}],
   "peak": {"key": "top", "label": "iPhone XS Max"}}

Vì sao: video và bài viết dùng CHUNG một nguồn số (data.js đã soát khi làm video), nên
biểu đồ trên web không thể lệch số với video. SVG vẽ sẵn trạng thái cuối (đọc được khi tắt JS,
bot đọc được chữ); public/scenes/scene.js chỉ thêm chuyển động theo cuộn trang.
Màu dùng biến CSS của trang bài viết nên tự đổi theo chế độ tối.
"""
import json, re, sys

W, H = 600, 380
L, R, T, B = 52, 132, 30, 40          # lề: phải rộng để ghi nhãn cuối đường


def vn(n):
    return f"{round(n):,}".replace(",", ".")


def load(path):
    s = open(path, encoding="utf-8").read()
    if path.endswith(".js"):
        s = s[s.index("{"): s.rindex("}") + 1]
    return json.loads(s)


def main():
    data, spec = load(sys.argv[1]), json.load(open(sys.argv[2], encoding="utf-8"))
    ymin, ymax, ystep = spec["ymin"], spec["ymax"], spec["ystep"]
    years = [y for y, _ in data[spec["series"][0]["key"]]]
    x0, x1 = years[0], years[-1]
    X = lambda y: L + (y - x0) / (x1 - x0) * (W - L - R)
    Y = lambda v: T + (ymax - v) / (ymax - ymin) * (H - T - B)
    o = [f'<svg viewBox="0 0 {W} {H}" role="img" aria-label="{spec["title"]}" '
         f'style="width:100%;height:auto;font-family:var(--sans);display:block">']
    for v in range(ymin + ystep - ymin % ystep if ymin % ystep else ymin, ymax + 1, ystep):
        o.append(f'<line x1="{L}" x2="{W - R}" y1="{Y(v):.1f}" y2="{Y(v):.1f}" stroke="var(--line)" stroke-width="1"/>'
                 f'<text x="{L - 7}" y="{Y(v) + 4:.1f}" text-anchor="end" font-size="15" fill="var(--dim)">{vn(v)}</text>')
    for y in years:
        if (y - x0) % 6 == 0 or y == x1:
            o.append(f'<text x="{X(y):.1f}" y="{H - B + 24}" text-anchor="middle" font-size="15" fill="var(--dim)">{y}</text>')
    n = len(spec["series"])
    for i, s in enumerate(spec["series"]):
        pts = data[s["key"]]
        a, b = round(i / n * 0.9, 2), round((i + 1) / n * 0.9, 2)       # vẽ lần lượt từng đường
        d = " ".join(("M" if j == 0 else "L") + f"{X(y):.1f} {Y(v):.1f}" for j, (y, v) in enumerate(pts))
        o.append(f'<path data-draw="{a},{b}" d="{d}" fill="none" stroke="{s["color"]}" stroke-width="4" '
                 f'stroke-linejoin="round" stroke-linecap="round"/>')
        y, v = pts[-1]
        o.append(f'<g data-show="{b - 0.05:.2f},{b + 0.08:.2f}"><circle cx="{X(y):.1f}" cy="{Y(v):.1f}" r="5" fill="{s["color"]}"/>'
                 f'<text x="{X(y) + 10:.1f}" y="{Y(v) - 2:.1f}" font-size="16" font-weight="700" fill="{s["color"]}">{s["label"]}</text>'
                 f'<text x="{X(y) + 10:.1f}" y="{Y(v) + 18:.1f}" font-size="16" fill="var(--text)" data-count="{b - 0.05:.2f},{b + 0.08:.2f}">'
                 f'{vn(v)} {spec["unit"]}</text></g>')
    if spec.get("peak"):
        pk = spec["peak"]; y, v = max(data[pk["key"]], key=lambda p: p[1])
        o.append(f'<g data-show="0.9,1"><circle cx="{X(y):.1f}" cy="{Y(v):.1f}" r="6" fill="none" stroke="var(--accent)" stroke-width="2"/>'
                 f'<text x="{X(y):.1f}" y="{Y(v) - 14:.1f}" text-anchor="middle" font-size="15" font-weight="700" fill="var(--text)">'
                 f'{pk["label"]} {y}: {vn(v)} {spec["unit"]}</text></g>')
    o.append("</svg>")
    print(f'<figure class="tv-scene">\n  {"".join(o)}\n  <figcaption>{spec["caption"]}</figcaption>\n</figure>\n'
          f'<script defer src="/scenes/scene.js"></script>')


if __name__ == "__main__":
    main()
