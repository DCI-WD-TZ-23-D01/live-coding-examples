import crypto from "crypto";

// sha = secure hash algorithm
const sha256 = crypto.createHash("sha256");
const source = "bahnhof";

// 1. Daten müssen zum Hash hinzugefügt werden
sha256.update(source);

// 2. Können wir alle Daten hashen
const target = sha256.digest("hex");

console.log("source", source);
console.log("target", target);
