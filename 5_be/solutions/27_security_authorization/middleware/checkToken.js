import User from "../models/User.js";
import jwt from "jsonwebtoken";

export async function checkToken(req, res, next) {
  const token = req.headers.authorization;
  const { JWT_SECRET } = process.env;

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = await User.findById(payload.uid);
    next();
  } catch (e) {
    res.status(401).send({ error: "Invalid token" });
  }
}
