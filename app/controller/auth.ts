import { Request, Response, NextFunction } from 'express'
import logger from '../service/logger'

export default function auth(req: Request, res: Response, next: NextFunction) {
  logger.info('auth check')
  if (req.session.user) {
    next()
  } else {
    res.render('login.ejs', {
      message: ''
    })
  }
}
