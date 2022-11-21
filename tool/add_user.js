process.env['NODE_CONFIG_DIR'] = __dirname + '/../config'
const userRepository = require('../app/repository/user_repository')()
const imageRepository = require('../app/repository/image_repository')()
const User = require('../app/model/user')
const Password = require('../app/model/password')
const fs = require('fs')
const {parse} = require('csv-parse/sync')

userRepository.init()
  .then(imageRepository.init())
  .then((result => {
    const file = process.argv[2]
    const data = fs.readFileSync(file)
    
    parse(data).forEach(u => {
      userRepository.register(new User(u[0], Password.hashedPassword(u[1]), u[2]), (result) => {
        console.log(`[${u[0]}] is registered`)
      })
    })
    userRepository.close()
    imageRepository.close()  
  }))
