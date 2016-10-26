angular.module('legacyOwls.factory', {})
.factory('Articles', ['$http', function($http) {

  var options = [
    'all',
    'arts',
    'blogs',
    'books',
    'briefing',
    'business',
    'food',
    'health',
    'magazine',
    'movies',
    'multimedia',
    'multimedia/photos',
    'n.y. / region',
    'obituaries',
    'opinion',
    'public editor',
    'real estate',
    'science',
    'sports',
    'style',
    'sunday review',
    'technology',
    'theater',
    'today\'s paper',
    'travel',
    'u.s.',
    'washington',
    'week in review',
    'well',
    'world',
    'your money'
  ];

  var getLatest = function(params) {
    return $http({
      method: 'GET',
      url: '/api/Large',
      params: params
    })
  }

  return {
    options: options,
    getLatest: getLatest
  }

}])