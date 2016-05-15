/**
 * Created by mojtaba on 3/17/16.
 */
/*global angular */
/**
 * @ngdoc controller
 * @name app.controller.changePasswordPageController
 * @requires $scope
 * @requires AuthService
 * @requires $location
 * @requires $filter
 * @description
 * control change password page
 */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('changePasswordPageController', ['$scope','AuthService','$location','$filter','$state',function($scope,$AuthService,$location,$filter,$state){
            var thisController=this;
            // thisController.app=$scope.app;//point to parent scope.app
            
        }]);
})());