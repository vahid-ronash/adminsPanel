/**
 * Created by mojtaba on 4/29/16.
 */
/**
 * @ngdoc directive
 * @name app.directive.notificationStep1
 * @scope
 * @restrict E
 * @description
 * notification step 1 directive
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .directive('notificationStep1', function () {
            return {
                scope: {
                    wizard:"="
                },
                restrict: 'EA',
                controller: 'step1Controller',
                controllerAs: 'step1Ctrl',
                templateUrl: 'app/usersPanel/notifications/notifWizardSteps/step1/step1.html'
            };
        });
})());