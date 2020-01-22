const socketio = require('socket.io');

const connection = []

exports.setupWebSocket = (server) => {
    const io = socketio(server);

    io.on('connection', socket => {
        console.log(socket.id);

    });
};