import { Schema, model } from "mongoose";

const recipeSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  ingredients: [String],
});

export const Recipe = model("recipe", recipeSchema);
