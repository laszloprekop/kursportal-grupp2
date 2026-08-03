// ÄGS AV MARCUS (M3)
//
// Renderaren. Klonar sidans egen <template> och fyller [data-falt].
//
// REGELN SOM HÅLLER IHOP ALLTIHOP (ADR 0002 och 0003):
// den här filen får aldrig innehålla ett klassnamn. Skriver du
// classList.add('...') slutar bootstrap-jamforelse.html att kunna använda
// samma fil. Ska ett kort se annorlunda ut ändras mallen i HTML.
//
// FALLGROP: mallens innehåll finns inte i DOM:en. document.querySelector
// hittar ingenting där inne – gå via mall.content.
// FALLGROP: cloneNode måste ha true, annars klonas bara det yttersta elementet.

/**
 * Fyller en klonad mall med värden.
 * varden: { provider: 'Lexicon', title: '...', lank: '?kurs=...' , ... }
 * En mall får sakna en krok – hoppa över den i stället för att krascha.
 */
export function fyllMall(mall, varden) {
  // TODO: const nod = mall.content.cloneNode(true);
  //       for (const [falt, varde] of Object.entries(varden)) { ... }
  //       'lank' sätter href, allt annat sätter textContent
}

/** Ritar om hela listan. Tömmer den först. */
export function ritaKurslista(listElement, mall, kurser) {
  // TODO
}
