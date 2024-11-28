# CRUD API mit Mongoose

In einem Server ist Express verantwortlich für die Bereitstellung der Schnittstellen.
Mongoose ist verantwortlich für die Verarbeitung mit der Datenbank (MongoDB).

**Express: Schnittstelle**

```js
app.get("/pets", (req, res) => {
    // Pets werden ausgelesen
})

app.post("/pets", (req, res) => {
    // Ein neues Haustier (pet) wird erstellt
})
```

**Mongoose: Businesslogik**

```js
import { Pet } from "./models/Pet.js"

// Es wird Haustiere aus der Datenbank gelesen
const result = await Pet.find()

const pet = await Pet.create({ name: "Bello", age: 1 })
```

**Express + Mongoose**

```js
app.get("/pets", async (req, res) => {
    const result = await Pet.find()
    return res.json(result)
})

app.post("/pets", async (req, res) => {
    const name = req.body.name
    const age = req.body.age
    const pet = await Pet.create({ name, age })
    return res.status(201).json(pet)
})
```

## Delete

Für das Löschen von Daten wird ein Kriterium benötigt.

```js
Pet.deleteOne({ _id: ... })
```

Alternativ, wenn wir wissen wir haben eine ObjectId!

```js
Pet.findByIdAndDelete(id)
```

```js
app.delete("/pets/:id", async (req, res) => {
    const id = req.params.id
    await Pet.findByIdAndDelete(id)
    return res.sendStatus(204)
})
```


## (Simple) Projectstruktur

```
Project/
├── src/
│   ├── routes/
│   │   └── pets.js
│   ├── models/
│   │   └── Pet.js
│   ├── utils/
│   │   └── connect.js
│   └── server.js
└── package.json
└── .env
```

1. Hilfsfunktionen anlegen
   1. `connect.js` anlegen und implementieren
2. Models erstellen
   1. `Pet.js`, strukturieren und exportieren
   2. Wird dann in der Implementierung im Router benötigt
3. `server.js` anfangen
   1. Server aufsetzen
   2. Middleware registrieren `express.json()`
4. `routes/pets.js`
