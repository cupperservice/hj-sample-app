const fileRepository = require('../repository/file_repository')()

module.exports = function(req, res) {
  const fileName = req.query.name

  fileRepository.download(fileName)
    .then(data => {
      res.attachment(fileName)
      data.Body.pipe(res)
    })
}
