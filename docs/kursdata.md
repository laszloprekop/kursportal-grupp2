# Dataform för `data/courses.json`

Kontraktet mellan innehållet och koden. Ändras det här måste både kurskortet,
filtret och kursvyn ändras – så ändra det innan vi bygger, inte efter.

Filen är en **array av kursobjekt**. Inget omslutande objekt, ingen `data`-nyckel:

```json
[ { ...kurs }, { ...kurs } ]
```

## Två regler som gäller överallt

1. **Nycklar på engelska, värden på svenska.** Nycklarna är kod och följer
   JavaScript-konventioner. Värdena är text som besökaren läser. Det slipper
   oss `kurs.längd` med å ä ö i identifierare.
2. **Ingen formaterad text i datan.** Datum lagras som `2026-04-13`, aldrig
   som `13 apr 2026`. Pris lagras som `9900`, aldrig som `"9 900 kr"`.
   Formateringen sker i JavaScript. Annars går det inte att sortera eller
   räkna på värdena.

## Fält

| Fält | Typ | Krävs | Tillåtna värden / format |
|---|---|---|---|
| `id` | string | ja | Gemener, bindestreck, bara a–z och 0–9. Å/Ä → `a`, Ö → `o`. Används i adressen: `?kurs=teoristudier-ltu` |
| `title` | string | ja | Kursens namn som det skrivs i rubriken |
| `summary` | string | ja | **En** mening. Syns på kortet och används som `meta description` på kursvyn |
| `description` | string[] | ja | Ett stycke per element. 2–4 stycken. Syns bara i kursvyn |
| `provider` | string | ja | `Lexicon` · `Luleå tekniska universitet` · `Praktikplats` · `Nordkod` |
| `category` | string | ja | `Introduktion` · `Fullstack` · `Frontend` · `Backend` · `Design` · `Praktik` |
| `level` | string | ja | `Alla` · `Nybörjare` · `Fortsättning` · `Påbyggnad` |
| `startDate` | string | ja | `YYYY-MM-DD` |
| `endDate` | string | ja | `YYYY-MM-DD`. Måste vara efter `startDate` |
| `duration` | object | ja | `{ "value": 18, "unit": "veckor" }`. `unit` är `veckor` eller `dagar` |
| `price` | number | ja | Heltal i kronor, utan mellanslag. **`0` betyder kostnadsfri** och skrivs ut som "Kostnadsfri" |
| `program` | boolean | ja | `true` om kursen är en av de fyra delarna i det elva månader långa programmet |

### Varför både `duration` och datumen?

Datumen är sanningen – de går att räkna på, och det är dem illustrationerna i
riktning C använder för att veta vilken del av året en kurs ligger i.
`duration` finns för att kunna skriva "18 veckor" respektive "29 dagar" utan
att räkna om, eftersom kurserna använder olika enheter.

Om de två motsäger varandra gäller datumen.

## Så här filtrerar vi

Filtret arbetar mot `provider`, `category` och `level`. Just därför är de tre
fasta listor och inte fri text – ett stavfel i datan blir annars en tom
filterknapp.

## Att fylla i

De fyra programkurserna och två exempelkurser finns i filen. Det som saknas är
ungefär fyra öppna kurser till, så att filtret har något att göra. De ska ha:

- `program: false`
- ett riktigt pris (inte `0`)
- olika `level` och `category`, annars fyller de ingen funktion
- startdatum efter 2026-08-01

Beskrivningarna får hittas på. Det är ett påhittat utbildningsföretag.
