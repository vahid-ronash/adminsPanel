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
        .controller('signInController', ['$scope','AuthService','$location','$timeout',function($scope,$AuthService,$location,$timeout){
            var thisController=this;
            thisController.app=$scope.app;//point to parent scope.app
            thisController.credential={
                email:"",
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
                        $timeout(function(){
                            $location.path('/home');
                        },10);
                    }
                });
            };

            /**
             * @ngdoc method
             * @name loginAsDemo
             * @methodOf module.signInController
             * @description
             * use demo user and send them to login method
             */
            thisController.loginAsDemo=function(){
                // thisController.credential.email="demo@pushe.co";
                thisController.credential.email="q@q.cc";
                // thisController.credential.password="1234";
                thisController.credential.password="a";
                return thisController.login();
            };
        }]);
})());