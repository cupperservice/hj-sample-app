const imageRepository = require('../repository/image_repository')()

module.exports = function(req, res) {
  const fileName = req.query.name

  imageRepository.download(fileName)
    .then(data => {
      res.attachment(fileName)
      data.Body.pipe(res)
    })
}
