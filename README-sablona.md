# Brave Development — UI refinement

Citlivé UI vylepšení šablony **Brave Development** (IMPnet, PHP/Nette + UIkit 3.17)
nad demo webem <https://demo.bravedevelopment.cz/>. Nejde o redesign: logo, barvy,
písmo Poppins, obsah, pořadí sekcí, struktura stránek i všechny funkce zůstávají.
Mění se jen prezentace — šířky a kontejnery, mezery, hierarchie, rámečky, stavy
a chování hlavičky.

**Náhled:** <https://hutterlukas22-dot.github.io/brave-development-ui/>
— vlevo dole přepínač **Upravená / Původní** (pamatuje si volbu; také `?puvodni` / `?upravene`).

## Co je výstup

| Soubor | Co to je |
|---|---|
| `refine/brave-refine.css` | Vrstva úprav — vložit do šablony **jako poslední stylopis** po CSS bundlu. |
| `refine/brave-refine.js` | Chování hlavičky (skrývání při scrollu) — vložit s `defer` po JS bundlu. |
| `refine/src/*.css` | Zdroj vrstvy rozdělený podle oblastí (tokeny, hlavička, layout, stránky…). Pro přepis do SCSS šablony po komponentách. |

Nasazení do šablony (Latte, layout):

```html
<link rel="stylesheet" href="{$basePath}/www/Development/css/brave-refine.css">
<script src="{$basePath}/www/Development/js/brave-refine.js" defer></script>
```

Hlavička: JS ruší UIkit `data-uk-sticky="show-on-up: true"` na `section.topBar`
a řídí ji sám (třídy `rf-nav-hidden` / `rf-nav-scrolled` na `<html>`). Při přepisu
do šablony stačí atribut ze šablony odebrat.

## Statický náhled (GitHub Pages)

Živý web běží na serveru, náhled je jeho **statická kopie** (`docs/`) s vloženou
vrstvou úprav. Co funguje: všechny stránky, odkazy, galerie a lightboxy, 360°
panoráma, mapy (data uložená z AJAX endpointů), interaktivní výběr domu/patra,
přepínání zobrazení, záložky, akordeony, kalkulačky, offcanvas menu.

Co bez serveru fungovat nemůže (na živém webu ano — vrstva úprav do nich nezasahuje):
odeslání formulářů, přidání do oblíbených a porovnání, libovolné kombinace filtru
(staženy jsou jen varianty, na které web odkazuje), přepnutí jazyka.

## Nástroje

```bash
npm install                 # playwright-core (systémový Edge), stylelint
node tools/mirror.mjs       # stáhne živý web do mirror/ (cache, necommituje se)
node tools/build.mjs        # složí docs/ = statický web + vrstva úprav
node tools/build.mjs --refine-only   # jen přestaví refine/*.css|js
node tools/serve.mjs 5320   # http://localhost:5320/brave-development-ui/
node tools/shots.mjs --mode=both     # screenshoty Původní/Upravená (shots/)
node tools/check.mjs        # přetečení, konzole, obrázky, chování hlavičky
node tools/header-fit.mjs   # vejde se hlavička na 1200–1920 px?
```


## Upravená V2 (nová homepage, `/v3/`)

Nový návrh úvodní stránky — přepínač náhledu: Původní / Upravená / Upravená V2 (`?v2`).
Podstránky se ve V2 zobrazují v Upravené verzi, homepage přesměruje na `/v3/`.

- data: `v3/data.json` (snapshot obsahu šablony), styly `v3/src/v3.css`, chování `v3/src/v3.js`
- build: `node tools/build-v3.mjs` (po `tools/build.mjs`; potřebuje `mirror/`) → `docs/v3/`
  - vlastní kopie `panorama360.js` (zpřístupní prohlížeč kvůli samorotaci), piny mapy z `@mdi/js` + „B“ z loga
- test: `node tools/v3-check.mjs` (běžící `tools/serve.mjs 5320`)

## Úpravy podle auditu (Upravená verze)

Podklad: produktový audit dema (Claude Docs, 28. 9. 2026). „Upravená V2“ je v přepínači skrytá
(`SHOW_V3` v `tools/static-shim.js`), stránka `/v3/` zůstává na přímé adrese.

- `refine/src/85-audit.css` + sekce 3–4 v `refine/src/brave-refine.js`: mobilní hero (perex, vyhledávání),
  sticky mobilní lišta, CTA a telefon v menu, nápověda a pulzující obrys u vizualizace domu, stav bytů textem,
  max. 4 podobné byty, kratší náběhové animace, kontakt vpravo, video v hero, výběr budovy ve vyhledávání,
  panoráma v sekci Lokalita, formulář s makléřkou nad patičkou.
- Kontrast WCAG AA: `node tools/contrast-css.mjs` generuje `refine/src/86-contrast.css` z CSS šablony;
  ověření `node tools/contrast-scan.mjs`.
- Body zájmu v panoramatu: `tools/panorama-pois.mjs` (volá build) doplní body z mapy lokality
  (polohy v panoramatu jsou orientační) a ke všem bodům s GPS vzdálenost od projektu.
- Video v hero: `refine/media/` (záběry z Magnificu, střih přes `ffmpeg-static`); při výměně zvýšit `MEDIA_V`.
- Rychlý build bez mazání `docs/`: `node tools/build.mjs --refine-only`.
