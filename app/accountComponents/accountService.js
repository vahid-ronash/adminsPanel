/**
 * Created by mojtaba on 3/9/16.
 */
/**
 * @ngdoc service
 * @name adminsPanel.service:AuthService
 * @description
 * it make connection between this app and server
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module('app')
        .factory('AuthService', function ($http, Session,$rootScope,URLS) {
            var authService = {};

            /**
             * @ngdoc method
             * @name login
             * @methodOf module.AuthService
             * @description
             * send credential data to server and get response to detect user and save session
             * @param credentials
             */
            authService.login = function (credentials) {
                return $http
                    .post(URLS.URL_LOGIN, credentials)
                    .then(function (res) {
                        var result=res.data;
                        if(result.logged_in)Session.create("asca","dsrfver", "edvedrfv","asdfvsdfv");
                        // if(result.user) {
                        //     Session.create(result.sessionId,result.user.id, result.user.email, result.user.role);
                        // }
                        return result;
                    });
            };

            /**
             * @ngdoc method
             * @name register
             * @methodOf module.AuthService
             * @description
             * send user data to server to register a user
             * @param userData
             */
            authService.register= function (userData) {
                return $http
                    .post(URLS.URL_REGISTER, userData)
                    .then(function (res) {
                        return res.data;
                    });
            };

            /**
             * @ngdoc method
             * @name forgotPassword
             * @methodOf module.AuthService
             * @description
             * send forgot password request
             * @param userData
             */
            authService.forgotPassword= function (userData) {
                return $http
                    .post(URLS.URL_FORGOTPASS, userData)
                    .then(function (res) {
                        return res.data;
                    });
            };

            /**
             * @ngdoc method
             * @name changePassword
             * @methodOf module.AuthService
             * @description
             * reset users password
             * @param userData
             */
            authService.changePassword= function (userData) {
                return $http
                    .post(URLS.URL_CHANGE_PASS, userData)
                    .then(function (res) {
                        return res.data;
                    });
            };

            /**
             * @ngdoc method
             * @name logout
             * @methodOf module.AuthService
             * @description
             * send logout to server and destroy session
             */
            authService.logout= function () {
                return $http
                    .get(URLS.URL_LOGOUT)
                    .then(function () {
                        Session.destroy();
                    });
            };

            /**
             * @ngdoc method
             * @name isAuthenticated
             * @methodOf module.AuthService
             * @description
             * determine user is logged in or not
             */
            authService.isAuthenticated = function () {
                return !!Session.userId;
            };

            /**
             * @ngdoc method
             * @name getUserEmail
             * @methodOf module.AuthService
             * @description
             * determine user is logged in or not
             */
            authService.getUserEmail= function () {
                return Session.email;
            };

            /**
             * @ngdoc method
             * @name isAuthorized
             * @methodOf module.AuthService
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