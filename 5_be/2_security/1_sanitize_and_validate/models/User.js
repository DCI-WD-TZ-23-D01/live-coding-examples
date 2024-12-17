import { Schema, model } from "mongoose";
import validator from "validator";
/**
 * Alle Felder von unserem User sind wichtig!
 *
 */
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 50,
  },
  password: {
    type: String,
    required: true,
    maxLength: 50,
    validate: {
      validator: function (value) {
        return validator.isStrongPassword(value, {
          minLength: 10,
          minSymbols: 1,
          minNumbers: 1,
          minUppercase: 1,
          minLowercase: 1,
        });
      },
      message: function () {
        return "weak.";
      },
    },
  },
  email: {
    type: String,
    unique: true,
    required: true,
    minLength: 6,
    maxLength: 100,
    validate: {
      // read-only
      validator: function (value) {
        return validator.isEmail(value);
      },
      message: function (props) {
        return `${props.value} is an invalid email.`;
      },
    },
  },
  description: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 500,
  },
});

// read/write von dem zu speichernden Objekt
// WICHTIG: pre hook muss VOR Erstellung des Modells registiert werden
userSchema.pre("save", function () {
  // description wurde angepasst, ehe das Objekt gespeichert wurde
  this.description = validator.escape(this.description);
});

export const User = model("user", userSchema);
