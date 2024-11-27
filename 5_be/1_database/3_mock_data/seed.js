import { SpeciesDiscovery } from "./models/SpeciesDiscovery.js";
import { connect } from "./connect.js";
import { faker } from "@faker-js/faker";
/**
 * Ähnlich wie die write.js Aufgabe von gestern
 *
 */

async function main() {
  // 1.Verbindung mit der Datenbank
  await connect();

  // 2. Erstellen der Mockdaten
  for (let i = 0; i < 100; i++) {
    const kind = faker.animal.type(); // Zufällige Spezie
    const discoveredAt = faker.date.past(); // Vergangenheit
    await SpeciesDiscovery.create({
      kind, // kind: kind,
      discoveredAt,
    });
  }
  console.log("Successful!");
}

main()
  .then(() => process.exit(0))
  .catch(console.error);
