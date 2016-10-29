angular.module('legacyOwls.savedArticlesFactory', [])

.factory('SavedArticles', ['$http', function ($http) {

    var getArticlesFromDB = function () {
        return $http({
            method: 'GET',
            url: '/database'
        })
            .then(function (resp) {
                return resp.data.savedStories;
            });
    }

    var saveArticleToDB = function (article) {
        return $http({
            method: 'POST',
            url: '/database',
            data: article
        });
    }

    var getLikesFromDB = function () {
        return $http({
            method: 'GET',
            url: '/likes',
        })
            .then(function (resp) {
                return resp.data.likedStories;
            })
    }

    var saveLikeToDB = function (url) {
        return $http({
            method: 'POST',
            url: '/likes',
            data: url
        });
    }

    return {
        getArticlesFromDB: getArticlesFromDB,
        saveArticleToDB: saveArticleToDB,
        getLikesFromDB: getLikesFromDB,
        saveLikeToDB: saveLikeToDB
    }

}]);//end of SavedArticles factory
