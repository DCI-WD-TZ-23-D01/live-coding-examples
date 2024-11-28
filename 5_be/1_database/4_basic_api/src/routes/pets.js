import { Router } from "express";
import { Pet } from "../models/Pet.js";

export const petsRouter = Router();

petsRouter.get("/", async (req, res, next) => {
  try {
    const pets = await Pet.find();
    return res.json(pets);
  } catch (e) {
    next(e);
  }
});

petsRouter.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const pet = await Pet.findById(id);
    if (!pet) {
      return res.sendStatus(404);
    } else {
      return res.json(pet);
    }
  } catch (e) {
    next(e);
  }
});

petsRouter.post("/", async (req, res, next) => {
  try {
    // wenn das body falsch ist, dann wirft mongoose für mich einen Fehler
    const pet = await Pet.create(req.body);
    // pet ist ein Dokument aus der Datenbank

    return res.status(201).json(pet); // Hat das pet eine _id
  } catch (e) {
    next(e);
  }
});

petsRouter.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    await Pet.findByIdAndDelete(id);
    // await Pet.deleteOne({ _id: id });
    return res.sendStatus(204);
  } catch (e) {
    next(e);
  }
});
