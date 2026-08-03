# Kursportalen – grupp 2

Grupparbete i Lexicons frontendkurs, VT 2026. En responsiv kursportal för det
påhittade utbildningsföretaget **Nordkod**.

> Peter äger den här filen och fyller den inför inlämningen (P5 i arbetsplanen):
> hur man kör projektet, vem som gjorde vad, och vilka tekniker som används.
> Det som står nedan är bara det som behövs för att komma igång.

## Kör projektet

`fetch` fungerar inte om man öppnar `index.html` genom att dubbelklicka –
webbläsaren blockerar det. Kör genom en server:

```bash
python3 -m http.server 8000
# öppna http://localhost:8000
```

Eller Live Server-tillägget i VS Code. Detta gäller även kursvyns adresser.

## Läs det här först

| Fil | Vad |
|---|---|
| `docs/arbetsplan.md` | Vem gör vad, i vilken ordning, med vilka blockerare |
| `docs/filstruktur.md` | Vem äger vilken fil |
| `docs/kursdata.md` | Dataformen för `data/courses.json` |
| `docs/paletter.md` | Färgvärden per designriktning |
| `CONTEXT.md` | Ordlista – vad vi menar med kurs, huvudvy, kursvy |
| `docs/adr/` | Beslut vi inte vill förklara om igen |

## Två regler

**JavaScript skriver aldrig klassnamn.** Renderaren fyller `[data-falt]`.
Ska ett kort se annorlunda ut ändras mallen i HTML.

**Data innehåller aldrig formaterad text.** `2026-04-13`, inte `13 apr 2026`.

## Status

Steg 0 är klart: skelett, mallar, tokens och stubbar ligger på plats.
Nästa steg är kickoffen och besluten K1–K4 i arbetsplanen.
