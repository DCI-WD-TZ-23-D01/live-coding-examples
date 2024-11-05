export function lowercase(request, response, next) {
  request.body.name = request.body.name.toLowerCase();
  next();
}
