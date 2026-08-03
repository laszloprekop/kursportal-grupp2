// ÄGS AV MARCUS (M5). Fokushanteringen granskas av Bahador (B4).
//
// Kursvyn enligt ADR 0001: en egen vy med egen adress, inte en modal.
//
// Att öppna en kurs ska:
//   1. fylla #kursvy med kursens värden
//   2. history.pushState({ id }, '', '?kurs=' + id)
//   3. spara window.scrollY så att huvudvyn kan återställas
//   4. flytta fokus in i kursvyn
//   5. ta huvudvyn ur tabbordningen (inert eller aria-hidden + hidden)
//
// Att stänga ska göra samma sak baklänges och lämna fokus till kortet man
// klickade på.
//
// popstate ska köra samma stängning, så att webbläsarens bakåtknapp fungerar.
// Laddas sidan med ?kurs=<id> visas vyn direkt, UTAN animation.
//
// FALLGROP: history.pushState fungerar inte via file://. Kör genom en server.
// FALLGROP: kursvyn får inte ligga sida vid sida med huvudvyn i en flexrad –
// huvudvyn är flera tusen pixlar hög. Kursvyn är ett eget lager.

export function oppnaKursvy(kurs, { animera = true } = {}) {
  // TODO
}

export function stangKursvy({ animera = true } = {}) {
  // TODO
}

/** Läser ?kurs= vid sidladdning. Returnerar id eller null. */
export function kursIdFranAdress() {
  // TODO: new URLSearchParams(location.search).get('kurs')
}
