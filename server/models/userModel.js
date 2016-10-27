var db = require('../db');
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var models = {};

//Uses passport-local-mongoose to create users with this schema
//the passport module automatically hashes the user's inputted password for you
var userSchema = new mongoose.Schema({
  //we don't need the username and hashed password templated here because passport
  //does that for you
  savedStories: Array,
  likedStories: Array
});
userSchema.plugin(passportLocalMongoose);
models.User = mongoose.model('User', userSchema);

module.exports = models;
