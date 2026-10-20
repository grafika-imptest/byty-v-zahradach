// Sken kontrastu textu (WCAG AA) na reprezentativních stránkách v režimu Upravená.
//   node tools/contrast-scan.mjs [--mode=refined|orig] [--widths=1440,390]
import { chromium } from 'playwright-core';
import { PAGES } from './pages.mjs';
const args = Object.fromEntries(process.argv.slice(2).map(a => a.replace(/^--/, '').split('=')));
const HOST = args.host || 'http://localhost:5330/byty-v-zahradach';
const WIDTHS = (args.widths || '1440,390').split(',').map(Number);
const q = args.mode === 'orig' ? '?puvodni' : '?upravene';
const b = await chromium.launch({ channel: 'msedge' });
const agg = new Map();
for (const w of WIDTHS) {
	const ctx = await b.newContext({ viewport: { width: w, height: 900 }, isMobile: w < 500 });
	const p = await ctx.newPage();
	for (const [k, u] of Object.entries(PAGES)) {
		await p.goto(HOST + u + q, { waitUntil: 'load' }); await p.waitForTimeout(900);
		const res = await p.evaluate(() => {
			const lum = c => { const m = c.match(/[\d.]+/g); if (!m) return null; const [r, g, bb] = m.slice(0, 3).map(x => { x /= 255; return x <= .03928 ? x / 12.92 : Math.pow((x + .055) / 1.055, 2.4); }); return .2126 * r + .7152 * g + .0722 * bb; };
			const bg = e => { while (e) { const s = getComputedStyle(e); if (s.backgroundImage !== 'none' && !/gradient/.test(s.backgroundImage)) return null; const c = s.backgroundColor; const a = c.match(/[\d.]+/g); if (a && (a.length < 4 || +a[3] > 0.6)) return c; e = e.parentElement; } return 'rgb(255,255,255)'; };
			const out = [];
			for (const e of document.querySelectorAll('body *')) {
				if (!e.checkVisibility || !e.checkVisibility()) continue;
				if (![...e.childNodes].some(n => n.nodeType == 3 && n.textContent.trim().length > 1)) continue;
				const r0 = e.getBoundingClientRect(); if (!r0.width) continue;
				const s = getComputedStyle(e); const B = bg(e); if (!B) continue;
				const a = lum(s.color), c = lum(B); if (a == null || c == null) continue;
				const r = (Math.max(a, c) + .05) / (Math.min(a, c) + .05);
				const big = parseFloat(s.fontSize) >= 24 || (parseFloat(s.fontSize) >= 18.6 && +s.fontWeight >= 700);
				if (r < (big ? 3 : 4.5)) out.push([(e.closest('section,header,footer,form,.uk-modal,.cookie-bar-modal') || {}).className || '', e.tagName.toLowerCase() + (e.className && typeof e.className == 'string' ? '.' + e.className.trim().split(/\s+/).join('.') : ''), s.color, B, r.toFixed(2), e.textContent.trim().slice(0, 30)]);
			}
			return out;
		});
		for (const x of res) { const key = x.slice(0, 4).join(' | '); if (!agg.has(key)) agg.set(key, { r: x[4], t: x[5], pages: new Set() }); agg.get(key).pages.add(k + '@' + w); }
	}
	await ctx.close();
}
await b.close();
for (const [k, v] of [...agg].sort()) console.log(v.r, '|', k, '|', JSON.stringify(v.t), '|', [...v.pages].slice(0, 4).join(','));
console.log('celkem', agg.size);
