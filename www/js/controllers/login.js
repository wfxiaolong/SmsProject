define(['app'],function (app) {
    app.controller('loginCtrl', ['$scope','$ionicPopup', function($scope, $ionicPopup) {
        $scope.$on("$ionicView.beforeEnter", function(){
            var dm_auth = "xx";
            if (dm_auth) {
                $scope.user = {
                    name:dm_auth.phone,
                    password:''
                }
            } else {
                $scope.user = {
                    name:'',
                    password:''
                }
            }
        });

        $scope.login = function() {
            var user_name = $scope.user.name,
                password = $scope.user.password;
            if (!user_name || user_name == '') {
                $scope.err_txt = '用户名不能为空';
                return;
            }
            if (!password || password == '') {
                $scope.err_txt = '密码不能为空';
                return;
            }
            if (user_name == "test" & password == "test") {
                location.href = "#/tab/home";
            } else {
                $scope.err_txt = '密码错误';
            }
        };

        $scope.showPassword = function() {
            $scope.show_psd = !$scope.show_psd
        }

    }]);
});