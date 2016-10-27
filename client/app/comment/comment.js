angular.module('legacyOwls.comment', ["pageslide-directive"])

.controller('commentBox',

  ['$scope', '$location', 'Trending','Articles','Comment',
  function($scope, $location, Trending, Articles, Comment){
    $scope.testComment = 'Testing';
    $scope.articleNumber;
    $scope.articleId;
    $scope.idx;
    $scope.articleTitle;



///////////////////////////////
/////For Trending Articles/////
///////////////////////////////
    // $scope.toggle = function(index) {
    //     $scope.checked = !$scope.checked
    //     $scope.idx = index;
    //     console.log($scope.idx)

    //  Trending.getAll().then(function(res){

    //      $scope.articleTitle; //Need to find articleTitle

    //     $scope.articleId = res.data[$scope.idx]._id;

    //   console.log(res.data[$scope.idx]._id);

    //   console.log(res.data);
    //  })
    // }//End of Toggle Button for Article



///////////////////////////////
/////For Latest Articles///////
///////////////////////////////

  $scope.toggle = function(index) {

    //Slide in out Check function.
    $scope.checked = !$scope.checked
    var idx = index;

    $scope.getLatest = function() {
      var params = {
        source: 'all',
        section: $scope.selectedOption,
        time: '24',
        limit: 40,
        offset: 0
      }

      Articles.getLatest(params)
      .then(function(response) {
        // photos is an array that is set to the results array received from API
        $scope.articles = response.data.results.filter(function(photo) {
          // only want the articles that have a photo url - some of them have multimedia = ''
          // $scope.urls[photo.url] ? photo.likes = $scope.urls[photo.url] : photo.likes = 0;
          return photo.multimedia.length === 4;
        });
      console.log($scope.articles[idx], ' articlessss')
      // $scope.articleTitle = $scope.articles[idx].title;
      $scope.article = $scope.articles[idx];

      });
  }()
  }//End of Toggle Button for Latest



    $scope.submitComment = function(){
      var sendToDB = {};
      sendToDB.article = $scope.article;
      var commentData = {}
      commentData.articleTitle = $scope.article.title
      commentData.user = $scope.username = 'Anonymous'; //grab user name
      commentData.comment = $scope.userInputComment;
      sendToDB.commentData = commentData;
      // $scope.inputComment
      Comment.postComment(sendToDB)
    }

    $scope.refreshComment = function(){
      //receive all comment data
      Comment.getAllComment()
      $scope.username = 'grabUserName';
      $scope.userInputComment
      // $scope.inputComment
    }



  setInterval($scope.getLatest, 5*60000);
  }
])