/**
 * Created by mojtaba on 3/17/16.
 */
/*global angular */
/**
 * @ngdoc controller
 * @name adminsPanel.controller:changePasswordController
 * @description
 * control change password page
 */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('changePasswordController', ['$scope','AuthService','$location','$filter',function($scope,$AuthService,$location,$filter){
            var thisController=this;
            thisController.app=$scope.app;//point to parent scope.app


            thisController.repassword="";
            thisController.data={
                currentPassword:"",
                newPassword:""
            };

            /**
             * @ngdoc method
             * @name sendChangeRequest
             * @methodOf module.changePasswordController
             * @description
             * send reset password request data
             */
            thisController.sendChangeRequest=function(){
                if(thisController.data.currentPassword!==thisController.repassword){
                    thisController.error=$filter('translate')('PASS_NOT_MATCH');
                    thisController.data.currentPassword="";
                    thisController.repassword="";
                }
                else {
                    return $AuthService.changePassword(thisController.data).then(function (result) {
                        if (result.error) {
                            thisController.error = result.error;
                        }
                        else {
                            var alertText=thisController.alert  = $filter('translate')('PASS_CHANGED');
                            var sec=7;
                            setInterval(function(){
                                thisController.alert=alertText+(sec--);
                                if(sec<1)$location.path('/account/home');//redirect to home after 7 second
                            },1000);
                        }
                    });
                }
            }
        }]);
})());