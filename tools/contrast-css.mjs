// Generuje refine/src/86-contrast.css — opravy kontrastu textu (WCAG AA) nad CSS šablony.
// Šablona má značkovou zelenou #42C787 natvrdo (~490×); bílý text na ní má 2,15:1,
// zelený text na bílé taky 2,15:1 a šedá #7A7A7A na bílé 4,29:1. Pravidla tedy
// procházíme selektor po selektoru a pro každé dopíšeme přepis jen barvy textu:
//   zelený text (#42C787, #2E9A66) → --rf-green-ink (#1d7a4f, 5,3:1 na bílé)
//   bílý text na zelené   → --rf-on-green (#0b2016, 8,8:1) — plocha zůstává značková
//   šedý text #7A7A7A     → --rf-muted (#666, 5,7:1)
// Přepis má stejnou specifičnost jako originál (:where) a stojí za CSS šablony, takže
// vyhraje jen nad svým vlastním pravidlem; @media obal se zachovává.
// Tmavé sekce (patička) a text přes fotky (hero) se vynechávají — tam zelená/bílá sedí.
//   node tools/contrast-css.mjs   (po tools/build.mjs; pak build znovu)
import fs from 'node:fs/promises';
import path from 'node:path';
import postcss from 'postcss';

const ROOT = path.resolve(import.meta.dirname, '..');
const DIR = path.join(ROOT, 'docs', 'www', 'Development', 'cache');
let css = '';
for (const f of (await fs.readdir(DIR)).filter(f => f.endsWith('.css'))) css += await fs.readFile(path.join(DIR, f), 'utf8');

const SKIP = /footer|panoramaHero|cookie|flatpickr|homehover|\.widget|eshopSteps|::?selection|::?placeholder/i;
const pre = s => `:where(html.rf-on) ${s}`;
const res = postcss.root();
const n = { ink: 0, onGreen: 0, muted: 0 };

postcss.parse(css).walkRules(rule => {
	const p = rule.parent;
	if (p.type === 'atrule' && !/^(media|supports)$/i.test(p.name)) return; // keyframes, font-face…
	let color, important = false, greenBg = false;
	rule.walkDecls(d => {
		const v = d.value.toLowerCase().replace(/\s*!important/, '').trim();
		if (d.prop === 'color') { color = v; important = d.important; }
		if (/^background(-color)?$/.test(d.prop) && /#42c787/.test(v)) greenBg = true;
	});
	if (!color) return;
	let value;
	if (color === '#42c787' || color === '#2e9a66') { value = 'var(--rf-green-ink)'; n.ink++; }
	else if (greenBg && /^(#fff|#ffffff|white)$/.test(color)) { value = 'var(--rf-on-green)'; n.onGreen++; }
	else if (color === '#7a7a7a') { value = 'var(--rf-muted)'; n.muted++; }
	else return;
	const sels = rule.selectors.filter(x => !SKIP.test(x));
	if (!sels.length) return;
	const r = postcss.rule({ selectors: sels.map(pre) });
	r.append({ prop: 'color', value, important }); // !important šablony se musí zopakovat
	if (p.type === 'atrule') { const a = postcss.atRule({ name: p.name, params: p.params }); a.append(r); res.append(a); }
	else res.append(r);
});

const head = '/* GENEROVÁNO tools/contrast-css.mjs — needitovat ručně.\n   Kontrast textu WCAG AA nad barvami šablony (viz popis v generátoru). */\n';
await fs.writeFile(path.join(ROOT, 'refine', 'src', '86-contrast.css'), head + res.toString() + '\n');
console.log('86-contrast.css:', n.ink, 'zelený text,', n.onGreen, 'text na zelené,', n.muted, 'šedý text');
