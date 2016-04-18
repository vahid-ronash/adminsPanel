/**
 * Created by mojtaba on 4/13/16.
 */
/**
 * @ngdoc directive
 * @name app.directive.headerSide
 * @scope
 * @restrict E
 * @description
 * it manage header side
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .directive('headerSide', function () {
            return {
                scope: true,
                restrict: 'EA',
                controller: 'headerSideController',
                controllerAs: 'headerSideCtrl',
                templateUrl: 'app/usersPanel/header/header.html'
            };
        });
})());