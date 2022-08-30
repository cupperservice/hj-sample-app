const { S3, PutObjectCommand, GetObjectCommand, ListObjectsCommand } = require('@aws-sdk/client-s3')
const fs = require('fs')

module.exports = (bucket) => {
  const client = new S3()

  return {
    list: () => {
      return client.send(new ListObjectsCommand({ Bucket: bucket }))
      .then(data => {
        const contents = []
        if (data.Contents) {
          data.Contents.forEach(o => { contents.push({ name: o.Key, size: o.Size })})
        }
        return contents
      })    
    },
    download: (fileName) => {
      return client.send(new GetObjectCommand({
        Bucket: bucket,
        Key: fileName
      }))
    },
    upload: (stream) => {
      return client.send(new PutObjectCommand({
        Bucket: bucket,
        Key: image.name,
        Body: stream
      }))
    }
  }
}
