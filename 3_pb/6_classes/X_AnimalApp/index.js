console.clear();

// require(); importiert ein javascript modul, also eine datei, um sie hier zu verwenden
const Bird = require('./src/Bird'); // import Bird from './src/Bird';
const Dog = require('./src/Dog'); // import Dog from './src/Dog';

// dann können wir die klassen verwenden, um neue instanzen zu erstellen:
const tier = new Bird('Max', 'Parrot', true);
const doggyDogDog = new Dog('Herbert', 'Bulldog');

console.log(tier);
tier.eat();
tier.fly();

console.log(doggyDogDog);
doggyDogDog.bark();
