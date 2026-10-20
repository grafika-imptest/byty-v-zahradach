// Přepis kořenových URL kopie webu pod BASE (projektové GitHub Pages žijí na /<repo>/).
// Sdílí ho tools/build.mjs (V1) i tools/build-v2.mjs (V2).

export const ORIGIN = 'https://demo.bravedevelopment.cz';

export function createRewriter({ BASE, manifest }) {
	const pages = new Map();   // "/foo?x" → záznam
	for (const [url, e] of Object.entries(manifest)) if (e.kind === 'page') pages.set(url, e);

	// Stejná funkce je i v shimu (static-shim.js) — názvy JSON souborů s daty map.
	const dataSlug = s => s.replace(/^\//, '').replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase() || 'root';

	function pageDir(url) {
		const [p, q] = url.split('?');
		let dir = p === '/' ? '' : p.replace(/^\//, '').replace(/\/$/, '');
		if (q) dir = (dir ? dir + '/' : '') + '_q/' + dataSlug(decodeURIComponent(q));
		return dir;
	}

	function decodeEntities(s) { return s.replace(/&amp;/g, '&'); }

	// Přepis jedné URL (hodnota atributu / JSON). Vrací null = nechat beze změny.
	function mapUrl(raw) {
		let v = decodeEntities(raw.trim());
		if (v.startsWith(ORIGIN)) v = v.slice(ORIGIN.length) || '/';
		if (!v.startsWith('/') || v.startsWith('//') || v.startsWith(BASE + '/')) return null;
		const hashAt = v.indexOf('#');
		const hash = hashAt >= 0 ? v.slice(hashAt) : '';
		if (hashAt >= 0) v = v.slice(0, hashAt);
		const [p, q = ''] = v.split('?');
		const isAsset = p.startsWith('/www/') || p.startsWith('/progressive-web-app/') || /\.[a-z0-9]{2,5}$/i.test(p);
		if (isAsset) return BASE + encodeURI(decodeURI(p)) + (q ? '?' + q : '') + hash;
		if (/(^|&)_?do=/.test(q)) {
			// Přepínač jazyka → stejná stránka (staticky jen CS). Ostatní signály
			// zůstanou jako URL pod BASE, AJAX je zachytí shim.
			if (q.includes('languageSwitcher')) return BASE + '/' + withSlash(pageDir(p)) + hash;
			return BASE + v + hash;
		}
		if (pages.has(v)) {
			const target = pages.get(v);
			return BASE + '/' + withSlash(pageDir(v)) + hash;
		}
		// Nestažená kombinace filtru → stránka bez filtru (statický náhled).
		if (q && pages.has(p)) return BASE + '/' + withSlash(pageDir(p)) + hash;
		return BASE + v + hash;
	}
	const withSlash = d => (d ? d + '/' : '');

	function escapeAttr(s) { return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;'); }

	function rewriteHtml(html) {
		// 1) Atributy v tazích (mimo canonical / og:url — ty mají ukazovat na originál)
		html = html.replace(/<[a-zA-Z][^<>]*>/g, tag => {
			if (/^<link[^>]+rel="canonical"/i.test(tag) || /property="og:url"/i.test(tag)) return tag;
			return tag.replace(/(\s)([a-zA-Z_:][-a-zA-Z0-9_:.]*)(\s*=\s*)"([^"]*)"/g, (m, sp, name, eq, value) => {
				const lname = name.toLowerCase();
				let out = value;
				if (lname === 'srcset' || lname === 'data-srcset') {
					out = value.split(',').map(part => {
						const t = part.trim().split(/\s+/);
						const mapped = mapUrl(t[0]);
						if (mapped) t[0] = escapeAttr(mapped);
						return t.join(' ');
					}).join(', ');
				} else if (lname === 'style') {
					out = value.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/g, (mm, qq, u) => {
						const mapped = mapUrl(u);
						return mapped ? `url(${qq}${mapped}${qq})` : mm;
					});
				} else {
					const mapped = mapUrl(value);
					if (mapped) out = escapeAttr(mapped);
				}
				return sp + name + eq + '"' + out + '"';
			});
		});
		// 2) Inline <style>
		html = html.replace(/(<style[^>]*>)([\s\S]*?)(<\/style>)/gi, (m, a, css, b) =>
			a + css.replace(/url\(\s*(['"]?)(\/[^'")]+)\1\s*\)/g, (mm, qq, u) => {
				const mapped = mapUrl(u);
				return mapped ? `url(${qq}${mapped}${qq})` : mm;
			}) + b);
		// 3) JSON s escapovanými cestami ("\/nabidka-nemovitosti?…") — markery panoramatu apod.
		html = html.replace(/"(\\\/[^"\\]*(?:\\\/[^"\\]*)*)"/g, (m, u) => {
			const mapped = mapUrl(u.replace(/\\\//g, '/'));
			return mapped ? '"' + mapped.replace(/\//g, '\\/') + '"' : m;
		});
		return html;
	}
	return { mapUrl, rewriteHtml, pageDir, dataSlug };
}
