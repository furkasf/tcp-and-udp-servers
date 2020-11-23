const { error } = require('console')
const net = require('net')

const server = net.createServer()

server.on('connection',  () => {
    server.getConnections((count) => {
        console.log(`number of connection${count}`)
        if(count >5) server.close()
    })
})

server.listen({host:'localhost', port: 1234},()=> console.log('server listenig'))