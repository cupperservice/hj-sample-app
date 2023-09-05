import crypto from 'crypto'
import Salt from './salt'

export default class Password {
  hashedPassword: string

  constructor(hashedPassword: string) {
    this.hashedPassword = hashedPassword
  }

  value() {
    return this.hashedPassword
  }

  static hashedPassword(plainPassword: string, salt: Salt): Password {
    const hashedPassword = crypto.createHash('sha256').update(`${plainPassword}/${salt.value()}`).digest('hex')
    return new Password(hashedPassword)
  }  
}
