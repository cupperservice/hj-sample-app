const { S3, PutObjectCommand, GetObjectCommand, ListObjectsCommand } = require('@aws-sdk/client-s3')
const fs = require('fs')

module.exports = () => {
  const client = new S3({ endpoint: process.env.AWS_ENDPOINT ? `http://${process.env.AWS_ENDPOINT}` : undefined })

  return {
    download: (bucket, fileName) => {
      return client.send(new GetObjectCommand({
        Bucket: bucket,
        Key: fileName
      }))
    },
    upload: (bucket, stream) => {
      return client.send(new PutObjectCommand({
        Bucket: bucket,
        Key: image.name,
        Body: stream
      }))
    }
  }
}
