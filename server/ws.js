
module.exports = (io) => {
    console.log("Socket io Ready");
    io.on('connection', function(socket){
        console.log('a user connected');
        socket.on('chat-ready', m => {
            console.log(m);
            socket.emit('chat', m);
        })
    });      
}
