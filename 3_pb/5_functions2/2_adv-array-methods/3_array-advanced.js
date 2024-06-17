console.clear();

const divider = (input) => {
    const spacer = "=".repeat(5);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider('.forEach();');
/**
 * @method .forEach();
 * @description Die methode .forEach(); loops durch ein array anhand einer funktion, die jeden eintrag durchläuft und verarbeitet, und gibt danach kein neues array aus.
 * @example
 * [ array ].forEach(function(wert, i) {});
 * @example
 * [ array ].forEach((wert, i) => {});
 */

const fruits = ['Orange', 'Apple', 'Strawberry'];

// wir rufen .forEach(); als methode für das array auf, .forEach(); liefert uns für jedes element in dem array einen funktionsaufruf zurück.

// wenn wir ein array mit einer logischen benennung in mehrzahl haben, nennen wir die einzelnen einträge, normalerweise in der einzahl. also array "fruits" = eintrag "fruit".
fruits.forEach(function (fruit, i) {
    console.log('Frucht nummer: ' + i, 'Frucht name: ' + fruit);
});

// shortcode:
// fruits.forEach((fruit, i) => console.log('Frucht nummer: ' + i, 'Frucht name: ' + fruit));

// als for loop:
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// als for each loop:
fruits.forEach((fruit, i) => {
    console.log(fruit);
});

/*
    Logik der anonymen funktion:
    eine arrow function rufen wir per variablennamen auf:
    const testFunktion = (wert) => {};

    Bei einem wert in der übergabe brauchen wir keine klammern:
    const testFunktion = wert => {};

    wenn wir keinen variablennamen angeben, brauchen wir auch kein const, und erstellen somit eine unbenannte, anonyme funktion
    wert => {};

    Da .forEach(); eine anoyme funktion ausführt, brauchen wir nur den wert, und den body der funktion
    [...].forEach(fruits => ...);
*/

fruits.forEach(fruit => {
    if (fruit === 'Apple') {
        console.log(fruit);
    }
});

const objectArray = [
    { name: "Rick", age: 39 },
    { name: "Christian", age: 105 }
];

objectArray.forEach(user => {
    console.log('username:', user.name, '- alter:', user.age);
});

divider('.map();');

/**
 * @method .map();
 * @description: .map(); erstellt ein neues array und befüllt diese  mit den daten, die nach der ausführung der callback funktion mit jedem element des arrays zurückkommt.
 * @example
 * [ array ].map(function(wert, i) {});
 * @example
 * [ array ].map((wert, i) => {});
 * @returns { Array }
 */

const numbers = [8, 16, 32, 64, 128, 256];

console.log('Vorher:', numbers);

// Die methode .map(); geht die werte des arrays in der indexbasierenden reihenfolge durch, und kann mit jedem einzelnen wert arbeiten:
const newNumberList = numbers.map((number, i) => {

    // wir nutzen return um zu sagen, das wir den veränderten inhalt in unser neues array schieben.

    return number * 2;
});

// shortcode:
// const newNumberList = numbers.map(number => number * 2);

console.log('Jeder wert multipliziert mit 2:', newNumberList);

const specificNumberList = numbers.map((number, i) => {
    if (i === 2) {
        return number * 5;
    }

    // wenn der index nicht 2 ist, returne die orginalNummer:
    return number;
});

console.log("spezifisch", specificNumberList);

console.log('nachher:', numbers);

// warum nutzen wir .map(); anstelle von .forEach(); wenn wir mit werten arbeiten wollen?
// die .forEach(); methode liefert undefined zurück (also nichts), da wir die daten des arrays nur innerhalb der schleife benutzen können, und .forEach(); nichts returned.
// die .map(); methode liefert uns im gegensatz dazu als return ein neues array zurück, das wir innerhalb der .map(); methode beliebig anpassen können.

console.log('Vorher:', numbers);

// mit .forEach();
const newNumberList2 = numbers.forEach(number => {
    console.log('forEach', number);
    return number * 2;
});

// mit .map();
const newNumberList3 = numbers.map(number => {
    console.log('map', number);
    return number * 2;
});

console.log('nachher:', numbers);

console.log('mit .forEach();', newNumberList2);
console.log('mit .map();', newNumberList3);

divider('.filter();');

/**
 * @method .filter();
 * @description die methode .filter(); filtert inhalte eines arrays anhand der callback funktion und gibt uns ein neues array aus, befüllt mit den positiv bewerteten elementen (also den elementen, auf die der filter zutrifft).
 * @example
 * [ array ].filter((wert, index) => {});
 * @returns { Array }
 */

const drinks = [ 
    'coffee', 
    'tea', 
    'water', 
    'hot chocolate', 
    'beer', 
    'juice', 
    'cola', 
    'fanta',
    'sprite',
    'wodka',
    'whiskey'
];

const newDrunkenArray = drinks.filter(drink => {

    // ich nehme mir den anfangsbuchstaben des strings (also position 0 im char-array), und überprüfe, ob dieser buchstabe/character ein 'w' ist.
    return drink[0] === 'w';
});

console.log('Elemente in drinks[]; die mit "w" anfangen:', newDrunkenArray);

const longdrinkArray = drinks.filter(drink => drink.length > 5);

console.log('Elemente in drinks[]; die mehr als 5 buchstaben haben:', longdrinkArray);

divider('.reduce();');

/**
 * @method .reduce();
 * @description die methode .reduce(); reduziert die inhalte eines arrays auf einen einzigen wert.
 * indem es zwei elemente (von links nach rechts) durch eine funktion vergleicht, und bei jedem durchlauf auf den gewünschten wert reduziert.
 * Zum beispiel um die summe oder den durchschnitt von werten in einem array zu finden.
 * @example 
 * [ array ].reduce((accumulator, currentValue) => {});
 * @returns { number/einzelwert }
 */

const someNumberArray = [12, 22, 8, 6, 7];
                                                 // accumulator, currentValue
const sumOfSomeNumberArray = someNumberArray.reduce((firstValue, secondValue) => {
    return firstValue + secondValue;
});

console.log('Summe aller zahlen in someNumberArray[];', sumOfSomeNumberArray);

/*
Logik:

| Iteration | Variablen                         | Aktion                   | Ergebnis |
|-----------|-----------------------------------|--------------------------|----------|
| 0         | firstValue = 0, secondValue = 12  | firstValue + secondValue |       12 |
| 1         | firstValue = 12, secondValue = 22 | firstValue + secondValue |       34 |
| 2         | firstValue = 34, secondValue = 8  | firstValue + secondValue |       42 |
| 3         | firstValue = 42, secondValue = 6  | firstValue + secondValue |       48 |
| 4         | firstValue = 48, secondValue = 7  | firstValue + secondValue |       55 |

 */

const arrayOfNumbers = [ 5, 8, 7, 11, -6 ];
const initialNumber = 4;

const highestNumber = arrayOfNumbers.reduce((firstValue, secondValue) => {
    if(firstValue > secondValue) {
        return firstValue;
    }
    else {
        return secondValue;
    }
}, initialNumber);
// ^ initialwert, also der wert, der als erstes in unserem accumulator(firstValue) steht.

console.log("höchste zahl in arrayOfNumbers[];", highestNumber);

/*

Logik:
| Iteration | Variablen                         | Aktion                   | Ergebnis   |
|-----------|-----------------------------------|--------------------------|------------|
| 0         | firstValue = 4, secondValue = 5   | 4 > 5 ?                  | false = 5  |
| 1         | firstValue = 5, secondValue = 8   | 5 > 8 ?                  | false = 8  |
| 2         | firstValue = 8, secondValue = 7   | 8 > 7 ?                  | true = 8   |
| 3         | firstValue = 8, secondValue = 11  | 8 > 11 ?                 | false = 11 |
| 4         | firstValue = 11, secondValue = -6 | 11 > -6 ?                | true = 11  |

*/

divider('.find();');

/**
 * @method .find();
 * @description Die methode .find(); gibt den wert des ersten gefundenne elementes in einem array zurück.
 * Wenn kein eintrag gefunden wurde, bekommen wir undefined zurück.
 * @example
 * [ array ].find((wert, i) => {});
 * @returns { value }
 */

const languages = [ 'turkish', 'greek', 'german', 'spanish', 'italian', 'english' ];

const foundLanguage = languages.find((lang, i) => {
    return lang === "spanish";
});

// shortcode: const foundLanguage = languages.find(language => language === "spanish");

console.log('Gesuchte sprache gefunden in languages[]:', foundLanguage);

const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'oranges', quantity: 0 },
    { name: 'cherries', quantity: 6 },
];

