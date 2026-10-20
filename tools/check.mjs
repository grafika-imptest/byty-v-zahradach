// Kontroly statického náhledu napříč stránkami a šířkami:
//  - horizontální přetečení stránky (a viníci),
//  - chyby v konzoli a nenačtené požadavky (bez známých chyb originálu),
//  - rozbité obrázky,
//  - hlavička: výška, skrytí po scrollu dolů, návrat po scrollu nahoru, viditelnost nahoře,
//  - překryv: prvky pod hlavičkou po návratu nahoru.
//   node tools/check.mjs [--mode=refined|orig] [--widths=1920,1440,768,390] [--pages=home,byt]
import { chromium } from 'playwright-core';
import { PAGES } from './pages.mjs';

const args = Object.fromEntries(process.argv.slice(2).map(a => a.replace(/^--/, '').split('=')));
const HOST = args.host || 'http://localhost:5330/byty-v-zahradach';
const WIDTHS = (args.widths || '1920,1440,1280,768,390').split(',').map(Number);
const mode = args.mode || 'refined';
const pick = args.pages ? args.pages.split(',') : Object.keys(PAGES);
// Chyby, které má i originál (SVG NaN z panoramatu, chybějící ikony fontawesome atd.)
const KNOWN = [/attribute d: Expected number/, /attribute transform: Expected number/, /fontawesome/, /materialdesignicons-webfont\.(eot|ttf)/, /cache\/images\/(layers|marker)/, /hlavicka-zmena|reference-quotation|color-check/, /tile\.openstreetmap|openstreetmap\.org/, /youtube|ytimg|google/];

const browser = await chromium.launch({ channel: 'msedge', headless: true });
let problems = 0;
for (const w of WIDTHS) {
	const ctx = await browser.newContext({ viewport: { width: w, height: w <= 480 ? 844 : 900 }, isMobile: w <= 480, hasTouch: w <= 1024 });
	await ctx.addInitScript(m => { try { localStorage.setItem('brave-static-cookie', '1'); localStorage.setItem('brave-refine', m === 'orig' ? 'off' : 'on'); } catch {} }, mode);
	const page = await ctx.newPage();
	const errs = [];
	page.on('console', m => { if (m.type() === 'error' && !KNOWN.some(k => k.test(m.text()))) errs.push(m.text().slice(0, 160)); });
	page.on('pageerror', e => errs.push('JS: ' + e.message.slice(0, 160)));
	page.on('requestfailed', r => { if (!KNOWN.some(k => k.test(r.url()))) errs.push('FAIL ' + r.url().slice(0, 140)); });
	page.on('response', r => { if (r.status() >= 400 && !KNOWN.some(k => k.test(r.url()))) errs.push(r.status() + ' ' + r.url().slice(0, 140)); });
	for (const key of pick) {
		errs.length = 0;
		await page.goto(HOST + PAGES[key], { waitUntil: 'load', timeout: 60000 });
		await page.waitForTimeout(500);
		const res = await page.evaluate(async () => {
			const vw = document.documentElement.clientWidth;
			// projet stránku (lazy obrázky, scrollspy)
			const H = document.documentElement.scrollHeight;
			for (let y = 0; y < H; y += 500) { scrollTo(0, y); await new Promise(r => setTimeout(r, 25)); }
			const over = document.documentElement.scrollWidth - vw;
			const culprits = [];
			if (over > 1) {
				for (const el of document.querySelectorAll('body *')) {
					const r = el.getBoundingClientRect();
					if (r.width && r.right > vw + 1 && getComputedStyle(el).position !== 'fixed') {
						const p = el.parentElement && el.parentElement.getBoundingClientRect();
						if (!p || p.right <= vw + 1) culprits.push(`${el.tagName.toLowerCase()}.${[...el.classList].slice(0, 2).join('.')} →${Math.round(r.right)}`);
					}
					if (culprits.length > 5) break;
				}
			}
			const broken = [...document.images].filter(i => i.complete && i.naturalWidth === 0 && i.getAttribute('src') && !/data:/.test(i.src) && i.getClientRects().length).map(i => i.src.split('/').slice(-1)[0]).slice(0, 4);
			scrollTo(0, 0);
			await new Promise(r => setTimeout(r, 300));
			return { over, culprits, broken, H };
		});
		// Hlavička: scroll kolečkem mimo panoráma (to kolečko zachytává záměrně)
		const nav = await page.evaluate(async () => {
			const root = document.documentElement;
			const bar = document.querySelector('header section.topBar');
			const st = () => ({ hidden: root.classList.contains('rf-nav-hidden'), top: Math.round(bar.getBoundingClientRect().top), h: Math.round(bar.getBoundingClientRect().height) });
			await new Promise(r => setTimeout(r, 750));
			const s0 = st();
			const max = document.documentElement.scrollHeight - innerHeight;
			for (let y = 0; y <= Math.min(1200, max); y += 60) { scrollTo(0, y); await new Promise(r => setTimeout(r, 20)); }
			await new Promise(r => setTimeout(r, 750));
			const s1 = st();
			const y1 = scrollY;
			for (let i = 1; i <= 4; i++) { scrollTo(0, y1 - i * 30); await new Promise(r => setTimeout(r, 20)); }
			await new Promise(r => setTimeout(r, 750));
			const s2 = st();
			scrollTo(0, 0);
			await new Promise(r => setTimeout(r, 750));
			const s3 = st();
			return { s0, s1, s2, s3, canScroll: max > 300 };
		});
		const navOk = nav.s0.top === 0 && nav.s3.top === 0 && !nav.s3.hidden && (!nav.canScroll || (nav.s1.hidden && nav.s1.top < -nav.s1.h + 2 && !nav.s2.hidden && nav.s2.top === 0));
		const issues = [];
		if (res.over > 1) issues.push(`přetečení +${res.over}px ${res.culprits.join(' ')}`);
		if (res.broken.length) issues.push('obrázky: ' + res.broken.join(', '));
		if (!navOk) issues.push('hlavička: ' + JSON.stringify(nav));
		if (errs.length) issues.push('konzole: ' + [...new Set(errs)].slice(0, 4).join(' | '));
		if (issues.length) problems++;
		console.log(`${issues.length ? 'ERR' : 'ok '} ${String(w).padEnd(4)} ${key.padEnd(14)} h${nav.s0.h} ${issues.join(' · ')}`);
	}
	await ctx.close();
}
await browser.close();
console.log(problems ? `\n${problems} stránek s problémem` : '\nVše v pořádku');
process.exitCode = problems ? 1 : 0;
