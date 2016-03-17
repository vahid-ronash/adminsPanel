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
        .config(['$routeProvider',// '$locationProvider' ,
            function config( $routeProvider) {//$locationProvider ,  MODULE_CONFIG ) {
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
                    })
                    .otherwise({
                        // if the path doesn't match any of the urls you configured
                        redirectTo: '/home'
                    });

                // configure html5 to get links working on jsfiddle
                //TODO:$locationProvider.html5Mode(true); server must support
            }]
        )
        .run(['$rootScope', '$location', 'AuthService', function ($rootScope, $location, Auth) {
            $rootScope.$on('$routeChangeStart', function (event,cur) {//,prev
                if (!(cur.access && cur.access.isFree) && !Auth.isAuthenticated()) {
                    event.preventDefault();
                    $location.path('/account/signin');
                }
                if($(".modal-backdrop").length){
                    $(".modal-backdrop").remove();
                    $(document.body)
                        .removeClass("modal-open");
                    //if (window.removeEventListener)
                    //    window.removeEventListener('DOMMouseScroll', preventDefault, false);
                    //window.onmousewheel = document.onmousewheel = null;
                    //window.onwheel = null;
                    //window.ontouchmove = null;
                    //document.onkeydown = null;
                }
            });
        }]);
})());
//((function() {
//    'use strict';
//    angular
//        .module('app')
//        // get executed after the injector is created and are used to kickstart the application.
//        // Only instances and constants can be injected into run blocks.
//        // This is to prevent further system configuration during application run time.
//        //.run(['$rootScope', '$state', '$stateParams',
//        //    function ($rootScope,   $state,   $stateParams) {
//        //        $rootScope.$state = $state;
//        //        $rootScope.$stateParams = $stateParams;
//        //    }])
//        //.config(['$stateProvider', '$urlRouterProvider' , //'MODULE_CONFIG',
//        .config(['$routeProvider', '$locationProvider' ,
//            function config( $routeProvider, $locationProvider) {//,   MODULE_CONFIG ) {
//
//                // if the path doesn't match any of the urls you configured
//                // otherwise will take care of routing the user to the specified url
//                //$urlRouterProvider.otherwise('/home');
//                $routeProvider
//                    .when('/home', {
//                        templateUrl: 'app/home/home.html',
//                        controller: 'homeController as home',
//                        //resolve: {
//                        // I will cause a 1 second delay
//                        //delay: function($q, $timeout) {
//                        //    var delay = $q.defer();
//                        //    $timeout(delay.resolve, 1000);
//                        //    return delay.promise;
//                        //}
//                        //}
//                    })
//                    .otherwise({
//                        redirectTo: '/home'
//                    });
//
//                // configure html5 to get links working on jsfiddle
//                //TODO:$locationProvider.html5Mode(true); server must support
//
//                //config urls and their state names
//            //    $stateProvider
//            //         .state('home', {
//            //            url: '/home',
//            //            templateUrl: 'app/home/home.html',
//            //            controller: 'homeController',
//            //            controllerAs: 'home'
//            //            //resolve: lazyLoadDependencies(['scripts/controllers/chart.js'])//to load libraries by lazyload in controllers
//            //        })
//            //        .state('app.page.profile', {
//            //            url: '/profile',
//            //            templateUrl: '../views/page/profile.html',
//            //            data : { title: 'Profile' }
//            //        })
//            //        .state('404', {
//            //            url: '/404',
//            //            templateUrl: '../views/misc/404.html'
//            //        })
//            //        .state('505', {
//            //            url: '/505',
//            //            templateUrl: '../views/misc/505.html'
//            //        })
//            //        .state('access.signin', {
//            //            url: '/signin',
//            //            templateUrl: '../views/misc/signin.html'
//            //        })
//            //        .state('access.signup', {
//            //            url: '/signup',
//            //            templateUrl: '../views/misc/signup.html'
//            //        })
//            //        .state('access.forgot-password', {
//            //            url: '/forgot-password',
//            //            templateUrl: '../views/misc/forgot-password.html'
//            //        });
//            //
//            //    /* function lazyLoadDependencies(srcs, callback) {
//            //        return {
//            //            deps: ['$ocLazyLoad', '$q',
//            //                function( $ocLazyLoad, $q ){
//            //                    var deferred = $q.defer();
//            //                    var promise  = false;
//            //                    srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
//            //                    if(!promise){
//            //                        promise = deferred.promise;
//            //                    }
//            //                    angular.forEach(srcs, function(src) {
//            //                        promise = promise.then( function(){
//            //                            angular.forEach(MODULE_CONFIG, function(module) {
//            //                                if( module.name == src){
//            //                                    src = module.module ? module.name : module.files;
//            //                                }
//            //                            });
//            //                            return $ocLazyLoad.load(src);
//            //                        } );
//            //                    });
//            //                    deferred.resolve();
//            //                    return callback ? promise.then(function(){ return callback(); }) : promise;
//            //                }]
//            //        }
//            //    }*/
//            }]);
//})());
