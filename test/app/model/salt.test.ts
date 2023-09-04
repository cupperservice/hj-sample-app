import Salt from '../../../app/model/salt'

test('generate salt', () => {
  const salt = Salt.generate()
  expect(salt.value().length).toBe(16)
})
