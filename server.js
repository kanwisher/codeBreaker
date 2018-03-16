const express = require('express');
const app = express();
const code = generateRandom();
const PORT = 3000;

function generateRandom() {
  var codeArray = [];
  for(var i = 0; i < 6; i++){
    codeArray.push(Math.floor(Math.random() * 10));  
  }
  return codeArray.join(); //string
}
 // html routes
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// api routes
app.get('/api/attempt', function (req, res) {
  console.log(req);
    var userGuess = req.query.code;
    if(userGuess === code){
      res.send("correct");
    } else {
      res.send("incorrect");
    }
});
 
app.listen(PORT, function(){
  console.log(`App is running at http://localhost:${PORT}`)
});