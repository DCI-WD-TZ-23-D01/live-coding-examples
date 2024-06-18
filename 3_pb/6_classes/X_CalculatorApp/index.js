console.clear();

class Calculator {
    constructor() {
        this.solution = 0;
    }

    add(num1, num2) {
        this.solution = num1 + num2;
    }

    divide(num1, num2) {
        this.solution = num1 / num2;
    }

    getSolution() {
        return this.solution;
    }

    clearSolution() {
        this.solution = 0;
    }
}

const calc = new Calculator();

console.log(calc.getSolution());

calc.add(2, 5);

console.log(calc.getSolution());

calc.divide(6, 3);

console.log(calc.getSolution());

calc.add(calc.getSolution(), 9);

console.log(calc.getSolution());

calc.clearSolution();

console.log(calc.getSolution());
