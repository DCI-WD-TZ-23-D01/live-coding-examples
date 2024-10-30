// 1. Schreibe in eine Datei hello.txt "Hello World" rein
import fs from "fs";
fs.writeFileSync("./hello.txt", "Hallo World", "utf-8");
