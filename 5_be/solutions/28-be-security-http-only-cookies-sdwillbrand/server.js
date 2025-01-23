import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";
import { connectToDB } from "./libs/db.js";
import userRoute from "./routes/userRoute.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import dotenv from "dotenv";

dotenv.config();
await connectToDB();

const port = 3001;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const clientUrl = `http://localhost:${port}`;

// Middleware stack
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// Middleware routes
app.use("/app/user", userRoute);

// !! Your middleware should not go below this line !!
// Serve frontend client/dist folder
app.use(express.static(path.join(__dirname, "client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/dist/index.html"));
});

app.listen(port, () => {
  console.log(`The server 🙈 is listening on port ${port}`);
  console.log(`Visit ${clientUrl} in your browser`);
  console.log(port);
});
