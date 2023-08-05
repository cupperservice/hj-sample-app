import log4js from 'log4js'
import config from '../../config/logger_config'

log4js.configure(config)

export default log4js.getLogger()
