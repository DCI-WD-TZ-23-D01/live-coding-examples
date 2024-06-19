const Animal = require('./Animal');
// in es6: import Animal from './Animal';

class Dog extends Animal {
    constructor(name, species) {
        super(name, species);
    }

    bark() {
        console.log(`${ this.name } won\'t stop barking!`);
    }
}

module.exports = Dog;
// in es6: export default Dog;
