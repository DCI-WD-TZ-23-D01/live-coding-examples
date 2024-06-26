console.clear();

class Person {

    // die meisten javascript entwickler nutzen parameternamen in klassen mit unterstrich am anfang:
    _name;
    _age;
    _address;
    _phone;
    _favoriteColor = "red"; // möglichkeit 1 zum zuweisen eines default-wertes

    //ohne konfigurationsobjekt:
    //   constructor(name, age, address, phone, favoriteColor = "red") {
    //     this._name = name;
    //     this._age = age;
    //     this._address = address;
    //     this._phone = phone;
    //     this._favoriteColor = favoriteColor || "red"
    // }

    // im constructor können wir den parametern werte übergeben:
    // mit konfigurationsobjekt:
    constructor({ 
        name, 
        age, 
        address, 
        phone, 
        favoriteColor = "red" // möglichkeit 2 zum zuweisen eines default-wertes
    }) {
        this._name = name;
        this._age = age;
        this._address = address;
        this._phone = phone;
        this._favoriteColor = favoriteColor || "red"; // möglichkeit 3 zum zuweisen eines default-wertes
    }

    // nachdem der constructor erstellt wurde, kommen die getter und setter

    // Getter und Setter 
    /*
    Getter:
    - Definition: Methoden, die den wert einer eigenschaft zurückgeben.
    - Vorteil: Ermöglicht kontrollierten zugriff auf eigenschaften, und bietet die möglichkeit, zusätzliche logik vor der rückgabe zu implementieren

    Setter:
    - Definition: Methoden, die den wert einer eigenschaft verändern können.
    - Vorteil: Ermöglicht die validierung und kontrolle der daten, bevor sie einer eigenschaft zugewiesen werden.
    */

    // getter für den namen:
    get name() {
        return this._name;
    }

    // get fullName() {
    //     return this._firstName + " " + this._lastName;
    // }

    // setter für den namen:
    set name(newName) {
        if(typeof newName === 'string' && newName.length > 0) {
            this._name = newName;
        } else {
            console.log('Das ist kein sinnvoller name...');
        }
    }

    // getter für das alter:
    get age() {
        return this._age;
    }

    // setter für das alter:
    set age(newAge) {
        if(newAge > 0) {
            this._age = newAge;
        } else {
            console.log('Merkwürdiges alter...');
        }
    }

    // getter für die lieblingsfarbe:
    get favoriteColor() {
        console.log("wir können hier sonst was machen...");
        return this._favoriteColor;
    }

    // setter für die lieblingsfarbe:
    set favoriteColor(newColor) {
        const colorList = [
            "red",
            "green",
            "blue",
            "yellow",
            "orange",
        ];

        if(colorList.includes(newColor)) {
            this._favoriteColor = newColor;
        } else {
            console.log("Diese farbe unterstützt unser programm nicht...");
        }
    }

    // nach den gettern/settern kommen die methoden:
    introduce() {
        // wir können sowohl die konstruktruktionseigenschaften, wie auch die getter/setter innerhalb von unseren methoden benutzen.
        console.log(`Hallo mein name ist ${this.name}, und ich bin ${this._age} jahre alt!`);
    }

    hasBirthday() {
        this._age++;

        console.log(`Happy Birthday, ${this.name}, du bist jetzt ${this._age} jahre alt!`);
    }

    displayInfo() {
        console.log(`Name: ${this._name}`);
        console.log(`Alter: ${this._age}`);
        console.log(`Adresse: ${this._address}`);
        console.log(`Telefonnummer: ${this._phone}`);
        console.log(`Lieblingsfarbe: ${this._favoriteColor}`);
    }
}

// wir erstellen eine neue instanz der klasse / wir nutzen die klasse um daraus ein objekt zu erstellen
// ohne konfigurationsobjekt:
// const person1 = new Person('Max', 25, 'Musterstaße 1, 12345 Musterhausen', '0123-456789');

const person1 = new Person({
    name: 'Max', 
    age: 25, 
    address: 'Musterstaße 1, 12345 Musterhausen', 
    phone: '0123-456789',
});

const person2 = new Person({
    name: 'Brigitte',
    age: 30,
    address: 'Beispielstraße 2, 54321 Beispielstadt',
    phone: '0987-654321',
})

console.log(person1);
/*
Person {
  _name: 'Max',
  _age: 25,
  _address: 'Musterstaße 1, 12345 Musterhausen',
  _phone: '0123-456789',
  _favoriteColor: 'red'
}
*/

console.log(person2); 
/*
Person {
  _name: 'Brigitte',
  _age: 30,
  _address: 'Beispielstraße 2, 54321 Beispielstadt',
  _phone: '0987-654321',
  _favoriteColor: 'red'
}
*/

// mit dem getter "name" geben wir "this._name" zurück.
console.log(person1.name); // "Max"

person1.name = "Julia";

console.log(person1.name); // Julia

person1.favoriteColor = "blue";
// person1.favoriteColor = "black"; // ... wird nicht unterstützt.

console.log(person1.favoriteColor); // blue

person2.introduce(); // Hallo mein name ist...
person2.hasBirthday();
person2.introduce();

console.log(person2);
/*
Person {
  _name: 'Brigitte',
  _age: 31,
  _address: 'Beispielstraße 2, 54321 Beispielstadt',
  _phone: '0987-654321',
  _favoriteColor: 'red'
}
*/

person2.displayInfo(); 
/*
Name: Brigitte
Alter: 31
Adresse: Beispielstraße 2, 54321 Beispielstadt
Telefonnummer: 0987-654321
Lieblingsfarbe: red
*/

class Employee extends Person {

    // beim definieren von properties nutzen wir nur die, die es vorher in der originalklasse nicht gab:
    _jobTitle;
    _salary;

    constructor({name, age, address, phone, jobTitle, salary}) {

        // mit super übergeben wir daten an die originalklasse
        super({ name, age, address, phone }); // bei einem konfigurationsobjekt, muss auch ein objekt an super übergeben werden.

        // in Person ist jetzt also immernoch:
        // this._name = name;
        // this._age = age;
        // this._address = address;
        // this._phone = phone;
        // this._favoriteColor = "red";

        this._jobTitle = jobTitle;
        this._salary = salary;
    }

    get jobTitle() {
        return this._jobTitle;
    }

    set jobTitle(newJobTitle) {
        if(typeof newJobTitle === 'string' && newJobTitle.length > 0) {
            this._jobTitle = newJobTitle;
        } else {
            console.log('Da stimmt etwas nicht...');
        }
    }

    // wenn wir methoden erstellen, die wir nur innerhalb der klasse verwenden können wir diese auch auf privat setzen.
    #displayWorkInfo() {
        console.log(`Jobbezeichnung: ${ this._jobTitle}`);
        console.log(`Gehalt: ${this._salary}`);
    }

    displayInfo() {
        super.displayInfo(); // mit super.[methodenname] holen wir uns den inhalt der originalmethode.
        this.#displayWorkInfo();
    }
}

const employee1 = new Employee({
    name: 'Anna', 
    age: 28, 
    address: 'An Der Hauptstraße 1, 11111 Annahausen', 
    phone: '1111-222222', 
    jobTitle: 'Bäckerin', 
    salary: 60000
});

console.log(employee1);
console.log("=================");
employee1.displayInfo();
// console.log("=================");
// employee1.displayWorkInfo();
