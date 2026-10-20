// Byty v zahradách — nasazení projektu do upravené šablony Brave Development.
// Běží po tools/build.mjs: z docs/ (statická kopie šablony s vrstvou úprav) udělá web projektu.
//   - barevnost projektu (přebarvení CSS šablony a vrstvy úprav),
//   - hlavička, menu, patička, kontakty, meta,
//   - stránky: úvod, O projektu, Výběr bytů, 34 detailů bytů, 4 podlaží, Standardy, Lokalita,
//     Aktuality (+ 3 články), Kontakt; ostatní stránky šablony se odstraní.
//   node tools/build.mjs && node tools/project.mjs
import fs from 'node:fs/promises';
import fss from 'node:fs';
import path from 'node:path';
import { parse } from 'node-html-parser';
import * as mdi from '@mdi/js';
import * as D from '../project/data.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'docs');
const BASE = (process.env.BASE ?? '/byty-v-zahradach').replace(/\/$/, '');
const P = D.project, C = D.palette;
const u = p => BASE + p;
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const num = n => String(Math.round(n * 10) / 10).replace('.', ',');
const m2 = n => `${num(n)}&nbsp;m<sup>2</sup>`;
const pl = (n, a, b, c) => n === 1 ? a : n >= 2 && n <= 4 ? b : c;
const unitUrl = x => u(`/${x.slug}/`);
const floorUrl = f => u(`/${f}-np/`);
const IMG = n => u(`/project/img/${n}`);
// Video v úvodu (Magnific: 2 záběry exteriéru + interiér) — když chybí, úvod střídá vizualizace
const HERO_VIDEO = fss.existsSync(path.join(ROOT, 'project', 'media', 'hero-1920.mp4'));
const MEDIA_V = 1; // zvýšit při výměně videa (mezipaměť prohlížeče)
const viz = (i, w = 1440) => IMG(`viz-${i}-${w}.webp`);
const foto = (id, w = 1600) => IMG(`foto-${id}-${w}.webp`);
const plan = no => IMG(`plans/byt-${no}.webp`);
const floorPlan = f => IMG(`plans/podlazi-${f}.webp`);
const dateCz = d => { const [y, m, dd] = d.split('-').map(Number); return `${dd}. ${m}. ${y}`; };
const VIZ_ALT = { 1: 'Vizualizace domu z ulice', 2: 'Vizualizace domu z křižovatky', 3: 'Vizualizace domu při západu slunce', 4: 'Vizualizace vjezdu do garáží', 5: 'Vizualizace zahradní strany domu' };

// vzdálenost od projektu (vzdušnou čarou)
const rad = x => x * Math.PI / 180;
const dist = (a, b = P.geo) => 2 * 6371000 * Math.asin(Math.sqrt(Math.sin(rad(a.lat - b.lat) / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(rad(a.lng - b.lng) / 2) ** 2));
const distTxt = m => m < 950 ? `${Math.round(m / 10) * 10}&nbsp;m` : `${num(m / 1000)}&nbsp;km`;
const POIS = D.pois.map(p => ({ ...p, d: dist(p) })).sort((a, b) => a.d - b.d);

const U = D.units;
const outdoor = x => [x.garden && `zahrada ${m2(x.garden)}`, x.terrace && `terasa ${m2(x.terrace)}`, x.balcony && `balkon ${m2(x.balcony)}`].filter(Boolean);
const outdoorShort = x => x.garden ? 'Zahrada' : x.terrace ? 'Terasa' : x.balcony ? 'Balkon' : '';
const nWith = k => U.filter(x => x[k]).length;
const minMax = arr => [Math.min(...arr), Math.max(...arr)];

// ---------------------------------------------------------------------------- //
// Pomocné bloky
// ---------------------------------------------------------------------------- //
const LEAF = `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 29V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/><path d="M16 17c0-6 3.5-11 11-12-0.5 8-4.5 12-11 12z" fill="currentColor"/><path d="M16 21c0-4.5-2.8-8.4-9-9 0.4 6 3.6 9 9 9z" fill="currentColor" opacity=".55"/></svg>`;
// Logo projektu (C:UsersOmenDocumentsclaudeBD_Řepypodkladylogo) — jako <img>, ať se třídy stylů obou SVG nepřebíjejí
const logo = (light = false) => `<img class="bvzLogoImg" src="${IMG(`logo/${light ? 'logo-light' : 'logo'}.svg`)}" alt="${esc(P.name)}" width="266" height="58">`;
const SYMBOL_PATH = fss.readFileSync(path.join(ROOT, 'project', 'img', 'logo', 'symbol.svg'), 'utf8').match(/<path[^>]* d="([^"]+)"/)[1];

