/**
 * Created by mojtaba on 5/9/16.
 */

/**
 * @ngdoc directive
 * @name app.directive.uibAlert
 * @scope
 * @restrict EA
 * @description
 * it make simple modal
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .directive('uibAlert', function () {
            return {
                scope: {
                    type: '@',
                    close: '&'
                },
                transclude: true,
                replace: true,
                restrict: 'EA',
                templateUrl: function(element, attrs) {
                    return attrs.templateUrl || 'app/shared/alert/alert.html';
                },
                controller: 'alertController',
                controllerAs: 'alert'
            };
        });
})());