const userRepository = require('../repository/user_repository')()

module.exports = (params) => {
  return new Promise((resolve, reject) => {
    userRepository.find(params.user_id, (user) => {
      if (user && user.verifyPassword(params.password)) {
        resolve(user)
      } else {
        reject('not found user')
      }
    })
  })
}
