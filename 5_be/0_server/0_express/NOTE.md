# Einführung in Express mit Node.js

In diesem Beispiel werden wir die Grundlagen der Webserver-Entwicklung mit Express und Node.js besprechen. Express ist ein schlankes Framework für Node.js, das die Erstellung von Webservern und -anwendungen erleichtert.

## Schritt 1: Express importieren

Zuerst müssen wir `express` importieren. Um dies mit modernen `import`-Statements anstelle von `require` zu tun, müssen wir sicherstellen, dass unsere `package.json`-Datei `"type": "module"` enthält. Dies erlaubt uns, ES6-Module zu nutzen.

```javascript
import express from "express";
```

## Schritt 2: Express-App erstellen

Nun erstellen wir unsere Express-Applikation. Das geschieht, indem wir die `express()`-Funktion aufrufen. Dadurch erhalten wir ein `app`-Objekt, das wir verwenden können, um Routen zu definieren.

```javascript
const app = express();
```

## Routen definieren

Mit `app.get()` können wir verschiedene Routen für unseren Server definieren. Hier haben wir zwei Routen:

1. **Root-Route** (`/`): Wenn ein Benutzer die Root-URL besucht, antwortet der Server mit dem Text "Hello".
2. **Hello-Route** (`/hello`): Wenn ein Benutzer die `/hello`-URL aufruft, wird die Nachricht "Hello back" zurückgegeben.

```javascript
app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/hello", (req, res) => {
  res.send("Hello back");
});
```

## Schritt 3: Server starten

Zum Schluss müssen wir den Server starten. Mit `app.listen()` geben wir an, dass unser Server auf einem bestimmten Port (in diesem Fall 3000) lauschen soll. Sobald der Server gestartet ist, wird eine Nachricht in der Konsole ausgegeben, die bestätigt, dass der Server läuft und auf `http://localhost:3000` verfügbar ist.
Ein Server lässt sich auch im Watch-Modus laufen lassen mit:

```bash
node --watch server.js
```

```javascript
app.listen(3000, () => console.log("Server started at http://localhost:3000"));
```

## Vollständiger Code

Hier ist der vollständige Code:

```javascript
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/hello", (req, res) => {
  res.send("Hello back");
});

app.listen(3000, () => console.log("Server started at http://localhost:3000"));
```

## Zusammenfassung

1. **Express importieren**: Erfordert die Einstellung `"type": "module"` in `package.json`.
2. **App erstellen**: Die Funktion `express()` initialisiert die App.
3. **Routen hinzufügen**: Mit `app.get()` fügen wir einfache Routen hinzu.
4. **Server starten**: Mit `app.listen()` wird der Server auf einem spezifischen Port gestartet.

Jetzt kann man diesen Code ausführen und im Browser `http://localhost:3000` aufrufen, um die Ausgaben der definierten Routen zu sehen.
