var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Worldis!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

setTimeout(function() {
  throw new Error('errr');
}, 4000);
