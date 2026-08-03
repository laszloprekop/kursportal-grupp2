# Kursportalen – grupp 2

Grupparbete i Lexicons frontendkurs, VT 2026. En responsiv kursportal för det
påhittade utbildningsföretaget **Nordkod**.

> Peter äger den här filen och fyller den inför inlämningen (P5 i arbetsplanen):
> hur man kör projektet, vem som gjorde vad, och vilka tekniker som används.
> Det som står nedan är bara det som behövs för att komma igång.

## Status

**Det här är ett tillfälligt repo på Laszlos konto, gjort inför kickoffen.**
Steg 0 är redan byggt: skelett, mallar, tokens, stubbar och dokumentation.
Klona, kör, titta.

Peter bestämmer var koden ska bo på riktigt – behåll det här eller flytta
innehållet. Allt går att ändra. Det som är värt att behålla är de fyra
ADR:erna och dataformen, eftersom de är sömmarna som gör att fyra personer
kan arbeta samtidigt.

Nästa steg är kickoffen och besluten K1–K4 i
[arbetsplanen](docs/arbetsplan.md).

## Designen

| | Länk |
|---|---|
| **Designriktningar** – fem förslag, var och en i 1440, 768 och 390. Börja på sidan *Start här* | [Figma](https://www.figma.com/design/5fB1ucR6IIVb2L0zjoBJtO/Nordkod-%E2%80%93-designriktningar?node-id=0-1) |
| **Flöde och struktur** – användarens väg genom sajten, och rollfördelningen | [FigJam](https://www.figma.com/board/loIXYG4nLXtV0o6mEMFXik/Nordkod-%E2%80%93-fl%C3%B6de-och-struktur) |

Designfilen innehåller också sidan *Layout – struktur* med gråskaleskelett för
tre layouter i tre brytpunkter, och *Logotyp – idéer*.

Färgvärdena ur den riktning ni röstar fram finns färdiga i
[`docs/paletter.md`](docs/paletter.md) – kopiera rätt block in i
`css/tokens.css`.

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

