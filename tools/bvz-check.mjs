// Kontrola návrhu Byty v zahradách (server: tools/serve.mjs 5330)
//   node tools/bvz-check.mjs
import { chromium } from 'playwright-core';
const H = 'http://localhost:5330/byty-v-zahradach';
const PAGES = ['/', '/o-projektu/', '/nabidka-nemovitosti/', '/byt-101/', '/byt-402/', '/1-np/', '/4-np/', '/standardy/', '/lokalita/', '/aktuality/', '/aktuality/okna-jsou-osazena/', '/kontakty/', '/zpracovani-osobnich-udaju/'];
const b = await chromium.launch({ channel: 'msedge' });
let fails = 0;
const ok = (c, m) => { console.log((c ? 'ok  ' : 'FAIL') + ' ' + m); if (!c) fails++; };

for (const w of [1920, 1440, 768, 390]) {
	const mob = w < 500;
	const ctx = await b.newContext({ viewport: { width: w, height: mob ? 844 : 900 }, isMobile: mob, hasTouch: mob });
	const p = await ctx.newPage();
	for (const path of PAGES) {
		const errs = [];
		p.removeAllListeners('pageerror'); p.removeAllListeners('response');
		p.on('pageerror', e => errs.push(e.message));
		p.on('response', r => { if (r.status() >= 400 && !/favicon/.test(r.url())) errs.push(r.status() + ' ' + r.url().replace(H, '')); });
		await p.goto(H + path + '?upravene', { waitUntil: 'load' });
		await p.waitForTimeout(700);
		const r = await p.evaluate(() => ({
			over: document.documentElement.scrollWidth > innerWidth + 1,
			h1: document.querySelectorAll('h1').length,
			broken: [...document.images].filter(i => i.complete && i.getAttribute('src') && !i.naturalWidth && i.loading !== 'lazy').map(i => i.src).slice(0, 3),
		}));
		ok(!r.over && r.h1 === 1 && !r.broken.length && !errs.length, `${w} ${path}${r.over ? ' PŘETÉKÁ' : ''}${r.h1 !== 1 ? ' h1=' + r.h1 : ''}${r.broken.length ? ' obrázky:' + r.broken : ''}${errs.length ? ' chyby:' + errs.slice(0, 3) : ''}`);
	}
	await ctx.close();
}

// Cesty uživatele
const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await p.goto(H + '/nabidka-nemovitosti/?upravene'); await p.waitForTimeout(800);
const count = () => p.evaluate(() => [document.querySelector('[data-rf-count]').textContent, document.querySelectorAll('[data-rf-units] > div:not([hidden])').length].join('/'));
ok((await count()) === '34/34', 'výběr: 34 bytů');
await p.click('.rfChip[data-k="dispozice"][data-v="2+kk"]');
ok((await count()) === '18/18', 'filtr 2+kk → 18 (' + await count() + ')');
await p.click('.rfChip[data-k="venku"][data-v="zahrada"]');
ok((await count()) === '4/4', '2+kk se zahradou → 4 (' + await count() + ')');
ok(p.url().includes('dispozice=2%2Bkk') && p.url().includes('venku=zahrada'), 'filtr se propsal do URL');
await p.click('[data-rf-filter] [data-rf-reset]');
ok((await count()) === '34/34', 'zrušit filtry');

await p.goto(H + '/nabidka-nemovitosti/?dispozice=3%2Bkk&patro=4&upravene'); await p.waitForTimeout(600);
ok((await count()) === '2/2', 'odkaz z vyhledávání: 3+kk ve 4. NP → 2 (' + await count() + ')');

await p.goto(H + '/?upravene'); await p.waitForTimeout(1200);
await p.evaluate(() => { const c = document.querySelector('.cookie-bar-modal'); c && c.remove(); });
await p.click('.panoramaHero__quickSearchItem:nth-of-type(1) .panoramaHero__quickSearchTrigger');
await p.click('.panoramaHero__quickSearchItem:nth-of-type(1) .panoramaHero__quickSearchOption >> text=1+kk');
await Promise.all([p.waitForNavigation(), p.click('.panoramaHero__quickSearchSubmit')]);
await p.waitForTimeout(600);
ok((await count()) === '11/11', 'vyhledávání na úvodu 1+kk → výběr 11 bytů (' + await count() + ')');

await p.goto(H + '/?upravene'); await p.waitForTimeout(1000);
const hrefs = await p.$$eval('section.vizualize map area', a => a.map(x => x.getAttribute('href')));
ok(hrefs.length === 4 && hrefs.every((h, i) => h.endsWith(`/${i + 1}-np/`)), 'vizualizace domu: 4 podlaží s odkazy');
const hero = await p.evaluate(() => { const v = document.querySelector('.rfVideoHero video'); return v ? 'video:' + !v.paused : 'slides:' + document.querySelectorAll('.rfSlide').length; });
ok(hero === 'video:true' || /slides:[3-9]/.test(hero), 'úvod: video nebo střídání vizualizací (' + hero + ')');
ok(await p.$$eval('.homepageInteractive .leaflet-marker-icon', m => m.length).catch(() => 0) >= 0, 'mapa na úvodu');

await p.goto(H + '/2-np/?upravene'); await p.waitForTimeout(1500);
const polys = await p.$$eval('template[data-imagemap-polygon]', t => t.map(x => x.getAttribute('data-imagemap-href')));
ok(polys.length === 9 && polys.every(h => /\/byt-2\d\d\/$/.test(h)), 'půdorys 2. NP: 9 klikacích bytů');

await p.goto(H + '/byt-107/?upravene'); await p.waitForTimeout(800);
const unit = await p.evaluate(() => ({ h1: document.querySelector('h1').textContent.trim(), price: document.querySelector('.buyPanel__price').textContent.trim(), rows: [...document.querySelectorAll('.unitRooms__table tbody:first-of-type tr')].map(r => r.textContent.replace(/\s+/g, ' ').trim()) }));
ok(unit.h1 === 'Byt 1.07' && unit.price === 'Cena na vyžádání' && unit.rows.some(r => r.includes('Zahrada') && r.includes('155')), 'detail 1.07: zahrada 155 m², cena na vyžádání');

await p.goto(H + '/lokalita/?upravene'); await p.waitForTimeout(800);
await p.evaluate(() => scrollTo(0, document.querySelector('.mapContent').offsetTop)); await p.waitForTimeout(2500);
ok(await p.$$eval('.mapContent .leaflet-marker-icon', m => m.length) >= 10, 'lokalita: mapa s body okolí');

await b.close();
console.log(fails ? `\n${fails} chyb` : '\nVše v pořádku');
process.exit(fails ? 1 : 0);
