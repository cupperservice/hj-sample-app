import userRepository from '../app/repository/user_repository'
import fs from 'fs'
import { parse } from 'csv-parse/sync'
import User from '../app/model/user'
import Password from '../app/model/password'
import Salt from '../app/model/salt'

userRepository.init()
  .then(result => {
    const file = process.argv[2]
    const data = fs.readFileSync(file)
    
    parse(data).forEach((u: any) => {
      console.log(u[1])
      const salt = Salt.generate()
      userRepository.register(new User(u[0], Password.hashedPassword(u[1], salt), salt, u[2]))
      .then(result => {
        console.log(`[${u[0]}] is registered`)
      })
    })
  })
