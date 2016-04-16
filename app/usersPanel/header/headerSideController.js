/**
 * Created by mojtaba on 4/13/16.
 */
/**
 * @ngdoc controller
 * @name app.controller.headerSideController
 * @description
 * it fill the nav side
 */
/*global angular */
((function () {
    'use strict';
    angular
        .module("app")
        .controller('headerSideController', ['$scope','$filter','$state', function ($scope,$filter,$state) {
            var thisController = this;
            thisController.state=$filter('translate')($state.current.pageName);
            $scope.$root.$on('$stateChangeStart', function (event,toState,toParams) {
                thisController.state=$filter('translate')(toState.pageName);
            });
        }]);
})());