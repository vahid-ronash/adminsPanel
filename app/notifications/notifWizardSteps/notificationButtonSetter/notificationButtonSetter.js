/**
 * Created by mojtaba on 3/29/16.
 */

/**
 * @ngdoc directive
 * @name app.directive.notificationButtonSetter
 * @scope
 * @restrict E
 * @description
 * it define a button in notification
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .directive('notificationButtonSetter', function () {
            return {
                scope: true,
                restrict: 'E',
                controller: 'notificationButtonController',
                controllerAs: 'notifButtonCtrl',
                templateUrl: 'app/notifications/notifWizardSteps/notificationButtonSetter/notificationButtonTemplate.html'
            };
        });
})());