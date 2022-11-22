const s3 = require('../service/s3_service')()
const config = require('config').s3
const thumbnail = require('../service/thumbnail')

module.exports = () => {
  const originalBucket = config.original.bucket_name
  const thumbnailBucket = config.thumbnail.bucket_name

  return {
    download: (fileName) => {
      return s3.download(originalBucket, fileName)
    },
    uploadOriginal: (image) => {
      return s3.upload(originalBucket, image.name, image.imageFileStream())
    },
    uploadThumbnail: async (image) => {
      return thumbnail(image)
    }
  }
}
