/**
 * Created by mojtaba on 3/15/16.
 */
/*global angular */
/**
 * @ngdoc controller
 * @name adminsPanel.controller:notificationsController
 * @description
 * control notification page
 */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('notificationsController', ['$scope',function($scope){
            var thisController=this;
            thisController.app=$scope.app;//point to parent scope.app
        }]);
})());