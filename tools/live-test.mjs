// Test interakcí proti ŽIVÉMU backendu demo.bravedevelopment.cz s vloženou vrstvou úprav.
// Playwright zachytí HTML dokumenty, vloží <link>/<script> na lokální refine/*.{css,js}
// a nechá web běžet se skutečným serverem (AJAX, filtry, snippety).
// Nic se neodesílá: žádné POST formuláře, žádné přidávání do oblíbených.
//   node tools/live-test.mjs [--headed] [--mode=refined|orig]
import { chromium } from 'playwright-core';
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const ORIGIN = 'https://demo.bravedevelopment.cz';
const args = Object.fromEntries(process.argv.slice(2).map(a => a.replace(/^--/, '').split('=')));
const mode = args.mode || 'refined';
const css = await fs.readFile(path.join(ROOT, 'refine', 'brave-refine.css'), 'utf8');
const js = await fs.readFile(path.join(ROOT, 'refine', 'brave-refine.js'), 'utf8');

const browser = await chromium.launch({ channel: 'msedge', headless: !('headed' in args) });
const results = [];
function rec(name, ok, info = '') {
	results.push({ name, ok, info });
	console.log(`${ok ? 'ok ' : 'ERR'} ${name}${info ? ' — ' + info : ''}`);
}

async function context(width, height = 900) {
	const ctx = await browser.newContext({ viewport: { width, height }, isMobile: width <= 480, hasTouch: width <= 1024, locale: 'cs-CZ', serviceWorkers: 'block' });
	await ctx.route(url => url.origin === ORIGIN && url.pathname === '/__refine/brave-refine.css', r => r.fulfill({ body: css, contentType: 'text/css' }));
	await ctx.route(url => url.origin === ORIGIN && url.pathname === '/__refine/brave-refine.js', r => r.fulfill({ body: js, contentType: 'text/javascript' }));
	await ctx.route(url => url.origin === ORIGIN, async (route) => {
		const req = route.request();
		if (req.resourceType() !== 'document' || req.method() !== 'GET') return route.fallback();
		const res = await route.fetch();
		let body = await res.text();
		if (mode === 'refined' && (res.headers()['content-type'] || '').includes('text/html')) {
			body = body.replace(/<\/head>/i, '<link rel="stylesheet" href="/__refine/brave-refine.css"><script src="/__refine/brave-refine.js" defer></script></head>');
		}
		await route.fulfill({ response: res, body });
	});
	// Žádné POSTy na živý server (formuláře, oblíbené, cookie lišta) — test jen čte
	await ctx.route(url => url.origin === ORIGIN, (route) => route.request().method() === 'POST' ? route.abort() : route.fallback());
	const page = await ctx.newPage();
	page.on('pageerror', e => rec('JS chyba na ' + page.url(), false, e.message.slice(0, 160)));
	return { ctx, page };
}

const visible = (page, sel) => page.locator(sel).first().isVisible().catch(() => false);
// Je prvek opravdu klikatelný (nepřekrývá ho hlavička ani nic jiného)?
const clickable = (page, sel) => page.evaluate(s => {
	const el = document.querySelector(s);
	if (!el) return 'chybí';
	el.scrollIntoView({ block: 'center' });
	const r = el.getBoundingClientRect();
	const hit = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
	return hit && (el === hit || el.contains(hit)) ? true : `překryto: ${hit && (hit.className || hit.tagName)}`;
}, sel);

// Cookie lištu skrýt jen vizuálně (souhlas se na živý web neposílá)
async function hideCookie(page) {
	await page.addStyleTag({ content: '.cookie-bar-modal{display:none!important}' });
}

