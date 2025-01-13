import crypto from "crypto";

// const key = "password"; // string muss bearbeitet werden zu einem Hash
const key = crypto
  .createHash("sha256")
  .update("password")
  .digest("hex")
  .slice(0, 16); // Länge des Passworts muss immer 16 Bytes lang sein

// Die IV muss für die Verschlüsselung gleich sein
const iv = Buffer.from("FCAzFfpcQuiwqBsOobzh/w==", "base64");

const aes256 = crypto.createDecipheriv("aes-128-cbc", key, iv);

const secret =
  "tSPd1eIqwlHS6tEq3qRR9HWGA89aP7AkMhlegL22IfgCESk1Ya0zrLSzAkS5ChIaDmSpr2+cFHVZTHHpiJ4t0r5oH3xMwBrorpmQfxduTLA=";

let decrypted = aes256.update(secret, "base64", "utf8");
decrypted += aes256.final("utf8");
console.log(decrypted);
console.log("iv", iv);
