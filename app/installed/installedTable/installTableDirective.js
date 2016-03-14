/**
 * Created by mojtaba on 3/14/16.
 */

/**
 * @ngdoc directive
 * @name global.directive:installTable
 * @scope
 * @restrict E
 * @description
 * it is a component to manage installed application on devices
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .directive('installTable', function () {
            return {
                scope: true,
                restrict: 'E',
                controller: 'installedTableController',
                controllerAs: 'installTableCtrl',
                templateUrl: 'app/installed/installedTable/installedTable.html'
            };
        });
})());