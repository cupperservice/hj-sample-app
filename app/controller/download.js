const downloadUseCase = require('../usecase/download')

module.exports = function(req, res) {
  const fileName = req.query.name

  downloadUseCase(fileName)
    .then(data => {
      res.attachment(fileName)
      data.Body.pipe(res)
    })
}
