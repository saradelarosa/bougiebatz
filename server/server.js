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
app.use(bodyparser.urlencoded({
    extended: false
}));
 app.use(bodyparser.json());
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

app.get('/likes', (req, res) => {
  console.log("REQ USER", req.user);
  var id = req.user._id;
  database.User.findById(id, function (err, doc) {
    if(err) console.log("Something went wrong");
    console.log(doc);
  })
  .then( (data) => res.status(200).send(data));
})

app.post('/likes', (req, res) => {
  database.User.update(
    { _id: req.user._id },
    { $push: { likedStories: req.body } }  
  )
  .then( () => res.status(201).send(req.data));
});
//End of database stuff

// require routes for authentication
var routes = require('./routes/auth.js');
app.use('/user/', routes);


app.set('port', process.env.PORT || 9000);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});




