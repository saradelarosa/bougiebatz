var express = require('express');
var path = require('path');
var cors = require('cors');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var database = require('./server/models/userModel');
var passport = require('passport');
var bodyparser = require('body-parser');
var expressSession = require('express-session');
var debug = require('debug')('passport-mongo');
var hash = require('bcrypt-nodejs');
var localStrategy = require('passport-local');

var app = express();

//middleware
app.use(bodyparser.urlencoded({
    extended: true
}));
 app.use(bodyparser.json());
//app.use(bodyparser());
app.use(logger('dev'));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/client'));


var newsRoutes = require('./server/routes/newsRoutes');
var articleRoutes = require('./server/routes/articleRoutes');
app.use('/api', newsRoutes);
app.use('/api', articleRoutes)

// configure passport
passport.use(new localStrategy(database.User.authenticate()));
passport.serializeUser(database.User.serializeUser());
passport.deserializeUser(database.User.deserializeUser());

// require routes
var routes = require('./server/routes/auth.js');
app.use('/user/', routes);

app.listen(process.env.PORT || 9000);

