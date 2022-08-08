const loginUseCase = require('../usecase/login')

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
    console.log(err)
    res.render('login.ejs', {
      message: 'ユーザーIDまたはパスワードに誤りがあります。'
    })
  })
}
