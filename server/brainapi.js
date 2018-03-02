const Frases = require("./models/Brain");

module.exports = word => {
  return new Promise((resolve, reject) => {
    if(word == 'play'){
        Frases.findOne({ tag: 'game' }).then(function(res) {
          let result =
            res.reply[Math.floor(Math.random() * res.reply.length)].value;
          resolve(result);
        });
    }
    if(word.charAt(word.length-1)=='?'){
      Frases.findOne({ "question.value": word }).then(function(res) {
        Frases.findOne({ tag: res.tag }).then(function(res) {
          let result =
            res.reply[Math.floor(Math.random() * res.reply.length)].value;
          resolve(result);
        });
      });}
    Frases.findOne({ "answer.value": word }).then(function(res) {
      Frases.findOne({ tag: res.tag }).then(function(res) {
        let result =
          res.question[Math.floor(Math.random() * res.question.length)].value;
        resolve(result);
      });
    })
    .catch( reject("Could you repeat again?"))//No Tag found
  });
};
