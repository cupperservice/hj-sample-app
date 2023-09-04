import mime from 'mime'

export default class Image {
  name: string
  size: number
  comment: string
  mime_type: string

  constructor(name: string, size: number, comment: string, mime_type: string) {
    this.name = name
    this.size = size
    this.comment = comment
    this.mime_type = mime_type
  }

  extension(): string {
    return mime.getExtension(this.mime_type)!!
  }
}
