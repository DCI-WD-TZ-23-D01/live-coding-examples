// 1. express importieren ("type": "modules" in package.json setzen, damit wir import benutzen können)
import express from "express";

// 2. Erstellen wir unsere Applikation, mit der `express` Funktion
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/hello", (req, res) => {
  res.send("Hello back");
});

// 3. Starten des Servers mit .listen()
app.listen(3000, () => console.log("Server started at http://localhost:3000"));
