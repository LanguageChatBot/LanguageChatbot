const {gramarPASS} = require('./config');
const axios = require("axios");

module.exports = sentence => {

    return new Promise((resolve,reject) => {

      sentence = sentence.replace(' ','+');
      url ="https://api.textgears.com/check.php?text="+sentence+"&key="+gramarPASS;
      axios
        .get(url)
        .then(response => {
    
            if(response.data.result==true){
            aux=[];
            answer="";
            response.data.errors.forEach((e => aux.push(e.better.join()+" instead "+ e.bad + "</br>"))); 
            answer = "You have some mistakes in your grammar! check it: "+aux.join();
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