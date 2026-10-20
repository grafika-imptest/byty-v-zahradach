import { chromium } from 'playwright-core';
const b = await chromium.launch({ channel: 'msedge' });
for (const w of [1440, 390]) {
const ctx = await b.newContext({ viewport: { width: w, height: 900 } });
await ctx.addInitScript(() => { localStorage.setItem('brave-static-cookie','1'); localStorage.setItem('brave-refine','on'); });
const p = await ctx.newPage();
await p.goto('http://localhost:5330/byty-v-zahradach/', { waitUntil: 'load' });
await p.waitForTimeout(400);
const st = async (l) => { const s = await p.evaluate(() => ({ y: scrollY, hidden: document.documentElement.classList.contains('rf-nav-hidden'), scrolled: document.documentElement.classList.contains('rf-nav-scrolled'), top: Math.round(document.querySelector('header section.topBar').getBoundingClientRect().top), ph: !!document.querySelector('.uk-sticky-placeholder'), cls: document.querySelector('header section.topBar').className })); console.log(w, l, JSON.stringify(s)); };
await st('start');
await p.mouse.move(w - 30, 880);
for (let i = 0; i < 12; i++) { await p.mouse.wheel(0, 120); await p.waitForTimeout(40); }
await p.waitForTimeout(500); await st('wheel down 1440px');
await p.mouse.wheel(0, -4); await p.waitForTimeout(300); await st('tiny up 4px');
await p.mouse.wheel(0, -120); await p.waitForTimeout(500); await st('up 120');
await p.mouse.wheel(0, 6); await p.waitForTimeout(300); await st('tiny down 6');
for (let i = 0; i < 5; i++) { await p.mouse.wheel(0, 120); await p.waitForTimeout(40); }
await p.waitForTimeout(500); await st('down again');
await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(500); await st('top');
await ctx.close();
}
await b.close();
