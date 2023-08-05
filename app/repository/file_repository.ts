import UploadImage from '../model/upload_image';
import blob from '../service/blob'
import config from '../../config/config'

class FileRepository {
  originalBucket: string
  thumbnailBucket: string

  constructor() {
    this.originalBucket = config.s3.original.bucket
    this.thumbnailBucket = config.s3.thumbnail.bucket
  }

  async uploadOriginal(image: UploadImage) {
    return blob.upload(this.originalBucket, image.name, image.imageFileStream())
  }

  async uploadThumbnail(image: UploadImage) {
    const thumbnail = await image.thumbnail()
    return blob.upload(this.thumbnailBucket, image.name, thumbnail)
  }

  async downloadOriginal(key: string) {
    return blob.download(this.originalBucket, key)
  }
}

export default new FileRepository()
