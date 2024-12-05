import { model, Schema } from "mongoose";
import { Organizer } from "./Organizer";
import { Attendee } from "./Attendee";

const locationSchema = new Schema(
  {
    address: {
      required: true,
      type: String,
    },
    additionalDetails: String,
  },
  { _id: false }
);

const eventSchema = new Schema(
  {
    title: {
      type: String,
      minLength: 5,
      required: true,
    },
    description: String,
    location: locationSchema,
    maxAttendees: {
      type: Number,
      min: 1,
    },
    organizerId: {
      ref: Organizer,
      type: Schema.Types.ObjectId,
    },
    signups: {
      attendee: {
        ref: Attendee,
        type: Schema.Types.ObjectId,
      },
      date: Date,
    },
  },
  { timestamps: true }
);

export const Event = model("event", eventSchema);
