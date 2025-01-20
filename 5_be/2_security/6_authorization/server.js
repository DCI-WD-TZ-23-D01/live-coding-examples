import express from "express";
import dotenv from "dotenv";
import { usersRouter } from "./routes/users.js";
import { connect } from "./utils/connect.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/users", usersRouter);

app.use((err, req, res, next) => {
  console.error(err);
  return res.sendStatus(500);
});

const PORT = process.env.PORT || 5000;

// Zuvor müssen alle Verbindungen stehen, bevor der Server offengelegt
connect().then(() => {
  app.listen(PORT, () => console.log(`Listen at http://localhost:${PORT}`));
});
