import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  kind: {
    type: String,
    required: true,
  },
  note: String,
});

// Muss großgeschrieben werden
export const Pet = mongoose.model("pet", petSchema);
