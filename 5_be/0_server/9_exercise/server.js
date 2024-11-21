import express from "express";
import dotenv from "dotenv";
import { errorMiddleware } from "./errorMiddleware.js";

dotenv.config();
const app = express();

app.use(express.json()); // Middleware, um die req.body in ein JSON Objekt umzuwandeln

const PORT = process.env.PORT || 5000; // Wir suchen nach einem PORT in der Umgebungsvariable, ansonsten fallen wir auf 5000 zurück

// Dynamische Route
app.get("/:number", (req, res, next) => {
  // req.params und Umgebungsvariablen sind strings, diese müssen mit parseInt zu number konvertiert werden

  // parseInt(undefined) => NaN
  // NaN * 1 = NaN
  // NaN ist kein valides JSON, wird von der Antwort zu einem null Wert konvertiert
  const num = parseInt(req.params.number);
  const MULTIPLIKATOR = parseInt(process.env.MULTIPLIKATOR);
  if (isNaN(num)) {
    // Dieser Error aktiviert die Error-Middleware
    return next(new Error("Error: Invalid parameter"));
  }
  if (isNaN(MULTIPLIKATOR)) {
    // Dieser Error aktiviert die Error-Middleware
    return next(new Error("Error: Invalid constant"));
  }

  res.json({ result: num * MULTIPLIKATOR });
});

app.post("/hello", (req, res, next) => {
  try {
    // ...code
    return res.sendStatus(200);
  } catch (e) {
    next(e); // Error abgefangen
  }
});

// Error Middleware ist eine Callback Funktion, die von express aufgerufen und nicht von uns!
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
