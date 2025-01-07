const name = "Sono";
// name = "Antonio" // does not work
// var und let um Variablen einen neuen Wert zu zuweisen

/**
 *  Simple Datentypen:
 *  - strings
 *  - boolean
 *  - number
 *  - undefined, Wert für eine unintialisierte Variable
 *  - null, absichtlich gesetzten Wert
 *
 *  Komplexe Datentypen:
 *  - Array
 *  - Objekten
 */

function greet(name = "World") {
  // wenn name undefined ist, dann wird das in der String Berechnung zu "undefined"
  console.log("Hello " + name);
}

/**
 * Funktionen sind praktisch, um Funktionalitäten wiederzuverwenden
 */
greet();

// Wie nennt man Funktionen, die andere Funktionen als Argument akzeptieren?
// Callback-Funktion, das Argument
// HOF, Higher-Order-Function
function filter(array, callbackFilter) {
  // mit der Callback Funktion lassen sich Verhaltensweisen anpassen
  const result = [];
  for (const a of array) {
    if (callbackFilter(a)) {
      result.push(a);
    }
  }
  return result;
}

const numbers = [1, 2, 5, 8, 19, 32, 101, 1017, 2300, 4334];
const lessFiftyList = filter(numbers, (number) => number < 50);
console.log(lessFiftyList);
const moreThanHundred = filter(numbers, (number) => number > 100);
console.log(moreThanHundred);
const betweenTwoHundredAndThreeThousand = filter(
  numbers,
  (number) => number > 200 && number < 3000
);
console.log(betweenTwoHundredAndThreeThousand);

// ---------------------------------------------------------------- //

/**
 *  map, jeden Wert in einem Array zu transformieren
 */
const doubles = numbers.map((num) => num * 2);
console.log(doubles);
// num % 2, num wird durch 2 geteilt und der Rest wird übergeben
const evenDoubles = numbers
  .filter((num) => num % 3 === 0)
  .map((num) => num * 2);
console.log(evenDoubles);
