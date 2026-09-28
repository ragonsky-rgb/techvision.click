#!/usr/bin/env python3
"""Tim video YouTube theo tu khoa (khong can API key).

  python3 scripts/yt-tim.py "galaxy z fold8 danh gia" "airpods pro 3 review"
In: videoId | kenh | tieu de | dang luc | do dai. Sau do verify bang scripts/yt-verify.sh.
"""
import json, re, subprocess, sys, urllib.parse

UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129 Safari/537.36'
for q in sys.argv[1:]:
    print('=====', q)
    s = subprocess.run(['curl', '-sL', '-A', UA, '-H', 'Accept-Language: vi', '--max-time', '30',
                        'https://www.youtube.com/results?search_query=' + urllib.parse.quote(q)],
                       capture_output=True, text=True).stdout
    m = re.search(r'var ytInitialData = (\{.*?\});</script>', s)
    if not m:
        print('(khong doc duoc trang ket qua)')
        continue
    out = []

    def walk(o):
        if isinstance(o, dict):
            if 'videoRenderer' in o:
                v = o['videoRenderer']
                t = ''.join(r.get('text', '') for r in v.get('title', {}).get('runs', []))
                ch = ''.join(r.get('text', '') for r in v.get('ownerText', {}).get('runs', []))
                out.append(f"{v['videoId']} | {ch[:25]} | {t[:80]} | {v.get('publishedTimeText', {}).get('simpleText', '')} | {v.get('lengthText', {}).get('simpleText', '')}")
            for x in o.values():
                walk(x)
        elif isinstance(o, list):
            for x in o:
                walk(x)

    walk(json.loads(m.group(1)))
    print('\n'.join(out[:8]))
