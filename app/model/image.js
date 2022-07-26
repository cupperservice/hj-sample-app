const config = require('config')
const mime = require('mime')

module.exports = class Image {
  constructor(name, mimeType) {
    this.name = name
    this.mimeType = mimeType
  }

  uploadFilePath() {
    return `${__dirname}/../../${config.image.upload.dir}/${this.name}`
  }

  thumbnailFilePath() {
    return `${__dirname}/../../${config.image.thumbnail.dir}/${this.name}.${this.ext()}`
  }

  ext() {
    return mime.getExtension(this.mimeType)
  }
}
