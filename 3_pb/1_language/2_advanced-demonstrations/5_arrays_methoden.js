// Array-Methoden: Hinzufügen / Entfernen von Elementen
// Teil-Arrays, Suchen im Array, String zu Array, Array zu String

console.log("--------- PUSH/POP ---------");

const products = ["Staubsauger","Gummistiefel","Quietschente","Eis"];
console.log("Array vorher:",products);

// PUSH: neues Element ans Ende des Arrays hinzufügen
products.push("Mikrofon");
console.log("Array nach push():",products);

// POP: letztes Element im Array löschen
products.pop();
console.log("Array nach pop():",products);

console.log("--------- SHIFT/UNSHIFT ---------");

// UNSHIFT: neues Element wird am Anfang des Arrays hinzugefügt
console.log("Array vorher:",products);

products.unshift("Decke");
console.log("Array nach unshift():",products);

// SHIFT: erstes Element im Array löschen
products.shift();
console.log("Array nach shift():",products);

// Mehrmals nacheinander löschen
products.shift();
products.shift();
console.log("Array nach 2x mehr shift():",products);

// -------- SLICE: Teile des Arrays --------

const animals = ["Katze","Hund","Elefant","Zebra"];
console.log("Alle Tiere:", animals);

const pets = animals.slice(0,2);
console.log("Teil-Array nur mit Haustieren:", pets);
console.log(animals);

// negative Werte für Index zählen vom Ende des Arrays
// Wenn wir 2. Wert in slice() weglassen, dann wird der ganze Rest des Arrays genommen
const zooAnimals = animals.slice(-2);
console.log(zooAnimals);

// -------- INCLUDES: Suchen nach Vorkommen im Array --------

console.log("Array animals includes Katze?", animals.includes("Katze"));
console.log("Array animals includes Katze?", animals.includes("katze"));

// -------- indexOf: Suchen nach Position im Array --------

// Falls Element im Array: Rückgabewert: Index des Elemements
console.log("Wo ist Hund im Array?", animals.indexOf("Hund"));
// Falls Element nicht im Array: Rückgabewert: -1
console.log("Wo ist hund im Array?", animals.indexOf("hund"));

// -------- Umwandlung String -> Array --------

const string = "Hallo Klasse!";
console.log(string);

// Zeichen IM split wird als eine Art Trennungssymbol benutzt und landet nicht im Array, hier: Trennungssymbol: Leerzeichen -> Ergebnis Worte
const words = string.split(" ");
console.log(words);

// Trennungszeichen: "nichts" -> Ergebnis alle Buchstaben
const letters = string.split("");
console.log(letters);

// Ergibt nicht viel Sinn in diesem Beispeil, wird aber manchmal benutzt
const keineLs = string.split("l");
console.log(keineLs);

// Nachdem der String in ein Array umgewandelt wurde, können wir Elemente ändern, z.B. das erste (Index 0) Wort ersetzen
words[0] = "Tschüss";
console.log(words);

// -------- Umwandlung Array -> String --------

// Ohne Angabe/Wert in join() wird automatisch "," als Verbindungszeichen benutzt
const newString = words.join(); 
console.log(newString);

// Mit Angabe/Wert im join, wird diese benutzt um die Elemente des Arrays zusammen zu fügen
const greeting = words.join(" "); 
console.log(greeting);