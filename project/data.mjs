// Byty v zahradách (BD Řepy) — data projektu pro návrh webu.
// Zdroje (C:\Users\Omen\Documents\claude\BD_Řepy\podklady):
//   Fillout „Brave Development – V2“ (9. 10. 2026), přehled bytů BD_REPY_prehledy… (aktuální rozměry),
//   dispozice 1–4 NP (15. 10. 2026), standard_BD_Řepy_10_2026.docx, vizualizace 355_BD_V_Zahradach 1–5,
//   fotografie hrubé stavby (8–9/2026), katalog 17. 10. 2025 (pozemky/zahrady).
// Co je OZNAČENO „k potvrzení“, v podkladech chybí nebo si odporuje — viz README projektu.

export const project = {
	name: 'Byty v zahradách',
	place: 'Praha – Řepy',
	street: 'Engelmüllerova',
	zip: '163 00',
	city: 'Praha',
	parcel: '50/4 (k. ú. Řepy)',
	type: 'Bytový dům',
	floors: 4,
	units: 34,
	mix: { '1+kk': 11, '2+kk': 18, '3+kk': 5 },
	// Fillout: „22 v zakladačích, 2 parkoviště“; výkres 1.PP ukazuje stání 1–23 (k potvrzení)
	parking: { garage: 22, outdoor: 2, note: 'Parkování není součástí ceny bytu.' },
	clientChanges: 'výběr podlah, obkladů, dlažeb a zařizovacích předmětů',
	developer: {
		name: 'HICH Holding s.r.o.',
		ico: '07396708',
		address: 'Západní 365/11, 162 00 Praha 6',
	},
	// Fillout: kontakt „pro vyjasnění podkladů“ — kontakt pro web nevyplněn (k potvrzení)
	contact: { name: 'Jiří Zralý', role: 'Prodej bytů', phone: '+420 776 825 212', phoneHref: 'tel:+420776825212', email: 'zraly@profiserv.cz' },
	// Engelmüllerova, Praha 17 – Řepy: střed ulice dle OpenStreetMap (way 8092757); přesná poloha domu k potvrzení
	geo: { lat: 50.06664, lng: 14.29415 },
};

// Přehled bytů (aktuální rozměry). Byty 207/208 jsou v přehledu prohozené dispozicí (207 = 3kk 51,4 m²,
// 208 = 2kk 64,2 m²) — stejná pozice v 1. i 3. NP je 2+kk 51 m² / 3+kk 64 m², opraveno a k potvrzení.
// Počty dispozic sedí s Filloutem (11 / 18 / 5) v obou variantách.
// cols: číslo, dispozice, plocha bytu, balkon, terasa, zahrada (m²)
const ROWS = `
101 2+kk 47.7 7 - -
102 1+kk 33 7 5.7 -
103 2+kk 41.2 7.4 15.5 82
104 2+kk 49 - 34.5 83
105 1+kk 26.3 6.8 - -
106 1+kk 26.2 6.8 - -
107 2+kk 51.5 7 37.4 155
108 3+kk 64.6 - 26 -
109 2+kk 44.9 - 12.4 77
201 2+kk 47.8 7 - -
202 1+kk 33 7 - -
203 2+kk 41 7 - -
204 2+kk 48.2 7 - -
205 1+kk 26.3 7 - -
206 1+kk 26.5 7 - -
207 2+kk 51.4 7 - -
208 3+kk 64.2 7 - -
209 2+kk 44.6 7 - -
301 2+kk 47.8 7 - -
302 1+kk 33 7 - -
303 2+kk 41.1 7 - -
304 2+kk 48.2 7 - -
305 1+kk 26.1 7 - -
306 1+kk 26.6 7 - -
307 2+kk 51.4 7 - -
308 3+kk 64.3 7 - -
309 2+kk 44.6 7 - -
401 1+kk 33.1 - 15.2 -
402 3+kk 61.7 - 17.4 -
403 2+kk 37.3 7 - -
404 1+kk 30.6 - 9.9 -
405 2+kk 43.7 - 16.6 -
406 3+kk 53 7 2.8 -
407 2+kk 42 7 - -`;

