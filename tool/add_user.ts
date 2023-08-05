import { userRepository } from '../app/repository/user_repository'
import fs from 'fs'
import { parse } from 'csv-parse/sync'
import User from '../app/model/user'
import Password from '../app/model/password'

userRepository.init()
  .then(result => {
    const file = process.argv[2]
    const data = fs.readFileSync(file)
    
    parse(data).forEach((u: any) => {
      console.log(u[1])
      userRepository.register(new User(u[0], Password.hashedPassword(u[1]), u[2]))
      .then(result => {
        console.log(`[${u[0]}] is registered`)
      })
    })
  })
