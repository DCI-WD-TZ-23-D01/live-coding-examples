import { Schema, model } from "mongoose";
import { Event } from "./Event.js";

const organizerSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  phoneNumber: String,
  events: [
    {
      type: Schema.Types.ObjectId, // Verknüpfung zu Veranstaltungen
      ref: Event, // Name der Collection mit der verknüpft werden soll
    },
  ],
});

export const Organizer = model("organizer", organizerSchema);
