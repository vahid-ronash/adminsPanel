/**
 * Created by mojtaba on 3/12/16.
 */
/**
 * @ngdoc controller
 * @name adminsPanel.controller:forgetPasswordController
 * @description
 * control a password recovery page
 */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('forgetPasswordController', ['$scope','AuthService','$location',function($scope,$AuthService,$location){
            var thisController=this;
            thisController.app=$scope.app;//point to parent scope.app
            thisController.request={
                email:""
            };
            /**
             * @ngdoc method
             * @name forgotPassword
             * @methodOf module.forgetPasswordController
             * @description
             * it pass credential(username,password,rememberMe) data to authService
             */
            thisController.forgotPassword=function(){
                return $AuthService.forgotPassword(thisController.request).then(function(result){
                    if(result.error){
                        thisController.forgetError=result.error;
                    }
                    else{
                        thisController.forgetAlarm="we sent you an email please check it out";
                        setTimeout(function(){$location.path('/account/signin')},7000);//redirect to signin after 7 second
                    }
                });
            };
        }]);
})());