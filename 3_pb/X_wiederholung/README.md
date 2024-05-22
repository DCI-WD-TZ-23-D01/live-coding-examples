# Wiederholungstag 1

## Schleifen und wann wir sie benutzen

Schleifen sind grundlegende programmierkonstrukte, die es ermöglichen, eine anweisung oder einen block von quelltext (code) wiederholt auszuführen. Diese wiederholung erfolgt solang eine bestimmte bedingung wahr ist.

Schleifen sind äußerst nützlich, um repetitive aufgaben zu automatisieren und zu vereinfachen, wordurch der quelltext effizienter und kompakter wird.

### Anwendungsbeispiele

#### for-schleife

wird verwendet, wenn die anzahl der iterationen im voraus bekannt ist.

```js
// Ein array gefüllt mit zahlen:
const zahlen = [1, 2, 3, 4, 5];

// eine for-schleife zur iteration über das array
for (let i = 0; i < zahlen.length; i++) {
    console.log(zahlen[i]); // Gibt jede zahl im array aus
}
```

```js
// Ein array gefüllt mit kindern
const kinder = ['Clara', 'Paul', 'Yusuf', 'Sofie', 'Yuyu', 'Matz', 'Helen'];

for(let kind = 0; kind < kinder.length; kind++) {
    console.log(kinder[kind]);
}
```

#### while-schleife

Wird verwendet, wenn die anzahl der iterationen nicht bekannt ist, und die schleife solange laufen soll, wie eine bedingung erfüllt ist.

```js
// wir deklarieren eine variable außerhalb der schleife, die iteriert wird
let count = 0;
const countStop = 5;

while(count < countStop) {
    console.log(count); // wir können in der schleife etwas machen

    count++; // wir können innerhalb der schleife den zähler iterieren.
}
```

```js
while(true) {
    console.log("Hallo Welt");
}
```

```js
let counter = 0;

const loggedInState = authentication(); // gibt einen wahren booleanwert zurück und wechselt plötzich auf false;

while(loggedInState === true && counter < 500) {

    console.log(counter);

    counter++;
}
```

#### do-while-schleife

Ähnlich wie die while schleife, aber garantiert, dass der quellcode-block mindestens einmal ausgeführt wird.

```js
let count = 0;

// do-while-schleife garantiert mindestens eine ausführung

do {
    console.log(count);

    count++;
} while(count < 5);
```

### Warum benutzen wir schleifen?

1. Iteration über datenstrukturen

Schleifen sind ideal, um über arrays, listen oder andere datenstrukturen zu iterieren, und jede darin enthaltene information zu verarbeiten.

```js
const zahlen = [1, 2, 3, 4, 5];

for (let i = 0; i < zahlen.length; i++) {
    console.log(zahlen[i]);
}
```

2. Automatisierung wiederholender aufgaben

Viele aufgaben in der programmierung sind repetitiv. Anstatt den gleichen quellcode mehrfach zu schreiben, kann eine schleife verwendet werden, um die aufgabe mehrfach zu erledigen.

```js
let count = 0;

while (count < 5) {
    console.log('Dies ist durchlauf nummer: ', count);
    count++;
}
```

3. Verarbeitung von Benutzereingaben

Schleifen können verwendet werden, um eingaben von benutzern zu verarbeiten, zum beispiel: solange eingaben gemacht werden, oder bis eine bestimmte bedingung erfüllt ist.

```js
while(true) {
    const userInput = prompt('Geben sie etwas ein (oder "exit" zum beenden):');

    if(userInput === "exit") {
        break;
    }

    console.log('Sie haben eingegeben: ', userInput);
}
```

4. Simulationen und animationen

In spielen und animationen werden schleifen verwendet, um die einzelbilder der animation oder die spielschritte zu steuern.

```js
// der sogenannte update loop, ist eine schleife, die auf true vergleicht
while(true) {
    aktualisiereSpielStatus();
    zeichneSpielBildschrim();
}
```

5. Durchführung komplexer berechnungen

Schleifen können verwendet werden, um komplexe mathematische berechnungen durchzuführen, zum beispiel die berechnung von fakultäten oder die approximation von Pi.

```js
let ergebnis = 1;

for (let i = 1; i <= 5; i++) {
    ergebnis *= i;
}
console.log(ergebnis);
```

## Unterschied zwischen funktionen und methoden und deren anwendung

### Definition und unterschiede

#### Funktion

