var express = require('express');
var path = require('path');
var cors = require('cors');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var database = require('./server/models/userModel');
var passport = require('passport');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var debug = require('debug')('passport-mongo');
var hash = require('bcrypt-nodejs');
var path = require('path');
var localStrategy = require('passport-local');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// pass the passport middleware
app.use(logger('dev'));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


var newsRoutes = require('./server/routes/newsRoutes');
// var userRoutes = require('./server/routes/userRoutes');
var articleRoutes = require('./server/routes/articleRoutes');
app.use('/api', newsRoutes);
// app.use('/api', userRoutes);
app.use('/api', articleRoutes)

// configure passport
passport.use(new localStrategy(database.User.authenticate()));
passport.serializeUser(database.User.serializeUser());
passport.deserializeUser(database.User.deserializeUser());

// require routes
var routes = require('./server/routes/auth.js');
app.use('/user/', routes);


// webpack loads index.html, looks for script src
app.get('/public/bundle.js', function(req, res){
  res.sendFile(path.join(__dirname, 'client/public/bundle.js'));
});

app.get('/styles/style.css', function(req, res){
  res.sendFile(path.join(__dirname, 'client/styles/style.css'));
});

app.get('*', function(req, res){
  console.log('REQ.URL IS: ', req.url);
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.listen(process.env.PORT || 9000);

