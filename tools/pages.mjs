// Reprezentativní stránky pro screenshoty, měření a testy (cesty pod BASE).
export const PAGES = {
	home: '/',
	projekt: '/o-projektu/',
	standardy: '/standardy/',
	lokalita: '/lokalita/',
	financovani: '/financovani/',
	galerie: '/galerie/',
	faq: '/faq/',
	onas: '/o-nas/',
	aktuality: '/aktuality/',
	clanek: '/aktuality/hruba-stavba-je-dokoncena/',
	kontakty: '/kontakty/',
	nabidka: '/nabidka-nemovitosti/',
	nabidkalist: '/nabidka-nemovitosti/_q/view-list/',
	nabidkafloors: '/nabidka-nemovitosti/_q/view-floors/',
	patro: '/dum-a-1-np/',
	byt: '/byt-a-01-01/',
	porovnani: '/porovnani-jednotek/',
	oblibene: '/oblibene-nemovitosti/',
	kalkulacka: '/investicni-kalkulacka/',
	gdpr: '/zpracovani-osobnich-udaju/',
	poi: '/potraviny/',
	makler: '/jana-novakova/',
	makleri: '/makleri/',
};

// Stejné stránky na živém webu (pro testy interakcí proti skutečnému backendu).
export const LIVE = Object.fromEntries(Object.entries(PAGES).map(([k, p]) => [k,
	p.replace(/^\/nabidka-nemovitosti\/_q\/view-(list|floors)\/$/, '/nabidka-nemovitosti?view=$1').replace(/(.)\/$/, '$1')]));
