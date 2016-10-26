angular.module('legacyOwls.latest', [])
.controller('latest', ['$scope', 'Articles', 'Trending', 'SavedArticles', function($scope, Articles, Trending, SavedArticles) {

  $scope.options = Articles.options;
  $scope.selectedOption = 'all';

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
      $scope.photos = response.data.results.filter(function(photo) {
        return photo.multimedia.length === 4;
      });
    });

    // Write out function to get all articles saved

  }

  // Get the latest news items
  $scope.getLatest();

  // Save the news item
  $scope.saveStory = function(index) {
    var article = $scope.photos[index];
    SavedArticles.saveArticleToDB(article)
    .then(function(response) {
      console.log("Success");
    })
    .catch(function(err) {
      console.error(err);
    });
  }

  // Like the news item
  $scope.like = function(index) {
    var article = $scope.photos[index];
    Trending.like(article)
    .then(function(response) {
      console.log("Success");
    })
    .catch(function(err) {
      console.error(err);
    });
  }

  // Look for newest news every 5 minutes
  setInterval($scope.getLatest, 5*60000); 

}]);
