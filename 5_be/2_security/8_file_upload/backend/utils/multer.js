import multer from "multer";
import { v4 as uuidv4 } from "uuid";

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads/"); // Definiere den Zielordner
  },
  filename: function (req, file, callback) {
    // Beispiel: profile.jpg => ["profile", "jpg"] => "jpg"
    const suffix = file.originalname.split(".").at(-1);
    const filename = uuidv4();
    // callback ist analog zur next Funktion einer middleware ansehen
    callback(null, `${filename}.${suffix}`);
  },
});

// Erstelle das Upload, abhängig vom Storage
export const upload = multer({ storage });
