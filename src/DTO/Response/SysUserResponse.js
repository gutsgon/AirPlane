class SysUserResponse {
    constructor({ id, name, login_email, password, user_type }) {
      this.id = id;
      this.name = name; 
      this.login_email = login_email;
      this.password = password;
      this.user_type = user_type;
    }
  
    static fromModel(obj) {
      return {
        name: obj.name,
        login_email: obj.login_email,
        password: obj.password,
        user_type: obj.user_type,
      };
    }
  }
  
  module.exports = SysUserResponse;
  