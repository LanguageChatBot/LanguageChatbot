const Frases = require("./models/Brain");
const Word = require("./brainapi");

module.exports = io => {
  console.log("Socket io Ready");
  io.on("connection", function(socket) {
    console.log("a user connected");
    socket.on("chat-ready", m => {
      //console.log(m);
      //console.log(m.mensaje);
      Word(m.mensaje)
       .then(result => {
        console.log(result);
        socket.emit("chat", { status: "Mensaje recibido", mensaje: result });
       })
       .catch(result => {
        console.log(result);
        socket.emit("chat", { status: "Mensaje recibido", mensaje: result });
       })
    });
  });
};
