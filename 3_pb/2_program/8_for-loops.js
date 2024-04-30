// 30.04.2024: for-loops (for-Schleifen)

console.clear();

// In Programmierung wird oft die gleiche Sache mehrmals
// nacheinander ausgeführt, Bsp.: Besucher zählen

let besucher = 0; // Museum öffnet
console.log(besucher);

besucher++; // das gleiche wie: besucher = besucher + 1;
console.log(besucher);

besucher++;
console.log(besucher);

besucher++;
console.log(besucher);

besucher++;
console.log(besucher);

besucher++;
console.log(besucher);

// DRY - Don't Repeat Yourself - Wiederhole dich nicht!

// ---------- Lösung: Schleifen! ----------

// Prinzip: von START -> bis ENDE
// Während Schleife läuft: Führe X aus.
// i - Iterator, i - "Zähler", falls er nur als Schleifenzähler
// benutzt wird, andere Variablennamen sind auch möglich

console.log("~~~~~~~~~~~~~~~~");

for (let i = 1; i <= 5; i++) {
    besucher++; // das gleiche wie: besucher = besucher + 1;
    console.log(besucher);
}

// ---------- Weitere Beispiel-Schleifen: ----------

// Schleife zählt von 1 bis 10, Schrittgröße: +1

for (let i = 1; i <= 10; i++) {
    console.log("   ", i);
}

console.log("~~~~~~~~~~~~~~~~");

// Schleife zählt von 2 bis 20, Schrittgröße: +2

for (let i = 2; i <= 20; i = i + 2) {
    console.log("   ", i);
}

console.log("~~~~~~~~~~~~~~~~");

// Schleife zählt von 10 bis 1, Schrittgröße: -1

for (let i = 10; i >= 1; i--) {
    console.log("   ", i);
}

// Tipp: Wenn Schleife endlos läuft, könnt ihr diese im Terminal
// abbrechen mit: STRG + C

// Praxisbeispiel (vorgegriffen):
// HTML dynamisch aus einer sich ständig ändernden Datenquelle erzeugen

const produkte = ["Holz", "Waschbecken", "Pflanze", "Stofftier", "Eis"];

for (let i = 0; i < produkte.length; i++) {
    console.log(`<div><h2>${produkte[i]}</h2></div>`);
    // Wir machen das später nicht mit console.log,
    // hier nur zur Demonstration
}

console.log("~~~~~~~~~~~~~~~~");

// Beispiel: Summe von START:1 bis ENDE:10

let sum = 0; // globaler Block Scope

for (let i = 1; i <= 10; i++) {
    sum = sum + i; // Zuweisung
    console.log(sum);
}

console.log("Ende Schleife 1:", sum); // Ausgabe

// Globale Variablen können in späteren Schleifen weiter verwendet werden

console.log("~~~~~~~~~~~~~~~~");

for (let i = 1; i <= 10; i++) {
    sum = sum - i; // Zuweisung
    console.log(sum);
}

console.log("Ende Schleife 2:", sum); // Ausgabe

// ---------- Strings mit Schleifen erzeugen ----------

// Beispiel: String mit 50 Zeichen, jedes 10. anders

let string = "";

for (let i = 0; i <= 50; i++) {
    if (i % 10 === 0) {
        string = string + "^"; // jedes 10. Zeichen ist ein Hai
    } else {
        string = string + "~"; // ansonsten Wellen
    }
}
console.log(string);

// ---------- Schleifen in Schleifen (Doppelschleifen) ----------
