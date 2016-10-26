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

//These are routers for helper functions that ping the database
//GET and POST requests to the database are written here
app.get('/database', (req, res) => {
  console.log("REQ USER", req.user);
  var id = req.user._id;
  database.User.findById(id, function (err, doc){
    if(err){ console.log("Not appropriately getting info from the database"); }
    console.log(doc);
  })
  .then( (data) => res.status(200).send(data));
});

app.post('/database', (req, res) => {
  database.User.update(
    { _id: req.user._id },
    { $push: { savedStories: req.body } }
  )
  .then( () => res.status(201).send(req.data));
});
//End of database stuff

// require routes
var routes = require('./server/routes/auth.js');
app.use('/user/', routes);

app.listen(process.env.PORT || 9000);

