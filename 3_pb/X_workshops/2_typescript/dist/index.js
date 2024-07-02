"use strict";
console.log("Hallo Welt");
const jsVariable = 3;
const tsVariable = 3;
const stringVariable = "Hello World";
const numberVariable = 256;
const boolVariable = true;
let anyVariable = 5;
anyVariable = "Hello World";
const anyVariable1 = "test";
const anyVariable2 = 25;
const anyVariable3 = true;
let undefinedVariable = undefined;
let nullVariable = null;
let multiVariable = undefined;
multiVariable = 25;
const arrayVariable1 = [1, 2, 3];
const arrayVariable2 = ["Max", "Linda", "Herbert"];
const arrayVariable3 = [1, 2, 3];
const arrayVariable4 = ["Max", "Linda", "Herbert"];
const multiArrayVariable = ["Hallo Welt", 25, true, 25];
const person1 = {
    name: "Max",
    age: 25,
};
const person2 = {
    name: "Marie",
    age: 40,
    address: "Zuhause",
};
const beispielCar = {
    brand: "Ford",
    name: "Puma",
    horsePower: 200,
    type: "SUV",
    hasTurbo: true,
    wheels: [
        "FL",
        "FR",
        "RL",
        "RR"
    ]
};
const carArray = [
    beispielCar,
    beispielCar,
    beispielCar,
];
function stringFunction() {
    return "Hello World";
}
const stringFunction2 = () => "Hello World";
const testFunction = () => {
    console.log("Hello World");
};
const function1 = (a, b) => {
    return a + b;
};
function1(2, 4);
const functionTest1 = ({ a, b = 10 }) => a + b;
functionTest1({ a: 2, b: 5 });
