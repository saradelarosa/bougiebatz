var mongoose = require('mongoose');

var dbUrl = 'mongodb://heroku_nkhcxv83:d6do54be96ubqk19u6f2vj4jne@ds031925.mlab.com:31925/heroku_nkhcxv83';

//connect to remote mongodb database
var db = mongoose.connect(dbUrl, function(err, res){
  if (err) {
    console.error('Error connecting to: ' + dbUrl);
  } else {
    console.log('Connected to ' + dbUrl);
  }
});

//attach listener to connected evenet
mongoose.connection.once('connected', function(){
  console.log('Connected to database');
});

//export db
module.exports = db;
