const config = require('config')
const moment = require('moment')

module.exports = (file) => {
  const logger = require('pino')(`${__dirname}/../../${file}`)
  return {
    info: (msg) => {
      logger.info(msg)
    },
    error: (err) => {
      logger.error(err)
    },
    debug: (msg) => {
      logger.debug(msg)
    }
  }
}
