const imageRepository = require('../repository/image_repository')()
const fileRepository = require('../repository/file_repository')()
const Image = require('../model/image')
const UploadImage = require('../model/upload_image')

module.exports = async (file, comment) => {
  const image = new UploadImage(new Image({name: file.filename, size: file.size, comment: comment, mimeType: file.mimetype}))

  await imageRepository.save(image, async () => {
    await fileRepository.uploadOriginal(image)
    await fileRepository.uploadThumbnail(image)
  })
}
