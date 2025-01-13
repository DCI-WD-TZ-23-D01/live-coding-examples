# Zusammenfassung Backend

## Intro

- Internet aufgebaut aus verschiedenen Servern.
- Vorher: Web-Server (Vite) der unsere Webseite gehostet hat
- Jetzt: Uns interessiert die Programmierung eines Prozesses, welcher Daten empfangen und verarbeiten kann

### Aufgaben des Backends

- Business Logik
  - Wie werden die Daten dargestellt?
  - Welche Daten werden darstellt?
- Kommunikation mit einer Datenbank
- Authentifizierung
- ...

### Wie erstellen wir unseren Server?

Erstellung eines Servers mit NodeJs.

> NodeJs ist ein JavaScript Laufzeit, womit man JavaScript ausserhalb des Browsers ausführen kann

Theoretisch lässt sich ein Server ohne Abhängigkeiten programmieren. Doch das ist relativ aufwendig. Für eine effiziente Entwicklung eines Servers nutzen wir `express`.

### Vorteile

- Man kann eine Fullstack Applikation in einer Programmiersprache implementieren
- Man kann Funktionen für das Frontend und das Backend wiederverwenden
  - Doch nur mit einer API, die von beiden Seiten unterstützt wird
- Niedrige Lernkurve

### Nachteile

- NodeJs ist nicht hyperperformant

### Express

Express ist ein Werkzeug, welches uns hilft schneller und bessere Server zu programmieren

#### Installation

`npm i express`

#### Beispiel

```js
import express from "express"

app.get("*", (request, response) => {
 response.send("Hello from my Express Server")   
})

app.listen(3000, () => console.log("Server running on http://localhost:3000"))
```

Dieser Server antwortet auf jede Anfrage mit `"Hello from my Express Server"`

## HTTP

> HTTP = Hyper Text Transfer Protocol

### Aufbau einer HTTP Anfrage

- Methoden: GET, POST, PUT, DELETE
- URL: Adresse der Ressource
- Body: Datenpaket
- Headers: Zusatzinformation zur Anfrage
  - Information zum Absender
  - Information zum Inhalt der Anfrage
  - Sprache der Anfrage
  - Authentifizierung

## File I/O

Ein wichtiger Aspekt in der Programmierung ist die Möglichkeit mit externen Dateien in NodeJS zu arbeiten.

- Lesen von Daten
- Schreiben von Daten
- Hinzufügen von Daten

### Wie tun wir das?

Man kann mit dem `fs` (Filesystem) Modul von NodsJS mit Dateien arbeiten.

#### `readFileSync`

Einlesen von einer Datei

```js
import fs from "fs"

fs.readFileSync("test.txt", "utf-8")
```

#### `writeFileSync`

Reinschreiben in eine Datei

```js
import fs from "fs"

fs.writeFileSync("test.txt", "Hallo Welt!\n")
```

#### `appendFileSync`

Hinzufügen zu einer Datei

```js
import fs from "fs"

fs.appendFileSync("test.txt", "Angefügt!\n")
```

## CRUD Endpoints

CRUD definiert die vier essentiellen Aktionen, die mit Ressourcen getätigt werden.

CRUD:

- Create
- Read
- Update
- Delete

### API

API = Application Programming Interface

Um eine Schnittstelle, um die Kommunikation von aussen zu ermöglichen.

### REST API

REST = Representational State Transfer

REST arbeitet gut mit HTTP Methoden zusammen.

Die REST API ist eine Sammlung von Funktionen, die mittels HTTP Anfragen ausgelöst werden können. Doch die API wird nicht selbstständig Aufgaben bearbeiten.

Die Schnittstelle für die Aussenwelt ist auf HTTP aufgebaut. Der Server definiert die Schnittstellen in Kombination mit Methoden und URL.

- `GET /appointment`: Diese Schnittstelle hat die Funktionalität alle Termine auszugeben
- `POST /appointment`: Diese Schnittstelle dient dazu einen Termin zu erstellen
- `GET /appointment/:id`: Diese Schnittstelle gibt Informationen über EIN Termin zurück.
- `PUT /appointment/:id`: Diese Schnittstelle aktualisiert ein Termin.

## Middleware

Middleware ist eine Funktion die zwischen Empfang und Antwort eine Anfrage verarbeitet wird.

Anfrage -> Middleware -> ... -> Handler (Antwort)

Aufgaben:

- Änderungen am Request/Response Objekt
- Ein frühzeitige Antwort
- Die nächste Funktion aufzurufen

### Anatomy einer Middleware

`request`, `response`, `next`

- `request`: Die HTTP Anfrage, die verarbeitet wird
- `response`: Die HTTP Antwort, die geschickt wird
- `next`: Welche die nächste Middleware in der Kette aufruft

```js
import express from "express"

const app = express()

// Middleware global registriert
app.use((req, res, next) => {
    console.log("First Middleware called")
    next()
})

app.get("/", (req, res) => res.send("Hello"))

app.listen(3000, () => console.log("Server läuft auf http://localhost:3000"))
```

- Eine Middleware kann global mit `app.use` registriert werden
- Eine Middleware kann direkt nur für eine Route definiert werden

    ```js
    app.get("/", 
        // Middleware
        (req, res, next) => {
            console.log("Middleware called only for this route")
            next() // Sehr wichtig: Damit die nächste Funktion aufgerufen wird
        }, 
        (req, res) => {
            res.send("Final call")
        }
    )
    ```

