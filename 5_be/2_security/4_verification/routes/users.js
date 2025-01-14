import { Router } from "express";
import { User } from "../models/User.js";
import { UserVerification } from "../models/UserVerification.js";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

export const usersRouter = Router();
const resend = new Resend(process.env.RESEND_API_KEY);

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (e) {
    next(e);
  }
});

usersRouter.post("/register", async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.create({ email, password }); // Falls das body falsch ist, dann wird ein Fehler geworfen
    const verification = await UserVerification.create({ userId: user._id }); // Mit dem erstellten Nutzer füge wir die verification hinzu

    // 1. nodemailer
    // 2. resend
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

usersRouter.get("/verify/:token", async (req, res, next) => {
  const token = req.params.token;
  try {
    const verification = await UserVerification.findById(token);
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
