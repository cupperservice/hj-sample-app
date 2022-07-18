const multer = require('multer')
const upload = multer({ dest: 'public/uploads' })
const { S3, PutObjectCommand } = require('@aws-sdk/client-s3')
const fileRepository = require('../repository/file_repository')()

module.exports = function after_upload(req, res) {
  fileRepository.upload(req.file, data => {
    res.redirect('/?message=uploading is completed')
  })
}
