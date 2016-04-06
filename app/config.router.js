/**
 * @ngdoc function
 * @name app.config:uiRouter
 * @description
 * # Config
 * Config for the router
 */
/*global angular $ */
((function() {
    'use strict';
    angular
        .module('app')
        .config(function($httpProvider){
            $httpProvider.defaults.xsrfCookieName = 'csrftoken';
            $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
        })
        .config(['$routeProvider','EnvironmentConfig',// '$locationProvider' ,
            function config($routeProvider,EnvironmentConfig) {//$locationProvider  ) {
                $routeProvider
                    .when('/home', {
                        templateUrl: 'app/home/home.html',
                        controller: 'homeController as home'
                        //resolve: need delay
                    })
                    .when('/apps', {
                        templateUrl: 'app/userApplications/userApplications.html',
                        controller: 'userApplicationController as appCtrl'
                        //resolve: need delay
                    })
                    .when('/installed', {
                        templateUrl: 'app/installed/installed.html',
                        controller: 'installedController as installedCtrl'
                        //resolve: need delay
                    })
                    .when('/notification', {
                        templateUrl: 'app/notifications/notifications.html',
                        controller: 'notificationsController as notifsCtrl'
                        //resolve: need delay
                    })
                    .when('/account/signin', {
                        templateUrl: 'app/accountComponents/signIn/signinTemplate.html',
                        controller: 'signInController as signinCtrl',
                        access: {isFree: true}
                        //resolve: need delay
                    })
                    .when('/account/signup', {
                        templateUrl: 'app/accountComponents/signUp/signupTemplate.html',
                        controller: 'signUpController as signupCtrl',
                        access: {isFree: true}
                        //resolve: need delay
                    })
                    .when('/account/forgot-password', {
                        templateUrl: 'app/accountComponents/forgotPassword/forgotPasswordTemplate.html',
                        controller: 'forgotPasswordController as forgotCtrl',
                        access: {isFree: true}
                        //resolve: need delay
                    })
                    .when('/account/change-password', {
                        templateUrl: 'app/accountComponents/changePassword/changePassword.html',
                        controller: 'changePasswordController as changePassCtrl',
                        //resolve: need delay
                    });
                if (EnvironmentConfig.mode=='production') {
                    $routeProvider
                        .when('/', {
                            redirectTo: '/home'
                        })
                        .otherwise({
                            // if the path doesn't match any of the urls you configured
                            redirectTo: '/home'
                        });
                }
                // configure html5 to get links working on jsfiddle
                //TODO:$locationProvider.html5Mode(true); server must support
            }])
        .run(['$rootScope', '$location', 'AuthService', function ($rootScope, $location, Auth) {
            $rootScope.$on('$routeChangeStart', function (event,cur) {//,prev
                if (!(cur.access && cur.access.isFree) && !Auth.isAuthenticated()) {
                    event.preventDefault();
                    $location.path('/account/signin');
                }
                if($(".modal-backdrop").length){
                    $(".modal-backdrop").remove();
                    $(document.body).removeClass("modal-open");
                }
            });
        }]);
})());