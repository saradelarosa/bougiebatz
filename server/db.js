var mongoose = require('mongoose');

var dbUrl = 'mongodb://<root>:<root>@ds153715.mlab.com:53715/heroku_wbq232wz';

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
