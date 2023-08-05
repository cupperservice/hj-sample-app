import Image from './image'
import config from '../../config/config'

export default class DownloadImage extends Image {
  endpoint: string | undefined

  constructor(
    name: string,
    size: number,
    comment: string,
    mime_type: string
  ) {
    super(name, size, comment, mime_type)
    this.endpoint = process.env.AWS_ENDPOINT
  }

  thumbnailUrl() {
    if (this.endpoint) {
        return `${this.endpoint}/${config.s3.thumbnail.bucket}/${this.name}`
    } else {
        return `https://${config.s3.thumbnail.bucket}.s3.amazonaws.com/${this.name}`
    }
  }

  originalUrl() {
    if (this.endpoint) {
        return `${this.endpoint}/${config.s3.original.bucket}/${this.name}`
    } else {
        return `https://${config.s3.original.bucket}.s3.amazonaws.com/${this.name}`
    }
  }
}
