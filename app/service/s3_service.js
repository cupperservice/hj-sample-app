const { S3, PutObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3')

module.exports = () => {
  const client = new S3({ endpoint: process.env.AWS_ENDPOINT ? `http://${process.env.AWS_ENDPOINT}` : undefined })

  return {
    download: (bucket, fileName) => {
      return client.send(new GetObjectCommand({
        Bucket: bucket,
        Key: fileName
      }))
    },
    upload: (bucket, key, stream) => {
      return client.send(new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: stream
      }))
    }
  }
}
