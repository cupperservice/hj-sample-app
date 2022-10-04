const imageRepository = require('../repository/image_repository')()
const DownLoadImage = require('../model/download_image')

module.exports = () => {
  const images = []

  return imageRepository.allImages(image => {
    images.push(new DownLoadImage(image))
  }).then(() => {
    return images
  })
}
