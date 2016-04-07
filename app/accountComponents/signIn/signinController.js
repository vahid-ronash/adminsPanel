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
            thisController.data={
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
                return $AuthService.login(thisController.data).then(function(result){
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
                thisController.data.email="q@q.cc";
                thisController.data.password="a";
                return thisController.login();
            };
        }]);
})());