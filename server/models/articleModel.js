var db = require('../db');
var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
  'articleData': Object,
  'numberLikes': Number 
});

module.exports = db.model('Article', ArticleSchema);
