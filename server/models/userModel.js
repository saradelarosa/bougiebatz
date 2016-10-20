var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
  username: String,
  password: String,
  email: String,
  articleImageUrl: String,
  numberLikes: String
});
