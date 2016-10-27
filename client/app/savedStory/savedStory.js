angular.module('legacyOwls.savedStory', [])

.controller('savedStoryController', 
  ['$scope', 'SavedArticles',
  function($scope, SavedArticles){
    $scope.savedArticles = [];

    $scope.downloadArticles = function(){

      SavedArticles.getArticlesFromDB()
      .then(function(response) {
        console.log("response to getting articles???",response);
        $scope.savedArticles = response;
        console.log($scope.savedArticles);
      });

    }; //end of downloadArticles function

    //run downloadArticles
    $scope.downloadArticles();

  }
])