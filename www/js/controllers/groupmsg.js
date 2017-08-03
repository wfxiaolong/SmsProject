
define(['app'],function (app) {
    app.controller('groupmsgCtrl', ['$scope','$ionicPopup', 'Storage', function($scope, $ionicPopup, Storage) {

        // Triggered on a button click, or some other target
        $scope.addcomment = function() {
            $scope.data = {}
            var myPopup = $ionicPopup.show({
                template: '<input type="text" ng-model="data.comment">',
                title: '添加评论',
                scope: $scope,
                buttons: [
                    { text: '取消' },
                    {
                        text: '<b>保存</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            return $scope.data.comment;
                        }
                    }
                ]
            });
            myPopup.then(function(res) {
                alert("已经提交审核。");
                console.log('Tapped!', res);
            });
        };

        $scope.item = Storage.get("tmpContent");

    }]);
});