function card(x, { compact = false } = {}) {
	const poly = JSON.stringify(x.poly).replace(/"/g, '&quot;');
	return `<div data-no="${x.no}" data-dispo="${x.dispo}" data-floor="${x.floor}" data-area="${x.area}" data-out="${[x.balcony && 'balkon', x.terrace && 'terasa', x.garden && 'zahrada'].filter(Boolean).join(' ')}">
<div class="flatCard rfFlatCard" data-unit-floor-plan="${floorPlan(x.floor)}" data-unit-floor-polygon="${poly}" data-unit-floor-id="${x.floor}" data-unit-floor-name="${x.floor}. NP" data-unit-floor-state="available">
<div class="top"><label>Volný</label>${x.garden ? '<label class="rfTag">Se zahradou</label>' : x.terrace >= 9 ? '<label class="rfTag">Velká terasa</label>' : ''}</div>
<a href="${unitUrl(x)}" class="picture rfPlanPic"><picture><img loading="lazy" src="${plan(x.no)}" alt="Půdorys bytu ${x.code}" width="800" height="600"></picture></a>
<div class="title"><h3>Byt ${x.code}</h3><p><span>${x.floor}. NP</span><span>${x.dispo}</span><span>${num(x.area)} m<sup>2</sup></span>${outdoorShort(x) ? `<span>${outdoorShort(x)}</span>` : ''}</p>${saveIcons(x)}</div>
<div class="cardFoot"><p class="price rfPriceOnRequest">Cena na vyžádání</p><a href="${unitUrl(x)}" class="button"><span>Detail bytu</span><i class="mdi mdi-chevron-right" aria-hidden="true"></i></a></div>
</div></div>`;
}

// Oblíbené a porovnání (ve statickém náhledu v prohlížeči — localStorage, project.js)
const ICON_SVG = n => u(`/www/Development/images/svg/${n}.svg`);
const saveIcons = x => `<div class="icon"><button type="button" class="favourite" data-rf-fav="${x.no}" aria-pressed="false" aria-label="Přidat byt ${x.code} k oblíbeným" data-uk-tooltip="title: Přidat k oblíbeným; pos: top"><img loading="lazy" src="${ICON_SVG('favourite2')}" alt="" data-uk-svg></button><button type="button" class="comparator" data-rf-cmp="${x.no}" aria-pressed="false" aria-label="Přidat byt ${x.code} do porovnání" data-uk-tooltip="title: Přidat do porovnání; pos: top"><img loading="lazy" src="${ICON_SVG('comparator')}" alt="" data-uk-svg></button></div>`;
const UNITS_JSON = () => `<script type="application/json" id="rf-units">${JSON.stringify(U.map(x => ({ no: x.no, code: x.code, dispo: x.dispo, floor: x.floor, area: x.area, balcony: x.balcony, terrace: x.terrace, garden: x.garden, url: unitUrl(x), plan: plan(x.no) })))}</script>`;

// Interaktivní vizualizace domu (zahradní strana) — pásy podlaží
// Body odečtené z obrázku house-1600x800 (rozšířený zahradní pohled „vizualizace_5 kopie.jpg“,
// výřez v project/make-viz.mjs). Rozhraní podlaží na fasádě: levé křídlo, střední křídlo, roh, pravá strana.
const FLOOR_LINES = [
	[[400, 612], [640, 615], [1060, 640], [1220, 615]],
	[[400, 558], [640, 548], [1060, 522], [1220, 515]],
	[[400, 502], [640, 455], [1060, 402], [1220, 410]],
	[[400, 442], [640, 365], [1060, 288], [1220, 330]],
	[[400, 358], [608, 300], [618, 250], [1050, 78], [1192, 232], [1192, 300], [1220, 330]],
];
// Silueta celého domu (pulzující obrys) — střecha, pravý roh, terén, balkony levého křídla
const HOUSE_OUTLINE = [...FLOOR_LINES[4], [1220, 615], [1060, 640], [640, 615], [400, 612], [400, 580], [372, 580], [372, 470], [400, 470]];
function vizSection({ compact = true, title = true } = {}) {
	const areas = D.floors.map(f => {
		const lo = FLOOR_LINES[f.n - 1], hi = FLOOR_LINES[f.n];
		const pts = [...lo, ...hi.slice().reverse()].flat().join(',');
		return `<area href="${floorUrl(f.n)}" alt="${f.name}" title="${f.name}" coords="${pts}" shape="poly" class="withQTIP" data-part-id="${f.n}" data-part-sold="0">`;
	}).join(' ');
	const tips = D.floors.map((f, i) => {
		const by = ['1+kk', '2+kk', '3+kk'].map(d => [d, f.units.filter(x => x.dispo === d).length]).filter(([, n]) => n);
		return `<div id="o${i}" class="odiv homehover" style="display:none;"><div class="homehover-content"><h2>${f.name}</h2>${by.map(([d, n]) => `<div class="availab"><span class="type">${d}</span><span class="avail"><b>${n}</b> ${pl(n, 'volný', 'volné', 'volných')} z ${n}</span></div>`).join('')}</div></div>`;
	}).join(' ');
	return `<section class="vizualize${compact ? ' vizualize--compactTop' : ''}"><div class="container">${title ? `<div class="top"><p class="subtitle">Interaktivní vizualizace</p><h2>Vyberte si byt <span>přímo v domě</span></h2></div>` : ''}
<div class="maping"><img loading="lazy" src="${IMG('house-1600x800.webp')}" alt="Byty v zahradách – zahradní strana domu" class="map" usemap="#image-map" width="1600" height="800"><map name="image-map">${areas}</map>${tips}<svg class="rfHouseOutline" viewBox="0 0 1600 800" preserveAspectRatio="none" aria-hidden="true"><polygon points="${HOUSE_OUTLINE.map(p => p.join(',')).join(' ')}"/></svg></div>
<p class="link"><a href="${u('/nabidka-nemovitosti/')}" class="button">Zobrazit všechny byty<i class="mdi mdi-chevron-right"></i></a></p></div></section>`;
}

const BENEFITS = [
	['mdiFlowerOutline', 'Zahrady a terasy', `Každý byt má balkon nebo terasu, ${nWith('garden')} byty v přízemí i vlastní zahradu.`],
	['mdiSnowflake', 'Klimatizace v pokojích', 'Vnitřní jednotka klimatizace v každé obytné místnosti je součástí standardu.'],
	['mdiGarageVariant', 'Garáž v domě', `${P.parking.garage} parkovacích míst v podzemní garáži se zakladači a ${P.parking.outdoor} venkovní stání.`],
	['mdiSolarPowerVariant', 'Fotovoltaika na střeše', 'Společná fotovoltaika ohřívá teplou vodu pro celý dům a snižuje náklady na bydlení.'],
];
const benefitsSection = () => `<section class="benefits"><div class="container"><div class="content"><div class="uk-grid-small" data-uk-grid>${BENEFITS.map(([ic, h, t]) => `<div class="uk-width-1-4@m uk-width-1-2"><div class="benefitsBox"><picture><img loading="lazy" src="${IMG(`icons/${ic}.svg`)}" alt=""></picture><h3>${h}</h3><p>${t}</p></div></div>`).join('')}</div></div></div></section>`;

const STEPS = ['Vyberete si byt a domluvíme prohlídku nebo osobní schůzku.', 'Byt pro vás rezervujeme a připravíme smluvní dokumentaci.', 'Podepíšeme smlouvu, platby probíhají podle platebního kalendáře.', 'Po kolaudaci byt předáme a zapíšeme do katastru nemovitostí.'];
const stepsSection = () => `<section class="purchaseSteps"><div class="container"><p class="subtitle">Jak bude nákup probíhat</p><h2>Postup při koupi bytu</h2><div class="steps">${STEPS.map((t, i) => `<div class="step"><span class="num">${i + 1}</span><p>${t}</p></div>`).join('')}</div><p class="rfNote">Platební podmínky a kalendář plateb upřesní developer.</p></div></section>`;

const pageTop = ({ subtitle, h1, text, img, alt, back }) => `<section class="pageTopPanel pageTopPanel--singleMediaSmall"><div class="container"><div class="uk-grid-small" data-uk-grid><div class="uk-width-2-5@m">${back ? `<p class="backLink"><a href="${back[0]}"><img src="${u('/www/Development/images/svg/chevron-down.svg')}" alt="" class="chevronBack" data-uk-svg><span>${back[1]}</span></a></p>` : ''}<div class="text">${subtitle ? `<p class="subtitle">${subtitle}</p>` : ''}<h1>${h1}</h1><div class="editableBlock">${text}</div></div></div><div class="uk-width-3-5@m" data-image-brick><picture><img loading="lazy" src="${img}" alt="${esc(alt)}"></picture></div></div></div></section>`;

const newsCard = (n, cls = 'newsExtractCard') => `<a href="${u(`/aktuality/${n.slug}/`)}" class="${cls}"><picture><img loading="lazy" src="${foto(n.photo, 800)}" alt="${esc(n.title)}"></picture><h3>${esc(n.title)}</h3><p class="${cls === 'pageConBox' ? 'pageConBox__distance' : 'newsExtractCard__meta'}"><i class="mdi mdi-calendar-blank-outline" aria-hidden="true"></i> ${dateCz(n.date)} <span aria-hidden="true">·</span> <i class="mdi mdi-tag-outline" aria-hidden="true"></i> Výstavba</p><p>${esc(n.perex)}</p></a>`;

// ---------------------------------------------------------------------------- //
// Společné části stránek
// ---------------------------------------------------------------------------- //
const NAV = [['/o-projektu/', 'O projektu'], ['/standardy/', 'Standardy'], ['/lokalita/', 'Lokalita'], ['/aktuality/', 'Aktuality'], ['/kontakty/', 'Kontakt']];
const DESC = `${P.name} – nový bytový dům v ulici ${P.street}, ${P.place}. ${P.units} bytů 1+kk až 3+kk s balkonem, terasou nebo zahradou, klimatizace a garáž v domě.`;

function chrome(root, { title, desc = DESC, current }) {
	const head = root.querySelector('head');
	root.querySelector('title').set_content(esc(title));
	const meta = (n, v) => { const m = head.querySelector(`meta[name="${n}"]`); if (m) m.setAttribute('content', v); };
	meta('description', desc); meta('author', `${P.name} & IMPnet`); meta('copyright', P.developer.name); meta('application-name', P.name);
	meta('theme-color', C.green); meta('msapplication-TileColor', C.green);
	head.querySelectorAll('meta[name="keywords"], link[rel="icon"], meta[name^="msapplication-square"], meta[name="msapplication-TileImage"], link[rel="manifest"], link[rel="apple-touch-icon"]').forEach(n => n.remove());
	head.insertAdjacentHTML('beforeend', `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400&family=Urbanist:wght@400;500;600;700&display=swap">`);
	head.insertAdjacentHTML('beforeend', `<link rel="icon" href="${IMG('favicon.svg')}" type="image/svg+xml"><link rel="stylesheet" href="${u('/project/project.css')}">`);
	root.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]').forEach(n => n.remove());
	head.insertAdjacentHTML('beforeend', `<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:image" content="${viz(1)}"><meta property="og:type" content="website">`);
	root.querySelectorAll('script[type="application/ld+json"]').forEach(n => n.remove());
	head.insertAdjacentHTML('beforeend', `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'ApartmentComplex', name: P.name, description: DESC, numberOfAccommodationUnits: P.units, address: { '@type': 'PostalAddress', streetAddress: P.street, postalCode: P.zip, addressLocality: 'Praha – Řepy', addressCountry: 'CZ' }, geo: { '@type': 'GeoCoordinates', latitude: P.geo.lat, longitude: P.geo.lng } })}</script>`);

	root.querySelectorAll('a.logo').forEach(a => { a.setAttribute('title', P.name); a.set_content(logo(!!a.closest('section.footerMain'))); });
	root.querySelectorAll('.menuTop .languageSwitcher, .uk-offcanvas-bar .top .languageSwitcher').forEach(n => n.remove());
	root.querySelectorAll('.menuLink.favorite .number, .menuLink.comparison .number').forEach(n => n.set_content('0'));
	const li = ([href, t]) => `<li${current === href ? ' class="uk-active"' : ''}><a href="${u(href)}"><span>${t}</span></a></li>`;
	const navMain = root.querySelector('section.topBar .uk-navbar-nav');
	if (navMain) navMain.set_content(NAV.map(li).join(''));
	root.querySelectorAll('a.button-main').forEach(a => { if (a.closest('section.topBar')) a.set_content('Výběr bytů<i class="mdi mdi-chevron-right"></i>'); });
	const oc = root.querySelector('.offcanvasMainNav');
	if (oc) oc.set_content([['/nabidka-nemovitosti/', 'Výběr bytů'], ...NAV].map(li).join(''));

	const fm = root.querySelector('section.footerMain');
	if (fm) {
		fm.querySelector('.officeAddress')?.set_content(`<p class="officeAddress__label">Developer</p><p class="address">${esc(P.developer.name)}<br>${esc(P.developer.address)}<br>IČO ${P.developer.ico}</p>`);
		fm.querySelector('.socialPack')?.remove();
		fm.querySelector('.footerNav ul.menu')?.set_content([['/nabidka-nemovitosti/', 'Výběr bytů'], ...NAV].map(([h, t]) => `<li><a href="${u(h)}" title="${t}">${t}</a></li>`).join(''));
		fm.querySelector('.footerTools')?.set_content(`<h3>Projekt</h3><ul><li>${esc(P.street)}</li><li>${P.zip} ${esc(P.place)}</li><li>${P.units} bytů · ${P.floors} podlaží</li></ul>`);
		fm.querySelector('.footerContact')?.set_content(`<h3>Kontakt</h3><a href="${P.contact.phoneHref}" class="contactLink"><span class="ico"><img loading="lazy" src="${u('/www/Development/images/svg/phone.svg')}" data-uk-svg alt=""></span><span>${P.contact.phone}</span></a><a href="mailto:${P.contact.email}" class="contactLink"><span class="ico"><img loading="lazy" src="${u('/www/Development/images/svg/email.svg')}" data-uk-svg alt=""></span><span>${P.contact.email}</span></a><a href="${u('/nabidka-nemovitosti/')}" class="button footerCta" title="Výběr bytů"><span>Výběr bytů</span></a>`);
	}
	const copy = root.querySelector('section.footerEnd .copy');
	if (copy) copy.set_content(`Copyright &copy; 2026 ${esc(P.name)} · ${esc(P.developer.name)} | by <a href="https://www.impnet.cz/" target="_blank" rel="noopener" title="impnet"><picture><img loading="lazy" src="${u('/www/Development/images/impnet.png')}" alt="IMPnet"></picture></a>`);
	const w = root.querySelector('.widget');
	if (w) w.set_content(`<a href="mailto:${P.contact.email}"><span><i class="mdi mdi-email"></i><span>${P.contact.email}</span></span></a><a href="${P.contact.phoneHref}" class="phone"><span><i class="mdi mdi-phone"></i><span>${P.contact.phone}</span></span></a>`);
	// pozadí formulářů (fotka domu Hálkova) → zahradní vizualizace projektu
	root.querySelectorAll('img[src*="formBg.jpg"]').forEach(i => i.setAttribute('src', viz(5)));
	root.querySelector('body').insertAdjacentHTML('beforeend', `<script src="${u('/project/project.js')}" defer></script>`);
}

