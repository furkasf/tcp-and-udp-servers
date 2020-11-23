const { Console } = require('console')
const { write } = require('fs')
const net = require('net')

const socket = net.createConnection()

socket.connect({port:8000, host: 'localhost'})
socket.on('connect', () =>  Console.log('ok'))