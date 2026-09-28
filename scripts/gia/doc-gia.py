#!/usr/bin/env python3
"""Doc gia truc tiep tren trang nha ban VN (dung cho bai co gia, AGENTS.md §0a-bis).

  python3 scripts/gia/doc-gia.py <url> [<url> ...]      # tu nhan dien nha ban theo domain
  python3 scripts/gia/doc-gia.py <url> | grep -i "fold8"  # loc dong can

Ho tro (do 28/09/2026):
  - thegioididong.com : trang danh muc (vd /dtdd, /may-tinh-bang, /laptop, /tai-nghe) -> ten | gia ban | gia gach | % | link
  - cellphones.com.vn : trang danh muc (vd /mobile/samsung.html, /tablet/ipad.html)   -> ten | gia ban | gia gach | link
  - fptshop.com.vn    : trang SAN PHAM (vd /dien-thoai/iphone-17)                       -> ten | gia ban (JSON-LD)
  - trang bat ky co JSON-LD Product                                                      -> ten | gia
Trang dung JavaScript (viettel.vn, shopee, lazada...) thi curl khong doc duoc: mo bang trinh duyet va doc chu.
Ghi ro "gia doc ngay DD/MM/YYYY" trong bai. Khong doc duoc thi bo nha ban do, KHONG doan gia.
"""
import html, re, subprocess, sys

UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129 Safari/537.36'


def fetch(url):
    return subprocess.run(['curl', '-sL', '-A', UA, '--max-time', '30', url],
                          capture_output=True, text=True).stdout


def clean(x):
    return html.unescape(x or '').replace('&#x20AB;', '').replace('₫', '').replace('đ', '').strip()


def tgdd(s):
    for m in re.finditer(r"<a href='([^']*)'[^>]*data-name=\"([^\"]*)\"[^>]*data-price=\"([^\"]*)\"[^>]*>(.*?)</a>", s, re.S):
        href, name, price, body = m.groups()
        old = re.search(r'price-old[^"]*">([^<]*)', body)
        pc = re.search(r'class="percent">([^<]*)', body)
        print(f"{html.unescape(name)} | {int(float(price)):,} | {clean(old.group(1)) if old else '-'} | {pc.group(1) if pc else ''} | {href}")


def cps(s):
    seen = set()
    for chunk in s.split('class="product-info-container')[1:]:
        chunk = chunk[:6000]
        u = re.search(r'href="(https://cellphones\.com\.vn/[^"]+\.html)"', chunk)
        n = re.search(r'<h3>(.*?)</h3>', chunk, re.S)
        p = re.search(r'product__price--show">\s*([^<]*?)\s*<', chunk)
        o = re.search(r'product__price--through">\s*([^<]*?)\s*<', chunk)
        if not (n and p) or (n.group(1), p.group(1)) in seen:
            continue
        seen.add((n.group(1), p.group(1)))
        print(f"{html.unescape(n.group(1)).strip()} | {clean(p.group(1))} | {clean(o.group(1)) if o else '-'} | {u.group(1) if u else ''}")


def jsonld(s):
    found = False
    for b in re.findall(r'<script[^>]*application/ld\+json[^>]*>(.*?)</script>', s, re.S):
        for m in re.finditer(r'"@type"\s*:\s*"Product".*?"name"\s*:\s*"([^"]*)".*?"price"\s*:\s*"?([\d\.]+)', b, re.S):
            print(f"{m.group(1)} | {int(float(m.group(2))):,}")
            found = True
    if not found:
        print('(khong thay JSON-LD Product: trang co the dung JS, mo bang trinh duyet)')


for url in sys.argv[1:]:
    print('=====', url)
    s = fetch(url)
    if 'thegioididong.com' in url and "data-price=" in s:
        tgdd(s)
    elif 'cellphones.com.vn' in url and 'product-info-container' in s:
        cps(s)
    else:
        jsonld(s)
