angular.module("global-nav/global-nav.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("global-nav/global-nav.html",
    "<div class=\"globalNav\">\n" +
    "  <img height=\"20\" ng-src=\"{{logoSrc}}\" />\n" +
    "</div>\n" +
    "");
}]);
