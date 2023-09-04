import { Request, Response } from 'express'
import uploadUsecase from '../usecase/upload'

export default async function upload(req: Request, res: Response) {
  if (req.file) {
    await uploadUsecase(req.file, req.body.comment)
    res.redirect('/?message=アップロードしました。')
  } else {
    res.redirect('/')
  }
}
