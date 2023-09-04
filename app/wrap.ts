import { Request, Response, NextFunction } from 'express'

interface PromiseRequestHandler {
  (req: Request, res: Response, next: NextFunction): Promise<any>
}

export default function wrap(handler: PromiseRequestHandler) {
  return (req: Request, res: Response, next: NextFunction) => handler(req, res, next).catch(e => console.log(e))
}
