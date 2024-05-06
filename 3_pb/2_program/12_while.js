console.clear();
console.log('='.repeat(5), 'while loop', '='.repeat(5));

// Ein while-loop, loopt durch einen code-block, bis die gefragte kondition nicht mehr eintrifft.

let i = 0;

console.log(i);

while(i < 10) {
    console.log('i ist', i);

    // erhöhe die zahl um 1:
    i++;

    console.log('danach ist i', i);
}

// da wir i erhöhen, und i global angelegt wurde, ist i auch verändert worden:
console.log(i);

// Videospiele nutzen while loops mit eine "true wert", für den sogenannten "update-loop".
// der jede frame ausgeführt wird
// Bei einem spiel mit 60FPS (frames per second), wird dieser lop also 60 mal die sekunde ausgeführt.
// im gegensatz zum infinite loop (also einem der unendlich weitergeht), kann der update loop unterbrochen werden (Das spiel wird pausiert, oder beendet).

/**
 *  while(true) {
 *      updatePlayerPosition();
 *      updateEnemyPosition();
 *      updateAmmunition();
 *      waitForKeyPress();
 *      playerCredits();
 *  }
 */

// wir können mehrere konditiionen in einem while-loop checken, oder uns anhand von einem boolean selbst aus dem loop werfen.
let isRunning = true;
let counter = 0;

while(isRunning === true && counter < 10) {
    console.log('Count:', counter); // wir geben den counter aus

    if(counter === 2) { // wir prüfen welche nummer der counter ist
        isRunning = false; // wir unterbrechen den while loop
    }

    counter++; // wir erhöhen den wert des counters
}

console.log('='.repeat(5), 'do/while loop', '='.repeat(5));

// Bei einem normalen loop wird erst geprüft, ob die kondition zutrifft, oder nicht, und dann der code block ausgeführt:

let counterWhile = 8;
while(counterWhile < 5) {
    console.log("Der while counter steht auf...", counterWhile);

    counterWhile++;
}

console.log('===========');

// der do/while loop ist eine variante des while-loops, der erst den code ausführt, und danach prüft, ob die kondition zutrifft.

// das folgende beispiel, wird also mindestens 1 mal ausgeführt, auch wenn die kondition nicht zutrifft.
let countDoWhile = 8;

do {
    console.log('Der do/while counter steht auf...', countDoWhile);

    countDoWhile++;
}
while(countDoWhile < 5);
