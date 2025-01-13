import bcrypt from "bcryptjs";

const source = "bahnhof";
const target = bcrypt.hashSync(source);

console.log("source", source);
console.log("target", target);
