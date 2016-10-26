angular.module('legacyOwls.savedStory', [])

.controller('savedStoryController', 
  ['$scope', 'SavedArticles',
  function($scope, SavedArticles){
    $scope.savedArticles = [];

    $scope.downloadArticles = function(){

      SavedArticles.getArticlesFromDB()
      .then(function(response) {
        $scope.savedArticles = response;
        console.log($scope.savedArticles);
      });

    }; //end of downloadArticles function

  }
])