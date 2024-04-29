/* 29.04.2024

- Mini-Wiederholung If-Else
- Block Scope
- Switch
- Terminal Input

*/

// SCHNELL-WIEDERHOLUNG IF-ELSE

// Grundsätzlich: Bahncard 25 - 75% Preis, Bahncard 50 - 50% Preis, Bahncard 100 - keine extra Kosten

// if (bahncard25 === true) 
// // ANFANG BLOCK
// {
//     const preis = fahrkarte * 0.75;
//     // console.log("Deine Fahrkarte kostet:" , preis);
// }
// // ENDE BLOCK
//  else 
//  {
//     const preis = fahrkarte;
//     // console.log("Deine Fahrkarte kostet:" , preis);
// }

// --------------------------------------------------
// VERSUCH: Variable außerhalb ihres Blocks ausgeben

console.clear();

const name = "Julia";

if (true)
// ANFANG BLOCK
{
    const message = "Hallo!";
    console.log(message);
}
// ENDE BLOCK

console.log(name);
console.log(message); 
// ERROR, weil wir versuchen message außerhalb des Blocks anzuzeigen, in dem sie existiert

