const { count } = require('console')
const net = require('net')

const server = net.createServer({allowHalfOpen:false, pauseOnConnect:false})

server.on('close', () => console.log('server closed'))
server.on('error',(err) => {throw err})
//when server listen for client event triggered and strat getconnection method it show
//us current connection num -- connection triggered when server sonect with other socet
server.on('connection',() => server.getConnections((err, count) => console.log(count)))

server.listen({port:12345, host: '192.168.1.36'})
//if use get connection method with listen event with listen() method it give us connection number 
//when server star listen

////////////////////////////

// we can use getconnevtion method to redirect connection when server reach some limit of connection.
// like that we can prevent server dead 