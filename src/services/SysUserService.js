const sequelize = require("../database/database");
const SysUserResponse = require("../DTO/Response/SysUserResponse");

class SysUserService {
  async getSysUser() {
    const [results] = await sequelize.query("SELECT * FROM sys_user");
    const response = results.map(SysUserResponse.fromModel);
    return response;
  }

  async postSysUser(name, login_email, password, user_type) {
    const query = `
            INSERT INTO 
            sys_user(name, login_email, password, user_type) 
            VALUES (:name, :login_email, :password, :user_type) 
            RETURNING *
        `;
    const [results] = await sequelize.query(query, {
      replacements: { name, login_email, password, user_type },
    });
    return results;
  }

  async putSysUser(id, name, login_email, password, user_type) {
    const query = `
            UPDATE sys_user 
            SET name = :name, 
            login_email = :login_email, 
            password = :password, 
            user_type = :user_type 
            WHERE id = :id RETURNING *
      `;
    const [results] = await sequelize.query(query, {
      replacements: { id, name, login_email, password, user_type },
    });

    if (results.length === 0) {
      throw Error("Usuário de sistema não encontrado!");
    }
    return results;
  }

  async deleteSysUser(id) {
    const query = "DELETE FROM sys_user WHERE id = :id RETURNING *";
    const [results] = await sequelize.query(query, { replacements: { id } });
    if (results.length === 0) {
      throw Error("Usuário de sistema não encontrado!");
    }
    return results;
  }
}

module.exports = new SysUserService();
