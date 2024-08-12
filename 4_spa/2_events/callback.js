/* 
Funktion höherer Ordnung (Higher Order Function) sind Funktionen, die
1. eine Funktion als Argument nehmen
2. eine Funktion zurückgeben
Bei 1. wird die Funktion, die übergeben wird, als Callback bezeichnet
*/

/* 

*/

function myMap(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i]);
    newArray.push(result);
  }
  return newArray;
}

const zahlen = [1, 2, 3, 4, 5];
function verdoppeln(arrayElement) {
  return arrayElement * 2;
}
const ergebnis1 = myMap(zahlen, verdoppeln);
console.log(ergebnis1);

const ergebnis2 = myMap(zahlen, (element) => -element);
console.log(ergebnis2);