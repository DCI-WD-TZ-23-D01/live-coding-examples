import { Router } from "express";
import { Store } from "../models/Store.js";

export const storesRouter = Router();

storesRouter.post("/", async (req, res, next) => {
  try {
    const name = req.body.name;
    const category = req.body.category;
    if (!name || !category) {
      return res.sendStatus(400);
    }
    await Store.create({ name, category });
    return res.sendStatus(201);
  } catch (e) {
    next(e);
  }
});
