import mysql from 'mysql2/promise'
import config from '../../config/config'

type Func<T> = (connection: mysql.Connection) => Promise<T>

export default async function connection<T>(f: Func<T>) {
  const conn = await mysql.createConnection({
    host: config.db.host,
    user: config.db.username,
    password: config.db.password,
    database: config.db.database,
  })

  await conn.connect()

  const r = await f(conn)

  await conn.end()

  return r
}
