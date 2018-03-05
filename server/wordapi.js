const {watsonUSER, watsonPASS, watsonVDATE} = require('./config');
const _ = require('lodash')
const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
const natural_language_understanding = new NaturalLanguageUnderstandingV1({
  username: watsonUSER,
  password: watsonPASS,
  version_date: watsonVDATE,
});

module.exports = sentence => {

    return new Promise((resolve, reject) => {

      var parameters = {
        text: sentence,
        features: { 
                    keywords: {
                               emotion: true,
                               sentiment: true,
                               limit: 2,//Determina el número de palabras que obtenemos de watson
                              },
                  },
        };
      
      natural_language_understanding.analyze(parameters, function( err,res){

        if (err){
          console.log("error watson");
          console.log('error:', err);
          reject()
        }
        else{
          console.log(JSON.stringify(res, null, 2));
          //resolve(res)
          words = [];
          res.keywords.forEach( w => { 
            words.push({
              text:w.text, 
              sentiment:w.sentiment.label, 
              emotion:(_.invert(w.emotion)[Math.max.apply(null, Object.entries(w.emotion).map(e=>e[1]))])}) 
          })
          resolve(words);
  
        }
      })
    })
}

//Formato JSOn que devuelve Watson
/*{
  "usage": {
    "text_units": 1,
    "text_characters": 30,
    "features": 1
  },
  "language": "en",
  "keywords": [
    {
      "text": "supermarket",
      "sentiment": {
        "score": 0.481009,
        "label": "positive"
      },
      "relevance": 0.917127,
      "emotion": {
        "sadness": 0.304711,
        "joy": 0.140307,
        "fear": 0.21588,
        "disgust": 0.063652,
        "anger": 0.13588
      }
    }
  ]
}*/
