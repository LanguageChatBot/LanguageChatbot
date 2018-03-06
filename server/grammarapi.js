const {gramarPASS} = require('./config');
const axios = require("axios");

module.exports = sentence => {

    return new Promise((resolve,reject) => {

      sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
      url ="https://api.textgears.com/check.php?text="+sentence.replace(' ','+')+"&key="+gramarPASS;
      axios
        .get(url)
        .then(response => {
    
            console.log(response.data);
            if(response.data.result==true && response.data.errors.length > 0){
            aux=[];
            answer="";
            response.data.errors.forEach((e => aux.push(e.better.join()+" instead "+ e.bad + "\n"))); 
            answer = "You have some mistakes in your grammar! check it: \n"+aux.join();
            console.log(answer);  
            resolve({error:true,answer:answer})
            }
            else{// no mistake
            resolve({error:false})
            }

        })
        .catch(error => {
          console.log(error);
          reject()
        });

    })
}

 /* {
    result : true,  // false if error happens
    errors : [  // array of errors info
        0 : {
            id : "e89bb171",  // unique error id
            offset : 2,  // error text offset
            length : 2,  // error text length
            bad : "is",  // error text
            better : [  // array of suggestions
                0 : "am"
            ]
        },
        1 : {
            id : "e89bb172",  // unique error id
            offset : 8,  // error text offset
            length : 8,  // error text length
            bad : "engeneer",  // error text
            better : [  // array of suggestions
                0 : "engineer",
                1 : "engender"
            ]
        }
    ]
  }*/