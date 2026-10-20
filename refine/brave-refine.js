/* Brave Development — UI refinement layer (JS)
   Jen chování prezentace, žádná nová funkce:
   1) chytrá hlavička — schová se při scrollu dolů, vrátí při scrollu nahoru,
      u horního okraje je vždy vidět; bez blikání díky prahům a rAF,
   2) třídy rf-nav-hidden / rf-nav-scrolled na <html> — z nich CSS
      odvozuje --rf-nav-offset pro sticky prvky (filtr bytů).
   Načítá se s defer po bundlu šablony (jQuery + UIkit už existují). */
(function () {
	'use strict';

	var root = document.documentElement;
	if (root.classList.contains('refine-off')) return;
	root.classList.add('rf-on');

	function ready(fn) {
		if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
		else fn();
	}

	/* ---------------------------------------------------------------- *
	 * 1) Chytrá hlavička
	 * ---------------------------------------------------------------- */
	function smartHeader() {
		var bar = document.querySelector('header section.topBar');
		if (!bar || bar.hasAttribute('data-rf-header')) return;
		bar.setAttribute('data-rf-header', '');

		// UIkit sticky (show-on-up) nahrazujeme — přepínal position a
		// vkládal placeholder, což se s vlastním chováním pere.
		try {
			var sticky = window.UIkit && UIkit.getComponent(bar, 'sticky');
			if (sticky) sticky.$destroy();
		} catch (e) {}
		bar.removeAttribute('data-uk-sticky');
		bar.removeAttribute('uk-sticky');
		bar.classList.remove('uk-sticky', 'uk-sticky-fixed', 'uk-active', 'uk-animation-slide-top', 'uk-sticky-below');
		['top', 'width', 'position', 'left', 'right'].forEach(function (p) { bar.style.removeProperty(p); });
		var ph = bar.parentNode && bar.parentNode.querySelector('.uk-sticky-placeholder');
		if (ph) ph.remove();

		var DOWN = 14; // px souvislého scrollu dolů, než se schová
		var UP = 10; // px souvislého scrollu nahoru, než se vrátí
		var lastY = Math.max(0, window.scrollY);
		var acc = 0;
		var hidden = false;
		var scrolled = null;
		var ticking = false;
		var headerH = bar.offsetHeight || 72;

		function setHidden(v) {
			if (v === hidden) return;
			hidden = v;
			root.classList.toggle('rf-nav-hidden', v);
		}

		function setScrolled(v) {
			if (v === scrolled) return;
			scrolled = v;
			root.classList.toggle('rf-nav-scrolled', v);
		}

		// Kdy hlavičku neschovávat: otevřený dropdown/menu, fokus z klávesnice uvnitř
		function locked() {
			var a = document.activeElement;
			if (a && a !== document.body && bar.contains(a) && a.matches(':focus-visible')) return true;
			if (bar.querySelector('.uk-drop.uk-open, .uk-dropdown.uk-open')) return true;
			if (document.querySelector('.uk-offcanvas.uk-open')) return true;
			return false;
		}

		function update() {
			ticking = false;
			var y = Math.max(0, window.scrollY);
			var dy = y - lastY;
			lastY = y;
			setScrolled(y > 4);

			// U horního okraje vždy vidět (a neřešit odraz/overscroll)
			if (y <= headerH) {
				acc = 0;
				setHidden(false);
				return;
			}
			if (locked()) {
				acc = 0;
				setHidden(false);
				return;
			}
			if (dy === 0) return;
			// Změna směru vynuluje akumulaci → drobné pohyby kolečkem nepřepínají
			if ((dy > 0 && acc < 0) || (dy < 0 && acc > 0)) acc = 0;
			acc += dy;
			if (acc > DOWN) setHidden(true);
			else if (acc < -UP) setHidden(false);
		}

		function onScroll() {
			if (!ticking) {
				ticking = true;
				window.requestAnimationFrame(update);
			}
		}

		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', function () {
			headerH = bar.offsetHeight || headerH;
			onScroll();
		}, { passive: true });

		// Tab do hlavičky (klávesnice) ji vždy ukáže
		bar.addEventListener('focusin', function () {
			acc = 0;
			setHidden(false);
		});

		update();
	}

	/* ---------------------------------------------------------------- *
	 * 3) Úpravy podle produktového auditu (28. 9. 2026) — doplňky prezentace
	 *    nad stávajícími daty stránky; nic se nevymýšlí, jen přeskupuje.
	 * ---------------------------------------------------------------- */
	var mqMobile = window.matchMedia('(max-width: 767px)');
	var mqSearch = window.matchMedia('(max-width: 639px)'); // šablona pod 640 px vyhledávání skrývá
	var BASE = window.__BRAVE_BASE || '';
	function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; }
	function phone() { var a = document.querySelector('a[href^="tel:"]'); return a ? { href: a.getAttribute('href'), text: a.textContent.trim() || a.getAttribute('href').slice(4) } : null; }
	function onMq(fn) { mqMobile.addEventListener ? mqMobile.addEventListener('change', fn) : mqMobile.addListener(fn); }
	var ICON = {
		tel: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
		list: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4M9 9h.01M15 9h.01M9 13h.01M15 13h.01"/></svg>',
		cal: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v14H4zM4 10h16M8 3v4M16 3v4"/></svg>'
	};

	// Mobilní hero: vyhledávání ze šablony je na mobilu skryté — přesuneme ho pod hero
	function heroSearch() {
		var hero = document.querySelector('section.panoramaHero');
		var form = hero && hero.querySelector('.panoramaHero__quickSearch');
		if (!form || document.querySelector('.rfHeroSearch')) return;
		var home = form.parentNode, next = form.nextSibling;
		// třída panoramaHero: styly vyhledávání šablony jsou vázané na section.panoramaHero
		var box = el('section', 'panoramaHero rfHeroSearch', '<p class="rfHeroSearch__title">Najděte svůj byt</p>');
		box.setAttribute('aria-label', 'Rychlé vyhledávání bytů');
		hero.parentNode.insertBefore(box, hero.nextSibling);
		function place() {
			if (mqSearch.matches) { if (form.parentNode !== box) box.appendChild(form); }
			else if (form.parentNode !== home) home.insertBefore(form, next);
		}
		place();
		mqSearch.addEventListener ? mqSearch.addEventListener('change', place) : mqSearch.addListener(place);
	}

	// Sticky mobilní lišta + CTA a telefon v mobilním menu
	function mobileActions() {
		var tel = phone();
		var offer = BASE + '/nabidka-nemovitosti/';
		// Prohlídka: poptávkový formulář na stránce (detail bytu, kontakty), jinak kontakty
		var form = document.querySelector('section.brokerOffer form, form[id^="frm-generatedForm-contact"]');
		var visit = form ? '#' + (form.id || (form.id = 'rf-visit-form')) : BASE + '/kontakty/#frm-generatedForm-contact-form';
		if (!document.querySelector('.rfMobileBar')) {
			var bar = el('nav', 'rfMobileBar');
			bar.setAttribute('aria-label', 'Rychlé akce');
			bar.innerHTML = (tel ? '<a href="' + tel.href + '">' + ICON.tel + 'Zavolat</a>' : '') +
				'<a class="is-main" href="' + offer + '">' + ICON.list + 'Nabídka</a>' +
				'<a href="' + visit + '">' + ICON.cal + 'Prohlídka</a>';
			if (!tel) bar.style.gridTemplateColumns = '1fr 1fr';
			document.body.appendChild(bar);
			root.classList.add('rf-has-mobilebar');
		}
		var oc = document.querySelector('#offcanvas-nav .uk-offcanvas-bar');
		if (oc && !oc.querySelector('.rfMenuCta')) {
			var box = el('div', 'rfMenuCta', '<a class="rfMenuCta__main" href="' + offer + '">Volné byty a ceník</a>' +
				(tel ? '<a class="rfMenuCta__tel" href="' + tel.href + '">' + ICON.tel.replace('<svg', '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"') + tel.text + '</a>' : ''));
			var nav = oc.querySelector('.offcanvasMainNav');
			nav ? nav.parentNode.insertBefore(box, nav) : oc.appendChild(box);
		}
	}

	// Vizualizace domu: nápověda „klikněte na patro“, na mobilu vodorovný posun
	function houseViz() {
		document.querySelectorAll('section.vizualize .maping').forEach(function (m) {
			if (m.parentNode.classList.contains('rfVizScroll')) return;
			var hint = el('p', 'rfVizHint', '<span class="t-mouse">Najeďte na patro a kliknutím zobrazíte jeho byty</span><span class="t-touch">Klepněte na patro — zobrazí se jeho byty</span>');
			var wrap = el('div', 'rfVizScroll');
			m.parentNode.insertBefore(hint, m);
			m.parentNode.insertBefore(wrap, m);
			wrap.appendChild(m);
			function center() { if (mqMobile.matches) wrap.scrollLeft = (wrap.scrollWidth - wrap.clientWidth) / 2; }
			// image mapa šablony přepočítá oblasti podle nové šířky
			window.dispatchEvent(new Event('resize'));
			setTimeout(center, 300);
			window.addEventListener('load', center);
		});
	}

	// Vizualizace domu: pulzující obrys budov (obálka jejich pater z image mapy) — na první
	// pohled je vidět, že je obrázek klikací. Při najetí myší obrys ustoupí, po odjetí pulzuje dál.
	function houseOutline() {
		document.querySelectorAll('section.vizualize .maping').forEach(function (m) {
			var img = m.querySelector('img[usemap]');
			var map = img && document.querySelector('map[name="' + img.getAttribute('usemap').replace('#', '') + '"]');
			if (!map) return;
			// obrys může dodat už HTML (silueta domu z projektu) — pak jen obsluha najetí
			if (!m.querySelector('.rfHouseOutline')) build();
			function build() {
			var W = +img.getAttribute('width') || img.naturalWidth, H = +img.getAttribute('height') || img.naturalHeight;
			if (!W || !H) return;
			var boxes = {};
			map.querySelectorAll('area').forEach(function (a) {
				var key = ((a.getAttribute('href') || '').match(/dum-([a-z0-9]+)-/i) || [])[1] || 'x';
				var c = (a.getAttribute('coords') || '').split(',').map(Number);
				if (c.length < 4) return;
				var b = boxes[key] = boxes[key] || { x1: Infinity, y1: Infinity, x2: -Infinity, y2: -Infinity };
				for (var i = 0; i + 1 < c.length; i += 2) {
					b.x1 = Math.min(b.x1, c[i]); b.x2 = Math.max(b.x2, c[i]);
					b.y1 = Math.min(b.y1, c[i + 1]); b.y2 = Math.max(b.y2, c[i + 1]);
				}
			});
			var rects = Object.keys(boxes).map(function (k, i) {
				var b = boxes[k];
				return '<rect x="' + b.x1 + '" y="' + b.y1 + '" width="' + (b.x2 - b.x1) + '" height="' + (b.y2 - b.y1) + '" rx="6" style="animation-delay:' + (i * 0.35) + 's"/>';
			}).join('');
			if (!rects) return;
			m.insertAdjacentHTML('beforeend', '<svg class="rfHouseOutline" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none" aria-hidden="true">' + rects + '</svg>');
			}
			// Při najetí obrys ustoupí zvýraznění pater šablony, po odjetí zase pulzuje
			var t;
			function off() { clearTimeout(t); m.classList.add('rf-touched'); }
			function on() { clearTimeout(t); m.classList.remove('rf-touched'); }
			m.addEventListener('mouseenter', off);
			m.addEventListener('mouseleave', on);
			m.addEventListener('focusin', off);
			m.addEventListener('focusout', on);
			// dotyk nemá „odjetí“: obrys se vrátí po chvíli bez dotyku
			m.addEventListener('touchstart', function () { off(); t = setTimeout(on, 4000); }, { passive: true });
		});
	}

	// Přepínač jazyka: odkaz „#“ je jen otevírač nabídky → sémanticky tlačítko
	function langToggle() {
		document.querySelectorAll('a.menuLink.language[href="#"]').forEach(function (a) {
			a.setAttribute('role', 'button');
			a.setAttribute('aria-haspopup', 'true');
			a.setAttribute('aria-label', 'Jazyk: ' + a.textContent.trim());
			a.addEventListener('click', function (e) { e.preventDefault(); });
		});
	}

	// Čísla: desetinná čárka (šablona míchá „32.4 m²“ a „32,4 m²“)
	var DEC_TEST = /\d\.\d+\s*(m|%|km|Kč)/;
	var DEC = /(\d)\.(\d+)(?=\s*(m|%|km|Kč))/g;
	function decimals() {
		var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
			acceptNode: function (n) {
				return DEC_TEST.test(n.nodeValue) && !n.parentNode.closest('script,style,textarea,code') ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
			}
		});
		var list = [];
		while (w.nextNode()) list.push(w.currentNode);
		list.forEach(function (n) { n.nodeValue = n.nodeValue.replace(DEC, '$1,$2'); });
	}

	/* ---------------------------------------------------------------- *
	 * 4) Homepage pro prezentaci šablony: video v hero, panoráma jako
	 *    samostatná sekce před aktualitami, výběr budovy ve vyhledávání,
	 *    kontaktní formulář s makléřem nad patičkou.
	 * ---------------------------------------------------------------- */
	var MEDIA = BASE + '/refine/media/';
	var MEDIA_V = '?v=3'; // zvýšit při výměně videa (mezipaměť prohlížeče)

	// Hero: smyčka videa místo panoramatu; text i vyhledávání se přesunou do nového hero
	function videoHero() {
		var pano = document.querySelector('section.panoramaHero[data-panorama-hero]');
		if (!pano || document.querySelector('.rfVideoHero')) return;
		var hero = el('section', 'panoramaHero rfVideoHero'); // styly textu a vyhledávání šablony
		var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		var src = window.matchMedia('(max-width: 959px)').matches ? 'halkova-loop-1080.mp4' : 'halkova-loop-1920.mp4';
		hero.innerHTML = '<video class="rfVideoHero__video" muted playsinline loop preload="auto" poster="' + MEDIA + 'halkova-loop-poster.jpg' + MEDIA_V + '"' + (reduce ? '' : ' autoplay') +
			' aria-hidden="true"><source src="' + MEDIA + src + MEDIA_V + '" type="video/mp4"></video><div class="panoramaHero__shade rfVideoHero__shade"></div>';
		['.panoramaHero__copy', '.panoramaHero__quickSearch'].forEach(function (s) { var n = pano.querySelector(s); if (n) hero.appendChild(n); });
		pano.parentNode.insertBefore(hero, pano);
		var v = hero.querySelector('video');
		if (!reduce) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }

		// Panoráma → do sekce Lokalita místo mapy (body zájmu ukazují, co je v okolí)
		var mapBox = document.querySelector('section.homepageInteractive .mapWrapper');
		if (mapBox) {
			mapBox.classList.add('rfPanoBox');
			Array.prototype.forEach.call(mapBox.children, function (c) { if (c.matches('[data-map-id]')) c.hidden = true; }); // mapa se pak ani nenačte
			mapBox.appendChild(pano);
		} else {
			var news = document.querySelector('section.newsExtract, section.footerMain');
			if (news) news.parentNode.insertBefore(pano, news);
		}
		window.dispatchEvent(new Event('resize'));
	}

	// Vyhledávání: výběr budovy (šablona filtruje jen podle pater → budova = všechna její patra)
	function buildingFilter() {
		var form = document.querySelector('.panoramaHero__quickSearch');
		var floorSel = form && form.querySelector('select[name="quickFloor[]"]');
		if (!floorSel || form.querySelector('[data-rf-building]')) return;
		var byB = {};
		Array.prototype.forEach.call(floorSel.options, function (o) {
			var m = o.text.match(/^(?:Dům|Budova)\s+([A-Z0-9]+)/i);
			if (m) (byB[m[1]] = byB[m[1]] || []).push(o);
		});
		var names = Object.keys(byB);
		if (names.length < 2) return;
		var item = el('label', 'panoramaHero__quickSearchItem is-enhanced');
		item.setAttribute('data-rf-building', '');
		// bez <select>: šablona vylepšuje všechny selecty ve vyhledávání a zdvojila by menu
		item.innerHTML = '<span>Budova</span>' +
			'<button type="button" class="panoramaHero__quickSearchTrigger" aria-expanded="false">Vše</button><div class="panoramaHero__quickSearchMenu" role="listbox"></div>';
		form.insertBefore(item, form.querySelector('.panoramaHero__quickSearchItem'));
		var trig = item.querySelector('button'), menu = item.querySelector('.panoramaHero__quickSearchMenu');
		var on = {};
		names.forEach(function (n) {
			var b = el('button', 'panoramaHero__quickSearchOption');
			b.type = 'button'; b.setAttribute('role', 'option'); b.textContent = 'Budova ' + n;
			b.addEventListener('click', function (e) { e.stopPropagation(); on[n] = !on[n]; sync(); });
			menu.appendChild(b);
		});
		function picked() { return names.filter(function (n) { return on[n]; }); }
		function sync() {
			var p = picked();
			trig.textContent = p.length ? (p.length === 1 ? 'Budova ' + p[0] : p.length + ' vybráno') : 'Vše';
			Array.prototype.forEach.call(menu.children, function (b, i) { var s = !!on[names[i]]; b.classList.toggle('is-selected', s); b.setAttribute('aria-selected', String(s)); });
			// v nabídce pater nech jen patra vybraných budov
			var floorMenu = floorSel.closest('.panoramaHero__quickSearchItem').querySelector('.panoramaHero__quickSearchMenu');
			if (floorMenu) Array.prototype.forEach.call(floorMenu.children, function (b) {
				var m = b.textContent.match(/^(?:Dům|Budova)\s+([A-Z0-9]+)/i);
				b.hidden = !!(p.length && m && p.indexOf(m[1]) < 0);
			});
		}
		trig.addEventListener('click', function (e) {
			e.stopPropagation();
			var open = !menu.classList.contains('is-open');
			form.querySelectorAll('.panoramaHero__quickSearchMenu').forEach(function (m) { m.classList.remove('is-open'); });
			form.querySelectorAll('.panoramaHero__quickSearchTrigger').forEach(function (t) { t.setAttribute('aria-expanded', 'false'); });
			menu.classList.toggle('is-open', open);
			trig.setAttribute('aria-expanded', String(open));
		});
		document.addEventListener('click', function (e) { if (!item.contains(e.target)) { menu.classList.remove('is-open'); trig.setAttribute('aria-expanded', 'false'); } });
		// Odeslání: vybraná budova bez zvoleného patra = všechna patra budovy
		form.addEventListener('submit', function () {
			var p = picked();
			form.querySelectorAll('input[data-rf-auto]').forEach(function (i) { i.remove(); });
			var chosen = Array.prototype.filter.call(floorSel.options, function (o) { return o.selected; });
			if (p.length && !chosen.length) {
				p.forEach(function (n) { byB[n].forEach(function (o) {
					var h = el('input'); h.type = 'hidden'; h.name = 'quickFloor[]'; h.value = o.value; h.setAttribute('data-rf-auto', ''); form.appendChild(h);
				}); });
			} else if (p.length) {
				chosen.forEach(function (o) { var m = o.text.match(/^(?:Dům|Budova)\s+([A-Z0-9]+)/i); if (m && p.indexOf(m[1]) < 0) o.selected = false; });
			}
		});
		sync();
	}

	// Kontaktní formulář s makléřem nad patičkou homepage (formulář i kontakt ze stránky Kontakty)
	function leadBlock() {
		if (!document.querySelector('.rfVideoHero') || document.querySelector('.rfLead')) return;
		var foot = document.querySelector('section.footerMain');
		if (!foot || !window.fetch || !window.DOMParser) return;
		fetch(BASE + '/kontakty/', { credentials: 'same-origin' }).then(function (r) { return r.ok ? r.text() : Promise.reject(r.status); }).then(function (html) {
			var doc = new DOMParser().parseFromString(html, 'text/html');
			var sec = doc.querySelector('section.form');
			var form = sec && sec.querySelector('form[id^="frm-generatedForm-contact"]');
			if (!form) return;
			var box = doc.querySelector('section.topContact .entityBox');
			var photo = doc.querySelector('section.topContact img[src*="upload"]');
			var name = box && box.querySelector('h3'), role = box && box.querySelector('.subtitle');
			var tel = box && box.querySelector('a[href^="tel:"]'), mail = box && box.querySelector('a[href^="mailto:"]');
			var t = function (n) { return n ? n.textContent.trim() : ''; };
			var card = '<aside class="rfLead__card" aria-label="Váš makléř">' +
				(photo ? '<img src="' + photo.getAttribute('src') + '" alt="' + t(name) + '" loading="lazy">' : '') +
				'<div><p class="rfLead__role">' + t(role) + '</p><p class="rfLead__name">' + t(name) + '</p>' +
				(tel ? '<a href="' + tel.getAttribute('href') + '">' + ICON.tel.replace('<svg', '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"') + t(tel) + '</a>' : '') +
				(mail ? '<a href="' + mail.getAttribute('href') + '">' + t(mail) + '</a>' : '') + '</div></aside>';
			// sekce šablony (stejné styly formuláře); místo fotky domu karta makléře
			sec.classList.add('rfLead');
			sec.id = 'rf-lead';
			var pack = sec.querySelector('.formPack');
			if (pack) { pack.querySelector('h2').textContent = 'Domluvte si prohlídku'; var pp = pack.querySelector('h2 + p'); if (pp) pp.textContent = 'Napište nám a ozveme se vám s termínem prohlídky i odpověďmi na vaše otázky'; }
			var cols = sec.querySelectorAll('.content > div > div'); // .uk-grid doplňuje až UIkit za běhu
			if (cols[1]) cols[1].innerHTML = card; else if (pack) pack.insertAdjacentHTML('afterend', card);
			var node = document.importNode(sec, true);
			foot.parentNode.insertBefore(node, foot);
			// UIkit grid + validace formuláře šablony na nově vloženém obsahu
			try { if (window.UIkit) UIkit.update(node); } catch (e) {}
			try { if (window.Nette && Nette.initForm) Nette.initForm(node.querySelector('form')); } catch (e) {}
			// Mobilní lišta „Prohlídka“ → tento formulář
			var visit = document.querySelector('.rfMobileBar a[href*="kontakty"]');
			if (visit) visit.setAttribute('href', '#rf-lead');
		}).catch(function () {});
	}

	// Body lokality: místo fajfek ikony stejné sady jako piny v panoramatu
	function localityIcons() {
		document.querySelectorAll('section.homepageInteractive .editableBlock li').forEach(function (li) {
			if (li.querySelector('.rfLocIcon')) return;
			var t = li.textContent, ic = /sport/i.test(t) ? 'mdi-basketball' : /ZŠ|MŠ|škol/i.test(t) ? 'mdi-school-outline' : /restaur/i.test(t) ? 'mdi-silverware-fork-knife' :
				/lékár|obchod/i.test(t) ? 'mdi-cart-outline' : /MHD|zastáv/i.test(t) ? 'mdi-bus-stop' : /park|les|příro/i.test(t) ? 'mdi-tree-outline' : 'mdi-map-marker-outline';
			li.classList.add('rfLocItem');
			li.insertAdjacentHTML('afterbegin', '<i class="mdi ' + ic + ' rfLocIcon" aria-hidden="true"></i>');
		});
	}

	// Výpis bytů: fotka domu nahoře přes celou šířku; po odscrollování ji v levém panelu
	// nahradí zmenšená fotka (místo schématu), která zvýrazní patro karty pod myší.
	var slug = function (s) { return String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); };
	function listingViz() {
		var grid = document.querySelector('.unitsLayout .layoutGrid');
		var viz = grid && grid.querySelector(':scope > .layoutViz');
		var side = grid && grid.querySelector(':scope > .layoutSide');
		var img = viz && viz.querySelector('.maping img[usemap]');
		var map = img && document.querySelector('map[name="' + img.getAttribute('usemap').replace('#', '') + '"]');
		if (!map || !side || side.querySelector('.rfMiniViz')) return;
		root.classList.add('rf-listing-viz');
		var W = +img.getAttribute('width') || 1600, H = +img.getAttribute('height') || 800;
		var floors = Array.prototype.map.call(map.querySelectorAll('area'), function (a) {
			var href = a.getAttribute('href') || '';
			var c = (a.getAttribute('coords') || '').split(',').map(Number);
			var pts = [];
			for (var i = 0; i + 1 < c.length; i += 2) pts.push(c[i] + ',' + c[i + 1]);
			return { key: (href.match(/\/([^/]+)\/?$/) || [])[1] || '', href: href, pts: pts.join(' '), title: a.getAttribute('title') || a.getAttribute('alt') || '' };
		}).filter(function (f) { return f.pts; });
		var box = el('div', 'rfMiniViz');
		box.innerHTML = '<p class="rfMiniViz__label">Poloha v domě</p><div class="rfMiniViz__frame"><img src="' + (img.currentSrc || img.src) + '" alt="" width="' + W + '" height="' + H + '">' +
			'<svg viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none">' + floors.map(function (f) {
				return '<a href="' + f.href + '" data-floor="' + f.key + '" aria-label="' + (f.title || f.key) + '"><polygon points="' + f.pts + '"/></a>';
			}).join('') + '</svg></div>';
		var wire = side.querySelector('.wireframe');
		side.insertBefore(box, wire ? wire.nextSibling : side.querySelector('.floorPreview'));
		// zvýraznění souběžně s kartami / řádky výpisu
		var cur = null;
		function mark(key) {
			if (key === cur) return;
			cur = key;
			box.querySelectorAll('a[data-floor]').forEach(function (a) { a.classList.toggle('is-on', a.getAttribute('data-floor') === key); });
		}
		document.addEventListener('mouseover', function (e) {
			var c = e.target.closest && e.target.closest('[data-unit-floor-name]');
			if (c) mark(slug(c.getAttribute('data-unit-floor-name')));
			else if (!(e.target.closest && e.target.closest('.rfMiniViz'))) mark(null);
		});
		// zmenšená fotka až když velká odjede z obrazovky
		if ('IntersectionObserver' in window) {
			new IntersectionObserver(function (en) { root.classList.toggle('rf-mini-on', !en[0].isIntersecting); }, { rootMargin: '-35% 0px 0px 0px' }).observe(viz);
		} else root.classList.add('rf-mini-on');
	}

	function audit() {
		[videoHero, localityIcons, buildingFilter, heroSearch, mobileActions, houseViz, houseOutline, listingViz, langToggle, decimals, leadBlock].forEach(function (fn) {
			try { fn(); } catch (e) { if (window.console) console.warn('brave-refine:', e); }
		});
		// výpis jednotek se dotahuje AJAXem (filtr, stránkování) → čísla i v nových dlaždicích
		if ('MutationObserver' in window) {
			var t;
			new MutationObserver(function () { clearTimeout(t); t = setTimeout(decimals, 150); })
				.observe(document.body, { childList: true, subtree: true });
		}
	}

	ready(function () {
		// UIkit připojuje komponenty při parsování / DOMContentLoaded — sticky
		// rušíme až po něm, jinak by se znovu připojil.
		setTimeout(smartHeader, 0);
		window.addEventListener('load', smartHeader);
		audit();
	});
})();
