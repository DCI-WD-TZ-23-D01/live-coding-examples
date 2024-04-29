console.clear();

const bahncard = 100;
const kosten = 50;

switch (bahncard) {
    case 25: {
        console.log("Preis Fahrkarte:", kosten * 0.75);
        break;
        }
    case 50: {
        console.log("Preis Fahrkarte:", kosten * 0.5);
        break;
        }
    case 100:
        console.log("Keine weiteren Kosten. Preis: 0 EUR.");
        break;
    default:
        console.log("Keine gültige Bahncard! Preis:", kosten);
}

// --------------------------------------------------

// Variablen anlegen innerhalb der unterschiedlichen Fälle erfordert einen neuen Block

switch (bahncard) {
    case 25: {
        const rabatt = 0.75;
        console.log("Preis Fahrkarte:", kosten * rabatt);
        break;
        }
    case 50: {
        const rabatt = 0.5;
        console.log("Preis Fahrkarte:", kosten * rabatt);
        break;
        }
    case 100:
        console.log("Keine weiteren Kosten. Preis: 0 EUR.");
        break;
    default:
        console.log("Keine gültige Bahncard! Preis:", kosten);
}

// --------------------------------------------------
// Variable außerhalb anlegen und innerhalb der Fälle nur Wert ändern

let rabatt = 0;

switch (bahncard) {
    case 25: {
        rabatt = 0.75;
        console.log("Preis Fahrkarte:", kosten * rabatt);
        break;
        }
    case 50: {
        rabatt = 0.5;
        console.log("Preis Fahrkarte:", kosten * rabatt);
        break;
        }
    case 100:
        console.log("Keine weiteren Kosten. Preis: 0 EUR.");
        break;
    default:
        console.log("Keine gültige Bahncard! Preis:", kosten);
}