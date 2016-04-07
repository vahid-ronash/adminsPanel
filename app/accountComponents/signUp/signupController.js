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
        .controller('signUpController', ['$scope','AuthService','$location','$timeout','$filter',function($scope,$AuthService,$location,$timeout,$filter){
            var thisController=this;
            thisController.agreement=false;
            thisController.data={
                email:"",
                password:""
            };
            /**
             * @ngdoc method
             * @name login
             * @methodOf module.signUpController
             * @description
             * it pass credential(username,password,rememberMe) data to authService
             */
            thisController.register=function(){
                if(thisController.data.password!==thisController.repassword){
                    thisController.registerError=$filter('translate')('PASS_NOT_MATCH');
                    thisController.data.password="";
                    thisController.repassword="";
                }
                else if(!thisController.agreement){
                    thisController.registerError=$filter('translate')('CHECK_AGREEMENT');
                }
                else {
                    return $AuthService.register(thisController.data).then(function (result) {
                        if (result.error) {
                            thisController.registerError = result.error;
                        }
                        else {
                            thisController.registerAlert = $filter('translate')('REGISTER_RESPONSE_MSG');;
                        }
                    });
                }
            };
        }]);
})());