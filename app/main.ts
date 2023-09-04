import express from 'express'
import session from 'express-session'
import bodyParser from 'body-parser'
import multer from 'multer'
import { liveness, readiness } from './controller/health_controller'
import auth from './controller/auth'
import top from './controller/top'
import login from './controller/login'
import after_upload from './controller/upload'
import download from './controller/download'
import logger from './service/logger'
import access_logger from './service/access_logger'
import User from './model/user'
import wrap from './wrap'
import config from '../config/config'

declare module 'express-session' {
  interface SessionData {
    user: User
  }
}

const app = express()

app.use(express.static(`${__dirname}/../public`))
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.use(access_logger)
// app.use(defaultError)

app.use(session({
  name: 'session_id',
  secret: 'secret',
  cookie: {
    path: '/',
    secure: false,
    httpOnly: false
  }
}))

app.get('/liveness', wrap(liveness))
app.get('/readiness', wrap(readiness))

app.get('/', auth, wrap(top))
app.post('/login', wrap(login))
app.post('/upload', auth, multer({ dest: `${__dirname}/../${config.image.upload.dir}` }).single('file'), wrap(after_upload))
app.get('/download', auth, wrap(download))

const host = config.server.host
const port = config.server.port
app.listen(port, host, () => {
  logger.info(`Example app listening on port ${port}`)
})
