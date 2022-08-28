const config = require('config')
const mime = require('mime')
const fs = require('fs')
const thumbnail = require('image-thumbnail');
const options = {
  width: 100,
  height: 100,
}

module.exports = class UploadImage {
  constructor(image) {
    this.image = image
    this.name = image.name
    this.size = image.size
    this.comment = image.comment
  }

  imageFileStream() {
    return fs.createReadStream(this.uploadFilePath())
  }

  thumbnailFileStream() {
    return thumbnail(this.uploadFilePath(), options)
  }

  uploadFilePath() {
    return `${__dirname}/../../${config.image.upload.dir}/${this.image.name}`
  }
}
