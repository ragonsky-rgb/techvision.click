#!/usr/bin/env node
/**
 * Kiem mot bai viet moi truoc khi dua len web.
 *
 * Vi sao can: moi 2h dem co mot phien AI khac day bai len GitHub, sang hom sau
 * co phien khac doc va xuat ban. Truoc day viec kiem lam bang tay nen de sot,
 * nhat la khoan video: mot ID YouTube sai van cho ra anh thumbnail 120x90 cua
 * YouTube chu khong bao loi, va kiem bang dung luong file thi khong phat hien
 * duoc. Script nay chot lai toan bo tieu chi thanh mot lenh chay duoc.
 *
 * Chay:  node scripts/check-new-article.mjs <slug hoac duong dan .md>
 *        node scripts/check-new-article.mjs --diff origin/main   (kiem moi bai moi/sua)
 *
 * Ma thoat 1 neu co bat ky ERROR nao.
 */
import { readFileSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const MD_DIR = join(ROOT, 'src/content/articles');

const LIMITS = {
  titleMax: 65,
  descMax: 165,
  wordsMin: 1100,
  faqMin: 5,
  statsMin: 3,
  mediaMin: 3,
};

const fm = (s, k) => (s.match(new RegExp(`^${k}: "(.*)"$`, 'm')) || [, null])[1];

// Nhieu trang tin cong nghe (GSMArena, Bloomberg...) chan fetch khong co
// User-Agent that va tra 403/429. Do khong phai link chet, nen phai phan biet
// voi 404: 403/429 chi canh bao, 404/410/loi mang moi la loi that.
async function head(url) {
  try {
    const r = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36',
      },
    });
    return r.status;
  } catch {
    return 0;
  }
}

// Anh maxresdefault that luon 1280x720. Khi video khong co ban maxres,
// YouTube tra ve anh bao loi 120x90 kem HTTP 200 - nen phai doc kich thuoc
// that tu header PNG/JPEG chu khong duoc tin ma HTTP hay dung luong file.
async function jpegSize(url) {
  try {
    const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
    for (let i = 2; i < buf.length - 9; ) {
      if (buf[i] !== 0xff) { i++; continue; }
      const m = buf[i + 1];
      if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) {
        return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) };
      }
      i += 2 + buf.readUInt16BE(i + 2);
    }
  } catch { /* roi xuong null */ }
  return null;
}

async function checkVideo(id, errs, warns) {
  const o = await head(
    `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`
  );
  if (o !== 200) {
    errs.push(`video ${id}: oembed tra ${o}, ID khong ton tai hoac bi go`);
    return;
  }
  const sz = await jpegSize(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);
  if (!sz) warns.push(`video ${id}: khong doc duoc kich thuoc anh maxresdefault`);
  else if (sz.w < 1280)
    errs.push(
      `video ${id}: maxresdefault chi ${sz.w}x${sz.h} (anh bao loi cua YouTube), khong co ban do phan giai that`
    );
}

