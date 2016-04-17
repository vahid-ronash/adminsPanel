/**
 * Created by mojtaba on 4/16/16.
 */
/*global angular */
/**
 * @ngdoc directive
 * @name app.directive.passwordStrength
 * @scope
 * @restrict E
 * @description
 * set password strength
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .directive('passwordStrength', function () {
            return {
                scope: {
                    password:'='
                },
                restrict: 'E',
                controller: 'passwordStrengthController',
                controllerAs: 'passStrengthCtrl',
                templateUrl: 'app/accountComponents/passwordStrength/passwordStrengthTemplate.html'
            };
        });
})());