/**
 * Created by c_r_s_000 on 21/02/2016.
 */
angular.module('navbar', ["ui.router",
    "ui.bootstrap",
    "oc.lazyLoad",
    "ngSanitize"]).controller('navbarController', function ($scope, $state) {
  /*  var payload = $auth.getPayload(); // decoded middle part of JSON Web Token
    if (payload != undefined) {
        $scope.usuarioLogado = payload.name;
    }

    $scope.logout = function () {
        $auth.logout()
            .then(function () {
                $state.go('login', null, {
                    reload: true
                });
            });
    };*/


    $scope.$on('$includeContentLoaded', function() {
        Layout.initHeader(); // init header
    });

    $scope.$on('$includeContentLoaded', function() {
        Layout.initSidebar(); // init sidebar
    });





});