async function checkOne(path) {
  const errs = [];
  const warns = [];
  const s = readFileSync(path, 'utf8');
  const slug = fm(s, 'slug');
  const title = fm(s, 'title');
  const desc = fm(s, 'description');

  if (!slug) errs.push('thieu slug');
  if (!title) errs.push('thieu title');
  else if (title.length > LIMITS.titleMax)
    errs.push(`title ${title.length} ky tu, vuot ${LIMITS.titleMax}`);
  if (!desc) errs.push('thieu description');
  else if (desc.length > LIMITS.descMax)
    errs.push(`description ${desc.length} ky tu, vuot ${LIMITS.descMax}`);

  const body = s.replace(/^---[\s\S]*?^---/m, '');
  const words = body.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  if (words < LIMITS.wordsMin) errs.push(`${words} tu, duoi muc toi thieu ${LIMITS.wordsMin}`);

  // Em-dash lam giong van lech han so voi cac bai con lai cua site.
  const dash = (s.match(/[—–]/g) || []).length;
  if (dash) errs.push(`co ${dash} em-dash, phai thay bang " - "`);

  const faq = (s.match(/^\s+- q:/gm) || []).length;
  if (faq < LIMITS.faqMin) errs.push(`${faq} cau FAQ, duoi ${LIMITS.faqMin}`);
  const stats = (s.match(/^\s+- \{ num:/gm) || []).length;
  if (stats < LIMITS.statsMin) errs.push(`${stats} stat, duoi ${LIMITS.statsMin}`);

  // Bay hay gap nhat tren site nay: tieu de chot mot con gia cu the trong khi
  // than bai goi do la "gia du kien". Nguoi tim Google nhin thay con so do nhu
  // su that, va khi may ra mat that thi tieu de thanh sai. Thang 8/2026 co 5 bai
  // dinh loi nay, nang nhat la Xiaomi 17T ghi 12,9 trieu trong khi gia that
  // 17,09 trieu, va Galaxy Glasses ghi 379 USD trong khi Samsung chua cong bo gia.
  const titleAssertsPrice = /giá (từ|chỉ|bán)|từ [\d.,]+ ?(triệu|tỷ|USD)|\$[\d,.]+/i.test(title || '');
  const titleHedges = /dự kiến|tin đồn|đồn|có thể|khoảng/i.test(title || '');
  // Chi tinh la "gia du kien" khi cum ha giong dung sat mot con so tien. Neu
  // khong, cau kieu "niem yet du kien khoang thang 10/2026" (noi ve NGAY, khong
  // phai gia) se bi bao oan, va mot bo loc keu oan thi se bi bo qua.
  const MONEY = String.raw`[\d.,]+\s*(triệu|tỷ|USD|đồng|\$)`;
  const bodyHedges =
    new RegExp(String.raw`(giá dự kiến|mức giá dự kiến|giá đồn|dự kiến khoảng)[^.]{0,40}${MONEY}`, 'i').test(body) ||
    new RegExp(String.raw`${MONEY}[^.]{0,25}(là (giá|mức) dự kiến|chỉ là tin đồn)`, 'i').test(body) ||
    /chưa công bố giá|giá chính thức sẽ được công bố/i.test(body);
  // Bai da duoc doi chieu lai sau su kien thi duoc mien: than bai co giu nguyen
  // doan du doan cu de nguoi doc so sanh, nhung dau bai da co khoi "Cap nhat
  // <ngay>" noi ro con so nao la du doan va con so nao la that.
  const hasDatedUpdate = /Cập nhật \d{1,2}\/\d{1,2}\/\d{4}/.test(body);
  if (titleAssertsPrice && !titleHedges && bodyHedges && !hasDatedUpdate)
    errs.push('tieu de chot mot muc gia nhung than bai goi do la du kien - phai them "du kien"/"tin don" vao tieu de hoac dung gia da xac nhan');

  const pub = (s.match(/^datePublished: "(\S{10})/m) || [, ''])[1];
  const today = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Ho_Chi_Minh', year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(new Date());
  if (pub > today) errs.push(`datePublished ${pub} nam o tuong lai (hom nay ${today})`);

  const vids = [...new Set([...body.matchAll(/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/g)].map((m) => m[1]))];
  const imgs = (body.match(/<img\b/g) || []).length;
  const hero = fm(s, 'heroImage') ? 1 : 0;
  const media = imgs + vids.length + hero;
  if (media < LIMITS.mediaMin)
    errs.push(`${media} media (${hero} hero + ${imgs} anh + ${vids.length} video), duoi ${LIMITS.mediaMin}`);

  for (const id of vids) await checkVideo(id, errs, warns);

  const heroImg = fm(s, 'heroImage');
  const heroId = heroImg && heroImg.match(/i\.ytimg\.com\/vi\/([A-Za-z0-9_-]{11})\//);
  if (heroId && !vids.includes(heroId[1])) await checkVideo(heroId[1], errs, warns);

  const src = fm(s, 'sourceUrl');
  if (!src) errs.push('thieu sourceUrl');
  else {
    const st = await head(src);
    if (st === 403 || st === 429)
      warns.push(`sourceUrl tra HTTP ${st} (trang chan bot, khong phai link chet) - kiem bang mat: ${src}`);
    else if (st !== 200) errs.push(`sourceUrl tra HTTP ${st}: ${src}`);
  }

  // Khoi `related` phai tro toi bai CO THAT va CON INDEXABLE.
  //
  // Vi sao kiem ca noindex chu khong chi kiem link chet: repo dang co hon 500
  // trang noindex sau cac dot cat, va chung van nam nguyen trong thu muc nen
  // link khong 404. Tro bai moi vao do la nem lien ket noi bo vao trang ma
  // chinh minh da bao Google bo qua. Ngay 9/8/2026 mot bai moi viet co ca 3
  // muc related deu noindex ma khong bo kiem nao bat duoc.
  for (const rel of [...s.matchAll(/href: "\/articles\/([^"]+)\.html"/g)].map((m) => m[1])) {
    const md = join(MD_DIR, `${rel}.md`);
    const html = join(ROOT, 'public/articles', `${rel}.html`);
    if (existsSync(md)) {
      if (/^noindex: true/m.test(readFileSync(md, 'utf8')))
        errs.push(`related tro toi bai dang noindex: ${rel}`);
    } else if (existsSync(html)) {
      if (/name="robots"[^>]*noindex/.test(readFileSync(html, 'utf8')))
        errs.push(`related tro toi bai dang noindex: ${rel}`);
    } else {
      errs.push(`related tro toi bai KHONG TON TAI: ${rel}`);
    }
  }

  // Bai trung slug hoac trung title voi bai da co la dau hieu viet lai bai cu.
  const others = execSync(`grep -l '^title:' ${MD_DIR}/*.md`, { encoding: 'utf8' })
    .trim().split('\n').filter((f) => f !== path);
  for (const f of others) {
    if (fm(readFileSync(f, 'utf8'), 'title') === title)
      errs.push(`title trung voi bai da co: ${f.split('/').pop()}`);
  }

  return { path, slug, title, words, media, errs, warns };
}

const args = process.argv.slice(2);
let files = [];
if (args[0] === '--diff') {
  const base = args[1] || 'origin/main';
  files = execSync(`git diff --name-only ${base}...HEAD -- src/content/articles/ || true`, {
    cwd: ROOT, encoding: 'utf8',
  }).trim().split('\n').filter((f) => f.endsWith('.md')).map((f) => join(ROOT, f));
} else if (args.length) {
  files = args.map((a) => (a.endsWith('.md') ? a : join(MD_DIR, `${a}.md`)));
} else {
  console.error('Dung: node scripts/check-new-article.mjs <slug|file.md> | --diff [base]');
  process.exit(2);
}
files = files.filter((f) => existsSync(f));

if (!files.length) {
  console.log('Khong co bai moi nao de kiem.');
  process.exit(0);
}

let bad = 0;
for (const f of files) {
  const r = await checkOne(f);
  const tag = r.errs.length ? '❌' : '✅';
  console.log(`\n${tag} ${r.slug || f}`);
  console.log(`   ${r.words} tu | ${r.media} media | title ${(r.title || '').length} ky tu`);
  for (const e of r.errs) console.log(`   ERROR: ${e}`);
  for (const w of r.warns) console.log(`   WARN : ${w}`);
  if (r.errs.length) bad++;
}
console.log(`\n${files.length} bai kiem, ${bad} bai co loi.`);
process.exit(bad ? 1 : 0);