const between = (root, keepFirst, keepLast) => {
	// odstraní sekce mezi hlavičkou a patičkou (kromě uvedených), vrací uzel, za který vkládat
	const secs = root.querySelectorAll('body section').filter(s => !s.parentNode.closest('section'));
	const top = secs.find(s => s.classList.contains('topBar'));
	const foot = secs.find(s => s.classList.contains('footerMain'));
	return { top, foot, secs: secs.filter(s => s !== top && s !== foot && !s.classList.contains('footerEnd')) };
};
function setMain(root, html) {
	const main = root.querySelector('main');
	if (main) { main.set_content(html); return; }
	const { secs, foot } = between(root);
	secs.forEach(s => s.remove());
	(foot.closest('footer') || foot).insertAdjacentHTML('beforebegin', html);
}

// ---------------------------------------------------------------------------- //
// Stránky
// ---------------------------------------------------------------------------- //
function searchForm() {
	const opt = (v, t) => `<option value="${v}">${t}</option>`;
	const item = (label, name, opts) => `<label class="panoramaHero__quickSearchItem is-enhanced"><span>${label}</span><select name="${name}" multiple>${opts}</select><button type="button" class="panoramaHero__quickSearchTrigger" aria-expanded="false">Vše</button></label>`;
	return `<form class="panoramaHero__quickSearch" action="${u('/nabidka-nemovitosti/')}" method="get" aria-label="Rychlé vyhledávání bytů">
${item('Dispozice', 'dispozice', ['1+kk', '2+kk', '3+kk'].map(d => opt(d, d)).join(''))}
${item('Podlaží', 'patro', [1, 2, 3, 4].map(f => opt(f, `${f}. NP`)).join(''))}
${item('Plocha', 'plocha', [['0-35', 'do 35 m²'], ['35-45', '35–45 m²'], ['45-55', '45–55 m²'], ['55-999', 'nad 55 m²']].map(([v, t]) => opt(v, t)).join(''))}
${item('Venku', 'venku', [['balkon', 'Balkon'], ['terasa', 'Terasa'], ['zahrada', 'Zahrada']].map(([v, t]) => opt(v, t)).join(''))}
<button type="submit" class="panoramaHero__quickSearchSubmit" aria-label="Hledat byty"><i class="mdi mdi-magnify" aria-hidden="true"></i><span class="uk-hidden">Hledat</span></button></form>`;
}

