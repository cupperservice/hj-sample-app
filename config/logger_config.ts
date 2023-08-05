import fs from 'fs'
import yaml from 'yaml'

interface Config {
  log4js: any,
}

const yamldata = fs.readFileSync(`${__dirname}/logger.yml`, 'utf8')
const config: Config = yaml.parse(yamldata)

export default config.log4js
