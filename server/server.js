var express = require('express');
var bodyparser = require('body-parser');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

var debug = require('debug')('passport-mongo');
var hash = require('bcrypt-nodejs');
var path = require('path');
var passport = require('passport');
var localStrategy = require('passport-local');

//userschema / model
var database = require('./models/userModel.js');

var app = express();

//middleware
app.use(bodyparser.urlencoded({extended: true}));
// app.use(bodyparser.json();
app.use(bodyparser());
app.use(logger('dev'));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/../client'));


var newsRoutes = require('./routes/newsRoutes');
var articleRoutes = require('./routes/articleRoutes');
app.use('/api', newsRoutes);
app.use('/api', articleRoutes);

// configure passport
passport.use(new localStrategy(database.User.authenticate()));
passport.serializeUser(database.User.serializeUser());
passport.deserializeUser(database.User.deserializeUser());

// require routes
var routes = require('./routes/auth.js');
app.use('/user/', routes);


app.set('port', process.env.PORT || 9000);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});




