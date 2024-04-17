console.log('='.repeat(25) + 'DIE MATH BIBLIOTHEK' + '='.repeat(25));

// Um mathematische berechnungen und methoden zu vereinfachen, bietet uns javascript die Math bibliothek, die verschieden methoden beinhaltet, mit der wir zahlen bearbeiten können.

// link zur MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

console.log('='.repeat(25) + 'Auf und abrunden' + '='.repeat(25));

console.log('Math.ceil();');
// mit der methode .ceil(); können wir eine kommazahl aufrunden.
console.log('Aufgerundet', Math.ceil(2.3));

console.log('Math.floor();');
// mit der methode .floor(); können wir eine kommazahl abrunden.
console.log('Abgerundet', Math.floor(2.7));

console.log('Math.round();');
// zur nächstgelegenen zahl runden könnnen wir mit der methode .round();
console.log('Runden', Math.round(2.2));
console.log('Runden', Math.round(2.7));

console.log('='.repeat(25) + ' PI ' + '='.repeat(25));

console.log('Math.PI');
// um pi zu bekommen, können wir die property .PI benutzen.
console.log('Pi:', Math.PI);

console.log('='.repeat(25) + ' Zufallszahlen ' + '='.repeat(25));

// in Javascript können wir mit der Math bibliothek zufallszahlen generieren. Dafür nutzen wir die methode .random();

// Ohne weitere einstellungen gibt uns Math.random(); eine zufällige zahl zwischen 0.0 und 1.0 aus.
console.log('Zufallszahl zwischen 0.0 und 1.0:', Math.random());

// zufallszahlen von 0-10. Die startzahl ist 0, da wir die 10 mit einschließen wollen, muss die höchste zahl eins höher sein, als die gewünschte zahl.
console.log('Zufallszahl von 0-10:', Math.random() * 11);

// meist schreiben wir einen zufallsgenerator so, das wir die endzahl angeben und + 1 dahintersetzen, mit math floor, runden wir das endergebnis dann ab.
const endZahl = 20;
console.log('Zufallszahl von 1-20:', Math.floor(Math.random() * endZahl) + 1);

// zufallszahlen von einer start zu einer endzahl. (x-y)
const min = 5;
const max = 10;
const random = Math.floor(Math.random() * (max - min + 1)) + min;

console.log('von 5 - 10:', random);

// 10 - 5 + 1 = 6
// 6 + 5 = 11

// wir wollen eine zahl zwischen 5 und 10.
// wir berechnen max (10) - min(5) = 5
// addieren 1, für den floor, = 6
// addieren jetzt den minimalwert = 5;

// durch das addieren des minimalwertes haben wir immer MINDESTENS den minimalwert + das ergbnis der berechnung.

console.log('='.repeat(25) + 'Maximale und Minimale Zahlen' + '='.repeat(25));

// mit Math.max(); können wir uns die größte zahl aus einer reihe von zahlen ausgeben lassen.
console.log('Größte zahl über 0 haben:', Math.max(1, 3, 5, 2, 7, 9, 0, 4));
console.log('Größte zahl unter 0:',      Math.max(-1, -3, -2));
console.log('Größte zahl:',              Math.max(-1, 4, 2, -2, 3, 0));

// mit Math.min(); können wir uns die kleinste zahl aus einer reihe von zahlen ausgeben lassen.
console.log('Kleinste zahl', Math.min(2, 3, 1, 6, 7, -1));

console.log('='.repeat(25) + 'Zahlen abschneiden' + '='.repeat(25));

// mit Math.trunc(); können wir zahlen am punkt abschneiden.
console.log(Math.trunc(13.89));
console.log(Math.trunc(0.123));
console.log(Math.trunc(-2.25));

console.log('='.repeat(25) + 'Absolute unterschied' + '='.repeat(25));

// mit Math.abs(); bekommen wir den unterschied zwischen zwei zahlen, was zum beispiel bei abstandsberechnung, oder entfernungsmessungen sinnvoll ist.
// wir schreiben den ersten wert minus den zweiten wert innerhalb der funktionsübergabe.
console.log(Math.abs(-1.22 - 7.84));
