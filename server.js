const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
app.use(express.static('public'));
// server code goes here!
// first listen for connection using io.on
// then... within callback, use socket.on, socket.emit, socket.broadcast, etc.
// NOTE THAT WE ARE LISTENING WITH server, NOT app!

io.on('connect', socket => {
	socket.on('button clicked', data => {
		const obj = Object.assign(data);
		obj.id = socket.id;
		io.emit('move', obj);
	});
});

server.listen(3000);
