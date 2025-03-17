const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.verifyAuth = (req, res, next) => {
  const tokenAuth = req.headers["authorization"];
  if (!tokenAuth)
    return res.status(401).send({
      auth: false,
      message: "Usuário não autenticado.",
    });
  const token = tokenAuth.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECURE, (err, decode) => {
    if (err)
      return res.status(500).send({
        auth: false,
        message: "Token inválido.",
      });
    req.userData = decode;
    next();
  });
};
