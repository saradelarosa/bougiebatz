angular.module('legacyOwls.latest', [])
.controller('latest', ['$scope', 'Articles', 'Trending', 'SavedArticles', function($scope, Articles, Trending, SavedArticles) {

  // Receives different sections as options to see in latest
  $scope.options = Articles.options;
  // Default option is all
  $scope.selectedOption = 'all';

  // getLatest fires on change
  $scope.getLatest = function() {

    // The parameters of the NYT API call
    var params = {
      source: 'all',
      section: $scope.selectedOption, // Option in the dropdown menu
      time: '24', // Gets results from the last 24 hours
      limit: 40, // Limit getting to 40 results
      offset: 0
    }

    // Gets all of the articles that are trending (saved in database)
    Trending.getAll()
    .then(function(res){

      $scope.urls = {};

      // Add the urls that are trending to the $scope.urls object
      res.data.forEach(function(article) {
        if(article.articleData) $scope.urls[article.articleData.url] = article.numberLikes;
      });

      $scope.likes = {};

      // Add the urls of the articles the specific user liked to $scope.likes
      SavedArticles.getLikesFromDB()
      .then(function(response) {
        response.forEach(function(article) {
          $scope.likes[article.url] = true; // Add liked articles to $scope.likes object
        });
      });

      $scope.saved = {};

      // Add the urls of the articles the specific user saved to $scope.saved
      SavedArticles.getArticlesFromDB()
      .then(function(response) {
        response.forEach(function(article) {
          $scope.saved[article.url] = true; // Add saved articles to $scope.saved object
        });
      })

      Articles.getLatest(params)
      .then(function(response) {
        // photos is an array that is set to the results array received from API
        $scope.photos = response.data.results.filter(function(photo) {
<<<<<<< HEAD
          // only want the articles that have a photo url - some of them have multimedia = ''
          // also do not want anything that is part of a Slideshow
=======
          // wanted to know if user has liked articles pulled from API
>>>>>>> latestDoc
          photo.likes = $scope.urls[photo.url] ? $scope.urls[photo.url] : 0;
          // only want the articles that have a photo url - some of them have multimedia = ''
          // also do not want anything that is part of a Slideshow
          return photo.multimedia.length === 4 && photo.item_type !== 'Slideshow';
        });

      });

    });

  }

  // Get the latest news items
  $scope.getLatest();

  // Save the news item
  $scope.saveStory = function(index) {
    var article = $scope.photos[index];
    // Saves the whole article object to the database
    SavedArticles.saveArticleToDB(article)
    .then(function(response) {
      // Add articles to $scope.saved after successful saving to database
      $scope.saved[article.url] = true;
    })
    .catch(function(err) {
      console.error(err);
    });
  }

  // Like the news item
  $scope.like = function(index) {
    var article = $scope.photos[index];
    // Saves the whole article object to the database
    Trending.like(article)
    .then(function(response) {
      // Increments number of likes for the article
      $scope.photos[index].likes++;
    })
    .catch(function(err) {
      console.error(err);
    });

    SavedArticles.saveLikeToDB(article)
    .then(function(response) {
      $scope.likes[article.url] = true;
    })
    .catch(function(err) {
      console.error(err);
    });

  }

  // Look for newest news every 5 minutes
  // setInterval($scope.getLatest, 5*60000);

}]);