const inventoryResult = inventory.find(({ quantity }) => quantity === 0);

console.log(inventoryResult);

divider('.every();');

/**
 * @method .every();
 * @description die methode .every(); überprüft ob jedes element in einem array einer kondition entspricht, und gibt false zurück, falls EIN WERT fehlschlägt.
 * @example
 * [ array ].every(wert => {});
 * @returns { Boolean }
 */

const numbersList = [ -1, -2, -5, 20, 10, 25, 80 ];

const everyCheck = numbersList.every(number => {
    return number > 0
});

console.log("JEDER WERT in numbersList[] ist größer als 0:", everyCheck);

divider('.some();');
/**
 * @method .some();
 * @description die methode .some(); ist das gegenteil von .every(); und gibt true zurück, sobald EIN EINZIGER ODER MEHR werte positiv getestet wurden.
 * @example
 * [ array ].some(wert => {});
 */

const someCheck = numbersList.some(number => number > 0);

console.log("EIN oder MEHRERE werte in numbersList[]; sind größer als 0:", someCheck);

divider('.sort();');

/**
 * @method .sort();
 * @description die methode .sort(); sortiert elemente eines arrays aufsteigend, was darauf basiert, die elemnte in strings zu verwandeln und dann in einer logischen sequenz zu vergleichen.
 * Es gibt ein neues, sortiertes array zurück
 * @example
 * [ array ].sort((a, b) => {});
 */

