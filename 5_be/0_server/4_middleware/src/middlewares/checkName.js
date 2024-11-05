export function checkName(request, response, next) {
  if (request.body.name === "Sono") {
    return response.send("Early exit");
  }
  next();
}
