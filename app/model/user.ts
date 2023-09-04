import Password from './password'
import Salt from './salt'

export default class User {
  login_id: string
  hashed_password: Password
  salt: Salt
  name: string

  constructor(user_id: string, hashed_password: Password, salt: Salt, name: string) {
    this.login_id = user_id
    this.hashed_password = hashed_password
    this.salt = salt
    this.name = name
  }

  verify_password(password: string): boolean {
    return this.hashed_password.value() === Password.hashedPassword(password, this.salt).value()
  }
}
