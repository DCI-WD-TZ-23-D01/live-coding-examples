/* ----------------------------------------

22.04.2024 | Arrays - Intro + Methoden

- Was sind Arrays?
- Array-Grundlagen (Index, Length)
- Array-Methoden

---------------------------------------- */

// Stellt euch überall einfache Anführungzeichen ('') vor, ich persönlich schreibe weiterhin doppelte ("")

// ---------- ARRAY GRUNDLAGEN ----------

// Bisherige "primitive" Datentypen: Strings (Zeichenketten), Numbers (Zahlen), Booleans (Wahrheitswerte) - d.h. jede Variable hat nur einen Wert

const string = "Hallo Klasse!"; 
let anzahl = 3;
let binIchEingeloggt = true;

// Neu: "fortgeschrittener" (advanced) Datentyp - eine Variable kann mehrere Werte enthalten
const emptyNames = []; // Datenty Array
console.log(emptyNames);

// Ein Array ist eine Liste von vielen Dingen
// Variablenname wird meist nach Inhalt und in Mehrzahl-Form angelegt
// Liste mit Namen -> names, Liste mit Produkten -> products

const names = ["Hans","Petra","Isabel"];
console.log(names);

console.log(names[0]); // Ausgabe 1. Element des Arrays

// ---------- ZUGRIFF AUF ELEMENTE IM ARRAY ----------

// Man kann unterschiedliche Datentypen in ein Array stecken

// Element      1.      2.   3.  4.    5.
// Pos/Index    0       1    2   3     4

const years = [1882, "2058", 3, 105, true];
console.log(years);

// Mit der Eigenschaft .length können wir uns die Anzahl der Elemente im Array ausgeben lassen
console.log(years.length);

// Mit Array.length - 1 hat man den Index vom letzten Element im Array
console.log(years[years.length -1]); // Letzes Element im Array

// ---------- ZUGRIFF/ÜBERSCHREIBEN VON ELEMENTEN IM ARRAY ----------

// Arrays immer mit const deklarieren, ansonsten kann man es überschreiben, bzw. den Datentypen ändern

// let products = ["Staubsauger","Gummistiefel","Quietschente","Eis"];
// products = "Huch, Array ist weg?";

const products = ["Staubsauger","Gummistiefel","Quietschente","Eis"];

// Zur Erinnerung: Variablen konnten nur mit Variablennamen einen neuen Wert bekommen (Zuweisung)
// let zahl = 4;
// zahl = 3;

// Hier: Zuweisung für neuen Wert *eines Elements* im Array
// Hinzufügen neues Element am Index 4 (Array ging vorher nur bis Index 3)
products[4] = "Kaffeekanne";
// kein Element am Index 5
products[6] = "Butter";

console.log(products);
console.log(products.length); // Wenn man ein Element auslässt, wird dieses in .length mitgezählt

products[0] = "Staub"; // Eigentlich Staubsauger, überschreibt Element
console.log(products);

