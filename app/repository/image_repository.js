const { S3, PutObjectCommand, GetObjectCommand, ListObjectsCommand } = require('@aws-sdk/client-s3')
const fs = require('fs')
const s3 = require('../service/s3_service')
const config = require('config').s3

module.exports = () => {
  const client = new S3()
  const originalBucket = config.original.bucket_name
  const thumbnailBucket = config.thumbnail.bucket_name

  return {
    list: () => {
      return client.send(new ListObjectsCommand({ Bucket: thumbnailBucket }))
      .then(data => {
        const contents = []
        if (data.Contents) {
          data.Contents.forEach(o => {
            contents.push({
              name: o.Key,
              size: o.Size,
              thumbnailUrl: () => {
                return `https://${thumbnailBucket}.s3.amazonaws.com/${o.Key}`
              },
              originalUrl: () => {
                return `https://${originalBucket}.s3.amazonaws.com/${o.Key}`
              }
            })
          })
        }
        return contents
      })    
    },
    download: (fileName) => {
      return client.send(new GetObjectCommand({
        Bucket: originalBucket,
        Key: fileName
      }))
    },
    uploadOriginal: (image) => {
      return client.send(new PutObjectCommand({
        Bucket: originalBucket,
        Key: image.name,
        Body: image.imageFileStream()
      }))
    },
    uploadThumbnail: async (image) => {
      const stream = await image.thumbnailFileStream()
      await client.send(new PutObjectCommand({
        Bucket: thumbnailBucket,
        Key: image.name,
        Body: stream
      }))
    }
  }
}
