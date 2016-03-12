/**
 * Created by mojtaba on 3/12/16.
 */
/*global angular */
/**
 * @ngdoc controller
 * @name adminsPanel.controller:signInController
 * @description
 * control sign in page and make user able to login
 */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('signInController', ['$scope','AuthService','$location',function($scope,$AuthService,$location){
            var thisController=this;
            thisController.app=$scope.app;//point to parent scope.app
            thisController.credential={
                username:"",
                password:"",
                rememberMe:true
            };
            /**
             * @ngdoc method
             * @name login
             * @methodOf module.signInController
             * @description
             * it pass credential(username,password,rememberMe) data to authService
             */
            thisController.login=function(){
                return $AuthService.login(thisController.credential).then(function(result){
                    if(result.error){
                        thisController.loginError=result.error;
                    }
                    else{
                        $location.path('/home');
                    }
                });
            }
        }]);
})());