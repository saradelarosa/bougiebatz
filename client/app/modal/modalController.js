angular.module('legacyOwls.modal', [])

.controller('modalController', ['$scope', 'close', function ($scope, close) {

    $scope.close = function (result) {
        close(result, 500); // close, but give 500ms for bootstrap to animate
    };

}])

.controller('modalMainController', ['$scope', 'ModalService', function ($scope, ModalService) {

    $scope.yesNoResult = null;

    $scope.showYesNo = function () {

        ModalService.showModal({
            templateUrl: "app/modal/modal.html",
            controller: "modalController"
        }).then(function (modal) {
            modal.element.modal();
            modal.close.then(function (result) {
                $scope.yesNoResult = result ? "You said Yes" : "You said No";
            });
        });

    };

}]);