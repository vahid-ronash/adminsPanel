/**
 * Created by mojtaba on 4/29/17.
 */
/**
 * @ngdoc directive
 * @name app.directive.notificationStep7
 * @scope
 * @restrict E
 * @description
 * notification step 7 directive
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .directive('notificationStep7', function () {
            return {
                scope: {
                    wizard:"="
                },
                restrict: 'EA',
                controller: 'step7Controller',
                controllerAs: 'step7Ctrl',
                templateUrl: 'app/usersPanel/notifications/notifWizardSteps/step7/step7.html'
            };
        });
})());