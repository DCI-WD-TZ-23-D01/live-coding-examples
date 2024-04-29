// User-Eingaben im Terminal

// argv - "Prozess Argument Values" = Werte die dem Prozess mitgegeben werden (beim Aufruf des Programms im Terminal mit node <JS-Datei>)

// console.log(process.argv);

// ---------- ERKLÄRUNG process.argv ----------

/* in process.argv stehen als Array:

1. Element (Index 0) - Speicherort des node-Programms
2. Element (Index 1) - Speicherort der js-Datei, die mit node ausgeführt wird
ab 3. Element (Index 2) - alle Sachen, die wir mit in der Kommandozeile eingegeben haben - Datentyp: STRING!

*/

/* ---------- Beispiel-Eingaben im Terminal: ----------

// Unterschiedliche Eingaben sind durch Leerzeichen getrennt

$ node 7_terminal_input.js Hallo 1 2 3 4
[
  '/home/christian/.nvm/versions/node/v20.12.2/bin/node',
  '/home/christian/dci/live-coding-examples/3_pb/2_program/7_terminal_input.js',
  'Hallo',
  '1',
  '2',
  '3',
  '4'
]

---------- BEISPIEL #2 ----------

$ node 7_terminal_input.js Hallo1234
[
  '/home/christian/.nvm/versions/node/v20.12.2/bin/node',
  '/home/christian/dci/live-coding-examples/3_pb/2_program/7_terminal_input.js',
  'Hallo1234'
]
*/

// console.clear();

const userInput = process.argv.slice(2); // Schneiden zwei Elemente am Anfang des Arrays ab, weil wir die nicht brauchen

// console.log(userInput);

// --------------------------------------------------------------------------------

// BEISPIEL: Programm zur Berechnung von Fahrkartenpreisen
// Ausgeführt: node <Dateiname> <Bahncard> <Fahrkartenpreis>

const bahncard = Number(userInput[0]);
const fahrkarte = Number(userInput[1]);

// Testen, was im Programm ankommt:
// console.log("Bahncard:", bahncard);
// console.log("Preis Fahrkarte:", fahrkarte);

switch (bahncard) {
    case 25:
        console.log(`Gesamt-Kosten: ${(fahrkarte * 0.75).toFixed(2)} EUR.`);
        break;
   case 50:
        console.log(`Gesamt-Kosten: ${(fahrkarte * 0.5).toFixed(2)} EUR.`);
        break;
   case 100:
        console.log(`Gesamt-Kosten: 0 EUR.`);
        break;
   default:
        console.log("Bahncard-Rechner: node <Datei> <Bahncard> <Fahrkartenpreis>");
}