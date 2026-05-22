// Vercel Edge Function — Azure TTS proxy
// Hides AZURE_TTS_KEY server-side, streams MP3 audio back to client
export const config = { runtime: 'edge' };

const RATE_MAP = { '1': '+0%', '1.5': '+50%', '2': '+100%' };

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export default async function handler(req) {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST', 'Access-Control-Allow-Headers': 'Content-Type' },
    });
  }

  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  let text, rateKey;
  try {
    ({ text, rate: rateKey = '1' } = await req.json());
  } catch {
    return new Response('Bad Request: invalid JSON', { status: 400 });
  }

  if (!text || typeof text !== 'string') {
    return new Response('Bad Request: text required', { status: 400 });
  }

  // Trim to safe Azure limit
  const safeText = text.slice(0, 4800);

  const AZURE_KEY    = process.env.AZURE_TTS_KEY;
  const AZURE_REGION = process.env.AZURE_TTS_REGION || 'southeastasia';

  if (!AZURE_KEY) {
    return new Response('TTS not configured', { status: 503 });
  }

  const prosodyRate = RATE_MAP[String(rateKey)] ?? '+0%';

  const ssml = `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="vi-VN">
  <voice name="vi-VN-HoaiMyNeural">
    <prosody rate="${prosodyRate}">${escapeXml(safeText)}</prosody>
  </voice>
</speak>`;

  let azureRes;
  try {
    azureRes = await fetch(
      `https://${AZURE_REGION}.tts.speech.microsoft.com/cognitiveservices/v1`,
      {
        method: 'POST',
        headers: {
          'Ocp-Apim-Subscription-Key': AZURE_KEY,
          'Content-Type': 'application/ssml+xml',
          'X-Microsoft-OutputFormat': 'audio-24khz-48kbitrate-mono-mp3',
          'User-Agent': 'TechVisionTTS/1.0',
        },
        body: ssml,
      }
    );
  } catch (err) {
    return new Response('Azure TTS unreachable', { status: 502 });
  }

  if (!azureRes.ok) {
    const msg = await azureRes.text().catch(() => '');
    console.error('Azure TTS error', azureRes.status, msg);
    return new Response('Azure TTS error: ' + azureRes.status, { status: 502 });
  }

  return new Response(azureRes.body, {
    status: 200,
    headers: {
      'Content-Type': 'audio/mpeg',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
