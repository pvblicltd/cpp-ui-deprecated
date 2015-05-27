'use strict';
// Define module & include the cpp.ui as a dependency
angular.module('ui.cpp.global-search', []);

// globalSearch Service Template
angular.module('ui.cpp.global-search').factory('globalSearchService', function() {

  var globalSearch = { };

  return globalSearch;

});

// globalSearch Filter Template
angular.module('ui.cpp.global-search').filter('globalSearchFilter', function () {
  return function (input, arg) {
    return 'output';
  };
});

// globalSearch Directive Template
angular.module('ui.cpp.global-search').directive('globalSearchDirective', function () {
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
    templateUrl: 'global-search/global-search.html',
    link: function (scope, element, attrs, fn) {
      element.text('this is the globalSearch directive');
    }
  };
});