const monthArray = [ 'march', 'january', 'febuary', 'december' ];

// wenn wir .sort(); ohne weitere angaben an das array anfügen, sortiert es automatisch die buchstaben der array einträge aufsteigend.
monthArray.sort();

console.log('nach buchstaben sortiert:', monthArray);

const numbersArray = [ 1, 11, 101, 30, 4, 21, 10000 ];

// wenn wir ein zahlenarray ohne angaben sortieren, dann nimmt er immer die erste zahl und sortiert diese aufsteigend nach inhalt.
numbersArray.sort();

console.log('nach zahlen sortiert', numbersArray);

numbersArray.sort((a, b) => a - b); // die richtige zahlenreihenfolge ist a - b
console.log(numbersArray);

numbersArray.sort((a, b) => b - a); // die umgekehrte zahlenreihenfolge ist b - a
console.log(numbersArray); 

// sortieren eines object arrays:

const sortableObjectArray = [
    {
        name: 'Max',
        age:  25,
    },
    {
        name: 'James',
        age: 49,
    },
    {
        name: 'Jonas',
        age: 21,
    },
    {
        name: 'Henry',
        age: 56,
    },
    {
        name: 'Bob',
        age: 16,
    }
];

const newSortableArray = sortableObjectArray.sort((a, b) => a.age - b.age);

console.log('originalArray:', sortableObjectArray);
console.log('neuesArray', newSortableArray); 

// sowohl das neue, wie auch das original array wurden sortiert

newSortableArray.sort((a, b) => {

    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    // wenn a.name position kleiner als b.name dann setze den inhalt vorne ein
    if(nameA < nameB) {
        return -1;
    }

    // wenn a.name position gröber als b.name dann setze den inhalt hinten ein
    if(nameA > nameB) {
        return 1;
    }

    return 0;
});

console.log(newSortableArray);
