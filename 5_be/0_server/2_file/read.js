import fs from "fs";

const randomNumber = Math.floor(Math.random() * 100) + 1;

// console.log(randomNumber);

fs.readFileSync("./randomNumber.txt", "utf-8");
// console.log("Hello");

const file = fs.readFileSync("./user.json", "utf-8"); // Wichtig, richtige Kodierung nicht vergessen
console.log(file); // Bis jetzt hier nur ein string
console.log(file.name); // Das versteht JS nicht, die Datei wurde noch nicht übersetzt
const user = JSON.parse(file); // Übersetzung von einem String zu einem JSON
console.log(user.name);
