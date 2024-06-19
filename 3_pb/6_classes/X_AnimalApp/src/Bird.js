const Animal = require('./Animal');
// in es6: import Animal from './Animal';

class Bird extends Animal {
    constructor(name, species, canFly) {
        super(name, species);

        // this.name = name;
        // this.species = species;
        this.canFly = canFly;
    }

    fly() {
        console.log(`${ this.name } ${ this.canFly ? 'can fly' : 'can\'t fly' }`);
    }

    sleep() {
        console.log(`${ this.name } is dreaming...`);
    }
}

module.exports = Bird;
// in es6: export default Bird;
