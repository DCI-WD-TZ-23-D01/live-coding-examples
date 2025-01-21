import User from "../models/User.js";
import TodoItem from "../models/TodoItem.js";

export async function seedDatabase() {
  try {
    const usersCount = await User.countDocuments();
    console.log(`There are ${usersCount} users in the database.`);

    if (usersCount === 0) {
      const user1 = new User({
        username: "Tom",
        password: "ilovecatfood",
        role: "admin",
      });
      await user1.save();

      const user2 = new User({
        username: "Jerry",
        password: "ilovecheese",
        role: "user",
      });
      await user2.save();

      console.log("Seeded Tom and Jerry.");
    }

    const todosCount = await TodoItem.countDocuments();
    console.log(`There are ${todosCount} todos in the database.`);

    if (todosCount === 0) {
      const todo1 = new TodoItem({ text: "Find the cheese" });
      await todo1.save();

      const todo2 = new TodoItem({ text: "Chase the mouse" });
      await todo2.save();

      const hackingTodo = new TodoItem({
        text: `<img
        src="x"
        onerror="alert('Haha I stole your token:' + localStorage.getItem('token'))"
      />`,
      });
      await hackingTodo.save();

      console.log("Seeded TODOS for Tom and Jerry.");
    }
  } catch (error) {
    console.error("Error seeding users:", error);
  }
}
