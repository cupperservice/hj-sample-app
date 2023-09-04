import { Request, Response } from 'express'
import logger from '../service/logger'

export async function liveness(req: Request, res: Response) {
  logger.info('liveness check OK')
  res.send('OK')
}

export async function readiness(req: Request, res: Response) {
  // TODO 他のサービスにアクセスできることを確認する
  logger.info('readiness check OK')
  res.send('OK')
}
