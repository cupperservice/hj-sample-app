const config = require('config')
const logger = require('pino')(`${__dirname}/../../${config.logger.file}`)
const moment = require('moment')
const pump = require('pump')
const pinoCloudWatch = require('pino-cloudwatch')

module.exports = () => {
  return {
    info: (msg) => {
      logger.info(msg)
    },
    error: (err, msg) => {

    },
    debug: (msg) => {

    }
  }
}
