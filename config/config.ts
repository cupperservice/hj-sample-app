import fs from 'fs'
import yaml from 'yaml'

interface DbConfig {
  host: string,
  port: number,
  username: string,
  password: string,
  database: string,
}

interface SessionConfig {
  name: string,
  secret: string,
  cookie: {
    path: string,
    secure: boolean,
  },
  store: {
    table: string,
  },
}

interface Config {
  region: string,
  server: {
    port: number,
    host: string,
  }
  db: DbConfig,
  session: SessionConfig,
  s3: {
    original: {
      bucket: string
    },
    thumbnail: {
      bucket: string
    },
  },
  image: {
    upload: {
      dir: string,
    },
  },
}

const yamldata = fs.readFileSync(`${__dirname}/default.yml`, 'utf8')
const config: Config = yaml.parse(yamldata)

export default config
