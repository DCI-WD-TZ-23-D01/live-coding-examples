import { User } from "../models/User.js";
import { verifyToken } from "../utils/jwt.js";

/**
 *  Middleware Function to authenticate a user
 *
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
export async function authUser(req, res, next) {
  const token = req.headers["authorization"];
  console.log("Authorizing user");
  try {
    const payload = verifyToken(token);
    // payload ist der user
    const id = payload._id;
    const user = await User.findById(id);
    if (!user) {
      return res.sendStatus(401);
    }
    // Wir modifizieren das Anfrage-Objekt
    req.user = user; // WICHTIG!!!
    next();
  } catch (e) {
    console.error(e);
    return res.sendStatus(401);
  }
}
