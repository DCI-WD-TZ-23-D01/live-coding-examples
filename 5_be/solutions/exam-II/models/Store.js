import { model, Schema } from "mongoose";

const storeSchema = new Schema({
  name: {
    type: String,
    minLength: 2,
  },
  category: {
    type: String,
    enum: ["Lebensmittel", "Kleidung", "Elektronik", "Sport", "Other"],
    default: "Other",
  },
  cities: [
    {
      type: Schema.Types.ObjectId,
      ref: "city",
    },
  ],
});

export const Store = model("store", storeSchema);
