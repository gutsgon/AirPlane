const { QueryTypes } = require("sequelize");
const sequelize = require("../database/database");
const LoginRequest = require("../DTO/Request/postLoginRequest");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class AuthService {
  async postLogin(req, res) {
    const loginDTO = new LoginRequest(req.body);
    const query = await sequelize.query(
      `
        select * from sys_user where login_email = :login_email
    `,
      {
        replacements: { login_email: loginDTO.login_email },
        type: QueryTypes.SELECT,
      }
    );
    const user = query[0];
    if (user.password === loginDTO.password) {
      const tokenObj = {
        name: user.name,
        login_email: user.login_email,
        user_type: user.user_type,
      };
      return jwt.sign(tokenObj, process.env.JWT_SECURE, { expiresIn: 300 });
    }
    return null;
  }
}

module.exports = new AuthService();
