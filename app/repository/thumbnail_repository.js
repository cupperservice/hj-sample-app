const imageThumbnail = require('image-thumbnail');
const fs = require('fs')
const config = require('config')
const uploadDir = config.image.upload.dir
const thumbnailDir = config.image.thumbnail.dir
const options = {
  width: 100,
  height: 100,
}

module.exports = () => {
  return {
    makeThumbnail: async (image) => {
      imageThumbnail(image.uploadFilePath(), options)
        .then(thumbnail => {
          fs.writeFile(image.thumbnailFilePath(), thumbnail, err => {
            if (err) throw err
          })
        })
    }
  }
}
