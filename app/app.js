'use strict';

// Declare app level module which depends on views, and components
var MetronicApp = angular.module('myApp', [
  "ui.router",
  "ui.bootstrap",
  "oc.lazyLoad",
  "ngSanitize",
  "navbar",
  "home"
]);

/* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
MetronicApp.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
  $ocLazyLoadProvider.config({
    cssFilesInsertBefore: 'ng_load_plugins_before' // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
  });
}]);

//AngularJS v1.3.x workaround for old style controller declarition in HTML
MetronicApp.config(['$controllerProvider', function($controllerProvider) {
  // this option might be handy for migrating old apps, but please don't use it
  // in new ones!
  $controllerProvider.allowGlobals();
}]);

/* Setup global settings */
MetronicApp.factory('settings', ['$rootScope', function($rootScope) {
  // supported languages
  var settings = {
    layout: {
      pageSidebarClosed: false, // sidebar state
      pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
    },
    layoutImgPath: Metronic.getAssetsPath() + 'admin/layout/img/',
    layoutCssPath: Metronic.getAssetsPath() + 'admin/layout/css/'
  };

  $rootScope.settings = settings;

  return settings;
}]);

/* Setup App Main Controller */
MetronicApp.controller('AppController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.$on('$viewContentLoaded', function() {
        Metronic.initComponents(); // init core components
        //Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive
    });


}]);


MetronicApp.config(['$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider){
  $stateProvider
      .state('modulo', {
        abstract: true,
        url: '/modulo',
        templateUrl: 'modulo/index.html',
        resolve: {
          /*authenticated: ['$location', '$auth', function ($location, $auth) {
           if (!$auth.isAuthenticated()) {
           return $location.path('/login');
           }
           }]*/
        }
      })
      .state('modulo.home',{
        url:'/home',
        templateUrl:'modulo/home.html',
        controller: 'homeController'
      });

  $urlRouterProvider.otherwise('/modulo/home');

}])
