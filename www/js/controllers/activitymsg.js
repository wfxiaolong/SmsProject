define(['app'],function (app) {
    app.controller('activitymsgCtrl', ['$scope','$ionicPopup', 'Storage', function($scope, $ionicPopup, Storage) {
        $scope.goBack = function() {
            location.href = "#tab/home";
        };

    }]);
   
});