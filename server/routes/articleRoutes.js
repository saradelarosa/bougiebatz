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
        'articleData': req.body,
        'commentData': []
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



// router.post('/comment', function(req, res){
//   console.log(req.body, ' req.body /comment++');
//   console.log(req.body.articleTitle, ' req.bodytitle++');
//   console.log(req.body.comment, ' req.body.comment++');


//     Article.findOne({"articleData.title": req.body.title}, function(err,article){
//     if(err){
//       //error in finding
//       res.json(err);
//     } else if(article === null){
//       //means article not in database, so add
//       console.log('inside findOne++++++++++')
//       var newComment = new Article({
//         $push: {
//         'commentData': {
//           'title': req.body.articleTitle,
//           'comment': req.body.comment
//         }
//       }
//       });


//     }
//   })
// })
var articleId_;
router.post('/comment', function(req, res){

  Article.findOne({"articleData.title": req.body.article.title}, function(err,article){
    if(err){
      //error in finding
      res.json(err);
    } else if(article === null){
      //means article not in database, so add
      var commentArticle = new Article({
        'numberLikes': 0,
        'articleData': req.body.article,
        'commentData': req.body.commentData

      });
      commentArticle.save(function(err) {
        if (err) console.log('Error on save!')
        else res.sendStatus(201)
      })
    } else {
      // console.log("YOU ARE HERE!!!",article)
      var id = article._id.toString();
      articleId_ = id;

      Article.findOneAndUpdate(
        { _id: id },
        { $push: { commentData: req.body.commentData } },
        { new: true },
        function(err,success){
          if(err) { console.log(err); }
          console.log("Success Comment added!");
        }
      )
    }
  })

});

router.get('/comment', function(req, res){

    var articleObject = JSON.parse(req.query.article)
    // console.log(articleObject)

    Article.find({}, function(err, found) {

      //Filtering array of Article objects by Title
      var filtered = found.filter(function(article){
        console.log(articleObject.title)
        console.log('$$$$$$$$$$$$$$$$$$')
        return article.articleData.title === articleObject.title;
      })
      if(filtered.length !== 0){
        res.send(filtered[0].commentData);
      }

      if(filtered.length === 0){
        var commentArticle = new Article({
          'numberLikes': 0,
          'articleData': articleObject,
          'commentData': ''
      });
      commentArticle.save(function(err) {
        if (err) console.log('Error on save!')
        else res.sendStatus(201)
      })
      }

  });

})




module.exports = router;