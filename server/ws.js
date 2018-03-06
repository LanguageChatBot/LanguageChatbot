const Frases = require("./models/Brain");
const Word = require("./brainapi");
const MainWord = require("./wordapi");
const Grammar = require("./grammarapi");

module.exports = io => {
  console.log("Socket io Ready");
  io.on("connection", function(socket) {
    console.log("a user connected");
    socket.on("chat-ready", m => {
      //console.log(m);
      console.log(m.mensaje);

      if (m.mensaje.split(" ")[0] == "ris") {
        Word(m.mensaje.toLowerCase()).then(result => {
          console.log(result);
          socket.emit("chat", {status: "Mensaje recibido",mensaje: result.replace("***", m.mensaje),isImage: false});});
      }else{

        if (m.mensaje == "play") {
          Word(m.mensaje.toLowerCase()).then(result => {
            console.log(result);
            socket.emit("chat", {status: "Mensaje recibido",mensaje: result.replace("***", m.mensaje),isImage: true});});
        } else {
  
  
          Grammar(m.mensaje).then(res => {
            if (res.error == true) {
              console.log(res);
              socket.emit("chat", {status: "Mensaje recibido",mensaje: res.answer,isImage: false});
            } else {
    
              console.log("No hay errores de gramatica");
              MainWord(m.mensaje.toLowerCase())
              .then(res => {
                if (res.length != 0) {
                  Word(res[0].text)
                    .then(result => {
                      console.log(result);
                      socket.emit("chat", {status: "Mensaje recibido",  mensaje: result.replace("***", res[0].text),isImage: false});
                    })
                    .catch(result => {
                      
                      //Respondemos por sentimiento y emoción
                      console.log("Entramos y obtenemos sentimiento de watson")
                      console.log(res[0]);
                      console.log(res[0].emotion + '-' + res[0].sentiment);
                      Word(res[0].emotion + '-' + res[0].sentiment)
                      .then(result => {
                        console.log("entramos en el then");
                        console.log(result);
                        socket.emit("chat", {status: "Mensaje recibido",  mensaje: result, isImage: false});
                      })
                      .catch(result => {
                        console.log("entramos en el catch");
                        console.log(result);
                        socket.emit("chat", {status: "Mensaje recibido",mensaje: result,isImage: false});
  
  
                      });


                    });
                } else {
                  Word(m.mensaje.toLowerCase())
                    .then(result => {
                      console.log(result);
                      socket.emit("chat", {status: "Mensaje recibido",mensaje: result.replace("***", m.mensaje),isImage: false});
                    })
                    .catch(result => {
                      console.log(result);socket.emit("chat", {status: "Mensaje recibido",mensaje: result,isImage: false});
                    });
                }
              })

              //Watson no puedo actuar porque la frase es muy corta
              .catch(e => {
      
                Word(m.mensaje.toLowerCase())
                .then(result => {
                  console.log(result);
                  socket.emit("chat", {status: "Mensaje recibido",mensaje: result.replace("***", m.mensaje),isImage: false});
                })
                .catch(result => {
                  console.log(result);
                  socket.emit("chat", {status: "Mensaje recibido",mensaje: result,isImage: false});
                });
               
              });
      
  
                  
            }}); 
        
        
        }
  


      }
     


    });
  });
};
