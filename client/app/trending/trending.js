angular.module('legacyOwls.trending', [])

.controller('trendingController', 
  ['$scope', 'Trending',
  function($scope, Trending){
    $scope.trendingArticles = [];

    $scope.downloadTrendingArticles = function(){

      Trending.getAll()
      .then(function(response) {
        $scope.trendingArticles = response;
        console.log($scope.trendingArticles);
      });

    }; //end of downloadArticles function

  }
])