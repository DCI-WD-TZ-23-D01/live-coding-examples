// Wrapper
export function checkRole(targetRole) {
  // Innere Funktion ist unsere Middleware
  return function (req, res, next) {
    if (req.user.role !== targetRole) {
      return res.status(403).json({ error: "Invalid permission" });
    }
    next();
  };
}
