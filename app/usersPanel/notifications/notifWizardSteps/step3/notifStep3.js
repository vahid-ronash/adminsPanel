/**
 * Created by mojtaba on 4/29/16.
 */
/**
 * @ngdoc directive
 * @name app.directive.notificationStep3
 * @scope
 * @restrict E
 * @description
 * notification step 3 directive
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .directive('notificationStep3', function () {
            return {
                scope: {
                    wizard:"="
                },
                restrict: 'EA',
                controller: 'step3Controller',
                controllerAs: 'step3Ctrl',
                templateUrl: 'app/usersPanel/notifications/notifWizardSteps/step3/step3.html'
            };
        });
})());