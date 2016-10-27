var express = require('express');
var router = express.Router();

var Article = require('../models/articleModel');

router.post('/article', function(req, res){
  console.log("++++++++++ RECIEVED REQUEST POST to /article ++++++++++++++");

  Article.findOne({"articleData.title": req.body.title}, function(err,article){
    if(err){ 
      //error in finding
      res.json(err);
    } else if(article === null){ 
      //means article not in database, so add
      var likedArticle = new Article({
        'numberLikes': 1,
        'articleData': req.body
      });
      likedArticle.save(function(err) {
        if (err) console.log('Error on save!')
        else res.sendStatus(201)
      })      
    } else {
      console.log("YOU ARE HERE!!!",article)
      var id = article._id.toString();
      Article.findOneAndUpdate(
        { _id: id },
        { $inc: { numberLikes: 1 } },
        { new: true },
        function(err,success){
          if(err) { console.log(err); }
          console.log("Success incrementing Like!");
        }
      )
    } 
  })

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
