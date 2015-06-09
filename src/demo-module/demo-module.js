'use strict';
// Define module & include the cpp.ui as a dependency
angular.module('ui.cpp.demo-module', []);

// demoModule Service Template
angular.module('ui.cpp.demo-module').factory('demoModuleService', function() {

  var demoModule = { };

  return demoModule;

});

// demoModule Filter Template
angular.module('ui.cpp.demo-module').filter('demoModuleFilter', function () {
  return function (input, arg) {
    return 'output';
  };
});

// demoModule Directive Template
angular.module('ui.cpp.demo-module').directive('demoModuleDirective', function () {
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    // scope: {}, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    // template: '',
    // replace: true,
    // transclude: true,
    templateUrl: 'demo-module/demo-module.html',
    link: function (scope, element, attrs, fn) {
      element.text('this is the demoModule directive');
    }
  };
});


