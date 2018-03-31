var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io')(server)

var session = require("express-session")({
    secret: "my-secret",
    resave: true,
    saveUninitialized: true
});
var sharedsession = require("express-socket.io-session");
 
// Use express-session middleware for express
app.use(session);

io.use(sharedsession(session, {
    autoSave:true
})); 

io.on('connection', (socket) => {

	socket.on('login', (userData) => {
		socket.handshake.session.userData = userData;
		socket.handshake.session.save();
	})

	socket.on('clientMessage', (data) => {
		const clientMessage = {
			author: socket.handshake.session.userData,
			message: data
		}
		io.emit('serverMessage', clientMessage)
		// socket.emit('serverMessage', clientMessage)
	})
})

server.listen(3000)