function home(root) {
	chrome(root, { title: `${P.name} | Nové byty v Praze – Řepy`, current: '/' });
	const [a1, a2] = minMax(U.map(x => x.area));
	const slides = D.gallery.viz.slice(0, 4).map((i, k) => `<img class="rfSlide${k === 0 ? ' is-active' : ''}" src="${viz(i, 2400)}" srcset="${viz(i, 800)} 800w, ${viz(i, 1440)} 1440w, ${viz(i, 2400)} 2400w" sizes="100vw" alt="${VIZ_ALT[i]}"${k ? ' loading="lazy"' : ''}>`).join('');
	const hero = `<section class="panoramaHero rfVideoHero rfSlideHero" aria-label="Úvod">
${HERO_VIDEO ? `<video class="rfVideoHero__video" muted playsinline loop autoplay preload="auto" poster="${u('/project/media/hero-poster.jpg')}?v=${MEDIA_V}" aria-hidden="true"><source src="${u('/project/media/hero-1080.mp4')}?v=${MEDIA_V}" type="video/mp4" media="(max-width: 959px)"><source src="${u('/project/media/hero-1920.mp4')}?v=${MEDIA_V}" type="video/mp4"></video>` : `<div class="rfSlides" data-rf-slides>${slides}</div>`}<div class="panoramaHero__shade rfVideoHero__shade"></div>
${searchForm()}
<div class="panoramaHero__copy container"><div class="panoramaHero__copyInner"><p class="subtitle">${esc(P.place)} · ${P.units} bytů · 1+kk až 3+kk</p><h1>${esc(P.name)}</h1><div class="panoramaHero__lead">Nový bytový dům v ulici ${esc(P.street)}. Každý byt s balkonem, terasou nebo zahradou, klimatizace v pokojích a garáž přímo v domě.</div><p class="panoramaHero__cta"><a href="${u('/nabidka-nemovitosti/')}" class="button">Vybrat byt<i class="mdi mdi-chevron-right" aria-hidden="true"></i></a></p></div></div>
${HERO_VIDEO ? '' : `<div class="rfSlideDots" role="tablist" aria-label="Vizualizace">${D.gallery.viz.slice(0, 4).map((i, k) => `<button type="button" class="${k === 0 ? 'is-active' : ''}" aria-label="${VIZ_ALT[i]}"></button>`).join('')}</div>`}
</section>`;

	const near = ['Doprava', 'Obchody', 'Školy', 'Zdraví', 'Volný čas'].map(c => POIS.find(p => p.cat === c));
	const loc = `<section class="homepageInteractive"><div class="container"><div class="uk-grid-collapse" data-uk-grid><div class="uk-width-1-2@m"><div class="content"><div class="text">
<p class="subtitle">Lokalita</p><h2>Klidná část Řep <span>a vše potřebné blízko</span></h2>
<div class="editableBlock"><p>Dům stojí v ulici ${esc(P.street)} v pražských Řepách. Tramvaj, obchody, školy i sportoviště máte v docházkové vzdálenosti.</p>
<ul>${near.map(p => `<li class="rfLocItem"><i class="mdi ${p.icon} rfLocIcon" aria-hidden="true"></i>${esc(p.name)} · ${distTxt(p.d)}</li>`).join('')}</ul></div>
<p class="moreLink"><a href="${u('/lokalita/')}" class="button second">Více o lokalitě<i class="mdi mdi-chevron-right"></i></a></p>
</div></div></div><div class="uk-width-1-2@m"><div class="picture mapWrapper">${mapDiv('home', 'uk-width-1-1 uk-height-medium')}</div></div></div></div></section>`;

	const gal = [...D.gallery.viz.map(i => [viz(i, 2400), viz(i, 800), VIZ_ALT[i]]), [foto(D.gallery.photos[0]), foto(D.gallery.photos[0], 800), 'Stavba v září 2026']];
	const gallery = `<section class="homepageGallery"><div class="container"><div class="content"><div class="homepageGallery__layout uk-grid-large" data-uk-grid><div class="galleryColumn uk-width-1-1">
<div class="galleryColumn__heading"><p class="subtitle">Vizualizace projektu</p><h2>Prohlédněte si nové bydlení</h2></div>
<div class="galleryGrid uk-grid-collapse" data-uk-grid data-uk-lightbox="toggle: a.gallBox">${gal.map(([big, small, alt]) => `<div class="uk-width-1-3@s uk-width-1-2"><a href="${big}" class="gallBox" aria-label="${esc(alt)}" data-caption="${esc(alt)}"><picture><img loading="lazy" src="${small}" alt="${esc(alt)}"></picture></a></div>`).join('')}</div>
</div></div></div></div></section>`;

	const dispos = ['1+kk', '2+kk', '3+kk'];
	const showcase = `<section class="dispositionShowcase"><div class="container"><div class="top"><p class="subtitle">Rychlý přehled</p><h2>Vyberte si podle dispozice</h2></div><div class="showcase" data-disposition-showcase>
<div class="tabs" role="tablist" aria-label="Vyberte si podle dispozice">${dispos.map((d, i) => `<button type="button" class="tab${i ? '' : ' active'}" id="disposition-tab-${i}" role="tab" data-disposition-tab="${i}" aria-selected="${!i}" aria-controls="disposition-panel-${i}" tabindex="${i ? -1 : 0}"><span class="tab__name">${d}</span><span class="tab__count">${U.filter(x => x.dispo === d).length}</span></button>`).join('')}</div>
<div class="panels">${dispos.map((d, i) => {
		const list = U.filter(x => x.dispo === d), [lo, hi] = minMax(list.map(x => x.area));
		const big = list.filter(x => x.garden || x.terrace);
		return `<div class="panel${i ? '' : ' active'}" id="disposition-panel-${i}" role="tabpanel" data-disposition-panel="${i}" aria-labelledby="disposition-tab-${i}"><div class="buildingList">
<article class="building"><div class="building__head"><h4>Byty ${d}</h4></div><div class="stats"><p class="count"><strong>${list.length}</strong> ${pl(list.length, 'volný byt', 'volné byty', 'volných bytů')}</p><p class="price"><span class="label">Cena</span><strong>na vyžádání</strong></p><p class="area"><span class="label">Plocha</span><strong>${num(lo)}–${num(hi)} m<sup>2</sup></strong></p></div></article>
<article class="building"><div class="building__head"><h4>S terasou nebo zahradou</h4></div><div class="stats"><p class="count"><strong>${big.length}</strong> ${pl(big.length, 'byt', 'byty', 'bytů')}</p><p class="price"><span class="label">Podlaží</span><strong>${[...new Set(list.map(x => x.floor))].sort().map(f => f + '.').join(', ')} NP</strong></p><p class="area"><span class="label">Venku až</span><strong>${num(Math.max(...list.map(x => x.garden || x.terrace || x.balcony)))} m<sup>2</sup></strong></p></div></article>
</div><p class="panel__link"><a href="${u('/nabidka-nemovitosti/')}?dispozice=${encodeURIComponent(d)}" class="button">Zobrazit byty ${d}<i class="mdi mdi-chevron-right"></i></a></p></div>`;
	}).join('')}</div></div></div></section>`;

	const news = `<section class="newsExtract"><div class="container"><div class="content"><div class="top"><div class="text"><p class="subtitle">Ze stavby</p><h2>Jak postupuje <span>výstavba</span></h2></div></div>
<div class="newsExtract__grid rfNewsGrid">${D.news.map(n => `<div>${newsCard(n)}</div>`).join('')}</div>
<p class="newsExtract__more"><a href="${u('/aktuality/')}" class="button">Všechny aktuality<i class="mdi mdi-chevron-right"></i></a></p></div></div></section>`;

	setMain(root, hero + loc + vizSection() + `<div class="homepageGalleryDispositionGrid"><div class="homepageGalleryDispositionGrid__item">${gallery}</div><div class="homepageGalleryDispositionGrid__item">${showcase}</div></div>` + news);
	root.querySelector('body').setAttribute('class', 'frontend-homepage');
}

function oProjektu(root) {
	chrome(root, { title: `O projektu | ${P.name}`, current: '/o-projektu/' });
	const [a1, a2] = minMax(U.map(x => x.area));
	const gardens = U.filter(x => x.garden), [g1, g2] = minMax(gardens.map(x => x.garden));
	const terr4 = U.filter(x => x.floor === 4 && x.terrace);
	const html = pageTop({
		subtitle: `Bytový dům · ${esc(P.place)}`, h1: 'O projektu', img: viz(1), alt: VIZ_ALT[1],
		text: `<p>${esc(P.name)} je nový bytový dům v ulici ${esc(P.street)} v pražských Řepách. Ve čtyřech nadzemních podlažích nabízí ${P.units} bytů od 1+kk do 3+kk o ploše ${num(a1)} až ${num(a2)} m². V suterénu je podzemní garáž s parkovacími zakladači a sklepy.</p>`,
	}) + `<section class="contentPage contentPage--textOnlySmall"><div class="container"><div class="uk-grid-small" data-uk-grid><div class="uk-flex-first uk-width-1-2@m"><picture><img src="${viz(5)}" alt="${VIZ_ALT[5]}"></picture></div><div class="uk-flex-last uk-width-1-2@m fx fxa"><div class="text"><p class="subtitle">Bydlení v zeleni</p><h2>Každý byt má kousek venku</h2>
<div class="editableBlock"><p>Ke každému bytu patří balkon nebo terasa. ${gardens.length} byty v přízemí mají vlastní zahradu o velikosti ${num(g1)} až ${num(g2)} m² a v nejvyšším podlaží jsou ${terr4.length === 5 ? 'pět bytů' : terr4.length + ' byty'} s terasou až ${num(Math.max(...terr4.map(x => x.terrace)))} m². Terasy v přízemí a v nejvyšším podlaží mají venkovní zásuvku, vývod pro světlo i vodu.</p></div></div></div></div></div></section>
<section class="contentPage"><div class="container"><div class="uk-grid-small" data-uk-grid><div class="uk-flex-last uk-width-1-2@m"><div class="picture"><div class="uk-grid-collapse" data-uk-grid><div class="uk-width-1-2@s"><picture><img src="${viz(4, 800)}" alt="${VIZ_ALT[4]}"></picture><picture><img src="${foto('20260811_162734', 800)}" alt="Stavba v srpnu 2026"></picture></div><div class="uk-width-1-2@s"><picture><img src="${viz(2, 800)}" alt="${VIZ_ALT[2]}"></picture></div></div></div></div>
<div class="uk-flex-first uk-width-1-2@m fx fxa"><div class="text"><p class="subtitle">Standard bydlení</p><h2>Klimatizace v každém pokoji</h2><div class="editableBlock"><p>Okna s trojsklem a venkovními žaluziemi, vinylové podlahy, klimatizace ve všech obytných místnostech a příprava pro kuchyňskou linku. Klienti si mohou vybrat ${esc(P.clientChanges)}.</p><p><a class="button" href="${u('/standardy/')}">Standardy bytů <span class="mdi mdi-chevron-right"></span></a></p></div></div></div></div></div></section>`
		+ stepsSection() + vizSection({ compact: false }) + benefitsSection();
	setMain(root, html);
}

function standardy(root) {
	chrome(root, { title: `Standardy | ${P.name}`, current: '/standardy/' });
	const html = pageTop({
		subtitle: 'Standard 10/2026', h1: 'Standardy', img: viz(2), alt: VIZ_ALT[2],
		text: `<p>Byty předáváme s klimatizací ve všech obytných místnostech, okny s trojsklem a venkovními žaluziemi. Klienti si mohou vybrat ${esc(P.clientChanges)}.</p>`,
	}) + `<section class="rfStandards"><div class="container"><div class="top"><p class="subtitle">Co je v ceně bytu</p><h2>Vybavení bytů a domu</h2></div><div class="rfStandards__grid">${D.standards.map(s => `<article class="rfStandard"><i class="mdi ${s.icon}" aria-hidden="true"></i><h3>${s.title}</h3><p>${s.text}</p></article>`).join('')}</div>
<p class="rfNote">Prodávající si vyhrazuje právo na změnu použitých materiálů při zachování celkového standardu. Plné znění standardu 10/2026 vám rádi pošleme.</p></div></section>
<section class="contentPage contentPage--textOnlySmall"><div class="container"><div class="uk-grid-small" data-uk-grid><div class="uk-flex-first uk-width-1-2@m"><picture><img src="${foto('20260811_162635')}" alt="Osazená okna, srpen 2026"></picture></div><div class="uk-flex-last uk-width-1-2@m fx fxa"><div class="text"><p class="subtitle">Klientské změny</p><h2>Byt si přizpůsobíte</h2><div class="editableBlock"><p>V průběhu výstavby si můžete vybrat ${esc(P.clientChanges)}. Termíny a postup klientských změn s vámi domluvíme individuálně.</p><p><a class="button" href="${u('/kontakty/')}">Domluvit konzultaci <span class="mdi mdi-chevron-right"></span></a></p></div></div></div></div></div></section>`
		+ vizSection({ compact: false }) + benefitsSection();
	setMain(root, html);
}

