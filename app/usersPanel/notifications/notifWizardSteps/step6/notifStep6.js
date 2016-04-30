/**
 * Created by mojtaba on 4/29/16.
 */
/**
 * @ngdoc directive
 * @name app.directive.notificationStep6
 * @scope
 * @restrict E
 * @description
 * notification step 6 directive
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .directive('notificationStep6', function () {
            return {
                scope: {
                    wizard:"="
                },
                restrict: 'EA',
                controller: 'step6Controller',
                controllerAs: 'step6Ctrl',
                templateUrl: 'app/usersPanel/notifications/notifWizardSteps/step6/step6.html'
            };
        });
})());