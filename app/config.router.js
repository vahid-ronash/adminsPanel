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
        .config(['$httpProvider','$stateProvider','EnvironmentConfig','$urlRouterProvider','$locationProvider','noCAPTCHAProvider',
            function config($httpProvider,$stateProvider,EnvironmentConfig,$urlRouterProvider,$locationProvider,noCaptchaProvider) {
                $httpProvider.defaults.xsrfCookieName = 'csrftoken';
                $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

                noCaptchaProvider.setSiteKey('6Ldqxx0TAAAAAO4PTRCSND6hhvomAvnX5EG3Lb6I');
                noCaptchaProvider.setTheme('light');
                noCaptchaProvider.setLanguage('fa');

                $stateProvider
                    .state('users',{
                        templateUrl: 'app/usersPanel/panelTemplate.html',
                        controller: 'usersPanelController',
                        controllerAs: 'panelCtrl'
                    })
                    .state('users.faq',{
                        url:'/faq',
                        templateUrl: 'app/usersPanel/faq/faq.html',
                        controller: 'faqController',
                        controllerAs: 'faqCtrl',
                        pageName:'FAQ'
                    })
                    .state('users.dashboard',{
                        url:'/dashboard',
                        templateUrl: 'app/usersPanel/dashboard/dashboard.html',
                        controller: 'dashboardController',
                        controllerAs: 'dashboardCtrl',
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
                    .state('users.profile', {
                        url:'/account/profile',
                        templateUrl: 'app/accountComponents/profile/profile.html',
                        controller: 'profileController',
                        controllerAs:'profileCtrl',
                        access: {isFree: false}
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

                    // Hashbang in HTML5 Mode
                    // $locationProvider.html5Mode({//server must support (ali vakilzade promised that is support)
                    //     enabled: true,
                    //     requireBase: false
                    // });
                }
            }])
        .run(['$rootScope', '$state', 'AuthService','$templateCache', function ($rootScope, $state, Auth,$templateCache) {
            $rootScope.errorAlert=function(e){
                $rootScope.alertMSG={
                    text:e.error.message,
                    // title:title,
                    className:'alert'
                };
            };

            $templateCache.put('template/smart-table/pagination.html',
                '<nav ng-if="numPages && pages.length >= 2"><ul class="pagination">' +
                '<li ng-class=""><a ng-click="selectPage(currentPage-1)"><i class="fa fa-fw fa-angle-double-right"></i></a></li>' +
                '<li ng-class=""><a ng-click="">{{currentPage}}</a></li>' +
                // '<li ng-repeat="page in currentPage" ng-class="{active: page==currentPage}"><a ng-click="selectPage(page)">{{page}}</a></li>' +
                // '<li ng-repeat="page in pages" ng-class="{active: page==currentPage}"><a ng-click="selectPage(page)">{{page}}</a></li>' +
                '<li ng-class=""><a ng-click="selectPage(currentPage+1)"><i class="fa fa-fw fa-angle-double-left"></i></a></li>' +
                '</ul></nav>');

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