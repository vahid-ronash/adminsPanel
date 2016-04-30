/**
 * Created by mojtaba on 4/29/16.
 */
/**
 * @ngdoc directive
 * @name app.directive.notificationWizard
 * @scope
 * @restrict EA
 * @description
 * notification wizard directive
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .directive('notificationWizard', function () {
            return {
                scope: {
                    control:'='
                },
                restrict: 'EA',
                controller: 'notificationWizardController',
                controllerAs: 'notifWizardCtrl',
                templateUrl: 'app/usersPanel/notifications/notificationWizard/notificationWizardTemplate.html'
            };
        });
})());