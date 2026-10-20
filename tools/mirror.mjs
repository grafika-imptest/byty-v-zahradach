// Stáhne živý web demo.bravedevelopment.cz do mirror/ jako surovou kopii
// (beze změn). Z ní pak tools/build.mjs skládá statický web pro GitHub Pages.
//
//   node tools/mirror.mjs            # stáhne vše, co ještě v mirror/ není
//   node tools/mirror.mjs --fresh    # stáhne znovu i stránky (assety z cache)

import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const ORIGIN = 'https://demo.bravedevelopment.cz';
const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'mirror');
const RAW = path.join(OUT, 'raw');
const MANIFEST = path.join(OUT, 'manifest.json');
const FRESH = process.argv.includes('--fresh');
const MAX_PAGES = 400;
const MAX_ASSET_BYTES = 40 * 1024 * 1024;

const seedPages = [
	'/', '/o-projektu', '/standardy', '/lokalita', '/financovani', '/galerie', '/faq',
	'/o-nas', '/aktuality', '/kontakty', '/nabidka-nemovitosti', '/oblibene-nemovitosti',
	'/porovnani-jednotek', '/investicni-kalkulacka', '/zpracovani-osobnich-udaju',
];

await fs.mkdir(RAW, { recursive: true });
let manifest = {};
try { manifest = JSON.parse(await fs.readFile(MANIFEST, 'utf8')); } catch {}

const cookies = new Map();
function cookieHeader() { return [...cookies].map(([k, v]) => `${k}=${v}`).join('; '); }
function storeCookies(res) {
	for (const c of res.headers.getSetCookie?.() ?? []) {
		const [pair] = c.split(';');
		const i = pair.indexOf('=');
		cookies.set(pair.slice(0, i).trim(), pair.slice(i + 1).trim());
	}
}

async function get(url, { ajax = false } = {}) {
	const headers = {
		'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0 Safari/537.36',
		'Accept-Language': 'cs-CZ,cs;q=0.9',
	};
	if (cookies.size) headers.Cookie = cookieHeader();
	if (ajax) headers['X-Requested-With'] = 'XMLHttpRequest';
	for (let attempt = 0; attempt < 3; attempt++) {
		try {
			const res = await fetch(ORIGIN + url, { headers, redirect: 'manual' });
			storeCookies(res);
			return res;
		} catch (e) {
			if (attempt === 2) throw e;
			await new Promise(r => setTimeout(r, 800));
		}
	}
}

function decodeEntities(s) {
	return s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&#x2F;/gi, '/');
}

