const config = require('config')
const logger = require('pino')(`${__dirname}/../../${config.logger.file}`)
const moment = require('moment')

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
//   console.log(`[${moment().format("YYYY-MM-DD HH:mm:ssZ")}] ${req.method} ${req.path}`)
//   next()
// }
