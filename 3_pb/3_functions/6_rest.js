console.clear();

const divider = (input) => {
    const spacer = '='.repeat(5);
    console.log('\n' + spacer, input, spacer, '\n');
}

divider('Rest Parameter');

// mit dem rest parameter können wir unendlich viele parameter übergeben, wir schreiben den gewollten parameternamen angeführt von 3 punkten. Der rest parameter muss IMMER am ende stehen.

// wenn wir nicht wissen wieviele parameter wir übergeben werden, können wir den rest parameter nutzen, um "alles" was als argument hineinkommt ansprechen zu können.
const ohneRestParameter = (input1, input2, input3) => {
    console.log(input1, input2, input3);
}

ohneRestParameter("a", "b", "c", "d", "e");

const mitRestParameter = (input1, input2, input3, ...rest) => {
    console.log(input1, input2, input3, rest);
}

mitRestParameter("a", "b", "c", "d", "e", "f", "g");

divider('Beispiel');

const showName = (title, age, ...names) => {
    console.log("title:", title);
    console.log('age:', age);

    console.log('rest:', names);

    for (let i = 0; i < names.length; i++) {
        console.log('names:', names[i]);
    }

    console.log("erster name:", names[0]);
    console.log("zweiter name:", names[1]);

    // hatten wir noch nicht - "array destrukturierung":
    const [ firstName, secondName ] = names;

    // names[0] ist jetzt aufrufbar als firstName;
    // names[1] ist jetzt aufrufbar als lastName;

    // christians beispiel:
    // const firstName = names[0];
    // const secondName = names[1];

    console.log("firstName:", firstName);
    console.log('secondName:', secondName);
}

//       title,   age, ...names(rest)
showName("Caesar", 55, "Gaius", "Julius");

divider("Weiteres beispiel");

const sumZweiZahlen = (x, y) => x + y;

console.log("summe aus 2 zahlen:", sumZweiZahlen(5, 10));

const sumDreiZahlen = (x, y, z) => x + y + z;

console.log("summe aus 3 zahlen:", sumDreiZahlen(5, 4, 8));

const sumAusZahlen = (number1, ...rest) => {

    console.log(rest);

    let sum = number1;

    for (let i = 0; i < rest.length; i++) {
        sum += rest[i];
    }

    return sum;
}

console.log("summe aus egal wievielen zahlen:", sumAusZahlen(5, 10, 8, 22, 14, 7, 9));
console.log("summe aus egal wievielen zahlen:", sumAusZahlen(5, 10));
console.log("summe aus egal wievielen zahlen:", sumAusZahlen(5, 10, 8, 22, 14, 7, 9, 7, 8, 2, 2, 0, 19, 12, 2, 9));

const testArray = ["rick", "christian"];

const [teacher, assistant] = testArray;

console.log(teacher);
