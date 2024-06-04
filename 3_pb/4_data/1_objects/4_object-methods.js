console.clear();

const divider = (input) => {
    const spacer = "=".repeat(5);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider('Objektmethoden');

divider('Object.assign();');

/**
 * @method Object.assign();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * Die methode Object.assign(); kopiert properties von einem Objekt und fügt sie einem zielobjekt hinzu.
 * @param { Object } - Das Zielobjekt
 * @param { Object } - Das Quellobject
 * @returns { Object } - Das veränderte zielobjekt
 */

// wir legen 2 objekte an, ein zielobjekt und ein anderes objekt.
const zielObjekt = { a: 1, b: 2 };
const quellObjekt = { c: 3, d: 4 };

console.log('Original Zielobjekt:', zielObjekt);

// wir nutzen Object.assign(); um dem zielobjekt die properties des anderen objektes hinzuzufügen:
Object.assign(zielObjekt, quellObjekt);

console.log('Verändertes Zielobjekt:', zielObjekt);

// nachdem die properties vom quellobjekt dem zielobjekt hinzugefügt wurden, ist das quellobjekt immernoch im originalzustand vorhanden:
console.log('Quellobjekt:', quellObjekt);

const testObject = {};

Object.assign(testObject, { hallo: "Welt"});

console.log('Objekt mit inhalten:', testObject);

divider('Object.entries();');

/**
 * Object.entries();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 * Die Methode Object.entries(); gibt jedes key und value paar der properties eines objektes als array zurück.
 * @param { Object } - Das objekt, dessen properties wir auslesen wollen.
 * @returns { Array } - Ein neues array 
 */

const objectEntries = Object.entries(zielObjekt);
console.log(objectEntries);

/**
 * [
 *      [ 'a': 1 ],
 *      [ 'b': 2 ],
 *      [ 'c': 3 ],
 *      [ 'd': 4 ]
 * ]
 */

divider("Object.fromEntries();");

/**
 * Object.fromEntries();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
 * Im gegenteil zu Object.entries(); erstellt die methode Object.fromEntries(); auf basis von einem array im oben gezeigten format mit 2 einträgen (0 = key, 1 = value) ein neues Object.
 * @param { Array } - Das array zur erstellung des objektes
 * @returns { Object } - Das neue Objekt
 */

console.log(Object.fromEntries(objectEntries));

const testArray = [
        // key, value
        [ "x", 0 ],
        [ "y", 1 ],
        [ 1, 2 ],
        [ 'firstName', 'Max', 'hallo', 'abc' ], // wenn mehr als 2 werte in dem array sind, werden die überschüssigen werte ignoriert,
        [ 'Christian' ], // wenn nur ein wert in dem array übergeben wird. gibt es ein undefined
        [] // wenn wir ein leeres array angeben, bekommen wir ein undefined: undefined zurück.
];

console.log('unser entry array:', testArray);

const newObjectFromArray = Object.fromEntries(testArray);
console.log('neues objekt aus array:', newObjectFromArray);

divider("Object.seal();");

/**
 * @method Object.seal();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
 * Die methode Object.seal(); sorgt dafür, das keine neuen properties mehr zu einem Objekt hinzugefügt oder von einem objekt gelöscht werden können.
 * @param { object } - Unser objekt
 * @returns { object } - Unser objekt
 */

const sealObject = {
    firstName: "Max",
    lastName: "Mustermann",
}

console.log(sealObject);


// wir fügen city und age hinzu...
sealObject.city = "Dortmund",
sealObject.age = 25;

// ... und geben das veränderte objekt aus:
console.log(sealObject);

// wir "versiegeln" das objekt:
Object.seal(sealObject);

// --------------------------------- AB HIER IST DAS OBJEKT ZUGEKLEBT.

// wir versuchen "country" hinzuzufügen:
sealObject.country = "Germany";

// wir geben unser objekt aus...:
console.log(sealObject);
// ... und sehen, das "country" nicht hinzugefügt wurde.

// wir können immernoch werte verändern:
sealObject.age = 18;
sealObject.firstName = "Maxine";

console.log(sealObject);

// wir versuchen "age" zu löschen...:
delete sealObject.age;

// ... und bemerken das "age" immernoch da ist.
console.log(sealObject);

divider("Object.isSealed();");

/**
 * @method Object.isSealed();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed
 * Die methode Object.isSealed(); prüft ob ein objekt "sealed" ist, und gibt einen boolean zurück
 * @param { Object} - unser objekt
 * @returns { Boolean } - die antwort, ob das angefragte objekt "gesealed" ist.
 */

const sealTestObject = { username: "TestUser" };

console.log('sealTestObject:', Object.isSealed(sealTestObject));
console.log('sealObject:', Object.isSealed(sealObject));

divider("Object.freeze();");

/**
 * @method Object.freeze();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 * Die methode Object.freeze(); "friert" ein objekt ein, was bedeutet, es kann nicht mehr verändert werden.
 * @param { object } - Unser objekt
 * @returns { object } - Unser objekt
 */

const freezeObject = {
    firstName: "James",
    lastName: "Bond",
}

console.log(freezeObject);

// wir ändern den wert von lastName: 
freezeObject.lastName = "Steward";

// ... und seehn, dass die änderung funktioniert:
console.log('freezeObject:', freezeObject);

// wir frieren das objekt ein:
Object.freeze(freezeObject);

// ----------------------------------------------- Ab hier wurde das objekt von MR. Freeze entführt.

// wir fügen "age" hinzu:
freezeObject.age = 25;

// und ändern den wert von .lastName noch einmal:
freezeObject.lastName = "Dean";

console.log("freezeObject auf -100 grad:", freezeObject);

divider("Object.isFrozen();");

/**
 * Object.isFrozen();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
 * Die methode Object.isFrozen(); prüft ob ein object "frozen" ist, und gibt einen boolean zurück
 * @param { Object} - unser objekt
 * @returns { Boolean } - die antwort, ob das angefragte objekt "gefreezed" ist.
 */

console.log('is freezeObject frozen?', Object.isFrozen(freezeObject));

// Der unterschied zwischen Object.seal(); und Object.freeze();
// Vorhandene eigenschaften in objekten, die mit Object.seal(); versiegelt wurden, können verändert werden. Vorhandene eigenschaften in objekten die mit Object.freeze(); eingefroren wurden, werden unveränderlich gemacht, dies nennt man einen Object Lock-Down.

// kleiner trick um ein objekt durch neuerstellung zu un-freezen:
const unfrozenObject = JSON.parse(JSON.stringify(freezeObject));
console.log(unfrozenObject);

divider("Object.isExtensible();");

/**
 * @method Object.isExtensible();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible
 * Die methode Object.isExtensible(); prüft ob ein objekt veränderbar ist, ob es also "frozen" oder "sealed" ist, und gibt einen boolean zurück.
 * @param { Object } - unser object
 * @returns { Boolean } - die antwort, ob das objekt überhaupt veränderbar ist.
 */

const extensibleObject = {
    firstName: "Bilbo",
    lastName: "Baggins",
}

console.log("ist extensibleObject erweiterbar?", Object.isExtensible(extensibleObject));
console.log('ist sealObject erweiterbar?', Object.isExtensible(sealObject));
console.log('ist freezeObject erweiterbar?', Object.isExtensible(freezeObject));

divider("Object.defineProperty();");

/**
 * @method Object.defineProperty();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
 * Die methode Object.defineProperty(); erstellt oder verändert eine property in einem Object.
 * @param { Object } - unser objekt
 * @param { String } - der name der property als string
 * @param { Object } - der wert oder die werte, den die property übernehmen soll
 * @returns { object }
 */

const user = {
    firstName: "Max",
    lastName: "Mustermann",
    country: "Germany",
}

console.log(user);

// equivalent zu:
// user.country = "England";

// wenn wir eine property ändern wollen, können wir das direkt auf dem objekt machen:

                 // object, key        { value: wert } 
Object.defineProperty(user, "country", { value: "England" });

console.log(user);

// wenn wir eine property hinzufügen wollen, können wir einige optionen angeben:
// - enumerable = die property wird in der anzeige übernommen oder nicht
// - writable = die property kann überschrieben/verändert werden oder nicht

Object.defineProperty(user, "userName", {
    value: "TestUser1234",
    enumerable: true, // der default für eine neue property ist enumarable: false
    writable: true, // der default für eine neue property ist hier writable: false
});

console.log(user);

console.log(user.userName); // wenn ich die property direkt anspreche, kann ich mit ihr arbeiten.

// wir verändern den userName:
user.userName = "NewTestUser";

console.log(user);
