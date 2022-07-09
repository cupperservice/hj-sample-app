const mysql = require('mysql')
const User = require('../model/user')
const config = require('config')

module.exports = () => {
  const connection = mysql.createConnection({
    host: config.db.host,
    port: config.db.port,
    user: config.db.user_id,
    password: config.db.password,
    database: config.db.name
  })
    
  return {
    connect: () => {
      connection.connect()
    },
    find: (user_id, fn) => {
      connection.query(
        `SELECT user_id, password, name FROM user WHERE user_id = ?`, [user_id],
        (err, results, fields) => {
          if (err) throw err

          if (results.length === 1) {
            fn(new User(results[0].login_id, results[0].password, results[0].name))
          } else {
            fn(null)
          }
        }
      )
    },
    close: () => {
      connection.end()
    }
  }
}
