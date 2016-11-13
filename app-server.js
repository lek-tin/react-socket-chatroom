'use strict';

const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 8888;

app.use(express.static('./public'));

const server = app.listen(port);
const io = require('socket.io').listen(server);

// app.locals.user = 'Random User';
// app.locals.signature = 'Tomorrow is another day';
const user = 'Random User';
const signature = 'Tomorrow is another day';

let usersList = JSON.parse(fs.readFileSync('messagesLog.json', 'utf8'));

let connections = [];

io.sockets.on('connection', function(socket) {

	socket.once('disconnect', function() {
		connections.splice(connections.indexOf(socket), 1);
		socket.disconnect();
		console.log("Disconnected: %s sockets remaining.", connections.length);
	});

	socket.emit('welcome', usersList);

	socket.emit('broadcast', usersList);

	connections.push(socket);
    console.log("Connected: %s sockets connected.", connections.length);

});

console.log('Chatroom server is running at "http://localhost:%s"', port);




