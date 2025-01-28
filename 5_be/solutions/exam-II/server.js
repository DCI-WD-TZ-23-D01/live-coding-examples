import express from "express";
import dotenv from "dotenv";
import { storesRouter } from "./routes/stores.js";
import { citiesRouter } from "./routes/cities.js";
import { connect } from "./utils/connect.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/stores", storesRouter);
app.use("/cities", citiesRouter);

app.use((err, req, res, next) => {
  console.log(JSON.stringify(err, null, 2));
  return res.sendStatus(500);
});

const PORT = process.env.PORT || 5000;

// Zuvor müssen alle Verbindungen stehen, bevor der Server offengelegt
connect().then(() => {
  app.listen(PORT, () => console.log(`Listen at http://localhost:${PORT}`));
});
