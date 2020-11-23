const net = require('net')
const event = require('events')
const server = net.createServer((server) => {
    console.log('server creat')
    
})

server.on('error', (err) => {throw err})//it ok writing outside of listen or serverfuntion 
//its return still server because wr call this event with server

server.listen({
    port:6955,
    hostname: '192.168.1.36',//it ok to use my ipv4 ip addresto creat connetion on server localhost also it
    ipv6Only : false
},(server) => {
    
}).on('connection',() => server.getConnections((count,err) => console.log(`nuber of socet:${count}`)) 
.on('listening',() => console.log(server.address())))

//server address show client info g
//for getconnection ı need to creat client socet