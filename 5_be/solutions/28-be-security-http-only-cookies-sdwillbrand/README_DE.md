# HTTP-only Cookies - 🍪

Ein HTTP-only Cookie ist eine Eigenschaft, die einem Browser-Cookie hinzugefügt wird und verhindert, dass clientseitiges JavaScript auf die Cookie-Daten zugreifen kann. Diese Übung ermöglicht es dir, mit diesem Sicherheitsmerkmal zu arbeiten.

### Frontend

- Der Unterordner `/client` enthält die Frontend-Anwendung.
- Um das Frontend einzurichten, führe den Befehl `npm run client-setup` aus.

## Aufgaben

Du wirst eine kleine Backend-Anwendung schreiben, die ein http-only Cookie beim Login erstellt und zurücksendet. Wir werden eine MongoDB-Datenbank für die Benutzerinformationen verwenden. Der gesamte Frontend-Code und ein Teil des Backend-Codes wurden bereits für dich erstellt.

> 🐘 Nutze die Datei `.env.example`, um deine `.env`-Datei einzurichten und deine Anwendung mit einer Datenbank zu verbinden!

> Vergesst bitte nicht , eure Module zu aktualisieren.

```bash
npm install
```

### Aufgabe 1 - Der Registrierungscontroller

Alle Routen und Endpunktfunktionen wurden erstellt, aber du musst die Controller-Logik vervollständigen.

In der Datei [/controllers/user.js](./controllers/user.js) vervollständige den Controller für den `/registration`-Endpunkt.

Der Controller sollte:

1. Die Registrierungsinformationen aus dem **request**-Body-Objekt des Clients entnehmen.
2. Überprüfen, ob der **Benutzername** verfügbar ist.
3. [bcrypt](https://www.npmjs.com/package/bcrypt) verwenden, um einen Hash des Passworts zu erstellen.
4. Einen neuen Benutzer erstellen, wenn alle erwarteten Details angegeben sind.

> Hinweis: Überprüfe das `user`-Schema, um zu sehen, welche Daten erwartet werden!

**Registrierung & testen**

- Starte den Server und öffne die Registrierungsseite des Frontends in deinem Browser ([http://localhost:3001/register](http://localhost:3001/register)).

- Versuche, einen Benutzer zu registrieren. Wenn die Benutzerregistrierung fehlschlägt, liegt das Problem wahrscheinlich in deinem Controller.

### Aufgabe 2 - Der Login-Controller

In der Datei [/controllers/user.js](./controllers/user.js) vervollständige den Controller für den `/login`-Endpunkt.

Der Controller sollte:

1. Die Login-Informationen aus dem **request**-Body-Objekt des Clients entnehmen.
2. Überprüfen, ob der Benutzer existiert.
3. **bcrypt** verwenden, um zu überprüfen, ob das Passwort mit dem Hash des Benutzers aus der Datenbank übereinstimmt.

### Aufgabe 3 - Senden des JWT-Tokens vom Server an den Client

Wir möchten, dass der Client das JWT-Token nach einem erfolgreichen Login erhält.

In deinem Login-Controller, nachdem du validiert hast, dass der Benutzer die korrekten Login-Daten bereitgestellt hat:

1. Generiere ein JWT-Token mit der Funktion [issueJwt()](./libs/jwt.js).
2. Sende das Token zurück an den Client mittels eines **httpOnly** Cookies.
3. Teste deinen Endpunkt, um sicherzustellen, dass das Cookie (mit dem Token) an den Client gesendet wird.

> Hinweis: Um ein Cookie an die Client-Antwort anzuhängen, kannst du die **response** [cookie](http://expressjs.com/en/4x/api.html#res.cookie) Methode verwenden, zum Beispiel:
>
> ```javascript
> res.cookie("jwt", token, {
>   httpOnly: true,
>   secure: false,
>   sameSite: "lax",
> });
> ```

### Aufgabe 4 - Testen, dass das Cookie mit dem JWT beim Einloggen zurückgegeben wird

Öffne die Login-Seite des Frontends in deinem Browser ([http://localhost:3001/login](http://localhost:3001/login)).

- Verwende die Login-Daten, um einen Benutzer einzuloggen. Wenn das Login fehlschlägt, liegt das Problem wahrscheinlich in deinem Controller.
- Verwende die Entwicklertools deines Browsers und überprüfe im **Netzwerk-Tab** die Antwort vom Server. Du solltest das Cookie in der Antwort sehen können.

  ![Browser Developer Tools / Network](./sample-1.png)

Nun haben wir das http-only Cookie sicher in unserem Browser gespeichert, versuchen wir es zu verwenden, um eine Anfrage zu autorisieren!

### Aufgabe 5 - Erstellen der Autorisierungs-Middleware

Um unsere Endpunkte vor unbefugtem Zugriff zu schützen, werden wir an der Autorisierungs-Middleware arbeiten. Später werden wir sie an unseren Endpunkt anhängen.

In der Datei [/middleware/auth.js](./middleware/auth.js):

1. Importiere die Funktion [verifyJwt()](./libs/jwt.js).
2. Verwende die `verifyJwt`-Funktion, um das JWT im http-only Cookie zu überprüfen (es sollte unter dem **request**-Objekt als `req.cookies.jwt` verfügbar sein).
3. Wenn die `verifyJwt`-Funktion **false** zurückgibt;

   - sende eine **Antwort** an den Benutzer mit dem Statuscode `401` und der Nachricht `"Unauthorized"`.
   - die Funktion sollte nicht weiter ausgeführt werden.

4. Wenn `verifyJwt` **erfolgreich** ist, wird es den Inhalt des Tokens als Objekt zurückgeben;

   - führe die Funktion `next()` aus, um die Verarbeitung der Anfrage fortzusetzen.

### Aufgabe 6 - Anhängen der Auth-Middleware an den Admin-Endpunkt

Füge die `authorizeJwt`-Middleware zur `/admin`-Route hinzu.

### Aufgabe 7 - Testen!

Mit deinem laufenden Server (`node server.js`);

- Versuche, dich in deine Anwendung [einzuloggen](http://localhost:3001/login) und sieh nach, ob du autorisiert bist, die [Admin](http://localhost:3001/admin)-Seite zu sehen!
