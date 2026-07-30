# Sebastian Ljungblad — Portfolio

Ett digitalt CV / portfolio-site: high-tech rymd-estetik möter äventyr i
bergen. Byggd som en snabb, beroendefri statisk sajt — inget byggsteg, inget
`npm install`, fungerar direkt i alla moderna webbläsare och är redo att
driftsättas på GitHub Pages.

## Varför ren HTML/CSS/JS (inget React/Vite/Tailwind)?

Sidan är byggd med vanilla HTML, CSS och JavaScript (ES-moduler) istället för
ett ramverk. Det är ett medvetet val, inte en genväg:

- **Noll installation.** Du klonar repot, öppnar `index.html` i en
  lokal server, och det fungerar — ingen `npm install` som kan gå sönder,
  inga beroenden som blir föråldrade.
- **Snabbast möjliga sida.** Ingen JS-bundlare, inget ramverks-overhead —
  bara det du faktiskt ser.
- **Perfekt för GitHub Pages.** GitHub Pages serverar statiska filer rakt
  av. Med den här strukturen pushar du bara koden, du bygger den inte.
- **Lätt att förstå och ändra**, även om du inte jobbat med Node-verktyg
  tidigare. All logik ligger i tydligt namngivna, väldigt korta filer.

Arkitekturen är ändå modulär och "professionell": innehåll (data), logik
(rendering/interaktion) och presentation (CSS) är strikt separerade — precis
som i ett modernt ramverk, fast utan verktygskedjan.

## Projektstruktur

```
index.html                  Sidans enda HTML-fil (alla sektioner)
css/
  00-variables.css          Design-tokens: färger, typsnitt, spacing — ÄNDRA HÄR för att byta tema
  01-reset.css               CSS-reset
  02-base.css                 Grundstilar, typografi
  03-layout.css                Bakgrundslager, grid-hjälpare
  04-components.css             Knappar, kort, badges, platshållare, progressbars
  05-nav.css … 13-contact.css     En fil per sektion
  14-animations.css                Scroll-reveal, custom cursor, loader
  15-responsive.css                 Övergripande responsiva justeringar
js/
  data/                      ALL text/innehåll bor här — redigera dessa filer
    profile.js               Namn, roller, bio, hero-statistik
    social.js                 Kontakt-e-post, TikTok/GitHub/LinkedIn-länkar
    projects.js                Projekt (Finns i Havet m.fl.)
    skills.js                   Programmeringsspråk & kompetensnivåer
    courses.js                   LiU-kurser (hämtat från Ladok)
    experience.js                 Arbetslivserfarenhet (Contrado AB)
    adventures.js                  Ironman-lopp & bergsbestigning
    goals.js                        Uppnådda & framtida mål
  modules/                   Återanvändbar logik (stjärnbakgrund, cursor, etc.)
  render/                    Kopplar ihop data → HTML på sidan
  main.js                    Startpunkt — initierar allt
assets/
  images/                    Lägg dina egna bilder här (se assets/images/README.md)
  cv/                        Lägg din CV-PDF här om du vill länka den
.github/workflows/deploy.yml GitHub Actions-workflow för automatisk driftsättning
```

## Kom igång lokalt

Du behöver bara en enkel lokal webbserver (ES-moduler kan inte laddas direkt
från `file://` i vissa webbläsare). Välj ett av alternativen:

```bash
# Om du har Node.js installerat (rekommenderas, snabbast)
npx http-server -p 8080

# ...eller med Python (finns oftast förinstallerat på Mac/Linux)
python3 -m http.server 8080
```

Öppna sedan `http://localhost:8080` i webbläsaren.

Om du använder VS Code kan du också installera tillägget **Live Server** och
klicka "Go Live" längst ner till höger — inget terminalkommando behövs då.

## Fylla i ditt innehåll

Sök igenom `js/data/`-filerna efter `[TEXT INOM HAKPARENTESER]` — det är
platshållare du bör ersätta:

- **`social.js`** — lägg in dina riktiga länkar till TikTok, GitHub, LinkedIn.
- **`adventures.js`** — sluttider, placeringar, höjdmeter och dina egna
  tankar/minnen från loppen och bestigningen.
- **`experience.js`** — startmånad på Contrado, ev. fler kunder.
- **`goals.js`** — årtal för varje uppnått mål.
- **`courses.js`** — en kurs (TDDE23) saknade poäng/status i underlaget du
  gav mig; fyll i det som stämmer.

## Lägga in egna bilder

Se `assets/images/README.md`. Kortfattat: lägg bildfilen i rätt undermapp,
öppna motsvarande datafil och byt `image: null` mot
`image: "assets/images/mapp/filnamn.jpg"`. Platshållarna (streckad ram)
försvinner automatiskt när en bild är angiven.

## Anpassa utseendet

Alla färger, typsnitt och avstånd styrs från `css/00-variables.css`. Vill du
t.ex. ha en mer blå/grön eller mer röd/orange känsla — ändra
`--c-cyan` och `--c-amber` där, så uppdateras hela sajten.

## Driftsätta på GitHub Pages

**Metod 1 — automatiskt via GitHub Actions (redan konfigurerat):**

1. Skapa ett nytt repo på GitHub och pusha upp den här mappen:
   ```bash
   git init
   git add .
   git commit -m "Första versionen av portfolion"
   git branch -M main
   git remote add origin https://github.com/DITT-ANVANDARNAMN/DITT-REPO.git
   git push -u origin main
   ```
2. Gå till repots **Settings → Pages**.
3. Under **Build and deployment → Source**, välj **GitHub Actions**.
4. Workflowen i `.github/workflows/deploy.yml` körs automatiskt vid varje
   push till `main` och publicerar sidan. Efter någon minut är den live på
   `https://DITT-ANVANDARNAMN.github.io/DITT-REPO/`.

**Metod 2 — enklast möjliga, utan Actions:**

1. Pusha koden till ett GitHub-repo (samma `git`-steg som ovan).
2. Gå till **Settings → Pages**.
3. Under **Source**, välj **Deploy from a branch**, branch **main**, mapp
   **/(root)**.
4. Spara. Sidan publiceras på samma URL som ovan inom någon minut.

Vill du använda ett eget domännamn: lägg till en `CNAME`-fil i projektets
rot med ditt domännamn som innehåll, och peka din DNS mot GitHub Pages
enligt [GitHub:s instruktioner](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Tillgänglighet & prestanda

- Respekterar `prefers-reduced-motion` — alla animationer stängs av för
  användare som valt det i sitt operativsystem.
- Semantisk HTML, tydlig fokus-styling för tangentbordsnavigering, en
  "hoppa till innehåll"-länk längst upp.
- Ingen extern JS-runtime, inga tracking-script — sidan laddar snabbt även
  på mobil/svag uppkoppling.
- Google Fonts laddas via `<link>` i `<head>` med `preconnect` för snabbare
  laddning; om typsnitten inte hinner laddas faller sidan tillbaka på
  systemets standardtypsnitt utan att layouten hoppar.

## Nästa steg

- Fyll i alla `[PLATSHÅLLARE]` i `js/data/`.
- Lägg in dina egna bilder i `assets/images/`.
- Lägg gärna till en CV-PDF i `assets/cv/` och sätt `cvUrl` i
  `js/data/social.js`.
- När du bygger fler projekt: lägg till ett nytt objekt i
  `js/data/projects.js` — sidan renderar det automatiskt.
