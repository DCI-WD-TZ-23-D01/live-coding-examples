import express from "express";
import dotenv from "dotenv";
dotenv.config(); // Hier sucht dotenv nach der .env

const app = express();

app.get("*", (req, res) => res.send("Servus!"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  console.log(`Server läuft auf http://localhost:${PORT}`)
);
