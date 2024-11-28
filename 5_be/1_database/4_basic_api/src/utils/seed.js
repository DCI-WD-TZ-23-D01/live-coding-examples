import { faker } from "@faker-js/faker";
import { connect } from "./connect.js";
import { Pet } from "../models/Pet.js";

async function main() {
  await connect();
  for (let i = 0; i < 20; i++) {
    const name = faker.person.firstName();
    const kind = faker.animal.type();
    const age = faker.number.int({ min: 1, max: 25 });
    await Pet.create({ name, kind, age });
  }
}

main().then(() => process.exit(0));
