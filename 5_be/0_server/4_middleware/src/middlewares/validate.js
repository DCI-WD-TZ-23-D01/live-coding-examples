export function validate(request, response, next) {
  const username = request.body.username;
  const password = request.body.password;
  const symbols = ["#", "!", "+", "?", "-"];
  if (
    username &&
    password &&
    password.length > 8 &&
    symbols.some((symbol) => password.includes(symbol))
  ) {
    next();
  } else {
    return response
      .status(400)
      .send("username und passwort ist nicht vorhanden");
  }
}
