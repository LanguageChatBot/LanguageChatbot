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
      //console.log(m.mensaje);
      //console.log('lo user è '+ m.user._id)

      //GAME
      if (m.mensaje.split(" ")[0] == "ris") {
        Word(m.mensaje.toLowerCase(),m.user._id).then(result => {
          console.log(result);
          socket.emit("chat", {status: "Mensaje recibido",mensaje: result.replace("***", m.mensaje),isImage: false});});
      }else{

        if (m.mensaje == "play" || m.mensaje == "ironhack") {
          Word(m.mensaje.toLowerCase()).then(result => {
            console.log(result);
            socket.emit("chat", {status: "Mensaje recibido",mensaje: result.replace("***", m.mensaje),isImage: true});});
        } else {
  
          //GRAMMAR
          Grammar(m.mensaje).then(res => {
            if (res.error == true) {
              console.log(res);
              socket.emit("chat", {status: "Mensaje recibido",mensaje: res.answer,isImage: false});
            } else {
              //WATSON IA
              console.log("No hay errores de gramatica");
              MainWord(m.mensaje.toLowerCase())
              .then(res => {
                if (res.length != 0) {
                  Word(res[0].text)
                    //Respondemos por la palabra encontrada
                    .then(result => {
                      console.log(result);
                      socket.emit("chat", {status: "Mensaje recibido",  mensaje: result.replace("***", res[0].text),isImage: false});
                    })
                    //Respondemos por sentimiento y emoción
                    .catch(result => {

                      //promise all
                      Promise.all(res.map( word =>  Word(word.emotion + '-' + word.sentiment) ) )
                      .then(values => { 
                          console.log(values);
                          socket.emit("chat", {status: "Mensaje recibido",  mensaje: values[Math.floor(Math.random() * values.length)]   , isImage: false});
                       })
                      .catch(result => { 
                        console.log(result)
                        socket.emit("chat", {status: "Mensaje recibido",  mensaje: result, isImage: false});
                      });

                      /*console.log("Entramos y obtenemos sentimiento de watson")
                      console.log(res[0]);
                      console.log(res[0].emotion + '-' + res[0].sentiment);
                      watsonKey = res.length > 1? res[0].sentiment == 'neutral' ? res[1] :res[0]: res[0];
                      Word(watsonKey.emotion + '-' + watsonKey.sentiment)
                        .then(result => {
                          console.log("entramos en el then");
                          console.log(result);
                          socket.emit("chat", {status: "Mensaje recibido",  mensaje: result, isImage: false});
                          })
                        .catch(result => {
                          console.log("entramos en el catch");
                          console.log(result);
                          socket.emit("chat", {status: "Mensaje recibido",mensaje: result,isImage: false});
                          });*/

                    });
                } else {
                  console.log("entramos en el else de keywords = 0");
                  Word(m.mensaje.toLowerCase())
                    .then(result => {
                      console.log("entramos en la prueba");
                      console.log(result);
                      socket.emit("chat", {status: "Mensaje recibido",mensaje: result.replace("***", m.mensaje),isImage: false});
                    })
                    .catch(result => {
                      console.log("entramos en el catch de la prueba");
                      console.log(result);socket.emit("chat", {status: "Mensaje recibido",mensaje: result,isImage: false});
                    });
                }
              })

              //Watson no puedo actuar porque la frase es muy corta
              .catch(e => {
                console.log("Error watson dentro de ws.js");
                console.log(e.error);
                Word(m.mensaje.toLowerCase())
                .then(result => {
                  console.log(result);
                  socket.emit("chat", {status: "Mensaje recibido",mensaje: result.replace("***", m.mensaje),isImage: false});
                })
                //Text not found in the seed => standar message (Could you repeat again)
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
