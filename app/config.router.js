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
                    .state('users',{
                        templateUrl: 'app/usersPanel/panelTemplate.html',
                        controller: 'usersPanelController',
                        controllerAs: 'panelCtrl'
                    })
                    .state('users.dashboard',{
                        url:'/dashboard',
                        templateUrl: 'app/usersPanel/dashboard/dashboard.html',
                        controller: 'dashboardController',
                        controllerAs: 'dashboard',
                        pageName:'DASHBOARD'
                    })
                    .state('users.apps',{
                        url:'/apps',
                        templateUrl: 'app/usersPanel/userApplications/userApplications.html',
                        controller: 'userApplicationController',
                        controllerAs: 'appCtrl',
                        pageName:'APPLICATIONS_LIST'
                    })
                    .state('users.installed', {
                        url:'/installed',
                        templateUrl: 'app/usersPanel/installed/installed.html',
                        controller: 'installedController',
                        controllerAs:'installedCtrl',
                        //resolve: need delay
                        pageName:'INSTALLED'

                    })
                    .state('users.notification', {
                        url:'/notification',
                        templateUrl: 'app/usersPanel/notifications/notifications.html',
                        controller: 'notificationsController',
                        controllerAs:'notifsCtrl',
                        //resolve: need delay
                        pageName:'NOTIFICATIONS'

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
                    .state('users.changePassword', {
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
        .run(['$rootScope', '$state', 'AuthService', function ($rootScope, $state, Auth) {
            $rootScope.errorAlert=function(e){
                $rootScope.alertMSG={
                    text:e.error.message,
                    // title:title,
                    className:'alert'
                };
            };

            $rootScope.$on('$stateChangeStart', function (event,toState,toParams) {//,prev
                if (toState.redirectTo) {
                    evt.preventDefault();
                    $state.go(toState.redirectTo, toParams);
                    return ;
                }
                if(Auth.isAuthenticated()){
                    if (toState.access && toState.access.isFree){
                        if(toState.name=="signin" || toState.name=="signup"){
                            event.preventDefault();
                            $state.go('users.dashboard');
                        }
                    }
                }
                else if (!(toState.access && toState.access.isFree)) {
                    event.preventDefault();
                    $state.go('signin');
                }
                if(toState.pageName)$rootScope.currentPageName=toState.pageName;
                // if($(".modal-backdrop").length){
                //     $(".modal-backdrop").remove();
                //     $(document.body).removeClass("modal-open");
                // }
            });
        }]);
})());