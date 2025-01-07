// Primzahl: Jede Zahl, die nur dich sich selbst und 1 teilbar
/**
 * Sieb von Erastosthenes
 * 1) Initialisierung
 * 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
 * 2) prim = 2
 * 1 2 3 _ 5 _ 7 _9 _ 11 _ 13 _ 15 _ 17 _ 19
 * 3) prim = 3
 * 1 2 3 _ 5 _ 7 _ 11 _ 13 _ 17 _ 19
 */

/**
 * 1. Initialisieren einen Array von 1..n
 * 2. Wählen die erste Primzahl (2)
 * 2.1 Markiere Zahlen als Primzahl
 * 2.2 Nehme die nächste nicht markierte Zahl
 * 3. Schritt 2 wird wiederholt bis alle Primzahlen ausgesucht worden sind
 */

// Parsen die Eingabe vom Terminal
// Wir wollen die dritte Eingabe
let amount = process.argv.at(2) ?? 20; // 1. Fall: keine Eingabe
amount = parseInt(amount) || 20; // Fehlerhafte Eingabe: Buchstaben oder 0
const isPrime = new Array(amount + 1).fill(true); // Array ist 0-indiziert und alle Zahlen werden auf true initialisiert
isPrime[0] = false;
isPrime[1] = false;

// Wir fangen bei der Zahl 2 an und markieren jede Zahl die durch i teilbar ist
for (let i = 2; i < isPrime.length; i++) {
  if (isPrime[i]) {
    // Jedes Vielfaches einer Primzahl ist automatisch keine Primzahl
    // Wir können bei i*i starten, da die vorherigen Zahlen entweder Primzahlen sind oder durch vorherige Primzahlen gefiltert wurden
    for (let j = i * i; j < isPrime.length; j += i) {
      isPrime[j] = false;
    }
  }
}

let primes = [];
for (let i = 2; i < isPrime.length; i++) {
  if (isPrime[i]) {
    primes.push(i);
  }
}

console.log(primes);
