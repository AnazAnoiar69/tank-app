const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = 8000;

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  console.log('A user connected');

  socket.on('disconnect', function() {
    console.log('A user disconnected');
  });

  socket.on('data', function(data) {
    console.log('Data received:', data);
    io.emit('data', data);
  });
});

http.listen(port, function() {
  console.log('Listening on port', port);
});
