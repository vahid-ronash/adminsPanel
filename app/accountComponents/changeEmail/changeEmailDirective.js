/**
 * Created by mojtaba on 4/27/16.
 */
/**
 * @ngdoc directive
 * @name app.directive.changeEmail
 * @scope
 * @restrict E
 * @description
 * it change user email
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .directive('changeEmail', function () {
            return {
                scope: {
                    cancelCallback:"=",
                    originEmail:"&"
                },
                restrict: 'EA',
                controller: 'changeEmailController',
                controllerAs: 'changeEmailCtrl',
                templateUrl: 'app/accountComponents/changeEmail/changeEmail.html'
            };
        });
})());