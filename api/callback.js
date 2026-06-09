// OAuth bước 2: GitHub gọi lại /api/callback với ?code -> đổi lấy access_token
// -> postMessage token về cửa sổ CMS (handshake chuẩn Netlify/Decap/Sveltia).
export default async function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  const code = req.query.code;

  function page(status, content) {
    const msg = `authorization:github:${status}:${JSON.stringify(content)}`;
    return `<!doctype html><html><head><meta charset="utf-8"></head><body>
<p>Đang đăng nhập...</p>
<script>
(function () {
  var message = ${JSON.stringify(msg)};
  function receiveMessage(e) {
    window.opener && window.opener.postMessage(message, e.origin);
    window.removeEventListener('message', receiveMessage, false);
  }
  window.addEventListener('message', receiveMessage, false);
  window.opener && window.opener.postMessage('authorizing:github', '*');
  setTimeout(function () { try { window.close(); } catch (e) {} }, 1500);
})();
</script>
</body></html>`;
  }

  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  if (!clientId || !clientSecret) {
    res.status(500).end(page('error', { message: 'Thiếu GITHUB_CLIENT_ID / GITHUB_CLIENT_SECRET trong Vercel.' }));
    return;
  }
  if (!code) {
    res.status(400).end(page('error', { message: 'Thiếu code từ GitHub.' }));
    return;
  }

  try {
    const r = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });
    const data = await r.json();
    if (data.access_token) {
      res.status(200).end(page('success', { token: data.access_token, provider: 'github' }));
    } else {
      res.status(200).end(page('error', { message: data.error_description || 'Không lấy được token.' }));
    }
  } catch (err) {
    res.status(500).end(page('error', { message: String(err && err.message || err) }));
  }
}
