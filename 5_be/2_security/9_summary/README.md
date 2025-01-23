# Summary - Security

## Sanitation and Validation

- Informationen aus dem Frontend sind nicht vertrauenswürdig
- `validator` Daten validieren
  - z.B. E-Mail Format prüfen, `isEmail`
  - Prüfe die Stärke eines Passwortes, `isStrongPassword`
- Strings bereinigen, die potentielle Scripts währen
  - Schützen uns vor XSS-Angriffen
  - Webseiten mit `innerHtml`, können durch XSS angegriffen werden

## Verschlüsselung

- Umkehrbare Verarbeitung
- Verschlüsselung ändert etwas, sodass es unerkennbar wird
  - für potentielle Angreifer

### Implementierung

- `crypto` => `AES` (Advanced Encryption Standard)

## Hashing

- Nicht umkehrbar
  - Man kann keinen Hash umtransformieren
  - Man kann nicht die Quelle mittels einem Hash herausfinden
- Die Länge der Ausgabe ist für jede Funktion ist diese gleich unabhängig von der Eingabelänge
- Ausgabe ist immer eine fixe Länge (z.B. 32 Bytes = 256 Bit)

### Implementierung

- nativ: `crypto`
- bcrypt: `bcryptjs`
  - verwendet einen anderen Algorithmus im Gegensatz zu `crypto`
  - Ist eher geeignet, wenn man viele Hash-Operation macht

### Sicherheitsaspekt

- fügt eine weitere Ebene der Sicherheit zu Daten hinzu
  - sensible Daten in der Datenbank sind anonymisiert
  - falls die Daten aus der Datenbank gestohlen werden, können Angreifer diese Daten nicht lesen

### Anwendungen

- Passwörter => anonymisieren
- JWT => Signatur = Hash(Header + Payload + Secret)

## JWT

- JWT = JSON Web Token
- Token-Authentifizierung
  - Client-side Authentifizierung
  - Vertrauenswürdigen Informationen liegen bei dem Client
- Anatomie: Header + Payload + Signatur
  - Header: Beinhaltet Information zu dem Hashing-Alg. und der Typ des Tokens
  - Payload: Beinhaltet Informationen die vom Server gesetzt wurden, z.B. die User ID, Zeitzone, Sprache, Farbschema
  - Signatur: Auschlaggegebende Information zur Authentifizierung, validiert das der JWT vom Server erstellt wurde

### Implementierung

- `jsonwebtoken`

## Cookies

- kleine Datenstücke die in einem HTTP-Header liegen
- Der Server kann mit `Set-Cookie`, im HTTP-Header, dem Browser signalisieren, dass ein Cookie gespeichert werden soll
- Können einen Ablaufdatum haben

### Verwendung

- `cookie-parser`

### Anwendung

- Sessionsmanagement
- Personalisierung
- Tracking

Alle Anwendungsgebiete mit einem JWT umgesetzt werden kann.

### Sicherheitsaspekt

- Im Cookie haben wir die Möglichkeit, Daten vor JS abzuschirmen
  - **httpOnly**
- Cookies könenn auch nur auf HTTPS eingeschränkt werden
  - **secure**

> JWT, die als **httpOnly**-Cookie im Header gespeichert werden, sind sehr sicher

## Autorisierung

- Was darfst du?
- Rollenbasierte Autorisierung
  - `"admin", "user"`
  - Subjekt
- Berechtigungsbasierte Autorisierung
  - `"DELETE_TODO", "DELETE_USER", "VIEW_SETTINGS"`
  - Objekt
- Beide Techniken können auch miteinander kombiniert werden
- Dadurch können komplexe Authentifizierungssystem gebaut werden

### Implementierung

- Meistens wird dies in `express` mit Middleware-Funktionen umgesetzt
  - HOC (Higher-Order Function), die weitere Middleware-Funktionen für uns erstellt

```js
export function checkRole(targetRole) {
  console.log("Checking for role:", targetRole);
  // das hier ist die Middleware, die später aufgerufen wird
  // "higher-order function": Eine Funktion, die eine Funktion zurückgibt
  // die innere Funktion ist die tatsächliche Middleware-Funktion,
  // die mit den Parameter der äußeren Funktion arbeiten kann

  return function (req, res, next) { // Es wird eine neue Middleware-Funktion erstellt
    // In der inneren Funktion haben auch Zugriff auf das User-Objekt
    console.log("Checking role...");
    if (!req.user.roles.includes(targetRole)) {
      return res.sendStatus(403);
    }
    next();
  };
}
```

## Datei-Upload

Dateien können an verschiedenen Orten gespeichert werden:

- Server
- Datenbank
- Cloud (Dritt-Anbieter)
  - Cloudinary (Bilder)
  - AWS S3 (Allg Bilder)

### Sicherheitsaspekte

- Braucht man ein Antivirusprogramm?
- Wie groß soll die Datei sein?
- Wie oft dürfen Nutzer Dateien hochladen?
- Wer darf Dateien hochladen?

### Implementierung

- `multer` + `uuid`
- Wenn Dateien auf dem Server gespeichert, besteht die Gefahr der Namenskollision
  - Die Namen werden mit einer `uuid` ersetzt.
