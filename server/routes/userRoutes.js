var express = require('express');
var router = express.Router();

var dbConfig = require('../db.js');
var mongoose = require('mongoose');

//connect to bougiebatz db
mongoose.connect(dbConfig.url);

//configure Passport
var passport = require('passport');
var expressSession = require('express-session');
router.use(expressSession({secret: 'mySecretKey'}));
router.use(passport.initialize());
router.use(passport.session());
