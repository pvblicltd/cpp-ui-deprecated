angular.module('app', [
  'ui.utils',
  'ui.router',
  'angularSmoothscroll',
  'ui.cpp',
  'ui.bootstrap',
  'hljs',
  'angular.vertilize',
  'smoothScroll'
]);
angular.module('app')
.config(function($stateProvider, $urlRouterProvider, $locationProvider, hljsServiceProvider){

  $locationProvider.hashPrefix('!');


  $stateProvider
      .state('modules', {
        url:'/modules',
        templateUrl:'modules.html'
      })
      .state('css', {
        url:'/css',
        templateUrl:'css.html'
      })
      .state('layouts', {
        url:'/layouts',
        templateUrl:'layouts.html'
      })
      .state('angularui', {
        url:'/angularui',
        templateUrl:'angularui.html',
        controller: 'angularui'
      })
      .state('getting-started', {
        url: '/',
        templateUrl:'getting-started.html'
      });
    $urlRouterProvider.otherwise('/');
})
.run(function ($rootScope) {
    // set the body class

    $rootScope.breaks = 'fluid';

});
angular.module('app').controller('globalNavDemoCtrl', function ($scope) {

  // Start your demo code here

});
