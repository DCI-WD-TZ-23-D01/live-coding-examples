// Diese Middleware empfängt 4 Argumente, macht das die Funktion zu einer Error Middleware
export function errorMiddleware(err, req, res, next) {
  res.status(500).json({ message: err.message });
}
