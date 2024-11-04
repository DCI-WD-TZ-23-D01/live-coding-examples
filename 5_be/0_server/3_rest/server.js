import express from "express";

const app = express();

app.use(express.json());

/**
 * Names API, wir sammeln Namen
 *
 */
const names = ["Johannes", "Daniel", "Lukas"];

// Pfad, Handler
// Alle Namen werden zurückgegeben
app.get("/", (request, response) => {
  response.json(names);
});

app.get("/:index", (request, response) => {
  const index = parseInt(request.params.index);
  const name = names.at(index); // Sicherer Ansatz, da kein Error entsteht
  if (name) {
    response.json(name);
  } else {
    response.sendStatus(400); // Bad Request
  }
});

// Ein neuer Name wird hinzugefügt
app.post("/", (request, response) => {
  const name = request.body.name; // Im body werden die Daten verschickt
  names.push(name);
  response.sendStatus(200); // Ok Status
});

// PUT-Methode
// Dynamischen Pfad, mit einem Platzhalter names index
app.put("/:index", (request, response) => {
  const index = parseInt(request.params.index); // Zugriff auf die Variable im Platzhalter, wo wir etwas ändern wollen
  const name = request.body.name; // Was geändert wird
  if (index >= 0 && index < names.length) {
    names[index] = name;
    response.sendStatus(200); // Ok Status
  } else {
    response.sendStatus(400);
  }
});

// DELETE-Methode
app.delete("/", (request, response) => {
  names.pop();
  response.sendStatus(200);
});

app.listen(3002, () => console.log("Server startet auf http://localhost:3002"));
