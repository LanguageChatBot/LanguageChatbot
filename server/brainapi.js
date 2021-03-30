const Frases = require("./models/Brain");
const User = require("./models/User");
let index = 0;
let i = 0;

module.exports = (word, id) => {
  return new Promise((resolve, reject) => {
    if (word.split(" ")[0] == "ris" && word.split(" ")[1]!= "marc") {
      Frases.findOne({ tag: "game" }).then(function(res) {
        if (res.reply[index].tag == word.split(" ")[1]) {
          resolve('Yes!🔝 you get it! Write play for keep gaming! 😉');
          index++;
          if (index >= res.reply.length) {
            index = 0;
          }
          User.findByIdAndUpdate(
            id,
            { $inc: { progress: 10 } },
            { new: true },
            function(err, user) {
              if (err) return handleError(err);
              // res.send(user);
            }
          );
        } else {
          resolve('Ooooh Try again 😁, type play to retry');
        }
      });
    }

    if (word.split(" ")[0] == "ris" && word.split(" ")[1]== "marc") {
      Frases.findOne({ tag: "ironhack" }).then(function(res) {
        if (res.reply[0].tag == word.split(" ")[1]) {
          resolve('Yaiza!! you are soooo GOOOOD TODAY! 😉');
          i = 0;
          
          User.findByIdAndUpdate(
            id,
            { $inc: { progress: 10 } },
            { new: true },
            function(err, user) {
              if (err) return handleError(err);
              // res.send(user);
            }
          );
        } else {
          resolve('Adrian Shut UP!!');
        }
      });
    }


    if (word == "play") {
      Frases.findOne({ tag: "game" }).then(function(res) {
        let result = res.reply[index].value;
        resolve(result);
      });
    }
    if(word == 'ironhack'){
      Frases.findOne({ tag: 'ironhack' }).then(function(res) {
        let result =
          res.reply[i].value;
        resolve(result);
      });
    }
    if (word.charAt(word.length - 1) == "?") {
      Frases.findOne({ "question.value": word }).then(function(res) {
        Frases.findOne({ tag: res.tag }).then(function(res) {
          let result =
            res.reply[Math.floor(Math.random() * res.reply.length)].value;
          resolve(result);
        });
      });
    }

    if (word.charAt(word.length - 1) != "?" && word.split(" ")[0] != "ris" && word != 'ironhack' && word != "play"){

      Frases.findOne({ "answer.value": word })
      .then(function(res) {
        Frases.findOne({ tag: res.tag }).then(function(res) {
          let result =
            res.question[Math.floor(Math.random() * res.question.length)].value;
          resolve(result);
        });
      })
      .catch(e =>
        reject(
          "Your sentence seems to be correct, but I don't understand what you meen"
        )
      ); //No Tag found


  }
    
   


  });
};