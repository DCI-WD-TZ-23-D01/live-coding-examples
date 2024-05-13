console.clear();

function divider (input) {
    console.log('='.repeat(5), input, '='.repeat(5));
}

divider('Variablen in funktionen');

divider('Lokale variablen');

// eine variable die wir innerhalb einer funktion / eines code blockes anlegen, nennt sich lokale variable und ist nur in diesem codeb-block nutzbar, oder verfügbar.

const showMessage = function () {
    const message = 'Ich bin eine lokale variable';

    console.log(message);
}

showMessage();

divider('Globale variablen');

const changeUsername = function() {
    username = "John";
}

// eine funktion kann auf externe variablen zugreifen UND diese auch verändern.

let username = "Max";

console.log('vorher:', username);

changeUsername();

console.log('nachher:', username);

divider('Variablenklone');

// innerhalb einer funktion können wir die gleichen variablennamen nutzen, wie ausserhalb, da wir innerhalb der funktion so eine lokale variable mit dem selben namen erstellen.

const value = 5;
console.log('value', value);

const changeValue = function() {
    const value = 10;
    console.log('value', value);
}

changeValue();

console.log('value', value);
