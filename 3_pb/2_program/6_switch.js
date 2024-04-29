// Switch - andere Form des if/else

// ---------- Schreibweise mit if/else ----------

/*

const bahncard = 25;

if (bahncard === 25) {
    // ...
} else if (bahncard === 50) {
    // ...
} else {
    console.log("Keine Bahncard gefunden.")
}

*/

console.clear();

// ---------- Schreibweise mit Switch ----------

let bahncard;

switch (bahncard) {
    // case - "Fall", danach möglicher Wert
    case 25:
        console.log("Bahncard 25");
        break; // Abbruch
    case 50: 
        console.log("Bahncard 50");
        break; // Abbruch
    case 100: 
        console.log("Bahncard 100");
        break; // Abbruch
    default: console.log("Keine Bahncard gefunden.") // "else"
    // hier kein break notwendig, weil switch sowieso zu Ende
}
