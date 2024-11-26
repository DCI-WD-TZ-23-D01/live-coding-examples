import mongoose from "mongoose";
import { User } from "./models/User.js";

mongoose.connection.on("connected", () => console.log("DB connected!"));
mongoose.connection.on("error", (error) => console.log("DB Error", error));

async function main() {
  // Verbindung zu MongoDB wird aufgebaut
  await mongoose.connect("mongodb://localhost:27017/test");

  // Jetzt können wir mit MongoDB arbeiten
  const user = new User({
    username: "johndoe",
    password: "password",
    email: "johndoe@mail.com",
  });
  await user.save(); // Möglichkeit 1
  await User.create({
    username: "johndoe",
    password: "password",
    email: "johndoe@mail.com",
  }); // Möglichkeit 2

  // mongoose übernimmt einige Methoden von MongoDB
  const users = await User.find();
  console.log({ users });
}

// Erfolgreiches beenden eines Programmes mit 0
main().then(() => process.exit(0));
