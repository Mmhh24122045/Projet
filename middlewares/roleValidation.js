const roleValidation = (role) => (req, res, next) => {
  console.log(req.user);
  !role.includes(req.user.userRole)
    ? res.status(401).json("Forbidden")
    : next();
};

module.exports = roleValidation;