function mapDiv(id, cls = 'uk-width-1-1 uk-height-medium') {
	return `<div data-map-id="bvz-${id}" data-map-options-endpoint="${u(`/project/map/${id}-options.json`)}" data-map-markers-endpoint="${u(`/project/map/${id}-markers.json`)}" data-map-lines-endpoint="${u('/project/map/lines.json')}" class="${cls}"></div><script> $(window).on('load', function(){ new OsmMapLoader("bvz-${id}", '', { rootMargin: '-100px', threshold: 0 }); }); </script>`;
}
const CATS = [...new Set(D.pois.map(p => p.cat))];
function lokalita(root) {
	chrome(root, { title: `Lokalita | ${P.name}`, current: '/lokalita/' });
	const html = pageTop({
		subtitle: esc(P.place), h1: 'Lokalita', img: viz(3), alt: VIZ_ALT[3],
		text: `<p>Ulice ${esc(P.street)} leží v klidné části pražských Řep. Nejbližší tramvajová zastávka ${esc(POIS.find(p => p.cat === 'Doprava').name.replace('Tramvajová zastávka ', ''))} je vzdušnou čarou ${distTxt(POIS.find(p => p.cat === 'Doprava').d)} od domu, supermarket ${distTxt(POIS.find(p => p.cat === 'Obchody').d)}.</p>`,
	}) + `<section class="mapContent"><div class="container"><div class="mapWrapper">${mapDiv('lokalita')}
<div class="legend" data-map-legend>${CATS.map((c, i) => `<p><input type="checkbox" id="check${i + 1}" name="check${i + 1}" value="${c}" checked><label for="check${i + 1}"><picture><img src="${IMG(`pins/cat-${i}.svg`)}" alt=""></picture>${c}</label></p>`).join('')}</div></div></div></section>
<section class="rfPois"><div class="container"><div class="top"><p class="subtitle">Co je v okolí</p><h2>Vzdálenosti od domu</h2></div><div class="rfPois__grid">${CATS.map(c => `<div class="rfPois__col"><h3>${c}</h3><ul>${POIS.filter(p => p.cat === c).map(p => `<li><i class="mdi ${p.icon}" aria-hidden="true"></i><span>${esc(p.name)}${p.addr ? `<small>${esc(p.addr)}</small>` : ''}</span><b>${distTxt(p.d)}</b></li>`).join('')}</ul></div>`).join('')}</div>
<p class="rfNote">Vzdálenosti vzdušnou čarou podle OpenStreetMap. Body v mapě doplní nebo upraví developer.</p></div></section>`
		+ vizSection({ compact: false }) + benefitsSection();
	setMain(root, html);
}

function aktuality(root) {
	chrome(root, { title: `Aktuality | ${P.name}`, current: '/aktuality/' });
	const html = pageTop({ subtitle: 'Ze stavby', h1: 'Aktuality', img: foto(D.news[0].photo), alt: D.news[0].title, text: '<p>Jak postupuje výstavba domu v ulici Engelmüllerova. Fotografie pořizujeme přímo na stavbě.</p>' })
		+ `<section class="contentSubPage"><div class="container"><div class="content"><div class="uk-grid-small" data-uk-grid>${D.news.map(n => `<div class="uk-width-1-3@m uk-width-1-2@s">${newsCard(n, 'pageConBox')}</div>`).join('')}</div></div></div></section>`
		+ vizSection({ compact: false }) + benefitsSection();
	setMain(root, html);
}

const ARTICLE = {
	'hruba-stavba-v-plnem-proudu': ['20260901_172709', '20260811_162514'],
	'betonaz-a-balkony': ['20260826_081048', '20260811_162901'],
	'okna-jsou-osazena': ['20260811_162635', '20260811_162734'],
};
function clanek(root, n) {
	chrome(root, { title: `${n.title} | ${P.name}`, desc: n.perex, current: '/aktuality/' });
	const others = D.news.filter(x => x !== n);
	const html = `<section class="pageTopPanel pageTopPanel--singleMediaSmall"><div class="container"><div class="uk-grid-small" data-uk-grid><div class="uk-width-2-5@m"><p class="backLink"><a href="${u('/aktuality/')}"><img src="${u('/www/Development/images/svg/chevron-down.svg')}" alt="" class="chevronBack" data-uk-svg><span>Zpět na aktuality</span></a></p><div class="text"><p class="subtitle newsDate"><i class="mdi mdi-calendar-blank-outline" aria-hidden="true"></i> <span>${dateCz(n.date)}</span></p><h1>${esc(n.title)}</h1><div class="editableBlock"><p>${esc(n.perex)}</p></div></div></div><div class="uk-width-3-5@m" data-image-brick><picture><img loading="lazy" src="${foto(n.photo)}" alt="${esc(n.title)}"></picture></div></div></div></section>
<section class="blogDetail"><div class="container"><div class="text"><p>${esc(n.perex)}</p><div class="rfArticleGallery" data-uk-lightbox>${ARTICLE[n.slug].map(id => `<a href="${foto(id)}" data-caption="${esc(n.title)}"><img loading="lazy" src="${foto(id, 800)}" alt="Fotografie ze stavby"></a>`).join('')}</div><p class="rfNote">Text článku připravíme s developerem podle aktuálního stavu výstavby.</p></div></div></section>
<section class="newsList moreNews"><div class="container"><div class="top"><h2>Další aktuality</h2></div><div class="uk-grid-small" data-uk-grid>${others.map(x => `<div class="uk-width-1-2@s">${newsCard(x, 'pageConBox')}</div>`).join('')}</div></div></section>`
		+ benefitsSection();
	setMain(root, html);
}

function kontakty(root) {
	chrome(root, { title: `Kontakt | ${P.name}`, current: '/kontakty/' });
	const tc = root.querySelector('section.topContact');
	const t = tc.querySelector('.text');
	t.querySelector('h1').set_content('Chcete vědět víc?');
	t.querySelector('p.subtitle').set_content('Rádi vám projekt představíme a domluvíme prohlídku.');
	t.querySelector('.entityBox picture')?.replaceWith(`<span class="rfAvatar" aria-hidden="true">${P.contact.name.split(' ').map(s => s[0]).join('')}</span>`);
	const c = t.querySelector('.entityBox .content');
	c.set_content(`<h3>${esc(P.contact.name)}</h3><p class="subtitle">${esc(P.contact.role)}</p><p><a href="${P.contact.phoneHref}"><picture><img src="${u('/www/Development/images/svg/mobileContact.svg')}" alt="" data-uk-svg></picture><span>${P.contact.phone}</span></a></p><p><a href="mailto:${P.contact.email}"><picture><img src="${u('/www/Development/images/svg/mailContact.svg')}" alt="" data-uk-svg></picture><span>${P.contact.email}</span></a></p>`);
	t.querySelector('.bottom').set_content(`<strong>${esc(P.developer.name)}</strong><span>${esc(P.developer.address)}</span><span>IČO ${P.developer.ico}</span>`);
	const mw = tc.querySelector('.mapWrapper');
	mw.set_content(mapDiv('kontakty'));
	// obrázek vedle formuláře (v šabloně fotka jiného domu) → vizualizace projektu
	const fcol = root.querySelectorAll('section.form .content > div > div')[1];
	if (fcol) fcol.set_content(`<picture class="rfFormViz"><img loading="lazy" src="${viz(1)}" alt="${VIZ_ALT[1]}"></picture>`);
}

