import crypto from "crypto";

// const key = "password"; // string muss bearbeitet werden zu einem Hash
const key = crypto
  .createHash("sha256")
  .update("password")
  .digest("hex")
  .slice(0, 16);
// Entnehmen 16 Bytes für den key
const iv = crypto.randomBytes(16); // Initial vector, startpunkt für die Verschlüsselung

const aes256 = crypto.createCipheriv("aes-128-cbc", key, iv);

const secret =
  "Mein Schatz befindet unter der großen Eiche auf dem nördlichen Feld";

let encrypted = aes256.update(secret, "utf8", "base64");
encrypted += aes256.final("base64");
console.log("encrypted:", encrypted);
console.log("iv:", iv.toString("base64"));