// "/foo?x" | "https://demo.../foo" → "/foo?x" (bez hashe), jinak null
function normalize(raw, baseUrl = '/') {
	if (!raw) return null;
	let v = decodeEntities(raw.trim()).replace(/\\\//g, '/');
	if (!v || v.startsWith('#') || /^(mailto|tel|javascript|data|blob):/i.test(v)) return null;
	let u;
	try { u = new URL(v, ORIGIN + baseUrl); } catch { return null; }
	if (u.origin !== ORIGIN) return null;
	return u.pathname + u.search;
}

function isAsset(url) {
	const p = url.split('?')[0];
	return p.startsWith('/www/') || p.startsWith('/progressive-web-app/') || /\.[a-z0-9]{2,5}$/i.test(p);
}

// Všechny URL z HTML: hodnoty atributů, srcset, url() v inline stylech a JSON s \/ cestami.
function extractUrls(html, pageUrl) {
	const found = new Set();
	for (const m of html.matchAll(/\s([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*("([^"]*)"|'([^']*)')/g)) {
		const name = m[1].toLowerCase();
		const value = m[3] ?? m[4] ?? '';
		if (name === 'srcset' || name === 'data-srcset') {
			for (const part of value.split(',')) found.add(part.trim().split(/\s+/)[0]);
		} else if (name === 'style') {
			for (const u of value.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g)) found.add(u[1]);
		} else {
			found.add(value);
		}
	}
	for (const m of html.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g)) found.add(m[1]);
	for (const m of html.matchAll(/"(\\\/[^"\\]*(?:\\\/[^"\\]*)*)"/g)) found.add(m[1]);
	const out = [];
	for (const f of found) {
		// Jen skutečné odkazy: kořenové cesty nebo plné URL webu. Hodnoty typu
		// title="Byt A.02.03" nebo class="…" by se jinak tvářily jako relativní URL.
		const v = decodeEntities(f.trim()).replace(/\\\//g, '/');
		if (!(v.startsWith('/') && !v.startsWith('//')) && !v.startsWith(ORIGIN)) continue;
		if (/\s/.test(v.split('?')[0])) continue;
		const n = normalize(v, pageUrl);
		if (n) out.push(n);
	}
	return out;
}

function extractCssUrls(css, cssUrl) {
	const out = [];
	for (const m of css.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g)) {
		if (m[1].startsWith('data:') || m[1].startsWith('#')) continue;
		const n = normalize(m[1], cssUrl.split('?')[0]);
		if (n) out.push(n);
	}
	for (const m of css.matchAll(/@import\s+['"]([^'"]+)['"]/g)) {
		const n = normalize(m[1], cssUrl.split('?')[0]);
		if (n) out.push(n);
	}
	return out;
}

function rawName(url) { return crypto.createHash('sha1').update(url).digest('hex').slice(0, 20); }

async function save(url, res, body, kind) {
	const file = rawName(url);
	await fs.writeFile(path.join(RAW, file), body);
	manifest[url] = {
		file,
		kind,
		status: res.status,
		type: res.headers.get('content-type') || '',
		location: res.headers.get('location') || undefined,
		bytes: body.length,
	};
}

const pageQueue = [];
const assetQueue = [];
const seen = new Set();
let pageCount = 0;

function enqueue(url, from) {
	if (seen.has(url)) return;
	if (/[?&](do|_do)=/.test(url) || url.includes('languageSwitcher')) return;
	if (isAsset(url)) {
		seen.add(url);
		assetQueue.push(url);
		return;
	}
	// Varianty stránek s query (filtry, stránkování, přepínač zobrazení) jen
	// z "čistých" stránek — jinak by kombinace filtrů rostly donekonečna.
	if (url.includes('?') && from && from.includes('?')) return;
	if (pageCount >= MAX_PAGES) return;
	seen.add(url);
	pageCount++;
	pageQueue.push({ url, from });
}

async function crawlPage({ url }) {
	let entry = manifest[url];
	let html;
	if (entry && !FRESH && entry.kind === 'page') {
		html = await fs.readFile(path.join(RAW, entry.file), 'utf8');
	} else {
		const res = await get(url);
		const body = Buffer.from(await res.arrayBuffer());
		await save(url, res, body, 'page');
		entry = manifest[url];
		if (res.status >= 300 && res.status < 400) {
			const loc = normalize(res.headers.get('location') || '', url);
			console.log(`  ↪ ${url} → ${loc}`);
			if (loc) enqueue(loc, url);
			return;
		}
		if (!entry.type.includes('text/html')) return;
		html = body.toString('utf8');
		console.log(`page ${res.status} ${url} (${(body.length / 1024).toFixed(0)} kB)`);
	}
	for (const u of extractUrls(html, url)) enqueue(u, url);
	// AJAX endpointy map: data-map-*-endpoint="/?do=map-xxx-yyy"
	for (const m of html.matchAll(/data-map-[a-z]+-endpoint="([^"]+)"/g)) {
		const ep = normalize(m[1], url);
		if (!ep) continue;
		let body;
		if (manifest[ep]?.file) {
			body = await fs.readFile(path.join(RAW, manifest[ep].file));
		} else {
			const res = await get(ep, { ajax: true });
			body = Buffer.from(await res.arrayBuffer());
			await save(ep, res, body, 'ajax');
			console.log(`ajax ${res.status} ${ep}`);
		}
		const text = body.toString('utf8');
		for (const u of extractUrls(text, url)) enqueue(u, url);
		// JSON: "icon":"/www/…" i HTML uvnitř src=\"/www/…\" (zpětné lomítko k URL nepatří)
		for (const mm of text.matchAll(/"(\\?\/www\\?\/[^"\\]*(?:\\\/[^"\\]*)*)/g)) enqueue(mm[1].replace(/\\\//g, '/'), url);
	}
}

async function crawlAsset(url) {
	let entry = manifest[url];
	let body;
	if (entry) {
		if (entry.status !== 200) return;
		body = await fs.readFile(path.join(RAW, entry.file));
	} else {
		const res = await get(url);
		const len = Number(res.headers.get('content-length') || 0);
		if (len > MAX_ASSET_BYTES) {
			console.log(`skip (velké ${len}) ${url}`);
			manifest[url] = { kind: 'asset', status: 413, skipped: true, bytes: len };
			return;
		}
		body = Buffer.from(await res.arrayBuffer());
		await save(url, res, body, 'asset');
		entry = manifest[url];
		if (res.status !== 200) {
			console.log(`asset ${res.status} ${url}`);
			return;
		}
	}
	const p = url.split('?')[0];
	if (p.endsWith('.css') || entry.type.includes('text/css')) {
		for (const u of extractCssUrls(body.toString('utf8'), url)) enqueue(u, url);
	}
	// panorama360.js dotahuje styly photo-sphere-vieweru relativně k sobě
	if (p.endsWith('/panorama360.js')) {
		const dir = p.slice(0, p.lastIndexOf('/') + 1);
		for (const f of ['core.css', 'markers.css']) enqueue(`${dir}vendor/photo-sphere-viewer/${f}`, url);
	}
}

async function pool(items, n, fn) {
	let i = 0;
	await Promise.all(Array.from({ length: n }, async () => {
		while (i < items.length) await fn(items[i++]);
	}));
}

// Nejdřív homepage kvůli session cookie, pak zbytek.
for (const p of seedPages) enqueue(p, null);
while (pageQueue.length) {
	const batch = pageQueue.splice(0, pageQueue.length);
	await pool(batch, 4, crawlPage);
}
console.log(`\nStránek: ${Object.values(manifest).filter(e => e.kind === 'page').length}, assetů ve frontě: ${assetQueue.length}`);
while (assetQueue.length) {
	const batch = assetQueue.splice(0, assetQueue.length);
	await pool(batch, 8, crawlAsset);
}

// Z manifestu vyhodit, co tento běh nenašel (staré nebo omylem stažené URL).
for (const url of Object.keys(manifest)) {
	if (seen.has(url) || manifest[url].kind === 'ajax') continue;
	if (manifest[url].file) await fs.rm(path.join(RAW, manifest[url].file), { force: true });
	delete manifest[url];
}
await fs.writeFile(MANIFEST, JSON.stringify(manifest, null, '\t'));
const all = Object.values(manifest);
const bytes = all.reduce((s, e) => s + (e.bytes || 0), 0);
console.log(`Hotovo: ${all.length} URL, ${(bytes / 1024 / 1024).toFixed(1)} MB, chyb: ${all.filter(e => e.status >= 400).length}`);
