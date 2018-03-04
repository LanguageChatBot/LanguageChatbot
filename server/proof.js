const mainWord = require("./wordapi");


//mainWord("I am going to the supermarket.").then(res => {console.log(JSON.stringify(res, null, 2))});
//mainWord("I am super sad to go out tonight with my friends.").then(res => {console.log(JSON.stringify(res, null, 2))});
//mainWord("I am super happy, I am going out tonight with my friends.").then(res => {console.log(JSON.stringify(res, null, 2))});
//mainWord("I would like someone invite to me to a party.").then(res => {console.log(JSON.stringify(res, null, 2))});
mainWord("I want a date tonight or this weekend.").then(res => {console.log(JSON.stringify(res, null, 2))});
mainWord("Hello.").then(res => {console.log(JSON.stringify(res, null, 2))});