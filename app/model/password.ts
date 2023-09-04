import crypto from 'crypto'

export default class Password {
  hashedPassword: string

  constructor(hashedPassword: string) {
    this.hashedPassword = hashedPassword
  }

  value() {
    return this.hashedPassword
  }

  static hashedPassword(plainPassword: string): Password {
    const hashedPassword = crypto.createHash('sha256').update(plainPassword).digest('hex')
    return new Password(hashedPassword)
  }  
}
