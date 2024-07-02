TypeScript:

const testVariable : number = "Hallo Welt"; // fehler: Er kann den string einer variable des types Number nicht zuweisen

function testFunction(value : number) : number {
    return 2 + value;
}

testFunction(testVariable); // ES EXPLODIERT oder NaN

C#:

string testVariable = "Hallo Welt";

JavaScript:

const testVariable = "Hallo Welt";

let testVariable = "Hallo Welt";

testVariable = 2;

testVariable = true;



ich erstelle eine datei namens Person.js/Person.ts

die könnte ich in javascript als person.js importieren, oder in typescript als person.ts importieren.

mit der "forceConsistentCasingInFileNames" option kann typescript den unterschied zwischen person.ts und Person.ts sehen, und wird meckern, wenn wir eine person.ts haben, aber eine Person.ts importierne wollen.
