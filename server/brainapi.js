const Frases = require("./models/Brain");
let index = 0;

module.exports = word => {
  return new Promise((resolve, reject) => {
    if(word.split(' ')[0] == 'ris'){
      Frases.findOne({ tag: 'game' }).then(function(res) {
        if(res.reply[index].tag==word.split(' ')[1]){resolve('si');index++;if(index>=res.reply.length){index=0}}
        else{resolve('no')}
      });
    }
    if(word == 'play'){
        Frases.findOne({ tag: 'game' }).then(function(res) {
          let result =
            res.reply[index].value;
          resolve(result);
        });
    }
    if(word.charAt(word.length-1)=='?'){
      Frases.findOne({ "question.value": word })
      .then(function(res) {
        Frases.findOne({ tag: res.tag }).then(function(res) {
          let result =
            res.reply[Math.floor(Math.random() * res.reply.length)].value;
          resolve(result);
        });
      });}

    Frases.findOne({ "answer.value": word })
     .then(function(res) {
      Frases.findOne({ tag: res.tag }).then(function(res) {
        let result =
          res.question[Math.floor(Math.random() * res.question.length)].value;
        resolve(result);
       });
      })
     .catch( e => reject("Could you repeit again?"))//No Tag found
  });
};
