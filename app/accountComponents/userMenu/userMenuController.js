/**
 * Created by mojtaba on 3/12/16.
 */
/*global angular */
/**
 * @ngdoc controller
 * @name adminsPanel.controller:userMenuController
 * @description
 * control user menu
 */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('userMenuController', ['$scope','AuthService','$location','$timeout',function($scope,$AuthService,$location,$timeout){
            var thisController=this;
            // thisController.app=$scope.app;//point to parent scope.app
            thisController.userEmail=$AuthService.getUserEmail();

            /**
             * @ngdoc method
             * @name logout
             * @methodOf module.userMenuController
             * @description
             * send logout request to server
             */
            thisController.logout=function(){
                return $AuthService.logout().then(function(){
                    $timeout(function(){
                        $location.path('/account/signin');
                    },10);
                });
            };
        }]);
})());