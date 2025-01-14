import { Schema, model } from "mongoose";

const userVerificationSchema = new Schema({
  userId: {
    ref: "user",
    type: Schema.Types.ObjectId,
  },
});

export const UserVerification = model(
  "user_verification",
  userVerificationSchema
);
