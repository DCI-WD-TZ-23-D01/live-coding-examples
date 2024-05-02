// --------------------------------------------------
// MÖGLICHKEIT: Variable außerhalb ihres Blocks anlegen,
// im Block ändern und außerhalb wieder ausgeben

let message = ""; // Außerhalb des Blocks Variable anlegen

// ANFANG BLOCK
{
    message = "Hallo!"; // Im Block nur Wert ändern
}
// ENDE BLOCK

console.log(message); // Außerhalb des Blocks ausgeben
