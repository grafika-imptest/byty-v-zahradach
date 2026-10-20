/* Byty v zahradách — chování projektu: střídání vizualizací v úvodu, filtr ve výběru bytů. */
(function () {
	'use strict';
	var $ = function (s, c) { return (c || document).querySelector(s); };
	var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

	/* Úvod: vizualizace se střídají (do dodání videa) */
	(function () {
		var box = $('[data-rf-slides]');
		if (!box) return;
		var slides = $$('.rfSlide', box), dots = $$('.rfSlideDots button'), i = 0, t;
		var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		function show(n) {
			i = (n + slides.length) % slides.length;
			slides.forEach(function (s, k) { s.classList.toggle('is-active', k === i); });
			dots.forEach(function (d, k) { d.classList.toggle('is-active', k === i); d.setAttribute('aria-selected', String(k === i)); });
		}
		function play() { clearInterval(t); if (!reduce) t = setInterval(function () { show(i + 1); }, 6500); }
		dots.forEach(function (d, k) { d.addEventListener('click', function () { show(k); play(); }); });
		document.addEventListener('visibilitychange', function () { if (document.hidden) clearInterval(t); else play(); });
		play();
	})();

	/* Výběr bytů: filtr podle dispozice, podlaží, plochy a venkovního prostoru (stav v URL) */
	(function () {
		var root = $('[data-rf-filter]'), grid = $('[data-rf-units]');
		if (!root || !grid) return;
		var G = [
			{ key: 'dispozice', label: 'Dispozice', opts: [['1+kk', '1+kk'], ['2+kk', '2+kk'], ['3+kk', '3+kk']] },
			{ key: 'patro', label: 'Podlaží', opts: [['1', '1. NP'], ['2', '2. NP'], ['3', '3. NP'], ['4', '4. NP']] },
			{ key: 'plocha', label: 'Plocha', opts: [['0-35', 'do 35 m²'], ['35-45', '35–45 m²'], ['45-55', '45–55 m²'], ['55-999', 'nad 55 m²']] },
			{ key: 'venku', label: 'Venku', opts: [['balkon', 'Balkon'], ['terasa', 'Terasa'], ['zahrada', 'Zahrada']] },
		];
		var q = new URLSearchParams(location.search), sel = {};
		G.forEach(function (g) { sel[g.key] = q.getAll(g.key).concat(q.getAll(g.key + '[]')).filter(Boolean); });
		root.innerHTML = G.map(function (g) {
			return '<div class="rfFilter__group"><p class="rfFilter__label">' + g.label + '</p><div class="rfFilter__chips">' + g.opts.map(function (o) {
				return '<button type="button" class="rfChip" data-k="' + g.key + '" data-v="' + o[0] + '" aria-pressed="' + (sel[g.key].indexOf(o[0]) > -1) + '">' + o[1] + '</button>';
			}).join('') + '</div></div>';
		}).join('') + '<button type="button" class="rfFilter__reset" data-rf-reset>Zrušit filtry</button>';
		var items = $$(':scope > div', grid), count = $('[data-rf-count]'), word = $('[data-rf-count-word]'), empty = $('.rfEmpty');
		function inR(a, r) { var p = r.split('-'); return a >= +p[0] && a < +p[1]; }
		function apply() {
			var n = 0;
			items.forEach(function (it) {
				var d = it.dataset, ok =
					(!sel.dispozice.length || sel.dispozice.indexOf(d.dispo) > -1) &&
					(!sel.patro.length || sel.patro.indexOf(d.floor) > -1) &&
					(!sel.plocha.length || sel.plocha.some(function (r) { return inR(+d.area, r); })) &&
					(!sel.venku.length || sel.venku.some(function (v) { return (' ' + d.out + ' ').indexOf(' ' + v + ' ') > -1; }));
				it.hidden = !ok; if (ok) n++;
			});
			if (count) count.textContent = n;
			if (word) word.textContent = n === 1 ? 'byt' : n >= 2 && n <= 4 ? 'byty' : 'bytů';
			if (empty) empty.hidden = n > 0;
			var p = new URLSearchParams();
			G.forEach(function (g) { sel[g.key].forEach(function (v) { p.append(g.key, v); }); });
			history.replaceState(null, '', location.pathname + (p.toString() ? '?' + p : ''));
			if (window.UIkit) try { UIkit.update(grid); } catch (e) {}
		}
		root.addEventListener('click', function (e) {
			var b = e.target.closest('.rfChip');
			if (!b) return;
			var k = b.dataset.k, v = b.dataset.v, a = sel[k], at = a.indexOf(v);
			if (at > -1) a.splice(at, 1); else a.push(v);
			b.setAttribute('aria-pressed', String(at < 0));
			apply();
		});
		$$('[data-rf-reset]').forEach(function (r) {
			r.addEventListener('click', function () { G.forEach(function (g) { sel[g.key] = []; }); $$('.rfChip', root).forEach(function (c) { c.setAttribute('aria-pressed', 'false'); }); apply(); });
		});
		apply();
	})();
/* Oblíbené a porovnání — ve statickém náhledu uložené v prohlížeči (localStorage) */
	(function () {
		var K = { fav: 'bvz-fav', cmp: 'bvz-cmp' }, MAX_CMP = 4;
		function get(k) { try { return JSON.parse(localStorage.getItem(K[k]) || '[]'); } catch (e) { return []; } }
		function set(k, v) { try { localStorage.setItem(K[k], JSON.stringify(v)); } catch (e) {} }
		var dataEl = document.getElementById('rf-units'), UNITS = dataEl ? JSON.parse(dataEl.textContent) : [];
		function toast(t) {
			var el = document.querySelector('.rfToast') || document.body.appendChild(Object.assign(document.createElement('div'), { className: 'rfToast', role: 'status' }));
			el.textContent = t; el.classList.add('is-in'); clearTimeout(el._t); el._t = setTimeout(function () { el.classList.remove('is-in'); }, 2400);
		}
		function sync() {
			var fav = get('fav'), cmp = get('cmp');
			$$('.menuLink.favorite .number').forEach(function (n) { n.textContent = fav.length; });
			$$('.menuLink.comparison .number').forEach(function (n) { n.textContent = cmp.length; });
			$$('[data-rf-fav]').forEach(function (b) { var on = fav.indexOf(b.dataset.rfFav) > -1; b.classList.toggle('is-active', on); b.setAttribute('aria-pressed', String(on)); var sp = b.querySelector('span'); if (sp) sp.textContent = on ? 'V oblíbených' : 'Přidat k oblíbeným'; });
			$$('[data-rf-cmp]').forEach(function (b) { var on = cmp.indexOf(b.dataset.rfCmp) > -1; b.classList.toggle('is-active', on); b.setAttribute('aria-pressed', String(on)); var sp = b.querySelector('span'); if (sp) sp.textContent = on ? 'V porovnání' : 'Přidat do porovnání'; });
			var grid = $('[data-rf-saved="fav"]');
			if (grid) { $$(':scope > div', grid).forEach(function (c) { c.hidden = fav.indexOf(c.dataset.no) < 0; }); var e = $('.rfSavedEmpty'); if (e) e.hidden = fav.length > 0; if (window.UIkit) try { UIkit.update(grid); } catch (x) {} }
			var cw = $('[data-rf-compare]');
			if (cw) {
				var list = cmp.map(function (no) { return UNITS.filter(function (u) { return u.no === no; })[0]; }).filter(Boolean);
				var e2 = $('.rfSavedEmpty'); if (e2) e2.hidden = list.length > 0;
				var m2 = function (v) { return v ? String(v).replace('.', ',') + ' m²' : '—'; };
				var rows = [['Dispozice', function (u) { return u.dispo; }], ['Podlaží', function (u) { return u.floor + '. NP'; }], ['Plocha bytu', function (u) { return m2(u.area); }], ['Balkon', function (u) { return m2(u.balcony); }], ['Terasa', function (u) { return m2(u.terrace); }], ['Zahrada', function (u) { return m2(u.garden); }], ['Cena', function () { return 'na vyžádání'; }]];
				cw.innerHTML = list.length ? '<table class="rfCompare__table"><thead><tr><th></th>' + list.map(function (u) { return '<th scope="col"><a href="' + u.url + '"><img src="' + u.plan + '" alt="Půdorys bytu ' + u.code + '"><span>Byt ' + u.code + '</span></a><button type="button" class="rfCompare__rm" data-rf-cmp="' + u.no + '" aria-label="Odebrat byt ' + u.code + ' z porovnání">Odebrat</button></th>'; }).join('') + '</tr></thead><tbody>' + rows.map(function (r) { return '<tr><th scope="row">' + r[0] + '</th>' + list.map(function (u) { return '<td>' + r[1](u) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>' : '';
			}
		}
		document.addEventListener('click', function (e) {
			var b = e.target.closest('[data-rf-fav], [data-rf-cmp]');
			if (!b) return;
			e.preventDefault();
			var k = b.hasAttribute('data-rf-fav') ? 'fav' : 'cmp', no = b.dataset.rfFav || b.dataset.rfCmp, v = get(k), i = v.indexOf(no);
			if (i > -1) { v.splice(i, 1); toast(k === 'fav' ? 'Odebráno z oblíbených' : 'Odebráno z porovnání'); }
			else if (k === 'cmp' && v.length >= MAX_CMP) { toast('Porovnat lze nejvýše ' + MAX_CMP + ' byty'); return; }
			else { v.push(no); toast(k === 'fav' ? 'Přidáno k oblíbeným' : 'Přidáno do porovnání'); }
			set(k, v); sync();
		});
		window.addEventListener('storage', sync);
		sync();
	})();
})();