/**
 * Created by mojtaba on 4/27/16.
 */
/*global angular */
/**
 * @ngdoc controller
 * @name app.controller.changeEmailController
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
        .controller('changeEmailController', ['$scope','AuthService','$filter','$state',function($scope,$AuthService,$filter,$state){
            var thisController=this;

            thisController.data={
                email:"",
            };

            /**
             * @ngdoc method
             * @name changeEmail
             * @methodOf app.controller.changeEmailController
             * @description
             * send reset password request data
             */
            thisController.submitChangeEmail=function(){
                $scope.$root.ErrorContent=thisController.error={err:""};
                
            };

            thisController.cancelCallback=function(){
                $scope.cancelCallback();
            };
        }]);
})());