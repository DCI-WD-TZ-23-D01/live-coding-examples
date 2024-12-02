import { model, Schema } from "mongoose";

const todoSchema = new Schema(
  {
    title: {
      // min: 1,
      required: true, // verpflichtend
      type: String,
    },
    deadline: {
      type: Date,
      default: () => {
        const currentDate = Date.now();
        const day = 1000 * 60 * 60 * 24; // 24h in ms
        return new Date(currentDate + day);
      },
    },
    done: {
      default: false,
      type: Boolean,
    },
    description: String, // optional
    subTodos: [String], // Array
  },
  { timestamps: true }
);

export const Todo = model("todo", todoSchema);
