angular.module('legacyOwls.photoFactory', [])

.factory('Photo', [function () {

    var pic = {};

    var savePhoto = function (photo) {
        pic = photo;
    }

    var getPhoto = function () {
        return pic;
    }

    return {
        savePhoto: savePhoto,
        getPhoto: getPhoto
    }

}]);