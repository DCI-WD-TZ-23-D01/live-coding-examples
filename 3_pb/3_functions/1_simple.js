console.clear();

function divider (input) {
    console.log('='.repeat(5), input, '='.repeat(5));
}

divider('Simple funktionen');

// eine simple funktion:
// function showMessage() {
//     console.log('Hallo Welt!');
// }

// alternative schreibweise
// const showMessage = function() {
//    console.log('Hallo Welt!');
// }

// eine funktion besteht aus der zuweisung des namens, dem wort function, den klammern die 0-X parameter beinhalten können, und dem jeweiligen code-block.

const showMessage = function() {
    console.log("Hallo Welt!");
}

const systemStatus = function() {
    console.log('System läuft');
}

systemStatus();


// eine deklarierte funktion wird nicht aufgerufen, wenn wir dies nicht angeben.
// Damit der code-block einer funktion ausgeführt wird, machen wir einen sogenannten "function call", indem wir den namen der funktion mit klammern dahinter, und die von uns gewollten parameter übergeben.
showMessage();

divider('Selbstausführende funktion');

// eine funktion, kann sch auch selbst starten/aufrufen, das nennt man eine self-execiting-function, dies können wir erreichen, indem wir hinter den code block der funktion klammern setzen.

// etwas mehr info hierzu: https://www.mediaevent.de/javascript/self-executing-functions.html

const selbstAufrufend = function () {
    console.log('ich hab mich selbst aufgerufen');
}();
