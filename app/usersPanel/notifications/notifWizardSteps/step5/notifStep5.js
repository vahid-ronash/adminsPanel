/**
 * Created by mojtaba on 4/29/16.
 */
/**
 * @ngdoc directive
 * @name app.directive.notificationStep5
 * @scope
 * @restrict E
 * @description
 * notification step 5 directive
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .directive('notificationStep5', function () {
            return {
                scope: {
                    wizard:"="
                },
                restrict: 'EA',
                controller: 'step5Controller',
                controllerAs: 'step5Ctrl',
                templateUrl: 'app/usersPanel/notifications/notifWizardSteps/step5/step5.html'
            };
        });
})());