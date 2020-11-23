//builserver
//this server max have 2 conection made
//after 2 connection block any connection req

const { error, count } = require('console')
const net = require('net')

const server = net.createServer()

server.on('connection', () => server.getConnections((err, count) => {
    if(count >5){
        server.close(() => console.log('server closed other connections'))
    }
    console.log(count)//get nuber of connection
})
)


server.listen({host:'localhost', port:8080}).on('listening',() => console.log('server listen reqs'))
