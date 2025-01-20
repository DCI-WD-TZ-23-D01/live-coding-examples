export function checkPermission(permission) {
  return function (req, res, next) {
    if (!req.user.permissions.includes(permission)) {
      return res.sendStatus(403);
    }
    next();
  };
}
