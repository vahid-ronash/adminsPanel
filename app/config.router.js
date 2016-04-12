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
        .config(['$httpProvider','$stateProvider','EnvironmentConfig','$urlRouterProvider','$locationProvider',
            function config($httpProvider,$stateProvider,EnvironmentConfig,$urlRouterProvider,$locationProvider) {
                $httpProvider.defaults.xsrfCookieName = 'csrftoken';
                $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

                $stateProvider
                    .state('dashboard',{
                        url:'/dashboard',
                        templateUrl: 'app/dashboard/dashboard.html',
                        controller: 'dashboardController',
                        controllerAs: 'dashboard'
                    })
                    .state('apps',{
                        url:'/apps',
                        templateUrl: 'app/userApplications/userApplications.html',
                        controller: 'userApplicationController',
                        controllerAs: 'appCtrl'
                    })
                    .state('installed', {
                        url:'/installed',
                        templateUrl: 'app/installed/installed.html',
                        controller: 'installedController',
                        controllerAs:'installedCtrl'
                        //resolve: need delay
                    })
                    .state('notification', {
                        url:'/notification',
                        templateUrl: 'app/notifications/notifications.html',
                        controller: 'notificationsController',
                        controllerAs:'notifsCtrl'
                        //resolve: need delay
                    })
                    .state('signin', {
                        url:'/account/signin',
                        templateUrl: 'app/accountComponents/signIn/signinTemplate.html',
                        controller: 'signInController',
                        controllerAs:'signinCtrl',
                        access: {isFree: true}
                        //resolve: need delay
                    })
                    .state('signup', {
                        url:'/account/signup',
                        templateUrl: 'app/accountComponents/signUp/signupTemplate.html',
                        controller: 'signUpController',
                        controllerAs:'signupCtrl',
                        access: {isFree: true}
                        //resolve: need delay
                    })
                    .state('forgotPassword', {
                        url:'/account/forgot-password',
                        templateUrl: 'app/accountComponents/forgotPassword/forgotPasswordTemplate.html',
                        controller: 'forgotPasswordController',
                        controllerAs:'forgotCtrl',
                        access: {isFree: true}
                        //resolve: need delay
                    })
                    .state('changePassword', {
                        url:'/account/change-password',
                        templateUrl: 'app/accountComponents/changePassword/changePassword.html',
                        controller: 'changePasswordController',
                        controllerAs:'changePassCtrl',
                        access: {isFree: false}
                        //resolve: need delay
                    })
                    .state('resetPassword', {
                        url:'/reset-password/:token/',
                        templateUrl: 'app/accountComponents/forgotPasswordDone/forgotPasswordDone.html',
                        controller: 'forgotPasswordDoneController',
                        controllerAs:'resetPassCtrl',
                        access: {isFree: true}
                        //resolve: need delay
                    });
                if (EnvironmentConfig.mode=='production') {
                    $urlRouterProvider.when('', '/dashboard');
                    $urlRouterProvider.otherwise('/dashboard');
                }
                // Hashbang in HTML5 Mode
                // $locationProvider.html5Mode({//server must support (ali vakilzade promised that is support)
                //     enabled: true,
                //     requireBase: false
                // });

            }])
        .run(['$rootScope', '$location', 'AuthService', function ($rootScope, $location, Auth) {
            $rootScope.errorAlert=function(e){
                $rootScope.alertMSG={
                    text:e.error.message,
                    // title:title,
                    className:'alert'
                };
            };

            $rootScope.$on('$routeChangeStart', function (event,locationTO,params) {//,prev
                if (locationTO.redirectTo) {
                    evt.preventDefault();
                    $state.go(locationTO.redirectTo, params);
                    return ;
                }
                if (!(locationTO.access && locationTO.access.isFree) && !Auth.isAuthenticated()) {
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