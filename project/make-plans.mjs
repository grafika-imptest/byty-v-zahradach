// Výřezy půdorysů: byty (800×600, bílé okraje) a celá podlaží z dispozic 15. 10. 2026
//   node project/make-plans.mjs <složka s vykreslenými stránkami p02..p05.png (šířka 3514)>
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { units, FLOOR_CROP } from './data.mjs';
const FF = path.resolve(import.meta.dirname, '../node_modules/ffmpeg-static/ffmpeg.exe');
const SRC = process.argv[2];
const OUT = path.join(import.meta.dirname, 'img', 'plans');
fs.mkdirSync(OUT, { recursive: true });
const K = 3514 / 2000;
const page = f => path.join(SRC, `p0${f + 1}.png`);
const ff = (inp, vf, out) => execFileSync(FF, ['-v', 'error', '-y', '-i', inp, '-vf', vf, ...(out.endsWith('.webp') ? ['-c:v', 'libwebp', '-q:v', '82'] : []), out]);
for (const u of units) {
	const [x1, y1, x2, y2] = u.crop.map(v => Math.round(v * K));
	const pad = 30;
	const vf = `crop=${x2 - x1 + 2 * pad}:${y2 - y1 + 2 * pad}:${x1 - pad}:${y1 - pad},scale=760:560:force_original_aspect_ratio=decrease,pad=800:600:(ow-iw)/2:(oh-ih)/2:white`;
	ff(page(u.floor), vf, path.join(OUT, `byt-${u.no}.webp`));
	ff(page(u.floor), vf, path.join(OUT, `byt-${u.no}.png`));
}
const FLOOR = FLOOR_CROP;
for (const [f, [x1, y1, x2, y2]] of Object.entries(FLOOR)) {
	const c = [x1, y1, x2, y2].map(v => Math.round(v * K));
	const vf = `crop=${c[2] - c[0]}:${c[3] - c[1]}:${c[0]}:${c[1]},scale=1800:-2`;
	ff(page(+f), vf, path.join(OUT, `podlazi-${f}.webp`));
	ff(page(+f), vf, path.join(OUT, `podlazi-${f}.png`));
	fs.writeFileSync(path.join(OUT, `podlazi-${f}.json`), JSON.stringify({ crop: [x1, y1, x2, y2] }));
}
console.log('plans ok', units.length);
