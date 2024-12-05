import { Schema, model } from "mongoose";
import { Event } from "./Event";

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
      ref: Event,
    },
  ],
});

export const Attendee = model("attendee", attendeeSchema);
