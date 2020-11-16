const net = require('http')
const server = net.createServer(socket => {
    socket.write('hello')
    socket.on('data', data => console.log(data.toString()))
})

server.listen(8080)