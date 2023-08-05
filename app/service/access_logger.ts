import log4js from 'log4js'
import { Request, Response, NextFunction } from 'express'
import config from '../../config/logger_config'

log4js.configure(config)

const logger = log4js.getLogger('access')

export default (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now()

  next()

  const log = {
    statusCode: res.statusCode,
    method: req.method,
    url: req.url,
    responseTime: Date.now() - start,
  }

  logger.info(JSON.stringify(log))
}