// Výřez půdorysu bytu (v pixelech výkresu vykresleného na šířku 2000 px; vč. balkonů/teras)
const CROP = {
	1: { '01': [575, 95, 905, 335], '02': [300, 95, 575, 335], '03': [300, 335, 575, 700], '04': [575, 385, 910, 700], '05': [1050, 95, 1185, 400], '06': [1185, 95, 1320, 400], '07': [1320, 95, 1880, 520], '08': [1285, 400, 1590, 780], '09': [1045, 450, 1285, 780] },
	2: { '01': [765, 95, 1097, 340], '02': [530, 95, 765, 340], '03': [530, 340, 770, 635], '04': [770, 385, 1097, 635], '05': [1237, 95, 1375, 405], '06': [1375, 95, 1510, 405], '07': [1510, 95, 1770, 405], '08': [1475, 405, 1770, 745], '09': [1237, 450, 1475, 745] },
	4: { '01': [765, 140, 1097, 345], '02': [530, 140, 800, 545], '03': [795, 345, 1097, 610], '04': [1240, 140, 1455, 385], '05': [1455, 140, 1745, 390], '06': [1475, 385, 1765, 720], '07': [1237, 400, 1475, 720] },
};
CROP[3] = CROP[2];

// Obrys bytu (bez balkonů a teras) pro klikací půdorys podlaží — body [x, y] ve stejných pixelech
const R = (x1, y1, x2, y2) => [[x1, y1], [x2, y1], [x2, y2], [x1, y2]];
const POLY = {
	1: { '01': R(575, 160, 905, 335), '02': R(345, 160, 575, 335), '03': R(345, 335, 575, 555), '04': R(575, 385, 905, 555), '05': R(1050, 160, 1185, 400), '06': R(1185, 160, 1320, 400), '07': R(1320, 160, 1580, 400), '08': R(1285, 400, 1580, 665), '09': R(1050, 450, 1285, 665) },
	2: { '01': R(765, 165, 1097, 340), '02': R(530, 165, 765, 340), '03': R(530, 340, 770, 565), '04': R(770, 385, 1097, 565), '05': R(1237, 165, 1375, 405), '06': R(1375, 165, 1510, 405), '07': R(1510, 165, 1770, 405), '08': R(1475, 405, 1770, 680), '09': R(1237, 450, 1475, 680) },
	4: { '01': R(765, 205, 1097, 345), '02': [[575, 205], [765, 205], [765, 390], [795, 390], [795, 540], [575, 540]], '03': R(795, 390, 1097, 540), '04': R(1240, 205, 1455, 385), '05': R(1455, 205, 1745, 390), '06': R(1475, 390, 1745, 655), '07': R(1240, 435, 1475, 655) },
};
POLY[3] = POLY[2];
// Výřez celého podlaží (stejné pixely) — obrázek podlaží, z něj se počítají procenta polygonů
export const FLOOR_CROP = { 1: [290, 80, 1900, 800], 2: [520, 80, 1780, 760], 3: [520, 80, 1780, 760], 4: [520, 120, 1780, 740] };

const num = v => (v === '-' ? 0 : Number(v));
export const units = ROWS.trim().split('\n').map(line => {
	const [no, dispo, area, balcony, terrace, garden] = line.trim().split(/\s+/);
	const floor = Number(no[0]);
	const pos = no.slice(1);
	return {
		no, code: `${floor}.${pos}`, slug: `byt-${no}`, floor, dispo,
		area: num(area), balcony: num(balcony), terrace: num(terrace), garden: num(garden),
		// Ceny klient doplní v administraci (Fillout) — návrh ukazuje „Cena na vyžádání“
		price: null,
		// Stav prodeje: přehled má sloupec „Rezervace (označení neexkluzivity)“ s hodnotou NEEX u části bytů —
		// význam k potvrzení, v návrhu jsou všechny byty volné
		state: 'available',
		crop: CROP[floor][pos],
		// polygon v % obrázku podlaží
		poly: POLY[floor][pos].map(([x, y]) => { const [x1, y1, x2, y2] = FLOOR_CROP[floor]; return { x: +((x - x1) / (x2 - x1) * 100).toFixed(2), y: +((y - y1) / (y2 - y1) * 100).toFixed(2) }; }),
	};
});

