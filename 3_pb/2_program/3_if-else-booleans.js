console.clear();

console.log('='.repeat(5), 'Vergleiche', '='.repeat(5));

console.log('='.repeat(5), '1. Booleans', '='.repeat(5));

/**
 * ein boolean variablennamen schreiben wir immer als frage, also zb:
 * isAdmin > ist es ein admin?
 * hasContent > hat es inhalt?
 * isLoggedIn > ist die person eingeloggt?
 * isAuthenticated > ist die person authentifiziert?
 * hasOrdered > hat bestellt?
 * isRed > ist rot?
 * isCar > ist ein auto?
 * hasWheels > hat es reifen?
 * 
 * So sehen wir, direkt, wenn wir mit der variable arbeiten, was sie beinhaltet, nämlich die antwort, auf die frage, die wir stellen.
 */

const isTestValue = true;

// wenn etwas wahr ist, führe diesen fall aus.
if(isTestValue === true) {
    console.log('Dies ist wahr');
}

// eine kurzform für einen positiven vergleich, ist, nur den variablennamen zu schreiben:
if(isTestValue) {
    console.log('Dies ist wahr');
}

console.log('='.repeat(5), '2. Strings', '='.repeat(5));

// die folgende variable beinhaltet einen string, wenn dieser mit text gefüllt ist, dann hat die variable einen inhalt. Wenn dort kein text steht, ist der inhalt "null", also nicht vorhanden (garnichts). Da der text dann GARKEINEN inhalt hat, kann man auf ihn auch nicht prüfen, also ist er false.

const testString = 'Dies ist ein string';

// anstelle von testString.length > 0, reicht es hier, wenn wir vergleichen ob der string überhaupt existiert.

if(testString) {
    console.log('Dies wird aufgefürt, wenn der test string vorhanden ist');
}

// wenn der string leer ist, ergibt die if prüfung false, und der code block wird nicht ausgeführt.

console.log('='.repeat(5), '3. Numbers', '='.repeat(5));

// da 0 false ist, sind alle anderen zahlen true.
const testNummer = 0;

if(testNummer) {
    console.log('Dies wird nur angezeigt, wenn die nummer nicht 0 ist');
}

// wollen wir auf 0 prüfen, und bei 0 ein if statement ausführen, müssen wir wieder einen vergleich schreiben:
if(testNummer === 0) {
    console.log('Dies wird angezeigt, wenn die nummer 0 ist');
}
