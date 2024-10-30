import fs from "fs";

const randomNumber = Math.floor(Math.random() * 100) + 1;

fs.writeFileSync("./randomNumber.txt", randomNumber.toString(), "utf-8");
