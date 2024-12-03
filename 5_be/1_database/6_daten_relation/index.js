import { connect } from "./connect.js";
import { Book } from "./models/Book.js";
import { faker } from "@faker-js/faker";

async function main() {
  await connect();
  const book = {};

  // Alle Bücher löschen, um die Daten zurückzusetzen
  await Book.deleteMany();

  // Die "Zufälligkeit" festzulegen
  faker.seed(123);

  for (let i = 0; i < 10; i++) {
    book.title = faker.book.title();
    book.author = faker.book.author();
    book.isbn = faker.commerce.isbn();

    // Ein leeres Array mit 5 "Boxen" erstellt.
    // Für jede leere Position wird ein Genre erstellt
    book.genres = Array.from({ length: 5 }).map(() => faker.book.genre());

    book.languages = faker.helpers.arrayElements(
      ["de", "en", "fr", "th", "ru", "uk", "ro"],
      2
    );
    book.rewards = faker.helpers.arrayElements(
      [
        "Spiegel Bestseller 2022",
        "Deutscher Buchpreis 2022",
        "Ingeborg-Bachmann-Preis 2022",
      ],
      1
    );

    book.metadata = [
      {
        bookType: faker.book.format(),
        price: faker.number.float({ min: 5, max: 50, fractionDigits: 2 }),
      },
    ];

    // 1.Möglichkeit
    await Book.create(book);
  }

  // 2.Möglichkeit
  //   const newBook = new Book(book);
  //   newBook.save();
}

main().then(() => process.exit(0));
