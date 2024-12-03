import { model, Schema } from "mongoose";

const metadataSchema = new Schema(
  {
    bookType: {
      type: String,
      enum: ["Ebook", "Hardcover", "Softcover", "Paperback", "Audiobook"],
    },
    price: Number,
  },
  { _id: false }
);

const bookSchema = new Schema({
  author: {
    required: true,
    type: String,
    minLength: 1,
  },
  title: {
    required: true,
    type: String,
    minLength: 1,
  },
  isbn: {
    required: true,
    type: String,
    unique: true,
    minLength: 13,
    maxLength: 17,
  },
  genres: [String],
  languages: [String],
  rewards: [String],
  cover: {
    type: String,
    default: "https://placehold.co/600x400", // Per Default ein Platzhalterbild einbauen
  },
  //   metadata: [
  //     {
  //       bookType: {
  //         type: String, // String-Enums
  //         enum: ["ebook", "hardcover", "softcover", "pocket"], // Optionene für die Enums
  //       },
  //       price: Number,
  //       _id: false,
  //     },
  //   ],
  metadata: [metadataSchema],
});

/**
 * Book Variable
 *  - Verwendung im Code, bessere Erkennung des Models
 *  - Konvention
 *
 * "book": Name der Collection in MongoDB
 *  - Mongoose sucht automatisch die Pluralform des Namens
 *  - setzt den Namen in Kleinbuchstaben
 */
export const Book = model("book", bookSchema);
