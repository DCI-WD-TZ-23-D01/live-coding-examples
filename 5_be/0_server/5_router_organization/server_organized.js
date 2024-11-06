import express from "express";
import { orderRouter } from "./src/routes/order.js";

const app = express();

/**
 *  - order         (Bestellungen)
 *  - recipe        (Gerichte)
 *  - user          (Nutzer)
 *  - reservation   (Reservierungen)
 *  - room          (Räume)
 */

// Hier wurden die Routen für order ausgelagert in die order.js
app.use("/order", orderRouter);

app.listen(3000, () => console.log("Server startet auf http://localhost:3000"));
