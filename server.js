const express = require('express');
const app = express();
const code = "123456" //generateRandom();

function generateRandom() {
  var codeArray = [];
  for(var i = 0; i < 6; i++){
    codeArray.push(Math.floor(Math.random() * 10));  
  }
  return codeArray.join();
}
 
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get('/attempt', function (req, res) {
    var userGuess = req.query.code;
    if(userGuess === code){
      res.send("correct");
    } else {
      res.send("incorrect");
    }
});
 
app.listen(3000);