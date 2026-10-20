// Kontrola, že se jednořádková hlavička vejde: měří prvky při různých šířkách.
//   node tools/header-fit.mjs [--css="extra css"]
import { chromium } from 'playwright-core';

const args = Object.fromEntries(process.argv.slice(2).map(a => a.replace(/^--/, '').split(/=(.*)/s).slice(0, 2)));
const HOST = args.host || 'http://localhost:5330/byty-v-zahradach';
const widths = (args.widths || '1200,1280,1366,1440,1536,1600,1680,1920').split(',').map(Number);
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
await ctx.addInitScript(() => { try { localStorage.setItem('brave-static-cookie', '1'); localStorage.setItem('brave-refine', 'on'); } catch {} });
const page = await ctx.newPage();
await page.goto(HOST + '/', { waitUntil: 'load' });
if (args.css) await page.addStyleTag({ content: args.css });
for (const w of widths) {
	await page.setViewportSize({ width: w, height: 900 });
	await page.waitForTimeout(150);
	const d = await page.evaluate(() => {
		const q = s => document.querySelector(s);
		const r = e => (e ? e.getBoundingClientRect() : null);
		const logo = r(q('header .logo')), nav = r(q('header nav.menu-text')), top = r(q('header .menuTop')), cta = r(q('header a.button-main'));
		const links = [...document.querySelectorAll('header nav.menu-text li a')];
		const wrapped = links.filter(a => { const s = a.querySelector('span') || a; return s.getClientRects().length > 1; }).map(a => a.textContent.trim());
		const fs = links[0] ? getComputedStyle(links[0]).fontSize : '';
		const bar = r(q('header section.topBar'));
		return {
			root: getComputedStyle(document.documentElement).fontSize, fs, barH: Math.round(bar.height),
			logoEnd: Math.round(logo.right), navStart: nav && Math.round(nav.left), navEnd: nav && Math.round(nav.right),
			topStart: top && Math.round(top.left), topEnd: top && Math.round(top.right), ctaStart: Math.round(cta.left), ctaEnd: Math.round(cta.right),
			vw: document.documentElement.clientWidth, wrapped,
		};
	});
	const ok = d.navStart >= d.logoEnd + 8 && (!d.topStart || d.topStart >= d.navEnd) && d.ctaEnd <= d.vw && !d.wrapped.length;
	console.log(`${w}: ${ok ? 'OK ' : 'ERR'} root ${d.root} font ${d.fs} h ${d.barH} | logo→${d.logoEnd} nav ${d.navStart}–${d.navEnd} util ${d.topStart}–${d.topEnd} cta ${d.ctaStart}–${d.ctaEnd} / ${d.vw}${d.wrapped.length ? ' wrap:' + d.wrapped.join(',') : ''}`);
}
await browser.close();