function unitPage(root, x) {
	chrome(root, { title: `Byt ${x.code} · ${x.dispo} · ${num(x.area)} m² | ${P.name}`, desc: `Byt ${x.code} ${x.dispo} o ploše ${num(x.area)} m² v ${x.floor}. NP domu ${P.name}, ${P.place}. ${outdoor(x).join(', ').replace(/&nbsp;m<sup>2<\/sup>/g, ' m²')}.`, current: '/nabidka-nemovitosti/' });
	const top = root.querySelector('section.pageTopPanel');
	const back = top.querySelector('.backLink a span'); if (back) back.set_content('Výběr bytů');
	top.querySelector('h1').set_content(`Byt ${x.code}`);
	top.querySelector('p.atr:not(.atr--features)').set_content(`<span><span><a href="${floorUrl(x.floor)}">${x.floor}. NP</a></span></span><span><span><a href="${u('/nabidka-nemovitosti/')}?dispozice=${encodeURIComponent(x.dispo)}">${x.dispo}</a></span></span><span><span>${m2(x.area)}</span></span>`);
	const feat = outdoor(x).map(t => `<span><span>${t[0].toUpperCase() + t.slice(1)}</span></span>`);
	feat.push('<span><span>Klimatizace</span></span>');
	top.querySelector('p.atr--features').set_content(feat.join(''));
	top.querySelector('form.catalogSheet')?.remove();
	const bp = top.querySelector('.buyPanel');
	bp.querySelector('.buyPanel__price').set_content('Cena na vyžádání');
	bp.querySelector('.buyPanel__perMeter')?.remove();
	bp.querySelector('.buyPanel__monthly')?.remove();
	bp.querySelector('.buyPanel__addons').set_content(`<li><span class="buyPanel__addonName">Parkovací stání v garáži</span><span class="buyPanel__addonPrice">za příplatek</span></li>`);
	bp.querySelector('.buyPanel__addonNote').set_content(P.parking.note);
	const saves = root.querySelector('.unitSaves');
	if (saves) saves.set_content(`<button type="button" class="unitSave favourite" data-rf-fav="${x.no}" aria-pressed="false"><img loading="lazy" src="${ICON_SVG('favourite2')}" alt="" data-uk-svg><span>Přidat k oblíbeným</span></button><button type="button" class="unitSave comparator" data-rf-cmp="${x.no}" aria-pressed="false"><img loading="lazy" src="${ICON_SVG('comparator')}" alt="" data-uk-svg><span>Přidat do porovnání</span></button>`);
	// karty bytu v modálních oknech (hlídač, rezervace)
	top.querySelectorAll('.flatCard').forEach(fc => {
		fc.querySelector('.picture')?.set_content(`<picture><img loading="lazy" src="${plan(x.no)}" alt="Půdorys bytu ${x.code}"></picture>`);
		fc.querySelector('.picture')?.setAttribute('href', unitUrl(x));
		fc.querySelector('.title')?.set_content(`<h3>Byt ${x.code}</h3><p><span>${x.floor}. NP</span><span>${x.dispo}</span><span>${num(x.area)} m<sup>2</sup></span></p>`);
		fc.querySelector('p.price')?.set_content('Cena na vyžádání');
	});
	top.querySelectorAll('form').forEach(f => f.setAttribute('action', unitUrl(x)));
	const hg = top.querySelector('.heroGallery');
	const heroViz = x.floor === 1 || x.garden ? 5 : 1;
	hg.set_content(`<a class="mainPhoto" href="${viz(heroViz, 2400)}" data-caption="${VIZ_ALT[heroViz]}"><picture><img src="${viz(heroViz, 1440)}" alt="${VIZ_ALT[heroViz]}" width="1113" height="660"></picture></a><div class="thumbs">${[[IMG(`plans/byt-${x.no}.png`), plan(x.no), `Půdorys bytu ${x.code}`], [viz(heroViz === 5 ? 1 : 5, 2400), viz(heroViz === 5 ? 1 : 5, 800), VIZ_ALT[heroViz === 5 ? 1 : 5]], [IMG(`plans/podlazi-${x.floor}.png`), floorPlan(x.floor), `Půdorys ${x.floor}. NP`]].map(([b, s, a]) => `<a href="${b}" data-caption="${esc(a)}"><picture><img loading="lazy" src="${s}" alt="${esc(a)}"></picture></a>`).join('')}</div>`);

	const pts = x.poly.map(p => `${p.x},${p.y}`).join(' ');
	const rows = [['Byt', x.area], ['Balkon', x.balcony], ['Terasa', x.terrace], ['Zahrada', x.garden]].filter(([, v]) => v);
	const detail = `<section class="unitDetail"><div class="container"><div class="content"><div class="uk-grid-small" data-uk-grid><div class="uk-width-1-1 uk-width-3-5@m"><div class="planBox" data-uk-lightbox>
<a href="${IMG(`plans/byt-${x.no}.png`)}" data-caption="Půdorys bytu ${x.code}" aria-label="Půdorys bytu ${x.code}"><span class="planBox__unitInner"><picture><img loading="lazy" src="${plan(x.no)}" alt="Půdorys bytu ${x.code}" width="800" height="600"></picture></span></a>
<p class="planBox__hint">Kliknutím zvětšíte půdorys</p>
<a class="floorPosition is-available" href="${IMG(`plans/podlazi-${x.floor}.png`)}" data-caption="${x.floor}. NP" aria-label="Poloha bytu v ${x.floor}. NP"><span class="floorPosition__label">Poloha v podlaží</span><span class="floorPosition__inner"><img loading="lazy" src="${floorPlan(x.floor)}" alt="${x.floor}. NP"><svg class="floorPosition__polygon" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polygon points="${pts}"></polygon></svg></span></a>
</div></div><div class="uk-width-1-1 uk-width-2-5@m"><div class="unitRooms"><h2 class="unitRooms__title">Přehled ploch</h2><table class="unitRooms__table"><thead><tr><th scope="col">Část</th><th scope="col">Plocha</th></tr></thead><tbody>${rows.map(([k, v]) => `<tr><th scope="row">${k}</th><td>${m2(v)}</td></tr>`).join('')}</tbody>
<tbody class="unitRooms__sums"><tr><th scope="row">Dispozice</th><td>${x.dispo}</td></tr><tr><th scope="row">Podlaží</th><td>${x.floor}. NP</td></tr></tbody></table>
<p class="unitRooms__note">Plochy podle přehledu bytů developera. Rozpis místností doplníme z bytové karty.</p></div></div></div></div></div></section>`;

	const reasons = [];
	if (x.garden) reasons.push([`Zahrada ${m2(x.garden)}`, `Vlastní zahradu má jen ${nWith('garden')} z ${U.length} bytů`]);
	if (x.terrace) reasons.push([`Terasa ${m2(x.terrace)}`, `S terasou je ${nWith('terrace')} z ${U.length} bytů`]);
	if (x.floor === 4) reasons.push(['Nejvyšší podlaží', 'Nad vámi už nikdo nebydlí']);
	if (x.floor === 1 && !x.garden) reasons.push(['Přízemí', 'Rychle venku, bez čekání na výtah']);
	if (x.balcony && reasons.length < 3) reasons.push([`Balkon ${m2(x.balcony)}`, 'Venkovní prostor k bytu']);
	if (reasons.length < 3) reasons.push(['Klimatizace', 'V každé obytné místnosti']);
	if (reasons.length < 3) reasons.push(['Garáž v domě', 'Parkovací zakladač v suterénu, za příplatek']);
	const why = `<section class="unitReasons"><div class="container"><div class="top"><p class="subtitle">Proč právě tento byt</p><h2>Co má tenhle byt navíc</h2></div><ul class="reasons">${reasons.slice(0, 3).map(([v, n]) => `<li class="reason"><p class="reason__value">${v}</p><p class="reason__note">${n}</p></li>`).join('')}</ul></div></section>`;

	const bo = root.querySelector('section.brokerOffer');
	bo.querySelector('picture img')?.setAttribute('src', viz(5));
	bo.querySelector('form')?.setAttribute('action', unitUrl(x));
	const box = bo.querySelector('.colleagueBox');
	box.querySelector('.companyLogo').set_content(logo());
	box.querySelector('.colleagueBoxTop').set_content(`<div class="uk-grid-small" data-uk-grid><div class="uk-width-auto"><span class="rfAvatar" aria-hidden="true">${P.contact.name.split(' ').map(s => s[0]).join('')}</span></div><div class="uk-width-expand"><div class="about"><h3>${esc(P.contact.name)}</h3><p class="perex">${esc(P.contact.role)}</p><a href="${P.contact.phoneHref}" title="Telefon" class="next-link white"><span class="ico"><img loading="lazy" src="${u('/www/Development/images/svg/phone.svg')}" alt="" data-uk-svg></span><span>${P.contact.phone}</span></a><a href="mailto:${P.contact.email}" title="E-mail" class="next-link white"><span class="ico"><img loading="lazy" src="${u('/www/Development/images/svg/email.svg')}" alt="" data-uk-svg></span><span>${P.contact.email}</span></a></div></div></div>`);
	const boHtml = bo.outerHTML;

	const similar = U.filter(y => y !== x).sort((a, b) => (a.dispo !== x.dispo) - (b.dispo !== x.dispo) || Math.abs(a.area - x.area) - Math.abs(b.area - x.area)).slice(0, 4);
	const sim = `<section class="unitsTableSection rfSimilar"><div class="container"><div class="top"><p class="subtitle">Další byty v projektu</p><h2>Podobné byty</h2></div><div class="unitsGrid uk-grid-small uk-child-width-1-2@s uk-child-width-1-4@l" data-uk-grid>${similar.map(y => card(y)).join('')}</div></div></section>`;

	const { secs } = between(root);
	secs.filter(s => s !== top).forEach(s => s.remove());
	top.insertAdjacentHTML('afterend', detail + why + boHtml + stepsSection() + sim);
}

