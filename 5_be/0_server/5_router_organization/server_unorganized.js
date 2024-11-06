import express from "express";

const app = express();

/**
 *  - order         (Bestellungen)
 *  - recipe        (Gerichte)
 *  - user          (Nutzer)
 *  - reservation   (Reservierungen)
 *  - room          (Räume)
 */

// Standardmäßige APIs sehen so ähnlich aus
app.post("/order", (request, response) => response.send("(POST) /order"));
app.put("/order/:id", (request, response) => response.send("(PUT) /order/:id"));

// Lesen von mehreren Bestellungen
app.get("/order", (request, response) => response.send("(GET) /order"));

//Lesen von einer Bestellungen
app.get("/order/:id", (request, response) => response.send("(GET) /order/:id"));

app.delete("/order", (request, response) => response.send("(DELETE) /order"));

// Standardmäßige APIs sehen so ähnlich aus
app.post("/recipe", (request, response) => response.send("(POST) /recipe"));
app.put("/recipe/:id", (request, response) =>
  response.send("(PUT) /recipe/:id")
);

// Lesen von mehreren Bestellungen
app.get("/recipe", (request, response) => response.send("(GET) /recipe"));

//Lesen von einer Bestellungen
app.get("/recipe/:id", (request, response) =>
  response.send("(GET) /recipe/:id")
);

app.delete("/recipe", (request, response) => response.send("(DELETE) /recipe"));

app.post("/register");
app.post("/login");
app.get("/logout");
app.get("/status"); // API: Überprüfen, ob der Nutzer eingeloggt ist oder nicht

app.get("/user"); // API: Lesen von mehreren Nutzern
app.put("/user/:id");
app.delete("/user");

app.listen(3000, () => console.log("Server startet auf http://localhost:3000"));
