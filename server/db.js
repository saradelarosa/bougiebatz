var mongoose = require('mongoose');

var dbUrl = 'mongodb://heroku_rm47z500:2p9b9kceqhn15vif8r44h78lho@ds031607.mlab.com:31607/heroku_rm47z500';

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
