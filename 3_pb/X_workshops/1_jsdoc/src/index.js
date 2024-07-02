// zum erstellen von JSDoc dokumentationskommentaren können wir sie mit /** */ direkt über dem element, das wir komentieren wollen, einleiten. - teilweise ist JSDoc intelligent genug um dinge wie parameter, methoden oder klassen, selbst schon vorweg zu kommentieren.

/*
    Ein paar tags, die man immer wieder verwendet:

    @class = zum definieren einer klasse:
    @class [klassenname]

    @description = zum erstellen einer beschreibung:
    @description [beschreibung zum element]
    
    @classdesc = zum erstellen einer beschreibung von klassen:
    @classdesc [beschreibung der klasse]

    @example = zum anzeigen von code beispiel:
    @example
    [code]

    @param = zum anzeigen von parametern, inklusive des datentypes:
    @param { datentyp } [parametername] [beschreibung]

    @this = definiert worauf sich this im aktuellen kontext bezieht:
    @this [elementname]

    @returns/return = zum anzeigen des return wertes:
    @returns { datentyp } [beschreibung]
    @return { datentyp } [beschreibung]
*/

/**
 * @class Person
 * @classdesc Repräsentiert eine Person
 * @example
 * // so erstellt man eine instanz der Person klasse:
 * const person = new Person("Max", 25);
 */
class Person {
    /**
     * @property { string } name der name der person
     */
    name;
    /**
     * @property { number } age das alter der person
     * @default 50
     */
    age = 50;

    // Den constructor können wir wie eine methode kommentieren, mit parametern und erklärungen.

    // parameter geben wir mit "@param { datentyp} [parametername] - [erklärung]" an, dies können wir dann in unserem generierten html genau so auch sehen.

    /**
     * @constructor
     * @description erstellt eine neue person
     * @param { string } name Der name der person 
     * @param { number } age Das alter der person 
     */
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    /**
     * @method Person.greet
     * @description zeigt eine begrüßung an
     * @this Person
     * @example
     * person.greet(); // 'Hallo, mein Name ist...'
     * @returns { string } gibt die begrüßungsnachricht zurück
     */
    greet() {
        return `Hallo, mein name ist ${this.name} und ich bin ${this.age} Jahre alt.`;
    }

    /**
     * @method Person.birthday
     * @description fügt der person ein lebensjahr hinzu
     * @example
     * person.birthday();
     */
    birthday() {
        this.age++;
    }
}

/*
    Weitere Tags:

    @constant = zum definieren einer konstanten variable
    @constant { datentyp } [variablenname] [beschreibung]
*/

/**
 * @constant { string } title dies ist der titel
 */
const title = "Test";

/**
 * @constant { number } amount die menge der elemente
 * @todo die variable sollte umbenannt werden, da die benennung so keinen sinn ergibt.
 */
const amount = 5;

// zusätzlich können wir in JSDoc auch weitere "metainformationen" zur dokumentation hinzufügen, wie zum beispiel die beschreibung der datei/applikation, oder dem copyright

/**
 * @file Dies ist meine tolle app!
 * @author F. Rick Reich
 * @copyright F. Rick Reich 2024
 * @license MIT
 */

/**
 * @function testFunction
 * @description dies ist eine testfunktion
 * @example
 * testFunction();
 */
const testFunction = () => {
    console.log("Hello World");
}
