import fs from 'fs'
import sharp from 'sharp'
import Image from './image'
import logger from '../service/logger'
import config from '../../config/config'

export default class UploadImage extends Image {
  file: Express.Multer.File

  constructor(file: Express.Multer.File, comment: string) {
    super(
      file.filename,
      file.size,
      comment,
      file.mimetype
    )
    this.file = file
  }

  imageFileStream() {
    return fs.createReadStream(this.uploadFilePath())
  }

  async thumbnail() {
    logger.info(`uploaded file=${this.file.filename}`)
    return sharp(this.uploadFilePath()).resize(100, 100)
  }

  uploadFilePath() {
    return `${__dirname}/../../${config.image.upload.dir}/${this.file.filename}`
  }
}
