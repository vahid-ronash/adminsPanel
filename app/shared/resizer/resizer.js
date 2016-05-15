/**
 * Created by mojtaba on 5/14/16.
 */

/**
 * @ngdoc directive
 * @name app.directive.resizer
 * @scope
 * @restrict E
 * @description
 * resize element on window resize
 */
/*global angular */
((function () {
    'use strict';
    angular
        .module("app")
        .directive('st-resizer', ['$timeout', '$parse','$window',function ($timeout, $parse,$window) {
            return {
                scope: true,   // optionally create a child scope
                link: function (scope, element, attrs) {
                    var w = angular.element($window);
                    w.bind('resize', function () {
                        var h=w.height()-attrs.offset?parseInt(attrs.offset):0;
                        element.css("height",h+'px');
                    });
                }
            };
        }]);
})());