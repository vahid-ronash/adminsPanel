/**
 * Created by mojtaba on 3/17/16.
 */
/*global angular */
/**
 * @ngdoc controller
 * @name app.controller.changePasswordController
 * @requires $scope
 * @requires AuthService
 * @requires $location
 * @requires $filter
 * @description
 * control change password page
 */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('changePasswordController', ['$scope','AuthService','$location','$filter','$state',function($scope,$AuthService,$location,$filter,$state){
            var thisController=this;
            // thisController.app=$scope.app;//point to parent scope.app


            thisController.repassword="";
            thisController.data={
                old_password:"",
                password:""
            };

            thisController.passwordChange=function(){
                var pass=thisController.data.password;
                var $element=$scope.form.password;
                thisController.controlStrength.onChange(pass,$element);
            };
            
            thisController.cancelCallback=function(){
                $scope.cancelCallback();
            };
            /**
             * @ngdoc method
             * @name app.controller.changePasswordController#sendChangeRequest
             * @methodOf app.controller.changePasswordController
             * @description
             * send reset password request data
             */

            thisController.sendChangeRequest=function(){
                $scope.$root.ErrorContent=thisController.error={err:""};
                if(thisController.data.password!==thisController.repassword){
                    thisController.error=$filter('translate')('PASS_NOT_MATCH');
                    thisController.data.password="";
                    thisController.repassword="";
                }
                else {
                    return $AuthService.changePassword(thisController.data).then(function (result) {
                        if (result.error) {
                            thisController.error = result.error.text;
                        }
                        else  if(result.changed) {
                            thisController.successed=true;
                            var alertText=thisController.alert  = $filter('translate')('PASS_CHANGED');
                            // evt.preventDefault();
                            // var sec=7;
                            // setInterval(function(){
                            //     thisController.alert=alertText+(sec--);
                            //     if(sec<1){$location.path('/account/home');}//redirect to home after 7 second
                            // },1000);
                        }
                    },$scope.errorAlert);
                }
            }
        }]);
})());