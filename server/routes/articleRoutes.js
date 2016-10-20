var express = require('express');
var router = express.Router();

var Article = require('../models/articleModel')

router.post('/article', function(req, res){
  console.log("++++++++++ RECIEVED REQUEST ++++++++++++++")
  new Article ({
    'articleImageUrl': req.body.articleImageUrl
    // ,
    // 'numberLikes': req.body.numberLikes
  })
  .save(function(err, article){
    res.status(201).send(article);
  });
});

module.exports = router;
