var mongoose = require('mongoose');
var mongodb = require('mongodb');

var dbUrl = process.env.MONGOLAB_OLIVE_URI || 'mongodb://heroku_51kstk8r:mvc2uaain1ktom8tretqv5b5si@ds139665.mlab.com:39665/heroku_51kstk8r';

mongoose.connect(dbUrl, function (err, res) {
  if (err) console.error('ERROR connecting to: ' + dbUrl + '. ' + err)
  else console.log('Successfully connected to: ' + dbUrl)
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongodb connection open');
});

module.exports = db;
