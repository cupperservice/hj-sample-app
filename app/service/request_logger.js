const config = require('config')
const logger = require('../service/logger')(config.request_logger.file)

module.exports = (req, res, next) => {
  logger.info(req)
  next()
}
