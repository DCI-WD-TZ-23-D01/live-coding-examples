export function checkRole(targetRole) {
  console.log("Checking for role:", targetRole);
  // das hier ist die Middleware, die später aufgerufen wird
  // "higher-order function": Eine Funktion, die eine Funktion zurückgibt
  // die innere Funktion ist die tatsächliche Middleware-Funktion,
  // die mit den Parameter der äußeren Funktion arbeiten kann

  return function (req, res, next) {
    // In der inneren Funktion haben auch Zugriff auf das User-Objekt
    console.log("Checking role...");
    if (!req.user.roles.includes(targetRole)) {
      return res.sendStatus(403);
    }
    next();
  };
}
