const Frases = require("./models/Brain");

module.exports = word => {
  return new Promise((resolve, reject) => {
    Frases.findOne({ "answer.value": word }).then(function(res) {
      console.log(res.tag);
      Frases.findOne({ tag: res.tag }).then(function(res) {
        console.log(res);
        console.log("entramos en la fun");
        console.log(Math.floor(Math.random() * res.answer.length));
        let result =
          res.answer[Math.floor(Math.random() * res.answer.length)].value;
        resolve(result);
      });
    });
  });
};