try {
	/* ---------- Desktop 1440 ---------- */
	{
		const { ctx, page } = await context(1440);
		await page.goto(ORIGIN + '/', { waitUntil: 'load' });
		await hideCookie(page);
		await page.waitForTimeout(800);
		const hdr = await page.evaluate(() => ({ h: document.querySelector('header section.topBar').getBoundingClientRect().height, rf: document.documentElement.classList.contains('rf-on') }));
		rec('home: vrstva aktivní a hlavička kompaktní', mode !== 'refined' || (hdr.rf && hdr.h <= 72), `výška ${Math.round(hdr.h)}px`);

		// Rychlé vyhledávání: rozbalení výběru
		const trig = page.locator('.panoramaHero__quickSearchTrigger').first();
		await trig.click();
		await page.waitForTimeout(300);
		rec('home: rychlé vyhledávání se rozbalí', (await trig.getAttribute('aria-expanded')) === 'true');
		await page.keyboard.press('Escape');
		await trig.click();

		// Jazyk: dropdown se otevře (neklikat na EN)
		await page.locator('header .languageSwitcher > a').first().click();
		await page.waitForTimeout(300);
		rec('home: dropdown jazyka', await visible(page, 'header .languageSwitcher .uk-drop.uk-open, header .languageSwitcher .uk-dropdown.uk-open'));
		await page.keyboard.press('Escape');
		await page.evaluate(() => document.querySelectorAll('header .uk-drop.uk-open').forEach(d => UIkit.drop(d).hide(false)));

		// Mapa na homepage se načte z AJAX endpointu
		await page.locator('.homepageInteractive').scrollIntoViewIfNeeded();
		await page.waitForTimeout(2500);
		rec('home: mapa (Leaflet) s markerem', await page.locator('.homepageInteractive .leaflet-marker-icon').count() > 0);

		// Odeslání rychlého vyhledávání = GET navigace na nabídku
		await page.evaluate(() => scrollTo(0, 0));
		await Promise.all([page.waitForURL(/nabidka-nemovitosti/), page.locator('.panoramaHero__quickSearchSubmit').click()]);
		rec('home: rychlé vyhledávání → nabídka', true, page.url().replace(ORIGIN, ''));

		/* Nabídka */
		await page.goto(ORIGIN + '/nabidka-nemovitosti', { waitUntil: 'load' });
		await hideCookie(page);
		await page.waitForTimeout(800);
		await page.locator('button.filterOpen').first().click();
		await page.waitForTimeout(600);
		rec('nabídka: modál filtru se otevře', await visible(page, '#reo-unit-filter-modal.uk-open'));
		await page.keyboard.press('Escape');
		await page.waitForTimeout(500);
		rec('nabídka: modál filtru se zavře', !(await visible(page, '#reo-unit-filter-modal.uk-open')));
		const firstFav = await page.evaluate(() => { const f = document.querySelector('form[id^="frm-reoUnitFavorite"] button, form[id^="frm-reoUnitFavorite"] [type=submit]'); return f ? '#' + f.closest('form').id + ' [type=submit], #' + f.closest('form').id + ' button' : null; });
		if (firstFav) rec('nabídka: tlačítko oblíbené není překryté', (await clickable(page, firstFav)) === true, String(await clickable(page, firstFav)));
		const rowLink = page.locator('.unitsTableSection a[href*="/byt-"]').first();
		rec('nabídka: řádky bytů s odkazem na detail', await rowLink.count() > 0);
		// Sticky levý panel jede s hlavičkou
		await page.mouse.move(1400, 850);
		for (let i = 0; i < 10; i++) { await page.mouse.wheel(0, 140); await page.waitForTimeout(40); }
		await page.waitForTimeout(700);
		const side = await page.evaluate(() => { const s = document.querySelector('.unitsLayout .layoutSide'); return s ? Math.round(s.getBoundingClientRect().top) : null; });
		const hidden = await page.evaluate(() => document.documentElement.classList.contains('rf-nav-hidden'));
		rec('nabídka: sticky panel filtru pod hlavičkou', side === null || (hidden ? side < 40 : side >= 60), `top ${side}px, hlavička ${hidden ? 'schovaná' : 'vidět'}`);
		await page.mouse.wheel(0, -200);
		await page.waitForTimeout(700);
		const side2 = await page.evaluate(() => { const s = document.querySelector('.unitsLayout .layoutSide'); const b = document.querySelector('header section.topBar').getBoundingClientRect(); return s ? [Math.round(s.getBoundingClientRect().top), Math.round(b.bottom)] : null; });
		rec('nabídka: po scrollu nahoru panel nezajede pod hlavičku', !side2 || side2[0] >= side2[1] - 1, JSON.stringify(side2));

		// Přepnutí zobrazení (GET odkaz)
		const listLink = page.locator('a[href*="view=list"]').first();
		if (await listLink.count()) {
			await page.evaluate(() => scrollTo(0, 0));
			await Promise.all([page.waitForURL(/view=list/), listLink.click()]);
			rec('nabídka: přepnutí na seznam', true);
		}

		/* Detail bytu */
		await page.goto(ORIGIN + '/byt-a-01-01', { waitUntil: 'load' });
		await hideCookie(page);
		await page.waitForTimeout(800);
		const poptat = page.locator('a[href="#offer-form"]').first();
		if (await poptat.count()) {
			await poptat.click();
			await page.waitForTimeout(1500);
			const pos = await page.evaluate(() => { const f = document.getElementById('offer-form'); const b = document.querySelector('header section.topBar').getBoundingClientRect(); return f ? [Math.round(f.getBoundingClientRect().top), Math.round(b.bottom)] : null; });
			rec('byt: „Poptat“ doscrolluje na formulář a hlavička ho nepřekryje', pos && pos[0] >= pos[1] - 2 && pos[0] < 300, JSON.stringify(pos));
		}
		const thumb = page.locator('.galleryGrid-item').first();
		if (await thumb.count()) {
			await page.evaluate(() => scrollTo(0, 0));
			const before = await page.locator('.galleryGrid-featured img').first().getAttribute('src');
			await thumb.click();
			await page.waitForTimeout(300);
			const after = await page.locator('.galleryGrid-featured img').first().getAttribute('src');
			rec('byt: klik na náhled prohodí hlavní fotku', before !== after);
			await page.locator('.galleryGrid-featured').first().click();
			await page.waitForTimeout(800);
			rec('byt: lightbox se otevře', await visible(page, '.uk-lightbox.uk-open'));
			await page.keyboard.press('Escape');
			await page.waitForTimeout(500);
		}

		/* FAQ */
		await page.goto(ORIGIN + '/faq', { waitUntil: 'load' });
		await hideCookie(page);
		const acc = page.locator('.uk-accordion-title, .faqPack [class*="title"] a, .faqPack .uk-accordion > li > a').first();
		if (await acc.count()) {
			await acc.click();
			await page.waitForTimeout(600);
			rec('faq: akordeon se otevře', await page.locator('.uk-accordion > li.uk-open, .faqPack .uk-open').count() > 0);
		} else rec('faq: akordeon nenalezen', false);

		/* Lokalita — záložky */
		await page.goto(ORIGIN + '/lokalita', { waitUntil: 'load' });
		await hideCookie(page);
		const tabs = page.locator('.uk-subnav > li > a');
		if (await tabs.count() > 1) {
			await tabs.nth(1).click();
			await page.waitForTimeout(500);
			rec('lokalita: přepnutí záložky', await page.locator('.uk-switcher > .uk-active').count() > 0 && (await page.locator('.uk-subnav > li').nth(1).getAttribute('class') || '').includes('uk-active'));
		}

		/* Galerie — lightbox */
		await page.goto(ORIGIN + '/galerie', { waitUntil: 'load' });
		await hideCookie(page);
		const g = page.locator('.contentGallery a[href*="/www/upload/"]').first();
		if (await g.count()) {
			await g.scrollIntoViewIfNeeded();
			await g.click();
			await page.waitForTimeout(900);
			rec('galerie: lightbox', await visible(page, '.uk-lightbox.uk-open'));
			await page.keyboard.press('Escape');
		}

		/* Kontakt — formulář je použitelný (bez odeslání) */
		await page.goto(ORIGIN + '/kontakty', { waitUntil: 'load' });
		await hideCookie(page);
		const input = page.locator('section.form input[type=text], section.form input[type=email]').first();
		if (await input.count()) {
			await input.scrollIntoViewIfNeeded();
			await input.click();
			await input.fill('Test');
			rec('kontakt: pole formuláře je klikatelné a zapisovatelné', (await input.inputValue()) === 'Test');
		}
		await ctx.close();
	}

	/* ---------- Mobil 390 ---------- */
	{
		const { ctx, page } = await context(390, 844);
		await page.goto(ORIGIN + '/nabidka-nemovitosti', { waitUntil: 'load' });
		await hideCookie(page);
		await page.waitForTimeout(800);
		await page.locator('header .uk-navbar-toggle').first().click();
		await page.waitForTimeout(700);
		rec('mobil: offcanvas menu se otevře', await visible(page, '#offcanvas-nav.uk-open'));
		const link = page.locator('#offcanvas-nav .offcanvasMainNav a').first();
		rec('mobil: položky menu v offcanvasu', await link.isVisible());
		await page.locator('header .uk-navbar-toggle').first().click();
		await page.waitForTimeout(700);
		rec('mobil: offcanvas se zavře', !(await visible(page, '#offcanvas-nav.uk-open')));
		await page.locator('button.filterOpen').first().click();
		await page.waitForTimeout(700);
		rec('mobil: modál filtru', await visible(page, '#reo-unit-filter-modal.uk-open'));
		await page.keyboard.press('Escape');
		const ow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
		rec('mobil: bez horizontálního přetečení (nabídka)', ow <= 1, `+${ow}px`);
		await ctx.close();
	}
} finally {
	await browser.close();
}
const bad = results.filter(r => !r.ok);
console.log(`\n${results.length - bad.length}/${results.length} v pořádku`);
process.exitCode = bad.length ? 1 : 0;
