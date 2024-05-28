console.clear();


const divider = (input) => {
    const spacer = "=".repeat(5);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider('Objekte');

/**
 * Ein Objekt in javascript ist eine sammlung von werten, die bearbeitet, uns ausgegeben werden können.
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object
 */

// Als beispiel stellen wir uns ein auto vor. Ein auto hat werte wie:
// - hersteller, name, farbe, gewicht, pferdestärken

const manufacturer = "Ford";
const model = "Puma";
const color = "MeanGreen";
const weight = 1280;
const horsePower = 200;

// diese werte können wir so ausgeben:
console.log(model);
console.log(color);

divider('Objects simple');

// Allerdings können wir mit geschwungenen klammern objekte anlegen, in denen wir unsere werte einfügen:
// wir geben immer einen namen (ein sogennanter schlüssel, oder key) und einen wert, der sogenannte "property" an, wie in JSON (JavaScript Object Notation):

const car = {
    manufacturer: "Ford",
    model: "Puma",
    color: "MeanGreen",
    weight: 1280,
    horsePower: 200,
    isDiesel: false,
    doors: [
        "FrontLeft",
        "FrontRight",
        "RearLeft",
        "RearRight",
        "Trunk",
    ],
    wheels: {
        amount: 4,
        size: 18,
    },
    "power-ratio": "1/4",
}

// wir können das objekt ausgeben, und sehen die verschiedenen informationen aufgelistet in der konsole:
console.log(car);

// auf die werte innerhalb des objektes können wir jetzt ganz einfach zugreifen:
// entweder, ähnlich wie bei arrays mit ekigen klammern und dem namen der information:
console.log(car.doors[4]);

console.log(car["doors"]);

console.log(car.wheels["amount"]);

// oder wie bei methoden oder properties (was diese sind), mit dem namen direkt hinter dem punkt:
console.log(car.doors);

console.log(car.wheels.amount);

console.log(car["power-ratio"]);

// ein weiteres beispiel:
const car2 = {
    manufacturer: "Citroen",
    model: "2cv",
    color: "Yellow",
    weight: 560,
    horsePower: 28,
    isDiesel: false,
    doors: [
        "FrontLeft",
        "FrontRight",
        "RearLeft",
        "RearRight",
        "Trunk",
    ],
    wheels: {
        amount: 4,
        size: 15,
    },
}

// ausgabe:
console.log("Erstes Auto:", car.model);
console.log("Zweites Auto:", car2.model);

divider('User Beispiel');

// Ein anderes beispiel wäre ein benutzer, oder user:
const user = {
    userName: "beispielUser",
    profile: {
        firstName: "Christian",
        lastName: "Heinrich",
        age: 21,
        country: "Germany"
    },
    isAdmin: true,
    id: "XXXX-XXXX-XXXX-XXXX-XXXXXXXX"
}

const user2 = {
    userName: "beispielUser2",
    profile: {
        firstName: "Christian",
        lastName: "Heinrich",
        age: 21,
        country: "Germany"
    },
    isAdmin: true,
    id: "XXXX-XXXX-XXXX-XXXX-XXXXXXXX"
}

console.log(user);

console.log("Hallo,", user.profile.firstName);

console.log(user.profile.age < 18 ? 'Du bist nicht volljährig!' : 'Willkommen auf der seite!');
console.log(user.profile.country === "Germany" ? 'Diese seite wird auf deutsch angezeigt' : 'English please...');
console.log(user.isAdmin ? 'Du darfst hier posten' : 'Bitte geh...');

if(user.profile.age > 18) {
    console.log("Hallo du da!");
}

divider('Objektinhalte');

// um die vorhandene keys eines objektes aufzulisten, können wir das keys keyword von Object nutzen. Dies gibt uns ein Array mit den keys zurück:

// Object . keys ( objektName ) ;
console.log(Object.keys(user));
console.log(Object.keys(user.profile));
console.log(Object.keys(car2));

console.log(car2['color']);

// auf die gleiche weise können wir auch die werte auslesen, mit values:

// Object . values ( objektName ) ;
console.log(Object.values(user));

// undefinierte property keys geben undefined zurück.
console.log(user.wurst);

user.wurst = "Käse";

console.log(user.wurst);

user.wurst = "Lampe";

console.log(user.wurst);

user.profile.country = "Uganda";

console.log(user.profile.country);

user2.profile.country = "Mars";

console.log("User:", user);
console.log("User2:", user2);

// das hier käme aus der datenbank
const users = [user, user2];

// und so können wir dann auf alle user, aus der datenbank zugreifen
for (let i = 0; i < users.length; i++) {
    console.log(users[i].userName);
}


