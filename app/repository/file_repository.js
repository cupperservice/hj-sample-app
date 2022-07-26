const { S3, PutObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3')
const fs = require('fs')
const config = require('config')

module.exports = () => {
  const client = new S3()

  return {
    download: (fileName) => {
      return client.send(new GetObjectCommand({
        Bucket: config.s3.bucket_name,
        Key: fileName
      }))
    },
    upload: (image) => {
      const fileStream = fs.createReadStream(image.uploadFilePath())
      return client.send(new PutObjectCommand({
        Bucket: config.s3.bucket_name,
        Key: image.name,
        Body: fileStream
      }))
    }
  }
}
