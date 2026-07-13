#!/usr/bin/env node
// shot.mjs — render the REAL built page with headless Chrome and save PNGs.
// Goal: let an AI/agent (or you) SEE the rendered HTML (true pixels) instead of
// guessing layout from source. Serves dist/ at root so absolute asset paths
// (/articles/..., /_astro/...) resolve correctly, then screenshots at phone + desktop.
//
// WHY CDP (not --screenshot): headless Chrome clamps --window-size width to a
// ~500px minimum, so "390" pages actually rendered at a 500px CSS viewport and
// got cropped — text/buttons looked like they overflowed when the live page was
// fine. We now drive Chrome over the DevTools Protocol (Node's built-in
// WebSocket, no deps) and use Emulation.setDeviceMetricsOverride, which gives an
// exact 390px viewport with mobile emulation, matching a real phone browser.
//
// Usage:
//   node scripts/shot.mjs /blog.html                 # phone(390) + desktop(1280)
//   node scripts/shot.mjs /articles/foo.html 390     # only one width
//   node scripts/shot.mjs /blog.html 390,768,1280    # custom widths
//
// Output: .shots/<page>-<width>.png  (gitignored). Re-run after `npx astro build`.

import { createServer } from 'node:http';
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { extname, join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const OUT = join(ROOT, '.shots');
const MAX_PAGE_HEIGHT = 16000; // cap full-page capture so PNGs stay sane

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

// ---- minimal Chrome DevTools Protocol client (Node >=22 global WebSocket) ----

function launchChrome(chrome) {
  return new Promise((res, rej) => {
    const ps = spawn(chrome, [
      '--headless=new', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
      '--no-first-run', '--no-default-browser-check',
      '--remote-debugging-port=0', 'about:blank',
    ], { stdio: ['ignore', 'ignore', 'pipe'] });
    let err = '';
    ps.stderr.on('data', (d) => {
      err += d;
      const m = err.match(/DevTools listening on (ws:\/\/\S+)/);
      if (m) res({ ps, wsUrl: m[1] });
    });
    ps.on('error', rej);
    ps.on('exit', () => rej(new Error('Chrome exited before DevTools was ready:\n' + err.slice(-500))));
    setTimeout(() => rej(new Error('Timed out waiting for DevTools endpoint')), 15000);
  });
}

function connectCdp(wsUrl) {
  return new Promise((res, rej) => {
    const ws = new WebSocket(wsUrl);
    let id = 0;
    const pending = new Map();
    const eventWaiters = [];
    ws.onopen = () => res({
      send(method, params = {}, sessionId) {
        const msg = { id: ++id, method, params };
        if (sessionId) msg.sessionId = sessionId;
        ws.send(JSON.stringify(msg));
        return new Promise((rs, rj) => pending.set(msg.id, { rs, rj, method }));
      },
      waitEvent(method, sessionId, timeoutMs = 15000) {
        return new Promise((rs, rj) => {
          const t = setTimeout(() => rj(new Error('timeout waiting for ' + method)), timeoutMs);
          eventWaiters.push({ method, sessionId, rs: (p) => { clearTimeout(t); rs(p); } });
        });
      },
      close() { ws.close(); },
    });
    ws.onerror = () => rej(new Error('WebSocket error connecting to ' + wsUrl));
    ws.onmessage = (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id && pending.has(msg.id)) {
        const { rs, rj, method } = pending.get(msg.id);
        pending.delete(msg.id);
        msg.error ? rj(new Error(method + ': ' + msg.error.message)) : rs(msg.result);
      } else if (msg.method) {
        for (let i = eventWaiters.length - 1; i >= 0; i--) {
          const w = eventWaiters[i];
          if (w.method === msg.method && (!w.sessionId || w.sessionId === msg.sessionId)) {
            eventWaiters.splice(i, 1);
            w.rs(msg.params);
          }
        }
      }
    };
  });
}

async function shoot(cdp, sessionId, url, width, height, outPath) {
  // Exact viewport — this is the fix for the ~500px minimum-window-width clamp.
  await cdp.send('Emulation.setDeviceMetricsOverride', {
    width, height, deviceScaleFactor: 1, mobile: width < 600,
  }, sessionId);
  const loaded = cdp.waitEvent('Page.loadEventFired', sessionId);
  await cdp.send('Page.navigate', { url }, sessionId);
  await loaded;
  await new Promise((r) => setTimeout(r, 400)); // fonts/late layout settle
  const { cssContentSize } = await cdp.send('Page.getLayoutMetrics', {}, sessionId);
  const fullH = Math.min(Math.max(Math.ceil(cssContentSize.height), height), MAX_PAGE_HEIGHT);
  const shot = await cdp.send('Page.captureScreenshot', {
    format: 'png', captureBeyondViewport: true,
    clip: { x: 0, y: 0, width, height: fullH, scale: 1 },
  }, sessionId);
  await writeFile(outPath, Buffer.from(shot.data, 'base64'));
  return outPath;
}

const main = async () => {
  const path = process.argv[2] || '/blog.html';
  const widths = (process.argv[3] || '390,1280').split(',').map((w) => parseInt(w.trim(), 10)).filter(Boolean);
  const chrome = findChrome();
  if (!chrome) { console.error('No Chrome/Chromium/Edge found. Install Google Chrome.'); process.exit(1); }
  await mkdir(OUT, { recursive: true });
  const { server, port } = await serveDist();
  const slug = path.replace(/^\//, '').replace(/[\/.]+/g, '_').replace(/_html$/, '') || 'index';
  const { ps, wsUrl } = await launchChrome(chrome);
  const made = [];
  try {
    const cdp = await connectCdp(wsUrl);
    const { targetId } = await cdp.send('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await cdp.send('Target.attachToTarget', { targetId, flatten: true });
    await cdp.send('Page.enable', {}, sessionId);
    for (const w of widths) {
      const h = w < 600 ? 844 : 900; // phone vs desktop viewport (full page captured anyway)
      const out = join(OUT, `${slug}-${w}.png`);
      try { made.push(await shoot(cdp, sessionId, `http://127.0.0.1:${port}${path}`, w, h, out)); }
      catch (e) { console.error('  fail', w, e.message); }
    }
    cdp.close();
  } finally {
    ps.kill();
    server.close();
  }
  console.log('Saved:');
  made.forEach((m) => console.log('  ' + m));
};

main().catch((e) => { console.error(e); process.exit(1); });
