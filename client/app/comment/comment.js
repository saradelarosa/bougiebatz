angular.module('legacyOwls.comment', ["pageslide-directive"])

.controller('commentBox',
  ['$scope', '$location', 'Comment',
  function($scope, $location, Comment){


    $scope.testComment = 'Testing';
    $scope.articleNumber;
    $scope.toggle = function(index) {
        $scope.checked = !$scope.checked
        $scope.articleNumber = index;
        console.log($scope.articleNumber)

    }



    $scope.submitComment = function(){
      var commentData = {}
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