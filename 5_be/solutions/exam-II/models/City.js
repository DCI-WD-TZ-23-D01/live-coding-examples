import { model, Schema } from "mongoose";

const citySchema = new Schema({
  name: {
    type: String,
    minLength: 3,
    validate: {
      validator: function (name) {
        if (!/(^[a-zA-Z][a-zA-Z\s]*$)/.test(name)) {
          throw {
            message: "String contains invalid character",
            statusCode: 400,
          };
        }
        return true;
      },
      message: function (props) {
        return `Error: ${props.error}. ${props.value} is not valid.`;
      },
    },
  },
  population: {
    type: Number,
    min: 1,
  },
  stores: [
    {
      type: Schema.Types.ObjectId,
      ref: "store",
    },
  ],
});

export const City = model("city", citySchema);
