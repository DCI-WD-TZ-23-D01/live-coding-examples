import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  registerDate: { type: Date, default: Date.now },
  password: { type: String },
});

const User = mongoose.model("user", userSchema);

export default User;
