import { RowDataPacket } from 'mysql2/promise'
import User from '../model/user'
import Password from '../model/password'
import connection from './db_connection'

interface IUser extends RowDataPacket {
  id: number,
  login_id: string,
  password: string,
  name: string
}

class UserRepository {
  async find(login_id: string): Promise<User | null> {
    return connection<User | null>(async (conn) => {
      const [rows, fields] = await conn.query<IUser[]>('SELECT login_id, password, name FROM user WHERE login_id = ?', [login_id])

      if (rows.length === 1) {
        return new User(
          rows[0].login_id,
          new Password(rows[0].password),
          rows[0].name
        )
      } else {
        return null
      }
    })
  }

  async register(user: User) {
    return connection<void>(async (conn) => {
      await conn.execute('INSERT INTO user (login_id, password, name) VALUES (?, ?, ?)', [user.login_id, user.hashed_password.value(), user.name])
    })
  }

  async init() {
    return connection<void>(async (conn) => {
      await conn.execute(
        'CREATE TABLE IF NOT EXISTS user (\
          id          INTEGER      AUTO_INCREMENT,\
          login_id    VARCHAR(50)  NOT NULL UNIQUE,\
          password    VARCHAR(100) NOT NULL,\
          name        VARCHAR(100) NOT NULL,\
          PRIMARY KEY (id)\
        )'
      )
    })
  }
}

export default new UserRepository()
