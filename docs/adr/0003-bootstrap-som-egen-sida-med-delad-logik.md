# 0003 – Bootstrap-jämförelsen är en egen sida som delar data, tokens och logik

Datum: 2026-08-03
Status: beslutad

## Sammanhang

Uppgiften kräver att vi använder och jämför både Bootstrap och Tailwind.
Båda laddas från CDN. Båda levererar en egen reset, och de krockar på riktiga
klassnamn – `.container`, `.border`, `.rounded` och `.shadow` finns i båda med
olika betydelse. Den som laddas sist vinner, oförutsägbart.

## Alternativ

**En sektion i Bootstrap inne i `index.html`** – billigast. Men vi skulle få
lägga tiden på specificitetsbuggar, och "vi använde Bootstrap till sidfoten"
är en fotnot, inte en jämförelse.

**En egen sida med Bootstrap** – vald.

## Beslut

`bootstrap-jamforelse.html` bygger **samma kurslista** som `index.html`, med
Bootstraps navbar, grid och card i stället för Tailwinds utilities. Ingen
Tailwind på den sidan. Ingen Bootstrap på `index.html`. De möts aldrig.

Det som delas mellan sidorna:

| Delas | Varför det går |
|---|---|
| `data/courses.json` | Samma innehåll ska visas |
| `css/tokens.css` | Färger, typskala och avstånd som CSS-variabler. Båda ramverken pekar på samma värden, så jämförelsen blir rättvis – samma design, två ramverk |
| `js/kursdata.js` | Hämtning, filtrering och formatering. Ren logik, rör aldrig DOM eller klassnamn |
| `js/kortlista.js` | Renderaren klonar sidans egen `<template>` och fyller `[data-falt]`. Den bryr sig inte om vilka klasser mallen innehåller |

Det som **inte** delas: mallen för kurskortet, filtrets utseende, och
kursvyn – den finns bara på `index.html`.

## Följder

- Jämförelsen blir verklig: samma innehåll, samma data, samma logik, två
  ramverk. Skillnaden som återstår är exakt den vi ska skriva om.
- Ingen CSS-konflikt, eftersom ramverken aldrig ligger på samma sida.
- Renderaren måste hållas fri från klassnamn. Sätter någon en klass i
  `kortlista.js` går delningen sönder.
- Sidhuvudet finns i två varianter som båda måste överleva till måndag.
- Sajten består tekniskt av två dokument. Portalen är fortfarande en sida –
  jämförelsen är en bilaga, inte en del av produkten.
