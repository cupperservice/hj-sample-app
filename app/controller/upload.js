const multer = require('multer')
const upload = multer({ dest: 'public/uploads' })
const { S3, PutObjectCommand } = require('@aws-sdk/client-s3')
const fileRepository = require('../repository/file_repository')()
const useCase = require('../usecase/upload')

module.exports = async function after_upload(req, res) {
  console.log(req.file)
  await useCase(req.file)
  res.redirect('/?message=uploading is completed')
}
