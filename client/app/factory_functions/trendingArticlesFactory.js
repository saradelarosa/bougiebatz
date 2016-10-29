angular.module('legacyOwls.trendingArticlesFactory', [])

    .factory('Trending', ['$http', function($http) {

        //GET request
        var getAll = function(){
            return $http({
                method: 'GET',
                url: '/api/article'
            });
        }

        //POST and PUT requests to the article schema
        var like = function(article) {
            return $http({
                method: 'POST',
                url: '/api/article',
                data: article
            });
        }

        return {
            getAll: getAll,
            like: like
        }

    }]) // end of Trending factory


    .factory('Articles', ['$http', function ($http) {

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

        var getLatest = function (params) {
            return $http({
                method: 'GET',
                url: '/api/Large',
                params: params
            });
        }

        return {
            options: options,
            getLatest: getLatest
        }

    }]);





