const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const chatRoutes = require('./routes/chatRoutes');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
app.use('/', chatRoutes);

// Real-time chat logic
io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('sendMessage', (data) => {
        io.to(data.receiverId).emit('receiveMessage', data);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
