# Router Organization

In einem wachsenden Projekt bilden sich mehrere Ressourcen, die organisiert werden müssen.

Man kann die Routen aufteilen in gemeinsame Ressourcen sammeln.
Anstelle das jede Route in einer Datei geschrieben wird, können die Routen in mehrere Dateien aufgeteilt werden.

## Wie teilt man Routen auf?

Man nutzt die `Router` Funktion von `express`:

`order.js`

```js
import { Router } from "express"

// Alle weiteren Routen die hier erstellt werden, haben einen Präfix/Vorsilbe
export const orderRouter = Router()

orderRouter.get("/", (request, response) => response.send("(GET) /order"))

orderRouter.get("/:id", (request, response) => response.send("(GET) /order/:id"))

```

Diese Route wird in der `main.js` verwendet.

`main.js`

```js
import express from "express"
import { orderRouter } from "./routes/order.js"
import { recipeRouter } from "./routes/recipe.js"

const app = express()

app.use("/order", orderRouter)
app.use("/recipe", recipeRouter)

app.listen(3000, () => console.log("Server lauscht auf http://localhost:3000"))
```

`main.js` ist der Einstiegspunkt unserer Applikation. Jede Route die im `routes` Ordner erstellt muss in der `main.js` registriert werden.

Um eine API aufzurufen sind zwei wichtige Komponenten wichtig:

- Methode
- Pfad

Wie (Methode) möchte ich was (Pfad) aufrufen?
