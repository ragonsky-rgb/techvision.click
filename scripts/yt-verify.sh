#!/bin/bash
# Verify video YouTube truoc khi dung trong bai (AGENTS.md §4, §0b.3).
#   bash scripts/yt-verify.sh <ID> [<ID> ...]
# Dat khi: max=200 va size > 8000 byte (neu khong thi dung hqdefault), oEmbed ra ten kenh,
# playableInEmbed:true (neu dung lam iframe), used=0 (chua dung o bai khac).
UA='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129 Safari/537.36'
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
for v in "$@"; do
  mx=$(curl -s -A "$UA" "https://i.ytimg.com/vi/$v/maxresdefault.jpg" -o /dev/null -w '%{http_code}/%{size_download}')
  hq=$(curl -s -A "$UA" "https://i.ytimg.com/vi/$v/hqdefault.jpg" -o /dev/null -w '%{http_code}/%{size_download}')
  oe=$(curl -s "https://www.youtube.com/oembed?url=https://youtu.be/$v&format=json" | python3 -c "import sys,json;d=json.load(sys.stdin);print(d.get('author_name'),'|',d.get('title')[:50])" 2>/dev/null || echo "OEMBED FAIL (video chet hoac rieng tu)")
  emb=$(curl -s -A "$UA" "https://www.youtube.com/watch?v=$v" | grep -o '"playableInEmbed":[a-z]*' | head -1)
  used=$(grep -rl -- "$v" "$ROOT/src/content" "$ROOT/public/articles" 2>/dev/null | wc -l | tr -d ' ')
  echo "$v max=$mx hq=$hq $emb used=$used | $oe"
done
