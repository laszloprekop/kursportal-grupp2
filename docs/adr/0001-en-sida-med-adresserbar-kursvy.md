# 0001 – En sida, med en kursvy som har egen adress

Datum: 2026-08-03
Status: beslutad

## Sammanhang

Uppgiften kräver startsida, kurslista, detaljerad kursvy, nyheter och
kontaktformulär. Den säger inte om det är en sida eller flera. Exempelskissen i
uppgiften visar allt på en sida.

Vi är fyra personer och har fem arbetsdagar.

## Alternativ

**Flera HTML-filer** – `index.html`, `kurs.html`, `kontakt.html`. Ger tre
personer var sin fil att äga, vilket minskar merge-konflikter. Men utan
byggsteg måste header och footer kopieras in i varje fil och hållas i synk.

**En sida, kursvyn som modal** – minst kod. Men en modal går inte att länka
till, och webbläsarens bakåtknapp lämnar sajten i stället för att stänga vyn.

**En sida, kursvyn som egen vy med adress** – vald.

## Beslut

En `index.html`. Kursvyn täcker hela fönstret och glider in från höger medan
huvudvyn skjuts ut åt vänster.

Att öppna en kurs anropar `history.pushState` och adressen blir `?kurs=<id>`.
En `popstate`-lyssnare kör samma stängning, så webbläsarens bakåtknapp fungerar.
Laddas sidan med `?kurs=<id>` visas kursvyn direkt, utan animation.

## Följder

- En kurs går att länka till, bokmärka och dela.
- Bakåtknappen gör det användaren förväntar sig.
- Kursvyn blir en riktig demonstration av att läsa en query-parameter och
  hämta data mot den – inte bara ett visuellt trick.
- Priset: alla fyra arbetar i samma HTML-fil. Det löses av 0002 och av att
  vi delar upp filen i sektioner med tydliga ägare.
- Kursvyn måste flytta fokus när den öppnas och lämna tillbaka det när den
  stängs, annars är den otillgänglig. Rörelsen måste stängas av vid
  `prefers-reduced-motion`.
