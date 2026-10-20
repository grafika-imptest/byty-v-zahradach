// Doplní body zájmu do 360° panoramatu na homepage (data jako by je zadal správce v CMS).
// Zdroj: body mapy lokality (název, adresa, kategorie). Panoráma v demu je ilustrační
// vizualizace a ani původní body neodpovídají skutečným směrům (MHD a ZŠ Komenského leží
// stejným směrem, v panoramatu jsou 45° od sebe) — nové body se proto rozmisťují
// ORIENTAČNĚ: rovnoměrně dokola mimo stávající body, bližší místa níž, vzdálenější
// blíž horizontu. Pro ostrý projekt je musí umístit správce podle skutečné fotky.
//   import { addPanoramaPois } from './panorama-pois.mjs'  (volá tools/build.mjs)
import fs from 'node:fs/promises';
import path from 'node:path';

const HOME = { lat: 49.2118, lng: 16.634501 };
const rad = x => x * Math.PI / 180;
function dist(a) {
	const dLat = rad(a.lat - HOME.lat), dLng = rad(a.lng - HOME.lng);
	return 2 * 6371000 * Math.asin(Math.sqrt(Math.sin(dLat / 2) ** 2 + Math.cos(rad(HOME.lat)) * Math.cos(rad(a.lat)) * Math.sin(dLng / 2) ** 2));
}
function icon(m) {
	const t = m.title, c = (m.categories || [])[0]?.name || '';
	if (/sport/i.test(c)) return 'mdi-basketball';
	if (/přírod/i.test(c)) return 'mdi-tree-outline';
	if (/kostel/i.test(t)) return 'mdi-church';
	if (/ZŠ|MŠ|škol/i.test(t)) return 'mdi-school-outline';
	if (/MHD|zastáv/i.test(t)) return 'mdi-bus-stop';
	if (/lékár/i.test(t)) return 'mdi-pill';
	if (/potravin|obchod/i.test(t)) return 'mdi-cart-outline';
	if (/aktivit/i.test(c)) return 'mdi-silverware-fork-knife';
	return 'mdi-map-marker-outline';
}
const address = html => (html.match(/class="mapPopup-address">([^<]+)</) || [])[1]?.trim() || '';

export async function addPanoramaPois(OUT) {
	const file = path.join(OUT, 'index.html');
	const src = path.join(OUT, '_data', 'lokalita-do-map-contact-markers.json');
	let html, markers;
	try { html = await fs.readFile(file, 'utf8'); markers = JSON.parse(await fs.readFile(src, 'utf8')); } catch { return 0; }
	const re = /(<script type="application\/json" data-panorama-markers>)([\s\S]*?)(<\/script>)/;
	const m = html.match(re);
	if (!m) return 0;
	const pano = JSON.parse(m[2]);
	const have = new Set(pano.map(p => (p.label || '').trim()));
	const pois = markers.filter(x => x.categories?.length && !have.has(x.title.trim()));

	// volná místa dokola: krok 360/N, posun od stávajících bodů aspoň 9°
	const taken = pano.filter(p => p.kind !== 'polygon').map(p => ((Number(p.yaw) % 360) + 360) % 360);
	const free = [];
	for (let y = 0; y < 360 && free.length < 360; y += 3) if (taken.every(t => Math.min(Math.abs(t - y), 360 - Math.abs(t - y)) >= 9)) free.push(y);
	const step = free.length / Math.max(1, pois.length);
	pois.sort((a, b) => dist(a.position) - dist(b.position));
	// promíchat pořadí po obvodu, aby blízké (nízko) a vzdálené (u horizontu) body střídaly
	const order = pois.map((_, i) => i).sort((a, b) => ((a * 7) % pois.length) - ((b * 7) % pois.length));
	let n = 0;
	for (const i of order) {
		const x = pois[i], d = dist(x.position);
		let yaw = free[Math.floor(n++ * step)];
		yaw = yaw > 180 ? yaw - 360 : yaw;
		const pitch = -(5 + 26 * Math.exp(-d / 160)); // bližší níž, vzdálenější u horizontu
		const detail = address(x.content || '');
		pano.push({
			id: 'panorama-marker-rf-' + i, kind: 'poi', label: x.title.trim(), detail,
			translations: { cs: { label: x.title.trim(), detail }, en: { label: x.title.trim(), detail } },
			icon: icon(x), yaw: Math.round(yaw * 10) / 10, pitch: Math.round(pitch * 10) / 10, link: ''
		});
	}
	// Vzdálenost od projektu (vzdušnou čarou z GPS mapy lokality) do tooltipu každého bodu,
	// který v mapě má souřadnice; body bez souřadnic (souhrnné „Restaurace“) zůstávají beze změny.
	const km = (d, sep) => (Math.max(0.1, Math.round(d / 100) / 10)).toFixed(1).replace('.', sep) + ' km'; // nezlomitelná mezera
	let withDist = 0;
	for (const p of pano) {
		if (p.kind !== 'poi') continue;
		const mk = markers.find(x => x.categories?.length && x.title.trim() === (p.label || '').trim());
		if (!mk) continue;
		const d = dist(mk.position);
		const add = (txt, part) => (txt ? txt.replace(/ · [\d.,]+[\s ]*km.*$/, '') /* opakovaný build: stará vzdálenost pryč */ + ' · ' : '') + part;
		p.detail = add(p.detail, km(d, ',') + ' od projektu');
		p.translations = p.translations || {};
		for (const [lang, sep, suf] of [['cs', ',', ' od projektu'], ['en', '.', ' from the project']]) {
			const t = p.translations[lang] = p.translations[lang] || { label: p.label, detail: '' };
			t.detail = add(t.detail, km(d, sep) + suf);
		}
		withDist++;
	}
	console.log('panoráma: vzdálenost u ' + withDist + ' bodů');
	await fs.writeFile(file, html.replace(re, (_, a, __, c) => a + JSON.stringify(pano) + c));
	return pois.length;
}
