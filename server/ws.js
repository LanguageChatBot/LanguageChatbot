const Frases = require('./models/Brain');


module.exports = (io) => {
    console.log("Socket io Ready");
    io.on('connection', function(socket){
        console.log('a user connected');
        socket.on('chat-ready', m => {
            console.log(m);
            Frases.findOne({'tag':'greetings'}, function (err, tag) {
                if (err) return handleError(err);
                console.log(tag.question[0].value);
                m.mensaje = tag.question[0].value;
                socket.emit('chat', m);
              });
        })
    });      
}
