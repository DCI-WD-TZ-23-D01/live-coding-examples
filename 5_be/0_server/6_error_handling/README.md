# Error Handling

## HTTP Status Codes

Status der Antwort anzugeben.
Der Standard wurde für die einheitliche Kommunikation entwickelt.

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

## Error Middleware

Spezielle Middleware zum Abfangen der Fehler in einem Server.
Denn eine Error-Middleware beinhaltet **vier** Parameter:

- `error`
- `request`
- `response`
- `next`

Eine ideale Platzierung der Middleware wäre zum Schluss, nachdem alle Routen definiert worden sind.

```js
app.use((error, request, response, next) => {
    console.error(error)
    return response.sendStatus(500) // Wir schicken NUR den Status Code als Antwort zurück
})

```

## CORS (Cross Origin Ressource Sharing)

Der Browser erlaubt nicht den Zugriff auf fremde Ressourcen!
Es ist ein Sicherheitsmechanismus, die standardmäßig von Browser eingesetzt werden.
**Problem**:
Fremde Server mit unserer Webseite.

Unser Backend-Server erlaubt den fremden Zugriff der Ressourcen!

Mit dem `cors` geben wir dem Browser Bescheid, dass unser Server eine bekannte Ressource für die Webseite ist.

### Installation

`npm i cors`
