console.clear();

// divider ohne funktion:
console.log('='.repeat(5), 'Testtitel', '='.repeat(5));

console.log('='.repeat(5), 'testtitel2', '='.repeat(5));

function divider (input) {
    console.log('='.repeat(5), input, '='.repeat(5));
}

divider('TestTitel3');

divider('Hallo Welt');

divider('Ich verwende den inhalt wieder...');

// funktionen schreiben wir, indem wir das wort "function" nehmen, dahinter schreiben wir die parameter die wir an die funktion übergeben wollen, wir sagen also "wir haben außerhalb vom funktionsblock variablen, die wir innerhalb der funktion verwenden wollen". dann öffnen wir den code block.

/**
 * @function darfSchonAutoFahren()
 * @description gibt true zurück, wenn alter >= 18, sonst false
 * @param { number } alter
 */

// function darfSchonAutoFahren() {...}
// oder:
const darfSchonAutoFahren = function (alter) {
    const darfFahren = alter >= 18 ? true : false;

    // return ist ein wert, den wir aus der funktion übergeben, er steht immer am ende der funktion, so das jeglicher code, der unter dem return ist, nicht mehr ausgeführt wird. 
    return darfFahren;
    
    // übergeben bedeteutet, das dort wo wir die funktion einsetzen, der wert, den wir "übergeben haben" ausgegeben wird, so wie zum beispiel ein kleingeschriebener string, bei der methode .toLowerCase();

    // anders geschrieben:
    //if(alter >= 18) {
    //    return true;
    //} else {
    //    return false;
    //}
}

console.log(darfSchonAutoFahren(12));
console.log(darfSchonAutoFahren(14));
console.log(darfSchonAutoFahren(21));

/**
 * @function checkAusweis()
 * @description ruft darfSchonAutoFahren() auf, um zu zu checken, ob die person, der der ausweis gehört, schon fahren darf.
 * @param { string } name
 * @param { number } alter
 * @return { string }
 * @
 */
const checkAusweis = function (name, alter) {
    if(darfSchonAutoFahren(alter)) {
        return `${name} darf autofahren`; // sollte if zutreffen, werden wir an dieser stelle aus der funktion geworfen
    }

    return `${name} darf noch nicht autofahren`;
}

console.log(checkAusweis("Sabine", 25));
console.log(checkAusweis('Rick', 39));
console.log(checkAusweis('Max', 16));
console.log(checkAusweis('Herbert', 11));