## Router

Denn in einer wachsenden Applikation ist es vorteilhaft den Code für die Routen aufzuteilen.

> **Problem:**
> Wenn Routen NUR in einer Datei definiert werden, dann wird die Datei unübersichtlich

**Lösung:**
Trennen der Routen in einzelne Dateien

Anstatt, dass alle Routen direkt in den Server (`app`) registriert werden. Werden die Routen über einen Router registriert, welcher dann im Server registriert wird.

```js
import express from "express"

const app = express()

app.get("/appointment", (req, res) => res.send("GET /appointment"))

app.get("/appointment/:id", (req, res) => res.send("GET /appointment/:id"))

app.post("/appointment", (req, res) => res.send("POST /appointment"))

app.put("/appointment/:id", (req, res) => res.send("PUT /appointment/:id"))

app.delete("/appointment/:id", (req, res) => res.send("DELETE /appointment/:id"))

app.listen(3000, () => console.log("Server läuft auf http://localhost:3000"))
```

Hier wurden die Routen direkt in unseren Server registriert.
Doch langfristig wird das unübersichtlich.

`routes/appointment.js`

```js
import {Router} from "express"

export const appointmentRouter = Router()

appointmentRouter.get("/", (req, res) => res.send("GET /appointment"))

appointmentRouter.get("/:id", (req, res) => res.send("GET /appointment/:id"))

appointmentRouter.post("/", (req, res) => res.send("POST /appointment"))

appointmentRouter.put("/:id", (req, res) => res.send("PUT /appointment/:id"))

appointmentRouter.delete("/:id", (req, res) => res.send("DELETE /appointment/:id"))
```

`server.js`

```js
import express from "express"
import { appointmentRouter } from "./routes/appointment.js"

const app = express()

app.use("/appointment", appointmentRouter)

app.listen(3000, () => console.log("Server läuft auf http://localhost:3000"))
```

## Error Handling

Wie reagieren der Server auf bestimmte Fehler?

Es gibt einen allgemeinen Standard, wie das Internet Status miteinander kommuniziert.

### HTTP Status Codes

**Success**: 200 - 299

- 200: Successful
- 201: Created
- 204: Successful, no content response

**Redirect**: 300 - 399

- 301: Moved permanently

**Client Error**: 400 - 499

- 400: Bad Request
- 401: Unauthorized (Authentifizierung)
- 403: Forbidden (Autorisierung)
- 404: Not found

**Server Error**: 500 - 599

- 500: Internal Server Error
- 504: Gateway Timeout

```js
import express from "express"

const app = express()
app.use(express.json())

app.post("/" () => {
    const id = req.body.id
    if(!id) {
        return res.status(404).json({error: "Id not found"}) // Komplette Antwort auf die Anfrage
    }

    // ... (Business Logik)

    return res.sendStatus(200)
})

app.listen(3000, () => console.log("Server läuft auf http://localhost:3000"))
```

### Error Middleware

Die Error Middleware wird verwendet, um alle Fehler in einer Anfrage abzufangen und benutzerdefiniert zurückgegeben.

#### Anatonmy der Error Middleware

Zusätzlich zu einer normalen Middleware, hat die Error Middleware einen weiteren `error` Parameter:

`error`, `request`, `response`, `next`

- `error`: Der entstandene Fehler
- `request`: Die HTTP Anfrage, die verarbeitet wird
- `response`: Die HTTP Antwort, die geschickt wird
- `next`: Welche die nächste Middleware in der Kette aufruft

#### Verwendung der Error-Middleware

```js
import express from "express"

const app = express()

app.get("/", (req, res, next) => {
    try {
        res.json({ success: true, result: "Hello" })
    } catch(e) {
        next(e) // Nur über die next-Funktion wird die Error-Middleware aufgerufen
    }
})

// Wichtig: Die Middleware muss zum Schluss definiert werden
app.use((error, request, response, next) => {
    return res.status(500).json({ success: false, error: error })
})

app.listen(3000, () => console.log("Server läuft auf http://localhost:3000"))
```

## Umgebungsvariablen

Durch den Einsatz von Umgebungsvariablen kann ein Programm abhängig von der Umgebung konfiguriert werden.
Beispiel:

- Alice benutzt Port 3000 für die Entwicklung und setzt die Umgebungsvariable `PORT` auf 3000
- Bob benutzt Port 8080 für die Entwicklung und setzt die Umgebungsvariable `PORT` auf 8080
  - Grund: Bob hat einen anderen Server auf Port 3000 laufen

Umgebungsvariablen können auch genutzt werden, um sensible Daten in den Code einzufügen.
Denn ist es nachteilhaft, sensible Daten im Sourcecode zu lassen.

> Sensible Daten: Passwörter, Zugangsdaten, API Keys, etc

### `dotenv`

Mit `dotenv` lassen sich die Umgebungsvariablen in die Applikation laden.

#### Installation

`npm i dotenv`

#### Verwendung

```js
import dotenv from "dotenv"
dotenv.config() // dotenv sucht nach einer .env und lädt die Variablen in das Program ein

process.env.PORT // Zugriff auf die Umgebungvariablen
```

