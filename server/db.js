var mongoose = require('mongoose');
var mongodb = require('mongodb');

var dbUrl = process.env.MONGOURI || 'mongodb://heroku_rm47z500:2p9b9kceqhn15vif8r44h78lho@ds031607.mlab.com:31607/heroku_rm47z500'
//var dbUrl = process.env.MONGOURI || 'mongodb://sarasailors:admin@ds031925.mlab.com:31925/heroku_nkhcxv83'



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
