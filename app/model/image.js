const config = require('config')
const mime = require('mime')
const fs = require('fs')
const thumbnail = require('image-thumbnail');
const options = {
  width: 100,
  height: 100,
}

module.exports = class Image {
  constructor(name, mimeType) {
    this.name = name
    this.mimeType = mimeType
  }

  imageFileStream() {
    return fs.createReadStream(this.uploadFilePath())
  }

  thumbnailFileStream() {
    return thumbnail(this.uploadFilePath(), options)
  }

  uploadFilePath() {
    return `${__dirname}/../../${config.image.upload.dir}/${this.name}`
  }

  ext() {
    return mime.getExtension(this.mimeType)
  }
}
