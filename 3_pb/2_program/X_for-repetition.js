console.clear();
/**
 * Simpler for-loop
 * 
 * Ein for loop lässt uns aktionen beliebig oft wiederholen, und wir können steuern wie oft, oder ob ein zähler übersprungen wird.
 */

// Beispiel: Ein simpler for-loop mit iteration, zeigt den text 5 mal hintereinander an.

let counter = 5;

for (let i = 0; i < counter; i++) {
    console.log('Hallo Welt!');
}

// statement 1: let i = 0;              = wird einmal ausgeführt, bevor der code-block ausgeführt wird, und legt eine variable an, in der definiert wird, wo die iteration anfängt.
// statement 2: i < counter;            = definiert die kondition, zum ausführen und beenden des codeblocks.
// statement 3: i++;                    = wird nach jedem durchlauf ausgeführt, und verändert die iterationszahl.

/**
 * Logik:
 * - wo fängt der zähler an? 0
 * - ist die kondition eingetroffen, um zu wiederholen? = ist i weniger als 5? ja
 * - wurde der codeblock ausgeführt? wenn ja, erhöhe i um 1, und wiederhole den code block.
 */

/**
 * Wir können uns das ganze auch mal zur vereinfachung als tabelle vorstellen:
 * 
 * | Durchlauf     | Variable      | Kondition             | Aktion            |
 * |---------------|---------------|-----------------------|-------------------|
 * | 1             | i = 0         | 0 < 5 === true        | console.log(...); |
 * | 2             | i = 1         | 1 < 5 === true        | console.log(...); |
 * | 3             | i = 2         | 2 < 5 === true        | console.log(...); |
 * | 4             | i = 3         | 3 < 5 === true        | console.log(...); |
 * | 5             | i = 4         | 4 < 5 === true        | console.log(...); |
 * | 6             | i = 5         | 5 < 5 === false       | break;            |
 */

// wir können unsere variable i, die wir inerhalb des loops angelegt haben auch nur innerhalb des code blocks unserer for schleife nutzen.

for (let i = 0; i < 5; i++) {
    console.log(i); // funktioniert!
}

// console.log(i); // funktioniert nicht!

// wir können, wenn wir das zweite plus mit einem gleich und einer zahl ersetzen, schritte überspringen.
for(let i = 0; i < counter; i+=2) {
    console.log('durchlauf', i);
}

// wir können einen for loop, auch anhand von bestimmten konditionen unterbrechen.

counter = 20; // ich passe die zahl des counters an
const breakpoint = 10; // ich setze eine variable, um zu definieren, an welcher stelle ich unterbrechen will.

for(let i = 0; i < counter; i++) {

    if(i === breakpoint) {
        // mit break; können wir, genau wie in switches, einen loop unterbrechen.
        break;
    }

    if(i === 4 || i === 5 || i === 8) {
        // mit continue; kann ein durchlauf übersprungen werden
        continue;
    }

    console.log('Durchlauf mit nummer:', i);
}

// wir können auch mehrere for-loops ineinander verschachteln, um beispielsweise eine tabelle mit rows und columns zu füllen.
// meist nehmen wir nicht mehr als 2 for loops ineinander verschachtelt, hier wäre im ersten for loop i der iterator, und im zweiten wäre es j.

const rows = 4; // so oft führen wir den ersten loop aus
const columns = 3; // so oft führen wir den zweiten loop innerhalb des ersten loops aus.

for(let i = 0; i < rows; i++) {
    // console.log("zeile", i);
    for(let j = 0; j < columns; j++) {
        // console.log('spalte', j);
        console.log('row', i + 1, "column", j + 1);
    }
}

// rows
for(let i = 0; i < rows; i++) {
    let ausgabe = "|";

    // columns
    for(let j = 0; j < columns; j++) {
        ausgabe += ` ${ j} |`;
    }

    console.log(`${i}: ${ausgabe}`);
}

// ein unendlicher loop wird so lange laufen, bis der speicher voll ist, und sollte deswegen niemals ausgeführt werden.

// for(let i = 1; i > 0; i++) {
//     console.log('Bis zur unendlichkeit und noch viel weiter!', i)
// }

const testArray = ['Chrissi', 'Zahra', 'Lara', 'Christian', 'Wael', 'Ming'];

for(let i = 0; i < testArray.length; i++) {

    if(i === 3) {
        break;
    }

    console.log(testArray[i], i);
}
