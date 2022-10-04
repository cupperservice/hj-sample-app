const config = require('config')

module.exports = class DownLoadImage {
    constructor(image) {
        this.image = image
        this.name = image.name
        this.comment = image.comment
        this.size = image.size
    }

    thumbnailUrl() {
        return `https://${config.s3.thumbnail.bucket_name}.s3.amazonaws.com/${this.image.name}`
    }

    originalUrl() {
        return `https://${config.s3.original.bucket_name}.s3.amazonaws.com/${this.image.name}`
    }
}
