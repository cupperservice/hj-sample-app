import { Request, Response } from 'express'
import getImages from '../usecase/get_images'

export default async function top(req: Request, res: Response) {
  const contents = await getImages()

  res.render('top.ejs', {
    name: req.session.user!!.name,
    contents: contents,
    message: req.query.message? req.query.message : ''
  })
}
