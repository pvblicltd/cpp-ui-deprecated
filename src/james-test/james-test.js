'use strict';
// Define module & include the cpp.ui as a dependency
angular.module('ui.cpp.james-test', []);

// jamesTest Service Template
angular.module('ui.cpp.james-test').factory('jamesTestService', function() {

  var jamesTest = { };

  return jamesTest;

});

// jamesTest Filter Template
angular.module('ui.cpp.james-test').filter('jamesTestFilter', function () {
  return function (input, arg) {
    return 'output';
  };
});

// jamesTest Directive Template
angular.module('ui.cpp.james-test').directive('jamesTestDirective', function () {
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
    templateUrl: 'james-test/james-test.html',
    link: function (scope, element, attrs, fn) {
      element.text('this is the jamesTest directive');
    }
  };
});


