import Password from './password'

export default class User {
  login_id: string
  hashed_password: Password
  name: string

  constructor(user_id: string, hashed_password: Password, name: string) {
    this.login_id = user_id
    this.hashed_password = hashed_password
    this.name = name
  }

  verify_password(password: string): boolean {
    return this.hashed_password.value() === Password.hashedPassword(password).value()
  }
}
