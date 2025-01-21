import mongoose from "mongoose";

const todoItemSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

const TodoItem = mongoose.model("TodoItem", todoItemSchema);

export default TodoItem;
