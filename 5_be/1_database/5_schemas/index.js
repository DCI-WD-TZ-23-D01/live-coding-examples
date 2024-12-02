import { connect } from "./connect.js";
import { Todo } from "./models/Todo.js";

async function main() {
  await connect();
  await Todo.create({
    title: "Spazieren",
  });
}

main().then(() => process.exit());
