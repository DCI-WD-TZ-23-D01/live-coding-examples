import { Router } from "express";
import { User } from "../models/User.js";
import { UserVerification } from "../models/UserVerification.js";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

export const usersRouter = Router();

// Wir verwenden resend, damit es für uns Emails verschickt
const resend = new Resend(process.env.RESEND_API_KEY);

// Alle User zurückzuschicken
usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (e) {
    next(e);
  }
});

// Einen neuen User zu registrieren
usersRouter.post("/register", async (req, res, next) => {
  try {
    // Extrahieren wir die gewünschten Daten aus dem Body
    const email = req.body.email;
    const password = req.body.password;

    // Erstellen einen neuen User
    // ...doch der neue User ist noch nicht verifiziert
    const user = await User.create({ email, password });

    // Mit dem neuen User füge wir die verification hinzu
    const verification = await UserVerification.create({ userId: user._id });

    // 1. nodemailer
    // 2. resend
    // Die VerifizierungsId wird dem User geschickt,
    // damit kann er sein Konto verifizieren
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Email verifizieren",
      html: `
      <h1>Willkommen bei Foo</h1>
        <p>
            <a href="http://localhost:3000/users/verify/${verification._id}">
                Klicke hier, um dein Konto zu verifizieren
            </a>
        </p>
      `,
    });

    if (error) {
      return res.status(400).json({ error });
    }

    res.status(200).json({ data });
  } catch (e) {
    next(e);
  }
});

// Einen registrierten User zu verifizieren
usersRouter.get("/verify/:token", async (req, res, next) => {
  // Extrahiern den Token aus der URL
  const token = req.params.token;
  try {
    // Wir suchen nach der Verifikation in unserer Datenbank
    const verification = await UserVerification.findById(token);
    // Wenn es keine Verifikation, dann melden wir einen Fehler
    if (!verification) {
      return res.status(400).json({ message: "Invalid token" });
    }
    await User.findByIdAndUpdate(verification.userId, {
      verified: new Date(),
    });
    await verification.deleteOne();
    return res.json({ message: "Successful" });
  } catch (e) {
    next(e);
  }
});
