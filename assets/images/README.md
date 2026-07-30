# Bilder

Lägg dina egna bilder i respektive undermapp:

- `projects/` — skärmdumpar/bilder till projektkorten (t.ex. `finns-i-havet-hero.jpg`)
- `adventures/` — bilder från Ironman-loppen och bergsbestigningen
- `about/` — porträttbild till "Om mig"

När du lagt en bild i rätt mapp, öppna motsvarande datafil i `js/data/` och
sätt `image: "assets/images/mapp/filnamn.jpg"` istället för `image: null`.
Sidan byter då automatiskt ut den streckade platshållaren mot din bild.

Rekommenderade mått finns som text i respektive platshållare på sidan.
