import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

/**
 *
 * @param {object} payload
 */
export function createToken(payload) {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
}

/**
 *
 * @param {string} token
 */
export function verifyToken(token) {
  // verify überprüft, ob der Token die richtige Signatur hat und noch nicht abgelaufen ist
  const payload = jwt.verify(token, process.env.JWT_SECRET);
  return payload;
}
