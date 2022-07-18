process.env['NODE_CONFIG_DIR'] = __dirname + '/../config'

const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const auth = require('./controller/auth')
const login = require('./controller/login')
const top = require('./controller/top')
const download = require('./controller/download')
const after_upload = require('./controller/upload')
const DynamoDBStore = require('connect-dynamodb')({ session: session })
const logger = require('./service/logger')
const config = require('config')

const app = express()

app.use(express.static(`${__dirname}/../public`))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', session({
  name: config.session.name,
  secret: config.session.secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    path: config.session.path,
    secure: config.session.secure
  },
  store: new DynamoDBStore({
    table: config.session.store.table
  })
}))

app.set('view engine', 'ejs')

app.all('/*', logger)

app.get('/', auth, top)

app.post('/login', login)

app.get('/download', auth, download)

const multer = require('multer')
const upload = multer({ dest: `${__dirname}/public/uploads` })
app.post('/upload', auth, upload.single('file'), after_upload)

app.listen(8080, (err) => {
  if (err) throw err
  console.log('Server is started')
})
