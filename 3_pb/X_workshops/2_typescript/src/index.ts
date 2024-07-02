// da typescript nur ein wrapper um javascript herum ist, und im gewissen sinne nichts anderes als javascript mit zusätzlichen kommandos ist, können wir viel javascript code auch so schreiben, wie wir es kennen. beispielsweise console.log();

console.log("Hallo Welt");

// was typescript wirklich anders handhabt als javascript, sind, wie mehrfach erwähnt, die datentypen. um eine variable anzulegen, müssen wir dem code mitteilen, welchen datentyp eine variable hat.

// javascript:
const jsVariable = 3;

// typescript
const tsVariable : number = 3;

// wie wir im kompilierten javascript sehen, werden beide variablen übernommen, und es fehlt bei beiden der datentyp.

// grundsätzlich wird typescript ohne weitere einstellungen, wie linter oder build compilern nicht meckern, wenn wir datentypen auslassen, wir müssen also uns selbst dazu zwingen sie einzusetzen.

// was typescript allerdings bemerkt ist, wenn wir den falschen datentyp nutzen:
// const tsFalscheVariable : string = 25;

// beim speichern kriegen wir einen fehler ausgegeben, der uns mitteilt, das "number" nicht auf den typ "string" angewandt werden kann, genau DAS ist die essenz von typescript.

// ***** VARIABLEN UND DATENTYPEN *****

// wir wir in den beiden oberen beispielen bemerken, legen wir variablen in typescript ein wenig anders an, als in javascript. Anstelle das wir schreiben:
// variablentyp variablenName = variablenWert;
// sagen wir in typescript:
// variablenTyp variablenName : datentyp = variablenWert;

// zu beachten ist, das wir in typescript datentypen klein schreiben, während wir sie in javascript grosschreiben.

// ***** SIMPLE DATENTYPEN *****

const stringVariable : string = "Hello World";
const numberVariable : number = 256;
const boolVariable : boolean = true;

// komplett umgeben kann man den datentypcheck mit dem datentyp "any", da dieser alles mögliche beinhalten kann. Allerdings ist dieser datentyp bei typescript entwicklern unbeliebt, da ein entwickler any anstelle von strikten typen benutzt, auch einfach javascript nutzen könnte.

// dies ist übrigens ein guter indikator für tutorials, ein typescript tutorial wo überall any benutzt wird, ist wohl KEIN empfehlenswertes tutorial.

let anyVariable : any = 5;
anyVariable = "Hello World";

const anyVariable1 : any = "test";
const anyVariable2 : any = 25;
const anyVariable3 : any = true;

// ***** UNDEFINIERTE UND GENULLTE DATENTYPEN *****

// Da datentypenchecks vorraussetzen, das die typen dem wert der variable entsprechen, müssen undefinierte werte, oder null werte, entsprechend mit dem datentypen angegeben werden, und sind dann, ohne anpassung auch nicht mehr mit etwas anderem belegbar.

let undefinedVariable : undefined = undefined;
// undefinedVariable = "Hallo Welt";
let nullVariable : null = null;
// nullVariable = 5;

// um zu bewerkstelligen, das wir einen anderen datentypen verwenden wollen, muss man typescript mitteilen, das die gewünschte variable vielleicht mehr als einen datentyp beinhalten KANN, dies kann man bewerkstelligen, indem man die typen mit einem pipe "|" trennt.

let multiVariable : number | undefined = undefined;
multiVariable = 25;
// multiVariable = "Hallo Welt";

// gerade bei werten die vielleicht noch befüllt werden, macht es sinn, den datentyp den man erwartet, UND undefined anzugeben.

// ***** ERWEITERTE DATENTYPEN *****

// um arrays in typescript anzulegen müssen wir definieren, das es sich um ein array mit den spezifischen typen als inhalt handelt. Dies geht auf 2 arten:

// eine sammlung von "datentyp":
const arrayVariable1 : number[] = [1, 2, 3];
const arrayVariable2 : string[] = ["Max", "Linda", "Herbert"];

// ein array des types "datentyp":
const arrayVariable3 : Array<number> = [1, 2, 3];
const arrayVariable4 : Array<string> = ["Max", "Linda", "Herbert"];

// die zweite art wird bevorzugt verwendet, da sie sich eher am layout von C# orientiert.

// wenn wir ein array erstellen wollen, das verschiedene typen beinhaltet, geht dies nur durch die erstellung eines sogenannten tuples, dies ist eine sammlung von datentypen:
const multiArrayVariable : [string, number, boolean, number] = ["Hallo Welt", 25, true, 25];

// ***** INTERFACES UND OBJEKTE *****

// Interfaces in typescript bieten eine möglichkeit, die struktur eines objektes zu definieren. Sie legen fest, welche eigenschaften ein objekt haben soll und welche typen diese eigenschaften haben. Dies ist etwas komplizierter als bei den simplen datentypen.

// wir erstellen ein interface mit dem keyword interface, gefolgt vom namen des interfaces - standardmäßig benennen wir interfaces genau wie das element, dem wir das interface zuweisen wollen, aber mit einem großen I (für interface) davor.

interface IPerson {
    // in das interface setzen wir jetzt unsere properties mit ihren datentypen, getrennt mit semikolon.
    name: string;
    age: number;
    address?: string; // ein ? hinter der property sagt aus, das die property optional ist.
}

// (interessant ist, da es in javascript keine interfaces gibt, wird der komplette code-block in unserer kompilierten javascript datei ignoriert).

// jetzt können wir ein objekt mit den gewünschten properties erstellen, wir können beim erstellen auch mal darauf achten, was tsc und ans fehlern ausgibt:
const person1 : IPerson = {
    name: "Max",
    age: 25,
}

const person2 : IPerson = {
    name: "Marie",
    age: 40,
    address: "Zuhause",
}

interface ICar {
    brand: string;
    name: string;
    horsePower: number;
    type: string;
    hasTurbo: boolean;
    wheels: string[];
}

const beispielCar : ICar = {
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
}

// object arrays sind vom interface-typ des objektes.
const carArray : ICar[] = [
    beispielCar,
    beispielCar,
    beispielCar,
];

// ***** FUNKTIONEN *****

// die parameter von funktionen können wir in typescript auf verschiedene weise übergeben, wichtig ist, das wir vor den geschwungenen klamern immer angeben, welchen datentyp wir als rückgabewert erwarten.

function stringFunction() : string {
    return "Hello World";
}

const stringFunction2 = () : string => "Hello World";

// eine funktion ohne return ist vom type "void".
const testFunction = () : void => {
    console.log("Hello World");
}

// bei der angabe von parametern müssen wir den datentyp jeweils für die inhalte angeben:
const function1 = (a : number, b : number) : number => {
    return a + b;
}

function1(2, 4);

// wenn wir eine funktion mit konfigurationsobjekt schrieben, brauchen wir dafür ein interface:
interface IFunctionTest {
    a: number,
    b: number,
}

const functionTest1 = ({ a, b = 10 } : IFunctionTest) : number =>  a + b;

functionTest1({ a: 2, b: 5 });
