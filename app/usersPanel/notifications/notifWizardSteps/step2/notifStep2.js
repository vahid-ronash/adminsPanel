/**
 * Created by mojtaba on 4/29/16.
 */
/**
 * @ngdoc directive
 * @name app.directive.notificationStep2
 * @scope
 * @restrict E
 * @description
 * notification step 2 directive
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .directive('notificationStep2', function () {
            return {
                scope: {
                    wizard:"="
                },
                restrict: 'EA',
                controller: 'step2Controller',
                controllerAs: 'step2Ctrl',
                templateUrl: 'app/usersPanel/notifications/notifWizardSteps/step2/step2.html'
            };
        });
})());