import express from "express";
import dotenv from "dotenv";
import { Recipe } from "./models/Recipe.js";
import { connect } from "./utils/connect.js";

dotenv.config();

const app = express();

app.get("/recipes", async (req, res, next) => {
  try {
    // Nutzung des dish Parameter, selbst definiert
    let dishFilter = req.query.dish ?? "";

    // Minimumwert von 0 wird sichergestellt
    const page = Math.max(parseInt(req.query.page ?? "0"), 0);

    // Minimumwert von 10 wird sichergestellt
    const size = Math.max(parseInt(req.query.size ?? "10"), 10);

    let query = {}; // query Objekt, da mehrere Möglichkeiten entstehen

    // wenn mehrere Stichwörter vorhanden sind, dann trennen wir das auf
    if (dishFilter.includes(",")) {
      dishFilter = req.query.dish.split(",");
      // erstelle ein $or Array, um nach mehreren Stichwörtern zu filtern
      query = {
        $or: dishFilter.map((dish) => ({
          name: { $regex: dish, $options: "i" },
        })),
      };
    } else {
      // Filter nach einem Stichwort
      query = { name: { $regex: dishFilter, $options: "i" } };
    }
    const dishes = await Recipe.find(query)
      .limit(size) // das Resultat wird limitiert
      .skip(page * size); // Es werden page*size Dokumente übersprungen
    res.json(dishes);
  } catch (e) {
    next(e);
  }
});

app.use((err, req, res, next) => {
  console.error(err);
  return res.sendStatus(500);
});

const PORT = process.env.PORT || 5000;

connect().then(() => {
  app.listen(PORT, () => console.log(`Listen at http://localhost:${PORT}`));
});
