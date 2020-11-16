const dgram = require('dgram')

const socket = dgram.createSocket('udp4')

socket.on('message', (msg, info) =>{
    console.log('massage:'+msg+'from:'+info.address)
})

socket.bind(8081)// udp port