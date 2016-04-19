/**
 * Created by mojtaba on 3/12/16.
 */
/*global angular */
/**
 * @ngdoc controller
 * @name app.controller.signInController
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
            $scope.$root.ErrorContent=thisController.loginError={err:""};
            $timeout(function(){
                if(thisController.data.email.length>3)
                    $("#signPass").focus();
            },1000);


            /**
             * @ngdoc method
             * @name login
             * @methodOf app.controller.signInController
             * @description
             * it pass credential(username,password,rememberMe) data to authService
             */
            thisController.isSigningIn=false;
            thisController.login=function(){
                thisController.isSigningIn=true;
                return $AuthService.login(thisController.data).then(function(result){
                    if(result.error){
                        thisController.loginError.err=result.error.text;
                    }
                    else{
                        $timeout(function(){
                            $location.path('/dashboard');
                        },10);
                    }
                    thisController.isSigningIn=false;
                });
            };

            /**
             * @ngdoc method
             * @name loginAsDemo
             * @methodOf app.controller.signInController
             * @description
             * use demo user and send them to login method
             */
            thisController.loginAsDemo=function(){
                thisController.data.email="demo@pushe.co";
                thisController.data.password="demo";
                // return thisController.login();
            };
        }]);
})());