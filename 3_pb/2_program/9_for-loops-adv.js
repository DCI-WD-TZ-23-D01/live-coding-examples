// ---------- Schleifen in Schleifen (Doppelschleifen) ----------

// Beispiel: Terminal-Programm, also irgendeine Fläche (x/y)

console.clear();

// GRUNDPRINZIP

for (let i = 0; i <= 3; i++) {
    console.log("Äußerer Durchlauf, i =", i);
    console.log("---");
    for (let j = 0; j <= 3; j++) {
        console.log("Innerer Durchlauf, j =", j);
    }
    console.log("---");
}

console.log("----------------------");

// BEISPIEL: Grafik im Terminal - Sternenhimmel
// <-- Auskommentieren um Beispiel oben zu sehen

// Äußere Schleife, zuständig für 10 Zeilen (Höhe)
for (let i = 0; i <= 10; i++) {
    // console.log("Zeile Nr.", i);

    // Innere Schleife, zuständig für Zeichen (80)
    let string = "";
    for (let j = 0; j <= 80; j++) {
        // zufällig mit 5% Wahrscheinlichkeit Stern
        if (Math.random() < 0.05) {
            string += "*";
            // Ansonsten kalter Weltraum
        } else {
            string += " ";
        }
    }
    console.log(string);
}

console.log("----------------------");

// ---------- Schleifen und Arrays ----------

const produkte = ["Holz", "Gartenzwerg", "Blumentopf", "Heckenschere", "Decke"];

console.log(produkte[0]);
console.log(produkte[1]);
console.log(produkte[2]);
console.log(produkte[3]);
console.log(produkte[4]);

console.log("----------------------");

for (let i = 0; i <= 4; i++) {
    console.log(produkte[i]);
}

console.log("----------------------");

for (let i = 0; i < produkte.length; i++) {
    console.log(produkte[i]);
}

console.log("----------------------");

// Beispiel: Alle Strings in Kleinbuchstaben umwandeln
const wochentage = ["montag", "DIENSTAG", "Mittwoch"];
console.log("Ursprüngliches Array:", wochentage);

const wochentageKlein = []; // Datentyp: Array

for (let i = 0; i < wochentage.length; i++) {
    // console.log(wochentage[i].toLowerCase());
    // Füge kleingeschriebenen Tag dem neuen Array hinzu
    wochentageKlein.push(wochentage[i].toLowerCase());
}
console.log("Neues Array, nach Umwandlung:", wochentageKlein);
