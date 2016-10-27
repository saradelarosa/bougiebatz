var express = require('express');
var router = express.Router();

var Article = require('../models/articleModel');

router.post('/article', function(req, res){
  console.log("++++++++++ RECIEVED REQUEST POST to /article ++++++++++++++",req.body);

  var likedArticle = new Article({
    'numberLikes': 1,
    'articleData': req.body
  });
  
  likedArticle.save(function(err) {
    if (err) console.log('Error on save!')
    else res.sendStatus(201)
  })

});

router.put('/article', function(req, res){
  console.log("++++++++++ RECIEVED REQUEST PUT to /article ++++++++++++++",req);

  Article.update(
    { _id: req._id },
    { $inc: { numberLikes: 1 } }
  )

});

router.get('/article', function(req, res){
  console.log("++++++++++ RECIEVED GET TO/article +++++++++++++");
  //get all links from the db
  Article.find({}, function(err, urls) {
    //urls is an array of objects with properties of articleImageUrl
    // res.send(urls.map(function(url) {
    //   return url.articleImageUrl;
    // }));
    res.send(urls);
  });
});

module.exports = router;
