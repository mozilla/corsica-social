var express = require('express');
var http = require('http');

var app = express();
app.set('port', (process.env.PORT || 8000));
app.use(express.static(__dirname + '/static'));
var server = http.createServer(app);

app.get('/', function(req, res) {
  res.redirect('/index.html');
});

app.get('/mark', function (req, res) {
  console.log(req.query);
  res.redirect('/mark.html');
});

server.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
