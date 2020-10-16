import WebSocket from 'ws'
import debug from 'lib/debug'

// const wss = new WebSocket.Server({ server: server })
const wss = new WebSocket.Server({ port: 8080 })
debug.info('simple at 8080')

wss.on('connection', function connection(ws) {
  debug.info('8080 (connected)')

  ws.on('message', function incoming(message) {
    debug.info('8080 (received): %s', message)
  })

  ws.send("Hello Client, I'm 8080")
})

// SENDING JSON STUFF
const wss9 = new WebSocket.Server({ port: 9090 })
debug.info('complex at 9090')

wss9.on('connection', function connection(ws) {
  debug.info('9090 (connected)')

  ws.on('message', function incoming(message) {
    const data = JSON.stringify(message)
    debug.info('9090 (received): %O', data)
  })

  ws.send(
    JSON.stringify({
      name: '9090',
      type: 'message',
      content: 'Hello Client',
      timestamp: Date.now(),
    })
  )
})
