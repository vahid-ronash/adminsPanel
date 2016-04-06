/**
 * Created by mojtaba on 3/12/16.
 */
/**
 * @ngdoc controller
 * @name adminsPanel.controller:forgetPasswordController
 * @description
 * control a password recovery page
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('forgotPasswordController', ['$scope','AuthService','$location','$filter',function($scope,$AuthService,$location,$filter){
            var thisController=this;
            thisController.app=$scope.app;//point to parent scope.app
            /**
             * @ngdoc method
             * @name forgotPassword
             * @methodOf module.forgetPasswordController
             * @description
             * it pass credential(username,password,rememberMe) data to authService
             */
            thisController.request.email="";
            thisController.forgotPassword=function(){
                return $AuthService.forgotPassword(thisController.request).then(function(result){
                    if(result.error){  thisController.forgetError=result.error;  }
                    else{
                        thisController.forgetAlarm=$filter('FORGOT_ALARM'|translate);
                        setTimeout(function(){$location.path('/account/signin');},7000);//redirect to signin after 7 second
                    }
                });
            };
        }]);
})());