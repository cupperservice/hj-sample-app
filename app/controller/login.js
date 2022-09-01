const config = require('config')
const loginUseCase = require('../usecase/login')
const logger = require('../service/logger')(config.logger.file)

module.exports = function login(req, res) {
  return loginUseCase({
    user_id: req.body.user_id,
    password: req.body.password
  })
  .then(user => {
    req.session.user = user
    res.redirect('/')
  })
  .catch(err => {
    logger.error(err)
    res.render('login.ejs', {
      message: 'ユーザーIDまたはパスワードに誤りがあります。'
    })
  })
}
