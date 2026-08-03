# 0004 – `index.html` delas mellan två ägare

Datum: 2026-08-03
Status: beslutad

## Sammanhang

Vi bygger en sida. Roll 2 (HTML, semantik, WCAG), roll 3 (layout) och roll 4
(styling) arbetar alla i `index.html`. Roll 3 och 4 sitter på samma person.
Kvar är två personer i en fil, med fem arbetsdagar och en gemensam
inlämning.

## Alternativ

**Bahador skriver skelettet först, Laszlo lägger layout ovanpå** – följer
uppgiftens egen rollordning och är rätt arbetsordning i sak: semantik före
layout. Men det ställer Laszlo på kö bakom någon annan.

**Laszlo skriver skelettet, Bahador äger avgränsade delar plus granskningen** –
vald.

## Beslut

Laszlo skriver hela `index.html`: sektioner, element, rubriknivåer, klasser,
layout. Han börjar direkt.

Bahador äger **helt**, och kan börja i dag utan att vänta:

- `<head>` – `lang`, `title`, meta description, Open Graph, favicon. SEO-delen
  i sin helhet.
- Kontaktformuläret – hela markupen: `<label>`-koppling, `required`,
  `aria-describedby`, felmeddelandenas element och texter, tabbordning.
- Tillgänglighetsgranskningen – fokusmarkeringar, kontrast, alt-texter,
  landmärken, tangentbordsnavigering. Och dokumentet som redovisar den.

Bahador arbetar i egna sektioner av filen. Han rör inte layoutklasser utan att
säga till; Laszlo rör inte formulärets markup utan att säga till.

## Följder

- Ingen väntar på någon annan i dag. Det var hela poängen.
- Risken: rollen kan krympa till korrekturläsning. Motmedlet är att
  granskningen och formuläret är hans egna leveranser, inte kommentarer på
  någon annans – och att `<head>` med SEO är helt hans.
- Kvar står en konflikt: två personer i samma fil. Vi hanterar den med små,
  ofta pushade commits och genom att aldrig ha två öppna grenar i samma
  sektion samtidigt.
- Tillgänglighetsgranskningen sker **löpande**, inte som ett pass på fredagen.
  Hittas problemen sist hinner de inte åtgärdas.
