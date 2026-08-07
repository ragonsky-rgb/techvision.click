#!/usr/bin/env python3
"""Vi sao 61 bai legacy hon 704 bai markdown 15 lan? So sanh co he thong."""
import json, re, os, glob
from collections import Counter, defaultdict
from statistics import median

REPO = "/Users/nguyenlong/techvision-click"
OUT = "/private/tmp/claude-501/-Volumes-Edit-video--1-AI-x-y-d-ng-c-ng-ty-ri-ng-2/2e1858c6-d288-407c-8d09-a6f8d86a48a6/scratchpad"

# ---------- GSC ----------
gsc = {}
from google.oauth2 import service_account
from googleapiclient.discovery import build
cr = service_account.Credentials.from_service_account_file(
    "/Users/nguyenlong/.config/claude-seo/service-account.json",
    scopes=["https://www.googleapis.com/auth/webmasters.readonly"])
sc = build("searchconsole", "v1", credentials=cr, cache_discovery=False)
for r in sc.searchanalytics().query(siteUrl="sc-domain:techvision.click", body={
        "startDate": "2026-05-01", "endDate": "2026-08-05",
        "dimensions": ["page"], "rowLimit": 25000}).execute().get("rows", []):
    u = r["keys"][0]
    if "/articles/" in u:
        gsc[u.split("/articles/")[1].replace(".html", "")] = r["impressions"]

def strip_html(h):
    h = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", h, flags=re.S | re.I)
    return re.sub(r"<[^>]+>", " ", h)

VN_PRICE = re.compile(r"(\d[\d.,]*\s*(triệu|tr\b|nghìn|đồng|VNĐ)|giá.{0,30}Việt Nam)", re.I)
FIRST_HAND = re.compile(r"(mình đã|tôi đã|chúng tôi đã|trải nghiệm thực tế|dùng thử|"
                        r"sau \d+ (ngày|tuần|tháng) dùng|tự đo|thử nghiệm của)", re.I)

def profile(name, text, html, slug, date):
    words = len(text.split())
    return {
        "slug": slug, "date": date, "words": words,
        "media": len(re.findall(r"(youtube\.com/embed|i\.ytimg\.com|<figure|<img)", html)),
        "ilinks": len(set(re.findall(r'href="/articles/([^"]+)\.html"', html))),
        "h2": len(re.findall(r"<h2", html, re.I)),
        "tables": len(re.findall(r"<table", html, re.I)),
        "lists": len(re.findall(r"<ul|<ol", html, re.I)),
        "outlinks": len(set(re.findall(r'href="https?://(?!techvision\.click)([^/"]+)', html))),
        "vn_price": bool(VN_PRICE.search(text)),
        "first_hand": bool(FIRST_HAND.search(text)),
        "impr": gsc.get(slug, 0),
        "kind": name,
    }

rows = []

# ---------- legacy ----------
legacy = {l["slug"]: l for l in json.load(open(f"{REPO}/src/data/legacy-articles.json"))}
for slug, meta in legacy.items():
    p = f"{REPO}/public/articles/{slug}.html"
    if not os.path.exists(p):
        continue
    h = open(p, encoding="utf-8", errors="ignore").read()
    body = h.split("<body", 1)[-1]
    rows.append(profile("legacy", strip_html(body), body, slug, (meta.get("datePublished") or "")[:10]))

# ---------- markdown: doc HTML DA BUILD trong dist/ de so sanh cong bang
# (quet file .md tho se dem ra 0 the <h2>/<a> vi chung duoc sinh luc render)
md_dates = {}
for f in glob.glob(f"{REPO}/src/content/articles/*.md"):
    fm = open(f, encoding="utf-8").read()[:1500]
    d = re.search(r'^datePublished:\s*"(\d{4}-\d{2}-\d{2})', fm, re.M)
    md_dates[os.path.basename(f)[:-3]] = d.group(1) if d else ""

for slug, date in md_dates.items():
    p = f"{REPO}/dist/articles/{slug}.html"
    if not os.path.exists(p):
        continue
    h = open(p, encoding="utf-8", errors="ignore").read()
    body = h.split("<body", 1)[-1]
    rows.append(profile("markdown", strip_html(body), body, slug, date))

# ---------- nhip dang ----------
per_day = defaultdict(lambda: Counter())
for r in rows:
    if r["date"]:
        per_day[r["kind"]][r["date"]] += 1

def stat(kind, key):
    v = [r[key] for r in rows if r["kind"] == kind]
    return median(v) if v else 0

def pct(kind, key):
    v = [r for r in rows if r["kind"] == kind]
    return round(100 * sum(1 for r in v if r[key]) / max(len(v), 1))

lines = []
L = lines.append
L("# Vi sao 61 bai legacy hon 704 bai markdown\n")
for k in ["legacy", "markdown"]:
    v = [r for r in rows if r["kind"] == k]
    hit = [r for r in v if r["impr"] > 0]
    days = per_day[k]
    L(f"## {k}: {len(v)} bai | co impression {len(hit)} ({round(100*len(hit)/max(len(v),1))}%)")
    L(f"   nhip dang        : {len(days)} ngay, trung binh {len(v)/max(len(days),1):.1f} bai/ngay, "
      f"ngay dinh {max(days.values()) if days else 0} bai")
    L(f"   do dai (trung vi): {stat(k,'words'):.0f} tu")
    L(f"   media            : {stat(k,'media'):.0f}")
    L(f"   link noi bo      : {stat(k,'ilinks'):.0f}")
    L(f"   link ra ngoai    : {stat(k,'outlinks'):.0f}  <- tro toi nguon that")
    L(f"   so muc h2        : {stat(k,'h2'):.0f}")
    L(f"   co bang so sanh  : {pct(k,'tables')}% bai")
    L(f"   co gia Viet Nam  : {pct(k,'vn_price')}% bai")
    L(f"   co trai nghiem   : {pct(k,'first_hand')}% bai")
    L("")

# ---------- trong CUNG nhom markdown, bai co impression khac gi? ----------
md = [r for r in rows if r["kind"] == "markdown"]
win = [r for r in md if r["impr"] > 0]
lose = [r for r in md if r["impr"] == 0]
L("## Doi chung trong CUNG nhom markdown (loai bo yeu to legacy/moi)")
L(f"   {len(win)} bai CO impression  vs  {len(lose)} bai KHONG\n")
for key, label in [("words", "do dai"), ("media", "media"), ("ilinks", "link noi bo"),
                   ("outlinks", "link ra ngoai"), ("h2", "so muc h2")]:
    a = median([r[key] for r in win]) if win else 0
    b = median([r[key] for r in lose]) if lose else 0
    L(f"   {label:16}: co={a:.0f}  khong={b:.0f}")
for key, label in [("vn_price", "co gia Viet Nam"), ("first_hand", "co trai nghiem"), ("tables", "co bang")]:
    a = round(100 * sum(1 for r in win if r[key]) / max(len(win), 1))
    b = round(100 * sum(1 for r in lose if r[key]) / max(len(lose), 1))
    L(f"   {label:16}: co={a}%  khong={b}%")

open(f"{OUT}/legacy-vs-md.txt", "w", encoding="utf-8").write("\n".join(lines))
print("\n".join(lines))
