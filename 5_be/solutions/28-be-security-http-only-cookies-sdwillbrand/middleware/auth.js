import { verifyJwt } from "../libs/jwt.js";
import User from "../models/User.js";

export async function authorizeJwt(req, res, next) {
  try {
    // Hier wird der Cookie gesucht und geprüft
    const token = req.cookies.jwt;
    const payload = verifyJwt(token); // Wirfst einen Fehler
    if (!payload && !payload.id) {
      return res.sendStatus(401);
    }
    const user = await User.findById(payload.id);
    if (!user) {
      return res.sendStatus(401);
    }
    req.user = user;
    next();
  } catch (e) {
    console.error(e);
    return res.sendStatus(401);
  }
}
