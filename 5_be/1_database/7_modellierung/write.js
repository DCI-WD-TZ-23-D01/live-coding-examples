import { connect } from "./connect.js";
import { Organizer } from "./models/Organizer.js";
import { Event } from "./models/Event.js";
import { faker } from "@faker-js/faker";

async function main() {
  await connect(); // Verbinden mit der Datenbank

  faker.seed(123);

  await Organizer.deleteMany(); // Reset der Veranstalter

  const organizer = new Organizer({
    name: faker.company.name(), // Zufälliger Name wird generiert
    email: faker.internet.email(), // Zufällige Email wird generiert
  });

  await Event.deleteMany(); // Reset der Events

  const events = [];
  for (let i = 0; i < 3; i++) {
    const title = faker.food.dish();
    // Es wird ein neues Event erstellt, doch es wird NICHT automatisch mit dem Veranstalter verknüpft
    const event = await Event.create({ title, organizerId: organizer._id });
    events.push(event);
  }
  organizer.events = events; // Updaten den Organizer mit weiteren Events
  await organizer.save(); // Speichern den Organizer
}

main().then(() => process.exit(0));
