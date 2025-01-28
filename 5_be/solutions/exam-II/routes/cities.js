import { Router } from "express";
import { City } from "../models/City.js";
import { Store } from "../models/Store.js";

export const citiesRouter = Router();

citiesRouter.post("/", async (req, res, next) => {
  try {
    const name = req.body.name;
    const population = req.body.population;
    if (!name || !population) {
      return res.sendStatus(400);
    }
    await City.create({ name, population });
    return res.sendStatus(201);
  } catch (e) {
    next(e);
  }
});

citiesRouter.post("/:cityId/stores/:storeId", async (req, res, next) => {
  try {
    const cityId = req.params.cityId;
    const storeId = req.params.storeId;

    const city = await City.findById(cityId);
    if (!city) {
      return res.sendStatus(404);
    }

    const store = await Store.findById(storeId);
    if (!store) {
      return res.sendStatus(404);
    }

    city.stores.push(store._id);
    store.cities.push(city._id);

    await city.save();
    await store.save();

    return res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

citiesRouter.get("/:cityId/stores", async (req, res, next) => {
  try {
    const cityId = req.params.cityId;
    const city = await City.findById(cityId).populate("stores");
    if (!city) {
      return res.sendStatus(404);
    }
    return res.json(city.stores);
  } catch (e) {
    next(e);
  }
});
