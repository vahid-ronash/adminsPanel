/**
 * Created by mojtaba on 3/9/16.
 */

/**
 * @ngdoc directive
 * @name global.directive:userMenu
 * @scope
 * @restrict E
 * @description
 * it is a component to manage applications
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .directive('userMenu', function () {
            return {
                scope: true,
                restrict: 'E',
                controller: 'userMenuController',
                controllerAs: 'userMenuCtrl',
                templateUrl: 'app/accountComponents/userMenu/userMenu.html'
            };
        });
})());