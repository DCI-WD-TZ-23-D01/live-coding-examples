# File I/O

## Module System

- CommonJS
- ES6 (Module)
  - Im Module System können JS Dateien mit anderen Modulen arbeiten

## Wofür brauchen wir Dateien?

- langlebige Speicherung von Daten
- Daten transportiert werden müssen

## Wie arbeiten wir mit Datein?

> `fs` Modul von NodeJS ermöglicht die Arbeit mit Dateien
> Das Modul ist bereist ein Teil von NodeJS und muss nicht separat installiert werden

### 1. Datei einlesen

```js
fs.readFile(filename, encoding, callback) // Asynchron
fs.readFileSync(filename, encoding) // Synchron
```

`filename` => Wo die Datei gespeichert ist
`encoding` => Wie die Datei kodiert ist
Standardmäßig wird UTF-8
`callback` => Funktion die aufgerufen wird, wenn die Datei eingelesen wird

Asynchron (Callback)

```js
fs.readFile("./randomNumber.txt", "utf-8", (error, data) => {
  console.log("Content:", data);
});
console.log("Hello");
```

Bei der Ausführung von `readFile` wird das Programm nicht geblockt. Hier wird `console.log("Hello")` ausgeführt, BEVOR die Datei eingelesen wird.

Synchron (Programm wird geblockt)

```js
fs.readFileSync("./randomNumber.txt", "utf-8");
console.log("Hello");
```

Bei der Ausführung von `readFileSync` wird das Programm geblockt.
Hier wird `console.log("Hello")` ausgeführt, NACHDEM die Datei eingelesen wurde.

#### JSON einlesen

Nachdem eine JSON Datei eingelesen wurde kann man die Datei mit:

```js
JSON.parse(file)
```

von einem String zu einem JSON Objekt übersetzen.

### 2. Datei schreiben

```js
writeFile(filename, content, encoding, callback) // asynchrone
writeFileSync(filename, content, encoding) // synchrone
```

`content` soll eine `string` sein!

> Falls die Datei bereits existiert, wird der vorherige Inhalt ÜBERSCHRIEBEN.
> Wenn die Datei nicht vorhanden, wird diese Datei vorher erstellt

## Zusammenfassung

- Mit NodeJS erweitert sich die Möglichkeit was für Programme man implementieren kann.  
  - NodeJs biete viele Werkzeuge an für die Programmierung
- Die Programmierung eines Servers ist NUR ein Anwendugsgebiet von NodeJS
- CLI-Anwendungen (Command Line Interface)
