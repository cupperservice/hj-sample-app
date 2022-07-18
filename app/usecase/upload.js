const fileRepository = require('../repository/file_repository')()

module.exports = function upload(file) {
  return new Promise((resolve, reject) => {
    fileRepository.upload(file, data => {
      resolve(data)
    })
  })
}
