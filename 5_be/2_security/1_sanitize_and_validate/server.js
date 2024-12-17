import express from "express";
import dotenv from "dotenv";
import { User } from "./models/User.js";
import { connect } from "./connect.js";

dotenv.config();

const app = express();

app.use(express.json());

app.post("/users", async (req, res, next) => {
  try {
    await User.create(req.body);
    return res.sendStatus(201);
  } catch (e) {
    next(e);
  }
});

app.use((err, req, res, next) => {
  // console.error(err);
  return res.status(500).json({ err });
});

const PORT = process.env.PORT || 5000;

connect().then(() => {
  app.listen(PORT, () => console.log(`Listen at http://localhost:${PORT}`));
});
