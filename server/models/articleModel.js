var db = require('../db');

var ArticleSchema = new db.Schema({
  'articleImageUrl': String,
  'numberLikes': String,
  'fav': { type: Booolean, default: false }

});

module.exports = db.model('Article', ArticleSchema);
