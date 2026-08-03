// ÄGS AV MARCUS. Ihopkopplingen för index.html.
//
// Ordningen:
//   1. hamtaKurser()
//   2. rita kurslistan
//   3. koppla filtret
//   4. koppla klick på kort → oppnaKursvy
//   5. koppla popstate → stangKursvy
//   6. om adressen redan har ?kurs= : öppna direkt, utan animation
//   7. koppla kontaktformulärets validering (M6, mot Bahadors markup)

import { hamtaKurser, filtrera } from './kursdata.js';
import { ritaKurslista } from './kortlista.js';
import { oppnaKursvy, stangKursvy, kursIdFranAdress } from './kursvy.js';

// TODO
