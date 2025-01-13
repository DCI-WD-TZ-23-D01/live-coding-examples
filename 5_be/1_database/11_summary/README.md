# Zusammenfassung - Datenbank

## MongoDB

- NoSQL-Datenbank
  - Daten können unstrukturiert vorhanden
  - Biete eine hohe Flexibilität an
- Die Arbeit mit MongoDB ist ähnlich wie mit JavaScript
  - Konzeptuell: Sammlung (Collection) von Dokumenten (Documents) <-> Array von Objekten
- Eine Datenbank in MongoDB besteht aus ein oder mehreren Kollektion
- Eine Kollektion besteht aus keinem, einem oder meheren Dokumenten

### Dokument

- BSON-Objekt
  - Hat sehr viele Ähnlichkeiten zum JSON
  - JSON ist für Menschen gemacht
  - BSON ist für Computer gemacht
- `_id`
  - Wird automatisch von MongoDB erstellt
  - `ObjectID`: Strukturierte ID, die es ermöglicht verschiedene ID auf verschiedenen Datenbanken zu haben
  - 12-Byte:
    - 4-Byte: Zeitstempel
    - 5-Byte: Zufallswert vom Prozess erstellt, einzigartig für Server/Computer
    - 3-Byte: zufällig initialisierter Zähler der hochgezählt wird

### Criteria Query

- MongoDB verwendet ein Schema zum Filtern von Daten
  - Deklarativ

```js
const birthYear = new Date("2020-01-01")
db.animals.find({ birthYear: { $gt: birthYear } })
// => Alle Tiere gesucht, die "name": "Josh" im Dokument beinhalten
```

- Beschreiben, wie ein Objekt auszusehen hat, mit dem man arbeiten möchte
- `new Date` lässt sich auch in MongoDB Compass ausführen

> Queries werden in Such-, Akualisierung-, Löschoperatoren von MongoDB verwenden

## Mongoose

### Modellieren mit Mongoose

> ODM = Object Document Mapping

- Dokumente haben verschiedene Attribute
  - Gewisse Attribute können auch `undefined` sein
- `mongoose` ermöglicht die Definition der Dokumente für MongoDB
- Definition für ein Dokument wird über ein `Schema` getätigt

#### Schemas

- Erstellung der Struktur einer Collection
- Attribute + Datentypen:
  - `String`
  - `Date`
  - `Number`
  - `Boolean`
  - `Array` (`[]`)
  - `Schema` (`Object`) => Sub-Documents (Unterdokumente)
    - `_id`: Verhindert die Erstellung einer Id
  - `ObjectId`
- Validatoren:
  - `required`
  - `unique`
  - `min`/`max`: Zahlen einschränken
- Weitere Konfigurationen:
  - `timestamps`: Fügt zwei Felder zum Dokumente hinzu vom Typ `Date`

```js
import { Schema, model } from "mongoose"

/**
 * - username
 * - password
 * - createdAt/updatedAt
 * - email
 * - roles
 * - address
 */
const addressSchema = new Schema({
  street: String,
  buildingNumber: String
  zipCode: String
  city: String
  country: String
}, {
  _id: false
})

const userSchema = new Schema({
  username: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  email: {
    required: true,
    unique: true,
    type: String
  },
  roles: [String],
  address: addressSchema
}, {
  timestamps: true
})

export const User = model("user", userSchema) // Erstellt eine Collection
```

### Mocking

> `@fakerjs/faker`

Für die Erstellung von zufälligen Daten ist die `@fakerjs/faker` Bibliothek hilfreich.

### Datenrelationen

Wie die Daten miteinander verknüpft sind

**One-to-One**:

Eine Person hat eine Steuer-Id.
Eine Steuer-Id gehört einer Person.

**One-to-Many**:

Eine Mutter hat ein oder mehrere Kinder haben.
Ein oder mehrere Kinder können zu einer Mutter gehören.

**Many-to-Many**:

Mehrere Mitarbeiter können in meheren Räumen arbeiten.
Mehrere Räume können mehrere Mitarbeiter haben.

```js
import { Schema, model } from "mongoose"

const employeeSchema = new Schema({
  firstName: String
  lastName: String
  rooms: [
    {
      type: Schema.Types.ObjectId,
      ref: "room"
    }
  ]
})

export const Employee = model("employee", employeeSchema)

const roomSchema = new Schema({
  roomNumber: Number
  floor: Number
  description: String
  employees: [
    {
      type: Schema.Types.ObjectId,
      ref: "employee"
    }
  ]
})

export const Room = model("room", roomSchema)
```

**Wie können wir auf die Relationen zu greifen, bei einer Abfrage?**

In einer Abfrage kann zusätzlich `populate` aufgerufen werden, um ein bestimmtes Attribut mit der verknüpften Relation zu befüllen.

```js
employeeRouter.get("/:id", async (req, res) => {
  const id = req.params.id
  const employee = await Employee.find({_id: id}).populate("room")
  return res.json(employee)
})  
```
