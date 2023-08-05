import { S3, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3'
import { Readable } from 'stream'
import logger from './logger'

class Blob {
  private client: S3

  constructor() {
    const useLocalStack = process.env.AWS_ENDPOINT ? true : false
    this.client = new S3({
      endpoint: process.env.AWS_ENDPOINT ? process.env.AWS_ENDPOINT : undefined,
      forcePathStyle: useLocalStack
    })
  }

  async upload(bucket: string, key: string, file: Readable) {
    logger.info(`uploading ${bucket}/${key}`)

    return this.client.send(new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: file,
    }))
  }

  async download(bucket: string, key: string) {
    const response = await this.client.send(new GetObjectCommand({
      Bucket: bucket,
      Key: key,
    }))

    return response.Body!! as Readable
  }
}

export default new Blob()
