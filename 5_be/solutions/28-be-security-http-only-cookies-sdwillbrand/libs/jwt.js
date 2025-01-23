import jsonwebtoken from "jsonwebtoken";

const { JWT_SECRET } = process.env;

export function issueJwt(user) {
  const payload = {
    id: user._id,
  };

  return jsonwebtoken.sign(payload, JWT_SECRET, {
    expiresIn: "1h",
  });
}

export function verifyJwt(token) {
  if (!token) return;

  return jsonwebtoken.verify(token, JWT_SECRET);
}
