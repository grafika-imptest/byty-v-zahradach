// Screenshoty statického náhledu (Playwright + systémový Edge).
//   node tools/shots.mjs --mode=both --widths=1920,1440,768,390 --pages=home,unit
//   --mode=orig|refined|both   --full=0 (jen viewport)   --out=shots
import { chromium } from 'playwright-core';
import fs from 'node:fs/promises';
import path from 'node:path';
import { PAGES } from './pages.mjs';

const args = Object.fromEntries(process.argv.slice(2).map(a => a.replace(/^--/, '').split('=')));
const ROOT = path.resolve(import.meta.dirname, '..');
const HOST = args.host || 'http://localhost:5330/byty-v-zahradach';
const OUT = path.join(ROOT, args.out || 'shots');
const WIDTHS = (args.widths || '1920,1440,768,390').split(',').map(Number);
const MODES = args.mode === 'both' || !args.mode ? ['orig', 'refined'] : [args.mode];
const FULL = args.full !== '0';

const pick = args.pages ? args.pages.split(',') : Object.keys(PAGES);

async function settle(page) {
	// Projet stránku kvůli lazy-load obrázkům a scrollspy animacím, pak zpět nahoru.
	await page.evaluate(async () => {
		const step = Math.max(400, innerHeight * 0.8);
		for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
			scrollTo(0, y);
			await new Promise(r => setTimeout(r, 120));
		}
		scrollTo(0, 0);
		await new Promise(r => setTimeout(r, 600));
	});
	await page.waitForLoadState('networkidle').catch(() => {});
}

const browser = await chromium.launch({ channel: 'msedge', headless: true });
try {
	for (const mode of MODES) {
		for (const w of WIDTHS) {
			const ctx = await browser.newContext({
				viewport: { width: w, height: w <= 480 ? 844 : w <= 1024 ? 1024 : 900 },
				deviceScaleFactor: 1,
				isMobile: w <= 480,
				hasTouch: w <= 1024,
			});
			await ctx.addInitScript(m => {
				try {
					localStorage.setItem('brave-static-cookie', '1');
					localStorage.setItem('brave-refine', m === 'orig' ? 'off' : 'on');
				} catch {}
				document.addEventListener('DOMContentLoaded', () => {
					const s = document.createElement('style');
					s.textContent = '.refineSwitch{display:none!important}';
					document.head.appendChild(s);
				});
			}, mode);
			const page = await ctx.newPage();
			for (const key of pick) {
				const url = HOST + PAGES[key];
				await page.goto(url, { waitUntil: 'load', timeout: 60000 });
				await settle(page);
				const dir = path.join(OUT, mode, String(w));
				await fs.mkdir(dir, { recursive: true });
				const file = path.join(dir, `${key}.png`);
				await page.screenshot({ path: file, fullPage: FULL, animations: 'disabled' });
				console.log(`${mode} ${w} ${key}`);
			}
			await ctx.close();
		}
	}
} finally {
	await browser.close();
}
