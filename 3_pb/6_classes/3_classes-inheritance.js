console.clear();

const divider = (input) => {
    const spacer = "=".repeat(5);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider("Klassen: Vererbung");

divider('Beispiel 1:');

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    get animalName() {
        return this.name;
    }

    eat(meal = 'Cheesecake') {
        console.log(`${ this.name } is a ${ this.species } and is eating a ${ meal }`);
    }

    sleep() {
        console.log(`${ this.name } is sleeping`);
    }
}

const testAnimal = new Animal('Happy', 'fish');
testAnimal.sleep();
testAnimal.eat('Pizza');
console.log(testAnimal);

console.log("=".repeat(20));

// wenn wir eine klasse um etwas erweitern wollen, das die hauptklasse nicht benötigt, können wir durch vererbung, die vorhandene klasse erweitern, so haben wir ein derivat der aktuellen klasse, die nur dafür existiert, um erweiterte instanzen zu erschaffen.

// Die klasse Bird erweitert sich durch die klasse Animal

// mit dem keyword "extends" geben wir an, welche klasse wir erweitern wollen.

// "klasse vogel erweitert tier"
class Bird extends Animal {

    constructor(name, species, canFly) {
        // wir benötigen das keyword "super" um die schlüssel in der elternklasse zu bearbeiten, indem wir sie an den constructor übergeben
        super(name, species);
        // super muss die werte so übergeben, wie es in der originalKlasse angegeben ist.

        this.canFly = canFly;
    }

    fly() {
        console.log(`${ this.name } ${ this.canFly ? 'can fly' : 'can\'t fly'}`);
    }

    // wenn wir eine methode erstellen, die den gleichen namen hat, wie eine methode in der originalKlasse, überschreiben wir damit die methode.
    sleep() {
        // mit super greifen wir auf die methoden und werte der elternklasse zu. Wir können methoden und werte aber auch einfach überschreiben.
        // super.sleep();
        console.log(`${ this.name } is dreaming...`);
    }
}

const rudy = new Bird('Rudy', 'Parrot', true);
console.log(rudy);
rudy.fly();
rudy.eat('Donut');
rudy.sleep();

console.log("=".repeat(20));

class Dog extends Animal {
    constructor(name, species) {
        super(name, species);
    }

    bark() {
        console.log(`${ this.name } won\'t stop barking!`);
    }
}

const chico = new Dog('Chico', 'Dalmatiner');
console.log(chico);
chico.bark();

console.log("=".repeat(20));

const ingrid = new Bird('Ingrid', 'Ostrich', false);
console.log(ingrid);
ingrid.fly();
ingrid.eat('Broccoli');

const party = (animal1, animal2) => {
    console.log(animal1.animalName + ' and ' + animal2.animalName + ' are having a party!');
}

party(chico, ingrid);

divider('Beispiel 2:');

class Vehicle {
    constructor(name, color) {
        this.wheels = 2;
        this.name = name;
        this.color = color;
    }

    setWheels(amount) {
        this.wheels = amount;
    }

    drive() {
        console.log(`our ${ this.color } ${ this.name } is driving`);
    }

    brake() {
        console.log(`our ${ this.color } ${ this.name } is braking on its ${ this.wheels } wheels`);
    }
}

const testVehicle = new Vehicle('Mofa', 'Red');
console.log(testVehicle);
testVehicle.drive();
testVehicle.brake();

console.log('='.repeat(20));

class Car extends Vehicle {
    constructor(name, color, horsePower, doors, hasTurbo = false) {
        // wir übergeben name und farbe an "Vehicle":
        super(name, color);

        // wir erstellen 3 neue properties, denen wir mit dem constructor verlinken:
        this.horsePower = horsePower;
        this.doors = doors;
        this.hasTurbo = hasTurbo;

        // wir nutzen .die setWheels(); methode um die räder auf 4 zu setzen:
        super.setWheels(4);
    }

    open() {
        console.log(`our ${ this.color } ${ this.name } is opening its ${ this.doors } doors`);
    }

    // wir überschreiben die .drive(); methode aus "Vehicle":
    drive() {
        console.log(`our ${ this.color } ${ this.name } is driving ${ this.hasTurbo ? 'and its turbo is kicking in' : 'very slow'}`);
    }
}

const mustang = new Car('mustang', 'TomatoRed', 280, 2, false);
console.log(mustang);

mustang.drive();
mustang.brake();
mustang.open();

mustang.setWheels(6);
mustang.brake();

console.log('='.repeat(20));

class Bicycle extends Vehicle {
    constructor(name, color, isElectric) {
        super(name, color);

        this.isElectric = isElectric;
    }

    drive() {
        console.log(`this ${ this.color} ${ this.name } is driving ${ this.isElectric ? 'using an electric motor...' : 'using pedals'}`);
    }
}

const christiansBike = new Bicycle('PayAsYouGoBike', 'Grey', false);
console.log(christiansBike);
christiansBike.drive();
christiansBike.brake();

console.log('='.repeat(20));

const dannysBike = new Bicycle('WizzardBike', 'Red striped', true);
console.log(dannysBike);
dannysBike.drive();
// dannysBike.brake();


