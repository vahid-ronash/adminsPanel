/**
 * Created by mojtaba on 3/14/16.
 */

/**
 * @ngdoc directive
 * @name app.directive.installTable
 * @scope
 * @restrict E
 * @description
 * it is a component to manage notification
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .directive('notificationTable', function () {
            return {
                scope: true,
                restrict: 'E',
                controller: 'notificationTableController',
                controllerAs: 'notifTableCtrl',
                templateUrl: 'app/usersPanel/notifications/notificationTable/notificationTable.html'
            };
        });
})());