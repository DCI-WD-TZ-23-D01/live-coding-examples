# Query Techniques

    
Frontend bestimmt, was alles angezeigt werden soll.

- Suchfunktion
- Pagination

> Query Parameter/String = Key-Value Paare in der URL

`http://localhost:3000/products?filter=Wolle`

**Wichtig**: Alle Werte in einer Query sind von Typ `string`!

Express bietet im `Request`-Objekt ein `query` Objekt an.
Mit diesem kann man auf die Key-Value-Paare in der URL zu greifen.
Diese werden in der URL definiert. Es gibt keine vordefinierten Parameter.

Weitere Parameter lassen sich mit ein `&` hinzufügen.

```js

// wird unter "/products" registriert wird
const productsRouter = Router()

productsRouter.get("/", async (req, res, next) => {
    const filter = req.query.filter // filter = "Wolle"
    res.send(`Du suchst nach ${filter}`)
})

```

Das Frontend hat eine erhöhte Möglichkeit _wie_ auf die Daten zugriffen werden können.

## Suchfunktion

Frontend { query } -> Backend
Frontend <- { produkte } Backend

- Suchfunktion kann mit einem Regex verbessert werden
- [Fuzzy Search](https://www.fusejs.io/)
  - Mächtigere Suchfunktion
  - z.B. `piza` wird als `Pizza` erkannt, wird von einer Regex nicht gefunden

```js
{
    name: { $regex: dish, $options: "i" },
}
```

Beispiel mit `mongoose`. Es werden alle Dokumente gesucht, wo `dish` im `name` vorkommt.

## Pagination

- Werden Daten in einzelne Blöcke aufgeteilt.

- Fixen Anzahl: `size`
- Spezifizierte Block: `page`
  - Muss größer sein als 0

```js
skip() // => Überspringt Dokumente
limit() // => limitiert die Anzahl der Dokumente
```

**Vorteil**:

- Beschleunigt die Webseite
- Backend Server wird entlastet