function floorPage(root, f) {
	chrome(root, { title: `${f.name} | ${P.name}`, desc: `Byty v ${f.name} domu ${P.name}: ${f.units.length} bytů.`, current: '/nabidka-nemovitosti/' });
	const title = `<section class="projectListTitle"><div class="container"><div class="text"><p class="subtitle">${f.units.length} ${pl(f.units.length, 'byt', 'byty', 'bytů')} v podlaží</p><h1>${f.name}</h1></div></div></section>`;
	const tpl = f.units.map(x => `<template data-imagemap-polygon="${x.no}" data-imagemap-coordinates="${JSON.stringify(x.poly).replace(/"/g, '&quot;')}" data-imagemap-state="available" data-imagemap-href="${unitUrl(x)}" data-imagemap-target="_self"><div class="qtip-content"><div class="qtipBox-headerPart"><div class="name">Byt ${x.code}</div></div><div class="qtipBox-bodyPart"><div class="row"><span class="label">Dispozice</span><span class="value">${x.dispo}, ${m2(x.area)}</span></div><div class="row"><span class="label">Stav</span><span class="value greeny">Volný</span></div><div class="row"><span class="label">Cena</span><span class="value">na vyžádání</span></div>${outdoor(x).length ? `<div class="row"><span class="label">Venku</span><span class="value">${outdoor(x).join(', ')}</span></div>` : ''}</div></div></template>`).join(' ');
	const fe = root.querySelector('section.floorExtract');
	const map = fe.querySelector('.mapingFloor');
	const cursor = fe.querySelector('#viz-cursor')?.outerHTML || '';
	map.set_content(`<img src="${floorPlan(f.n)}" alt="Půdorys ${f.name}" class="map" data-imagemap-id="${f.n}"> ${tpl}`);
	fe.querySelector('.floorExtract-buildings')?.remove();
	fe.querySelector('.floorExtract-buildingPreview')?.remove();
	const layout = fe.querySelector('.floorExtract-layout');
	layout.classList.remove('is-multiBuilding');
	layout.setAttribute('data-current-building', P.name);
	fe.querySelector('.floorExtract-floors').set_content(`<div class="floorsList">${D.floors.map(g => `<a href="${floorUrl(g.n)}" class="floorBtn${g.n === f.n ? ' is-active' : ''}" data-floor-state="available" data-floor-number="${g.n}" title="${g.name}">${g.name}</a>`).join('')}</div>`);
	const back = fe.querySelector('.backLink span'); if (back) back.set_content('Zpět na výběr bytů');
	const table = `<section class="unitsTableSection"><div class="container"><div class="unitsGrid uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l" data-uk-grid>${f.units.map(x => card(x)).join('')}</div></div></section>`;
	const feHtml = fe.outerHTML;
	setMain(root, title + feHtml + table + benefitsSection());
}

function listing(root) {
	chrome(root, { title: `Výběr bytů | ${P.name}`, current: '/nabidka-nemovitosti/' });
	const title = `<section class="projectListTitle"><div class="container"><div class="text"><p class="subtitle">${P.units} bytů 1+kk až 3+kk · ceny na vyžádání</p><h1>Výběr bytů</h1></div></div></section>`;
	const L = root.querySelector('section.unitsLayout');
	L.querySelector('.filterModal')?.remove();
	L.querySelector('.layoutSide').set_content(`<div class="rfFilter" data-rf-filter aria-label="Filtr bytů"></div><div class="rfFloorLinks"><p class="rfFilter__label">Podlaží</p>${D.floors.map(f => `<a href="${floorUrl(f.n)}"><span>${f.name}</span><small>${f.units.length} ${pl(f.units.length, 'byt', 'byty', 'bytů')}</small><i class="mdi mdi-chevron-right" aria-hidden="true"></i></a>`).join('')}</div><div class="floorPreview" data-floor-preview></div>`);
	L.querySelector('.layoutViz').set_content(vizSection({ compact: true, title: false }));
	const main = L.querySelector('.layoutMain');
	main.set_content(`<section class="unitsTableSection"><div><div class="resultBar"><div class="resultBar__summary"><p class="resultBar__count"><strong data-rf-count>${U.length}</strong> <span data-rf-count-word>bytů</span></p></div></div><div class="unitsGrid uk-grid-small uk-child-width-1-3@l uk-child-width-1-2@s" data-uk-grid data-rf-units>${U.map(x => card(x)).join('')}</div><p class="rfEmpty" hidden>Vybraným filtrům neodpovídá žádný byt. <button type="button" class="button second" data-rf-reset>Zrušit filtry</button></p></div></section>`);
	const Lhtml = L.outerHTML;
	setMain(root, title + Lhtml + benefitsSection());
}

function savedPage(root, kind) {
	const fav = kind === 'fav';
	chrome(root, { title: `${fav ? 'Oblíbené byty' : 'Porovnání bytů'} | ${P.name}` });
	const top = root.querySelector('section.favouriteTop');
	top.querySelector('h1').set_content(fav ? 'Moje oblíbené byty' : 'Porovnání bytů');
	top.querySelector('.editableBlock').set_content(fav ? '<p>Byty, které jste si označili srdíčkem. Uloží se ve vašem prohlížeči — pošlete nám dotaz a pomůžeme vám vybrat.</p>' : '<p>Postavte si vybrané byty vedle sebe a porovnejte dispozice a plochy. Výběr se uloží ve vašem prohlížeči.</p>');
	const empty = `<p class="rfSavedEmpty" hidden>${fav ? 'Zatím nemáte žádné oblíbené byty.' : 'Nejsou vybrané žádné byty k porovnání.'} <a class="button second" href="${u('/nabidka-nemovitosti/')}">Přejít na výběr bytů<i class="mdi mdi-chevron-right"></i></a></p>`;
	const body = fav
		? `<section class="unitsTableSection rfSaved"><div class="container">${empty}<div class="unitsGrid uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l" data-uk-grid data-rf-saved="fav">${U.map(x => card(x)).join('')}</div></div></section>`
		: `<section class="rfCompare"><div class="container">${empty}<div class="rfCompare__wrap" data-rf-compare></div></div></section>`;
	setMain(root, top.outerHTML + body + UNITS_JSON() + vizSection({ compact: false }) + benefitsSection());
}

function gdpr(root) {
	chrome(root, { title: `Ochrana osobních údajů | ${P.name}` });
	// Právní text dodá developer — v návrhu jen ověřené údaje správce (Fillout)
	setMain(root, `<section class="pageContent pageContent--legal"><div class="container"><div class="text editableBlock">
<h1>Ochrana osobních údajů</h1>
<p>Správcem osobních údajů zadaných ve formulářích tohoto webu je společnost <strong>${esc(P.developer.name)}</strong>, IČO ${P.developer.ico}, se sídlem ${esc(P.developer.address)}.</p>
<p>Údaje z formulářů (jméno, telefon, e-mail a zpráva) používáme pouze k tomu, abychom odpověděli na váš dotaz a domluvili prohlídku nebo nabídku bytu.</p>
<p>S dotazy ke zpracování osobních údajů se obracejte na <a href="mailto:${P.contact.email}">${P.contact.email}</a>.</p>
<p class="rfNote">Plné znění zásad zpracování osobních údajů dodá developer.</p>
</div></div></section>`);
}

