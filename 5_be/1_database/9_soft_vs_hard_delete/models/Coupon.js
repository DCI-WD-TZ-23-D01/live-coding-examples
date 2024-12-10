import { Schema, model } from "mongoose";

const couponVariationSchema = new Schema(
  {
    couponType: {
      type: String,
      required: true,
      // relative => prozentual, absolute => fester Wert
      enum: ["relative", "absolute"],
    },
    value: {
      required: true,
      type: Number,
    },
  },
  { _id: false }
);

const couponSchema = new Schema(
  {
    startDate: {
      required: true,
      type: Date,
    },
    expiredDate: {
      // impliziert ein Soft Delete Feld
      required: true,
      type: Date,
    },
    couponVariation: {
      type: couponVariationSchema,
      required: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    usageLimit: {
      type: Number,
      default: 1,
      min: 1,
    },
    deletedAt: Date,
  },
  { timestamps: true }
);

export const Coupon = model("coupon", couponSchema);
