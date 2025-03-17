const ResponseModel = require("../models/ResponseModel");
const AuthService = require("../services/AuthService");

class AuthController {
  async postLogin(req, res) {
    try {
      const service = await AuthService.postLogin(req, res);
      if (service === null) {
        return res
          .status(401)
          .send(ResponseModel(401, "", "Credenciais inválidas!"));
      }
      return res
        .status(200)
        .send(ResponseModel(200, service, "Autenticado com sucesso!"));
    } catch (error) {
      return res.status(404).send(ResponseModel(404, null, "Erro ao logar!"));
    }
  }
}

module.exports = new AuthController();
