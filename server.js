var express = require('express');
var path = require('path');
var cors = require('cors');
var api = require('./api-router');

var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', api);


// webpack loads index.html, looks for script src
app.get('/public/bundle.js', function(req, res){
  res.sendFile(path.join(__dirname, 'client/public/bundle.js'));
});

app.get('client/styles/style.css', function(req, res){
  res.sendFile(path.join(__dirname, 'client/styles/style.css'));
});

app.get('*', function(req, res){
  console.log('REQ.URL IS: ', req.url);
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.listen(process.env.PORT || 9000);
