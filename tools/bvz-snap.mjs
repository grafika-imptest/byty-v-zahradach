// Screenshoty stránek projektu (Playwright + Edge): node tools/bvz-snap.mjs <cesta> <šířka> [full]
import { chromium } from 'playwright-core';
let [p = '', w = '1440', full] = process.argv.slice(2);
p = '/' + p.split('/').filter(Boolean).join('/') + (p.endsWith('/') && p.length > 1 ? '/' : ''); // bez úvodního lomítka (Git Bash ho přepisuje)
const b = await chromium.launch({ channel: 'msedge' });
const mob = +w < 500;
const pg = await (await b.newContext({ viewport: { width: +w, height: mob ? 844 : 900 }, isMobile: mob, hasTouch: mob })).newPage();
const errs = []; pg.on('pageerror', e => errs.push(e.message)); pg.on('response', r => r.status() >= 400 && errs.push(r.status() + ' ' + r.url()));
await pg.goto('http://localhost:5330/byty-v-zahradach' + p + (p.includes('?') ? '&' : '?') + 'upravene', { waitUntil: 'load' });
await pg.waitForTimeout(1500);
await pg.evaluate(() => { const c = document.querySelector('.cookie-bar-modal'); c && c.remove(); });
if (full) { await pg.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 300) { scrollTo(0, y); await new Promise(r => setTimeout(r, 220)); } scrollTo(0, 0); }); await pg.waitForTimeout(1500); }
const name = 'snaps/' + (p.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '') || 'home') + '-' + w + (full ? '-full' : '') + '.png';
await pg.screenshot({ path: name, fullPage: !!full });
console.log(name, 'errors:', errs.length ? errs.slice(0, 8) : 'none', 'overflowX:', await pg.evaluate(() => document.documentElement.scrollWidth > innerWidth));
await b.close();
