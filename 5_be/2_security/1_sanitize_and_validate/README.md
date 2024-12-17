# Sanitieren und Validieren

## Sanitieren

**Problem: XSS & JS Injection**

- JavaScript
- HTML

Wenn der Browser HTML Code erkennt, wird dieser ausgeführt.

**React** sanitiert Strings automatisch.

- `dangerouslysetinnerhtml` => `setInnerHtml === DANGER`

=> Sanitieren = Ändern (Säubern) von Werten

Strings, die in der Datenbank gespeichert werden, müssen so angepasst werden, dass sie "sicher".

1. `<, >` entfernen
2. `encodeURIComponent`: Spezielle Zeichen kodieren (<,>)
   - > Diese werden vom Browser gerendert, aber nicht ausgeführt
3. `validator.escape`: Mittels der `validator` Library, kann man Eingabewerte sanitieren

```js
"<script> (function () { alert('Hacking...');})();</script>"
=>
"&lt;script&gt; (function () { alert(&#x27;Hacking...&#x27;);})();&lt;&#x2F;script&gt;"
```

> Achte darauf, wie Strings verwendet werden, wenn sie in der Datenbank sind.

**Fazit**: Am Ende muss das Backend die Daten sanitieren.

## Validieren

Überprüfe, ob das Format der Daten korrekt ist.

- Prüfe, das Format einer Email/Telefon
- Prüfe, die Sicherheit eines Passwortes

## Tools

Hilfreiche Library: [validator](https://www.npmjs.com/package/validator)

### Verwendung mit Mongoose

Schemas bieten ein `validate`:

```js
import validator from "validator"

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        validate: {
            // validator empfängt den Wert (email)
            validator: function(value) {
                return validator.isEmail(value)
            },
            // Fehlermeldung, wenn der validator false zurückgibt
            message: function(props) {
                return `${props.value} is an invalid email`
            }
        }
    }
    description: {
        type: String,
        required: true,
    }
})

// Definieren eine Funktion, die VOR der Speicherung ausgeführt
userSchema.pre("save", function () {
    // this = object welches gespeichert wird
    this.description = validator.escape(this.description)
});

...
```

> Wichtig: validator soll ein falsy Wert zurückgegeben, ausser `undefined`
