const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get('/attempt', function (req, res) {
    console.log(req.query.code);
});
 
app.listen(3000);