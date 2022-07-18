const Password = require('./password')

module.exports = class User {
  constructor(login_id, hashedPassword, name) {
    this.login_id = login_id
    this.hashedPassword = hashedPassword
    this.name = name
  }

  verifyPassword(plainPassword) {
    return this.hashedPassword.value() === Password.hashedPassword(plainPassword).value()
  }
}
