class LoginRequest {
  constructor({ login_email, password }) {
    (this.login_email = login_email), (this.password = password);
  }
}

module.exports = LoginRequest;
