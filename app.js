angular.module('app', [
  'ngRoute',
  'angularSmoothscroll',
  'ui.cpp',
  'ui.bootstrap',
  'ui.utils',
  'hljs'
]);
angular.module('app')
  .config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('!');
    $routeProvider
      .when('/modules', {
        templateUrl:'modules.html'
      })
      .when('/css', {
        templateUrl:'css.html'
      })
      .when('/layouts', {
        templateUrl:'css.html'
      })
      .otherwise({
        redirectTo:'/',
        templateUrl:'getting-started.html'
      });
  })
  .config(function (hljsServiceProvider) {
    hljsServiceProvider.setOptions({
      // replace tab with 4 spaces
      tabReplace: '  '
    });
  });
angular.module('app').controller('demoModuleDemoCtrl', function ($scope) {

  // Start your demo code here

});
angular.module('app').controller('globalNavDemoCtrl', function ($scope) {

  // Start your demo code here

});
angular.module('app').controller('globalSearchDemoCtrl', function ($scope) {

  // Start your demo code here

});
angular.module('app').controller('jamesTestDemoCtrl', function ($scope) {

  // Start your demo code here

});
angular.module('app').controller('showingModuleDemoCtrl', function ($scope) {

  // Start your demo code here

});
