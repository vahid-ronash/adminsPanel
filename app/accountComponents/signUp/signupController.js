/**
 * Created by mojtaba on 3/12/16.
 */
/*global angular */
/**
 * @ngdoc controller
 * @name app.controller.signUpController
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
                password:"",
                gRecaptchaResponse:""
            };
            $scope.$root.ErrorContent=thisController.registerError={err:""};
            thisController.isSigningUp=false;



            /**
             * @ngdoc method
             * @name passChange
             * @methodOf app.controller.signUpController
             * @description
             * it make errors on password change
             */
            thisController.passwordChange=function(){
                var pass=thisController.data.password;
                var $element=$scope.form.password;
                thisController.controlStrength.onChange(pass,$element);
            };

            /**
             * @ngdoc method
             * @name login
             * @methodOf app.controller.signUpController
             * @description
             * it pass credential(username,password,rememberMe) data to authService
             */
            thisController.register=function(){
                thisController.registerError.err="";
                if(thisController.controlStrength.isWeak()){
                    thisController.registerError.err=$filter('translate')('PASS_IS_WEAK');
                }
                else if(thisController.data.password!==thisController.repassword){
                    thisController.registerError.err=$filter('translate')('PASS_NOT_MATCH');
                    thisController.data.password="";
                    thisController.repassword="";
                }
                else if(!thisController.agreement){
                    thisController.registerError.err=$filter('translate')('CHECK_AGREEMENT');
                }   
                else {
                    thisController.isSigningUp=true;
                    return $AuthService.register(thisController.data).then(function (result) {
                        if (result.error) {
                            thisController.registerError.err = result.error;
                        }
                        else {
                            thisController.successed=true;
                        }
                        thisController.isSigningUp=false;
                    });
                }
            };
        }]);
})());