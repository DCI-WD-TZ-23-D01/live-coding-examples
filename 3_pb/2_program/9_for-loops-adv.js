// ---------- Schleifen in Schleifen (Doppelschleifen) ----------

// Beispiel: Terminal-Programm, also irgendeine Fläche (x/y)
// testen: 80 Zeichen breit, 10 Zeilen hoch

console.clear();

for (let i = 0; i < 5; i++) {
    console.log("Äußerer Durchlauf Nr.", i);
    console.log("---");
    for (let j = 0; j < 5; j++) {
        console.log("Innerer Durchlauf Nr.", j);
    }
    console.log("---");
}
