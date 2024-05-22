console.clear();

// erste möglichkeit:
// function divider(input) {
//     const spacer = "=".repeat(5);
//     console.log("\n" + spacer, input, spacer, "\n");
// }

// zweite möglichkeit:
// const divider = function (input) {
//     const spacer = "=".repeat(5);
//     console.log("\n" + spacer, input, spacer, "\n");
// }

// arrow function:
const divider = (input) => {
    const spacer = '='.repeat(5);
    console.log('\n' + spacer, input, spacer, '\n');
}

divider('Arrow Function');

// Die arrow function ist eine moderne kurzschreibweise für funktionsdeklarationen, die wir vor allem in react und modernen applikationen nutzen, der wirklich vor oder nachteil wird uns später im verlauf des modules noch besser verständlich.

// function beispielFunktion() { ... }
// const beispielFunktion = function() { ... }
// const beispielFunktion = () => { ... }

// bei einem simplen kommando innerhalb der funktion, das nur eine zeile einnimmt, kann man die klammern auch weglassen, und den code so angenehm verkürzen:

// Beispiel normale funktion:
const normalFunction1 = function () {
    console.log("Hallo Welt");
}
const normalFunction2 = function () {
    return "abc";
}

normalFunction1();
console.log(normalFunction2());

// beispiel arrow function;
const arrowFunction1 = () => console.log("Hallo Welt");
const arrowFunction2 = () => "abc";

arrowFunction1();
console.log(arrowFunction2());

divider("Automated return");

// eine arrow function mit nur einem code-statement hat automatisch einen rückgabewert, und benötigt dafür kein return.

// Beispiel normal:
function returnTextNormal() { return "Hello World"; }

console.log("Normal:", returnTextNormal());

// Beispiel arrow function:
const returnTextArrow = () => "Hello World";

console.log('Arrow:', returnTextArrow());

divider('Arrow function parameters');

// In einer arrow function können wir genau wie in einer normalen funktion werte übergeben:

// Beispiel Normal:

function showMessageNormal(userName) {
    console.log('Hallo, ' + userName);
}

showMessageNormal("Max");

// Beispiel Arrow function:
// const showMessageArrow = (userName) => {
//     console.log('Hallo, ' + userName);
// };

// ordentlicher bei code mit nur einer zeile im block, wäre es, es in einer reihe zu schreiben, dann brauchen wir auch die klamern nicht.
// const showMessageArrow = (userName) => console.log('Hallo, ' + userName);

// Bei einer arrow function mit nur einem Parameter, können wir die klammern weglassen.
//    funktionsname      parameter   code-block
const showMessageArrow = userName => console.log('Hallo, ' + userName);
// wir können das const auch weglassen:
showMessageArrow = username => console.log('Hallo, ' + userName);

showMessageArrow("Christian");

divider('Multiple parameter');

// wie bei normalen funktionen, können wir auch bei arrow functions mehrere parameter übergeben.

// Beispiel normal:
const multipleParametersNormal = function (number1, number2) {
    const ergebnis = number1 + number2;

    return ergebnis;
}

// const multipleParametersNormal = function (number1, number2) {
//     return number1 + number2;    
// }

// const multipleParametersNormal = function (number1, number2) { return number1 + number2; }

console.log(multipleParametersNormal(2, 5));

const multipleParametersArrow = (number1, number2) => number1 + number2;

console.log(multipleParametersArrow(2, 5));

divider("andere beispiele");

const addToDatabase = (user) => {

    // .. verbinde zur datenbank
    // .. suche ob der user schon existiert, wenn ja:
    //      returne das das hinzufügen des users nicht geklappt hat
    // ... wenn der user noch nicht existiert, füge ihn hinzu:
    //      returne das das hinzufügen geklappt hat

}

const userAdded = addToDatabase("user");

if(userAdded === false) {
    // gebe einen fehler aus, das der user nicht hinzugefügt wurde
} else {
    // gebe aus, das der user erfolgreich hinzugefügt wurde
}


// pseudocode .indexOf();

const indexOf = (gesuchtesArray, element) => {
    // wenn gesuchtes element nicht gefunden wurde:
    //      returne -1
    // wenn gesuchtes element gefunden wurde:
    //      returne POSITION (0, 1, 2, ...)
}

const parseInt = (num) => {
    // wandle den input in eine zahl um
    // wenn das geklappt hat
        // returne die zahl
    // wenn das nicht geklappt hat
        // returne NaN
}


// let ergebnis = 0;

// const test = (number1, number2) => {
//     const berechnung = number1 + number2;
    
//     // console.log(ergebnis);

//     return berechnung;
// }

// // console.log(test());

// ergebnis = test(ergebnis, 6);

// console.log(ergebnis);

// ergebnis = test(3, 4);

// console.log(ergebnis);

// const andereVariable = test();

// // console.log(andereVariable + 5);

// console.log("Browser", andereVariable);


