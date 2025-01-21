import express from "express";
import cors from "cors";
import { seedDatabase } from "./libs/seedDatabase.js";
import { connectToDB } from "./libs/db.js";
import { createToken } from "./middleware/createToken.js";
import { checkToken } from "./middleware/checkToken.js";
import requestLogger from "./middleware/requestlogger.js";
import TodoItem from "./models/TodoItem.js";
import User from "./models/User.js";
import { checkRole } from "./middleware/checkRole.js";

await connectToDB();

// initialize our database with some data
await seedDatabase();

const app = express();
app.use(express.json());
app.use(cors());
app.use(requestLogger);

app.post("/login", async (req, res) => {
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (!user) {
    res.status(401).send({ error: "Invalid username or password" });
    return;
  }

  const token = createToken(user);
  res.send({ user, token });
});

app.get("/todos", checkToken, async (req, res) => {
  const todos = await TodoItem.find();
  res.send(todos);
});

app.delete("/todos/:id", checkToken, checkRole("admin"), async (req, res) => {
  const todo = TodoItem.findById(req.params.id);

  if (!todo) {
    res.status(404).send({ error: "Todo not found" });
  }

  await TodoItem.deleteOne({ _id: req.params.id });
  console.log(
    `User ${req.user.username} deleted todo with id ${req.params.id}`
  );

  res.send({ message: "Todo deleted" });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
