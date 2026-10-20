// Lokální server pro docs/ — chová se jako projektové GitHub Pages (web pod /<repo>/).
//   node tools/serve.mjs [port]
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..', 'docs');
const BASE = (process.env.BASE ?? '/byty-v-zahradach').replace(/\/$/, '');
const PORT = Number(process.argv[2] || process.env.PORT || 5310);
const TYPES = {
	'.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
	'.mjs': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml',
	'.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif',
	'.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.pdf': 'application/pdf',
	'.mp4': 'video/mp4', '.webm': 'video/webm',
};

http.createServer((req, res) => {
	const url = new URL(req.url, 'http://x');
	let p = decodeURIComponent(url.pathname);
	if (p === '/' || p === '') { res.writeHead(302, { Location: BASE + '/' }); return res.end(); }
	if (!p.startsWith(BASE + '/') && p !== BASE) { res.writeHead(404); return res.end('mimo BASE'); }
	if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405); return res.end(); }
	p = p.slice(BASE.length) || '/';
	let file = path.join(ROOT, p);
	if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
	try {
		if (fs.statSync(file).isDirectory()) {
			if (!p.endsWith('/')) { res.writeHead(301, { Location: BASE + p + '/' + url.search }); return res.end(); }
			file = path.join(file, 'index.html');
		}
		const body = fs.readFileSync(file);
		res.writeHead(200, { 'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
		res.end(body);
	} catch {
		res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
		try { res.end(fs.readFileSync(path.join(ROOT, '404.html'))); } catch { res.end('404'); }
	}
}).listen(PORT, () => console.log(`http://localhost:${PORT}${BASE}/`));
