//Module that controls trending.html page
angular.module('legacyOwls.trending', [])

.controller('trendingController', 
  ['$scope', 'Trending',
  function($scope, Trending){
    //represents data to be rendered
    //this will be all data from the "liked" database
    //that will be sorted then filtered after downloadTrendingArticles is called
    $scope.trendingArticles = []; 

    $scope.downloadTrendingArticles = function(){

      //download all "liked" articles from the "liked" database
      Trending.getAll()
      .then(function(response) {
        $scope.trendingArticles = response.data
        .sort( function(a, b) { //Have to sort by number of likes decreasing
          a = a.numberLikes;
          b = b.numberLikes;
          return b-a;
        }).filter(function(article){ //Filters out articles w/zero likes
          return (article.numberLikes > 0);
        });
      });

    }; //end of downloadTrendingArticles function

    $scope.downloadTrendingArticles();

  }
])