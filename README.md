# Byty v zahradách — návrh webu (šablona Brave Development)

Návrh vzhledu webu projektu BD Řepy („Byty v zahradách“, HICH Holding s.r.o.) nasazený do upravené
šablony Brave Development. Stav: návrh ke klientskému schválení (jedno kolo připomínek dle nabídky).
Postupy šablony (mirror, vrstva úprav, kontroly): `README-sablona.md`.

## Spuštění a build

```
node tools/serve.mjs 5330                    # http://localhost:5330/byty-v-zahradach/
node tools/build.mjs && node tools/project.mjs && node tools/prune-uploads.mjs
node tools/bvz-check.mjs                     # kontrola stránek a cest uživatele
node tools/bvz-snap.mjs <cesta> <šířka> full # screenshot do snaps/
```

- `tools/build.mjs` — statická kopie šablony + vrstva úprav (`refine/`), stejné jako u Brave Development.
- `tools/project.mjs` — nasadí projekt: barevnost, hlavička/patička, stránky, mapy, odstraní stránky mimo rozsah.
- `project/data.mjs` — veškerá data projektu (fakta, 34 bytů, standardy, místa v okolí, aktuality, barvy).
- `project/make-viz.mjs` — webové verze vizualizací (upravené JPEGy mají přednost před PDF).
- `project/make-plans.mjs` — výřezy půdorysů bytů a podlaží z dispozic 15. 10. 2026.

## Rozsah (dle zadání)

Úvod · O projektu · Výběr bytů (+ 4 stránky podlaží s klikacím půdorysem) · Detail bytu (34×) · Standardy ·
Lokalita · Aktuality (+ 3 články) · Kontakt · Ochrana osobních údajů (zkrácená). Ostatní stránky šablony
(galerie, FAQ, financování, makléři, kalkulačka, oblíbené/porovnání, EN) nejsou zapnuté.

## Zdroje

`C:\Users\Omen\Documents\claude\BD_Řepy\podklady` — Fillout (9. 10. 2026), přehled bytů (aktuální rozměry),
dispozice 1–4 NP (15. 10. 2026), standard 10/2026, vizualizace 355_BD_V_Zahradach 1–5 (+ upravené JPEGy),
fotografie hrubé stavby 8–9/2026, katalog 10/2025. Místa v okolí: OpenStreetMap (20. 10. 2026).

## K potvrzení přes PM (v podkladech chybí nebo si odporují)

1. **Ceny** — Fillout: „vyplním sám v administraci“ → návrh ukazuje „Cena na vyžádání“.
2. **Byty 207/208** — v přehledu prohozená dispozice vůči plochám (207 = 3kk 51,4 m², 208 = 2kk 64,2 m²);
   návrh má 207 = 2+kk, 208 = 3+kk jako na ostatních podlažích. Počty 11/18/5 sedí v obou variantách.
3. **Parkování** — Fillout 22 míst v zakladačích + 2 venkovní; výkres 1.PP ukazuje stání 1–23. Cena stání neuvedena.
4. **Stav prodeje** — sloupec „Rezervace (označení neexkluzivity) – NEEX“ u části bytů: význam? Návrh má vše volné.
5. **Zahrady** — přehled 10/2026: 103 (82 m²), 104 (83), 107 (155), 109 (77). Katalog 2025 má navíc zahrady 1–4
   (190–286 m²) — jsou k prodeji samostatně?
6. **Kontakt na webu** — Fillout nevyplněn; návrh používá kontakt pro podklady (Jiří Zralý, zraly@profiserv.cz,
   +420 776 825 212) bez fotografie.
7. **Texty** — Fillout má u textů „test“ (slogan, o projektu, výhody, developer, platební podmínky);
   návrh používá texty sepsané z faktů podkladů. Platební kalendář není uveden.
8. **Přesná poloha domu** — pin je na středu ulice Engelmüllerova (OSM); PSČ dle Filloutu 163 00.
9. **Rozpis místností** — z bytových karet (objednané); návrh ukazuje plochy bytu/balkonu/terasy/zahrady.
10. **Energetický štítek** — Fillout nevyplněn.

## Mimo rozsah / další krok

- Logo a brand projektu nejsou součástí zakázky — v návrhu je jen textové označení „Byty v zahradách“.
- Úvod: video 13,7 s z Magnificu (Kling 2.5) — 2 záběry z upravených JPEGů 3 a 4, interiér 2+kk podle textového popisu (ilustrační, ne podle konkrétního bytu); `project/media/`, při výměně zvýšit `MEDIA_V` v tools/project.mjs.
- Výběr pater (interaktivní dům): rozšířený JPEG vizualizace 5 (výřez v project/make-viz.mjs), silueta a pásy podlaží v tools/project.mjs (FLOOR_LINES, HOUSE_OUTLINE).
