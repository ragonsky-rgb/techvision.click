#!/bin/bash
# Sinh PDF cho CV Harvard (VI + EN) tu public/*.html - chay lai moi khi sua CV
cd "$(dirname "$0")/.."
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="public/cv/cv-nguyen-tan-thien-long-harvard.pdf" \
  "file://$(pwd)/public/cv-harvard.html" 2>/dev/null
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="public/cv/cv-nguyen-tan-thien-long-harvard-en.pdf" \
  "file://$(pwd)/public/cv-harvard-en.html" 2>/dev/null
ls -la public/cv/
