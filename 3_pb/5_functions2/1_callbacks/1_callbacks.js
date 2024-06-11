// Wiederholung: Verschiedene Variante, eine Funktion zu erstellen

// Function Declaration
function calcSum(num1, num2) {
  return num1 + num2;
}
console.log(calcSum(2, 3));

// Function Expression
const calcSumExp = function (num1, num2) {
  return num1 + num2;
};
console.log(calcSumExp(2, 3));

// Arrow Function
const calcSumArrow = (num1, num2) => {
  return num1 + num2;
};
// Wenn der Funktionskörper nur aus einer Zeilen Code besteht, kann man die geschweiften Klammer und das return-Schlüsselwort weglassen
const calcSumArrowOneLine = (num1, num2) => num1 + num2;

// Mein kann eine Funktion als Wert einer Variable zuweisen. Dabei schreibt man keine (), weil man die Funktion nicht aufruft, sondern als Wert benutzt
const myVar = calcSum;
console.log(myVar(4, 5));
console.log(myVar === calcSum); // true
console.log(myVar.toString());
console.log(typeof myVar); // function

/* 
Higher-order function / Funktion höherer Ordnung
Higher-order function ist
- eine Funktion, die eine Funktion als Argument nimmt <-- das behandeln wir heute
- und/oder eine Funktion, die eine Funktion zurückgibt/returnt.

Eine Funktion, die man an einer higher-order function als Argument übergibt, nennt man eine Callback Function
*/

// Diese Funktion nimmt eine Callbackfunktion als Argument und ruft sie mit den Werten 5 und 2 auf
function higherOrderDemo(callback) {
  console.log("Diese Callback-Funktion wurde übergeben:");
  console.log(callback.toString());
  const result = callback(5, 2);
  return result;
}
// Ich übergebe eine bereits definierte Callback-Funktion mit dem Funktionsnamen
console.log(higherOrderDemo(calcSum));

function higherOrderCalc(num1, num2, callback) {
  console.log("Diese Callback-Funktion wurde übergeben:");
  console.log(callback.toString());
  const result = callback(num1, num2);
  return result;
}

console.log(higherOrderCalc(102, 34, calcSum));

// Aufgabe: Erstelle eine Funktion subs(). Sie soll zwei Zahlen als Parameter haben und die Differenz berechnen (num1 - num2). Dann übergebe diese Funktion als Callback an higherOrderCalc, um 23 - 9 zu berechnen.
function subs(num1, num2) {
  return num1 - num2;
}
console.log(higherOrderCalc(23, 9, subs));

// Ich definiere hier eine anonyme Callback-Funktion mit einer Function Expression
const result1 = higherOrderCalc(6, 3, function (num1, num2) {
  return num1 - num2;
});
console.log(result1);

// Ich definiere hier eine anonyme Callback-Funktion mit einer Arrow Function
const result2 = higherOrderCalc(7, 2, (num1, num2) => {
  return num1 - num2;
});
console.log(result2);

const result3 = higherOrderCalc(45265, 13412, (num1, num2) => num1 - num2);
console.log(result3);
// Aufgabe: Berechne das Produkt aus 42 und 7 (42 * 7), indem ihr higherOrderCalc mit den Zahlen und einer anonymen Arrow Function aufruft.
const result4 = higherOrderCalc(42, 7, (num1, num2) => num1 * num2);
console.log(result4);

// Unsere Daten
const shoppingBasket = [
  { id: 1, offer: false, product: "Oranges", price: 1.2, quantity: 2 },
  { id: 2, offer: false, product: "Apples", price: 0.9, quantity: 6 },
  { id: 3, offer: true, product: "Bananas", price: 0.5, quantity: 3 },
  { id: 4, offer: false, product: "Cat food", price: 1.0, quantity: 12 },
];

// Preis berechnen
function getProductPrice(product) {
  return (product.price * product.quantity).toFixed(2);
}
console.log(
  getProductPrice({
    id: 1,
    offer: false,
    product: "Oranges",
    price: 1.2,
    quantity: 2,
  })
);

// Ich möchte jetzt das ganze shoppingBasket-Array nehmen, die Preise alle Objekte berechnen und die Ergebnisse in einem neuen Array haben ["2.40", "5.40", "1.50", "12.00"]
let newArray = [];
for (let i = 0; i < shoppingBasket.length; i++) {
  let item = shoppingBasket[i];
  let price = getProductPrice(item);
  newArray.push(price);
}
console.log(newArray);

// Ich möchte jetzt eine higher-order-function definieren, die das ganze Array und eine Callback-Funktion als Argumente nimmt und ein neues Ergebnisarray zurückgibt
function convertArray(array, callback) {
  const convertedArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const result = callback(element);
    convertedArray.push(result);
  }
  return convertedArray;
}
const ergebnis = convertArray(shoppingBasket, getProductPrice);
console.log(ergebnis);

// Aufgabe: Erstelle eine Funktion getProductName, die den Namen eines Produkt-Objekts zurückgibt.
// { id: 1, offer: false, product: 'Oranges', price: 1.20, quantity: 2 } => 'Oranges'
// Dann rufe convertArray mit shoppingBasket und getProductName auf. ['Oranges', 'Apples'...]
function getProductName(productObjekt) {
  return productObjekt.product;
}
const ergebnis2 = convertArray(shoppingBasket, getProductName);
console.log(ergebnis2);

// Ich möchte jetzt mit der Callback-Funktion wissen, ob ein Produkt im Angebot ist (offer)
// { id: 1, offer: false, product: 'Oranges', price: 1.20, quantity: 2 } => false
// { id: 3, offer: true, product: 'Bananas', price: 0.5, quantity: 3 } => true
// Ich definiere die Callback-Funktion direkt beim Aufruf von convertArray als eine anonyme Arrow-Function
console.clear();

const ergebnis3 = convertArray(
  shoppingBasket,
  (productObj) => productObj.offer
);
// mit function expression
const ergebnis4 = convertArray(shoppingBasket, function (productObj) {
  return productObj.offer;
});
console.log(ergebnis3);
/* 
Aufgabe: Ich möchte jetzt von einzelnen Produkten wissen, ob sie billig sind, d.h. ob sie weniger als 1€ kosten
{ id: 1, offer: false, product: 'Oranges', price: 1.20, quantity: 2 } => false
{ id: 3, offer: true, product: 'Bananas', price: 0.5, quantity: 3 } => true
Definiere die Callback direkt als anonyme Arrow-Function
*/
