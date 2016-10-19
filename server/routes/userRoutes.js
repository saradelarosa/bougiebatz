var express = require('express');
var router = express.Router();


//configure Passport
var passport = require('passport');
var expressSession = require('express-session');
router.use(expressSession({secret: 'mySecretKey'}));
router.use(passport.initialize());
router.use(passport.session());
