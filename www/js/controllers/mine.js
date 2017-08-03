define(['app'],function (app) {
    app.controller('mineCtrl', ['$scope', '$ionicPopup', function($scope, $ionicPopup) {
        var pages = "#/tab/home+#/tab/message+#/tab/add+#/tab/friend+#/tab/mine";
        $scope.$on('$ionicView.afterEnter', function() {
            if (pages.indexOf(location.hash) > -1) {
                var tabs =document.getElementsByTagName('ion-tabs');
                angular.element(tabs).removeClass("tabs-item-hide");
            }
        });
        $scope.$on('$ionicView.beforeLeave', function() {
            if (pages.indexOf(location.hash) > -1) return;
            var tabs =document.getElementsByTagName('ion-tabs');
            angular.element(tabs).addClass("tabs-item-hide");
        });

        $scope.feedback = function() {
            var alertPopup = $ionicPopup.alert({
                title: "温馨提示",
                template: "请拨打当地客服电话: 4000-500-500"
            });
            alertPopup.then(function(res) {
                console.log('Thank you for not eating my delicious ice cream cone');
            });
        }
                        
    }]);
});
    
