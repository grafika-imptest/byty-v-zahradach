// Rychlé výřezy pro vizuální kontrolu.
//   node tools/snap.mjs --page=home --w=1440 --h=900 [--y=0] [--clip=0,0,1440,200] [--mode=refined|orig] [--out=file.png] [--full=1]
import { chromium } from 'playwright-core';
import path from 'node:path';
import fs from 'node:fs/promises';
import { PAGES } from './pages.mjs';

const a = Object.fromEntries(process.argv.slice(2).map(x => x.replace(/^--/, '').split(/=(.*)/s).slice(0, 2)));
const HOST = a.host || 'http://localhost:5330/byty-v-zahradach';
const w = Number(a.w || 1440), h = Number(a.h || 900);
const mode = a.mode || 'refined';
const ROOT = path.resolve(import.meta.dirname, '..');
const out = path.resolve(ROOT, a.out || `snaps/${a.page}-${w}-${mode}${a.y ? '-y' + a.y : ''}.png`);
await fs.mkdir(path.dirname(out), { recursive: true });

const browser = await chromium.launch({ channel: 'msedge', headless: true });
const ctx = await browser.newContext({ viewport: { width: w, height: h }, isMobile: w <= 480, hasTouch: w <= 1024 });
await ctx.addInitScript(m => {
	try { localStorage.setItem('brave-static-cookie', '1'); localStorage.setItem('brave-refine', m === 'orig' ? 'off' : 'on'); } catch {}
	document.addEventListener('DOMContentLoaded', () => { const s = document.createElement('style'); s.textContent = '.refineSwitch{display:none!important}'; document.head.appendChild(s); });
}, mode);
const page = await ctx.newPage();
await page.goto(HOST + (PAGES[a.page] || a.page), { waitUntil: 'load' });
await page.waitForTimeout(500);
if (a.full) await page.evaluate(async () => { for (let y = 0; y < document.documentElement.scrollHeight; y += 500) { scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); } scrollTo(0, 0); await new Promise(r => setTimeout(r, 700)); });
	if (a.eval) await page.evaluate(a.eval);
if (a.y) {
	// Postupně, ať se spustí scroll handlery (a hlavička se případně schová)
	const target = Number(a.y);
	for (let y = 0; y <= target; y += 200) { await page.evaluate(v => scrollTo(0, v), Math.min(y, target)); await page.waitForTimeout(30); }
	if (a.up) for (let i = 1; i <= Number(a.up) / 50; i++) { await page.evaluate(v => scrollTo(0, v), target - i * 50); await page.waitForTimeout(30); }
	await page.waitForTimeout(600);
}
const opts = { path: out, animations: 'disabled' };
if (a.clip) { const [x, y, cw, ch] = a.clip.split(',').map(Number); opts.clip = { x, y, width: cw, height: ch }; }
if (a.full) opts.fullPage = true;
await page.screenshot(opts);
await browser.close();
console.log(out);
