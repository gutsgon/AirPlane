const ResponseModel = require("../models/ResponseModel");

module.exports.verifyPermission = (permission) => {
  return (req, res, next) => {
    const userData = req.userData;
    if (permission !== userData.user_type) {
      return res
        .status(403)
        .send(ResponseModel(403, null, "Você não tem permissão."));
    }
    next();
  };
};
