// mit console.clear(); können wir den inhalt der konsole löschen
console.clear();

/**
 * IF statement
 * Mit einem if statement können wir bestimmen, das etwas passiert, wenn ein bestimmer fall eintritt.
*/

console.log("=".repeat(5), "1. IF Vergleich", "=".repeat(5));

// variable um die abfrage zu testen.
const testNummer = 5;

console.log(testNummer);

// ein if-statement starten wir, indem wir if schreiben, gefolgt von klammern. In diese klammern, setzen wir unsere "frage", die ausgewertet werden soll.
// nach den klammern starten wir einen code block, in dem wir code schreiben, der nur ausgeführt werden soll, wenn die frage positiv beantwortet werden kann. diesen code block schreiben wir in geschwungene klammern > {}

// wenn (wert kleiner gleich 5)
if(testNummer <= 5) {
    console.log('Ich werde nur angezeigt, wenn das if-statement zutrifft!');

    console.log('noch mehr code...');
}

// wenn die abfrage zutrifft, wird das console.log(); in unserem code block ausgeführt, wenn nicht, wird der komplette code-block ignoriert.

console.log('Hier geht das programm weiter...');

console.log('='.repeat(5), "2. If vergleich mit logischem UND", '='.repeat(5));

// wenn wir wollen, das mehrere dinge zutreffen müssen, um ein if auszuführen, können wir diese innerhalb der if abfrage angeben, und mit einem logischen und verbinden, ein logisches und schreiben wir mit doppelten & zeichen.

const testName = 'Max';

if(testNummer === 5 && testName === "Max") {
    console.log('Ich werde nur angezeigt, wenn das ergebnis 5 ist, UND der name "Max" ist.');
}

console.log('='.repeat(5), "3. If vergleich mit logischen ODER", '='.repeat(5));

// wenn wir wollen, das nur ein oder mehrere fälle unseres vergleiches zutreffen, nutzen wir dafür das logische oder, das wir mit doppelten pipes angeben ||

if(testNummer === 5 || testName === "Max") {
    console.log('Ich werde nur angezeigt, wenn das ergebnis 5 ist, ODER der name Max ist, oder beides.');
}

// als erstes wird geschaut, ob der erste vergleich zutrifft, sollte dies zutreffen, wird das if statement ausgeführt, wenn nicht, wird geschaut, ob die zweite frage stimmt, sollte dies zutreffen, wird der code block ausgeführt. andernfalls wird der code block ignoriert.

console.log('='.repeat(5), "4. Boolean shortcode", '='.repeat(5));

const testBoolean = false;

// Bei einem boolean müssen wir den wert nicht vergleichen, da die variable ja aus dem wert besteht.
if(testBoolean) {
    console.log("Ich werde angezeigt, wenn der boolean zutrifft")
}

// wenn wir einen boolean in ein if statement einsetzen, und dieser true ergibt, wird das if statement automatisch ausgeführt, sollte der boolean auf false stehen, wird das if statement nicht ausgeführt, denn false === false ergibt false. Wollen wir, das ein if statement mit einem false ausgeführt wird, müssen wir die frage wieder eingeben, also: if(variable === false) {}
