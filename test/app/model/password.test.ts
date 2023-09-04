import Password from '../../../app/model/password'
import Salt from '../../../app/model/salt'

test('hashedPassword', () => {
  const salt = new Salt('3e87e8351f5a9713')

  const password = Password.hashedPassword('password', salt)
  expect(password.value()).toBe('8b070c4c15ef0fb4c00f33d94c3afcd48e00d19740bb0050680a094dd10fb886')
})
