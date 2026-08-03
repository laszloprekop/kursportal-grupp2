// ÄGS AV MARCUS (M1, M2, M4)
//
// Ren logik. Den här filen rör aldrig DOM:en och känner inte till några
// klassnamn. Den kan därför användas av både index.html och
// bootstrap-jamforelse.html.
//
// FALLGROP: fetch fungerar inte via file://. Kör sidan genom en server –
// Live Server i VS Code, eller `python3 -m http.server` i projektmappen.

export const DATAKALLA = 'data/courses.json';

/** M1 – hämta alla kurser. Returnerar en array enligt docs/kursdata.md. */
export async function hamtaKurser() {
  // TODO: fetch + await + felhantering om svaret inte är ok
}

/** M2 – '2026-04-27' → '27 apr 2026' */
export function formateraDatum(isoDatum) {
  // TODO: new Date(...).toLocaleDateString('sv-SE', { day:'numeric', month:'short', year:'numeric' })
}

/** M2 – 0 → 'Kostnadsfri', 9900 → '9 900 kr' */
export function formateraPris(kronor) {
  // TODO: 0 är kostnadsfri, inte gratis och inte tomt
}

/** M2 – { value: 18, unit: 'veckor' } → '18 veckor' */
export function formateraLangd(duration) {
  // TODO
}

/**
 * M4 – filtrera kurser.
 * val ser ut så här: { provider: ['Lexicon'], level: ['Påbyggnad'] }
 * Regel enligt K2: ELLER inom en grupp, OCH mellan grupperna.
 * En tom grupp betyder "alla".
 */
export function filtrera(kurser, val) {
  // TODO
}
