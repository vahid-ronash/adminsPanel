/**
 * Created by mojtaba on 4/24/16.
 */
/**
 * @ngdoc directive
 * @name app.directive.changePassword
 * @scope
 * @restrict E
 * @description
 * it help to change password
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .directive('changePassword', function () {
            return {
                scope: {
                    cancelCallback:"="
                },
                restrict: 'EA',
                controller: 'changePasswordController',
                controllerAs: 'changePassCtrl',
                templateUrl: 'app/accountComponents/changePassword/changePassword.html'
            };
        });
})());