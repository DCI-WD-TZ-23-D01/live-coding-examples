console.clear();

const divider = (input) =>
{
    const spacer = "=".repeat(5);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider('Destrukturierung');

divider('Arrays');

// Destructuring bedeutet, das wir elemente aus arrays und objekten extrahieren, also herausnehmen können.

// links:
// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Destrukturierende_Zuweisung
// https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f

// wir erstellen ein array mit werten:
//            r    g    b
const rgb = [ 255, 128, 64 ];

console.log('mit array position:');
console.log('r:', rgb[0]);
console.log('g:', rgb[1]);
console.log('b:', rgb[2]);

//      r    g      b
const [ red, green, blue ] = rgb;

console.log('\nmit array destructuring:');
console.log('r:', red);
console.log('g:', green);
console.log('b:', blue);

console.log('rgb', rgb);

divider('Objekten');

const userObject = {
    firstName: 'Max',
    lastName: 'Mustermann'
}

console.log('Ohne destructuring:');
console.log('firstName:', userObject["firstName"]);
console.log('lastName:', userObject.lastName);

// wenn wir auf der linken seite der zuweisung die namen der schlüssel genau so angeben, erstellen wir damit neue variablen:
const { lastName, firstName } = userObject;

// equivalent zu:
// const firstName = userObject.firstName;
// const lastName = userObject.lastName;

const fruitObject = {
    name: 'apple',
    color: 'red',
    taste: 'bitter',
}

// wenn ein property das wir zuweisen wollen nicht existiert, kriegen wir ein undefined zurück.
const { name, color, taste = 'sweet' } = fruitObject;
// wir können einer property einen default wert zuweisen, falls sie "noch" nicht existiert.

console.log('name:', name);
console.log('color:', color);
console.log('taste:', taste);

const carObject = {
    brand: 'Ford',
    model: 'Kuga',
    year: 2019,
    horsePower: 283,
    wheels: [
        'FrontLeft',
        'FrontRight',
        'RearLeft',
        'RearRight'
    ]
}

// wenn wir auf elemente in einem array zugreifen wollen, benennen wir die einzelnen indexpositionen mit variablennamen:
const { brand, model, year, horsePower, wheels, wheels: [ frontLeft, frontRight, rearLeft, rearRight ] } = carObject;
// const brand = "Ford";
// const model = "Kuga";
// const year = 2019;
// const horsePower = 283;
// const wheels = [ 'FrontLeft', 'FrontRight', 'RearLeft', 'RearRight' ];
// const frontLeft = "FrontLeft";
// const frontRight = 'FrontRight';
// const rearLeft = 'RearLeft';
// const rearRight = 'RearRight';

console.log('\nUnser auto:');
console.log(brand);
console.log(model);
console.log(year);
console.log(horsePower);
console.log(wheels);
console.log(frontLeft);
console.log(frontRight);
console.log(rearLeft);
console.log(rearRight);

// wenn wir die vorhandenen properties mit anderen namen aufrufen wollen, geben wir den veränderten namen einfach auf der rechten seite an.

const testObject = {
    city: 'Berlin',
    country: 'Germany',
}

const city = 'New York';

const { country, city: capitol } = testObject;
// const capitol = testObject.city;

console.log('\ncity:', city);
console.log('capitol:', capitol);
console.log('country:', country);

divider('Überschreiben von werten');

let consoleName = 'PlayStation';
let consoleBrand = 'Sony';
const consoleYear = 2020;

console.log('Name:', consoleName);
console.log('Brand:', consoleBrand);
console.log('Year:', consoleYear);

const consoleObject = {
    consoleName: "XBox",
    consoleBrand: "Microsoft"
};

// wenn wir unsere deklaration in klammern setzen, können wir die vorhandenen variablen mit neuen werten aus dem objekt ersetzen:
({ consoleName, consoleBrand } = consoleObject);
// consoleName = consoleObject.consoleName;
// consoleBrand = consolObject.consoleBrand;

console.log('\nName:', consoleName);
console.log('Brand:', consoleBrand);
console.log('Year:', consoleYear);

const newConsoleObject = {
    consoleName: 'Switch',
    consoleBrand: 'Nintendo',
};

({ consoleName, consoleBrand } = newConsoleObject);

console.log('\nName:', consoleName);
console.log('Brand:', consoleBrand);
console.log('Year:', consoleYear);

divider('Überschreiben von werten');

const users = [
    {
        username: "Person1",
        firstName: "Peter",
    },
    {
        username: 'Person2',
        firstName: 'Maria',
    },
    {
        username: 'Person3',
        firstName: 'Herbert',
    }
];

for (let i = 0; i < users.length; i++) {
    const { username, firstName } = users[i];

    console.log('\nusername:', username);
    console.log('firstName:', firstName);
}

divider('Das konfigurationsobjekt');

const testFunction1 = (input, value, token) => {
   console.log(input, value, token);
}

testFunction1("inputZeugs", 2, 'XXXX-XXXX-XXXX-XXXXXXXXX');

const testFunction2 = ({ input, value, token }) => {
   console.log(input, value, token);
}

testFunction2({ input: "bla", token: 359353542, value: 5 });

const konfigurationsObjekt = {
    input: "abc",
    token: 12345678,
    value: "x"
};

testFunction2(konfigurationsObjekt);