export const floors = [1, 2, 3, 4].map(n => ({
	n, slug: `${n}-np`, name: `${n}. NP`,
	units: units.filter(u => u.floor === n),
}));

// Standard 10/2026 (standard_BD_Řepy_10_2026.docx) — zkrácené pro web, plné znění v PDF ke stažení
export const standards = [
	{ icon: 'mdi-door', title: 'Vstupní dveře', text: 'Bezpečnostní dveře třídy RC 2 s protipožární odolností EW 30 DP3, bezpečnostní kování, ocelová zárubeň, výška 2 100 mm.' },
	{ icon: 'mdi-door-open', title: 'Vnitřní dveře', text: 'Hladké plné dveře SAPELI s obložkovou zárubní, výška 2 100 mm.' },
	{ icon: 'mdi-window-closed-variant', title: 'Okna a balkonové dveře', text: 'Plastová okna VEKRA s trojsklem, zvenku antracit, uvnitř bílá. Předokenní žaluzie Zetta 90 v barvě RAL 7016.' },
	{ icon: 'mdi-floor-plan', title: 'Podlahy', text: 'Vinylová plovoucí podlaha v pokojích, dlažba v předsíni, koupelně a na toaletě.' },
	{ icon: 'mdi-shower-head', title: 'Koupelna a WC', text: 'Keramický obklad do stropu, sprchová vanička z litého mramoru se skleněnou zástěnou, závěsné WC, umyvadlo 60 cm, chromové pákové baterie, otopný žebřík.' },
	{ icon: 'mdi-snowflake', title: 'Klimatizace', text: 'Vnitřní jednotka klimatizace v každé obytné místnosti (mimo koupelny).' },
	{ icon: 'mdi-radiator', title: 'Vytápění', text: 'Otopná tělesa RADIK VK s termostatickými hlavicemi, zdrojem je plynová kotelna domu.' },
	{ icon: 'mdi-solar-power-variant', title: 'Fotovoltaika', text: 'Společná fotovoltaická elektrárna na střeše slouží k ohřevu teplé vody pro celý dům.' },
	{ icon: 'mdi-pot-steam-outline', title: 'Kuchyně', text: 'Připravenost pro kuchyňskou linku: voda, kanalizace, elektro a samostatný odtah digestoře nad střechu. Linka není součástí dodávky.' },
	{ icon: 'mdi-flash-outline', title: 'Elektro a data', text: 'Bytový rozvaděč, zásuvky a vypínače ABB, příprava pro svítidla, datová přípojka do obývacího pokoje.' },
	{ icon: 'mdi-flower-outline', title: 'Terasy a balkony', text: 'Betonová dlažba na terčích, pozinkované ocelové zábradlí. Terasy v 1. a 4. NP mají venkovní zásuvku, vývod pro světlo a nezámrzný ventil.' },
	{ icon: 'mdi-car-electric-outline', title: 'Garáž a nabíjení', text: 'Podzemní garáž s parkovacími zakladači Wöhr Parklift 405 a sekčními vraty s dálkovým ovládáním. Stavební příprava pro wallbox.' },
	{ icon: 'mdi-elevator-passenger-outline', title: 'Společné prostory', text: 'Výtah MP Lift s nerezovou kabinou, osvětlení s pohybovými čidly, prosklené vstupní dveře s trojsklem, elektrický vrátný.' },
	{ icon: 'mdi-wall', title: 'Konstrukce a fasáda', text: 'Monolitický železobeton, keramické a plynosilikátové zdivo, kontaktní zateplovací systém.' },
];

// Aktuality — fotografie hrubé stavby od klienta (datum z názvu souboru = datum pořízení)
export const news = [
	{ slug: 'hruba-stavba-v-plnem-proudu', date: '2026-09-01', photo: '20260901_172709', title: 'Hrubá stavba ve 4. podlaží', perex: 'Dům má vyzděná všechna čtyři podlaží a osazená okna. Na řadě je střecha a příprava fasády.' },
	{ slug: 'betonaz-a-balkony', date: '2026-08-26', photo: '20260826_081048', title: 'Betonáž a montáž balkonů', perex: 'Na stavbu přijela autodomíchávadla a čerpadlo betonu. Postupně přibývají balkonové desky na zahradní straně domu.' },
	{ slug: 'okna-jsou-osazena', date: '2026-08-11', photo: '20260811_162635', title: 'Osazená okna v bytech', perex: 'Do vyzděných podlaží se osazují plastová okna s trojsklem. Dům tak dostává svou definitivní podobu.' },
];

