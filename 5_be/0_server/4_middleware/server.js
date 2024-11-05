import express from "express";
import { checkName } from "./src/middlewares/checkName.js";
import { lowercase } from "./src/middlewares/lowercase.js";
import { validate } from "./src/middlewares/validate.js";

const app = express();

// Extrahiert das body aus der Abfrage und erstellt ein Objekt womit man arbeiten kann
app.use(express.json());
app.use(checkName);

app.post("/", lowercase, (request, response) => {
  const name = request.body.name;
  return response.json({ greeting: `Hello ${name}` });
});

app.post("/register", validate, (request, response) => {
  const username = request.body.username;
  response.send("hello " + username);
});

function createLocale(request, response, next) {
  const lang = request.headers["accept-language"].split(",")[0];
  request.lang = lang;
  next();
}

app.get("/", createLocale, (request, response) => {
  const lang = request.lang;
  let greeting = "";
  if (lang.includes("de")) {
    greeting = "Hallo";
  } else if (lang.includes("fr")) {
    greeting = "Bonjour";
  } else if (lang.includes("ru")) {
    greeting = "привет";
  } else if (lang.includes("es")) {
    greeting = "Holà";
  } else if (lang.includes("fa")) {
    greeting = "روز بخیر";
  }
  response.send(greeting);
});

app.listen(3000, () => {
  console.log("Server läuft auf http://localhost:3000");
});
