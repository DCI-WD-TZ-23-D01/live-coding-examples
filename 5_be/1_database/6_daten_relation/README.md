# Schema Wiederholung

Modellierung von dem folgenden Objekt:

- `author`
  - `required`
  - `String`
  - `minLength` > 1
- `title`
  - `required`
  - `String`
  - `minLength` > 1
- `isbn`
  - `required`
  - `unique`
  - `String`
  - `minLength` >= 10
  - `maxLength` <= 13
- `genres`
  - `[String]`
- `languages`
  - `[String]`
- `rewards`
  - `[String]`
- `cover` (Bild-URL)
  - `String`
  - `default` (Platzhalter)
- `metadata`
  - `Subdocument`
    - `bookTypes`
      - `["e-book", "hard-cover", "soft-cover", "pocket"]`
    - `price`
      - `Number`

```js
const metadataSchema = new Schema(
  {
    bookType: {
      type: String,
      enum: ["ebook", "hardcover", "softcover", "pocket"],
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
    minLength: 10,
    maxLength: 13,
  },
  genres: [String],
  languages: [String],
  rewards: [String],
  cover: {
    type: String,
    default: "https://placehold.co/600x400", // Per Default ein Platzhalterbild einbauen
  },
  metadata: [metadataSchema],
});
```

```js
export const Book = model("book", bookSchema);
```

`Book`:

- Verwendung im Code, bessere Erkennung des Models
- Konvention

`"book"`

- Name der Collection in MongoDB
- Mongoose sucht automatisch die Pluralform des Namens
- setzt den Namen in Kleinbuchstaben