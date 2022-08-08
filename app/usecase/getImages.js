const imageRepository = require('../repository/image_repository')()

module.exports = () => {
  return imageRepository.list()
}
