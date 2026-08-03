# 0002 – Kurskortet bor i ett `<template>`, inte i JavaScript

Datum: 2026-08-03
Status: beslutad

## Sammanhang

Ett kurskort är tre roller samtidigt:

- struktur och layout – roll 3
- klasser och styling – roll 4
- ifyllt från JSON och infogat i DOM:en – roll 5

Rollerna ligger på två personer. Om kortets markup skrivs i en template-literal
i JavaScript hamnar två personers arbete inne i en tredje persons fil, och
ingen kan ändra sitt eget utan att röra någon annans.

## Alternativ

**Marcus äger hela kortet i JavaScript** – färre rörliga delar, ingen
överenskommelse att hålla. Men layout och styling hamnar i `app.js`, där de är
svåra att peka på och försvara vid redovisningen, och där Bahadors
tillgänglighetsgenomgång inte hittar dem.

**Kortet i ett `<template>`-element** – vald.

## Beslut

Kurskortet skrivs en gång i `index.html`, inuti
`<template id="kurskort-mall">`, med alla sina klasser. Varje plats som ska få
ett värde märks med `data-falt="<fältnamn>"`, där fältnamnet är detsamma som i
`data/courses.json`.

JavaScript klonar mallen, fyller i `[data-falt]` och lägger in kortet.
JavaScript skriver aldrig klassnamn. Layout och styling ändras aldrig i
`app.js`.

## Följder

- Ren plattforms-HTML. Inget ramverk, inget byggsteg – samma nivå som
  kursens övningar.
- Markup ligger i HTML-filen, där tillgänglighetsgenomgången kan nå den.
- Sömmen mellan rollerna är ett skrivet kontrakt: listan av `data-falt`-namn.
  Den listan måste beslutas innan någon börjar, och ändras den måste två
  personer ändra samtidigt.
- Samma mönster används för nyhetskort. Kursvyn fylls direkt, utan mall,
  eftersom det bara finns en av den.
