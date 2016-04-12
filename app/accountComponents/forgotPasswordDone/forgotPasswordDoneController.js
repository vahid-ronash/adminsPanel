/**
 * Created by mojtaba on 4/10/16.
 */
/*global angular */
/**
 * @ngdoc controller
 * @name app.controller.forgotPasswordDoneController
 * @requires $scope
 * @requires AuthService
 * @requires $location
 * @requires $filter
 * @description
 * user come here by link and set the new password
 */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('forgotPasswordDoneController', ['$scope','AuthService','$location','$filter','$routeParams',function($scope,$AuthService,$location,$filter,$routeParams){
            var thisController=this;
            // thisController.app=$scope.app;//point to parent scope.app


            thisController.repassword="";
            thisController.data={
                password:"",
            };

            /**
             * @ngdoc method
             * @name sendResetPasswordRequest
             * @methodOf app.controller.forgotPasswordDoneController
             * @description
             * send reset password request
             */
            thisController.sendResetPasswordRequest=function(){
                if(thisController.data.password!==thisController.repassword){
                    thisController.error=$filter('translate')('PASS_NOT_MATCH');
                    thisController.data.password="";
                    thisController.repassword="";
                }
                else {
                    if($routeParams.token)thisController.data.token=$routeParams.token;
                    return $AuthService.resetPassword(thisController.data).then(function (result) {
                        if (result.error) {
                            thisController.error = result.error;
                        }
                        else  if(result.reset_completed) {
                            thisController.alert = $filter('translate')('FORGOT_DONE');
                        }
                    });
                }
            }
        }]);
})());