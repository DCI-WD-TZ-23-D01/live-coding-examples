import express from "express";
import cors from "cors";
import { readFileSync } from "fs";

const app = express();

app.use(express.json()); // Wird die Anfrage bearbeitet
app.use(cors()); // Benötigen wir, mit einem Frontend auf einem anderen Port zu arbeiten

app.post("/login", (request, response, next) => {
  const username = request.body.username;
  const password = request.body.password;

  if (!username || !password) {
    return response.sendStatus(400); // Der Nutzer hat eine fehlerhafte Anfrage geschickt, und das lassen wir ihn wissen!
  }
  try {
    /**
     * Der Nutzer wird hier aus einer Datei geladen
     * Hier haben wir eine Fehlerquelle:
     * - Die Datei wird nicht gefunden => readFileSync
     * - Die Datei ist nicht richtig formatiert => JSON.parse
     */
    const USER = JSON.parse(readFileSync("./user.json", "utf-8"));

    if (username !== USER.username) {
      return response.sendStatus(404); // Nutzer wurde nicht gefunden!
    }
    if (password !== USER.password) {
      return response.sendStatus(401); // Der Zugriff ist nicht authentifiziert
    }

    // Die Anfrage ist erfolgreich!
    return response.sendStatus(200);
  } catch (e) {
    console.log("Fehler wurde gefunden");
    next(e);
  }
});

// Error-Middleware
app.use((error, request, response, next) => {
  console.log("Server hat einen Fehler");
  return response.sendStatus(500);
});

app.listen(3000, () => console.log("Server läuft auf http://localhost:3000"));
