// Sua anchor lech thang sau moi ky refresh (xem AGENTS.md §8b).
// Bai refresh giu nguyen slug nhung doi title sang thang moi, con moi cho tro
// toi no van ghi thang cu -> Google doc duoc tin hieu "bai nay cu".
//
// Chay:  node scripts/fix-stale-anchors.mjs          (chi bao cao)
//        node scripts/fix-stale-anchors.mjs --write  (sua that)
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';

const WRITE = process.argv.includes('--write');
const MD = 'src/content/articles';
const HTML = 'public/articles';
const MONTH = /[Tt]háng\s*(\d{1,2})\/2026/;

// --- title hien tai cua tung slug ---
const titleOf = new Map();
for (const f of readdirSync(MD).filter((x) => x.endsWith('.md'))) {
  const m = readFileSync(`${MD}/${f}`, 'utf8').slice(0, 2000).match(/^title:\s*"(.*?)"/m);
  if (m) titleOf.set(f.slice(0, -3), m[1]);
}
if (existsSync('src/data/legacy-articles.json')) {
  for (const a of JSON.parse(readFileSync('src/data/legacy-articles.json', 'utf8'))) {
    if (a.slug && a.title && !titleOf.has(a.slug)) titleOf.set(a.slug, a.title);
  }
}

// --- slug nao dang o thang nao (theo title) ---
const monthOf = new Map();
for (const [slug, t] of titleOf) {
  const m = t.match(MONTH);
  if (m) monthOf.set(slug, m[1]);
}

const files = [
  ...readdirSync(MD).filter((x) => x.endsWith('.md')).map((x) => `${MD}/${x}`),
  ...(existsSync(HTML) ? readdirSync(HTML).filter((x) => x.endsWith('.html')).map((x) => `${HTML}/${x}`) : []),
];

let nRelated = 0, nInline = 0, nFiles = 0;
const samples = [];

for (const f of files) {
  let txt = readFileSync(f, 'utf8');
  const before = txt;

  // 1. related frontmatter: dong bo title theo title hien tai cua bai dich
  txt = txt.replace(
    /href: "\/articles\/([^"]+)\.html", cat: "([^"]*)", title: "([^"]*)"/g,
    (full, slug, cat, title) => {
      const cur = titleOf.get(slug);
      if (!cur || cur === title) return full;
      // chi dong bo khi anchor cu co ghi thang va lech thang thuc te
      const am = title.match(MONTH), tm = monthOf.get(slug);
      if (!am || !tm || am[1] === tm) return full;
      nRelated++;
      if (samples.length < 6) samples.push(`  ${f.split('/').pop().slice(0, 40)}\n     "${title.slice(0, 54)}"\n  -> "${cur.slice(0, 54)}"`);
      return `href: "/articles/${slug}.html", cat: "${cat}", title: "${cur.replace(/"/g, "'")}"`;
    }
  );

  // 2. anchor trong than bai: chi doi con so thang, giu nguyen cau van
  txt = txt.replace(
    /<a([^>]*?)href="\/articles\/([^"]+)\.html"([^>]*)>([^<]*)<\/a>/g,
    (full, pre, slug, post, anchor) => {
      const tm = monthOf.get(slug);
      const am = anchor.match(MONTH);
      if (!tm || !am || am[1] === tm) return full;
      nInline++;
      const fixed = anchor.replace(MONTH, (s) => s.replace(/\d{1,2}(?=\/2026)/, tm));
      return `<a${pre}href="/articles/${slug}.html"${post}>${fixed}</a>`;
    }
  );

  if (txt !== before) {
    nFiles++;
    if (WRITE) writeFileSync(f, txt);
  }
}

console.log(`${WRITE ? 'DA SUA' : 'BAO CAO (them --write de sua)'}`);
console.log(`  related frontmatter dong bo title : ${nRelated}`);
console.log(`  anchor than bai doi so thang      : ${nInline}`);
console.log(`  so file bi anh huong              : ${nFiles}`);
if (samples.length) console.log('\nVi du:\n' + samples.join('\n'));