export const gallery = {
	viz: [1, 5, 4, 2, 3],
	photos: ['20260901_172709', '20260826_081048', '20260811_162514', '20260811_162635', '20260811_162734', '20260811_162901'],
};

// Barevnost projektu (z vizualizací: bílá omítka, antracitová atika a okna RAL 7016,
// šedobéžový obklad, zeleň zahrad, teplé světlo)
export const palette = {
	green: '#617952',      // zelená z loga — hlavní akcent (bílý text 4,8:1)
	greenDark: '#4d6141',
	greenSoft: '#eef1e8',
	greenInk: '#566c48',   // zelený text na světlém pozadí (5,1:1)
	anthracite: '#45484f', // šedá z loga
	sand: '#a39d92',       // obklad atiky
	warm: '#f6f4ef',       // teplé pozadí
	sun: '#c99a4b',        // teplé světlo — jen drobné akcenty
};

// Místa v okolí — OpenStreetMap (Overpass, 20. 10. 2026), vzdálenost vzdušnou čarou od středu ulice
export const pois = [
	{ cat: 'Doprava', icon: 'mdi-tram', name: 'Tramvajová zastávka Sídliště Řepy', lat: 50.06545, lng: 14.29804 },
	{ cat: 'Doprava', icon: 'mdi-tram', name: 'Tramvajová zastávka Blatiny', lat: 50.06578, lng: 14.30223 },
	{ cat: 'Obchody', icon: 'mdi-cart-outline', name: 'PENNY', lat: 50.06813, lng: 14.2964 },
	{ cat: 'Obchody', icon: 'mdi-cart-outline', name: 'Globus', lat: 50.06606, lng: 14.30091 },
	{ cat: 'Obchody', icon: 'mdi-cart-outline', name: 'Lidl', lat: 50.06543, lng: 14.30146 },
	{ cat: 'Zdraví', icon: 'mdi-pill', name: 'Lékárna BENU', lat: 50.06549, lng: 14.30257, addr: 'Makovského 1223/23' },
	{ cat: 'Zdraví', icon: 'mdi-hospital-box-outline', name: 'Poliklinika Řepy', lat: 50.06817, lng: 14.30814 },
	{ cat: 'Školy', icon: 'mdi-teddy-bear', name: 'Mateřská škola U Rybníčku', lat: 50.06495, lng: 14.28723 },
	{ cat: 'Školy', icon: 'mdi-teddy-bear', name: 'Mateřská škola Pastelka', lat: 50.06717, lng: 14.30354 },
	{ cat: 'Školy', icon: 'mdi-school-outline', name: 'ZŠ gen. Františka Peřiny', lat: 50.06331, lng: 14.30634 },
	{ cat: 'Školy', icon: 'mdi-school-outline', name: 'ZŠ Jana Wericha', lat: 50.06905, lng: 14.30679 },
	{ cat: 'Volný čas', icon: 'mdi-basketball', name: 'Sportovní centrum Řepy', lat: 50.067, lng: 14.29635 },
	{ cat: 'Volný čas', icon: 'mdi-tree-outline', name: 'Park Na Prameništi', lat: 50.06121, lng: 14.28546 },
	{ cat: 'Volný čas', icon: 'mdi-dumbbell', name: 'DrFit', lat: 50.06523, lng: 14.30842, addr: 'Nevanova 1063/46' },
	{ cat: 'Restaurace', icon: 'mdi-silverware-fork-knife', name: 'Restaurace Sokol', lat: 50.068, lng: 14.29528 },
	{ cat: 'Restaurace', icon: 'mdi-coffee-outline', name: 'Café Otočka', lat: 50.06557, lng: 14.29877, addr: 'Makovského 1390' },
];
