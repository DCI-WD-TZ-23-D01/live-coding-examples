console.clear();

const divider = (input) =>
{
    const spacer = "=".repeat(5);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider('Funktionen in Objekten / Methoden');

// In objekten können wir alle möglichen datentypwerte speichern, auch funktionen, diese nennen wir dann methoden.
// in diesen methoden können wir mit dem keyword "this" auf die werte innerhalb des objektblocks zugreifen.

const user = {
    firstName: "Max",
    lastName: "Mustermann",
    age: 25,
    country: "de",
    isAdmin: false,
    // alternative schreibweise für funktionen:
    testFunction: function ()
    {

    },
    fullName () {

        // this.firstName = firstName in dem objekt.
        // this.lastName = lastName in dem objekt.

        return this.firstName + " " + this.lastName;
    },
    isAdult (adultAge) {
        return this.age >= adultAge;
    },
    test: () => {
        // wir können arrow functions zwar innerhalb von objekten nutzen, sie haben aber keinen zugriff auf "this", also können wir nicht mit den prädefinierten werten des objektes arbeiten.
        return this.age;
    },
    test2: () => {
        return "Hello World";
    }
}

console.log('ohne methode:', `${user.firstName} ${user.lastName}`);
console.log('mit methode:', user.fullName());
console.log(`${user.firstName}`);
console.log('ist volljährig:', user.isAdult(18));

console.log(user.test());
console.log(user.test2());
