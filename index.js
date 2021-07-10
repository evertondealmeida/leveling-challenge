var express = require('express');

var PORT =  3000;

var app = express();

app.use('/', function(req, res) {
  res.send('Testando');
});

app.listen(PORT, function() {
  console.log('Running on port ' + PORT);
});