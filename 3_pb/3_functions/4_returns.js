console.clear();

function divider(input)
{
    const spacer = "=".repeat(5);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider('function return');

// wenn wir in einer funktion etwas auswerten, können wir das ergebnis dieser funktion ausgeben, dies ist ein sogennantes return statement.

const number1 = 2;
const number2 = 5;

const exampleFunction = function(firstInput, secondInput) {
    const ergebnis = firstInput + secondInput;

    // mit return übergeben wir einen wert, beim verlassen der funktion. Dieser wert erscheint dann im code, an der stelle, wo die funktion aufgerufen wird.

    // nach dem return werden wir aus der funktion geworfen, alles was danach an code erscheint wird ignoriert.
    return ergebnis;

    // der folgende code ist nicht erreichbar, da die funktion beim return verlassen wird.
    console.log("Ich will erscheinen!");
}

const funktionsErgebnis = exampleFunction(number1, number2);

console.log(funktionsErgebnis);

const exampleFunction2 = function(firstInput, secondInput, shouldReturn) {
    const ergebnis = firstInput + secondInput;

    if(shouldReturn === true) {
        return ergebnis;
    }

    console.log("Ich will erscheinen");
}

// wollen wir einen wert von einer funktion bekommen, die kein return hat, bekommen wir ein undefined.
console.log(exampleFunction2(number1, number2, true));

// beispiel mit einem if-statement:
const checkAge = function(age) {
    const adultAge = 18;

    if(age >= adultAge) {
        return true
    }
    // else {
    //     return false    
    // }

    // wenn wir in einem else returnen, können wir uns das else sparen und das return direkt hinschreiben.
    return false;

    // oder: return age >= adultAge;
}

const myAge = 17;
                                             // true oder false
const message = "Bist du schon volljährig? " + (checkAge(myAge) ? 'JA!' : 'Nein :(');

console.log(message);

// wir können eine funktion mit einem leeren return statement auch direkt unterbrechen:
const tokensLeft = 0;

const playGame = function(tokens) {

    if(tokens === 0) {
        return;
    }

    console.log("Noch eine runde spielen...");
}

playGame(tokensLeft);
