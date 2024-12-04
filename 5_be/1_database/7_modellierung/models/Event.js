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
      ref: Organizer,
      type: Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);

export const Event = model("event", eventSchema);
