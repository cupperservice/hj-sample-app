const mysql = require('mysql')
const config = require('config')
const Image = require('../model/image')

module.exports = () => {
  const connection = mysql.createConnection({
    host: config.db.host,
    port: config.db.port,
    user: config.db.user_id,
    password: config.db.password,
    database: config.db.name
  })

  return {
    save: (image) => {
      connection.query(
        'INSERT INTO image(name) VALUES(?)', [image.name],
        (err, result, field) => {
          if (err) throw err
        }
      )
    },  
    allImages: () => {
      connection.query(
        'SELECT name FROM image',
        (err, result, fields) => {
          if (err) throw err
  
          return result.map(name => {
            new Image(name)
          })
        }
      )
    },
    close: () => {
      connection.end()
    }  
  }
}
