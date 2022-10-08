const config = require('config')

module.exports = class DownLoadImage {
    constructor(image) {
        this.image = image
        this.name = image.name
        this.comment = image.comment
        this.size = image.size
        this.endpoint = process.env.AWS_ENDPOINT
    }

    thumbnailUrl() {
        if (this.endpoint) {
            return `http://${config.s3.thumbnail.bucket_name}.${this.endpoint}/${this.image.name}`
        } else {
            return `https://${config.s3.thumbnail.bucket_name}.s3.amazonaws.com/${this.image.name}`
        }
    }

    originalUrl() {
        if (this.endpoint) {
            return `http://${config.s3.original.bucket_name}.${this.endpoint}/${this.image.name}`
        } else {
            return `https://${config.s3.original.bucket_name}.s3.amazonaws.com/${this.image.name}`
        }
    }
}
