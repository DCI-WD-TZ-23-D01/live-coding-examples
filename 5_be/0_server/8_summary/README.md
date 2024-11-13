# Zusammenfassung

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

Man kann mit dem `fs` Modul von NodsJS mit Dateien arbeiten.

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

