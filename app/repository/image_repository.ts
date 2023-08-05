import { RowDataPacket } from 'mysql2/promise'
import Image from '../model/image'
import connection from './db_connection'

interface IImage extends RowDataPacket {
  name: string,
  size: number,
  comment: string,
  mime_type: string
}

class ImageRepository {
  async save(image: Image) {
    return connection<void>(async (conn) => {
      await conn.execute(
        'INSERT INTO image (name, size, comment, mime_type) VALUES (?, ?, ?, ?)',
        [image.name, image.size, image.comment, image.mime_type]
      )
    })
  }

  async allImages(): Promise<Image[]> {
    return connection<Image[]>(async (conn) => {
      const [rows, fields] = await conn.query<IImage[]>(
        'SELECT name, size, comment, mime_type FROM image'
      )

      return rows.map((row) => {
        return new Image(
          row.name,
          row.size,
          row.comment,
          row.mime_type
        )
      })
    })
  }
}

export default new ImageRepository()
