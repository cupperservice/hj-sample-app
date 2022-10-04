const multer = require('multer')
const upload = multer({ dest: 'public/uploads' })
const uploadUseCase = require('../usecase/upload')

module.exports = async function after_upload(req, res) {
  if (req.file) {
    await uploadUseCase(req.file, req.body.comment)
    res.redirect('/?message=uploading is completed')  
  } else {
    res.redirect('/')
  }
}
