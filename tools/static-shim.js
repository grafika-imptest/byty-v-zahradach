/* Statický shim pro náhled na GitHub Pages — NENÍ součástí UI úprav.
   Živý web běží na PHP/Nette; tady jen zařizuje, aby kopie fungovala bez serveru:
   - AJAX na kořenové cesty míří pod BASE, data map z uložených JSON, signály (?do=…) na prázdnou odpověď,
   - cookie lišta se dá zavřít (pamatuje si to localStorage),
   - klasické POST formuláře se neodešlou (server tu není) — ukáže se krátké upozornění,
   - přepínač Původní / Upravená / Upravená V2 (localStorage + ?puvodni / ?upravene / ?v2). */
(function () {
	var B = '__BASE__';
	window.__BRAVE_BASE = B;

	var store = { get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
		set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };
	var qs = location.search;
	// Klientský web: vždy upravená verze (přepínač šablony se nezobrazuje, ?puvodni nic nedělá)
	store.set('brave-refine', 'on');
	// „Upravená V2“ (/v3/) je v přepínači skrytá — stránka zůstává jen na přímé adrese.
	// Zpět ji zapne SHOW_V3 = true (přesměrování homepage + tlačítko).
	var SHOW_V3 = false;
	var path = location.pathname, onV3 = path.indexOf(B + '/v3/') === 0;
	if (SHOW_V3 && /[?&]v2\b/.test(qs)) store.set('brave-refine', 'v3');
	if (SHOW_V3 && onV3) store.set('brave-refine', 'v3');
	var mode = onV3 ? 'v3' : store.get('brave-refine') || 'on';
	if (mode === 'v3' && !SHOW_V3 && !onV3) mode = 'on';
	// homepage v režimu „Upravená V2“ → nový návrh pod /v3/ (podstránky zůstávají upravené)
	if (SHOW_V3 && mode === 'v3' && (path === B + '/' || path === B + '/index.html')) { location.replace(B + '/v3/'); return; }
	var off = mode === 'off';
	window.__BRAVE_REFINE_OFF = off;
	var html = document.documentElement;
	html.classList.add('is-static-preview');
	if (off) html.classList.add('refine-off');
	if (store.get('brave-static-cookie')) html.classList.add('static-cookie-ok');

	function slug(s) {
		return s.replace(/^\//, '').replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase() || 'root';
	}
	function map(u) {
		if (typeof u !== 'string') return u;
		var v = u;
		if (v.indexOf(location.origin) === 0) v = v.slice(location.origin.length);
		if (v.indexOf('https://demo.bravedevelopment.cz') === 0) v = v.slice(33) || '/';
		if (v.charAt(0) === '?') v = location.pathname + v;
		if (v.charAt(0) !== '/' || v.charAt(1) === '/') return u;
		if (/[?&]do=map-[a-z0-9]+-(options|markers|lines)/i.test(v)) {
			if (v.indexOf(B + '/') === 0) v = v.slice(B.length) || '/';
			return B + '/_data/' + slug(v) + '.json';
		}
		if (/[?&]_?do=/.test(v)) return B + '/_data/noop.json';
		if (v.indexOf(B + '/') === 0 || v === B) return u;
		return B + v;
	}

	var open = XMLHttpRequest.prototype.open;
	XMLHttpRequest.prototype.open = function (method, url) {
		var mapped = map(url);
		var args = Array.prototype.slice.call(arguments);
		if (mapped !== url) {
			args[1] = mapped;
			// GitHub Pages na POST odpoví 405 — u statických odpovědí stačí GET
			if (/\/_data\//.test(mapped)) args[0] = 'GET';
		}
		return open.apply(this, args);
	};
	if (window.fetch) {
		var f = window.fetch;
		window.fetch = function (input, init) {
			if (typeof input === 'string') {
				var m = map(input);
				if (m !== input && /\/_data\//.test(m) && init) init = Object.assign({}, init, { method: 'GET', body: undefined });
				input = m;
			}
			return f.call(this, input, init);
		};
	}

	function toast(text) {
		var t = document.createElement('div');
		t.className = 'staticToast';
		t.setAttribute('role', 'status');
		t.textContent = text;
		document.body.appendChild(t);
		setTimeout(function () { t.classList.add('is-in'); }, 10);
		setTimeout(function () { t.classList.remove('is-in'); setTimeout(function () { t.remove(); }, 400); }, 3600);
	}

	document.addEventListener('submit', function (e) {
		var form = e.target;
		if (!form || form.tagName !== 'FORM') return;
		if (form.id === 'frm-cookieBar-settingsForm') {
			e.preventDefault();
			e.stopImmediatePropagation();
			store.set('brave-static-cookie', '1');
			html.classList.add('static-cookie-ok');
			return;
		}
		// Bublá až sem, takže validace Nette (na formuláři) už proběhla a případně
		// odeslání zastavila — upozornění jen u platně vyplněného formuláře.
		if ((form.method || '').toLowerCase() === 'post' && !form.classList.contains('ajax')) {
			if (!e.defaultPrevented) {
				e.preventDefault();
				toast('Statický náhled: formulář se neodesílá, na živém webu proběhne odeslání.');
			}
		}
	});
	document.addEventListener('submit', function (e) {
		var form = e.target;
		if (form && form.classList && form.classList.contains('ajax') && /reoUnit(Favorite|Comparison)/.test(form.id || '')) {
			toast('Statický náhled: oblíbené a porovnání ukládá server, zde se neukládají.');
		}
	}, true);
	// Cookie lišta: tlačítka jsou submit inputy uvnitř ajax formuláře
	document.addEventListener('click', function (e) {
		var b = e.target && e.target.closest && e.target.closest('#frm-cookieBar-settingsForm [type=submit]');
		if (!b) return;
		e.preventDefault();
		e.stopImmediatePropagation();
		store.set('brave-static-cookie', '1');
		html.classList.add('static-cookie-ok');
	}, true);

	var css = document.createElement('style');
	css.textContent =
		'html.static-cookie-ok .cookie-bar-modal{display:none!important}' +
		'.staticToast{position:fixed;left:50%;bottom:24px;z-index:100000;transform:translate(-50%,12px);opacity:0;max-width:calc(100% - 32px);' +
		'background:#111;color:#fff;font:500 13px/1.45 Poppins,system-ui,sans-serif;padding:12px 18px;border-radius:8px;box-shadow:0 10px 30px rgb(0 0 0/.25);transition:.3s}' +
		'.staticToast.is-in{opacity:1;transform:translate(-50%,0)}' +
		'.refineSwitch{position:fixed;left:16px;bottom:16px;z-index:9990;display:flex;gap:2px;padding:3px;border-radius:999px;background:rgb(17 17 17/.82);' +
		'backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);font:600 11px/1 Poppins,system-ui,sans-serif;letter-spacing:.02em;box-shadow:0 6px 20px rgb(0 0 0/.18)}' +
		'.refineSwitch button{all:unset;cursor:pointer;color:rgb(255 255 255/.7);padding:7px 11px;border-radius:999px;transition:.2s}' +
		'.refineSwitch button[aria-pressed=true]{background:#fff;color:#111}' +
		'.refineSwitch button:focus-visible{outline:2px solid #3cd070;outline-offset:2px}' +
		'.refineSwitch button{position:relative}' +
		'.refineSwitch__tip{position:absolute;left:0;bottom:calc(100% + 12px);width:260px;padding:12px 14px;background:#111;color:rgb(255 255 255/.78);' +
		'font:400 12px/1.5 system-ui,sans-serif;letter-spacing:0;white-space:normal;text-align:left;border-radius:8px;box-shadow:0 10px 30px rgb(0 0 0/.25);' +
		'opacity:0;visibility:hidden;transform:translateY(4px);transition:opacity .18s,transform .18s,visibility 0s .18s;pointer-events:none}' +
		'.refineSwitch__tip b{display:block;margin-bottom:4px;color:#fff;font-weight:600;font-size:12.5px}' +
		'.refineSwitch button:hover .refineSwitch__tip,.refineSwitch button:focus-visible .refineSwitch__tip{opacity:1;visibility:visible;transform:none;transition-delay:.25s,.25s,0s}' +
		'@media (hover:none){.refineSwitch__tip{display:none}}' +
		'@media print{.refineSwitch{display:none}}';
	document.head.appendChild(css);

	document.addEventListener('DOMContentLoaded', function () {
		var s = document.createElement('div');
		s.className = 'refineSwitch';
		s.setAttribute('role', 'group');
		s.setAttribute('aria-label', 'Verze náhledu');
		// Krátký popis každé verze v tooltipu (hover i fokus klávesnicí)
		var tips = {
			off: ['Původní šablona', 'Web přesně tak, jak běží na demo.bravedevelopment.cz. Beze změn — slouží ke srovnání.'],
			on: ['Upravená', 'Stejný obsah i funkce jako původní, jen doladěný vzhled: kompaktní hlavička, která se při scrollu schová, širší rozvržení, čistší písmo a mezery. Platí pro celý web.'],
			v3: ['Upravená V2', 'Nový návrh úvodní stránky: panoráma přes celou obrazovku s vyhledávačem, ostré rohy, nové písmo a texty. Zatím jen homepage — podstránky se zobrazí v Upravené verzi.']
		};
		function btn(v, label, on) {
			return '<button type="button" data-v="' + v + '" aria-pressed="' + on + '" aria-describedby="rs-tip-' + v + '">' + label +
				'<span class="refineSwitch__tip" role="tooltip" id="rs-tip-' + v + '"><b>' + tips[v][0] + '</b>' + tips[v][1] + '</span></button>';
		}
		s.innerHTML = btn('off', 'Původní', off) + btn('on', 'Upravená', mode === 'on') + (SHOW_V3 || onV3 ? btn('v3', 'Upravená V2', mode === 'v3') : '');
		s.addEventListener('click', function (e) {
			var b = e.target.closest('button');
			if (!b || b.getAttribute('aria-pressed') === 'true') return;
			var v = b.getAttribute('data-v');
			store.set('brave-refine', v);
			if (v === 'v3') location.href = B + '/v3/';
			else if (onV3) location.href = B + '/';
			else location.reload();
		});
		// klientský web: přepínač verzí šablony se nevkládá
	});
})();
