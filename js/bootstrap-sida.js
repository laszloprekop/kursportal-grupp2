// ÄGS AV MARCUS. Ihopkopplingen för bootstrap-jamforelse.html.
//
// Samma import, samma anrop, samma renderare som app.js.
// Skillnaden mellan sidorna ska ligga i mallen och i klasserna – inte här.
// Blir den här filen olik app.js har vi tappat poängen med ADR 0003.

import { hamtaKurser, filtrera } from './kursdata.js';
import { ritaKurslista } from './kortlista.js';

// TODO
