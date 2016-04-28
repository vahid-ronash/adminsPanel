/**
 * Created by mojtaba on 3/12/16.
 */
/**
 * @ngdoc controller
 * @name app.controller.forgetPasswordController
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
            // thisController.app=$scope.app;//point to parent scope.app

            $scope.$root.ErrorContent=thisController.forgetError={err:""};

            /**
             * @ngdoc method
             * @name forgotPassword
             * @methodOf app.controller.forgetPasswordController
             * @description
             * it pass credential(username,password,rememberMe) data to authService
             */
            thisController.data={email:""};
            thisController.forgotPassword=function(){
                return $AuthService.forgotPassword(thisController.data).then(function(result){
                    if(result.error){  thisController.forgetError=result.error;  }
                    else if(result.mail_sent){
                        thisController.successed=true;
                        // thisController.forgetAlarm=$filter('translate')('FORGOT_ALARM');
                        // setTimeout(function(){$location.path('/account/signin');},7000);//redirect to signin after 7 second
                    }
                });
            };
        }]);
})());