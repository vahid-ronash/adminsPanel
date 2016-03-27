/**
 * Created by mojtaba on 3/12/16.
 */
/*global angular */
/**
 * @ngdoc controller
 * @name adminsPanel.controller:signUpController
 * @description
 * control signUp page and make user able to register in pushe.co
 */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('signUpController', ['$scope','AuthService','$location',function($scope,$AuthService,$location){
            var thisController=this;
            thisController.app=$scope.app;//point to parent scope.app
            thisController.user={
                email:"",
                password:"",
                agree:false
            };
            /**
             * @ngdoc method
             * @name login
             * @methodOf module.signUpController
             * @description
             * it pass credential(username,password,rememberMe) data to authService
             */
            thisController.register=function(){
                if(thisController.user.password!==thisController.repassword){
                    thisController.registerError="your password do not match , try again";
                    thisController.user.password="";
                    thisController.repassword="";
                }
                else if(!thisController.user.agree){
                    thisController.registerError="please check you agree the terms";
                }
                else {
                    return $AuthService.register(thisController.user).then(function (result) {
                        if (result.error) {
                            thisController.registerError = result.error;
                        }
                        else {
                            setTimeout(function(){
                                $location.path('/account/signin');
                            });
                        }
                    });
                }
            };
        }]);
})());