// ---------------------------------------------------------------------------- //
// Mapy, ikony, barvy
// ---------------------------------------------------------------------------- //
const mdiPath = cls => mdi['mdi' + cls.replace(/^mdi-/, '').split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('')];
const pinPoi = p => `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><line x1="30" y1="34" x2="30" y2="60" stroke="${C.green}" stroke-width="1.5"/><circle cx="30" cy="18" r="16" fill="#fff"/><circle cx="30" cy="18" r="14" fill="${C.green}"/><path d="${p}" fill="#fff" transform="translate(21 9) scale(0.75)"/></svg>`;
const pinMain = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><path d="M40 78C40 78 13 51 13 33a27 27 0 1 1 54 0C67 51 40 78 40 78Z" fill="${C.green}" stroke="#fff" stroke-width="2.5"/><path d="${SYMBOL_PATH}" fill="#fff" transform="translate(26.5 18.5) scale(0.48)"/></svg>`;
const iconSvg = (p, color = C.green) => `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><circle cx="32" cy="32" r="31" fill="${C.greenSoft}"/><path d="${p}" fill="${color}" transform="translate(16 16) scale(1.333)"/></svg>`;

async function assets() {
	const dst = path.join(OUT, 'project');
	await fs.rm(dst, { recursive: true, force: true });
	await fs.cp(path.join(ROOT, 'project', 'img'), path.join(dst, 'img'), { recursive: true });
	await fs.copyFile(path.join(ROOT, 'project', 'project.css'), path.join(dst, 'project.css'));
	await fs.copyFile(path.join(ROOT, 'project', 'project.js'), path.join(dst, 'project.js'));
	if (HERO_VIDEO) await fs.cp(path.join(ROOT, 'project', 'media'), path.join(dst, 'media'), { recursive: true });
	await fs.mkdir(path.join(dst, 'img', 'pins'), { recursive: true });
	await fs.mkdir(path.join(dst, 'img', 'icons'), { recursive: true });
	await fs.mkdir(path.join(dst, 'map'), { recursive: true });
	await fs.copyFile(path.join(ROOT, 'project', 'img', 'logo', 'symbol.svg'), path.join(dst, 'img', 'favicon.svg'));
	await fs.writeFile(path.join(dst, 'img', 'pins', 'projekt.svg'), pinMain);
	CATS.forEach(async (c, i) => { const ic = D.pois.find(p => p.cat === c).icon; await fs.writeFile(path.join(dst, 'img', 'pins', `cat-${i}.svg`), pinPoi(mdiPath(ic))); });
	for (const ic of new Set(D.pois.map(p => p.icon))) await fs.writeFile(path.join(dst, 'img', 'pins', `${ic}.svg`), pinPoi(mdiPath(ic)));
	for (const [ic] of BENEFITS) await fs.writeFile(path.join(dst, 'img', 'icons', `${ic}.svg`), iconSvg(mdi[ic]));

	const opt = JSON.parse(await fs.readFile(path.join(OUT, '_data', 'do-map-main-options.json'), 'utf8'));
	const main = { position: P.geo, icon: IMG('pins/projekt.svg'), title: P.name, content: `<div class="addressCard"><div class="logo">${logo()}</div><p>${esc(P.street)}<br>${P.zip} ${esc(P.place)}</p><a href="https://mapy.cz/?q=${encodeURIComponent(`${P.street}, ${P.city} Řepy`)}" target="_blank" rel="noopener">Navigovat <i class="mdi mdi-chevron-right"></i></a></div>` };
	const poiMarker = p => ({ position: { lat: p.lat, lng: p.lng }, icon: IMG(`pins/${p.icon}.svg`), title: p.name, categories: [{ name: p.cat }], content: `<div class="mapPopup"><div class="mapPopup-body"><div class="mapPopup-head"><span class="ico"><img src="${IMG(`pins/${p.icon}.svg`)}" alt=""></span><h3>${esc(p.name)}</h3></div><div class="mapPopup-foot"><p class="mapPopup-address">${p.addr ? esc(p.addr) + ' · ' : ''}${distTxt(p.d).replace('&nbsp;', ' ')} od domu</p></div></div></div>` });
	const W = (n, o, m) => Promise.all([fs.writeFile(path.join(dst, 'map', `${n}-options.json`), JSON.stringify({ ...opt, center: P.geo, zoom: o })), fs.writeFile(path.join(dst, 'map', `${n}-markers.json`), JSON.stringify(m))]);
	await W('home', 15, [main, ...POIS.filter(p => p.d < 900).map(poiMarker)]);
	await W('lokalita', 15, [main, ...POIS.map(poiMarker)]);
	await W('kontakty', 16, [main]);
	await fs.writeFile(path.join(dst, 'map', 'lines.json'), '[]');
}

async function recolor() {
	const map = [[/'Poppins'/g, "'Urbanist'"], [/Poppins/g, 'Urbanist'], [/#42c787/gi, C.green], [/#2e9a66/gi, C.greenDark], [/#e9f6f0/gi, C.greenSoft], [/#3c3c3b/gi, C.anthracite], [/66 199 135/g, '97 121 82'], [/66,\s*199,\s*135/g, '97, 121, 82'],
		// cookie lišta má vlastní zelenou
		[/#30aa51/gi, C.green], [/48 170 81/g, '97 121 82'], [/#288a42/gi, C.greenDark], [/40 138 66/g, '77 97 65']];
	const files = [...(await fs.readdir(path.join(OUT, 'www', 'Development', 'cache'))).filter(f => f.endsWith('.css')).map(f => path.join(OUT, 'www', 'Development', 'cache', f)), path.join(OUT, 'refine', 'brave-refine.css')];
	for (const f of files) { let s = await fs.readFile(f, 'utf8'); for (const [re, v] of map) s = s.replace(re, v); await fs.writeFile(f, s); }
	for (const f of ['mailContact.svg', 'mobileContact.svg', 'send.svg']) { const p = path.join(OUT, 'www', 'Development', 'images', 'svg', f); let s = await fs.readFile(p, 'utf8').catch(() => null); if (s) await fs.writeFile(p, s.replace(/#42c787/gi, C.green)); }
}

// ---------------------------------------------------------------------------- //
async function run() {
	const read = async p => parse(await fs.readFile(path.join(OUT, p), 'utf8'), { comment: true });
	const T = {
		home: await read('index.html'), projekt: await read('o-projektu/index.html'), standardy: await read('standardy/index.html'),
		lokalita: await read('lokalita/index.html'), aktuality: await read('aktuality/index.html'), clanek: await fs.readFile(path.join(OUT, 'aktuality/hruba-stavba-je-dokoncena/index.html'), 'utf8'),
		kontakty: await read('kontakty/index.html'), byt: await fs.readFile(path.join(OUT, 'byt-a-01-01/index.html'), 'utf8'), patro: await fs.readFile(path.join(OUT, 'dum-a-1-np/index.html'), 'utf8'),
		listing: await read('nabidka-nemovitosti/index.html'), fav: await read('oblibene-nemovitosti/index.html'), cmp: await read('porovnani-jednotek/index.html'), gdpr: await read('zpracovani-osobnich-udaju/index.html'),
	};
	const KEEP = new Set(['index.html', '404.html', '.nojekyll', 'www', 'refine', '_data', 'o-projektu', 'standardy', 'lokalita', 'kontakty', 'zpracovani-osobnich-udaju']);
	for (const e of await fs.readdir(OUT)) if (!KEEP.has(e)) await fs.rm(path.join(OUT, e), { recursive: true, force: true });
	await fs.rm(path.join(OUT, 'refine', 'media'), { recursive: true, force: true });
	// data map a POI původního projektu — zůstává jen prázdná odpověď pro signály šablony
	for (const e of await fs.readdir(path.join(OUT, '_data'))) if (e !== 'noop.json' && e !== 'do-map-main-options.json') await fs.rm(path.join(OUT, '_data', e));

	const write = async (p, root) => { await fs.mkdir(path.dirname(path.join(OUT, p)), { recursive: true }); await fs.writeFile(path.join(OUT, p), '<!DOCTYPE html>\n' + root.toString().replace(/^<!DOCTYPE html>\s*/i, '')); };
	home(T.home); await write('index.html', T.home);
	oProjektu(T.projekt); await write('o-projektu/index.html', T.projekt);
	standardy(T.standardy); await write('standardy/index.html', T.standardy);
	lokalita(T.lokalita); await write('lokalita/index.html', T.lokalita);
	aktuality(T.aktuality); await write('aktuality/index.html', T.aktuality);
	for (const n of D.news) { const r = parse(T.clanek, { comment: true }); clanek(r, n); await write(`aktuality/${n.slug}/index.html`, r); }
	kontakty(T.kontakty); await write('kontakty/index.html', T.kontakty);
	listing(T.listing); await write('nabidka-nemovitosti/index.html', T.listing);
	for (const x of U) { const r = parse(T.byt, { comment: true }); unitPage(r, x); await write(`${x.slug}/index.html`, r); }
	for (const f of D.floors) { const r = parse(T.patro, { comment: true }); floorPage(r, f); await write(`${f.n}-np/index.html`, r); }
	gdpr(T.gdpr); await write('zpracovani-osobnich-udaju/index.html', T.gdpr);
	savedPage(T.fav, 'fav'); await write('oblibene-nemovitosti/index.html', T.fav);
	savedPage(T.cmp, 'cmp'); await write('porovnani-jednotek/index.html', T.cmp);
	await assets();
	await recolor();
	console.log(`projekt: ${P.name} · ${U.length} bytů, ${D.floors.length} podlaží, ${D.news.length} aktuality`);
}
await run();
