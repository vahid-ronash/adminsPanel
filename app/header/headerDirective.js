/**
 * Created by mojtaba on 3/13/16.
 */

/**
 * @ngdoc directive
 * @name global.directive:header
 * @scope
 * @restrict E
 * @description
 * it shows header section
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .directive('header', function () {
            return {
                scope: true,
                restrict: 'E',
                //controller: 'headerController',
                //controllerAs: 'headerCtrl',
                templateUrl: 'app/header/headerTemplate.html'
            };
        });
})());