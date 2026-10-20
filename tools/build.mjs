// Složí statický web do docs/ (GitHub Pages) z kopie v mirror/:
//  - kořenové URL přepíše pod BASE (projektové Pages žijí na /<repo>/),
//  - vloží statický shim (AJAX → uložená JSON data, formuláře, cookie lišta),
//  - vloží vrstvu UI úprav refine/brave-refine.{css,js},
//  - vypne indexaci (originál je kanonický), odstraní service worker.
//
//   node tools/build.mjs                 # BASE=/byty-v-zahradach
//   BASE=/jine-repo node tools/build.mjs

import fs from 'node:fs/promises';
import path from 'node:path';
import { addPanoramaPois } from './panorama-pois.mjs';
import { createRewriter } from './lib-rewrite.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const RAW = path.join(ROOT, 'mirror', 'raw');
const OUT = path.join(ROOT, 'docs');
const BASE = (process.env.BASE ?? '/byty-v-zahradach').replace(/\/$/, '');
const manifest = JSON.parse(await fs.readFile(path.join(ROOT, 'mirror', 'manifest.json'), 'utf8'));

const { mapUrl, rewriteHtml, pageDir, dataSlug } = createRewriter({ BASE, manifest });

const shim = (await fs.readFile(path.join(ROOT, 'tools', 'static-shim.js'), 'utf8')).replace('__BASE__', BASE);
const refineCss = `${BASE}/refine/brave-refine.css`;
const refineJs = `${BASE}/refine/brave-refine.js`;

function injectHtml(html) {
	html = html.replace(/<script[^>]+src="[^"]*progressive-web-app\/register"[^>]*><\/script>/g, '');
	html = html.replace(/<link[^>]+rel="manifest"[^>]*>/g, '');
	html = html.replace(/<meta name="robots" content="[^"]*"\s*\/?>/g, '');
	const head = `<meta name="robots" content="noindex, nofollow"><script>${shim}</script>`;
	html = html.replace(/<head>/i, '<head> ' + head);
	const tail = `<link rel="stylesheet" href="${refineCss}" id="brave-refine-css">` +
		`<script>window.__BRAVE_REFINE_OFF&&(document.getElementById('brave-refine-css').disabled=true)</script>` +
		`<script src="${refineJs}" defer></script>`;
	html = html.replace(/<\/head>/i, tail + '</head>');
	return html;
}

// Média vrstvy úprav (video v hero apod.)
async function copyMedia() {
	const src = path.join(ROOT, 'refine', 'media');
	const list = await fs.readdir(src).catch(() => []);
	if (!list.length) return;
	await fs.mkdir(path.join(OUT, 'refine', 'media'), { recursive: true });
	for (const f of list) await fs.copyFile(path.join(src, f), path.join(OUT, 'refine', 'media', f));
}

// Vrstva úprav: refine/src/*.css (seřazeno podle čísla) → refine/brave-refine.css
const SRC = path.join(ROOT, 'refine', 'src');
const parts = (await fs.readdir(SRC)).filter(f => f.endsWith('.css')).sort();
const css = (await Promise.all(parts.map(async f => `/* ---- ${f} ---- */\n` + await fs.readFile(path.join(SRC, f), 'utf8')))).join('\n');
await fs.writeFile(path.join(ROOT, 'refine', 'brave-refine.css'), css);
await fs.copyFile(path.join(SRC, 'brave-refine.js'), path.join(ROOT, 'refine', 'brave-refine.js'));

if (process.argv.includes('--refine-only')) {
	await fs.mkdir(path.join(OUT, 'refine'), { recursive: true });
	await fs.copyFile(path.join(ROOT, 'refine', 'brave-refine.css'), path.join(OUT, 'refine', 'brave-refine.css'));
	await fs.copyFile(path.join(ROOT, 'refine', 'brave-refine.js'), path.join(OUT, 'refine', 'brave-refine.js'));
	await copyMedia();
	console.log('panoráma: +' + await addPanoramaPois(OUT) + ' bodů zájmu');
	console.log(`refine: ${parts.length} CSS částí (${(css.length / 1024).toFixed(1)} kB)`);
	process.exit(0);
}

await fs.rm(OUT, { recursive: true, force: true });
await fs.mkdir(OUT, { recursive: true });

let nPages = 0, nAssets = 0, nData = 0;
const written = new Set();
for (const [url, e] of Object.entries(manifest)) {
	if (!e.file || e.status >= 400) continue;
	if (e.kind === 'page') {
		const dir = path.join(OUT, pageDir(url));
		await fs.mkdir(dir, { recursive: true });
		let html;
		if (e.status >= 300 && e.status < 400) {
			const target = mapUrl(e.location || '/') || BASE + '/';
			html = `<!doctype html><meta charset="utf-8"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=${target}"><link rel="canonical" href="${target}"><a href="${target}">Přesměrování…</a>`;
		} else {
			html = injectHtml(rewriteHtml(await fs.readFile(path.join(RAW, e.file), 'utf8')));
		}
		await fs.writeFile(path.join(dir, 'index.html'), html);
		nPages++;
	} else if (e.kind === 'ajax') {
		let body = await fs.readFile(path.join(RAW, e.file), 'utf8');
		// Řetězce v JSON: samotné cesty ("/www/…") i HTML uvnitř (src="/www/…")
		const walk = v => {
			if (typeof v === 'string') return v.startsWith('/') ? (mapUrl(v) ?? v) : (v.includes('="/') ? rewriteHtml(v) : v);
			if (Array.isArray(v)) return v.map(walk);
			if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)]));
			return v;
		};
		try { body = JSON.stringify(walk(JSON.parse(body))); } catch {}
		await fs.mkdir(path.join(OUT, '_data'), { recursive: true });
		await fs.writeFile(path.join(OUT, '_data', dataSlug(url) + '.json'), body);
		nData++;
	} else {
		const p = decodeURI(url.split('?')[0]);
		if (written.has(p)) continue;
		written.add(p);
		const dest = path.join(OUT, p);
		await fs.mkdir(path.dirname(dest), { recursive: true });
		await fs.copyFile(path.join(RAW, e.file), dest);
		nAssets++;
	}
}

await fs.mkdir(path.join(OUT, '_data'), { recursive: true });
await fs.writeFile(path.join(OUT, '_data', 'noop.json'), '{}');
await fs.mkdir(path.join(OUT, 'refine'), { recursive: true });
await fs.copyFile(path.join(ROOT, 'refine', 'brave-refine.css'), path.join(OUT, 'refine', 'brave-refine.css'));
await fs.copyFile(path.join(ROOT, 'refine', 'brave-refine.js'), path.join(OUT, 'refine', 'brave-refine.js'));
await copyMedia();
await fs.writeFile(path.join(OUT, '.nojekyll'), '');
await fs.writeFile(path.join(OUT, '404.html'),
	`<!doctype html><meta charset="utf-8"><title>Stránka nenalezena</title><meta name="robots" content="noindex"><p style="font-family:sans-serif;padding:40px">Tato stránka není ve statickém náhledu. <a href="${BASE}/">Zpět na úvod</a></p>`);
console.log('panoráma: +' + await addPanoramaPois(OUT) + ' bodů zájmu');
console.log(`docs/: ${nPages} stránek, ${nAssets} souborů, ${nData} datových JSON, BASE=${BASE}`);

// Volitelný lokální koncept V2 (není v repozitáři) — když existuje, složit ho znovu.
if ((await fs.stat(path.join(ROOT, 'tools', 'build-v2.mjs')).catch(() => null))) await import('./build-v2.mjs');
