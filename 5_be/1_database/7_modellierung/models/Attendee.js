import { Schema, model } from "mongoose";

const attendeeSchema = new Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    unique: true,
    type: String,
    // validator: {} Das klären wir später
  },
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "event",
    },
  ],
});

export const Attendee = model("attendee", attendeeSchema);
