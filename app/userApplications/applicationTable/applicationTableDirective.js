/**
 * Created by mojtaba on 3/9/16.
 */

/**
 * @ngdoc directive
 * @name global.directive:applicationTable
 * @scope
 * @restrict E
 *
 * @description
 * it is a component to manage applications
 *
 * @param {object}  field   A field object
 *
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .directive('applicationTable', function () {
            return {
                scope: true,
                restrict: 'E',
                controller: 'applicationTableController',
                controllerAs: 'appsTableCtrl',
                templateUrl: 'app/userApplications/applicationTable/applicationTable.html'
            };
        });
})());