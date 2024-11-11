# Server

Die Komponente des Internets, die für die Datenverwaltung zuständig ist.

- Web Server => Bereitstellen von statischen Dateien (HTML, CSS, JS)
- REST API Server => Schnittstelle für die programmatische Einbindung der Datenverwaltung
  - Einheitliche Datenformat: JSON
  - CRUD: Create (POST), Read (GET), Update (PUT/PATCH), Delete (DELETE)
  - Ressourcenverwaltung

## Express

Neutral Server-Framework for NodeJs.

### Installation

`npm i express`

### Verwendung

```js
import express from "express"

const app = express()

// port, callback Funktion
app.listen(3000, () => console.log("Server startet auf http://localhost:3000"))
```

- Port: Netzwerkschnittstelle des Computers
- Callback: Wird aufgerufen, wenn der Server erfolgreich gestartet ist

### Routen

Jede HTTP-Methode kann in Express, als Funktion verwendet werden, um eine dementsprechende Route zu erstellen.

```js
// GET-Route
app.get("/greetings", (request, response) => {
    // response.send("Hallo") // Alternativly: Text-Antwort
    response.json({ greeting: "Hello" }) // JSON-Antwort
})
```

### Arbeiten mit JSON

Damit Express JSON im Body akzeptieren kann, müssen diese zuvor geparsed werden.
Dies erfolgt mit `express.json()`.

```js
app.use(express.json()) // Wichtig, um mit der Verarbeitung von JSON-Bodies zu arbeiten

// POST-Route
app.post("/name", (request, response) => {
    const name = request.body.name // JSON-Body
    response.json({ result: "Your name is " + name })
})
```

### Middleware

Funktionen, die vor dem Endpunkt eines Servers ausgeführt werden.
Eine Middleware kann genutzt werden, um die Anfrage zu bearbeiten oder um eine Anfrage frühzeitig abzubrechen.
In Express wird eine Middleware-Funktion mit drei Parameter erstellt:

- `request`
- `response`
- `next`

`next` ist eine Funktion, die der Middleware ermöglicht, die Anfrage weiterzuleiten.

Verwendung:

- Datenvalidierung
- Parsen des Bodies
- Authentifizierung
- Autorisierung

> Die Error-Middleware MUSS zum Schluss definiert werden, da diese die Fehler der vorherigen Routen abfängt.

```js

//Middleware
function checkName(request, reponse, next) {
    const name = request.body.name
    request.body.name = name.toUpperCase()
    if(name.length === 0) {
        return response.send("ERROR")
    } else {
        next()
    }
}

// Die Middleware kann spezifisch für eine Route aufgesetzt werden
app.post("/name", checkName, (request, response) => {
    const name = request.body.name
    return response.json({ result: "YOUR NAME IS " + name })
})

// Die Middleware kann auch für mehrere Routen aufgesetzt werden
app.use(checkName)
```
