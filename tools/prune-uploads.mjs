// Odstraní z docs/www/upload soubory, na které žádná stránka/CSS/JS/JSON neodkazuje (fotky projektu Hálkova).
//   node tools/prune-uploads.mjs   (po tools/project.mjs)
import fs from 'node:fs/promises';
import path from 'node:path';
const OUT = path.resolve(import.meta.dirname, '..', 'docs');
const walk = async d => (await Promise.all((await fs.readdir(d, { withFileTypes: true })).map(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]))).flat();
const all = await walk(OUT);
const text = (await Promise.all(all.filter(f => /\.(html|css|js|mjs|json|webmanifest|svg)$/.test(f) && !f.includes(path.join('www', 'upload'))).map(f => fs.readFile(f, 'utf8')))).join('\n');
const used = new Set([...text.matchAll(/www\/upload\/[^"'()\s?#,]+/g)].map(m => decodeURIComponent(m[0])));
let n = 0, bytes = 0;
for (const f of all.filter(f => f.includes(path.join('www', 'upload')))) {
	const rel = f.slice(OUT.length + 1).split(path.sep).join('/');
	if (!used.has(rel)) { bytes += (await fs.stat(f)).size; await fs.rm(f); n++; }
}
console.log(`prune: odstraněno ${n} souborů (${(bytes / 1048576).toFixed(0)} MB), ponecháno ${used.size} odkazů`);
