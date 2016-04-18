/**
 * Created by mojtaba on 4/13/16.
 */
/**
 * @ngdoc directive
 * @name app.directive.navSide
 * @scope
 * @restrict E
 * @description
 * it manage navigation side
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .directive('navSide', function () {
            return {
                scope: true,
                restrict: 'EA',
                controller: 'navSideController',
                controllerAs: 'navSideCtrl',
                templateUrl: 'app/usersPanel/navSide/navSideTemplate.html'
            };
        });
})());