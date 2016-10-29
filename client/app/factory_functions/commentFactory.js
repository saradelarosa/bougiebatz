angular.module('legacyOwls.commentFactory', [])

.factory('Comment', ['$http', function ($http) {
    // console.log('comment called')
    var postComment = function (data) {
        // console.log(data , ' comment factory data**');
        return $http({
            method: 'POST',
            url: 'api/comment',
            data: data
        })
    }

    var getAllComment = function (article) {
        // console.log('getallcomment called');
        return $http({
            method: 'GET',
            url: 'api/comment',
            params: {article: article}
        });
    }

    return {
        postComment: postComment,
        getAllComment: getAllComment
    }

}]);