const fileRepository = require('../repository/file_repository')()
const thumbnailRepository = require('../repository/thumbnail_repository')()
const imageRepository = require('../repository/image_repository')()
const Image = require('../model/image')

module.exports = async function upload(file) {
  const image = new Image(file.filename, file.mimetype)

  const data = await fileRepository.upload(image)
  await thumbnailRepository.makeThumbnail(image)
  await imageRepository.save(image)
}
