import { Recipe } from "../models/Recipe.js";
import { connect } from "../utils/connect.js";
import { fakerDE as faker } from "@faker-js/faker";

async function main() {
  await connect();
  faker.seed(123);
  await Recipe.deleteMany();
  const dishes = Array.from({ length: 1000 }).map(() => faker.food.dish());
  for (const dish of dishes) {
    const ingredients = Array.from({ length: 5 }).map(() =>
      faker.food.ingredient()
    );
    await Recipe.create({ name: dish, ingredients });
  }
}

main().then(() => process.exit(0));
