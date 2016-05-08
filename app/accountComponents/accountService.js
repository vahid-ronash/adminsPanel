/**
 * Created by mojtaba on 3/9/16.
 */
/*global angular */
((function() {
    'use strict';
    /**
     * @ngdoc service
     * @name app.services.AuthService
     * @description
     * it make connection between this app and server
     */
    angular
        .module('app')
        .factory('AuthService', function ($http, Session,$rootScope,URLS,$timeout) {
            var authService = {};

            /**
             * @ngdoc method
             * @name login
             * @methodOf app.services.AuthService
             * @description
             * send credential data to server and get response to detect user and save session
             * @param {object}  userData     contain login data
             */
            authService.login = function (userData) {
                return $http
                    .post(URLS.URL_LOGIN,userData,{
                        // transformRequest: add_auth_header,
                    })
                    .then(function (res) {
                        var result=res.data;
                        if(result.logged_in){Session.create(result.email);}
                        return result;
                    },$rootScope.handleError);
            };
            //TODO  pushe.co/accounting/{TOKEN}/activate_account | POST | {"activated": True}

            /**
             * @ngdoc method
             * @name register
             * @methodOf app.services.AuthService
             * @description
             * send user data to server to register a user
             * @param {object}  userData     contain register data
             */
            authService.register= function (userData) {
                return $http
                    .post(URLS.URL_REGISTER, userData)
                    .then(function (res) {
                        return res.data;
                    },$rootScope.handleError);
            };

            /**
             * @ngdoc method
             * @name forgotPassword
             * @methodOf app.services.AuthService
             * @description
             * send forgot password request
             * @param {object}  userData     contain forgot data
             * pushe.co/accounting/reset_password | POST | {"mail_sent": True}
             */
            authService.forgotPassword= function (userData) {
                return $http
                    .post(URLS.URL_FORGOTPASS, userData)
                    .then(function (res) {
                        return res.data;
                    },$rootScope.handleError);
            };


            /**
             * @ngdoc method
             * @name resetPassword
             * @methodOf app.services.AuthService
             * @description
             * user forgot the password use this option to reset password
             * pushe.co/accounting/{TOKEN}/reset_password_done | POST | {"reset_completed": True}
             * @param {object}  tokenPass     contain change Password data( token , new password)
             */
            authService.resetPassword= function (tokenPass) {
                var passdata={password:tokenPass.password};
                return $http
                    .post("api/accounting/"+tokenPass.token+"/reset_password_done/", passdata)
                    .then(function (res) {
                        return res.data;
                    },$rootScope.handleError);
            };

            /**
             * @ngdoc method
             * @name changePassword
             * @methodOf app.services.AuthService
             * @description
             * reset users password
             * pushe.co/accounting/change_password | POST | {"changed": True}
             * @param {object}  userData     contain change Password data
             *
             */
            authService.changePassword= function (userData) {
                return $http
                    .post(URLS.URL_CHANGE_PASS, userData)
                    .then(function (res) {
                        return res.data;
                    },$rootScope.handleError);
            };

            /**
             * @ngdoc method
             * @name changeEmail
             * @methodOf app.services.AuthService
             * @description
             * reset users email
             */
            authService.changeEmail= function (userData) {
                return $http 
                    .post(URLS.URL_CHANGE_PASS, userData)//FIXME:url must change
                    .then(function (res) {
                        return res.data;
                    },$rootScope.handleError);
            };
            
            /**
             * @ngdoc method
             * @name logout
             * @methodOf app.services.AuthService
             * @description
             * send logout to server and destroy session
             * pushe.co/accounting/logout | GET | {"logged_out": True}
             */
            authService.logout= function () {
                return $http
                    .get(URLS.URL_LOGOUT)
                    .then(function (result) {
                        if(result.data.logged_out) {
                            Session.destroy();
                            $timeout(function () { $location.path('/account/signin'); }, 10);
                        }
                    },$rootScope.handleError);
            };

            /**
             * @ngdoc method
             * @name isAuthenticated
             * @methodOf app.services.AuthService
             * @description
             * determine user is logged in or not
             */
            authService.isAuthenticated = function () {
                return Session.isAuth();
            };

            /**
             * @ngdoc method
             * @name getUserEmail
             * @methodOf app.services.AuthService
             * @description
             * determine user is logged in or not
             */
            authService.getUserEmail= function () {
                if(Session.user)
                    return Session.user.email;
            };


            /**
             * @ngdoc method
             * @name getProfileInfo
             * @methodOf app.services.AuthService
             * @description
             * load user's profile informations
             */
            authService.getProfileInfo= function (callback) {
                $http.get(URLS.URL_GET_PROFILE).then(function (result) {
                    callback(result.data);
                },$rootScope.handleError);
            };

            /**
             * @ngdoc method
             * @name isAuthorized
             * @methodOf app.services.AuthService
             * @description
             * set or get user access
             */
            //authService.isAuthorized = function (authorizedRoles) {
            //    if (!angular.isArray(authorizedRoles)) {
            //        authorizedRoles = [authorizedRoles];
            //    }
            //    return (authService.isAuthenticated() &&
            //    authorizedRoles.indexOf(Session.userRole) !== -1);
            //};

            return authService;
        });
})());