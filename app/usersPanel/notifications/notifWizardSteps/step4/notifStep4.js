/**
 * Created by mojtaba on 4/29/16.
 */
/**
 * @ngdoc directive
 * @name app.directive.notificationStep4
 * @scope
 * @restrict E
 * @description
 * notification step 4 directive
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .directive('notificationStep4', function () {
            return {
                scope: {
                    wizard:"="
                },
                restrict: 'EA',
                controller: 'step4Controller',
                controllerAs: 'step4Ctrl',
                templateUrl: 'app/usersPanel/notifications/notifWizardSteps/step4/step4.html'
            };
        });
})());