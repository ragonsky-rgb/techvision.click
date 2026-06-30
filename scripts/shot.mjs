#!/usr/bin/env node
// shot.mjs — render the REAL built page with headless Chrome and save PNGs.
// Goal: let an AI/agent (or you) SEE the rendered HTML (true pixels) instead of
// guessing layout from source. Serves dist/ at root so absolute asset paths
// (/articles/..., /_astro/...) resolve correctly, then screenshots at phone + desktop.
//
// Usage:
//   node scripts/shot.mjs /blog.html                 # phone(390) + desktop(1280)
//   node scripts/shot.mjs /articles/foo.html 390     # only one width
//   node scripts/shot.mjs /blog.html 390,768,1280    # custom widths
//
// Output: .shots/<page>-<width>.png  (gitignored). Re-run after `npx astro build`.

import { createServer } from 'node:http';
import { readFile, mkdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { extname, join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const OUT = join(ROOT, '.shots');

const MIME = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.xml': 'application/xml',
  '.txt': 'text/plain',
};

const CHROME_CANDIDATES = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
];

function findChrome() {
  for (const p of CHROME_CANDIDATES) if (existsSync(p)) return p;
  return null;
}

async function serveDist() {
  if (!existsSync(DIST)) throw new Error('dist/ not found. Run `npx astro build` first.');
  const server = createServer(async (req, res) => {
    try {
      let p = decodeURIComponent(req.url.split('?')[0]);
      if (p.endsWith('/')) p += 'index.html';
      let file = join(DIST, p);
      if (existsSync(file) && (await stat(file)).isDirectory()) file = join(file, 'index.html');
      if (!existsSync(file)) { res.writeHead(404); res.end('404'); return; }
      const body = await readFile(file);
      res.writeHead(200, { 'Content-Type': MIME[extname(file)] || 'application/octet-stream' });
      res.end(body);
    } catch (e) { res.writeHead(500); res.end(String(e)); }
  });
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  return { server, port: server.address().port };
}

function shoot(chrome, url, width, height, outPath) {
  return new Promise((res, rej) => {
    const args = [
      '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-sandbox',
      '--force-device-scale-factor=1', `--window-size=${width},${height}`,
      `--screenshot=${outPath}`, '--virtual-time-budget=2500', url,
    ];
    const ps = spawn(chrome, args, { stdio: 'ignore' });
    ps.on('error', rej);
    ps.on('exit', () => existsSync(outPath) ? res(outPath) : rej(new Error('screenshot failed: ' + outPath)));
  });
}

const main = async () => {
  const path = process.argv[2] || '/blog.html';
  const widths = (process.argv[3] || '390,1280').split(',').map((w) => parseInt(w.trim(), 10)).filter(Boolean);
  const chrome = findChrome();
  if (!chrome) { console.error('No Chrome/Chromium/Edge found. Install Google Chrome.'); process.exit(1); }
  await mkdir(OUT, { recursive: true });
  const { server, port } = await serveDist();
  const slug = path.replace(/^\//, '').replace(/[\/.]+/g, '_').replace(/_html$/, '') || 'index';
  const made = [];
  for (const w of widths) {
    const h = w < 600 ? 844 : 900; // phone vs desktop default height (full page captured anyway)
    const out = join(OUT, `${slug}-${w}.png`);
    try { await shoot(chrome, `http://127.0.0.1:${port}${path}`, w, h, out); made.push(out); }
    catch (e) { console.error('  fail', w, e.message); }
  }
  server.close();
  console.log('Saved:');
  made.forEach((m) => console.log('  ' + m));
};

main().catch((e) => { console.error(e); process.exit(1); });
