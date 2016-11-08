'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 8888;

app.use(express.static('./public'));

const server = app.listen(port);
const io = require('socket.io').listen(server);

const user = 'Random User';
const signature = 'Tomorrow is another day';

let connections = [];

io.sockets.on('connection', function (socket) {

	socket.once('disconnect', function() {
		connections.splice(connections.indexOf(socket), 1);
		socket.disconnect();
		console.log("Disconnected: %s sockets remaining.", connections.length);
	});

	socket.emit('welcome', {
		user: user,
		signature: signature
	});

	connections.push(socket);
    console.log("Connected: %s sockets connected.", connections.length);
});

console.log('Chatroom server is running at "http://localhost:%s"', port);


