import { Request, Response } from 'express'
import loginUsecase from '../usecase/login'

export default async function login(req: Request, res: Response) {
  const login_id = req.body.login_id
  const password = req.body.password

  const user = await loginUsecase(login_id, password)
  if (user) {
    req.session.user = user
    res.redirect('/')
  } else {
    res.render('login.ejs', {
      message: 'ログインIDまたはパスワードが違います。'
    })
  }
}
