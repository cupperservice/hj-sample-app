import { Request, Response } from 'express'

export default function defaultError(err: Error, req: Request, res: Response) {
  res.status(200).render('error.ejs', {
    message: err.message,
  })
}
