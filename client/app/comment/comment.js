angular.module('legacyOwls.comment', ["pageslide-directive"])

.controller('commentBox',
  ['$scope', '$location', 'Trending','Comment',
  function($scope, $location, Trending, Comment){
    $scope.testComment = 'Testing';
    $scope.articleNumber;
    $scope.articleId;


    $scope.toggle = function(index) {
        $scope.checked = !$scope.checked
        $scope.idx = index;
        console.log($scope.idx)



     Trending.getAll().then(function(res){
        $scope.articleId = res.data[$scope.idx]._id;



      console.log(res.data[$scope.idx]._id);

      console.log(res.data);
     })



    }



    $scope.submitComment = function(){
      var commentData = {}
      commentData.articleId = $scope.articleId
      commentData.user = $scope.username = 'sampleUser'; //grab user name
      commentData.comment = $scope.userInputComment;
      // $scope.inputComment
      Comment.postComment(commentData)
    }


    $scope.refreshComment = function(){
      //receive all comment data
      Comment.getAllComment()
      $scope.username = 'grabUserName';
      $scope.userInputComment
      // $scope.inputComment
    }
    $scope.refreshComment = function(){
      //receive all comment data
    }
  }
])