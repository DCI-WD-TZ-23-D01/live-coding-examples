# Datenverarbeitung

## Projektsetup

- `.gitignore` erstellen
- `server.js` erstellen

## GET

Der Nutzer erwartet Daten von dem Server.
Der Server schickt Daten an den Nutzer.

## POST

Der Server erwartet Daten von dem Nutzer.
Der Nutzer schickt Daten an den Server.

Wenn wir Daten an den Server schicken wollen, gibt es verschieden Formate an Daten, die an den Server geschickt werden können:

- XML
- URL-encoded form-data
- JSON

## Wie schicken wir JSON Daten an unseren Server?

### 1.Konfiguration

Express muss konfiguriert werden, damit Express mit JSON Daten arbeiten kann.

```bash
app.use(express.json())
```

> WICHTIG: Die Konfiguration muss am Anfang, nach der Initialisierung aufgesetzt werden

### 2. Verarbeitung

Nun ist im `request` der `body` zur Verfügung und wir können das Objekt auslesen.

```js
const num = request.body.num;
```

### 3. Versendung

```bash
curl http://localhost:3000/guess  -d '{ "num": 1 }' -H "Content-Type: application/json"
```

> Wichtig
> Im Header vor der Anfrage, muss spezifiziert werden, welches Format an den Server geschickt wird

#### Postman

- URL schreiben, z.B. `http://localhost:3000/guess`
- Methode auf POST setzen
- Im `body` auf `raw` klicken und im Dropdown `JSON` auswählen
