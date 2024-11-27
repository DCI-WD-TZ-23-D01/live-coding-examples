import mongoose, { model } from "mongoose";

// mongoose ermöglicht für uns, die Daten zu strukturieren und zu validieren
// Blaupause beschreibt die Struktur unseren Objektes
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, // Dieses Attribut MUSS bei der Erstellung des Objektes vorhanden sein
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: String,
  isVerified: Boolean,
});

export const User = model("user", UserSchema);
