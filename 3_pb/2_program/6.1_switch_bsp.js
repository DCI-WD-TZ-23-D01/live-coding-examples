console.clear();

const bahncard = 100;
const kosten = 50;

switch (bahncard) {
    case 25:
        console.log("Preis Fahrkarte:", kosten * 0.75);
        break;
    case 50:
        console.log("Preis Fahrkarte:", kosten * 0.5);
        break;
    case 100:
        console.log("Keine weiteren Kosten.");
        break;
    default:
        console.log("Preis Fahrkarte:", kosten);
}