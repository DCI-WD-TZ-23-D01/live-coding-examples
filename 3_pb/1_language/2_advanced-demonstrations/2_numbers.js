console.log('='.repeat(25) + ' NUMBERS ' + '='.repeat(25));

console.log('='.repeat(25) + ' Exponenten ' + '='.repeat(25));

// Große nummern können wir mit exponenten-notation schreiben (e + anzahl von nullen);
console.log(500000000000000000000);
console.log(5e20);

// um eine größere zahl zu schreiben können wir den exponenten nutzen, indem wir e plus die anzahl an nullen hinter die zahl schreiben.

console.log('='.repeat(25) + 'Strings und nummern kombinieren' + '='.repeat(25));

const kombinationsExample1 = 4 + '3';
console.log(kombinationsExample1);

// wenn wir eine zahl mit einem string addieren wollen, bekommen wir einen string zurück, mit beiden zahlen hintereiander.
// mit einem plus direkt vor dem string, wandeln wir einen string, der eine zahl enthält, in einen integer - also eine zahl, um.
const kombinationsExample2 = 4 + +'3';
console.log(kombinationsExample2);

console.log('='.repeat(25) + 'Strings in nummern umwandeln' + '='.repeat(25));

console.log('parseInt();');
// mit der funktion parseInt(); können wir einen string zu einer nummer umwandeln.
const parseExample1 = '25';
console.log('String:', parseExample1);
console.log('Int:   ', parseInt(parseExample1));

// bei kommazahlen, wird das integer ergebnis (Integer sind ganze zahlen) als die erste zahl angegeben, die gefunden wird.
const parseExample2 = '2.5';
console.log('String:', parseExample2);
console.log('Int:   ', parseInt(parseExample2));

console.log('parseFloat();');
// mit parseFloat(); können wir kommazahlen im string zu dezimalzahlen, oder sogenannten "floats" (floating number) konvertieren.
console.log('Float: ', parseFloat(parseExample2));

console.log('nicht umgewandelt:', 4 + parseExample2);
console.log('umgewandelt:      ', 4 + parseFloat(parseExample2));

console.log('.toFixed();');

// mit der methode .toFixed(); können wir entscheiden, wie viele kommastellen eine zahl haben soll, sie wird dabei in einen string umgewandelt.
const fixedExample = 3.1415926535897932384626433832795028841971;
console.log('2. kommastellen', fixedExample.toFixed(2));
console.log('5. kommastellen', fixedExample.toFixed(5));
console.log('Als Nummer     ', parseFloat(fixedExample.toFixed(5)));

// Javascript nummern sind akkurat bis zu 15. stelle
console.log('15 stellen:', 999999999999999);
console.log('16 stellen:', 9999999999999999);

console.log('='.repeat(25) + ' Division by Zero ' + '='.repeat(25));
// NIEMALS teilen wir durch 0, das ganze universum könnte dadurch zusammenbrechen. NIEMALS. NIEMALS. NIEMALS. NIEMALS. NIEMALS. NIEMALS.
console.log(7 / 0);
// Niemals durch null teilen. "KEEP THE UNIVERSES SAFE";

console.log('='.repeat(25) + ' Counter iteration (Zähler erhöhen/reduzieren' + '='.repeat(25));

// mit ++ haben wir eine kurzschreibweise von + 1; oder mit -- haben wir eine kurzschreibweise von - 1;

let studentCount = 22;

console.log(studentCount);

studentCount++; // gleichbedeutend mit studentCount = stundentCount + 1;
// studentCount = studentCount + 1;

console.log(studentCount);

studentCount--; // gleichbedeutend mit studentCount = stundentCount - 1;

console.log(studentCount);
