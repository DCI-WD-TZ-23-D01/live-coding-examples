import express from "express";

// Initialisierung von unserem Server
const app = express();

// Wir konfigurieren unseren Server, um mit JSON Daten zu arbetien
app.use(express.json());

// Math.random() => [0,1)
// MAGIC_NUMBER => [1,100]
const MAGIC_NUMBER = Math.floor(Math.random() * 100) + 1;

// GET => Der Server schickt Daten
app.get("/hello", (request, response) => {
  response.send("Hello back!");
});

app.post("/guess", (request, response) => {
  // request.body; // mit express.json können wir mit dem body arbeiten
  const num = request.body.num;
  // !Wichtig: NUR EINMAL EINE ANTWORT ZURÜCKSCHICKEN
  if (num < MAGIC_NUMBER) {
    return response.send("Number is too small\n");
  } else if (num > MAGIC_NUMBER) {
    return response.send("Number is too large\n");
  } else {
    return response.send("Congratulations!");
  }
});

// wildcard/catch-all
app.get("/*", (request, response) => {
  response.sendStatus(404);
});

app.listen(3000, () => {
  console.log("Server gestartet: http://localhost:3000");
});
