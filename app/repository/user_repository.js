const mysql = require('mysql')
const User = require('../model/user')
const Password  = require('../model/password')
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
    find: (user_id, callback) => {
      connection.query(
        `SELECT user_id, password, name FROM user WHERE user_id = ?`, [user_id],
        (err, results, fields) => {
          if (err) throw err

          if (results.length === 1) {
            callback(new User(results[0].login_id, new Password(results[0].password), results[0].name))
          } else {
            callback(null)
          }
        }
      )
    },
    register: (user, callback) => {
      connection.query(
        'INSERT INTO user(user_id, password, name) VALUES(?, ?, ?)', [user.login_id, user.hashedPassword.value(), user.name],
        (err, result, fields) => {
          if (err) throw err
          callback(result)
        }
      )
    },
    close: () => {
      connection.end()
    }
  }
}
