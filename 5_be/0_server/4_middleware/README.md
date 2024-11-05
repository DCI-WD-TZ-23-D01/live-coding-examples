# Middleware

> Middlewares sind Funktionen die zwischen dem Empfang und der Antwort liegen

Eine Middleware wird VOR einer Funktion definiert.

## Verschiedene Stellen der Implementierung

Wo können Middleware Funktionen eingesetzt werden?

### Global

Jede danach liegende Handler Funktion wird zurvor durch eine Middleware Funktion laufen

```js
app.use(express.json())
app.use(checkLocale)
```

### Lokale

Handler Funktion können explizit mit einer Middleware Funktion ausgestattet werden, dass nur diese die Middleware benutzen.

> Es lassen sich beliebig viele Middleware Funktionen einbinden

```js
app.post("/", lowercase, (request, response) => {
    const name = request.body.name
    return response.json({greeting: `Hello ${name}`})
})
```

In diesem Beispiel haben eine `lowercase` Middleware, die explizit für eine POST-Anfrage an "/" verwendet wird. Für jede weitere Funktion muss `lowercase` explizit definiert werden.

## Wie wird eine Middleware definiert?

Ähnlich wie eine Handler-Funktion mit einem weiteren Parameter namens `next`.
Middleware Funktionen werden typischerweise in einem Ordner `middlewares` gesammelt.

```js

function checkLocale(request, response, next) {
    request.locale = "de"
    next() // Die Middleware schickt die Anfrage weiter
}

```

## Was kann ich mit einer Middleware machen?

Eine Middleware kann genutzt werden, um das `request` oder `response` Objekt zu bearbeiten.
Zum Beispiel: Bearbeitet `express.json` das `request` Objekt und erweitert es mit einem `body` Objekt.

- Daten transformieren
- Daten überprüfen (Authentifizierung)
- Daten validieren

```js
export function validate(request, response, next) {
    const username = request.body.username;
    const password = request.body.password;
    const symbols = ["#", "!", "+", "?", "-"];
    if (
        username &&
        password &&
        password.length > 8 &&
        symbols.some((symbol) => password.includes(symbol))
    ) {
        next();
    } else {
        return response
            .status(400)
            .send("username und passwort ist nicht vorhanden");
    }
}
```
