console.clear();

const divider = (input) => {
    const spacer = "=".repeat(5);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider('Classes Intro');

/**
 * Klassen
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Classes
 * Javascript klassen wurden 2015 eingeführt und sind im gewissen sinne eine erweiterung oder eine art prototyp für objekte, oder um objekte zu erstellen.
 * 
 * Was genau sind Klassen?
 * Klassen sind in der Objektorientierten Programmierung ein Bauplan, wenn man eine reihe von ähnlichen objekten oder inhalten braucht.
 * Wenn wir zum beispiel eine klasse AUTO hätten, und das auto die eigeschaften farbe, marke, ps und so weiter hätte, können wir mit hilfe eines sogenannten constructors eine klasse immer wieder verwenden um ein neues fahrzeug mit diesen eigenschaften zu erstellen. Im gegensatz zu objekten, wo wir ein fahrzeug anlegen, und dann versuchen müssen, anderen fahrzeugen ähnliche eigenschaften/properties zu geben.
 */

// Vergleich objekte und klassen
const car1 = {
    brand: "Ford",
    model: "Puma",
    color: "MeanGreen",
    horsePower: 200,
}

const car2 = {
    brand: "Ford",
    model: "Mustang",
    color: "Black",
    horsePower: 280,
}

console.log('Fahrzeug 1 (Objekt):');
console.log(car1);
console.log('Fahrzeug 2 (Objekt):');
console.log(car2);

/**
 * @class Car
 */

// in konvention schreiben wir klassennamen immer groß.

// wir starten eine neue klasse mit dem keyword "class", fügen den namen (mit großbuchstaben am anfang) ein, und öffnen einen codeblock
class Car {
    // die properties unserer klasse schreiben wir ganz oben, dort können wir defaults anlegen, oder einfach den namen hinterlegen
    brand;
    model;
    color;
    horsePower;
    doors;

    /**
     * @constructor
     * @description Der Constructor ist eine spezielle art von methode, die benutzt wird, um klassen zu initialisieren, und existiert ein einziges mal pro klasse.
     */
    constructor(brand, model, color, horsePower, doors) {
        // mit dem this keyword greifen wir auf die variablen unserer klasse zu:
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.horsePower = horsePower;
        this.doors = doors;
    }
}

/**
 * Da das konzept von klassen in javascript nur ein wrapper um eine objektfunktion ist, wäre das equivalent im erstellen einer klasse:
 * function Car (brand, model, color, horsePower, doors) {
 *      this.brand = brand;
 *      this.model = model;
 *      this.color = color;
 *      this.horsePower = horsePower
 *      this.doors = doors;
 * }
 */

// mit dem new keyword erstellen wir eine neue kopie (oder instanz) der klasse, mit den werten die wir eingeben.
const car3 = new Car("Bentley", "Continental GT", "White", 680, 2);
const car4 = new Car("Volkwagen", "Käfer", "Yellow", 55, 4);

console.log("Fahrzeug 3 (Klasse):");
console.log(car3);
console.log("Fahrzeug 4 (Klasse):");
console.log(car4);

console.log("Model von car3:", car3.model);

car3.horsePower = 12;
console.log("ps von car3:", car3.horsePower);

car3.wheels = 4;

console.log(car3);

