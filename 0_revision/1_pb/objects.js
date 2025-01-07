/**
 * Objekte sind Sammlungen von Attributen und deren Werten
 */

// Objekt deklariert
const person = {
  name: "Lara",
  age: 28,
};

function greet(person) {
  console.log("Hello, ich bin", person.name);
}

greet(person);
person.name = "Ines";
greet(person);
const person2 = person; // Referenz wurde kopiert, doch alle Änderungen werden übernommen
person2.name = "Chrissi";
greet(person);
greet(person2);

const person3 = { ...person }; // Das Objekt werden mit dem Spread-Operator in ein neues Objekt übergeben
person3.name = "Ines";
greet(person);
greet(person3);

// Weitere Funktionalitäten für Objekte mit welcher API
// z.B. Object.keys Function gibt alle Attribute zurück
Object.keys(person);
