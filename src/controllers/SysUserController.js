const ResponseModel = require("../models/ResponseModel");
const SysUserService = require("../services/SysUserService");

class SysUserController {
  async getSysUser(req, res) {
    try {
      const result = await SysUserService.getSysUser();
      const response = ResponseModel(
        200,
        result,
        "Usuário obtido com sucesso."
      );
      res.status(200).send(response);
    } catch (error) {
      const response = ResponseModel(404, null, "Erro ao obter o usuário.");
      res.status(404).send(response);
    }
  }

  async postSysUser(req, res) {
    try {
      const { name, login_email, password, user_type } = req.body;
      const result = await SysUserService.postSysUser(
        name,
        login_email,
        password,
        user_type
      );
      const response = ResponseModel(
        201,
        result,
        "Usuário adicionado com sucesso."
      );
      res.status(201).send(response);
    } catch (error) {
      const response = ResponseModel(404, null, "Erro ao obter o usuário.");
      res.status(404).send(response);
    }
  }

  async putSysUser(req, res) {
    try {
      const { id } = req.params;
      const { name, login_email, password, user_type } = req.body;
      const result = await SysUserService.putSysUser(
        id,
        name,
        login_email,
        password,
        user_type
      );
      const response = ResponseModel(
        200,
        result,
        "Usuário editado com sucesso."
      );
      res.status(200).send(response);
    } catch (error) {
      const response = ResponseModel(404, null, "Erro ao editar usuário.");
      res.status(404).send(response);
    }
  }

  async deleteSysUser(req, res) {
    try {
      const { id } = req.params;
      const result = await SysUserService.deleteSysUser(id);
      const response = ResponseModel(
        200,
        result,
        "Usuário deletado com sucesso."
      );
      res.status(200).send(response);
    } catch (error) {
      res.status(404, null, "Erro ao remover o usuário.");
    }
  }
}

module.exports = new SysUserController();
