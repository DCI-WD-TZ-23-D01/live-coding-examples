import { Schema, model } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (email) {
        return validator.isEmail(email);
      },
      message: () => "Invalid email",
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (password) {
        return validator.isStrongPassword(password, {
          minLength: 10,
          minNumbers: 2,
          minSymbols: 2,
          minUppercase: 2,
          minLowercase: 2,
        });
      },
      message: () => "Weak password",
    },
  },
  verified: Date,
});

/** !Best Practice zur Sicherheit
 *  Hier wird unser Dokument zu einem JSON umgewandelt
 */
userSchema.methods.toJSON = function () {
  const obj = this.toObject();

  delete obj.password;
  delete obj.__v;

  return obj;
};

userSchema.pre("save", function () {
  this.password = bcrypt.hashSync(this.password);
});

export const User = model("user", userSchema);
