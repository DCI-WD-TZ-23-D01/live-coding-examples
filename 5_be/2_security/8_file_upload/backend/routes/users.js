import { Router } from "express";
import { User } from "../models/User.js";
import dotenv from "dotenv";
import { createToken, verifyToken } from "../utils/jwt.js";
import bcrypt from "bcryptjs";
import { upload } from "../utils/multer.js";

dotenv.config();

export const usersRouter = Router();

// Einen neuen User zu registrieren
usersRouter.post("/register", async (req, res, next) => {
  try {
    // Extrahieren wir die gewünschten Daten aus dem Body
    const email = req.body.email;
    const password = req.body.password;

    // Erstellen einen neuen User
    const user = await User.create({ email, password });
    res.status(200).json({ user });
  } catch (e) {
    next(e);
  }
});

usersRouter.post("/login", async (req, res, next) => {
  try {
    // Extrahieren die Daten aus dem Body
    const email = req.body.email;
    const password = req.body.password;

    // 1. Suchen nach einem User
    console.log("User wird gesucht");
    const user = await User.findOne({ email }); // user ist ein Dokument

    // Finden wir keinen User, dann brechen wir die Anfrage ab
    if (!user) {
      return res.sendStatus(404);
    }
    // 2. Wenn der User gefunden wurde, überprüfe ob die Passwörter gleich sind
    console.log("Passwörter werden verglichen");
    if (bcrypt.compareSync(password, user.password)) {
      // 3. Erstelle ein JWT und an den User schicken
      console.log(user.toJSON());
      // Dokument zu einem JSON umwandeln
      // dabei wird das password-Attribut gelöscht, aus Sicherheitsgründen
      const token = createToken(user.toJSON());
      console.log("Token wurde erstellt", token);
      return res.json({ user, token }); // wichtig für frontend: user-Objekt muss mitgeschickt werden!!
    } else {
      return res.sendStatus(401);
    }
  } catch (e) {
    next(e);
  }
});

usersRouter.post(
  "/:id/upload",
  // multer sucht nach dem hochgeladenen Bild
  // und fügt die metadaten des Bildes in das req Objekt ein
  upload.single("profilePicture"),
  async (req, res, next) => {
    const id = req.params.id; // userId
    console.log(req.file);
    await User.findByIdAndUpdate(id, {
      profilePicture: req.file.filename, // von multer bearbeitet
    });
    return res.sendStatus(200);
  }
);

// Die Route schickt die Bild-Datei zurück
usersRouter.get("/:id/profile", async (req, res) => {
  const id = req.params.id; // userId
  const user = await User.findById(id);
  console.log(user);
  const filename = user.profilePicture;
  if (!filename) {
    return res.sendStatus(404);
  }

  // Konstruiere den Pfad zur Datei
  const path = "/uploads/" + filename;

  const absolutePath = process.cwd() + path;

  // Schicke die Datei per Pfad
  return res.sendFile(absolutePath);
});
