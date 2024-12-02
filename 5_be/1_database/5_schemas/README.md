# Schema

- mongoose Schemas
- Blaupause für Objekte/Dokumente
- Types:
  - String
  - Number
  - Boolean
  - Date
  - ObjectId
  - Komplexe:
    - Array
    - Sub-Dokumente
- Attribute
  - Validatoren
    - `required`

```js
import { Schema } from "mongoose"

const todoSchema = new Schema({
    title: {
        required: true, // verpflichtend
        type: String,
    },
    deadline: {
        type: Date,
        default: () => {
            const currentDate = Date.now()
            const day = 1000 * 60 * 60 * 24 // 24h in ms
            return new Date(currentDate + day)
        }
    },
    done: {
        default: false,
        type: Boolean
    },
    description: String, // optional
    subTodos: [String] // Array
})
```

## Attribute

**default**:

- Standardwert für Felder definieren
- Funktion, die einen Standardwert zurückgibt

**unique**:

- Felder einzigartig in der Collection setzen
- Anwendungsfälle:
  - Benutzername
  - Email
  - Slug (URL Abkürzungen)

```js
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String
        required: true,
    }
})
```

## Array

- Eingebauten `default`-Wert mit `[]`

## Validation

- `required`
  - Fängt einen leeren String ab
- Number: `min`/ `max`
- String: `minLength` / `maxLength`
- Theorie: Angriffvektor, um die Datenbank aufzublähen

```js
const petSchema = new Schema({
    ...,
    name: {
        minLength: 1,
    },
    description: {
        type: String,
        maxLength: 200
    },
    age: {
        min: 1,
        max: 200
    }
})
```

## Weitere Konfigurationen

- Zeitstempel: `{ timestamps: true }`
  - Zu jedem Modell werden zwei zusätzliche Felder hinzugefügt:
    - `createdAt`
    - `updatedAt`

## Sub-Dokumente

Sub-Dokumente benötigen nicht zwingenderweise eine `_id`.

```js
const addressSchema = new Schema({
    street: String
    city: String
    postcode: String
}, { _id: false }) // Für dieses Schema wird keine _id angelegt

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    address: [addressSchema] // ein Nutzer kann mehrere Adressen haben
})
```

## Zusammenfassung

- Schema-Typen:
  - Array
  - Sub-Dokumente
- Schema Validation
  - Number: `min`/`max`
  - String: `minLength`/`maxLength`
  - `required`
- Schema Feldattribute:
  - `default`
    - Wert
    - Funktion
  - `unique`
    - Das Wert in diesem Feld ist einzigartig in der gesamten Collection
- Schema Konfiguration:
  - `timestamps`
  - `_id`
    - Praktisch für Sub-Dokumente
