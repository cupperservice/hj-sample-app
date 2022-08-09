const getImagesUseCase = require('../usecase/get_images')

module.exports = function top(req, res) {
  return getImagesUseCase().then(contents => {
    const user = req.session.user
    const message = req.query.message
    res.render('top.ejs', {
      name: user.name,
      contents: contents,
      message: message
    })
  })
}
