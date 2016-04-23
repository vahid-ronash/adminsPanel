/**
 * Created by mojtaba on 3/29/16.
 */

/**
 * @ngdoc directive
 * @name app.directive.notificationAction
 * @scope
 * @restrict E
 * @description
 * it select a notification Action
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .directive('notificationAction', function () {
            return {
                scope: true,
                restrict: 'E',
                controller: 'notificationActionController',
                controllerAs: 'notifActionCtrl',
                templateUrl: 'app/usersPanel/notifications/notifWizardSteps/notificationAction/notificationActionTemplate.html'
            };
        });
})());