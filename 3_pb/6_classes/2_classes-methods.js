console.clear();
/**
 * @class User
 */
class User {
    // properties mit einem # davor, sind außerhalb der klasse nicht zugänglich (in C basierenden sprachen = private/public)
    #firstName;
    #lastName;
    fullName;

    // der constructor wird einmal beim erstellen der instanz ausgeführt, danach nicht mehr.
    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;

        // wir nutzen die private methode innerhalb des constructors:
        this.fullName = this.#createFullName();
    }

    // um auf unsere privaten werte zuzugreifen, können wir in javascript zwar einfach  die werte bei objekten rausholen, aber sauberer sind methoden fürs editieren und anzeigen von werten, dies sind sogenannte Getter/Setter, und diese kann man in javascript auf 2 arten erstellen.

    // einen getter erstellen wir mit dem keyword "get"
    get firstName() {
        return this.#firstName;
    }

    // wir können auch eine funktion/methode schreiben, um diese werte auszugeben
    getFirstName() {
        return this.#firstName;
    }

    // vorname ändern:

    // einen setter, zum verändern von werten erstellen wir mit dem keyword "set"
    set firstName(input) {
        this.#firstName = input;
    }

    setFirstName(input) {
        this.#firstName = input;

        this.fullName = this.#createFullName();
    }

    // private methode
    #createFullName() {
        return this.#firstName + " " + this.#lastName;
    }
}

const testUser = new User("Max", "Mustermann");
console.log(testUser);
console.log("Vorname:", testUser.firstName);
console.log("Vorname:", testUser.getFirstName());

testUser.firstName = "Herbert";
testUser.setFirstName("Mario");
console.log("Vorname:", testUser.firstName);

console.log("Ganzer name:", testUser.fullName);

console.log("\n----------------------------\n")

/**
 * @class Fruit
 * @description Basisklasse für früchte
 * @example
 * const Apple = new Fruit("Apple", "red", "sweet");
 */
class Fruit {
    /**
     * @constructor
     * @param { string } name
     * @param { string } color
     * @param { string } taste
     */
    constructor(name, color, taste) {
        this.name = name;
        this.color = color;
        this.taste = taste;
    }

    /**
     * @method eat();
     * @description frisst die frucht
     * @returns { string }
     */
    eat() {
        return `This ${ this.color } ${ this.name } is very ${ this.taste }`;
    }

    /**
     * @method setName();
     * @description Legt den namen der frucht fest
     * @param { string } input 
     */
    setName(input) {
        this.name = input;
    }
}

const apple = new Fruit("Apple", "red", "sweet");
console.log(apple.eat());

const apple2 = new Fruit("Apple", "green", "sweet");
apple2.setName("Paprika");
console.log(apple2.eat());

const lemon = new Fruit("Lemon", "yellow", "sour");
console.log(lemon.eat());

console.log(lemon);

lemon.setName("Citrus");

console.log(lemon);
console.log(lemon.eat());

// // als objekt:
// const apple = {
//     name: "Apple",
//     color: "red",
//     taste: "sweet",
//     eat: function() {
//         return `This ${ this.color } ${ this.name } is very ${ this.taste }`;
//     } 
// };

// const apple = {
//     name: "Apple",
//     color: "green",
//     taste: "sweet",
//     eat: function() {
//         return `This ${ this.color } ${ this.name } is very ${ this.taste }`;
//     }
// }

// const lemon = {
//     name: "Lemon",
//     color: "yellow",
//     taste: "sour",
//     eat: function() {
//         return `This ${ this.color } ${ this.name } is very ${ this.taste }`;
//     }
// }
// lemon.name = "Citrus";
