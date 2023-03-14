const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

const net = require('net');
const client = new net.Socket();

client.connect(20547, '185.213.1.24', function() {
  console.log('Connected to server');
});

client.on('data', function(data) {
  io.emit('data', data.toString());
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  console.log('a user connected');
});

server.listen(3000, function() {
  console.log('listening on *:3000');
});
