import User from '../../../app/model/user'
import Password from '../../../app/model/password'
import Salt from '../../../app/model/salt'

test('verify password', () => {
  const salt = Salt.generate()
  const password = Password.hashedPassword('password', salt)

  const user = new User('user_id', password, salt, 'name')
  expect(user.verify_password('password')).toBe(true)
})
