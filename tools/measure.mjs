// Změří layout: výšku hlavičky, šířky obsahu sekcí a velikosti písma.
//   node tools/measure.mjs --mode=orig --widths=1440,1920 [--pages=home,byt] > measure.json
import { chromium } from 'playwright-core';

const args = Object.fromEntries(process.argv.slice(2).map(a => a.replace(/^--/, '').split('=')));
const HOST = args.host || 'http://localhost:5330/byty-v-zahradach';
const WIDTHS = (args.widths || '1440,1920').split(',').map(Number);
const mode = args.mode || 'orig';
const { PAGES } = await import('./pages.mjs');
const pick = args.pages ? args.pages.split(',') : Object.keys(PAGES);

const browser = await chromium.launch({ channel: 'msedge', headless: true });
const result = {};
for (const w of WIDTHS) {
	const ctx = await browser.newContext({ viewport: { width: w, height: 900 } });
	await ctx.addInitScript(m => {
		try { localStorage.setItem('brave-static-cookie', '1'); localStorage.setItem('brave-refine', m === 'orig' ? 'off' : 'on'); } catch {}
	}, mode);
	const page = await ctx.newPage();
	for (const key of pick) {
		await page.goto(HOST + PAGES[key], { waitUntil: 'load' });
		await page.waitForTimeout(400);
		const data = await page.evaluate(() => {
			const r = el => { const b = el.getBoundingClientRect(); return { x: Math.round(b.left), w: Math.round(b.width), h: Math.round(b.height) }; };
			const header = document.querySelector('header section.topBar');
			const sections = [...document.querySelectorAll('main section, main > div > section, footer section')].filter(s => s.offsetParent || s.getClientRects().length).map(s => {
				// "obsah" = nejširší potomek s textem nebo obrázkem, který není přes celou šířku
				const cont = s.querySelector(':scope > .container') || s.querySelector('.container') || s;
				let inner = cont;
				const kids = [...cont.querySelectorAll(':scope > *')].filter(k => k.getClientRects().length);
				if (kids.length) inner = kids.reduce((a, b) => (b.getBoundingClientRect().width > a.getBoundingClientRect().width ? b : a));
				const h2 = s.querySelector('h1, h2');
				const p = s.querySelector('p:not(.subtitle), .editableBlock p, li');
				return {
					cls: (s.className || '').toString().split(' ').slice(0, 2).join('.'),
					box: r(s), container: r(cont), inner: r(inner),
					h: h2 ? getComputedStyle(h2).fontSize : null,
					p: p ? getComputedStyle(p).fontSize : null,
				};
			});
			return {
				rootFont: getComputedStyle(document.documentElement).fontSize,
				header: header ? r(header) : null,
				docH: document.documentElement.scrollHeight,
				sections,
			};
		});
		(result[key] ??= {})[w] = data;
	}
	await ctx.close();
}
await browser.close();
console.log(JSON.stringify(result, null, 1));
