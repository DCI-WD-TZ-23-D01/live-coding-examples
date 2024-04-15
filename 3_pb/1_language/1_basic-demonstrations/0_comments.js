// Einzeilige Kommentare

// Einzeilige kommentare starten wir mit doppelten schrägstrichen, jeder folgende inhalt der zeile, wird nicht ausgeführt, und gilt als kommentar

// Dies ist eine zeile
// dies ist noch eine zeile
// und noch eine zeile

// bla sollte man umbenennen.
const bla = 5;

const bla2  = 10; // bla2 sollte man umbenennen.

// const bla3 = 3;

/* 
    Mehrzeilige kommentare
*/

/*
    Mehrzeilige kommentare starten wir mit einem / gefolgt von einem *, und schließen sie wieder mit einem * gefolgt von einem /

    Alles was dazwischen ist, gilt als kommentar, und kann in 1 bis unendlich vielen zeilen angegeben sein
*/

const bla4 = 10 + /* hier steht etwas */ 3;

/*
    Hier steht text, der etwas erklärt

    Hier noch mehr text
    und noch mehr text
*/

//JSDoc style kommentare

// JSDoc ist ein npm package, das interaktive und dynamische kommentare zulässt, es wird per 'npm install -g jsdoc' installiert.

// wir leiten jsdoc ein, indem wir einen schrägstrich gefolgt von 2 sternchen schreiben und enter drücken

/**
 * Dies ist ein JSDoc
 * kommentar...
 */

/**
 * @function testFunction
 * @see https://jsdoc.app/
 * @description Dies ist eine testfunktion
 * @param { string } testWert1 ist ein testparameter
 * @example
 * const output = testFunction("Hallo");
 * console.log(output);
 * @returns { string } 
 */
function testFunction(testwert1)
{

}

// wenn wir jsdoc kommentare als dokumentation ausgeben wollen, können wir sie mit dem befehl 'jsdoc [Dateiname]' im terminal eine web-seite mit der dokumentation automatisch erstellen lassen.
