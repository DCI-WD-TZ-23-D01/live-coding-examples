# Verification

## Email

- Mehrere Möglichkeiten
  - `nodemailer`
  - `resend`

### Resend

- Im Dashboard kann man ein **API Key** erstellen
- `npm i resend`

```js
import { Resend } from 'resend';

const resend = new Resend("<API KEY>");

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();
```

### Verfication mit Email

- Man verwendet eine separate Kollection um Verifizierungs-Ids zu speichern
- Die Verifizierungs-ID wird per Mail an einen User geschickt
- Dieser wird dann als Bestätigung als GET-Anfrage an die Verifizierung-Endpunkt geschickt

Zusätzlich ein `UserVerification` Model erstellt.

- One-to-One Beziehung zu `User`
- Speichert die Verifizierung-Ids
- Können mit einem Zeitstempel verbessert werden
  - Abgelaufene Verifizierung können dann invalidiert werden

### Anwendungsgebiete

- Email verifizierung
- Allgemeine Bestätigungen per Mail
- Passwort zurückzusetzen

## Security Best Practices für das Erstellen eines Users

### 1. sensible Daten verstecken

Wichtige oder unnötige Daten können von `mongoose` vor der Umwandlung zu einem JSON gelöscht werden.

```js
userSchema.methods.toJSON = function () {
  const obj = this.toObject();

  delete obj.password;
  delete obj.__v;

  return obj;
};
```

### 2. sensible Daten hashen

Wichtige Daten können, mit z.B. `bcryptjs`, gehasht gespeichert werden.

Man kann die `pre`-Middleware von `mongoose`, welches VOR einer Aktion ausgeführt wird. Hier wird vor `save`, also vor der Speicherung eines Objects eine Funktion ausgeführt.

Funktioniert ähnlich wie die Event Emitter im Browser.
Event Emitter im Browser werden NACH einem Event ausgeführt.

```js
userSchema.pre("save", function () {
  this.password = bcrypt.hashSync(this.password);
});
```