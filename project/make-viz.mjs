// Webové verze vizualizací 1–5 a obrázku pro interaktivní dům.
// Zdroj: upravený JPEG od grafika („355_BD_V_Zahradach_vizualizace_N*.jpg“) — má přednost;
// dokud chybí, vezme se render PDF vizualizace (bílé okraje stránky oříznuté).
//   node project/make-viz.mjs [složka s rendery PDF hiN/p01.png]
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const FF = path.resolve(import.meta.dirname, '../node_modules/ffmpeg-static/ffmpeg.exe');
const SRC = 'C:/Users/Omen/Documents/claude/BD_Řepy/podklady/Podklady od klienta';
const PDF_RENDERS = process.argv[2];
const OUT = path.join(import.meta.dirname, 'img');
const used = {};
const ff = (inp, vf, out, webp = true) => execFileSync(FF, ['-v', 'error', '-y', '-i', inp, '-vf', vf, ...(webp ? ['-c:v', 'libwebp', '-q:v', '80'] : ['-q:v', '3']), out]);

for (let i = 1; i <= 5; i++) {
	const jpg = fs.readdirSync(SRC).filter(f => new RegExp(`vizualizace_${i}\\b.*\\.jpe?g$`, 'i').test(f))
		.map(f => path.join(SRC, f)).sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs)[0];
	let inp, pre = '';
	if (jpg) { inp = jpg; used[i] = path.basename(jpg); }
	else if (PDF_RENDERS) { inp = path.join(PDF_RENDERS, `hi${i}`, 'p01.png'); pre = 'crop=2924:2040:96:75,'; used[i] = `PDF ${i} (render)`; }
	else { used[i] = 'beze změny'; continue; }
	for (const w of [2400, 1440, 800]) ff(inp, `${pre}scale=${w}:-2`, path.join(OUT, `viz-${i}-${w}.webp`));
	ff(inp, `${pre}scale=1440:-2`, path.join(OUT, `viz-${i}-1440.jpg`), false);
	if (i === 5) {
		// interaktivní dům: zahradní pohled ořezaný na 2:1 (pásy podlaží v tools/project.mjs jsou odečtené z PDF verze — u nového JPEGu je zkontrolovat)
		ff(inp, `${pre}crop=iw:iw/2:0:(ih-iw/2)*0.571,scale=1600:800`, path.join(OUT, 'house-1600x800.webp'));
	}
}
console.log('vizualizace:', used);
