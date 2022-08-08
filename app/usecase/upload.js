const imageRepository = require('../repository/image_repository')()
const Image = require('../model/image')

module.exports = async function upload(file) {
  const image = new Image(file.filename, file.mimetype)

  await imageRepository.uploadOriginal(image)
  await imageRepository.uploadThumbnail(image)
}
