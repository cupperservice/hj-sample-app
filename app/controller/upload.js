const multer = require('multer')
const upload = multer({ dest: 'public/uploads' })
const uploadUseCase = require('../usecase/upload')

module.exports = async function after_upload(req, res) {
  await uploadUseCase(req.file)
  res.redirect('/?message=uploading is completed')
}
