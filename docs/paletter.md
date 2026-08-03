# Paletter – ett block per riktning

När K1 är avgjord: kopiera rätt block in i `css/tokens.css` och ersätt
platshållarna. Tokennamnen är desamma i alla fem – bara värdena skiljer.

Kontrasterna nedan är mätta mot den yta texten faktiskt ligger på. Alla
textvärden klarar 4,5:1. Ändrar ni ett värde, mät om.

---

## A – Kraftverk

```css
--nk-yta-1: #0E2A33;
--nk-yta-2: #E8EDEC;
--nk-yta-3: #12444F;
--nk-text-1: #0E2A33;
--nk-text-2: #5C767B;
--nk-text-pa-accent: #0E2A33;
--nk-text-pa-yta-3: #7FA9A5;
--nk-accent: #C96A3B;
--nk-accent-2: #7FA9A5;
--nk-linje: #C7D2D0;
--nk-fokus: #E2A579;
--nk-typ-display: "Familjen Grotesk", sans-serif;
--nk-typ-brod: "Public Sans", sans-serif;
--nk-typ-data: "IBM Plex Mono", monospace;
--nk-radie-liten: 2px;
--nk-radie-stor: 2px;
```

⚠️ Koppar finns i tre varianter. `--nk-accent` är **ytfärgen**. På mörk
bakgrund ska text vara `#E2A579`, på ljus `#A0501F`. Använd aldrig `#C96A3B`
till text – den mäter 4,0:1 och underkänns.

## B – Serverhall

```css
--nk-yta-1: #E8EDF2;
--nk-yta-2: #FFFFFF;
--nk-yta-3: #1B222B;
--nk-text-1: #1B222B;
--nk-text-2: #677788;
--nk-text-pa-accent: #FFFFFF;
--nk-text-pa-yta-3: #D6DEE7;
--nk-accent: #4C8FD6;
--nk-accent-2: #E2A03F;
--nk-linje: #D6DEE7;
--nk-fokus: #7FB4E8;
--nk-typ-display: "Archivo", sans-serif;
--nk-typ-brod: "Inter", sans-serif;
--nk-typ-data: "JetBrains Mono", monospace;
--nk-radie-liten: 6px;
--nk-radie-stor: 10px;
```

⚠️ `--nk-accent` som **text** på den mörka ytan mäter bara 3,7:1. Använd
`#7FB4E8` för blå text på mörkt.

## C – Polarnatt

```css
--nk-yta-1: #191A3E;
--nk-yta-2: #A8A6C4;
--nk-yta-3: #24243C;
--nk-text-1: #F4EFE6;
--nk-text-2: #A8A6C4;
--nk-text-pa-accent: #191A3E;
--nk-text-pa-yta-3: #F4EFE6;
--nk-accent: #E9A25C;
--nk-accent-2: #D9758A;
--nk-linje: #3B3A6B;
--nk-fokus: #F6E7C8;
--nk-typ-display: "Momo Trust Display", serif;
--nk-typ-brod: "Figtree", sans-serif;
--nk-typ-data: "IBM Plex Mono", monospace;
--nk-radie-liten: 8px;
--nk-radie-stor: 18px;
```

C är den enda riktningen med **mörk sida och ljus text**. Kontrollera att
`--nk-text-1` används mot `--nk-yta-1` och inte tvärtom.

## D – Simplicity

```css
--nk-yta-1: #FFFFFF;
--nk-yta-2: #F5F8FC;
--nk-yta-3: #F5F8FC;
--nk-text-1: #0E1A2B;
--nk-text-2: #5B6675;
--nk-text-pa-accent: #FFFFFF;
--nk-text-pa-yta-3: #0E1A2B;
--nk-accent: #E2231A;
--nk-accent-2: #002F6C;
--nk-linje: #E6E9EE;
--nk-fokus: #002F6C;
--nk-typ-display: "Sofia Sans Semi Condensed", sans-serif;
--nk-typ-brod: "Atkinson Hyperlegible", sans-serif;
--nk-typ-data: "IBM Plex Mono", monospace;
--nk-radie-liten: 4px;
--nk-radie-stor: 4px;
```

D har inget mörkt band. `--nk-yta-3` är samma ljusa ton som `--nk-yta-2` –
sidfoten skiljs ut med luft, inte med färg.

## E – Laboratorium

```css
--nk-yta-1: #E9E5DF;
--nk-yta-2: #F7F5F1;
--nk-yta-3: #14171A;
--nk-text-1: #2A2723;
--nk-text-2: #6E685F;
--nk-text-pa-accent: #2A2723;
--nk-text-pa-yta-3: #F0DFC0;
--nk-accent: #E08A2E;
--nk-accent-2: #3E7C88;
--nk-linje: #D9D3CA;
--nk-fokus: #3E7C88;
--nk-typ-display: "Parkinsans", sans-serif;
--nk-typ-brod: "Inter", sans-serif;
--nk-typ-data: "JetBrains Mono", monospace;
--nk-radie-liten: 8px;
--nk-radie-stor: 16px;
```

⚠️ `--nk-yta-3` är displayfönstren, inte sidfoten. E:s sidfot är porslin som
resten. Turkos som **text** på mörkt ska vara `#7FC3D0`, inte `#3E7C88`.

---

## Typsnitt som måste laddas

Alla utom systemtypsnitten kommer från Google Fonts. Lägg `<link>` i `<head>`
– Bahador äger den delen (B1).

| Riktning | Google Fonts-familjer |
|---|---|
| A | Familjen Grotesk, Public Sans, IBM Plex Mono |
| B | Archivo, Inter, JetBrains Mono |
| C | Momo Trust Display, Figtree, IBM Plex Mono |
| D | Sofia Sans Semi Condensed, Atkinson Hyperlegible, IBM Plex Mono |
| E | Parkinsans, Inter, JetBrains Mono |

Ladda bara de vikter ni faktiskt använder. Varje extra vikt är en fil till.
