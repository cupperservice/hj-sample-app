const crypto = require('crypto')

module.exports = class Password {
  constructor(hashedPassword) {
    this.hashedPassword = hashedPassword
  }

  value() {
    return this.hashedPassword
  }

  static hashedPassword(plainPassword) {
    const hashedPassword = crypto.createHash('sha256').update(plainPassword).digest('hex')
    return new Password(hashedPassword)
  }  
}
