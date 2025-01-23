import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { issueJwt } from "../libs/jwt.js";

export const admin = async (req, res) => {
  res.send("You are authorized to view this content");
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.sendStatus(404);
  }
  if (!bcrypt.compareSync(password, user.password)) {
    return res.sendStatus(401);
  }
  const token = issueJwt(user);
  // Hier wird Set-Cookie ausgeführt und ein Cookie wird an den Browser weitergegeben
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    expires: new Date(Date.now() + 900000),
  });
  return res.sendStatus(200);
};

export const logout = async (req, res) => {
  res.clearCookie("jwt", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });
  res.end();
};

export const register = async (req, res) => {
  const { username, firstname, lastname, email, password } = req.body;
  const foundUser = await User.findOne({ username });
  if (foundUser || !firstname || !lastname || !email) {
    return res.sendStatus(400);
  }
  const hashedPassword = bcrypt.hashSync(password);
  await User.create({
    username,
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });
  return res.sendStatus(200);
};
