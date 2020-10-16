import bunyan from 'bunyan'
import bunyanFormat from 'bunyan-format'

const logger = bunyan.createLogger({
  name: 'websockets',
  stream: bunyanFormat({ outputMode: 'short' }),
})

export default logger
