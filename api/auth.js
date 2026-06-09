// OAuth bước 1: chuyển hướng sang GitHub để xin quyền.
// Sveltia CMS mở /api/auth (base_url + auth_endpoint) trong popup.
export default function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    res.status(500).send('Thiếu GITHUB_CLIENT_ID (đặt trong Vercel > Settings > Environment Variables).');
    return;
  }
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const redirectUri = `https://${host}/api/callback`;
  const state = Math.random().toString(36).slice(2) + Date.now().toString(36);
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: 'repo,user:email',
    state,
    allow_signup: 'false',
  });
  res.writeHead(302, { Location: `https://github.com/login/oauth/authorize?${params}` });
  res.end();
}
