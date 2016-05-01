/**
 * Created by mojtaba on 4/29/16.
 */
/**
 * @ngdoc directive
 * @name app.directive.newApplication
 * @scope
 * @restrict EA
 * @description
 * new application wizard directive
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .directive('newApplication', function () {
            return {
                scope: {
                    control:'='
                },
                restrict: 'EA',
                controller: 'newApplicationController',
                controllerAs: 'newAppCtrl',
                templateUrl: 'app/usersPanel/userApplications/newApplication/newApplicationTemplate.html'
            };
        });
})());