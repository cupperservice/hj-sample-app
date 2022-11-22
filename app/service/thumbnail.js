const AWS = require('aws-sdk')
const config = require('config')

AWS.config.update({
  region: config.region
})

const lambda = new AWS.Lambda()

module.exports = (image) => {
  const param = {
    s3: {
      original: {
        bucket_name: config.s3.original.bucket_name,
        key: image.name
      },
      thumbnail: {
        bucket_name: config.s3.thumbnail.bucket_name
      }
    }
  }

  return new Promise((resolve, reject) => {
    lambda.invokeAsync(
      {
        FunctionName: 'thumbnail',
        InvokeArgs: JSON.stringify(param)
      },
      (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      }
    )  
  })
}
