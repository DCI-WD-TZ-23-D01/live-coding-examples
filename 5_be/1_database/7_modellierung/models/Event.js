import { model, Schema } from "mongoose";

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
      required: true,
      ref: "organizer",
      type: Schema.Types.ObjectId,
    },
    signups: [
      {
        attendee: {
          ref: "attendee",
          type: Schema.Types.ObjectId,
        },
        date: {
          type: Date,
          default: Date.now, // add default
        },
      },
    ],
  },
  { timestamps: true }
);

export const Event = model("event", eventSchema);
