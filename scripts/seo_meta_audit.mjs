import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const files = [
  'client/index.html',
  'client/src/pages/Home.tsx',
  'client/src/pages/ZhHome.tsx',
  'client/src/pages/zh/ServicePage.tsx',
  'client/src/pages/zh/AreaPage.tsx',
  'client/src/pages/zh/ChineseSeoLayout.tsx',
  'client/src/App.tsx',
  'client/public/sitemap.xml',
];

const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const text = Object.fromEntries(files.map((f) => [f, read(f)]));

function len(s) {
  return Array.from(s || '').length;
}

function extractHtmlMeta() {
  const html = text['client/index.html'];
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1]?.trim() || '';
  const description = html.match(/<meta\s+name="description"\s+content="([\s\S]*?)"\s*\/>/)?.[1]?.replace(/\s+/g, ' ').trim() || '';
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] || '';
  const h1 = text['client/src/pages/Home.tsx'].match(/heroTitle:\s*"([^"]+)"/)?.[1] || '';
  return { route: '/', source: 'client/index.html + Home.tsx', title, titleLen: len(title), description, descLen: len(description), h1, h1Len: len(h1), canonical };
}

function extractZhHome() {
  const tsx = text['client/src/pages/ZhHome.tsx'];
  const title = tsx.match(/title:\s*"([^"]+)"/)?.[1] || '';
  const description = tsx.match(/description:\s*"([^"]+)"/)?.[1] || '';
  const keywords = tsx.match(/keywords:\s*\[([\s\S]*?)\]/)?.[1]?.replace(/\s+/g, ' ').trim() || '';
  const h1 = tsx.match(/<h1[\s\S]*?>\s*([\s\S]*?)\s*<\/h1>/)?.[1]?.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() || '';
  return { route: '/zh', source: 'ZhHome.tsx', title, titleLen: len(title), description, descLen: len(description), h1, h1Len: len(h1), keywords, canonical: 'https://linplumbinggas.com/zh' };
}

function extractObjects(file) {
  const tsx = text[file];
  const blocks = [];
  const re = /meta:\s*\{\s*title:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*path:\s*"([^"]+)",\s*keywords:\s*\[([\s\S]*?)\],\s*\},\s*[\s\S]*?h1:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(tsx))) {
    const title = m[1];
    const description = m[2];
    const route = m[3];
    const keywords = m[4].replace(/\s+/g, ' ').trim();
    const h1 = m[5];
    blocks.push({ route, source: file, title, titleLen: len(title), description, descLen: len(description), h1, h1Len: len(h1), keywords, canonical: 'https://linplumbinggas.com' + route });
  }
  return blocks;
}

const pages = [extractHtmlMeta(), extractZhHome(), ...extractObjects('client/src/pages/zh/ServicePage.tsx'), ...extractObjects('client/src/pages/zh/AreaPage.tsx')];
const sitemapUrls = [...text['client/public/sitemap.xml'].matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

const assessment = pages.map((p) => {
  const titleOk = p.titleLen >= 25 && p.titleLen <= 65 && /Lin Plumbing & Gas/.test(p.title);
  const descOk = p.descLen >= 70 && p.descLen <= 180;
  const hasCta = /致电|致電|联系|聯絡|Call|quote|报价|報價/.test(p.description);
  const hasCanonical = sitemapUrls.includes(p.canonical);
  return { ...p, titleOk, descOk, hasCta, hasCanonical };
});

fs.writeFileSync('seo-meta-audit-current.json', JSON.stringify(assessment, null, 2));
console.table(assessment.map(({route,titleLen,descLen,h1Len,titleOk,descOk,hasCta,hasCanonical}) => ({route,titleLen,descLen,h1Len,titleOk,descOk,hasCta,hasCanonical})));
for (const p of assessment) {
  console.log('\n## ' + p.route);
  console.log('TITLE(' + p.titleLen + '): ' + p.title);
  console.log('DESC(' + p.descLen + '): ' + p.description);
  console.log('H1(' + p.h1Len + '): ' + p.h1);
}
