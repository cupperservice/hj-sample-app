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
    save: (image, callback) => {
        connection.query(
            'INSERT INTO image(name, size, comment) VALUES(?,?,?)', [image.name, image.size, image.comment],
            (err, result) => {
                if (err) throw err
                callback(result)
            }
        )
    },
    allImages: (callback) => {
        return new Promise((resolve, reject) => {
            connection.query(
                `SELECT name, size, comment FROM image`,
                (err, result, fields) => {
                    if (err) throw err
    
                    for(let i = 0; i < result.length; i++) {
                        callback(new Image({
                            name: result[i].name,
                            size: result[i].size,
                            comment: result[i].comment
                        }))
                    }
                    resolve()
                }
            )
        })
    }
  }
}
