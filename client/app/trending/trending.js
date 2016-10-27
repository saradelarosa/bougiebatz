angular.module('legacyOwls.trending', [])

.controller('trendingController', 
  ['$scope', 'Trending',
  function($scope, Trending){
    $scope.trendingArticles = [];

    $scope.downloadTrendingArticles = function(){

      Trending.getAll()
      .then(function(response) {
        $scope.trendingArticles = response.data;
        $scope.trendingArticles.sort((a, b) => { //Have to sort by number of likes decreasing
          a = a.numberLikes;
          b = b.numberLikes;
          return b-a;
        });
        console.log($scope.trendingArticles);
      });

    }; //end of downloadTrendingArticles function

    $scope.downloadTrendingArticles();

  }
])