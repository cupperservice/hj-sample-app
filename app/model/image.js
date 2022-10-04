const mime = require('mime')

module.exports = class Image {
  constructor({name, size, comment, mimeType}) {
    this.name = name
    this.size = size
    this.comment = comment
    this.mimeType = mimeType
  }

  ext() {
    return mime.getExtension(this.mimeType)
  }
}
