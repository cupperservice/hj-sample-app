const fileRepository = require('../repository/file_repository')()

module.exports = (fileName) => {
    return fileRepository.download(fileName)
}
