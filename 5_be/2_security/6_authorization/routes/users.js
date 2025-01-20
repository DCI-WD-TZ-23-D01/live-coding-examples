import { Router } from "express";
import { User } from "../models/User.js";
import dotenv from "dotenv";
import { createToken, verifyToken } from "../utils/jwt.js";
import bcrypt from "bcryptjs";
import { authUser } from "../middlewares/authUser.js";
import { checkRole } from "../middlewares/checkRole.js";
import { checkPermission } from "../middlewares/checkPermission.js";

dotenv.config();

export const usersRouter = Router();

// Alle User zurückzuschicken
usersRouter.get("/", authUser, checkRole("ADMIN"), async (req, res, next) => {
  // Dieser Endpunkt wurde mit authUser erweitert => das req Objekt beinhaltet jetz ein user Attribut
  try {
    // console.log(req) // Anfrage Objekt begutachten
    const users = await User.find();
    return res.json(users);
  } catch (e) {
    next(e);
  }
});

usersRouter.put(
  "/role/:id",
  authUser,
  checkPermission("PROMOTE_ROLE"),
  async (req, res, next) => {
    const role = req.body.role;
    const userId = req.params.id;
    await User.findByIdAndUpdate(userId, { $addToSet: { roles: role } });
    return res.sendStatus(204);
  }
);

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
      return res.json({ token });
    } else {
      return res.sendStatus(401);
    }
  } catch (e) {
    next(e);
  }
});

// Einen registrierten User zu verifizieren
usersRouter.get("/verify/:token", async (req, res, next) => {
  // Extrahiern den Token aus der URL
  const token = req.params.token;
  try {
    const payload = verifyToken(token);
    // Wenn es keine Verifikation, dann melden wir einen Fehler
    if (!payload) {
      return res.status(400).json({ message: "Invalid token" });
    }

    console.log(payload);
    // await User.findByIdAndUpdate(verification.userId, {
    //   verified: new Date(),
    // });
    return res.json({ message: "Successful" });
  } catch (e) {
    next(e);
  }
});
