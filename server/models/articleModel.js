var db = require('../db');

var ArticleSchema = new db.Schema({
  //'articleImageUrl': String
  // ,
  // 'numberLikes': String
});

module.exports = db.model('Article', ArticleSchema);
