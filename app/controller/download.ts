import { Request, Response } from 'express'
import downloadUsecase from '../usecase/download'

export default async function download(req: Request, res: Response) {
  const fileName = req.query.name as string

  const content = await downloadUsecase(fileName)
  res.attachment(fileName)
  content.pipe(res)
}
