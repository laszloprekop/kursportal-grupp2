# Filstruktur och ägarskap

Kartan alla arbetar efter. En fil har en ägare. Behöver du ändra i någon
annans fil – säg till, gör det inte tyst.

```
/
├── index.html                    portalen: hero, kurslista, nyheter, kontakt, kursvy
├── bootstrap-jamforelse.html     samma kurslista, byggd med Bootstrap
├── css/
│   └── tokens.css                designtokens som CSS-variabler – delas av båda sidorna
├── js/
│   ├── kursdata.js               hämtning, filtrering, formatering. Ingen DOM
│   ├── kortlista.js              klonar sidans <template>, fyller [data-falt]
│   └── kursvy.js                 kursvyn: öppna, stänga, history, fokus
├── data/
│   └── courses.json              innehållet
├── docs/
│   ├── kursdata.md               dataformens kontrakt
│   ├── filstruktur.md            den här filen
│   └── adr/                      beslut vi inte vill förklara om igen
├── CONTEXT.md                    ordlista
└── README.md                     hur man kör den, vem gjorde vad
```

## Ägare

| Fil | Ägare | Roll |
|---|---|---|
| `index.html` – hela skelettet, layout och klasser | Laszlo | 3 + 4 |
| `index.html` – `<head>` och SEO, kontaktformuläret, tillgänglighet | Bahador | 2 |
| `bootstrap-jamforelse.html` | Laszlo | 4 |
| `css/tokens.css` | Laszlo | 4 |
| `js/*` | Marcus | 5 |
| `data/courses.json` | Peter | innehåll |
| `README.md`, git, sammanslagning | Peter | 1 |

`index.html` är den enda filen med två ägare. Hur den delas står i
`docs/adr/0004`.

## Två regler som håller ihop det

**JavaScript skriver aldrig klassnamn.** Renderaren fyller `[data-falt]` och
inget annat. Ska ett kort se annorlunda ut ändras mallen i HTML, inte koden.

**Data innehåller aldrig formaterad text.** `2026-04-13`, inte `13 apr 2026`.
Formateringen ligger i `kursdata.js`.
