import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  console.log({
    headers: req.headers,
    cookies: req.cookies,
  });
  return res.sendStatus(200);
});

// Ohne cookie-parser
app.get("/cookie", (req, res) => {
  // Wichtig ist: das Antwort Objekt muss das Cookie setzen
  res.header(
    "set-cookie",
    "sessionId=123456; Expires=31 Oct 2025; Secure; HttpOnly"
  );
  res.status(200).send("Cookie set");
});

// Mit cookie-parser
app.get("/easycookie", (req, res) => {
  res.cookie("dci-session-ID", "asdfghjkl", {
    expires: new Date(Date.now() + 1000 * 60 * 60),
    secure: true,
    httpOnly: true,
  });
  res.status(200).send("Cookie set with cookie-parser");
});

// Mit cookie-parser einen eher unsicheren Cookie
app.get("/lamecookie", (req, res) => {
  res.cookie("dci-lame-session-Id", "lame", {
    expires: new Date(Date.now() + 1000 * 60),
  });
  res.status(200).send("Cookie set with cookie-parser but lame");
});

app.listen(process.env.PORT, () =>
  console.log(`Server started on http://localhost:${process.env.PORT}`)
);