Eine funktion ist ein abgeschlosser quelltext block, der eine bestimmte aufgabe ausführt und optional ein ergebnis zurückgibt. Funktionen sind unabhängig vom kontext definiert und können überall im quelltext aufgerufen werden. Sie können parameter akzepzieren und werte zurückgeben, um operationen auszuführen und daten zu manipulieren. Merke: EINE FUNKTION HAT IMMER NUR EINE FUNKTION.

```js
// Definieren einer funktion:
const addiere(a, b) {
    return a + b;
}

// aufruf der funktion
let ergebnis = addiere(3, 4);

let ergebnis2 = addiere(5, 4);

ergebnis = addiere(7, 10);

console.log(ergebnis);
console.log(ergebnis2);
```

```js
const tanzScene = (character1, character2) => {
    return `${character1} tanzt mit ${character2}`;
}

console.log(tanzScene('Mufasa', 'Ariel')); // Mufasa tantz mit Ariel
console.log(tanzScene('Balu', 'Pumba')); // Balu tanzt mit Pumba
console.log(tanzScene('Dolores', 'Aladdin')); // Dolores tanzt mit Aladdin
```

##### Anwendungsbeispiele:

- Verarbeitung von Daten: Funktionen können verwendet werden um daten zu verarbeiten, zu transformieren oder zu analysieren, Unabhängig von einem bestimmten inhalt.
- Wiederverwendbarkeit: Funktionen fördern die wiederverwendbarkeit von quelltext, da sie unabhängig von einem bestimmten kontext oder einer position definiert sind und in verschiedenen teilen des programm verwendet werden können.

#### Methoden

Eine methode ist im wesentlichen eine funktion, die in einem objekt oder einer klasse, also einem übergeordneten inhalt zugeordnet ist. Sie ist eng mit dem konzept der objektoriertierung verbunden. Methoden können auf die eigenschaften und attribute von objekten zugreifen und diese manipulieren. Sie sind in der regel teil einer Klasse und werden auf einem spezifischen objekt aufgerufen. Dies wird zu diesem zeitpunt im kurs noch nicht verwendet, es sei denn, von vorhandenen modulen wie der Math bibliothek.

```js
class Auto {
    constructor (hersteller, modell) {
        this.hersteller = hersteller;
        this.modell = modell;
    }

    // methode in der klasse
    beschreibe () {
        return `${this.hersteller} ${this.modell}`;
    }
}

// eine neue instanz der klasse erstellen:
const meinAuto = new Auto('Ford', 'Puma');

console.log(meinAuto.beschreibe());
```

##### Anwendungsbeispiele:

- Objektspezifische operationen: Methoden sind spezfisch für ein objekt oder eine klasse, und können auf die eigenschaften und methoden dieses objekts zugreifen.
- Objektorientierte programmierung (OOP): methoden sind kernelement der OOP und ermöglichen die modellierung von verhalten und daten innerhalb von klassen und objekten.

## Hilfreiche shortcuts in VSCode

wenn wir von der steuerungstaste reden, ist dies immer STRG in deutsch oder CTRL in englisch.

- Kopieren: CTRL + C
- Einfügen: CTRL  + V
- Ausschneiden: CTRL + X
- Rückgängig machen: CTRL + Z
- Wiederholen: CTRL + Y
- Auskommentieren: CTRL + K + C
- Einkommentieren: CTRL + K + U
- Komentieren: CTRL + SHIFT + 7
- Alles markieren: CTRL + A
- Zeile hoch / runter verschieben: ALT + Pfeiltaste hoch oder runter
- Speichern: CTRL + S
- Zeilenumbruch aktivieren/deaktivieren: ALT + Z
- Ganze zeile markieren: 3 mal mit der maus in die zeile klicken
- Suchen / ersetzen: CTRL + F
- ersetzen: CTRL + H
- eine tabulation nach rechts: TAB
- eine tabulation nach links: SHIFT + TAB
- Duplikat finden: CTRL + D
- Cursor in mehreren zeilen markieren: ALT + Maus links
- Cursor an der selben stelle in mehreren zeilen markieren: SHIFT + CTRL + PFEILTASTE hoch/runter
- Cursor markieren von wort zu wort: SHIFT + CTRL + PFEILASTE links/rechts
- Fenster nach links/rechts/klein/vollbild: WINDOWSTASTE + PFEILTASTE
- Terminal ein/ausblenden: CTRL + J
- Sidebar ein oder ausblenden: CTRL + B
- Emmet erzwingen: CTRL + SPACE
- Kommando-palette einblenden: CTRL + SHIFT + P
- Ein wort markieren: Doppelter linksklick auf das wort

Die meisten tastaturkommandos in VSCode können unter "Preferences" > "Keyboard Shortcuts" angepasst werden.
