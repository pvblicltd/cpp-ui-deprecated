'use strict';
// Define module & include the cpp.ui as a dependency
angular.module('ui.cpp.showing-module', []);

// showingModule Service Template
angular.module('ui.cpp.showing-module').factory('showingModuleService', function() {

  var showingModule = { };

  return showingModule;

});

// showingModule Filter Template
angular.module('ui.cpp.showing-module').filter('showingModuleFilter', function () {
  return function (input, arg) {
    return 'output';
  };
});

// showingModule Directive Template
angular.module('ui.cpp.showing-module').directive('showingModuleDirective', function () {
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
    templateUrl: 'showing-module/showing-module.html',
    link: function (scope, element, attrs, fn) {
      element.text('this is the showingModule directive');
    }
  };
});


